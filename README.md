# Island Capital Group — Website

Static HTML/CSS/JS website for Island Capital Group, a strategic CFO and advisory firm operating across Asia-Pacific.

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build step
- **Font**: Source Sans 3 (Google Fonts) — one-font system: 600 headings, 500 nav/buttons, 400 body
- **CSS**: BEM naming, custom properties (design tokens), responsive breakpoints at 480/640/768/1024/1280/1440px
- **Dev server**: Python `http.server` on port 8080 (configured in `.claude/launch.json`)

## Project Structure

```
website icg/
├── index.html              # Homepage
├── services.html           # What we do (service detail page)
├── team.html               # Team page
├── about.html              # About page
├── contact.html            # Contact page (Formspree placeholder)
├── insights.html           # Insights page (placeholder content)
├── css/
│   └── style.css           # Master stylesheet (~2600 lines)
├── js/
│   └── main.js             # JavaScript (nav, proof bar, scroll, form validation)
├── img/                    # Logos, illustrations, icons
├── backups/                # Timestamped backups of key files
├── .claude/
│   ├── launch.json         # Dev server config
│   └── NEXT_SESSION.md     # Handoff instructions for new chat sessions
├── reference - profiles - ESG/   # Source docs for profiles & ESG content
├── website old versions/   # Previous website PDFs/HTML for reference
├── logo_extract/           # Extracted logo assets from PPT
└── preview-backup/         # Old preview backups
```

## Design System

### Colors (CSS custom properties)
| Token            | Value     | Usage                           |
|------------------|-----------|---------------------------------|
| `--green`        | `#4A8C3F` | Primary brand green             |
| `--green-dark`   | `#3A6F32` | Engage numbers, dark accents    |
| `--olive`        | `#A5C83A` | CTA buttons                     |
| `--cream`        | `#EEEAE0` | Hero background, body sections  |
| `--cream-dark`   | `#E8E3D8` | Credibility, engage section bg  |
| `--warm-stone`   | `#E2DDD2` | Service sections bg             |
| `--soft-beige`   | `#DBD5CA` | CTA banner bg                   |
| `--charcoal`     | `#2D2D2D` | Headings, primary text          |
| `--charcoal-light` | `#3A3A3A` | Body text, subtitles          |
| `--white`        | `#FFFFFF` | Nav background, card backgrounds|

### Typography
| Element          | Size       | Weight | Line-height | Color             |
|------------------|------------|--------|-------------|-------------------|
| Eyebrow (tagline)| 1.35rem    | 500    | 1.55        | `#848C86`         |
| Headline (h1)   | 2.25rem    | 600    | 1.16        | charcoal          |
| Hero sub         | 1.25rem    | 400    | 1.65        | charcoal-light    |
| Body             | 1.25rem    | 400    | 1.75        | charcoal-light    |
| Nav links        | 0.9375rem  | 500    | 1.3         | charcoal-light    |
| Buttons          | —          | 500    | 1.2         | —                 |
| Section labels   | —          | 600    | 1.6         | —                 |

### Section Background Progression
Nav (white) → Hero (cream) → Page break (cream) → Proof bar (white) → Engage (cream-dark) → Credibility (cream-dark) → Marquee (cream) → Services (warm-stone) → Advisory (cream) → CTA (soft-beige) → Footer

## Homepage Section Order

1. **Hero** — Static. Cream background, centered text: eyebrow → headline → subtitle (hero-title--sub, same font size as headline, weight 400) → "We enable..." supporting line → CTA button
2. **Page break** — Illustration divider (brick & plant JPG, `mix-blend-mode: multiply` for transparent bg)
3. **Proof bar** — Micro-slider. Thin white strip (~52px). Three clickable tabs: Growth / Clarity / Execution. Fade-in statements. Manual click only, no auto-rotation
4. **Engage section** — "When we engage" with inverted-pyramid intro text + 6 numbered cards (01–06, dark green circles)
5. **Credibility** — Stats + logo cloud + team proof
6. **Logo marquee** — Auto-scrolling company logos
7. **Core services** — Warm-stone background
8. **Advisory services** — Cream background
9. **CTA banner** — Soft-beige background
10. **Footer**

## Key Design Decisions

- **One-font system**: Source Sans 3 throughout (was DM Sans + DM Serif + Cormorant in earlier versions)
- **No hero carousel**: Was built as 5-slide rotating slider (lea-white.com style), then replaced with static hero + proof-bar micro-slider
- **Cream, not white**: Warm ivory tone throughout; nav is the only pure white element
- **Company framing**: Content is about "Island Capital" as a company, not about Isabella individually
- **Logo cloud**: Shows former employers + partner's clients (ex-Bain), NOT ICG clients
- **Trust/IEP/legacy planning**: Intentionally removed — diluted positioning
- **Subsidiary reference**: lea-white.com is ICG's subsidiary (Lea & White); used as design reference

## Cache Busting

CSS and JS are loaded with query strings: `style.css?v=20260311a`, `main.js?v=20260311a`

Update the version string after any CSS/JS changes. Format: `YYYYMMDD` + letter suffix.

Homepage currently uses `?v=20260311a`. Other pages use `?v=20260310g` — update these when editing those pages.

## Dev Server

```bash
# From project root or via Claude preview:
python -m http.server 8080 --directory "C:\Users\Belle\OneDrive\Documents\Desktop\ICG\website icg"
```

Then open: http://localhost:8080/index.html

## Backup (2026-03-11_0252)

Latest backup of all key files in `backups/` folder with timestamp suffix.

## Pending Work

1. **Credibility section profiles** — User will provide CFO profile, Business Consulting Director profile; Mark Lee's profile to be extracted from lea-white.com
2. **Contact form** — Replace `yourformid` placeholder in contact.html with real Formspree ID
3. **Insights page** — Still placeholder content
4. **Privacy Policy / Terms** — Still `#` links in footer
5. **Team page** — Could be enriched with detail from profile documents in `reference - profiles - ESG/`
6. **Hero images** — User was considering adding background photos to the hero (discussed but not implemented)
