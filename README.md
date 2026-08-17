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
| `method/` | **The transferable part.** How to run this on any institution — the tiering rubric, the access-friction scale, the evidence discipline, and the runbook. |
| `dev/` | Development notes: architecture, the map pipeline, the gator, the copy audit, and the agent playbook. |
| `tools/` | Two runnable scripts: the geography build and the copy audit. |
| `campaign/` | Persistent workspace for agent-assisted work — targets, outreach log, decisions. Gitignored by default. |
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

## Hand this to an agent

This repo is built to be given to a coding agent — Claude Code, Codex, Cursor, whatever you use —
as the context for a campaign that runs over semesters rather than a single conversation.

Clone it, open it in your agent, and start there. It will read [`AGENTS.md`](AGENTS.md)
automatically for how to work in the repo. You should read
[`dev/AGENT-PLAYBOOK.md`](dev/AGENT-PLAYBOOK.md) for what to ask it.

**A reasonable first prompt:**

> Read `docs/UF-STEM-Research-Map.md` and `AGENTS.md`. I'm a [year] in [major], I care about
> [what you actually care about], and I'm aiming for [PhD / industry / undecided]. Give me five
> targets ranked, tell me what you're trading off in each, and write the shortlist to
> `campaign/targets.md` with your reasoning in `campaign/decisions.md`.

From there the useful asks cluster into phases — orientation, outreach, closing the open evidence
flags, extending the research, and keeping it from going stale. The playbook covers each with
example prompts.

**Why this works better than pasting a document into a chat.** The agent gets ~200 named
researchers with sources, 44 documented person-level ties between UF and other institutions,
every dated deadline, and — the part that matters most — an explicit list of roughly 30 things the
research could *not* confirm. It knows what it doesn't know, which is what stops it inventing.

**The state lives in `campaign/`**, so the follow-up conversation in January knows what you sent
in September. It's gitignored by default, since outreach notes are personal.

**One boundary worth stating plainly:** the agent drafts, researches, tracks and reminds. It does
not email professors, submit applications, or accept anything on your behalf. Every outward action
is yours to take.

## Deploying — drag and drop

The site is plain static files with no build step, so it deploys by dragging a folder onto a host.

**Drag the `site/` folder — not the repo root.** The repo root has no `index.html` at its top
level, so dropping the whole thing gives you a 404 on every page.

### Netlify

1. Go to <https://app.netlify.com/drop>
2. Drag the **`site/`** folder onto the page
3. It is live in a few seconds on a random `*.netlify.app` URL

No account is required to deploy, though you will want one to keep the URL, rename the site, or
add a custom domain. To update, drag the folder again — same page, same steps.

`site/netlify.toml` is already configured with security headers and cache rules. Assets are not
fingerprinted (a filename never changes when its contents do), so it tells the CDN to revalidate
rather than serve stale JavaScript against new HTML after a redeploy.

### Anywhere else

The same folder works unchanged on Cloudflare Pages (drag onto *Upload assets*), GitHub Pages,
Vercel, S3, or any nginx docroot. Every path in the site is relative, so it also works from a
subdirectory — `example.com/uf-map/` needs no changes.

To check it locally before deploying:

```bash
cd site && python3 -m http.server 8000
```

### What is in the deployed folder

```
site/           ~700 KB total, 6 pages + a 404
  assets/       styles, data, renderers, and the projected geography
  netlify.toml  headers and caching
  404.html      styled to match, links back to the six pages
```

`site/README.md` ships with it and is harmless — it is never served unless something links to it.

## Contributing content

Almost everything lives in `site/assets/data.js` and `site/assets/mapdata.js`. Add a domain to
`DOMAINS`, a club to `CLUBS`, an exchange destination to `EXCHANGE`, a deadline to `CAL` — the
pages pick it up automatically. See [`dev/ARCHITECTURE.md`](dev/ARCHITECTURE.md).

If you add a claim, add its source. If you cannot source it, add a flag to `FLAGS` and reference
it — an honestly-marked gap is worth more than a confident guess.

## Running this on another institution

The UF work is one worked example. [`method/`](method/README.md) is the part that transfers — the
tiering rubric, the access-friction scale, the evidence discipline, a research protocol, and a
step-by-step runbook with effort estimates.

The engineering is close to free: swap `data.js` and `mapdata.js` and the site works. Roughly
60–70% of the effort is research, 30% is judgment, and the site is reuse.

If you do run it somewhere else, [`method/07-runbook.md`](method/07-runbook.md) makes one
recommendation worth repeating here: **pick a second institution where you expect the honest answer
to be less flattering.** A method that only produces "this place is great" has not been tested.

## Licence and provenance

Research compiled 16–17 August 2026 from public sources. This is an independent reading of
public information and is **not affiliated with or endorsed by the University of Florida**.

Geography is derived at build time from public-domain Natural Earth data via
[world-atlas](https://github.com/topojson/world-atlas) and
[us-atlas](https://github.com/topojson/us-atlas), and inlined so the site makes no external requests.
