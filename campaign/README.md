# Campaign workspace

Persistent state for the agent-assisted effort. The research in `docs/` and `site/` is the
baseline; this is what you actually do with it.

Four files, created as needed:

- **`targets.md`** — the shortlist. PIs, clubs, programmes, one row each, with status.
- **`outreach.md`** — every email sent and what came back. Dated, append-only.
- **`decisions.md`** — what was chosen and why, so it is not relitigated every session.
- **`questions.md`** — open questions for you, and evidence flags worth closing.

The agent reads these first and appends to them as work happens. Date every entry.

Gitignored by default, since outreach notes are personal. If you want them versioned, remove
`campaign/` from `.gitignore` — everything else here is already public.
