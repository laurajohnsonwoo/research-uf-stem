# 08 · Failure modes

All of these were observed while building the UF map. None is hypothetical.

## Research failures

**Confirming instead of refuting.** A second pass that tries to re-confirm will re-confirm. The
adversarial pass has to actually attempt refutation, or it is theatre. One UF claim was wrong — a
paper attributed to the wrong author — and only a refutation attempt found it.

**Trusting the search result over the institution.** Stale indexes outrank current pages. One
researcher surfaced repeatedly as UF faculty and is at Penn State. Search the *person*, not just
the institution, and check the current departmental listing.

**Conflating lead with member.** "UF participates in NSF AI Institutes" and "UF leads none of them"
are both true, and only one appears in the press release. This distinction did more work than any
other single check in the UF map.

**Accepting a superlative from its beneficiary.** A ranking published by an assessment firm scoring
public disclosures, or a hardware vendor's blog crediting the partnership it sells into. Cite them
only to name the conflict.

**Writing "does not exist" when you mean "did not find."** The single most damaging phrasing error
available. "No ICPC team surfaced" is honest; "UF has no ICPC team" is a claim you cannot support.

## Judgment failures

**Tier inflation.** Everything looks impressive when you read its own website for an hour. If more
than about a third of entries are Tier 1, the rubric has slipped. Re-read `01-tiering.md` and
re-apply it to the whole set at once.

**Softening Tier 3.** The verdicts that are uncomfortable to write are the ones a student cannot get
anywhere else. Hedging them removes the only reason to read the document.

**Removing an absence because the page looks negative.** Absences are the highest-value content.
Pair each with the place that has what this one lacks — that turns it into navigation.

**Tiering a department when the evidence is one person.** Common with small departments carrying one
distinctive researcher. Say "this is a person-level bet," because the advice is different: target
them specifically, and check they are still taking students.

## Artefact failures

**Footnoting uncertainty instead of rendering it.** A flags section at the bottom is where honesty
goes to be ignored. If a claim is soft, it must *look* soft at the point it is made.

**Computing the survey date.** `new Date()` in the header means the page claims freshness it does
not have, forever. Static text, updated by hand.

**Letting the map carry less than the table.** An early version of the world map plotted 78
identical dots and dropped tier, terms and disciplines — a table carried strictly more information.
If the visualisation encodes less than a list would, it is decoration.

**Building the site before the argument.** You will write to fit the components you already have.

## Prose failures

**Blanket find-and-replace during a copy audit.** Most flagged constructions in body copy are
legitimate English. In the UF audit, 13 of 28 *headings* carried the tic while most body-copy hits
were ordinary compound sentences. Fix headings; leave prose alone unless it is genuinely bad.

**Relocating a tic instead of removing it.** Converting `— and` to `, and` mechanically *creates*
the appositive tail you were removing. It did, five times. Where two independent clauses share a
sentence, split them.

**Chasing zero.** Paired em-dashes do real syntactic work. Three-item lists that enumerate three
real things are not a tic. Density ceilings, not bans.

## Process failures

**Reporting a UI change as done without loading the page.** Several bugs here were invisible to
static inspection: labels clipped at an SVG edge, a selection ring rendering six times its intended
size because CSS pixels were read as user units, a renderer silently dead from a hoisting error.

**Trusting the browser to have your latest file.** Three verification passes reported a fix as
broken when it was correct on disk — the browser was serving a cached script. Compare the running
function's source against the file before concluding a fix failed.

**Fixing a call site instead of the class of bug.** The same temporal-dead-zone error appeared three
times before it was fixed structurally. When a bug recurs, stop patching the instance.
