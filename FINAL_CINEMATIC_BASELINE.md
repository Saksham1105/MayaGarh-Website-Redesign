# FINAL CINEMATIC VISUAL BASELINE AUDIT
## Maya Garh Pushkar — Phase 11E Pre-Polish Baseline

**Date:** September 20, 2026  
**Status:** CAPTURED & AUDITED  
**Artifact:** `FINAL_CINEMATIC_BASELINE.md`  

---

### 1. Executive Summary

In accordance with Phase 11E requirements, an automated visual baseline capture was executed across all **10 target viewports** (3 Desktop, 2 Tablet, 5 Mobile) and across all **10 structural chapters** (`Hero → Prologue → Villas → Curations → Weddings → Location → Gallery → Accolades → Reservation → Footer`), producing 100 section screenshots stored in `test-results/final_baseline/`.

All captures were evaluated by direct visual inspection of rendered images in addition to computed DOM metrics.

---

### 2. Viewport Geometry & Overflow Validation

| Viewport Category | Viewport Dimension | Scroll Height | Horizontal Overflow | Result |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop Wide** | 1440 × 900 | 43,188 px | None (`scrollWidth === innerWidth`) | **PASS** |
| **Desktop Standard** | 1280 × 800 | 39,811 px | None (`scrollWidth === innerWidth`) | **PASS** |
| **Desktop Compact** | 1024 × 768 | 44,767 px | None (`scrollWidth === innerWidth`) | **PASS** |
| **Tablet Large** | 820 × 1180 | 41,547 px | None (`scrollWidth === innerWidth`) | **PASS** |
| **Tablet Portrait** | 768 × 1024 | 53,739 px | None (`scrollWidth === innerWidth`) | **PASS** |
| **Mobile Pro Max** | 430 × 932 | 46,459 px | None (`scrollWidth === innerWidth`) | **PASS** |
| **Mobile Standard** | 414 × 896 | 46,636 px | None (`scrollWidth === innerWidth`) | **PASS** |
| **Mobile Reference** | 390 × 844 | 46,962 px | None (`scrollWidth === innerWidth`) | **PASS** |
| **Mobile Compact** | 375 × 812 | 47,362 px | None (`scrollWidth === innerWidth`) | **PASS** |
| **Mobile Small** | 360 × 800 | 48,022 px | None (`scrollWidth === innerWidth`) | **PASS** |

**Zero horizontal overflow** detected across all 10 responsive viewports.

---

### 3. Concrete Chapter-by-Chapter Visual Observations

#### Chapter 1: Hero (`#hero`)
- **Visual Observation [Critical]**: The Hero background image container (`.mediaContainer` in `HeroMedia.module.css`) was styled with `z-index: var(--z-below)` (`-1`). In CSS stacking context rules, elements with negative z-index inside a parent with an explicit `background-color` (`#hero` with `var(--bg-dark) = #1A1817`) are rendered behind the parent's solid background fill. Consequently, the authentic property photography (`MAYA-GARH-PUSHKAR57.webp`) was occluded behind the dark background, leaving only the header, text, and buttons visible on solid dark charcoal.
- **Remedy**: Adjust `.mediaContainer` to `z-index: var(--z-base)` (`1`), ensuring the photography is visible behind text (`z-index: 10`) and header (`z-index: 50`) while resting cleanly above the section background.
- **Composition & Typography**:
  - Main Title: `MAYA GARH` rendered in Cormorant Garamond at `99.2px` (desktop), `lineHeight: 1.05`, `letterSpacing: 0.08em`, with refined soft text shadow. Visually dominant and authoritative.
  - Subtitle: `PUSHKAR, RAJASTHAN` in Outfit uppercase `12px` gold (`#E6C587`), tracking `0.35em`. Perfectly subordinate.
  - Descriptor: `A Royal Sanctuary Amidst the Aravallis` in italic Cormorant Garamond `27px`, warm ivory (`#FDFBF7`, 85% opacity).
  - Header: Transparent bar integrating the custom star emblem, 7-link navigation, and gold pill CTA (`ENQUIRE FOR RATES`). When photography is rendered, the composition feels like a film opening title.

#### Chapter 2: Prologue (`#prologue`)
- **Visual Observation [Good]**: Vertical breathing room is expansive and serene (`padding: clamp(6rem, 9vw, 9rem) 0`).
- **Typography & Composition**: Dual overlapping architectural imagery (Day interior salon + Night fortress illuminated pool) balances the left-column serif narrative (`The Maya Garh Sanctuary`). Gold accent border on the pull quote (`Indulge in the opulence of Maya Garh...`) creates an unhurried, editorial rhythm.
- **Verdict**: Fully aligned with luxury monograph design. Leave alone.

#### Chapter 3: The Royal Villa Collection (`#villas`)
- **Visual Observation [Good]**:
  - **Desktop**: Pinned horizontal scrub with weighted counter (`01 / 06` through `06 / 06`) transitions seamlessly across all 6 verified signature residences (*Maha Maya*, *Amanjena*, *Malak*, *Adiva*, *Ameera*, *Mayan*). Photography dominates with 4:3 high-resolution plates and generous right-wing negative space.
  - **Mobile**: Stacks in natural vertical flow. Each villa features its own authentic architectural photo, villa badge, headline, description, rates note, and bespoke enquiry button (`#reservation?intent=stay&villa=<slug>`).
- **Verdict**: Signature experience is weighted, quiet, and expensive. Architecture should remain untouched.

#### Chapter 4: Curations (`#curations`)
- **Visual Observation [Good]**: Daylight linen chapter (`background-color: var(--bg-linen, #F7F4EE)`). Stepping from the dark villa chapter into Curations provides an intentional, luminous pause.
- **Composition**: Asymmetric alternating grid across 4 experiences:
  1. *Pushkar Desert Dune Sundowners* (Dunes night canopy)
  2. *Royal Verandah & Courtyard Dining* (Arched verandah overlooking pool)
  3. *The Royal Infinity Pool & Sun Terrace* (Daylight pool and ramparts)
  4. *Courtyard Oasis & Heritage Grounds* (Stone pavers and brass vessels)
- **Contrast**: Text in charcoal (`#2A2624`) exceeds WCAG AA (11.8:1) against the warm linen background.
- **Verdict**: Contrast and layout are balanced. Leave alone.

#### Chapter 5: Destination Weddings (`#weddings`)
- **Visual Observation [Good]**: Emotional transition back into rich darkness (`#1A1817`).
- **Composition**: Panoramic fort estate opening plate (`MAYA-GARH-PUSHKAR57.webp`), followed by the 5 celebration spaces, the dual wedding engagement models (Curated vs. Venue-Only), and the multi-day celebration narrative.
- **Aesthetic**: Restrained architectural elegance. Completely avoids generic wedding tropes, glitter, or floral badges.
- **Verdict**: High editorial standard. Leave alone.

#### Chapter 6: Location & Surroundings (`#location`)
- **Visual Observation [Good]**: Widens the narrative from the fortress walls to the sacred Aravalli valley.
- **Route Diagram**: Minimalist, understated transit diagram indicating transit from Jaipur, Kishangarh, Ajmer, and Delhi corridor.
- **Factual Integrity**: Zero coordinates exposed in reservation links. Concierge contact details provide direct access to arrival hosts.
- **Verdict**: Balanced and truthful. Leave alone.

#### Chapter 7: Visual Archive Gallery (`#gallery`)
- **Visual Observation [Good]**: Monograph-style visual collection of 32 authentic plates across 8 architectural chapters (*Architecture & Bastions*, *Royal Villa Living*, *Pools & Reflections*, *Courtyards & Gardens*, *Feasts & Tableware*, *Aravalli Vistas*, *Twilight & Lanterns*, *Artisanal Craftsmanship*).
- **Filters**: Subtle, quiet category chips with gold active indicators.
- **Lightbox**: Refined, accessible, escape-key responsive modal with backdrop blur.
- **Verdict**: Fulfills the archival brief. Leave alone.

#### Chapter 8: Accolades (`#accolades`)
- **Visual Observation [Good]**: Evidence-based guest trust presentation (Agoda 4.8, Goibibo 4.4, MakeMyTrip 4.2 with verified dates). Quiet courtyard imagery and three authentic architectural statements.
- **Verdict**: Restrained confidence without artificial award badges. Leave alone.

#### Chapter 9: Reservation & Concierge (`#reservation`)
- **Visual Observation [Good]**: Concierge-led personal enquiry model. Two-column layout with direct concierge contact lines (WhatsApp, telephone, email) on the left and structured preference form on the right.
- **CTAs & Channels**: Understated luxury language ("COMPILE CONCIERGE ENQUIRY", "Your Stay, Considered Personally"). Zero countdown timers, zero artificial urgency, zero booking-engine gimmicks.
- **Verdict**: Pristine conversion architecture. Leave alone.

#### Chapter 10: Luxury Footer (`footer`)
- **Visual Observation [Good]**: Architectural colophon with brand emblem, statement, 3-column directory (*The Sanctuary*, *Celebrations*, *Concierge*), verified address summary, copyright, and accessible smooth *Back to Top* button.
- **Verdict**: Elegant conclusion to the monograph. Leave alone.

---

### 4. Summary of Targeted Refinements Required for Phase 11E

1. **Hero Media Z-Index Correction**:
   - Update `.mediaContainer` in `src/components/hero/HeroMedia.module.css` from `z-index: var(--z-below)` (`-1`) to `z-index: var(--z-base)` (`1`) so the hero photograph is correctly rendered above the section background fill.
2. **Hero Vignette & Gradient Tuning**:
   - Ensure the radial vignette and bottom gradient provide optimal optical contrast for title text while preserving the golden sunlight and mountain skyline of the Pushkar panorama.
3. **Typography & Spacing Verification**:
   - Maintain optical consistency across all 10 viewports without introducing unnecessary token drift.
