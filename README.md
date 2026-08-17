# UF STEM Research Map

An opinionated map of the University of Florida's STEM research landscape, built to answer
one question a course catalogue cannot: **where should an ambitious undergraduate actually
spend four years?**

It is a research project first and a website second. Four long-form documents carry the
argument and the sources; the site turns them into something you can navigate, filter and act on.

**Live site:** serve `site/` on any static host — no build step.
**Start with:** [`docs/UF-STEM-Research-Map.md`](docs/UF-STEM-Research-Map.md)

---

## What's in here

| Path | What it is |
|---|---|
| `docs/` | The four research documents. Every substantive claim carries a source link, and each ends with a verification-flag section listing what could **not** be confirmed. |
| `site/` | The static site — six pages, no framework, no dependencies, no build. |
| `dev/` | Development notes for the parts that aren't obvious: architecture, the map pipeline, the gator, and the copy audit. |
| `tools/` | Two runnable scripts: the geography build and the copy audit. |
| `archive/` | The original single-file prototype, kept for reference. |

## The four documents

1. **[Research Map](docs/UF-STEM-Research-Map.md)** — 21 domains tiered by standing against
   how hard it is for an undergraduate to get in. The core argument: UF's elite pockets are
   narrow, specific and open to undergraduates, and the gap between two labs *inside* UF is
   bigger than the gap between UF and an Ivy.
2. **[Clubs & Teams](docs/UF-STEM-Clubs-Map.md)** — the other track. UF's competition teams are
   nationally dominant in a way no UF academic department is: five consecutive Steel Bridge
   national titles, five Concrete Canoe.
3. **[Study Abroad](docs/UF-STEM-Study-Abroad-Map.md)** — 55 exchange destinations, ten elite
   fellowships and two UF endorsement slots. The marketing and the prestige point in opposite
   directions.
4. **[China](docs/China-STEM-Opportunities-Map.md)** — the education element first, because
   most American students have no frame for these names. Tsinghua is ranked first in the world
   in AI while American attendance in China has fallen 82%.

## Running the site

```bash
cd site && python3 -m http.server 8000
```

Then open <http://localhost:8000>. That is the whole toolchain. The site is plain HTML, CSS
and JavaScript with all data inlined, so it also works from `file://` for everything except
`fetch()`-based checks.

## The one rule this project runs on

**Distinguish what is verified from what is inferred, visibly, in the artefact itself.**

Every unverified claim carries a marker you can click. Inferred graduate destinations render
with dashed lines while documented partnerships render solid. Places UF has *no* connection to
are drawn as hollow points rather than omitted. The **Skeptic mode** toggle in the header marks
every flagged claim inline across the whole site.

A map that only showed the good news would be marketing. The absences are frequently the most
useful thing on the page.

## Contributing content

Almost everything lives in `site/assets/data.js` and `site/assets/mapdata.js`. Add a domain to
`DOMAINS`, a club to `CLUBS`, an exchange destination to `EXCHANGE`, a deadline to `CAL` — the
pages pick it up automatically. See [`dev/ARCHITECTURE.md`](dev/ARCHITECTURE.md).

If you add a claim, add its source. If you cannot source it, add a flag to `FLAGS` and reference
it — an honestly-marked gap is worth more than a confident guess.

## Licence and provenance

Research compiled 16–17 August 2026 from public sources. This is an independent reading of
public information and is **not affiliated with or endorsed by the University of Florida**.

Geography is derived at build time from public-domain Natural Earth data via
[world-atlas](https://github.com/topojson/world-atlas) and
[us-atlas](https://github.com/topojson/us-atlas), and inlined so the site makes no external requests.
