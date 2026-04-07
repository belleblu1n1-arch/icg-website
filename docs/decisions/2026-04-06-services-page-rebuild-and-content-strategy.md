# Services Page Rebuild & Content Strategy Decisions

**Date**: 2026-04-06
**Scope**: Services page structure, hero copy, engagement model cards, targeted sprint list, illustrative scope cards
**Status**: Implemented (sprint list and scope cards finalized; about page pending)

---

## 1. Context

The ICG website services page was rebuilt from a prototype (`services_prototype_9.html`) into production. The page needed to communicate two engagement models (Retained and Focused), present an illustrative scope of services, and establish positioning copy that aligns with the homepage. Multiple rounds of iteration refined copy, structure, and visual hierarchy.

---

## 2. Positioning & Hero Copy

### Key Decisions

**Hero title**: "Senior finance and business leadership" — short, declarative, centered.

**Hero subtitle** (centered, 3 lines):
- "Connecting strategy to execution."
- "Sharper decisions. Stronger delivery."
- "For businesses navigating growth, complexity, and change."

The subtitle was moved out of the left-aligned split layout and placed above it, centered under the title. This creates a clear visual hierarchy: brand statement (centered) above the detail copy (left-aligned with illustration).

**Body copy**:
- "We work alongside leadership teams to strengthen planning, decision-making, performance, and execution — with clearer accountability and follow-through."
- "Engage us through an ongoing retained model or a focused engagement scoped to a specific business need."

### Criteria Applied
- **Brevity over explanation**: The user consistently shortened and simplified copy. Long compound sentences were broken apart. Redundant qualifiers removed.
- **Line splits are intentional**: The user specifies exact line breaks — these are visual/rhythm decisions, not arbitrary.
- **"Alongside" not "embedded"**: The framing is collaborative, not substitutional. ICG works with leadership teams, not in place of them.
- **No "cost" language**: The value proposition avoids explicit cost-saving framing. Instead, the implicit message is "without building a full senior layer in-house" — the benefit is structural, not financial.

---

## 3. Engagement Model Cards (Two-Card Layout)

### Structure
- Left card: **Retained Model** (narrower, ~36% width)
- Right card: **Focused Engagements** (wider, ~64% width via `1fr 1.8fr` grid)

The asymmetric width reflects that the right card contains a sprint table requiring more horizontal space.

### Left Card — Retained Model

**Label**: "Retained Model (Core engagement model)"
**Title**: "Fractional CFO & Performance Leadership"

**Opening**: "Ongoing access to senior finance and business leadership — without building a full in-house senior layer."

**Bridge**: "We work alongside your leadership team on the priorities that matter most, including:"

**Bullets** (5, with checkmark style):
1. CEO and Board decision support
2. Planning, forecasting, and performance leadership
3. Stakeholder-ready reporting and communication
4. Cross-border oversight, governance, and coordination
5. Performance support and follow-through across key priorities

### Key Decisions — Left Card
- **"including:" not "across:"** — the bullet list illustrates scope, it doesn't define boundaries.
- **5 bullets expanded from 3**: The original 3 were too abstract. The expanded 5 map more directly to the illustrative scope cards below, creating vertical coherence.
- **Bullet style**: Green checkmark emoji (not plain dots). This was a deliberate visual choice for the retained card to signal "this is what you get."

### Right Card — Focused Engagements

**Label**: "Focused Engagements"
**Title**: "Targeted Scope"
**Opening**: "Focused support designed around a defined business need, with a clear scope and practical output."
**Second line**: "Typically scoped over 4-12 weeks, depending on the objective and context."
**"Examples:"** label above the sprint table.

### Key Decisions — Right Card
- **Title changed from "Targeted Sprints" to "Targeted Scope"**: "Sprints" felt too agile/tech. "Scope" better communicates that these are defined engagements.
- **"engaged independently or combined within a broader retained relationship"**: This bridging language (from the homepage) was adopted here — it signals that focused engagements aren't isolated; they can lead into retained relationships.
- **"A sprint may focus on..." sentence removed**: It was redundant once the sprint table was added directly to the card.

---

## 4. Targeted Sprint List (7 Engagements)

A two-column table inside the right card with headers "Focused Engagement Area" and "Target Scope Examples."

### Final List (in order)

| Focused Engagement Area | Target Scope Examples |
|---|---|
| Forecast Reset | Model & output design - Data mapping - Cadence rollout |
| Stakeholder-Ready Reporting Reset | Board - Investor - Lender |
| KPI & Dashboard Reset | KPI structure - Dashboard design - Review rhythm |
| Profitability & Cost Insight | Business model - Product mix - Channel mix - Customer economics |
| Scenario Planning & Trade-off Review | Investment - Volume & mix - Pricing - Cost |
| Cross-Border Readiness & Compliance | Entity setup - Governance design - Compliance alignment - Ongoing CSP support |
| Integration & Transition Support | Reporting integration - Compliance alignment - Interim finance and compliance leadership |

### Key Decisions — Sprint List

- **Order is intentional**: Forecast Reset leads because it's the most common entry point. Cross-border and integration are last because they're the most complex/niche.
- **"Scenario views" removed from Forecast Reset scope**: Simplified to 3 items.
- **Stakeholder-Ready Reporting Reset added back**: Was briefly dropped, then reinstated as the 2nd item.
- **Cross-border scope simplified**: Evolved from "Singapore hub setup - Hong Kong hub setup - Southeast Asia - Entity structuring - Compliance" through multiple iterations to "Entity setup - Governance design - Compliance alignment - Ongoing CSP support." Geography-specific examples were replaced with functional scope.
- **Compliance as standalone**: Through extensive discussion, compliance was established as a standalone concern, not grouped under "coordination." This reflects how clients think about it.
- **"Design - Build - Embed" depth model**: KPI & Dashboard Reset and Forecast Reset both use a similar scoping pattern (design the framework, build it, embed it). This is intentional — they share a delivery methodology even though they're distinct products.
- **Working Capital was researched and dropped**: Market research identified working capital optimization as a high-demand sprint area, but it was dropped as not fitting ICG's positioning.

---

## 5. Illustrative Scope Cards (6 Cards)

### Final Card Titles and Content

1. **Planning & Forecasting** — Budgeting and annual operating planning / Rolling forecast design and cadence / Scenario planning and trade-off analysis / Target setting and resource alignment
2. **Performance Cadence** — Monthly & quarterly rhythm / KPI structure & dashboard reset / Accountability and follow-through / One shared view across teams
3. **Reporting & Board Materials** — Board pack design / Reporting simplification / Leadership and stakeholder materials / Investor and lender readiness
4. **Decision Support & Insight** — Investment prioritisation / Cost and profitability driver analysis / Business model evaluation / Portfolio, customer, market, segment, or channel decisions
5. **Integration, Transition & Change** — Integration support / Restructuring and transition support / Transformation execution / Cross-functional and cross-border implementation
6. **Structuring & Governance** — Entity and operational structuring / Governance and decision-rights design / Cross-border operating readiness / Coordination across finance, legal, tax, and compliance workstreams

### Key Decisions — Scope Cards

- **Titles shifted from product-sounding to outcome-led**: Original titles like "Planning, Forecasting & Prioritisation" were shortened. "Lean & Stakeholder-Ready Reporting" became "Reporting & Board Materials." "Decision Support & Business Insight" became "Decision Support & Insight." The goal was titles that read as categories, not product names.
- **"& Accountability" dropped from Performance Cadence**: Shorter title, accountability is in the bullets.
- **"Execution Through Change & Transition" became "Integration, Transition & Change"**: The original title led with "execution" which felt generic. The new title leads with the specific activities.
- **"Cross-functional resource alignment" removed from Decision Support**: Reduced from 5 to 4 bullets to match other cards better.
- **"Transformation execution support" simplified to "Transformation execution"**: "Support" was redundant.
- **Compliance/tax ordering**: "finance, legal, tax, and compliance" (not "compliance, and tax") — compliance comes last as it's the weightiest term.

---

## 6. Content Assessment Criteria (Recurring Patterns)

These criteria were applied consistently across all copy decisions:

1. **Brevity wins**: If a sentence can lose a word without losing meaning, lose the word. The user consistently shortened proposed copy.
2. **No premature implementation**: Copy must be evaluated and approved before being written to HTML. Multiple corrections occurred when changes were implemented before sign-off.
3. **Exact line splits matter**: When the user specifies line breaks, they are visual rhythm decisions. Implement exactly as specified.
4. **Titles are categories, not products**: Service descriptions should read like areas of work, not product names on a shelf.
5. **Consistency across pages**: Homepage and services page copy must align — same bullet points, same engagement descriptions, same terminology.
6. **Implicit over explicit value**: Don't say "save money." Say "without building a full senior layer in-house." Let the reader draw the conclusion.
7. **Collaborative framing**: "We work alongside your leadership team" — not "we replace," "we manage," or "we run."
8. **Compliance is standalone**: In cross-border contexts, compliance is always a distinct item, never buried in a grouping.
9. **Scope examples should be recognizable**: Sprint scope examples should use language that readers recognize immediately without processing — "Board packs" not "stakeholder documentation packages."
10. **Order signals priority**: The sequence of items in lists and tables reflects client likelihood and entry-point frequency, not alphabetical or categorical ordering.

---

## 7. Working Approach

1. **Evaluate before implementing**: Present copy options or comparisons in conversation first. Only write to files after explicit approval.
2. **Diff-check workflow**: When the user provides a reference version, compare against current implementation line-by-line and present differences in a table format before making changes.
3. **Incremental changes**: Make one category of change at a time (e.g., titles, then bullets, then structure). Don't batch unrelated changes.
4. **User drives copy**: The user provides final copy or chooses between options. The assistant proposes but does not unilaterally decide on customer-facing language.
5. **Cross-page consistency checks**: After changing copy on one page, check whether the same language appears on other pages and flag mismatches.

---

## 8. Open / Deferred Items

- **About page restructure**: Full proposed restructure was drafted in conversation but NOT implemented. User still reviewing.
- **Homepage alignment**: Homepage engagement cards and service items should be checked against the finalized services page content for consistency.
- **Footer copy**: Still under review from a previous session.
- **Mobile responsiveness**: Not yet addressed for the services page.
- **Git commit**: Multiple uncommitted changes across services.html, index.html, and css/style.css.
