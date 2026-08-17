# 07 · Runbook for institution N+1

Concrete steps, in order, with honest effort estimates. Assumes the codebase and this method
already exist — which means the engineering is close to free and the research is nearly all of it.

## Effort shape

Roughly **60–70% research, 30% judgment and writing, and the site is reuse**. The UF pass took
about 50 targeted searches across four documents. Expect the second institution to be faster on
process and identical on research volume.

## Step by step

**1. Frame the institution (1 hour).**
What kind of place is it? A flagship public with volume and a thin academy bench behaves very
differently from a small private with two world-class niches. Write the one-paragraph thesis first
and let the research argue with it.

**2. Standing sweep (the bulk).**
Work `04-research-protocol.md` in order. Academy membership, prizes, facilities, national programme
roles. Do not tier anything yet — gather, then judge in one pass, so the criteria stay consistent.

**3. Tier it in one sitting.**
Apply `01-tiering.md` across all entries together. Tiering entry 1 on Monday and entry 20 on Friday
produces drift. Expect 6–10 Tier 1 entries at a large research university; if you have twenty, the
rubric is being applied too loosely.

**4. Friction pass.**
The expensive one. Process pages, intake mechanics, distances, term availability. Email what you
cannot find, and flag what you have not heard back on.

**5. Adversarial pass.**
Take the 20–30 load-bearing claims and try to refute them. Publish the arithmetic.

**6. Write the documents, then load the data.**
Prose first. The site is a rendering of the argument, and building it first tempts you to write for
the components you already have.

**7. Personalise** — `06-matching.md`.

**8. Ship the audit** — copy audit, evidence review, static survey date.

## What to reuse unchanged

Everything in `site/assets/` except the data files. The renderers, the design system, the geography
pipeline, the flag machinery, the audit tools. Swap `data.js` and `mapdata.js` and the site works.

## What must be rebuilt per institution

- All research
- The tier judgments
- The friction scores and the doors
- The geographic node set, if it has different partners
- The thesis — every institution's argument is different, and a copied one will be wrong

## Choose the second institution deliberately

Pick one where you expect **the honest answer to be less flattering**. A method that only produces
"this place is great, here are its gems" has not been tested. The proof that the rubric works is a
Tier 3 verdict you did not want to write.
