# PHASE 11A — GLOBAL CINEMATIC EXPERIENCE AUDIT

**Property:** Maya Garh Pushkar — Luxury Royal Sanctuary Redesign  
**Audit Date:** September 2026  
**Scope:** Full-page coherence, visual hierarchy, motion, typography, spacing, color, accessibility, SEO, performance, navigation, and Awwwards-level qualitative review.

---

## 1. EXECUTIVE SUMMARY

The Maya Garh website has been built across 10 implementation phases and now comprises **9 distinct editorial chapters** rendered as a single-page experience. The overall quality is **high** — the dark luxury aesthetic, editorial typography, and GSAP-driven cinematic scroll choreography create a compelling property showcase.

However, the audit identifies **several critical issues** and numerous refinement opportunities that must be addressed before the experience reads as **one cohesive luxury digital property** rather than a collection of individually excellent sections.

### Severity Classification

| Severity | Count | Description |
|----------|-------|-------------|
| CRITICAL | 4 | Broken functionality, missing components, or severe coherence failures |
| HIGH | 8 | Significant UX/design issues that undermine the luxury standard |
| MEDIUM | 9 | Refinement opportunities for polish and consistency |
| LOW | 6 | Minor enhancements for Awwwards-level perfection |

---

## 2. CRITICAL ISSUES

### 2.1 MISSING FOOTER SECTION

The website has **no Footer component**. The page abruptly ends after the Reservation section.

The page architecture specifies: Hero - Prologue - Villas - Curations - Weddings - Location - Gallery - Accolades - Reservation - **Footer**

A luxury property website without a footer is architecturally incomplete. The footer must contain:
- Maya Luxury brand identity
- Maya Garh address / coordinates
- Official contact channels (phone, email, WhatsApp)
- Instagram / social links
- Legal notices (copyright year, privacy)
- Quick navigation links back to key sections
- "A Maya Luxury Property" attribution

**Impact:** The visitor scrolls to the bottom of the Reservation form and encounters raw browser chrome. This completely shatters the editorial immersion.

**File:** `src/app/page.tsx` — No Footer component exists.

---

### 2.2 BROKEN NAVIGATION ANCHOR — "Curations" links to #experiences

The Header nav links "Curations" to `#experiences`, but the CurationsSection uses `id="curations"`.

**Analysis:**
- `Header.tsx` line 68: Desktop nav uses `href="#experiences"` 
- `Header.tsx` line 121: Mobile nav uses `href="#experiences"`
- `CurationsSection.tsx` line 199: Section uses `id="curations"`

There is **no element** with `id="experiences"` anywhere in the codebase. Clicking "Curations" in the header does nothing.

**Fix:** Change both desktop and mobile nav `href="#experiences"` to `href="#curations"`.

---

### 2.3 MISSING NAVIGATION LINKS — Weddings, Accolades, Reservation

The Header navigation only includes: Sanctuary, Villas, Curations, Gallery, Location.

**Missing from nav:**
- **Weddings** (`#weddings`) — A major revenue-driving section with no direct navigation path
- **Accolades** (`#accolades`) — Trust chapter with no navigation access
- **Reservation** (`#reservation`) — The primary conversion chapter is only accessible via the "Enquire for Rates" CTA button (which opens WhatsApp externally, not the on-page form)

**Impact:** Visitors cannot navigate to 3 of the 9 major sections from the header. The "Enquire for Rates" header CTA links to `wa.me/919829071817` instead of scrolling to the on-page reservation form, creating a disconnect between the carefully built reservation experience and the primary CTA.

---

### 2.4 HERO CTA MISMATCH — "Enquire for Rates" Opens WhatsApp, Not On-Page Form

Both the Header CTA and the Hero "Enquire for Rates" button link to `https://wa.me/919829071817`, bypassing the on-page Reservation and Concierge experience entirely.

**Files:**
- `Header.tsx` line 86: `href="https://wa.me/919829071817"`
- `HeroContent.tsx` line 37-39: `href="https://wa.me/919829071817"`

The Reservation section at `#reservation` includes a full enquiry form with contextual intent routing — but it is unreachable from the most prominent CTA on the page.

**Recommendation:** The header CTA should scroll to `#reservation`. WhatsApp should be a secondary channel within the Reservation section (which it already is).

---

## 3. HIGH SEVERITY ISSUES

### 3.1 Section Spacing Inconsistency

Section vertical padding varies significantly across phases:

| Section | Padding Pattern | Desktop | Mobile |
|---------|----------------|---------|--------|
| Prologue | Fixed | `8rem 0 9rem` | `4.5rem 0 5.5rem` |
| Villas | None (pinned viewport) | `100vh` | `auto` |
| Curations | Via child elements | custom | custom |
| Weddings | Via child elements | custom | custom |
| Location | Via child elements | custom | custom |
| Gallery | Via child elements | custom | custom |
| Accolades | Clamp | `clamp(5-9rem) 0 clamp(6-10rem)` | `4rem 0 5rem` |
| Reservation | Clamp | `clamp(5-9rem) 0 clamp(6-10rem)` | `4.5rem 0 5.5rem` |

**Finding:** The Prologue uses fixed `rem` values while Accolades and Reservation use `clamp()`. Curations, Weddings, Location, and Gallery delegate spacing to internal elements — creating inconsistent inter-section breathing room. A unified section-spacing system should be applied.

---

### 3.2 Eyebrow Typography Drift

The "eyebrow" label treatment varies across sections:

| Section | Font Size | Letter Spacing | Weight |
|---------|-----------|----------------|--------|
| Prologue | `0.75rem` | `0.3em` | 500 |
| Villas | `0.72rem` | `0.3em` | 500 |
| Curations | Not directly visible | — | — |
| Accolades | `0.75rem` | `0.22em` | 500 |
| Reservation | `0.75rem` | `0.22em` | 500 |

**Finding:** Letter-spacing is inconsistent — `0.3em` in early sections, `0.22em` in later ones. The Villas eyebrow is `0.72rem` while others are `0.75rem`. This creates subtle typographic drift that undermines the sense of a unified design system.

---

### 3.3 Section Heading Scale Drift

| Section | Heading font-size | Line Height |
|---------|-------------------|-------------|
| Prologue | `clamp(2.5rem, 4.5vw, 4rem)` | `1.15` |
| Curations | Custom intro | — |
| Accolades | `clamp(2.25rem, 4vw, 3.75rem)` | `1.12` |
| Reservation | `clamp(2.25rem, 3.8vw, 3.6rem)` | `1.12` |

**Finding:** Each phase introduced slightly different heading scales. The Prologue heading is larger (up to `4rem`) than Accolades (`3.75rem`) and Reservation (`3.6rem`). While some variation is intentional for hierarchy, the inconsistency should be audited against a shared typography scale.

---

### 3.4 Undefined CSS Custom Property: --accent-gold-light

**File:** `PrologueSection.module.css` line 58

```css
color: var(--accent-gold-light, #f3e5c8);
```

`--accent-gold-light` is not defined in `tokens.css`. It falls back to `#f3e5c8`, but this is a design system leak. Either define it in tokens or replace with an existing token.

---

### 3.5 Inline Style in Header Mobile Drawer

**File:** `Header.tsx` line 135

```tsx
<li style={{ marginTop: '1.5rem' }}>
```

This inline style breaks the CSS module pattern used everywhere else. Should be extracted to a CSS module class.

---

### 3.6 Z-Index Hard-Coding in Prologue and Villas

**Files:** `PrologueSection.module.css` line 8, `VillasSection.module.css` line 7

```css
z-index: 2;
```

Both `.prologueSection` and `.villasSection` use hard-coded `z-index: 2` instead of the design tokens (`--z-base: 1` or `--z-content: 10`). This conflicts with the established z-index hierarchy in `tokens.css`.

---

### 3.7 HeroMedia Mobile Detection via window.innerWidth

**File:** `HeroMedia.tsx` lines 16-21

The component uses a `resize` event listener + `window.innerWidth` check to switch between mobile/desktop hero images. This:
- Causes a flash on initial render (SSR mismatch)
- Uses a JS-driven approach when CSS `<picture>` + `srcset` would be more performant
- Does not debounce the resize listener

---

### 3.8 GSAP registerPlugin Called Multiple Times

`gsap.registerPlugin(ScrollTrigger)` is called in:
- `LenisProvider.tsx` (with window guard)
- `useGSAPContext.ts` (with window guard)
- `HeroSection.tsx` (with window guard)
- `PrologueSection.tsx` (**no window guard**)
- `VillasSection.tsx` (**no window guard**)
- `CurationsSection.tsx` (with window guard)
- And 4+ more section components

**Finding:** Registration is redundant. It should be done once, ideally only in `LenisProvider.tsx` which is the root animation context. The Prologue and Villas register without a `typeof window !== 'undefined'` guard, which could cause SSR issues.

---

## 4. MEDIUM SEVERITY ISSUES

### 4.1 Background Color Rhythm

All sections use `--bg-dark (#1A1817)` with the exception of Curations which uses `--bg-light` for its transition threshold. The page reads as a long dark scroll with a single light interruption.

```
Hero: dark - Prologue: dark - Villas: dark - Curations: light/dark - Weddings: dark - Location: dark - Gallery: dark - Accolades: dark - Reservation: dark
```

The only visual section boundary is the `border-top: 1px solid rgba(230, 197, 135, 0.12)` on Accolades and Reservation. Five consecutive dark sections (Weddings through Reservation) lack visual breathing between them.

---

### 4.2 Border-Top Inconsistency as Section Separators

Only Accolades and Reservation have `border-top`. Other section transitions rely solely on padding/whitespace. This creates an inconsistent rhythm. Either apply subtle top borders uniformly or remove them.

---

### 4.3 scroll-behavior: smooth Conflicts with Lenis

`globals.css` line 15 declares `scroll-behavior: smooth` on `html`. Lenis takes over scroll behavior via JS. Having both active can cause:
- Double-smoothing or conflicting scroll interpolation
- Anchor jump behavior inconsistency

**Recommendation:** Remove `scroll-behavior: smooth` from the CSS since Lenis handles all scroll smoothing.

---

### 4.4 Missing scroll-margin-top on Most Sections

Only Accolades and Reservation define `scroll-margin-top`. When the fixed header (z-index: 50) overlaps anchor targets, sections like `#prologue`, `#villas`, `#curations`, `#gallery`, `#location`, `#weddings` will scroll beneath the header bar.

---

### 4.5 Container Padding Inconsistency

Most sections use the `.container` class from globals.css (max-width + auto margins), but some sections define their own `.inner` class (Accolades, Reservation) with the same pattern but different specifics. This creates two parallel container systems.

---

### 4.6 Animation Parameter Inconsistency

Early sections (Prologue, Villas) use the centralized `useGSAPContext` hook cleanly. Later sections also use `useGSAPContext` but differ in animation parameter choices:

| Metric | Hero/Prologue | Weddings/Location | Accolades/Reservation |
|--------|--------------|-------------------|----------------------|
| Initial opacity | `0.4` | `0.5` | `0` |
| Y offset | `30px` | `24px / 20px` | `15-20px` |
| Duration | `0.9-1.2s` | `0.8-1.0s` | `0.65-0.85s` |
| Ease | `power3.out` | `power2.out` | `power2.out` |

The inconsistency is subtle but noticeable. Entrances feel slightly different across sections. Later sections are faster and use smaller y-offsets, creating a sense of acceleration.

---

### 4.7 Gallery Section Dominates Page Height

The Gallery section spans approximately 13,000px of the approximately 42,000px total page height (31%). The visual archive of "32 Archival Plates" creates an extremely long section that may cause scroll fatigue before reaching Accolades and Reservation.

---

### 4.8 Lenis syncTouch: false Disables Touch Momentum

`LenisProvider.tsx` line 37: `syncTouch: false` and `smoothWheel: !isTouchDevice` effectively disables Lenis on mobile devices. While this avoids touch-scroll interference, it means desktop and mobile have completely different scroll physics.

---

### 4.9 window.innerWidth Check in Prologue Animations

`PrologueSection.tsx` line 65:
```ts
if (detailImgRef.current && window.innerWidth > 768)
```

This JS-based responsive check runs once on mount but does not respond to resize. If a user starts on mobile width and rotates to landscape, the parallax animation will not activate. GSAP `matchMedia` is already used in other sections and should be used here too.

---

## 5. LOW SEVERITY ISSUES

### 5.1 Missing Preconnect Hints

No `<link rel="preconnect">` for Google Fonts CDN. While `next/font/google` handles font loading, adding preconnect hints can improve initial connection timing.

### 5.2 Image Quality Uniformity

All images use `quality={90}`. For large background/hero images, `quality={85}` would reduce payload without perceptible quality loss.

### 5.3 Gallery Progressive Loading

The Gallery section loads 32 images simultaneously. A progressive reveal or intersection-observer-based loading strategy could improve initial section performance.

### 5.4 Hardcoded 600vw Track Width

`VillasSection.module.css` line 66: `width: 600vw` is hardcoded to 6 villas x 100vw. If villa count changes, this will not adapt.

### 5.5 CSS will-change on Multiple Elements

`will-change: transform` is applied to several elements. Over-use of `will-change` can increase GPU memory usage.

### 5.6 Form Autocomplete Attributes

The Reservation form inputs lack `autocomplete` attributes for browser autofill (e.g., `autocomplete="name"`, `autocomplete="email"`, `autocomplete="tel"`).

---

## 6. VISUAL COHERENCE ASSESSMENT

### 6.1 Color Palette Audit

| Token | Value | Usage Status |
|-------|-------|-------------|
| `--bg-dark` | `#1A1817` | Used — Primary background, consistent |
| `--bg-dark-surface` | `#242120` | Used — Card backgrounds, consistent |
| `--bg-light` | `#FDFBF7` | Used only in Curations threshold |
| `--bg-light-surface` | `#F5F2EB` | Defined but unused |
| `--accent-gold` | `#E6C587` | Used — Consistent across all sections |
| `--accent-gold-hover` | `#D4B070` | Used — Hover states, consistent |
| `--accent-terracotta` | `#C28E64` | Defined but **never used** |
| `--text-dark` | `#1A1817` | Defined but unused |
| `--text-gold` | `#E6C587` | Defined but unused (sections use --accent-gold directly) |

**Finding:** 4 tokens are defined but unused. `--accent-terracotta` was likely intended for warmth contrast but never implemented.

---

### 6.2 Typography System Audit

| Role | Font | Weight | Used Consistently |
|------|------|--------|--------------------|
| Headlines | Cormorant Garamond | 300 | Yes |
| Body Text | Outfit | 300-400 | Yes |
| Eyebrows/Labels | Outfit | 500 | Mostly (letter-spacing varies) |
| CTAs/Buttons | Outfit | 500-600 | Varies (500 in header, 600 in reservation) |

---

### 6.3 Motion Language Audit

The animation system uses two distinct vocabularies:
1. **Camera-like** (Hero, Prologue): Scale reveals, dolly-zoom, parallax — feels cinematic
2. **Fade-up editorial** (everything else): opacity+y translations — feels digital

The transition from camera-like to editorial motion happens abruptly after Prologue. Consider adding subtle parallax or scale movements to later sections to maintain the cinematic thread.

---

## 7. ACCESSIBILITY AUDIT

| Criterion | Status | Notes |
|-----------|--------|-------|
| `aria-label` on sections | PASS | All 9 sections have descriptive labels |
| `aria-expanded` on mobile menu | PASS | Correctly toggles |
| `aria-hidden` on decorative elements | PASS | Properly applied |
| `aria-live` regions | PASS | Villa counter has aria-live="polite" |
| Focus indicators | PASS | Global focus-visible with gold outline |
| `prefers-reduced-motion` | PASS | CSS + JS respect reduced motion |
| Skip navigation link | FAIL | Missing skip-to-content link |
| `alt` text on images | PASS | All images have descriptive alt text |
| Form labels | PASS | All form inputs have associated labels |
| Touch target minimum (44x44px) | PASS | min-height: 48px on interactive elements |
| Screen reader figcaptions | PASS | Prologue figures have sr-only captions |
| Keyboard trap in lightbox | WARN | Gallery lightbox should trap focus |
| Color contrast (text on dark) | PASS | #FDFBF7 on #1A1817 = 15.3:1 ratio |
| Color contrast (gold on dark) | PASS | #E6C587 on #1A1817 = 8.2:1 — passes AA |
| Color contrast (muted text) | FAIL | #8C857B on #1A1817 = 3.7:1 — **fails WCAG AA for small text (requires 4.5:1)** |

---

## 8. SEO AUDIT

| Criterion | Status | Notes |
|-----------|--------|-------|
| Title tag | PASS | Properly set |
| Meta description | PASS | Properly set |
| Single h1 | PASS | "MAYA GARH" in HeroContent |
| Heading hierarchy | WARN | Some sections use h3 without a visible h2 parent |
| Open Graph tags | PASS | Title, description, image, locale |
| Twitter Card | PASS | Summary large image |
| JSON-LD Structured Data | PASS | Hotel, WebSite, Breadcrumb schemas |
| robots.txt | PASS | Environment-aware |
| sitemap.xml | PASS | Single entry with weekly frequency |
| Canonical URL | PASS | Set correctly |
| Image alt text | PASS | All images have descriptive alts |
| Semantic HTML | PASS | Proper section, article, figure, nav usage |

---

## 9. PERFORMANCE CONSIDERATIONS

| Area | Status | Notes |
|------|--------|-------|
| Image optimization | PASS | Next.js Image with AVIF/WebP, responsive sizes |
| Font loading | PASS | display: swap, next/font/google |
| Bundle dependencies | PASS | Only React, Next.js, GSAP, Lenis |
| JS bundle size | WARN | All section components are client-side. Consider server components for static sections. |
| Security headers | PASS | All major headers configured |
| CSS architecture | PASS | CSS Modules prevent style leakage |

---

## 10. INTER-SECTION TRANSITION AUDIT

| Transition | Character | Rating |
|------------|-----------|--------|
| Hero to Prologue | Smooth parallax exit, scroll indicator | Excellent |
| Prologue to Villas | Direct cut, same dark background | Abrupt |
| Villas to Curations | Horizontal scroll ends, light threshold appears | Good |
| Curations to Weddings | Back to dark, no visual separator | Unclear boundary |
| Weddings to Location | Dark to dark, same background | Unclear boundary |
| Location to Gallery | Dark to dark, same background | Unclear boundary |
| Gallery to Accolades | Thin gold border-top marks the transition | Adequate |
| Accolades to Reservation | Thin gold border-top marks the transition | Adequate |
| Reservation to end | Abrupt page end, no footer | Incomplete |

**Finding:** The middle of the page (Curations through Gallery) has 4+ consecutive dark sections with no visual demarcation between them.

---

## 11. AWWWARDS-LEVEL QUALITATIVE ASSESSMENT

### What Works Exceptionally Well
1. **Hero Opening** — The dolly-zoom entrance with staggered title reveal is cinematic
2. **Villa Horizontal Scroll** — The pinned viewport with progress counter is a standout moment
3. **Curations Editorial Layout** — Asymmetric layouts prevent monotony
4. **Accolades Restraint** — The quiet editorial approach (no stars, no badges) is sophisticated
5. **Reservation Form** — Contextual intent routing elevates a standard form
6. **Design Token System** — Well-structured tokens.css provides a solid foundation
7. **Reduced Motion Support** — Both CSS and JS honor prefers-reduced-motion

### What Needs Improvement
1. **Page Endcap** — No footer creates an unfinished feeling
2. **Navigation Coverage** — 3 major sections are unreachable from the header
3. **Section Rhythm** — The dark-on-dark middle stretch lacks visual breathing
4. **Motion Consistency** — Camera vocabulary fades after Prologue
5. **Typographic Drift** — Subtle inconsistencies in eyebrow/heading sizes

---

## 12. PRIORITIZED FIX SEQUENCE

### Phase 11B — Critical Fixes (Do First)
1. Build and integrate the Footer component
2. Fix broken `#experiences` to `#curations` nav link
3. Add Weddings and Reservation to header navigation
4. Decide on Header CTA target (WhatsApp vs #reservation)
5. Add scroll-margin-top to all section anchor targets

### Phase 11C — Coherence Hardening
1. Normalize eyebrow typography across all sections
2. Normalize section heading font-size scale
3. Normalize section vertical padding pattern (use consistent clamp())
4. Add --accent-gold-light to tokens.css (or replace usage)
5. Remove scroll-behavior: smooth from globals.css
6. Centralize gsap.registerPlugin(ScrollTrigger) to one location with SSR guard
7. Replace inline style in Header mobile drawer
8. Normalize z-index usage to design token variables

### Phase 11D — Polish and Enhancement
1. Add inter-section visual separators for the dark-on-dark stretch
2. Enhance --text-muted contrast to meet WCAG AA
3. Add skip navigation link
4. Add autocomplete attributes to reservation form
5. Remove unused CSS tokens or implement them
6. Review Gallery section height / progressive loading
7. Add picture element approach for Hero responsive images

---

*This audit was conducted as a diagnostic-only pass. No code changes have been made.*
