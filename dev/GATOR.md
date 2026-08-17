# The gator

An alligator swims down the page as you scroll. It is decorative, but it is not thoughtless, and
it has more edge cases than anything else in this repo.

Lives at the end of `assets/app.js` in the `window.__gator` IIFE. Canvas, fixed position,
`z-index: 0`, `pointer-events: none`.

## What it draws

**Three shapes, not an alligator.** What you actually see of a gator floating in a Florida river
is the snout, the arch of the back, and the tail — everything between is underwater. That is what
this draws, in plan view, with the submerged parts simply absent.

- `PIECES` defines the three surfacing sections with half-width profiles along the body.
- Outlines only, no interior marks. The **eye ridge is a bulge in the head's width profile**, so
  it is part of the silhouette rather than a mark drawn inside it.
- Each closed outline is one continuous spline (quadratic through edge midpoints).
- The undulation ramps toward the tail and is squared, so the head stays steady while the tail
  does the moving — which makes the three pieces shift against each other as a real one's do.

## How it moves

**It chases scroll rather than being pinned to it.** Position is a damped pursuit of a
scroll-derived target with a **separate speed ceiling per axis**, and the vertical ceiling is the
tighter of the two (`MAX_VY` 260 vs `MAX_VX` 800 px/sec).

That single asymmetry produces the intended behaviour without special-casing:

| Scroll speed | Angle | What is happening |
|---|---|---|
| Reading pace | ~43° | under both ceilings — tracks the target, natural downward drift |
| Brisk | ~28° | vertical ceiling crossed, horizontal still free |
| Flick | ~18° | both saturated — swept by the current |

Heading comes from **actual velocity**, not the target's, so it always points where it is
genuinely going. If you make only the angle velocity-dependent while position stays
scroll-derived, it crabs sideways and looks broken.

Consequence to accept: it is no longer a pure function of scroll position. Scroll down and back
up and it will not land in precisely the same spot. That is what makes it read as a creature
rather than a scrollbar ornament.

**Lateral reach** is `W * 0.46 + max(0, 520 - W * 0.22)`. The second term grows as the viewport
shrinks, which gives two behaviours from one expression: on a wide screen it weaves out into the
page margins and stays visible; on a narrow one it swims off the edge and back.

## Occlusion

`.band` sections are **deliberately transparent**. An opaque section background hid the gator for
its entire length, which is what killed the effect originally. Only actual components — cards,
panels, the dossier reader — occlude him, so he passes behind content and reappears in the gaps.
The sectioning rhythm is carried by hairline rules instead.

This works because `body > main` carries `z-index: 1` against the canvas's `0`.

## Things that will bite you

- **Reduced motion** is a hard opt-out and never mounts.
- The **width gate is dynamic**. It was evaluated once at load, so widening the window past 1000px
  left him permanently absent. A `ResizeObserver` on `documentElement` also catches contexts that
  lay out after scripts run and report `innerWidth: 0`.
- **`window.__gator.pos()`** returns his live position and heading. Use it to measure — pixel
  centroids are useless here, because the tail's swing reads as ~900 px/s of phantom velocity.
- The body is built along local −x from the snout at the origin, so heading is simply the
  direction of travel. Adding `Math.PI` makes him swim backwards. It did, once.
