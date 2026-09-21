# Final Real-World Browser QA Report — Maya Garh Pushkar

**Project**: Maya Garh Pushkar — Luxury Royal Sanctuary Redesign  
**Audit Type**: Full Real-World Browser QA & Fix Loop  
**Environment**: Production Next.js Build (`npm run build` + `npx next start -p 3000`)  
**Baseline Git Commit**: `03d298c`  
**Final Verified Git Commit**: `7a8ec49`  
**Date**: September 21, 2026  

---

## 1. QA Summary

| Metric | Result | Status |
| :--- | :--- | :--- |
| **Total Issues Discovered** | **1** (Contextual enquiry type not switching to "Destination Wedding & Buyout" when navigating via Wedding CTA on-page) | Diagnosed & Resolved |
| **Total Issues Fixed** | **1** | Verified in Real Browser |
| **Issues Remaining** | **0** | Clean Pass |
| **Final QA Verdict** | **PRODUCTION CERTIFIED — 100% CLEAN** | **PASS** |

---

## 2. Interaction Coverage

Every interactive control and customer journey across the sanctuary was rigorously tested in the browser:

### 2.1 Navigation & Sticky Header
- **Sanctuary (`#prologue`)**: Scrolls smoothly with sticky header offset (landed at target y-offset: `86px`).
- **The Villas (`#villas`)**: Scrolls to the palatial residences section (landed at y-offset: `86px`).
- **Curations (`#curations`)**: Target y-offset `86px`.
- **Weddings (`#weddings`)**: Target y-offset `87px`.
- **Location (`#location`)**: Target y-offset `86px`.
- **Visual Archive (`#gallery`)**: Target y-offset `86px`.
- **Accolades (`#accolades`)**: Target y-offset `87px`.
- **Zero Console Errors**: No JavaScript or hydration warnings fired during hash transitions.

### 2.2 Mobile Menu Drawer
- Tested on standard mobile viewport (`390×844`):
  - Hamburger button opens drawer with smooth sliding choreography.
  - Body scroll locking (`document.body.style.overflow = 'hidden'`) active while drawer is visible.
  - `Escape` key successfully dismisses the drawer and unlocks body scroll (`overflow = ''`).
  - Mobile drawer navigation links navigate to appropriate section anchors and auto-close the drawer.

### 2.3 Royal Villa Collection (All 6 Residences)
- Tested: **Maha Maya**, **Amanjena**, **Malak**, **Adiva**, **Ameera**, **Mayan**.
- Desktop: Horizontal spatial scroll scrub and synchronized counter indices (`01` through `06`).
- Mobile: Fluid vertical touch flow without horizontal scroll hijacking.
- CTA intent routing: Clicking *"Enquire for Maha Maya"* (`#reservation?intent=stay&villa=maha-maya`) routes to `#reservation` and preselects `"maha-maya"` in the `<select id="res-villa">` element.

### 2.4 Weddings & Royal Celebrations
- Hero, celebration spaces (Banquet, Lawns, Courtyards), engagement models, and multi-day narratives verified.
- **Defect Discovered & Fixed**: The wedding CTA previously used Next.js client `<Link>` for an on-page hash jump (`#reservation?intent=wedding`), which prevented the native browser `hashchange` event from triggering the reservation intent update. Replaced with native `<a>` tag and extended `ReservationSection` to listen for both `hashchange` and `popstate`.
- Re-tested: Clicking *"ENQUIRE FOR WEDDINGS"* smoothly routes to the reservation section and reliably selects the radio option `"Destination Wedding & Buyout"`.

### 2.5 Location & Nearby Sacred Horizons
- Pushkar Lake & 52 Ghats: Displays verified authentic typographic heritage seal (0 unlicensed/external stock images).
- Jagatpita Brahma Temple: Displays verified authentic typographic heritage seal (0 unlicensed/external stock images).
- Desert Dunes & Sundowners: Displays authentic property-approved photography.
- Card metadata layout: 0px collision between category badge and distance/travel time metadata across cards.

### 2.6 Visual Archive (Gallery)
- All 9 categories tested:
  1. `ALL ARCHIVE`: 32 archival plates visible, active state true.
  2. `ARCHITECTURE`: 4 plates visible, active state true.
  3. `VILLAS`: 8 plates visible, active state true.
  4. `POOLS & WATER`: 4 plates visible, active state true.
  5. `COURTYARDS`: 3 plates visible, active state true.
  6. `DINING`: 3 plates visible, active state true.
  7. `ARAVALLI VISTAS`: 3 plates visible, active state true.
  8. `TWILIGHT`: 3 plates visible, active state true.
  9. `CRAFTSMANSHIP`: 4 plates visible, active state true.
- Zero unexpected layout shift during category switches.
- Mobile category rail: Single-row horizontal scroll rail with no ugly scrollbars and smooth touch navigation.

### 2.7 Gallery Lightbox
- Clicking any gallery plate opens the modal dialog (`#gallery-lightbox-dialog`).
- Background scrolling is completely locked (`overflow: hidden`).
- Next and Previous buttons cycle through plates in continuous sequence.
- Keyboard `ArrowRight` and `ArrowLeft` keys navigate plates sequentially.
- `Escape` key closes the lightbox cleanly and restores body scrolling.
- Focus trap and ARIA dialog semantics verified.

### 2.8 Reservation Experience
- Form fields tested: Full Name, Email Address, Phone/WhatsApp, Enquiry Type radio group, Villa Preference dropdown, Arrival/Departure dates, Special Requests.
- Validation:
  - Submitting empty required fields displays descriptive `#res-name-error` alert (`role="alert"`).
  - Submitting invalid email pattern displays `#res-email-error` alert.
- Special Character & XSS Safety: Form fields accept accented characters, apostrophes (`"Maharaja's Suite"`), and sanitize payloads before URL composition.
- Safe action URLs: Form generates valid, sanitized WhatsApp (`https://wa.me/919829071817?...`) and mailto links without sending fake external submissions.

### 2.9 Colophon & Footer
- Direct concierge channels verified:
  - Phone: `tel:+919829071817`
  - Reservations Email: `mailto:reservation@mayaluxury.in`
  - WhatsApp: `https://wa.me/919829071817`
- Back to Top: Clicking *"Back to Top"* initiates Lenis smooth scrolling (duration 1.5s) and cleanly brings `window.scrollY` back to `0px`.

---

## 3. Responsive Coverage

Tested across 13 distinct device viewports spanning mobile, tablet, desktop, and orientation switches:

| Device / Viewport | Dimensions | Max Horizontal Overflow | Layout Status |
| :--- | :--- | :--- | :--- |
| **Android Compact** | 360 × 800 | **0px** | PASS |
| **iPhone SE** | 375 × 812 | **0px** | PASS |
| **iPhone 14 / 15** | 390 × 844 | **0px** | PASS |
| **iPhone XR / 11** | 414 × 896 | **0px** | PASS |
| **iPhone 14 Pro Max** | 430 × 932 | **0px** | PASS |
| **Mobile Landscape** | 844 × 390 | **0px** | PASS |
| **iPad Mini / Portrait**| 768 × 1024 | **0px** | PASS |
| **iPad Air Portrait** | 820 × 1180 | **0px** | PASS |
| **Tablet Landscape** | 1024 × 768 | **0px** | PASS |
| **Small Desktop** | 1280 × 800 | **0px** | PASS |
| **Standard Desktop** | 1440 × 900 | **0px** | PASS |
| **Mid-Size Desktop** | 1536 × 864 | **0px** | PASS |
| **Full HD Desktop** | 1920 × 1080 | **0px** | PASS |

---

## 4. Performance & Core Web Vitals

Measured on production build under real browser session:

| Vital | Measured Value | Standard Threshold | Evaluation |
| :--- | :--- | :--- | :--- |
| **First Contentful Paint (FCP)** | **384 ms** | < 1,800 ms | **Excellent (Well under 0.5s)** |
| **DOMContentLoaded** | **31 ms** | < 800 ms | **Sub-50ms instant execution** |
| **Complete Load Event** | **439 ms** | < 2,500 ms | **Optimal** |
| **Cumulative Layout Shift (CLS)** | **0.000** | < 0.100 | **Zero visual shift** |
| **Failed Image Requests** | **0** | 0 | **All assets 200 OK** |

---

## 5. Accessibility Audit

- **Keyboard Tab Navigation**: Traversed 24+ consecutive interactive elements via `Tab` / `Shift+Tab`. Focus outline remained clearly visible at all steps.
- **Heading Hierarchy**: Exactly **1 `<h1>`** tag (`"MAYA GARH"`). Clean hierarchical progression (`h1` → `h2` → `h3` → `h4`).
- **Semantic Dialogs**: Lightbox uses `role="dialog"`, `aria-modal="true"`, and label references.
- **ARIA Attributes**: Radio buttons use `role="radio"` with dynamic `aria-checked` states; category filters expose `aria-pressed`.
- **Reduced Motion**: Honored via GSAP `matchMedia('(prefers-reduced-motion: reduce)')`, cleanly presenting all elements in standard, stable layout without motion sickness triggers.

---

## 6. Console & Network Health

- **Console Errors**: `0`
- **Console Warnings**: `0`
- **Failed Network Requests (4xx / 5xx)**: `0`
- **Hydration Errors**: `0`

---

## 7. Automated Test Suite Regression

- **Playwright Test Suite**: **153 / 153 PASSED** (100% green).
- **TypeScript Compiler (`tsc --noEmit`)**: 0 errors.
- **ESLint (`npm run lint`)**: 0 warnings, 0 errors.
- **Production Build (`next build`)**: Clean compilation across all 6 static routes.

---

## 8. Changes Made

| File | Change Description |
| :--- | :--- |
| [`src/components/weddings/WeddingsSection.tsx`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/src/components/weddings/WeddingsSection.tsx) | Replaced Next.js `<Link>` with native `<a>` for the on-page `#reservation?intent=wedding` CTA to ensure browser-native hash navigation without SPA interception. |
| [`src/components/reservation/ReservationSection.tsx`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/src/components/reservation/ReservationSection.tsx) | Added `popstate` event listener alongside `hashchange` to guarantee flawless two-way synchronization of URL contextual intent. |

---

## 9. Git Status

- **Working Tree**: Clean (`git status` reports nothing to commit).
- **Previous Remote Baseline**: `03d298c`
- **New Local Commit**: `7a8ec49` (`fix(reservation): align wedding CTA anchor navigation and intent event listeners`)
- **Remote Push**: **NOT PUSHED** (Preserved locally as instructed).
- **Release Readiness**: Ready to push whenever authorized.
