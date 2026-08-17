#!/usr/bin/env python3
"""
audit-copy.py — scan the site's user-facing copy for the stylistic tics that
mark text as machine-written.

    python3 tools/audit-copy.py            # report
    python3 tools/audit-copy.py --headings # list every heading, flagged
    python3 tools/audit-copy.py --show ", and the"   # show instances in context

Why this exists
---------------
Several constructions ("X, and the Y that Z", the dramatic em-dash, stacked
intensifiers) are effective in isolation and corrosive in bulk. Readers now
recognise them as an LLM fingerprint, and once spotted they discredit content
that is otherwise sound. This measures density so the edit can be targeted
rather than a blanket find-and-replace, which damages legitimate prose.

Read the counts as density per 1,000 words, not as absolutes. The goal is not
zero — paired em-dashes do real syntactic work, and three-item lists that
enumerate three real things are just English.
"""
import re, sys, glob, os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "site")

PATTERNS = {
    "em-dash":                    r"—",
    "“— and …”":                  r"—\s*and\b",
    "appositive tail “, and the”":  r",\s+and the\b",
    "antithesis “not X, but Y”":  r"\bnot\s+\w[^.;]{0,40}?[,—]\s*(?:but|it'?s)\b",
    "“isn't/is not just”":        r"\b(?:isn'?t|is not|are not|aren'?t)\s+just\b",
    "“which is exactly/precisely”": r"\bwhich is (?:exactly|precisely)\b",
    "intensifier “actually”":     r"\bactually\b",
    "intensifier “genuinely”":    r"\bgenuinely\b",
    "intensifier “unusually”":    r"\bunusually\b",
    "intensifier “deliberately”": r"\bdeliberately\b",
    "hedge-flag “honest(ly)”":    r"\bhonest(?:ly)?\b",
    "“worth …ing”":               r"\bworth\s+\w+ing\b",
    "sentence-initial “But/And”": r"(?:^|(?<=[.!?]\s))(?:But|And)\s",
}
# density per 1,000 words above which a pattern is worth a look
CEILING = {"em-dash": 13.0, "“— and …”": 0.4, "appositive tail “, and the”": 1.2,
           "intensifier “actually”": 0.8, "intensifier “genuinely”": 0.6,
           "intensifier “unusually”": 0.4, "hedge-flag “honest(ly)”": 0.4}


def corpus():
    """User-facing strings only: long quoted literals from the data files, and
    text nodes from the HTML. Skips comments, code and markup."""
    out = []
    for f in glob.glob(os.path.join(ROOT, "assets", "*.js")):
        if os.path.basename(f) in ("geo.js",):        # pure coordinate data
            continue
        s = re.sub(r"/\*.*?\*/", "", open(f).read(), flags=re.S)
        out += [(f, m) for m in re.findall(r'"((?:[^"\\]|\\.){25,})"', s)]
    for f in glob.glob(os.path.join(ROOT, "*.html")):
        s = re.sub(r"<script.*?</script>|<style.*?</style>", "", open(f).read(), flags=re.S)
        out += [(f, t.strip()) for t in re.findall(r">([^<>]{25,})<", s) if t.strip()]
    return out


def headings():
    for f in sorted(glob.glob(os.path.join(ROOT, "*.html"))):
        s = open(f).read()
        for m in re.finditer(r"<(h1|h2|h3)[^>]*>(.*?)</\1>", s, re.S):
            h = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", m.group(2))).strip()
            flags = [k for k, p in PATTERNS.items()
                     if k in ("appositive tail “, and the”", "em-dash",
                              "intensifier “actually”", "intensifier “genuinely”",
                              "intensifier “unusually”") and re.search(p, h)]
            yield os.path.basename(f), m.group(1), h, flags


def main():
    items = corpus()
    text = "\n".join(t for _, t in items)
    words = len(re.findall(r"[A-Za-z']+", text))

    if "--headings" in sys.argv:
        bad = 0
        for f, tag, h, flags in headings():
            mark = "!" if flags else " "
            if flags: bad += 1
            print(f"{mark} {f:<14} {tag}  {h[:78]}")
        print(f"\n{bad} heading(s) carrying a flagged construction.")
        print("Headings are the highest-visibility copy on the page and the usual"
              "\nconcentration point — fix these before touching body copy.")
        return

    if "--show" in sys.argv:
        needle = sys.argv[sys.argv.index("--show") + 1]
        for f, t in items:
            for m in re.finditer(r"[^.;]{0,55}" + re.escape(needle) + r"[^.;]{0,45}", t):
                print(f"  {os.path.basename(f):<14} …{m.group(0).strip()}…")
        return

    print(f"corpus: {len(items)} strings · {words:,} words\n")
    print(f"{'count':>6} {'per 1k':>7}  {'':2} pattern")
    rows = []
    for name, pat in PATTERNS.items():
        n = len(re.findall(pat, text))
        rows.append((n, n / words * 1000, name))
    for n, d, name in sorted(rows, reverse=True):
        over = CEILING.get(name)
        mark = "!!" if over and d > over else "  "
        print(f"{n:>6} {d:>7.2f}  {mark} {name}")
    sents = [x for x in re.split(r"(?<=[.!?])\s+", re.sub(r"<[^>]+>", "", text)) if len(x) > 3]
    print(f"\nmean sentence length: {sum(len(s.split()) for s in sents)/len(sents):.1f} words")
    print("!! = above the density ceiling for that pattern. Ceilings are judgement,"
          "\nnot law — see dev/AUDIT.md for what each one is protecting against.")


if __name__ == "__main__":
    main()
