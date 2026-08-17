# Audit and review

Two audits keep this project honest. One is about **evidence** — is a claim sourced? The other is
about **prose** — does it read as machine-written? Run both before any significant publish.

---

## 1. The copy audit

```bash
python3 tools/audit-copy.py              # density report
python3 tools/audit-copy.py --headings   # every heading, flagged
python3 tools/audit-copy.py --show ", and the"   # instances in context
```

### What it is protecting against

Several constructions are effective once and corrosive in bulk. Readers now recognise them as an
LLM fingerprint, and once spotted they discredit content that is otherwise sound. The point is not
that any one sentence is bad — it is that density past a threshold changes how the whole document
is received.

The flagged patterns, and why each is on the list:

| Pattern | The problem |
|---|---|
| `X, and the Y that Z` | The appositive-tail title. Sounds authored, reads as generated. |
| `— and …` | An em-dash doing work a comma already does. |
| Em-dash density | The single biggest tell. Well-edited prose runs a fraction of what a model produces unprompted. |
| `not X, but Y` | The antithesis reflex. |
| `actually` / `genuinely` / `unusually` | Intensifier stacking. Usually deletable with no loss. |
| `honest(ly)` | Hedge-flagging — signalling candour rather than being candid. |
| `worth …ing` | Reviewer voice creeping into the artefact. |

### How to act on the report

**Read densities, not counts.** `!!` marks a pattern above its ceiling in `CEILING`. Those ceilings
are judgement, not law — edit them if you disagree, but edit them deliberately.

**Fix headings first.** Run `--headings`. Headings are the highest-visibility copy on the page and
the usual concentration point: in the August 2026 audit, 13 of 28 headings carried a flagged
construction while most body-copy hits were legitimate.

**Do not blanket find-and-replace.** This is the important one. Most `, and the` instances in body
copy are Oxford commas in lists or ordinary compound sentences — *"Geography gives UF a permanent
advantage here, and the university has built on it properly"* is just English. Sweeping them all
damages good prose to chase a metric.

**Watch for relocation.** Converting `— and` to `, and` mechanically **creates** the appositive tail
you were removing. It did, in the first pass — 5 new instances. Where two independent clauses share
a sentence, split them into two sentences instead: shorter sentences, and the tic disappears rather
than moving.

**Know what to leave.** Zero is the wrong target.
- Paired em-dashes do real syntactic work.
- Three-item lists that enumerate three real things are not a tic.
- `honest` is load-bearing in this project specifically — it names an editorial stance the
  documents actually take.

### Benchmark

The August 2026 pass, for reference:

| Metric | Before | After |
|---|---|---|
| Em-dashes per 1k words | 16.4 | 12.1 |
| `— and` | 38 | 0 |
| `actually` | 24 | 15 |
| `genuinely` | 19 | 13 |
| Headings carrying a tic | 13 | 0 |

---

## 2. The evidence review

The prose audit is automated. This one is not, and should not be — it is a judgement about whether
a claim has earned the confidence it is stated with.

### The rule

**Every substantive claim is either sourced or flagged. There is no third category.**

When you add a claim to `data.js` or `mapdata.js`:

1. **Sourced?** Add the URL to the entry's `srcs`, or to `LINKS` if the name should auto-link
   everywhere. Check the URL actually resolves — a dead link is worse than no link, and two of the
   Chinese university URLs were `http://` where I would have guessed `https://`.
2. **Not sourced?** Add an entry to `FLAGS` and wrap the text in `claim(text, "flag-key")`. It will
   render a clickable marker and light up under **Skeptic mode**.
3. **Inferred rather than observed?** Say so in the flag body, and make the *rendering* differ —
   inferred graduate destinations draw dashed, documented partnerships draw solid.

### The review pass

Before publishing, walk `EVIDENCE` in `data.js` — the confirmed / refuted / open buckets — and ask:

- Has anything in **open** since been confirmed or refuted? Move it.
- Has anything in **confirmed** gone stale? Personnel move; the map already carries one departure
  and one "this person is at Penn State, not UF" correction.
- Are all **extrapolated deadlines** still marked as such? Every 2026–27 and 2027–28 date on the
  calendar is inferred from the last published cycle and rendered with a dashed underline.
- Does any **absence** need re-checking? "No UF ICPC team surfaced" is an absence of evidence, not
  confirmed absence, and it is labelled that way.

### The standard to hold

The site's argument only works if the epistemics are visible in the artefact rather than in a
footnote. A reader should be able to tell, at a glance, which parts you would defend and which you
are merely reporting. If you cannot make that distinction render, the claim is not ready.

---

## 3. Before publishing

```bash
node --check site/assets/app.js && node --check site/assets/data.js && node --check site/assets/mapdata.js
python3 tools/audit-copy.py
cd site && python3 -m http.server 8000
```

Then, in the browser: check both themes, toggle **Skeptic mode**, confirm no console errors, and
resize below 1000px to confirm the gator unmounts and the section nav collapses cleanly.
