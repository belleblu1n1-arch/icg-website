# ICG Website — Continuation Instructions for New Chat

## How to Start the New Chat

Paste the following as your first message:

---

**I'm continuing work on the ICG website. Please read these files first:**

1. `ICG Website Resources/website icg/index.html` — current homepage
2. `ICG Website Resources/website icg/css/style.css` — current stylesheet
3. `WEBSITE_CONTINUATION.md` — this file (full context)
4. `CLAUDE.md` — project instructions

**Then start the dev server** using the launch config at `KVPL FS/.claude/launch.json` (server name: `icg-website`, port 8080, serves from `website icg/` folder).

---

## Latest Backup

- **Timestamp:** `2026-03-06_2238`
- **Files:** `backups/index_2026-03-06_2238.html` and `backups/style_2026-03-06_2238.css`
- **Previous backup (before major redesign):** `backups/index_2026-03-06_1611.html` and `backups/style_2026-03-06_1611.css`

## Current Page Structure (index.html)

```
1. NAV — Fixed top bar, cream background, Island Capital logo image (380px), DM Sans links (text-lg)
2. HERO — Sage green gradient (5-stop), centered text layout, NO marquee inside
3. MARQUEE SECTION — White background, scrolling logo carousel + 4 stat boxes (30/50+/25+/40+)
4. SERVICES — "How We Help" — 4 service cards in 2x2 grid
5. WHY ICG — Credibility text + company name rows + 4 pillar cards + stats bar
6. CREDENTIALS — "Where Our Team Has Led" — static logo strip (grayscale)
7. CTA BANNER — cream-dark background
8. FOOTER — dark charcoal
```

## Pending Changes (User Requested But NOT Yet Implemented)

### 1. Skyline overlay needs to move up
The `hero__overlay` (skyline silhouette PNG, opacity 0.12) is positioned at bottom of the hero section. Since the hero section was shortened (marquee moved out), the skyline should be repositioned to sit properly at the bottom of the green hero area.

### 2. Credibility section should go UNDER the credentials section
The user wants the "We Bridge Strategic Thinking..." section with the company name rows (Microsoft, Unilever, Diageo, etc.) to be positioned AFTER the "Where Our Team Has Led" credentials/logo-strip section, not before it. This means reordering sections in the HTML.

### 3. New "How we work" section immediately after marquee
Replace the current "Services Overview" / "How We Help" section with this new content:

**Section headline:** "How we work — and why it's different"
**Subtitle:** "Senior-led, execution-focused advisory built for Asia-Pacific complexity."

**Four pillars (numbered):**
1. **Fortune 500 practitioners — not junior consultants** — Every engagement is led by senior operators with hands-on P&L and regional leadership experience across multinational organisations. No analyst layers. No hand-offs.
2. **AI-augmented, not traditional** — We combine seasoned financial judgment with modern analytics and AI-enabled workflows — delivering insight in days, not weeks, without compromising rigour.
3. **Built for Asia-Pacific complexity** — Deep in-market experience across multiple APAC jurisdictions, with multilingual capability and a practical understanding of regulatory, cultural, and commercial realities.
4. **From strategy through execution** — We stay involved beyond recommendations — supporting implementation, structuring, and operational change until outcomes are delivered.

### 4. All sections below marquee should have WHITE background
Services, Why ICG, Credentials — all white. (Services was changed from cream to white; Credentials was changed from cream to white. But verify all are `section--white`.)

## Known Font Issue

The user has repeatedly said the font looks wrong — specifically the letter 'a' doesn't match the Island Capital logo. The hero h1 was changed from `DM Serif Display` (serif) to `DM Sans` (sans-serif, `var(--font-body)`) with `font-weight: 600`. The user may still want further font adjustments. The Island Capital logo is a PNG image so its exact typeface is unknown — but it's a clean modern sans-serif.

## Key Design Decisions (Already Implemented)

- **Hero**: Sage green gradient (`#EAF4EF → #D6EADF → #C2DFD0 → #A8D1B8 → #8FC4A5`), centered text, no min-height (auto with padding)
- **Hero text colors**: Dark green `#071A14` for h1, `#2D4A3E` for value-prop, `#3A5E4E` for trust line (increased contrast)
- **Manifesto items**: Styled as pill/chip buttons with frosted glass effect (`backdrop-filter: blur`)
- **Logo marquee**: Scrolling animation (45s), duplicated set for seamless loop, fade edges via CSS mask
- **Individual logo size overrides** via CSS attribute selectors `img[alt="BAT"]` etc.
- **Nav**: Logo 380px width, links `text-lg`, CTA button `text-base`
- **CTA buttons**: Gold `#D4AF37` primary
- **Stats**: 30 (Years Finance & Strategy), 50+ (Years Corporate Structuring), 25+ (Years Business Consulting), 40+ (Countries Managed)
- **Credibility company names**: Two rows — Row 1: Microsoft, Unilever, Diageo, Boston Scientific, Energizer, BAT, Avery Dennison. Row 2: Bain & Company, NUS, Rothschild & Company, Standard Chartered, Keppel Corporation

## Logo Image Files (in `website icg/img/`)

All logo PNGs are custom-created or sourced from icons folder / PPTX extracts:
- `logo-microsoft.png` — 500x140, 4-color icon + text (PIL created)
- `logo-diageo.png` — 783x490, with brand icons (Smirnoff etc.), from PPTX
- `logo-boston-scientific.png` — 700x280, with "Advancing science for life" tagline (PIL created)
- `logo-bat.png`, `logo-unilever.png`, `logo-energizer.png`, `logo-avery-dennison.png` — from icons folder
- `logo-keppel.png` — 1189x489, original with text, from PPTX
- `logo-standard-chartered.png` — upscaled 3x + sharpened
- `logo-kingfisher.png` — upscaled 3x + sharpened
- `logo-bain.png` — user-uploaded, upscaled 2x + sharpened
- `logo-rothschild.png` — user-uploaded, upscaled 2x, tightly cropped
- `logo-hkta.png` — user-uploaded, upscaled 2x
- `logo-step.png`, `logo-nus.png` — from PPTX, upscaled 2x + sharpened
- `logo-hkird.png` — extracted from PPTX, upscaled 2x + sharpened
- `logo-navitas.png` — original

## CSS Marquee Logo Size Overrides (current)

```css
.hero__logos-track img { height: 70px; max-width: 240px; }
img[alt="BAT"]                { height: 85px; }
img[alt="Unilever"]           { height: 85px; }
img[alt="Standard Chartered"] { height: 80px; }
img[alt="Kingfisher"]         { height: 85px; }
img[alt="HKTA"]               { height: 95px; }
img[alt="Energizer"]          { height: 80px; }
img[alt="STEP"]               { height: 80px; }
img[alt="Navitas"]            { height: 40px; }
img[alt="HK Inland Revenue"]  { height: 50px; }
img[alt="Keppel"]             { height: 60px; }
img[alt="Rothschild"]         { height: 55px; }
img[alt="Boston Scientific"]  { height: 55px; }
```

## Dev Server

- **Config:** `KVPL FS/.claude/launch.json`
- **Command:** `python -m http.server 8080 --directory "../ICG Website Resources/website icg"`
- **URL:** `http://localhost:8080`
- Preview viewport should be set to 1440x900 for desktop view

## User Preferences

- Prefers clean, simple, elegant design
- Font consistency is important — all hero text should use DM Sans (body font), NOT DM Serif Display
- Logos should be full color (no grayscale filter in marquee)
- Values conciseness — don't over-explain in the UI
- Gets frustrated by broken links / server stopping — always verify server is running before sharing link
