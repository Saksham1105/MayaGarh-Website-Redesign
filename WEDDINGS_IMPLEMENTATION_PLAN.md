# Destination Weddings Implementation Plan: Maya Garh Pushkar

**Project**: Maya Garh Pushkar Luxury Redesign  
**Phase**: 6B Implementation Architecture (Plan Drafted in Phase 6A)  
**Date**: September 2026  
**Status**: Architecture Approved for Future Execution — **UI NOT YET IMPLEMENTED**  

---

## 1. Vision & Emotional Intent

The **Destination Weddings** section follows immediately after **Curations / Experiential Anthologies**.

### Creative Distinction Across Sections
* **Hero (Phase 2)**: Monumental royal atmosphere & cinematic first impression.
* **Prologue (Phase 3)**: Editorial philosophy, unhurried time, and sense of sacred place.
* **Royal Villa Collection (Phase 4)**: Spatial, cinematic, horizontal journey showcasing the 6 private pool sanctuaries.
* **Curations (Phase 5)**: Intimate travel-journal anthology with asymmetric editorial layouts and warm linen canvas.
* **Destination Weddings (Phase 6)**: **Ceremonial, architectural, romantic, and palatial storytelling**. An exclusive private fort destination for intimate unions and estate buyouts.

### Core Visual Language
* **Color Palette**:
  * Canvas: Deep warm sand / desert twilight sandstone (`#141211` or `#1E1B19` deep twilight fort backdrop contrasted with warm gold accents and royal umber).
  * Accents: Burnished Royal Gold (`#C28E64` / `#D4AF37`), Antique Brass, Deep Terracotta/Crimson undertones, Warm Candlelight glow.
* **Typography**:
  * Display Serifs (`Cormorant Garamond` / `Playfair Display`) with generous line-height and classical courtly styling.
  * Modern Grotesk (`Inter` / `Outfit`) for metadata, architectural tags, and chapter numeral glyphs.
* **Atmosphere**:
  * Nocturnal/Twilight romance, flickering candlelight, sandstone fortress ramparts, water reflections, and star-filled skies.
  * **Strictly Avoid**: Generic pastel-pink wedding templates, glitter, heart icons, commercial banquet hall clichés, or commodity vendor lists.

---

## 2. Structural Architecture & Section Flow

### Section Container: `<section id="weddings" ...>`

```
Curations (#curations)
  ↓
Transition Threshold: "CEREMONIAL DESTINATION · THE PRIVATE ROYAL FORT"
  ↓
Weddings Overview Banner:
  - Wide elevated estate aerial (unnamed 1.webp / MAYA-GARH-PUSHKAR62)
  - Grand Headline: "Destination Weddings"
  - Subtitle / Tagline: "An Intimate Royal Fortress for Sacred Union"
  - Lead Narrative: Absolute privacy, exclusive buyout, and Aravalli mountain backdrop
  ↓
Four Architectural Celebration Chapters:
  01. The Private Fort Buyout & Royal Residency (unnamed 5.webp / unnamed.webp)
  02. Twilight Courtyard Pheras & Sacred Vows (unnamed 3.webp)
  03. The Poolside Sangeet & Starlit Soirée (MAYA-GARH-PUSHKAR55)
  04. Royal Banquet & Courtly Feasting (3-2.webp / MAYA-GARH-PUSHKAR22)
  ↓
Celebration Concierge CTA Block:
  - "BEGIN YOUR WEDDING JOURNEY →" (links to #reservation)
  - Direct contact coordinates: hello@mayaluxury.in / +91 98290 71817
```

---

## 3. Desktop Storytelling (>= 1025px)

* **Layout Style**: **Palatial Architectural Canvas with Monumental Framing**.
* **Opening Hero Frame**: Full-width cinematic banner featuring the sweeping aerial view of Maya Garh fortress battlements, royal infinity pool, and the Aravalli range.
* **Chapter Compositions**:
  * Staggered, grand proportions (alternating left-right architectural layouts).
  * High-fidelity photography paired with courtly typography, curated ceremonial moments, and provenance metadata.
  * Large, generous spacing (7rem to 9rem vertical margins) evoking unhurried luxury.
* **Interactive Elements**:
  * Subtle image hover scaling (`1.03` with 800ms smooth cubic-bezier).
  * Smooth GSAP ScrollTrigger reveals: gentle Y-axis lifts (`30px`) and elegant opacity transitions.
  * Zero scroll-hijacking, zero pinning traps, and zero carousels.

---

## 4. Mobile Touch-Native Flow (<= 768px)

* **Natural Vertical Cadence**:
  * 100% natural vertical scrolling designed for effortless one-handed thumb navigation.
  * Images stack organically above narrative copy (aspect-ratio `16:10` or `1:1` for maximum architectural impact).
* **Ergonomic CTAs**:
  * Touch-height strictly adhering to the approved **52px minimum touch target** standard established in Phase 5C.
  * Full-width mobile buttons with 2px border radius, clear uppercase typography, and visible focus outlines.
* **Lightweight Motion**:
  * Heavy scrub and parallax animations disabled on mobile.
  * Lightweight single-trigger opacity fades to ensure 60fps performance on lower-powered devices.

---

## 5. Transition: Curations → Weddings

* **Visual Shift**:
  * Curations concludes on its warm linen/sand canvas (`#F7F5F0`).
  * A bespoke gradient bridge (`linear-gradient(to bottom, #F7F5F0 0%, #1A1817 100%)`) creates a cinematic twilight descent into the romantic evening ambiance of Weddings.
  * This subtle descent mimics the natural progression of a day at Maya Garh: from afternoon tea on the veranda to a starlit fort wedding celebration.

---

## 6. Accessibility & Keyboard Navigation (WCAG 2.1 AA)

* **Semantic HTML**:
  * Section has stable `id="weddings"`.
  * Exactly one `<h2>Destination Weddings</h2>`.
  * Exactly four experience `<article id="wedding-...">` elements.
  * Exactly one `<h3>` per celebration chapter.
  * `<figure>` and `<figcaption>` elements for each verified photographic asset.
* **Keyboard Focus**:
  * All CTAs keyboard-reachable via Tab.
  * Visible focus state: `outline: 3px solid var(--color-gold-sand)` with `outline-offset: 3px`.
  * Zero focus traps.
* **Reduced Motion**:
  * `@media (prefers-reduced-motion: reduce)`: All opacity set to `1`, transforms disabled, content rendered immediately without animation dependencies.

---

## 7. Performance & Image Strategy

* **Next.js `<Image />`**:
  * All images loaded with responsive `sizes` tailored to desktop (`50vw`) and mobile (`92vw`).
  * `priority={false}` and `loading="lazy"` across all chapters to safeguard the page load speed.
  * Stable aspect ratio containers to prevent Cumulative Layout Shift (CLS = 0).

---

## 8. Verification & QA Protocol (Planned for Phase 6C)

* `npx tsc --noEmit` (0 errors)
* `npx eslint src --ext .ts,.tsx` (0 errors)
* `npm run build` (Static export verification)
* Dedicated Playwright test suite `tests/weddings.spec.ts`:
  * Semantic heading hierarchy
  * 4 chapters present with verified data
  * CTA targets (`#reservation`)
  * 52px mobile touch-target height
  * 10 viewport responsive check (360px to 1440px)
  * Reduced motion compliance
  * 0 console errors, 0 broken images
