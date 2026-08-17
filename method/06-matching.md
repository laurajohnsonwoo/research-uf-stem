# 06 · Matching a map to a person

A tiered map answers "what is good here." It does not answer "what should *I* do," and the gap
between those is where most of the value sits.

Twenty-one tiered domains is a reference. Five ranked for one person, with the trade-off named, is
a plan.

## The inputs

Ten questions is enough. More than that and people stop answering honestly:

| Input | Why it changes the answer |
|---|---|
| **Year** | Some doors expire — freshman-only programmes are gone by year three |
| **Field interests** (multi-select) | The primary filter |
| **Hands-on or theoretical** | Separates a wind tunnel from a Bayesian statistics group inside the same tier |
| **Can you leave campus?** | Collapses friction 5 to unreachable if no |
| **Summer only, or term-time?** | Most elite external programmes are summer-only |
| **Do you need it funded?** | Removes unpaid and cost-bearing routes entirely |
| **Goal**: PhD · industry · MD · undecided | Changes what "good" means — letters versus artefacts |
| **Programming ability** | Gates the computational half of nearly every domain |
| **Prior research** | Several funded programmes require a year of it first |
| **Risk appetite** | Whether to spend a cycle on a 3%-acceptance award |

## Scoring

Deliberately simple, because a complicated score is a false precision:

```
score = tier_weight × interest_match × reachability
```

- **tier_weight** — Tier 1 = 3, Tier 2 = 2, Tier 3 = 0.5
- **interest_match** — overlap between the entry's field tags and the person's
- **reachability** — from the friction score *as modified by their constraints*: term-time-only
  makes friction 5 zero rather than merely low; "needs funding" zeroes unfunded routes

Then apply hard filters — expired-by-year, prerequisites not met — and **surface those separately
as "closed to you, and why"** rather than silently dropping them. Knowing a door has shut is
useful; a shorter list with no explanation is not.

## The output

Not a ranked list. Five entries, each with:

- **Why it ranked** — which of their inputs drove it
- **What you are trading off** — the thing it is worse at than the entry below it
- **The specific next action** — a named programme with a date, or a named person to email
- **The deadline that governs it**, and whether that date is confirmed or extrapolated

The trade-off line is the one that matters. A recommendation without a stated cost reads as
marketing, and the reader has no way to disagree with it intelligently.

## Do it conversationally first

Build the intake as an agent flow before building it as a form. It is cheaper to test, it can ask
follow-ups a form cannot, and the transcript tells you which questions actually changed the ranking.
Only harden the ones that earn their place.
