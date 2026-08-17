# Architecture

Plain static HTML, CSS and JavaScript. No framework, no bundler, no dependencies, no build step
for the site itself. This is deliberate: the project's lifespan is measured in years of
occasional edits by whoever inherits it, and a toolchain is a thing that rots.

```
site/
  index.html      Research   — focus map, dossier reader, outcomes, people index
  clubs.html      Clubs & teams
  abroad.html     Study abroad — fellowships, placements, 55 exchanges, China
  map.html        Connections map — US institutions + the regional world map
  calendar.html   The application year, all tracks on one timeline
  playbook.html   Escalation ladder, cold email, target-a-school, evidence layer

  assets/styles.css   design system and every component
  assets/data.js      research datasets + FLAGS + EVIDENCE
  assets/mapdata.js   geographic node data (institutions, ties, coordinates)
  assets/geo.js       generated — projected coastline paths, do not hand-edit
  assets/app.js       all renderers
```

## How a page works

Every page loads the same `assets/*.js`. `app.js` contains every renderer, and each is guarded
so a page runs only what it actually contains:

```js
if (has("#mapstage")) drawMap();
if (has("#clubgrid")) drawClubs();
```

Add a section by putting an element with the right `id` in the HTML. The renderer finds it.

### One trap, documented because it bit three times

Renderers that read module-level `const` tables (`TIE`, `ROUTE`, `WORLD_REGION`, `worldState`)
**cannot be called inline from the boot block**. Function declarations hoist; `const` does not.
If the call sits above the table it needs, you get a temporal-dead-zone `ReferenceError` and a
silently blank section.

They are therefore invoked at the bottom of `app.js` inside `queueMicrotask()`, which defers
until the whole script has evaluated. **Position in the file stops mattering.** Add new
renderers there.

## Shared systems worth knowing about

**Filter state** — `state.tags` is one `Set` shared by the focus map, the dossier rail, the
outcomes matrix, the club grid and the people index, persisted to `localStorage`. Filtering to
"Computing & AI" narrows all of them at once.

**`claim(html, flagKey)`** — wraps any string in a clickable marker tied to an entry in `FLAGS`.
This is how the epistemics reach the surface. If you write a claim you cannot source, give it a
flag rather than stating it plainly.

**`linkify(root)`** — walks rendered text nodes and links known names (programmes, labs,
institutions) from the `LINKS` map. It links each term **once per container** to avoid turning
prose into a wall of blue. Where every instance must be clickable — a list of recommended
institutions, say — link them explicitly instead; see `instList()` in the China renderer.

**`PERSON_INDEX`** — joins names on the maps to the people in `DOMAINS`, matching on first+last
with middle initials stripped, so "Brent Sumerlin" finds "Brent S. Sumerlin". Gives every person
a link to their source page and a link through to the dossier describing their work.

**Section nav** — built automatically from `<section data-nav="Short label">`. Add a section,
get a tab. Hidden on pages with fewer than two sections. Scroll-spy is scroll-driven rather than
`IntersectionObserver`, because these sections are taller than the viewport and "is it
intersecting" is true for several at once.

## Theming

Tokens in `:root`, redefined twice — once under `@media (prefers-color-scheme: dark)` guarded as
`:root:not([data-theme="light"])`, once under `:root[data-theme="dark"]`. Never declare a colour
only inside a media or `[data-theme]` block: it will not apply in the un-stamped default state,
and you get one theme's text on the other theme's background.

Two sizing tokens matter more than they look: `--mast-h` and `--nav-h` drive the sticky offsets
for the masthead, the section nav, the dossier rail and every `scroll-margin-top`. Change them
in one place.
