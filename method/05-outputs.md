# 05 · What to produce

The method yields two artefacts with different jobs, and they should not be merged.

## The documents

Long-form markdown, one per domain of the search. Each carries the argument and every source.
The UF set ran to four: labs and faculty, clubs and teams, study abroad, and one region-specific
deep dive.

Every document has the same skeleton:

1. **How to read this** — the lens, stated plainly, including what the document refuses to do
2. **The tiered verdict** — the whole answer in one table, before any detail
3. **Deep dives** — one section per entry: people, infrastructure, access, focus verdict
4. **The mechanics** — deadlines, money, eligibility
5. **The playbook** — what to actually do, in order
6. **Verification flags** — everything that could not be confirmed
7. **Sources**

Put the tiered verdict **early**. A reader who stops after two minutes should still leave with the
answer.

## The site

The documents are the argument; the site is what makes it navigable and act-on-able. Different job,
so different rules:

- **Filterable by interest**, with one shared filter state across every view
- **Deadlines on a calendar**, not buried in prose — extrapolated ones visibly marked
- **Evidence rendered**, per `03-evidence.md`
- **Outcome-oriented sections** — where does this lead, what do I do on Monday
- **No build step.** This has to survive years of occasional edits by whoever inherits it.

## The audit

Ship the tools that keep it honest, not just the output:

- A **copy audit** that measures the prose tics which mark text as machine-written, with density
  ceilings rather than absolute bans
- A **build script** for anything generated, so it can be regenerated rather than hand-patched
- A written **review pass** over the evidence buckets: has anything in *open* since been confirmed,
  has anything in *confirmed* gone stale

## Date it, statically

Put the survey date in the header as **static text**. Never render `new Date()`. A page that
computes today's date will claim freshness it does not have, six months after the research went
stale — which is the exact failure the whole method exists to prevent.
