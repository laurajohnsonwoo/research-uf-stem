# Instructions for coding agents

This file is read by Claude Code, Codex, Cursor and similar tools. It tells you how to work in
this repo. Read `README.md` for what the project is; read this for how to change it.

## What this repo is for

Two things at once:

1. **A research artefact** — four documents and a site mapping UF's STEM landscape.
2. **A contextual baseline for a long campaign.** Someone is using this to decide which labs,
   clubs and programmes to pursue, then to actually pursue them, over multiple semesters. Your
   job is usually the second thing.

The research is the substrate. The campaign is the work.

## The one rule

**Every substantive claim is either sourced or flagged. There is no third category.**

When you add a claim to `site/assets/data.js` or `mapdata.js`:

- **Sourced** — put the URL in the entry's `srcs`, or in `LINKS` if the name should auto-link
  site-wide. **Verify the URL resolves before adding it.** `curl -sL -o /dev/null -w "%{http_code}"`.
- **Not sourced** — add an entry to `FLAGS` and wrap the text: `claim(text, "flag-key")`. It
  renders a clickable marker and lights up under Skeptic mode.
- **Inferred rather than observed** — say so in the flag, *and* make the rendering differ.
  Inferred graduate destinations draw dashed; documented partnerships draw solid.

Never invent a citation. Never state an inference as an observation. An honestly-marked gap is
worth more than a confident guess — the project's whole argument depends on the reader being able
to tell which is which.

## Persistent campaign state

Work that spans sessions goes in `campaign/`. It is gitignored by default so it can hold personal
notes; remove that line if the user wants it tracked.

| File | Holds |
|---|---|
| `campaign/targets.md` | The shortlist — PIs, clubs, programmes, with status per row |
| `campaign/outreach.md` | Every email sent: who, when, what was said, what came back |
| `campaign/decisions.md` | Choices made and the reasoning, so they are not relitigated |
| `campaign/questions.md` | Open questions for the human, and flags worth closing |

**Read these before starting any campaign work.** They are the memory. Append rather than
rewrite; date every entry. If the user tells you an outcome, record it before doing anything else.

## Changing the site

- Content lives in `site/assets/data.js` and `mapdata.js`. Pages pick up new entries
  automatically — add a domain to `DOMAINS`, a club to `CLUBS`, a destination to `EXCHANGE`.
- `site/assets/geo.js` is **generated**. Do not hand-edit. Regenerate with `tools/build-geo.py`.
- New renderers go at the bottom of `app.js` inside the existing `queueMicrotask()` block.
  Calling them inline throws a temporal-dead-zone error — see `dev/ARCHITECTURE.md`.
- Never declare a colour only inside a `@media` or `[data-theme]` block.

## Verify before claiming done

```bash
node --check site/assets/app.js && node --check site/assets/data.js && node --check site/assets/mapdata.js
python3 tools/audit-copy.py
cd site && python3 -m http.server 8000
```

Then check it in a browser: both themes, Skeptic mode on and off, no console errors. **Do not
report a UI change as working without loading the page.** Several bugs in this repo's history
were invisible to static inspection — labels clipped at an SVG edge, a selection ring rendering
at six times its intended size, a renderer silently dead from a hoisting error.

## Writing

Run `python3 tools/audit-copy.py` before finishing prose work. Read `dev/AUDIT.md` first — the
short version:

- Fix headings before body copy; that is where the tics concentrate.
- Never blanket find-and-replace. Most `, and the` in body copy is legitimate English.
- Zero is the wrong target. Paired em-dashes do real syntactic work.

## Things not to do

- Don't add a Chinese or Canadian institution to the "exchange" layer. UF has no agreement with
  either; they belong in `WORLD_NOROUTE`, which says so.
- Don't remove an absence to make the map look better. The absences are frequently the most
  useful thing on the page.
- Don't convert the site to a framework. No build step is a feature — this has to survive years
  of occasional edits.
- Don't email anyone, submit anything, or contact a professor on the user's behalf. Draft it,
  show it, let them send it.
