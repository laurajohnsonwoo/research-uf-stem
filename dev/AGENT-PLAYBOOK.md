# What an agent can do with this repo

The research is finished. The campaign is not. This is a map of what a coding agent can
usefully do once it has this repo as context, roughly in the order you would want it.

The point is persistence. A single conversation gives you a good email. A repo the agent keeps
reading gives you a campaign that remembers what you tried in September when you follow up in
January.

---

## What the agent starts with

Handing over this repo hands over a working knowledge base, not just prose:

- **~200 named researchers**, most with a source link, a domain, and what they actually work on
- **53 US institutions** and 85 international destinations, with the documented tie to each
- **44 person-level ties** — who trained where, which is how warm introductions are found
- **Every dated deadline** for the application year, with extrapolated ones marked
- **An evidence layer** — roughly 30 open items that are explicitly unverified

That last one matters more than it looks. The agent knows what it does *not* know, which is
what stops it inventing.

---

## Phase 1 — Orientation

**Goal: a shortlist you believe in, not a list of everything.**

The research already tiers domains by standing against access friction. What it cannot do is
weigh those against *your* interests, constraints and timeline. That is the first conversation.

Ask for:

- *"Read `docs/UF-STEM-Research-Map.md`. I'm a second-year in materials science who likes
  hands-on work and wants a PhD. Give me five targets ranked, and tell me what you're trading
  off in each."*
- *"Which Tier 1 domains are realistically open to someone starting in spring rather than fall?"*
- *"I want to end up at CMU Robotics. Work backwards — who at UF is the thread?"* (The
  playbook's **Target a school** section is built for exactly this; the agent should use it.)

Have it write the result to `campaign/targets.md` and the reasoning to `campaign/decisions.md`.
The reasoning is the part you will want in four months when you have forgotten why Whitney
outranked Scripps on your list.

---

## Phase 2 — Outreach

**Goal: 7–10 real emails, each specific enough to answer.**

This is where the repo earns its keep. A generic agent writes a generic email. This one knows
that Christine Schmidt's lab accepts rolling undergraduate applications, that Sarah Ballard's
Cottrell award explicitly funds undergraduate research, and that UF Biology's own guidance says
*email, do not phone or drop by*.

Ask for:

- *"Draft outreach to these five PIs. Use the cold-email structure in the playbook. For each,
  reference something specific from their dossier — and tell me which paper I need to read
  first, because I'm not sending anything I can't defend in a meeting."*
- *"Which of my targets recruit out of their own classroom? I want to prioritise those where I'm
  already enrolled."*
- *"It's been three weeks with no reply from four of them. Draft follow-ups that don't sound
  like nagging, and tell me which one to drop."*

**Rules the agent should hold to:** it drafts, you send. It does not email anyone. And every send
gets logged to `campaign/outreach.md` with a date, so the follow-up conversation in six weeks
has the thread.

---

## Phase 3 — Closing the evidence gaps

**Goal: turn the open flags into answers.**

The evidence layer lists roughly 30 things that could not be confirmed. Several are load-bearing
for a decision, and most are answerable with one email or one page load.

High-value ones, as of the August 2026 survey:

| Open item | Why it matters | How to close it |
|---|---|---|
| Every 2026–27 deadline is extrapolated | Whole plans hang on these dates | Confirm each with the programme directly |
| UF iGEM publishes no intake process | It is a gold-medal team with an undocumented door | Email CUR at 202 Newell Hall |
| FICS undergraduate pipeline mechanics | UF's clearest #1-tier niche, unclear entry | Ask the FICS students contact |
| Beckman Scholars appears lapsed | A funded route that may not exist | Confirm with UF Chemistry |
| No UF ICPC team surfaced | Absence of evidence, not confirmed absence | Ask CISE directly |

Ask for: *"Walk the open bucket in `EVIDENCE`. Rank by how much it would change a decision, and
draft the email or search that would close the top five."*

When one closes, the agent should move it from `open` to `confirmed` or `refuted` in `data.js`
and record what changed. **The artefact should get more true over time**, not drift stale.

---

## Phase 4 — Extending the research

**Goal: fill the gaps the survey deliberately left.**

Coverage is uneven by design — provenance was researched for about a dozen of the ~200 named
people, prioritised by signal. A missing node on the connections map means "not researched," not
"no connection." That is a documented gap and an obvious next tranche.

Worth doing:

- **More faculty provenance.** Where did the remaining academy members train? Each one found adds
  a node to the map and a possible warm introduction. Highest value: Holt, Will, Sikivie, Hebard,
  Christou, Bartlett are done — Kawahara, Bloch, Moudgil, Bihorac, Zare are done — the FICS bench
  (Butler, Forte) came back empty and is worth another attempt.
- **Club results that were unverifiable.** Gator Motorsports' recent FSAE placements were only
  findable on a sponsor's Facebook post. Swamp Launch's USLI and IREC results were not found at all.
- **The Canadian and Chinese layers** are marked as researched to a lighter standard than the UF
  data. They could be brought up to the same bar.
- **A new region entirely.** The same method — tier by standing, be explicit about access
  friction, flag what you cannot confirm — would work for any university.

---

## Phase 5 — Maintenance

**Goal: the map does not quietly go stale.**

Facts move. The survey already carries one professor who left for Virginia Tech, one who retired,
one who is at Penn State rather than UF, and an interim director who may no longer be interim.

Ask for, once a semester:

- *"Re-check the personnel flags. Has anyone on this map moved, retired, or changed title?"*
- *"The application year has rolled over. Which deadlines are now confirmed rather than
  extrapolated, and which have moved?"*
- *"Run `tools/audit-copy.py`. Has anything I've added drifted above the ceilings?"*

The survey date in the masthead is deliberately static — it will not update itself, and it should
not, because a page that claims freshness it does not have is worse than one honestly dated.
Update it by hand when you refresh the research.

---

## What to be careful about

**The agent will want to be helpful in ways that damage the artefact.** Watch for:

- Filling a gap with a plausible-sounding claim rather than marking it unknown. The evidence layer
  is the project's spine; a single invented source undermines all of it.
- Removing absences to make things look better. "UF has no ICPC team" is a finding.
- Softening the honest negatives. The Tier 3 verdicts and the "where UF is not" layer are the most
  useful content on the site precisely because nothing else tells you.
- Blanket-editing prose to satisfy the audit. Read `dev/AUDIT.md` — most flagged patterns in body
  copy are legitimate English, and a sweep damages good writing to move a number.

**And the boundary that matters most:** the agent drafts, researches, tracks and reminds. It does
not contact professors, submit applications, or accept anything on your behalf. Every outward
action is yours.
