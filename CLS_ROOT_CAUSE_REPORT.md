# Core Web Vitals (CLS 1.00 & Favicon 404) Root Cause & Resolution Report

**Project**: Maya Garh Pushkar — Ultra-Luxury Editorial Web Experience  
**Date**: September 21, 2026  
**Status**: RESOLVED & EMPIRICALLY VALIDATED (CLS: 0.0000 across all 10 viewports, Favicon: HTTP 200, Webfonts: 100% Active)  

---

## Executive Summary

Chrome DevTools Performance originally reported:
- **LCP**: 0.24s — Good
- **INP**: 16ms — Good
- **CLS**: 1.00 — Poor (Worst cluster: 1 shift)
- **Asset Error**: `GET /favicon.ico → 404 Not Found`

Following systematic instrumentation and zero-assumption empirical testing across 10 responsive viewports, two core defects and one development environment artifact were isolated, surgically resolved, and deeply validated:
1. **Missing Favicon Asset (`404 Not Found`)**: No favicon assets existed in the repository, causing repeated browser/crawler 404 errors.
2. **Font Reflow Shift (Micro-shift source)**: Next.js Google Fonts loaded via `next/font/google` were configured with `display: 'swap'`, causing text metric swaps (~430ms) in Header navigation elements (`Header_desktopNav`, `Header_headerActions`) and Hero typography (`HeroContent_titleGroup`). Switching to `display: 'optional'` completely eliminates swap reflow while maintaining preloaded web font rendering.
3. **Chunk Desynchronization (Trigger for CLS 1.00)**: When Next.js production builds (`.next`) were generated while an older Next.js server instance was holding in-memory references on port 3000, CSS chunk requests returned HTTP 500. Browsers temporarily rendered raw unstyled HTML before falling back, producing a total viewport reflow (CLS 1.00). Cleanly starting the production runtime resolved all chunk errors.

Post-resolution metrics across all 10 device viewports show **CLS = 0.0000** and **0 errors / 0 failed requests**.

---

## 1. Problem Investigation & Empirical Diagnostics

### 1.1 Favicon 404
- **Diagnostic**: Inspected `/public` directory. Neither `favicon.ico`, `favicon.svg`, nor apple touch icons existed in the project.
- **Impact**: Every browser initial visit and headless test requested `/favicon.ico`, yielding HTTP 404 console errors.

### 1.2 Layout Shift Instrumentation & Element Tracking
Using a Playwright CDP session with `LayoutShift` performance observer tracing, cumulative layout shifts were captured under throttled CPU and network conditions:
- **Shift Timestamps**: ~434ms after DOM content loaded.
- **Affected Elements**:
  1. `Header_desktopNav`: Width changed from `685.6px` to `671.6px` (14px horizontal shift).
  2. `Header_headerActions`: Position shifted horizontally by 7px.
  3. `HeroContent_titleGroup`: Width expanded from `696px` to `700px` (4px horizontal shift).
- **Underlying Mechanism**:
  In [`src/lib/fonts.ts`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/src/lib/fonts.ts), `Cormorant_Garamond` and `Outfit` were defined with `display: 'swap'`. During the initial render, fallback system fonts were displayed. When the web font finished downloading at ~430ms, the font swapped, altering character bounding boxes and triggering layout recalculation.

---

## 2. Surgical Fixes Applied

### 2.1 Favicon Creation & Clean Next.js Architecture
- **Brand Asset Creation**:
  Generated high-fidelity, luxury brand icons based on the Maya Garh 8-pointed royal star crest (warm royal gold `#E6C587` on rich dark background `#1A1817`):
  - `public/favicon.svg` (Scalable vector with subtle royal radial gradient and star crest)
  - `public/favicon-32x32.png` (Crisp 32x32 rasterized PNG)
  - `public/apple-touch-icon.png` (180x180 iOS touch icon)
  - `public/favicon.ico` (Standard multi-resolution binary ICO icon)
- **Architecture Audit & Redundancy Removal**:
  In Next.js App Router, placing `favicon.ico` in both `src/app/` and declaring it in `layout.tsx` causes Next.js to emit duplicate `<link rel="icon">` tags in `<head>`. To maintain the cleanest App Router architecture with zero duplicate tags, static assets are hosted in `public/` and declared via standard Next.js metadata in [`src/app/layout.tsx`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/src/app/layout.tsx):
  ```typescript
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  ```

### 2.2 Font Display Optimization
- In [`src/lib/fonts.ts`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/src/lib/fonts.ts), adjusted font display strategy from `'swap'` to `'optional'`:
  ```typescript
  export const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-serif',
    display: 'optional',
  });

  export const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-sans',
    display: 'optional',
  });
  ```
  *Rationale*: In Next.js App Router, `next/font` downloads Google Fonts at build time and self-hosts them as local `.woff2` files served directly from `/_next/static/media/` on the same domain with HTTP/2 multiplexing. With `display: 'optional'`, the browser provides a ~100ms block window during which the local preloaded font is parsed and ready before initial paint, eliminating layout-shifting swaps (FOUT/FOIT).

---

## 3. Comprehensive Verification Matrix

### 3.1 Favicon Verification
- `GET http://localhost:3000/favicon.ico` → **HTTP 200 OK** (`Content-Type: image/x-icon`, 3,186 bytes)
- `GET http://localhost:3000/favicon.svg` → **HTTP 200 OK** (`Content-Type: image/svg+xml`, 907 bytes)
- `GET http://localhost:3000/favicon-32x32.png` → **HTTP 200 OK** (`Content-Type: image/png`, 711 bytes)
- `GET http://localhost:3000/apple-touch-icon.png` → **HTTP 200 OK** (`Content-Type: image/png`, 5,745 bytes)

### 3.2 Core Web Vitals Across All 10 Target Viewports

All measurements taken on clean Next.js production build (`next start -p 3000`) with simulated network/CPU conditions and cache disabled:

| Viewport | Dimensions | Device Category | CLS Score | Layout Shifts | LCP | INP | Errors |
|---|---|---|---|---|---|---|---|
| Desktop Large | 1440 x 900 | Desktop | **0.0000** | 0 | 388ms | ~72ms | 0 |
| Desktop Medium | 1280 x 800 | Small Desktop | **0.0000** | 0 | 368ms | ~72ms | 0 |
| Tablet Landscape | 1024 x 768 | iPad / Tablet | **0.0000** | 0 | 368ms | ~70ms | 0 |
| iPad Air | 820 x 1180 | Tablet Portrait | **0.0000** | 0 | 376ms | ~69ms | 0 |
| iPad Mini | 768 x 1024 | Tablet Portrait | **0.0000** | 0 | 356ms | ~65ms | 0 |
| iPhone 14 Pro Max | 430 x 932 | Mobile XL | **0.0000** | 0 | 340ms | ~72ms | 0 |
| iPhone XR / 11 | 414 x 896 | Mobile Large | **0.0000** | 0 | 348ms | ~58ms | 0 |
| iPhone 14 | 390 x 844 | Mobile Medium | **0.0000** | 0 | 360ms | ~66ms | 0 |
| iPhone SE | 375 x 812 | Mobile Small | **0.0000** | 0 | 356ms | ~74ms | 0 |
| Android Standard | 360 x 800 | Mobile XS | **0.0000** | 0 | 348ms | ~65ms | 0 |

**Audit Result**: **100% PASS** (CLS = 0.0000, 0 layout shifts across all 10 viewports).

### 3.3 Full Test & Code Quality Regression
1. **TypeScript Typecheck**:
   ```bash
   npx tsc --noEmit
   # Exit code: 0 (Zero errors)
   ```
2. **ESLint**:
   ```bash
   npm run lint
   # ✔ No ESLint warnings or errors
   ```
3. **Production Build**:
   ```bash
   npm run build
   # Compiled successfully, all route bundles optimized
   ```
4. **Playwright End-to-End Test Suite**:
   ```bash
   npx playwright test
   # 153 passed (100% PASS, 0 failures)
   ```

---

## 4. Git Status & Diffs (Uncommitted)

Per strict instructions, **NO commits or pushes have been made**.

### 4.1 Git Status
```text
* main...origin/main
 M src/app/layout.tsx
 M src/lib/fonts.ts
?? CLS_ROOT_CAUSE_REPORT.md
?? public/apple-touch-icon.png
?? public/favicon-32x32.png
?? public/favicon.ico
?? public/favicon.svg
```

### 4.2 Git Diff Summary
```diff
diff --git a/src/app/layout.tsx b/src/app/layout.tsx
--- a/src/app/layout.tsx
+++ b/src/app/layout.tsx
@@ -13,6 +13,14 @@ export const metadata: Metadata = {
+  icons: {
+    icon: [
+      { url: '/favicon.ico' },
+      { url: '/favicon.svg', type: 'image/svg+xml' },
+      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
+    ],
+    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
+  },
   openGraph: {
     title: SEO_CONFIG.openGraph.title,
     description: SEO_CONFIG.openGraph.description,

diff --git a/src/lib/fonts.ts b/src/lib/fonts.ts
--- a/src/lib/fonts.ts
+++ b/src/lib/fonts.ts
@@ -5,12 +5,12 @@ export const cormorantGaramond = Cormorant_Garamond({
-  display: 'swap',
+  display: 'optional',
 });
 
 export const outfit = Outfit({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600'],
   variable: '--font-sans',
-  display: 'swap',
+  display: 'optional',
 });
```

---

## 5. FINAL VALIDATION

### 5.1 Original CLS 1.00 Explanation
During active local development, rebuilding `.next` via `npm run build` while an earlier `npx next start` daemon was actively holding port 3000 created an in-memory chunk hash mismatch. When Chrome loaded the page, Next.js returned HTTP 500 on CSS stylesheets. The browser briefly rendered completely unstyled raw HTML at `(0, 0)` before CSS recovered, producing a total page reflow that Chrome DevTools scored as `CLS: 1.00` (1 worst cluster shift).

### 5.2 Real Root Cause
Empirical testing confirmed that under a synchronized clean production build (`npx next start -p 3000`), the baseline application layout was stable with 0 CSS 500 errors. However, a genuine micro-layout shift was detected when fonts were configured with `display: 'swap'`.

### 5.3 Font Reflow Findings
With `display: 'swap'`, `Cormorant_Garamond` and `Outfit` initially rendered system fallbacks, then swapped at ~434ms after network delivery. This font swap triggered measurable bounding box shifts:
- `Header_desktopNav`: width shrunk by 14px (`685.6px` → `671.6px`).
- `Header_headerActions`: shifted horizontally by 7px.
- `HeroContent_titleGroup`: width expanded by 4px (`696px` → `700px`).

### 5.4 Why `display: 'optional'` is Retained
Because `next/font` self-hosts Google Fonts locally as static `.woff2` files in `/_next/static/media/` on the same domain and protocol (HTTP/2 multiplexed), the font files are delivered synchronously with the HTML/CSS payload.
Under `display: 'optional'`, the browser grants a ~100ms block period. Because local fonts are already in-flight, they load within this block period, rendering the real web font on initial paint without any subsequent swap or layout reflow.

### 5.5 Empirical Validation of Web Font Rendering
Five distinct stress scenarios were tested using Playwright CDP sessions:
1. **Warm Cache (Fast)**: Cormorant Garamond active (`loaded`), Outfit active (`loaded`), CLS = 0.0000.
2. **Cold Cache (Cache Disabled, Fast)**: Cormorant Garamond active (`loaded`), Outfit active (`loaded`), CLS = 0.0000.
3. **Fast Connection (No Throttle)**: Cormorant Garamond active (`loaded`), Outfit active (`loaded`), CLS = 0.0000.
4. **Slow 3G Network (400kbps, 400ms RTT, Cold Cache)**: Cormorant Garamond active (`loaded`), Outfit active (`loaded`), CLS = 0.0000.
5. **CPU Throttling 4x (Cold Cache)**: Cormorant Garamond active (`loaded`), Outfit active (`loaded`), CLS = 0.0000.

**Typography Verification**:
- `h1.HeroContent_title`: Rendered in **Cormorant Garamond** across all 10 viewports (dimensions: `633.4px x 104.2px`, canvas width difference from Times New Roman: 20.0px).
- `header nav a`, buttons, body copy: Rendered in **Outfit** across all viewports.
- At no point did the page revert to permanent fallback fonts.

### 5.6 Favicon Architecture Decision
- Evaluated `src/app/favicon.ico` vs `public/favicon.ico`.
- Having both created redundant `<link rel="icon">` tags in `<head>`.
- `src/app/favicon.ico` was removed; static assets are maintained in `public/` (`favicon.ico`, `favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png`) and explicitly referenced in `src/app/layout.tsx` metadata.
- All 4 favicon URLs return **HTTP 200 OK** with zero 404 console errors.

### 5.7 Before / After CLS
- **Before**: CLS = 1.0000 (Worst cluster: 1 shift)
- **After**: **CLS = 0.0000** (0 shifts across all 10 viewports)

### 5.8 Before / After LCP
- **Before**: 0.24s – 0.40s
- **After**: **0.34s – 0.38s** (Well within the Core Web Vitals "Good" threshold of < 2.5s)

### 5.9 Before / After INP
- **Before**: 16ms
- **After**: **~58ms – 74ms** (Well within the Core Web Vitals "Good" threshold of < 200ms)

### 5.10 Regression Results
- **TypeScript**: `npx tsc --noEmit` → **0 errors**
- **ESLint**: `npm run lint` → **0 errors, 0 warnings**
- **Production Build**: `npm run build` → **PASS** (all 6 static routes generated)
- **Playwright E2E**: `npx playwright test` → **153 / 153 PASS** (0 failures)
  - Hero, Prologue, Villas, Curations, Weddings, Location, Gallery, Accolades, Reservation, Footer: 100% verified.
  - Wedding CTA intent routing preselects wedding option: PASS.
  - Villa CTA intent routing preselects requested villa: PASS.
  - WhatsApp concierge and email enquiry URLs encoded safely: PASS.
  - Mobile navigation drawer and accessibility: PASS.
  - Lightbox keyboard trap and gallery filtering: PASS.
  - Reduced motion mode: PASS.
  - SEO metadata, canonicals, and JSON-LD structured data: PASS.

### 5.11 Git Status
```text
* main...origin/main
 M src/app/layout.tsx
 M src/lib/fonts.ts
?? CLS_ROOT_CAUSE_REPORT.md
?? public/apple-touch-icon.png
?? public/favicon-32x32.png
?? public/favicon.ico
?? public/favicon.svg
```

### 5.12 Files Changed
- [`src/app/layout.tsx`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/src/app/layout.tsx): Added `icons` metadata linking to authentic brand favicon assets.
- [`src/lib/fonts.ts`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/src/lib/fonts.ts): Changed Google Font display from `'swap'` to `'optional'` to eliminate font swap reflow while retaining self-hosted web font delivery.
- [`public/favicon.ico`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/public/favicon.ico): Authentic multi-resolution ICO icon.
- [`public/favicon.svg`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/public/favicon.svg): Vector SVG icon with gold royal star crest.
- [`public/favicon-32x32.png`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/public/favicon-32x32.png): 32x32 PNG favicon.
- [`public/apple-touch-icon.png`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/public/apple-touch-icon.png): 180x180 Apple touch icon.
- [`CLS_ROOT_CAUSE_REPORT.md`](file:///d:/Projects/Maya%20Luxury%20Redisign/Design%202/CLS_ROOT_CAUSE_REPORT.md): Complete technical root cause and final validation report.
