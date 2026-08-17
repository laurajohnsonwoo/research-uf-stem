# The maps

Two maps, one geography pipeline. Both are hand-rolled SVG — no Leaflet, no Mapbox, no tiles.
That was a deliberate call: external tiles mean external requests and a generic map aesthetic
that fights the survey-chart identity of the rest of the site.

## The geography pipeline

`assets/geo.js` is **generated**. Do not hand-edit it.

```bash
cd tools
curl -O https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json
curl -O https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json
python3 build-geo.py .
# writes geo.js — copy it to ../site/assets/geo.js
```

`build-geo.py` decodes TopoJSON (delta-encoded, quantised), projects it, simplifies with
Douglas–Peucker, and emits SVG path strings plus the projection constants used to make them.

**The projection constants are the important output.** `app.js` reimplements the same two
projections in JavaScript and reads `GEO_US.t` / `GEO_WORLD.t` for scale and offset. That is why
plotted points land exactly on the coastlines instead of approximately near them. If you change
a projection, change it in both places.

- **US** — Albers conic (standard parallels 29.5° / 45.5°, central meridian −96°), lower 48 only.
- **World** — Equal Earth, latitude clipped to −58…84.

Both negate Y. Standard formulations return Y increasing northward; SVG needs it increasing
downward. Get this wrong and Miami plots above Seattle — which it did, once.

### Simplification is a zoom decision

The world was originally built from `countries-110m` at 1.0px tolerance, which was fine at world
scale and faceted badly once regional views zoomed ~7×. It is now `countries-50m` at 0.22px:
806 rings, 254 KB. Heavier, but it is one cached file. **If you add deeper zoom levels, lower
the tolerance again.**

## The US map (`map.html`)

Institution-centric. Each node is a place; clicking lists every documented UF connection to it.

**No arcs.** There were, briefly. With 44 person-level links converging on a dozen coastal
universities the lines crossed the country in a tangle that hid the thing they were meant to
show. Node size now encodes connection count instead.

Line and fill styles encode **evidence strength**, not just category:

| Style | Meaning |
|---|---|
| Solid, filled | Documented — a named consortium, joint hub or verified person |
| Dashed | Inferred — graduate destinations, which have no placement data behind them |
| Hollow, no arc | UF has **no** tie. The absence is the finding. |

## The world map (`map.html`)

Five regional tabs: Europe, East Asia, Oceania & SE Asia, Middle East & Africa, Americas.

**Zoom is a viewBox crop.** The coastlines are already in projected space, so a region view costs
nothing — compute the projected corners of the region's lon/lat box and set the viewBox. No
re-projection.

Regions are defined in `WORLD_REGION` with a country list and a bounding box. Asia was one tab
until China's C9 arrived and made it span 92° of latitude; splitting it was cartographic, not
cosmetic.

### Label placement

Labels are a toggleable layer, **off by default** — 47 persistent labels in Europe is unreadable.
With the layer off, hovering or selecting still reveals that one name.

When on, placement is two-pass and greedy:

1. Render every label hidden, then measure with `getComputedTextLength()`. **Estimating width
   from character count runs ~15% short** and lets labels overlap.
2. Sort by importance, try four positions per label (right, left, above, below), and **drop any
   that still collides or falls outside the frame**.

Three things the boxes must account for, each of which caused a visible bug:

- the **stroke halo** bleeds outward, so the painted box is wider than the glyph box
- a label outside the **viewBox** is clipped by the SVG edge and reads as running into the panel
- the active node is **moved last in the DOM**, because SVG paints in document order

A dropped label is recoverable by hovering. Two labels written over each other are not.

### Sizing inside a scaled SVG

Anything sized in CSS pixels inside the SVG is interpreted in **user units** and then multiplied
by the viewBox scale (~6.3× in Europe). A `stroke-width: 2px` selection ring rendered at ~12px
with a 31px blur. Everything scale-dependent goes through the `px()` helper, which converts
desired screen pixels to user units using the *actual* rendered container width — not an assumed
1000px, which made labels ~60% of their intended size.
