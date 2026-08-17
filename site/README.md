# UF STEM Map — static site

Plain static HTML/CSS/JS. No build step, no dependencies, no framework.
Drop the whole `site/` folder on any static host (Netlify, Cloudflare Pages, GitHub Pages, S3, nginx).

```
index.html      Research — the focus map, dossiers, outcomes, people index
clubs.html      Clubs & teams
abroad.html     Study abroad — fellowships, research placements, 55 exchange destinations
calendar.html   The application year — all three tracks on one timeline
playbook.html   Escalation ladder, cold email, strategies, and the full evidence layer

assets/styles.css   design system + all components
assets/data.js      every dataset (domains, clubs, abroad, calendar, flags, evidence)
assets/app.js       renderers; each is guarded so a page runs only what it contains
```

## Editing content
Almost everything lives in `assets/data.js`. Add a domain to `DOMAINS`, a club to `CLUBS`,
an exchange destination to `EXCHANGE`, a deadline to `CAL`. Pages pick it up automatically.

Verification flags live in `FLAGS`; attach one to any claim by passing its key as the second
argument to `claim(html, key)` in a renderer, or via a `flag:` field on a data record.

## Local preview
```
cd site && python3 -m http.server 8000
```

## Notes
- Filter selections and ladder progress persist in `localStorage` and carry across pages.
- Skeptic mode marks every unverified claim inline; the full list is on `playbook.html`.
- Dark and light themes are token-driven and follow the visitor's system setting.
