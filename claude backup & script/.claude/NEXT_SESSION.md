# ICG Website — New Chat Handoff

## How to start a new session

Copy-paste the block below into a new Claude Code chat:

---

```
I'm continuing work on the Island Capital Group (ICG) website. Please read these files first:

1. `website icg/README.md` — full project overview, design system, section order, pending items
2. `website icg/index.html` — homepage (the main page we've been working on)
3. `website icg/css/style.css` — master stylesheet (design tokens at the top, ~2600 lines)
4. `website icg/js/main.js` — JavaScript (proof bar tabs, nav toggle, scroll reveal)

Dev server: launch config is at `website icg/.claude/launch.json` — server name "icg-website", port 8080. Start it with the preview tool, then navigate to /index.html.

Key things to know:
- Static HTML/CSS/JS site, no framework. BEM naming. Source Sans 3 font (one-font system: 600/500/400 weights).
- Homepage hero is STATIC on cream background (not a carousel — carousel was removed).
- Hero text: eyebrow (grey-green #848C86) → bold headline (charcoal) → "By strengthening..." subtitle (same font size as headline, weight 400) → "We enable..." supporting line (smaller) → olive CTA button.
- Between hero and engage section: page-break illustration + proof-bar micro-slider (3 tabs: Growth/Clarity/Execution, click to change statement, no auto-rotation).
- "When we engage" section: 6 numbered cards (01–06) with inverted pyramid intro text.
- Warm palette: cream (#EEEAE0) base, cream-dark, warm-stone, soft-beige progression.
- Nav is solid white on homepage (not transparent). Other pages also use nav--solid.
- Cache buster: update ?v= query string on CSS/JS links after edits. Current: ?v=20260311a on index.html, ?v=20260310g on other pages.
- Screenshots in preview often fail — use preview_snapshot and preview_inspect as alternatives.
- Subsidiary site lea-white.com was used as design reference.
- Latest backup: website icg/backups/ (2026-03-11_0252)

Pending work:
- Credibility section: user will send CFO profile, Business Consulting Director profile. Mark Lee profile to extract from lea-white.com.
- Contact form Formspree ID is still placeholder.
- Insights page is placeholder content.

[Then say what you want to work on]
```

---

## Session history (2026-03-11)

### What was done this session
1. **Source Sans 3 overhaul** — Migrated all 6 HTML files from DM Sans/Serif/Cormorant to Source Sans 3. Updated Google Fonts imports, CSS tokens, section backgrounds, nav/button weights, cache busters.
2. **Eyebrow refinements** — Multiple iterations: size from 13px → 12px → 24px → 21.6px (1.35rem). Color from green #6B8F71 → grey-green #7A8A7E → more grey #848C86.
3. **Typography/spacing spec** — Precise line-heights (H1 1.16, body 1.75, card 1.7, button 1.2). Hero block spacing: eyebrow→headline 22px, headline→sub 18px, sub→CTA 30px.
4. **"When we engage" section** — 6 numbered cards (01–06) with inverted pyramid intro, zero-padded numbers on dark green circles.
5. **Page-break illustration** — Brick & plant JPG divider with mix-blend-mode: multiply for transparent background on cream.
6. **Dark hero carousel (built then removed)** — Built 5-slide rotating hero modeled after lea-white.com. User clarified they wanted a micro-slider instead.
7. **Proof-bar micro-slider** — Thin white strip (~52px) with 3 tab labels (Growth/Clarity/Execution). Click to fade-change statement. No auto-rotation. Placed between page break and engage section.
8. **Reverted hero to cream** — Removed dark gradient, restored cream background, dark text colors, solid nav.
9. **Hero text structure** — "By strengthening..." line promoted to headline font size (weight 400). "We enable..." line kept as supporting paragraph. H1 headline on one line (no line break).
10. **Logo white filter** — Added CSS filter brightness(0) invert(1) for white logo on dark backgrounds (still in CSS, not currently active since hero is cream).

### Files modified
- `index.html` — homepage (hero, proof bar, engage section, page break)
- `css/style.css` — master stylesheet (design tokens, hero, proof bar, engage, responsive)
- `js/main.js` — proof bar tab logic (hero slider code removed)
- `services.html`, `team.html`, `about.html`, `contact.html`, `insights.html` — Source Sans 3 font update + cache busters
