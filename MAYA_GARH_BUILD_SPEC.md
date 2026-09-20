# MAISON MAYA GARH PUSHKAR — REFINED TECHNICAL & CREATIVE BUILD SPECIFICATION

**Target Property:** Maya Garh Pushkar (A Maya Luxury Property)  
**Destination URL:** `https://mayaluxury.in/maya-garh/`  
**Output Document:** `MAYA_GARH_BUILD_SPEC.md`  
**Status:** Approved Pre-Implementation Build Specification  
**Date:** September 2026  

---

## 1. PRODUCT VISION

### 1.1 Experiential Philosophy
The digital experience of **Maya Garh Pushkar** must transcend transactional hotel websites. It functions as a **cinematic curtain-reveal into a private royal sanctuary** nestled between the ancient Aravalli mountains and the desert landscape of Pushkar. 

Rather than presenting an uninspired booking catalog, the website creates a sensory journey where time slows down, desert breezes rustle through marble courtyards, and plunge pools reflect golden dusk skies.

### 1.2 Emotional Blueprint
* **Sanctuary & Serenity:** The immediate feeling of escaping urban noise, stepping into quiet, secluded royal luxury.
* **Authentic Heritage:** Revering authentic Rajasthani architecture—jharokhas, carved stone arches, hand-painted frescoes, and shaded courtyards—presented through modern haute-couture digital aesthetics.
* **Intimacy & Bespoke Service:** Evoking the exclusivity of a private royal estate with dedicated hospitality and curated desert experiences.

### 1.3 Differentiation from Conventional Hotel Websites
| Conventional Hotel Website | Maya Garh Experiential Platform |
| :--- | :--- |
| Aggressive pop-up widgets and clutter. | Uncluttered cinematic motion that builds emotional desire before presenting non-intrusive action triggers. |
| Uniform room grids with generic feature bullets. | Editorial storytelling showcasing the 6 signature villas (*Maha Maya*, *Amanjena*, *Malak*, *Adiva*, *Ameera*, *Mayan*) with authentic property imagery. |
| Generic stock imagery or flat property photos. | Editorial WebP imagery with warm golden-hour color grading and multi-layered camera parallax depth. |
| Jarring page reloads and abrupt transitions. | Fluid inertia scrolling (`lenis`), clip-path section reveals, and clean GSAP ScrollTrigger choreography. |
| Desktop-down squeezed mobile layouts. | Mobile-first touch architecture with thumb-accessible bottom action docks and swipeable visual storytelling. |

---

## 2. FINAL INFORMATION ARCHITECTURE

The page architecture follows a deliberate narrative arc:

```
[1. Hero Experience (Opening Cinematic)]
       ↓
[2. The Maya Garh Prologue (Brand Narrative & Heritage)]
       ↓
[3. The Royal Villa Collection (Interactive Pinned Showcase of 6 Villas)]
       ↓
[4. Signature Experiential Curations (Dining, Sundowners, Wellness, Retreats)]
       ↓
[5. Destination Weddings & Celebrations]
       ↓
[6. Aravalli & Pushkar Sense-of-Place Story]
       ↓
[7. The Architectural & Property Gallery (Masonry & Lightbox)]
       ↓
[8. Concierge Reservation Dock & Rate Inquiry Modal]
       ↓
[9. Footer & Maya Luxury Portfolio Ecosystem]
```

---

## 3. PAGE-BY-PAGE / SECTION-BY-SECTION SPECIFICATION

### Section 1: Hero Experience (Opening Cinematic)
* **Purpose:** Establish instant emotional awe, quiet luxury authority, and cinematic visual immersion.
* **Content:** Property title ("MAYA GARH"), location subtitle ("PUSHKAR, RAJASTHAN"), brand descriptor ("A Royal Sanctuary Amidst the Aravallis"), scroll indicator, and translucent action CTA.
* **Media Required:** `MAYA-GARH-PUSHKAR57.webp` (desktop hero backdrop), `unnamed (5).webp` (alternate framing/mobile), Maya Luxury brand crest SVG.
* **Layout:** Fullscreen 100vh hero container (`100dvh` on mobile) with centered radial vignette gradient and bottom-anchored content bar.
* **Typography:** Title: *Cormorant Garamond* 300 (4.5rem - 7.5rem fluid). Subtitle: *Outfit* 400 Uppercase (0.25em tracking).
* **Desktop Behavior:** Hero image slowly scales (`1.08x -> 1.00x`) on enter. Subtitle and title slide up smoothly.
* **Tablet Behavior:** Fixed full-height layout with touch scroll indicator.
* **Mobile Behavior:** **[Mobile Adaptation: Simplified]** Static high-impact background (`unnamed (5).webp`) with touch-friendly CTA pill. Parallax camera tilt disabled on mobile for 60fps performance.
* **Scroll Behavior:** As user scrolls, Hero background Y-translates at 0.5x speed while text fades out (`opacity 1 -> 0`), leading into Section 2.
* **Entrance Animation:** Staggered opacity fade-in sequence on page load (Logo Crest -> Title -> Subtitle -> CTA).
* **Exit / Transition:** Section 2 clip-path overlaps smoothly from screen bottom.

---

### Section 2: The Maya Garh Prologue (Brand Narrative)
* **Purpose:** Introduce the story of Maya Garh’s courtyard architecture, desert peace, and royal hospitality.
* **Content:** Verified narrative: *"Indulge in the opulence of Maya Garh, where grandeur and elegance take center stage. Offering a peaceful paradise fit for royalty, where serene courtyards and gentle aura provide immeasurable comfort."*
* **Media Required:** `MAYA-GARH-PUSHKAR53-1030x687.webp`, `MAYA-GARH-PUSHKAR19-1030x687.webp`, `1-2.webp`, `3-2.webp`.
* **Layout:** Asymmetric 2-column layout (Left: Text narrative & key badges; Right: Overlapping dual-image stack with parallax offset).
* **Typography:** Headline: *Cormorant Garamond* Light Italic 300 (2.5rem - 3.8rem). Body: *Outfit* 300 (1.05rem, line-height 1.8).
* **Desktop Behavior:** Text column pins briefly while right image stack scrubs vertically at 1.3x speed relative to scroll.
* **Tablet Behavior:** Stacked 1-column layout with side-by-side images.
* **Mobile Behavior:** **[Mobile Adaptation: Replaced]** Pinned scroll disabled; single-column narrative followed by horizontal swipe photo carousel.
* **Scroll Behavior:** Smooth background color transition from Deep Charcoal (`#1A1817`) to Warm Linen (`#FDFBF7`).
* **Entrance Animation:** Simple line-by-line Y-translation (`y: 30 -> 0`, `opacity: 0 -> 1`).
* **Exit / Transition:** Smooth unpin into Section 3.

---

### Section 3: The Royal Villa Collection (6 Signature Villas)
* **Purpose:** Present all 6 signature villas (*Maha Maya*, *Amanjena*, *Malak*, *Adiva*, *Ameera*, *Mayan*) as distinct architectural sanctuaries.
* **Content:** Verified villa names & descriptions from original source. Rates displayed strictly as **"Enquire for Rates"** (no fabricated pricing).
* **Media Required:** Assigned imagery from `MayaGArh Images/` (see Section 6 for full mapping).
* **Layout:** Desktop: Viewport-pinned horizontal scrub track (GSAP ScrollTrigger). Mobile/Tablet: Vertical visual accordion cards.
* **Typography:** Villa Names: *Cormorant Garamond* 400 (2.8rem - 4.0rem). CTA: *Outfit* 500 Uppercase (0.85rem, tracking 0.15em).
* **Desktop Behavior:** Section pins to screen while vertical scroll transforms horizontal X-translation across 6 villa cards.
* **Tablet Behavior:** Touch-enabled horizontal snap carousel (`scroll-snap-type: x mandatory`).
* **Mobile Behavior:** **[Mobile Adaptation: Replaced]** Pinned horizontal track removed; replaced with vertical stacked accordion cards with collapsible amenity drawers.
* **Scroll Behavior:** Dynamic progress indicator updates at screen top.
* **Entrance Animation:** Section heading locks into top left corner while Villa 1 fades in from right.
* **Exit / Transition:** Unpins smoothly once Villa 6 is reached.

---

### Section 4: Signature Experiential Curations
* **Purpose:** Present experiential life at Maya Garh—Theme Dinners, Sundowners, Ayurvedic Wellness, and Retreats.
* **Content:** Theme Dinner Dining, Desert Sundowners, Wellness Packages, Pushkar Retreats.
* **Media Required:** `MAYA-GARH-PUSHKAR6-1030x687.webp` (Dining), `MAYA-GARH-PUSHKAR18-1030x687.webp` (Sundowners), `MAYA-GARH-PUSHKAR48-1030x687.webp` (Wellness), `MAYA-GARH-PUSHKAR30-1030x687.webp` (Retreats).
* **Layout:** Staggered 2x2 asymmetric masonry grid with warm gold rule borders.
* **Typography:** Titles: *Cormorant Garamond* 400 (2.2rem). Body: *Outfit* 300 (1rem).
* **Desktop Behavior:** Cards feature soft hover scale (`1.02x`) and dark overlay dimming on adjacent cards.
* **Tablet / Mobile Behavior:** **[Mobile Adaptation: Simplified]** Standard vertical card stack with full-width image cards and direct "Enquire Experience" action links.
* **Entrance Animation:** Clip-path reveal (`clip-path: inset(100% 0 0 0) -> inset(0 0 0 0)`).

---

### Section 5: Destination Weddings & Celebrations
* **Purpose:** Highlight Maya Garh as an exclusive venue for royal destination weddings and celebrations in Pushkar.
* **Content:** Wedding package highlight, courtyard sangeet setup, poolside mandap, and wedding concierge inquiry CTA.
* **Media Required:** `MAYA-GARH-PUSHKAR44-1030x687.webp` (Grand Courtyard), `MAYA-GARH-PUSHKAR41-1030x687.webp` (Night Illumination), `MAYA-GARH-PUSHKAR43-1030x687.webp` (Poolside setup).
* **Layout:** Full-bleed cinematic banner with central editorial content card.
* **Desktop / Mobile Behavior:** Parallax background image on desktop; simplified static background banner on mobile.
* **CTA:** `"Plan Your Celebration"` (opens WhatsApp Concierge pre-filled for Wedding inquiries).

---

### Section 6: Aravalli & Pushkar Sense-of-Place Story
* **Purpose:** Ground Maya Garh in its sacred Pushkar location and surrounding Aravalli mountain landscape.
* **Content:** Location overview, desert climate notes, and verified contact details (`+91 98290 71817` / `hello@mayaluxury.in`).
* **Media Required:** `MAYA-GARH-PUSHKAR57-1030x616.webp` (Aravalli Landscape backdrop).
* **Layout:** Split layout: Location guide left, high-contrast landscape imagery right.
* **Mobile Adaptation:** **[Mobile Adaptation: Simplified]** Single-column layout with click-to-map action link.

---

### Section 7: The Architectural & Property Gallery
* **Purpose:** Display property architecture, courtyards, plunge pools, interiors, and macro stone details.
* **Content:** Filterable photo grid (All, Villas, Courtyards, Dining, Details), full-screen lightbox.
* **Media Required:** Remaining 40+ WebP assets from `MayaGArh Images/`.
* **Layout:** 3-column irregular masonry grid.
* **Desktop / Mobile Behavior:** Keyboard-navigable lightbox modal on desktop; touch swipe lightbox on mobile.

---

### Section 8: Concierge Reservation Dock & Rate Inquiry Modal
* **Purpose:** Frictionless inquiry experience without displaying fabricated rates.
* **Content:** Floating action bar with dual CTAs: `"Enquire for Rates"` and `"WhatsApp Concierge"`.
* **Behavior:** Clicking "Enquire for Rates" launches a clean modal wizard (Select Villa, Select Tentative Dates, Guests, Contact Info) with direct submit or instant WhatsApp dispatch.

---

### Section 9: Footer & Maya Luxury Ecosystem
* **Purpose:** Brand ownership, contacts, legal policies, and links to Maya Luxury sibling properties (*J Wild Jawai*, *The Quila Udaipur*, *Pushkar Fort*, *Karwaan Jaisalmer*, *Sisodia Bagh*).
* **Content:** Verified phone numbers (`+91 98290 71817` / `7297029153`), emails (`hello@mayaluxury.in` / `reservation@mayaluxury.in`), Instagram link (`@maya_luxury_`), privacy policy, refund policy.

---

## 4. HERO EXPERIENCE SPECIFICATION

* **Viewport Behavior:** Exactly `100vh` on desktop (`100dvh` on mobile).
* **Media Treatment:** `MAYA-GARH-PUSHKAR57.webp` rendered with dark radial vignette overlay (`rgba(0,0,0,0.25)`).
* **Logo Placement:** Top centered SVG crest badge (`64px` height).
* **Typography:** Title: `"MAYA GARH"` (*Cormorant Garamond* 300). Subtitle: `"A ROYAL SANCTUARY IN PUSHKAR"` (*Outfit* 400, 0.25em tracking).
* **CTAs:** Primary: `"ENQUIRE FOR RATES"` | Secondary: `"DISCOVER THE SANCTUARY"`.
* **Scroll Indicator:** Subtle gold animated dot indicator at bottom center.
* **Animation:** Smooth opacity & Y-translation on page load. GSAP ScrollTrigger Y-parallax on scroll.

---

## 5. NAVIGATION SYSTEM SPECIFICATION

* **Desktop Navigation:** Floating header (`backdrop-filter: blur(12px)` when scrolled), gold accent highlights, links to Sections 2-8, and persistent `"Enquire for Rates"` CTA.
* **Mobile Navigation:** Fixed 60px header with mini brand logo left, direct WhatsApp icon center, and full-screen overlay menu drawer right.
* **Action CTAs:** Persistent bottom action dock on desktop and mobile:
  - Button 1: `"Enquire for Rates"` (Opens Rate Inquiry Modal).
  - Button 2: `"WhatsApp Concierge"` (Direct link to `https://wa.me/919829071817`).

---

## 6. VILLA EXPERIENCE SPECIFICATION (THE 6 ROYAL VILLAS)

### 6.1 Interaction Mechanism Choice
* **Desktop Mechanism:** **Pinned Dual-Track Horizontal Reveal Scrub (GSAP ScrollTrigger)**.
* **Mobile Mechanism:** **Vertical Stacked Accordion Cards**. Mobile devices use a standard touch-friendly vertical stack to avoid scroll hijacking and maintain native 60fps mobile scrolling.

### 6.2 Villa Inventory & Asset Mapping (Strict Source Truth)

> [!IMPORTANT]
> All rates are displayed strictly as **"Enquire for Rates"**. No fabricated prices, square footage numbers, or unverified facts are included.

#### Villa 1: Maha Maya
* **Verified Narrative:** *"Indulge in the opulence of Maha Maya, where grandeur and elegance take center stage."*
* **Pricing:** **Enquire for Rates** `[Client Confirmation Required]`
* **Assigned Images:** `MAYA-GARH-PUSHKAR57.webp` (Primary Hero), `MAYA-GARH-PUSHKAR53-1030x687.webp`, `MAYA-GARH-PUSHKAR20-1030x705.webp`.
* **CTA:** `"Enquire for Maha Maya"`.

#### Villa 2: Amanjena
* **Verified Narrative:** *"Amanjena embodies a peaceful paradise, offering a taste of utmost luxury."*
* **Pricing:** **Enquire for Rates** `[Client Confirmation Required]`
* **Assigned Images:** `MAYA-GARH-PUSHKAR19-1030x687.webp` (Primary Hero), `MAYA-GARH-PUSHKAR21-1030x687.webp`, `MAYA-GARH-PUSHKAR22-1030x687.webp`.
* **CTA:** `"Enquire for Amanjena"`.

#### Villa 3: Malak
* **Verified Narrative:** *"Malak, the villa fit for an angel or king, exudes regal splendor and divine beauty."*
* **Pricing:** **Enquire for Rates** `[Client Confirmation Required]`
* **Assigned Images:** `MAYA-GARH-PUSHKAR1-1030x687.webp` (Primary Hero), `MAYA-GARH-PUSHKAR2-1030x687.webp`, `MAYA-GARH-PUSHKAR3-1030x687.webp`.
* **CTA:** `"Enquire for Malak"`.

#### Villa 4: Adiva
* **Verified Narrative:** *"Adiva, with its pleasant and gentle aura, creates an environment that provides immeasurable pleasure and comfort."*
* **Pricing:** **Enquire for Rates** `[Client Confirmation Required]`
* **Assigned Images:** `MAYA-GARH-PUSHKAR15-1030x678.webp` (Primary Hero), `MAYA-GARH-PUSHKAR16-1030x694.webp`, `MAYA-GARH-PUSHKAR17-1030x687.webp`.
* **CTA:** `"Enquire for Adiva"`.

#### Villa 5: Ameera
* **Verified Narrative:** *"Ameera, a name befitting a princess or leader, promises a royal experience that will leave you feeling like true royalty."*
* **Pricing:** **Enquire for Rates** `[Client Confirmation Required]`
* **Assigned Images:** `MAYA-GARH-PUSHKAR24-1030x687.webp` (Primary Hero), `MAYA-GARH-PUSHKAR25-1030x687.webp`, `MAYA-GARH-PUSHKAR26-1030x687.webp`.
* **CTA:** `"Enquire for Ameera"`.

#### Villa 6: Mayan
* **Verified Narrative:** *"Mayan, with its connection to the Mayan people, embraces the rich cultural heritage and invokes a sense of mystique and fascination."*
* **Pricing:** **Enquire for Rates** `[Client Confirmation Required]`
* **Assigned Images:** `MAYA-GARH-PUSHKAR10-1030x687.webp` (Primary Hero), `MAYA-GARH-PUSHKAR11-1030x687.webp`, `MAYA-GARH-PUSHKAR12.webp`.
* **CTA:** `"Enquire for Mayan"`.

---

## 7. SIMPLIFIED STYLING ARCHITECTURE

Tailwind CSS is **NOT** introduced. The styling architecture relies strictly on modern native CSS primitives:

* **CSS Custom Properties (Design Tokens):** Centralized in `globals.css` for colors, typography scales, container max-widths, and z-index layers.
* **CSS Modules:** Used for scoped component styling (`Header.module.css`, `VillaCard.module.css`, etc.) preventing class collisions.
* **Native CSS Grid & Flexbox:** Used for layout systems.
* **Fluid Typography:** Implemented via standard CSS `clamp()` functions (`clamp(2.5rem, 5vw, 4.5rem)`).

```css
/* Core Design Tokens in globals.css */
:root {
  --bg-dark: #1A1817;
  --bg-light: #FDFBF7;
  --accent-gold: #E6C587;
  --accent-terracotta: #C28E64;
  --text-dark: #1A1817;
  --text-light: #FDFBF7;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Outfit', 'Inter', system-ui, sans-serif;
  --max-width: 1440px;
}
```

---

## 8. REFINED MOTION DESIGN & ANIMATION ARCHITECTURE

### 8.1 Purpose-Driven Animation Hierarchy
Every animation must have a clear functional purpose (building spatial context, guiding visual focus, or easing section transitions):

1. **Cinematic Camera Movement:** Slow dolly image scaling (`scale: 1.05 -> 1.00`) on section enter.
2. **Clip-Path Mask Reveals:** Image cards reveal cleanly via `clip-path: inset(100% 0 0 0) -> inset(0 0 0 0)`.
3. **Parallax Depth:** Background elements scroll at 0.7x speed relative to text content.
4. **Selective Typography Reveals:** Staggered line Y-translation (`y: 30 -> 0`, `opacity: 0 -> 1`) applied **only** to major section titles. SplitText is reserved strictly for the Hero title and Prologue headline.

### 8.2 FORBIDDEN ANIMATIONS (Explicit Exclusion List)
> [!CAUTION]
> The following animation patterns are explicitly **BANNED**:
> - ❌ No global SplitText on body paragraphs or card titles.
> - ❌ No elastic bounce physics or jittery spring animations.
> - ❌ No 3D card flips or rotating elements.
> - ❌ No automatic scroll hijacking on mobile viewports.
> - ❌ No animation on every single UI element—keep background UI static.

### 8.3 Centralized Animation Architecture (`/src/animation/`)
To prevent GSAP code from scattering across dozens of React components, motion logic is centralized:

* `useGSAPContext.ts`: Custom hook handling GSAP context creation, ScrollTrigger refresh, and automatic cleanup on component unmount.
* `scrollAnimations.ts`: Reusable animation functions (`animateClipReveal()`, `animateParallax()`, `animateTextFade()`).

---

## 9. MOBILE EXPERIENCE ADAPTATION MATRIX

Mobile is treated as its own independent touch experience rather than a scaled-down desktop layout:

| Desktop Cinematic Interaction | Mobile Adaptation Strategy | Rationale |
| :--- | :--- | :--- |
| **Hero Mouse-Follow Tilt & Parallax** | **Replaced** with static background (`unnamed (5).webp`) + simple fade-in. | Prevents CPU overload and conserves mobile battery. |
| **Pinned Horizontal Villa Scrub (Sec 3)** | **Replaced** with vertical stacked accordion cards. | Prevents touch scroll hijacking; honors native touch physics. |
| **Dual-Column Parallax Image Scrub (Sec 2)** | **Replaced** with single-column text + swipe photo deck. | Ensures clean readability and vertical touch scrolling. |
| **Hover Image Scale & Adjacent Dimming** | **Removed**; replaced with clear persistent touch buttons. | Touch devices do not support hover states reliably. |
| **Lenis Inertial Wheel Smoothing** | **Disabled on Mobile** (`smoothTouch: false`). | Preserves native iOS / Android smooth touch momentum. |

---

## 10. PERFORMANCE STRATEGY

* **`next/image` Strategy:** All 65 property WebP images are rendered using `next/image` with explicit `sizes` attributes (`sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`).
* **Preload Priority:** Preload hero image (`MAYA-GARH-PUSHKAR57.webp`) with `priority` attribute.
* **Layout Shift Prevention:** Enforce strict CSS `aspect-ratio` properties on all image containers to guarantee zero Cumulative Layout Shift (CLS).
* **GPU Hardware Acceleration:** Limit animations strictly to `transform`, `opacity`, and `clip-path`.
* **Lifecycle Cleanup:** `ScrollTrigger.kill()` and `lenis.destroy()` executed cleanly inside `useEffect` cleanup hooks.
* **Reduced Motion:** Respect `@media (prefers-reduced-motion: reduce)` by disabling all ScrollTrigger animations and parallax loops automatically.

---

## 11. QUALITY ASSURANCE (QA) & PLAYWRIGHT SPECIFICATION

Playwright is established as the primary automated visual and functional testing tool:

```typescript
// Example Playwright QA Suite Scope
test.describe('Maya Garh Production Quality Audit', () => {
  test('Visual Regression & Layout Across Viewports', async ({ page }) => {
    // Audit Mobile (375px), Tablet (768px), Desktop (1440px)
  });

  test('Concierge Modal & WhatsApp Link Validation', async ({ page }) => {
    // Verify "Enquire for Rates" modal launch & WhatsApp URL generation
  });

  test('Accessibility & Keyboard Navigation Check', async ({ page }) => {
    // Audit ARIA attributes, focus states, and contrast ratios
  });
});
```

---

## 12. COMPLETE ASSET MAPPING FOR ALL 65 WEBP IMAGES

The 65 WebP images in `MayaGArh Images/` are mapped strictly without fictional filenames:

| Filename | Intended Website Section | Intended Usage & Framing |
| :--- | :--- | :--- |
| `MAYA-GARH-PUSHKAR57.webp` | Section 1: Hero Experience | Main Desktop Hero Background. |
| `MAYA-GARH-PUSHKAR57-1030x616.webp` | Section 6: Location & Aravalli | Landscape backdrop for Aravalli Story. |
| `MAYA-GARH-PUSHKAR1-1030x687.webp` | Section 3: Villa Showcase | Malak Villa Primary Hero Card. |
| `MAYA-GARH-PUSHKAR2-1030x687.webp` | Section 3: Villa Showcase | Malak Villa Courtyard View. |
| `MAYA-GARH-PUSHKAR3-1030x687.webp` | Section 3: Villa Showcase | Malak Villa Bathroom Detail. |
| `MAYA-GARH-PUSHKAR4-1030x687.webp` | Section 7: Gallery | Courtyard Architecture Night Illumination. |
| `MAYA-GARH-PUSHKAR5-1030x687.webp` | Section 7: Gallery | Poolside Sun Deck Detail. |
| `MAYA-GARH-PUSHKAR6-1030x687.webp` | Section 4: Experiences | Royal Courtyard Dining Feature Header. |
| `MAYA-GARH-PUSHKAR8-1030x687.webp` | Section 4: Experiences | Candlelit Theme Dinner Table Setup. |
| `MAYA-GARH-PUSHKAR10-1030x687.webp` | Section 3: Villa Showcase | Mayan Villa Primary Hero Card. |
| `MAYA-GARH-PUSHKAR11-1030x687.webp` | Section 3: Villa Showcase | Mayan Villa Bedroom Interiors. |
| `MAYA-GARH-PUSHKAR12.webp` | Section 3: Villa Showcase | Mayan Villa Heritage Decor Detail. |
| `MAYA-GARH-PUSHKAR13-1030x696.webp` | Section 7: Gallery | Garden Path & Stone Archway. |
| `MAYA-GARH-PUSHKAR14-1030x687.webp` | Section 7: Gallery | Fountain Courtyard View. |
| `MAYA-GARH-PUSHKAR15-1030x678.webp` | Section 3: Villa Showcase | Adiva Villa Primary Hero Card. |
| `MAYA-GARH-PUSHKAR16-1030x694.webp` | Section 3: Villa Showcase | Adiva Villa Sun Deck Lounger. |
| `MAYA-GARH-PUSHKAR17-1030x687.webp` | Section 3: Villa Showcase | Adiva Villa Plunge Alcove. |
| `MAYA-GARH-PUSHKAR18-1030x687.webp` | Section 4: Experiences | Pushkar Desert Sundowner Feature Header. |
| `MAYA-GARH-PUSHKAR19-1030x687.webp` | Section 3: Villa Showcase | Amanjena Villa Primary Hero Card. |
| `MAYA-GARH-PUSHKAR20-1030x705.webp` | Section 3: Villa Showcase | Maha Maya Villa Plunge Pool View. |
| `MAYA-GARH-PUSHKAR21-1030x687.webp` | Section 3: Villa Showcase | Amanjena Villa Outdoor Shower. |
| `MAYA-GARH-PUSHKAR22-1030x687.webp` | Section 3: Villa Showcase | Amanjena Villa Lotus Courtyard. |
| `MAYA-GARH-PUSHKAR23-1030x687.webp` | Section 7: Gallery | Stone Carved Wall Relief Macro. |
| `MAYA-GARH-PUSHKAR24-1030x687.webp` | Section 3: Villa Showcase | Ameera Villa Primary Hero Card. |
| `MAYA-GARH-PUSHKAR25-1030x687.webp` | Section 3: Villa Showcase | Ameera Villa Hand-painted Fresco Ceiling. |
| `MAYA-GARH-PUSHKAR26-1030x687.webp` | Section 3: Villa Showcase | Ameera Villa Lawn Terrace. |
| `MAYA-GARH-PUSHKAR28-1030x687.webp` | Section 7: Gallery | Twilight Pool Reflection Shot. |
| `MAYA-GARH-PUSHKAR29-1030x687.webp` | Section 7: Gallery | Arched Veranda Corridor. |
| `MAYA-GARH-PUSHKAR30-1030x687.webp` | Section 4: Experiences | Desert Safari & Excursion Highlight. |
| `MAYA-GARH-PUSHKAR31-1030x687.webp` | Section 7: Gallery | Garden Pavilion Daybed. |
| `MAYA-GARH-PUSHKAR33-1030x687.webp` | Section 7: Gallery | Hand-carved Wooden Door Detail. |
| `MAYA-GARH-PUSHKAR34-1030x687.webp` | Section 7: Gallery | Courtyard Lantern Lighting. |
| `MAYA-GARH-PUSHKAR35-1030x687.webp` | Section 7: Gallery | Poolside Sun Lounger Set. |
| `MAYA-GARH-PUSHKAR36-1030x687.webp` | Section 7: Gallery | Architectural Pillar Alignment Shot. |
| `MAYA-GARH-PUSHKAR37-1030x687.webp` | Section 7: Gallery | Palace Lawn Evening Illumination. |
| `MAYA-GARH-PUSHKAR38-1030x729.webp` | Section 7: Gallery | Vertical Stone Jharokha Window. |
| `MAYA-GARH-PUSHKAR39-1030x687.webp` | Section 7: Gallery | Master Suite Bedroom Dressing Table. |
| `MAYA-GARH-PUSHKAR40-1030x687.webp` | Section 7: Gallery | Courtyard Central Water Fountain. |
| `MAYA-GARH-PUSHKAR41-1030x687.webp` | Section 5: Weddings | Palatial Wedding Night Lighting Setup. |
| `MAYA-GARH-PUSHKAR42-1030x687.webp` | Section 7: Gallery | Outdoor Lounge Seating Area. |
| `MAYA-GARH-PUSHKAR43-1030x687.webp` | Section 5: Weddings | Poolside Mandap Event Setup. |
| `MAYA-GARH-PUSHKAR44-1030x687.webp` | Section 5: Weddings | Grand Courtyard Banquet Setup. |
| `MAYA-GARH-PUSHKAR45-1030x687.webp` | Section 7: Gallery | Morning Light on Courtyard Arch. |
| `MAYA-GARH-PUSHKAR46-1030x687.webp` | Section 7: Gallery | Handcrafted Brass Lamp Accent. |
| `MAYA-GARH-PUSHKAR47-1030x687.webp` | Section 7: Gallery | Marble Flooring Pattern Close-up. |
| `MAYA-GARH-PUSHKAR48-1030x687.webp` | Section 4: Experiences | Ayurvedic Spa Treatment Pavilion. |
| `MAYA-GARH-PUSHKAR49-1030x687.webp` | Section 7: Gallery | Herbal Tea Service Setup. |
| `MAYA-GARH-PUSHKAR50-1030x687.webp` | Section 4: Experiences | Outdoor Yoga & Meditation Deck. |
| `MAYA-GARH-PUSHKAR51-1030x687.webp` | Section 7: Gallery | Desert Sunset Horizon View. |
| `MAYA-GARH-PUSHKAR52-1030x687.webp` | Section 7: Gallery | Courtyard Flower Arrangement. |
| `MAYA-GARH-PUSHKAR53-1030x687.webp` | Section 2: Prologue | Main Courtyard Architecture Hero. |
| `MAYA-GARH-PUSHKAR54-1030x687.webp` | Section 7: Gallery | Palatial Entry Gate View. |
| `MAYA-GARH-PUSHKAR55-1030x687.webp` | Section 7: Gallery | Star-lit Pool Reflection. |
| `MAYA-GARH-PUSHKAR56-1030x687.webp` | Section 7: Gallery | Aravalli Hill Landscape Horizon. |
| `MAYA-GARH-PUSHKAR58-1030x687.webp` | Section 7: Gallery | Plunge Pool Water Ripple Close-up. |
| `MAYA-GARH-PUSHKAR59-1030x687.webp` | Section 7: Gallery | Palace Veranda Seating Area. |
| `MAYA-GARH-PUSHKAR62-1030x579.webp` | Section 7: Gallery | Panoramic Resort Overhead View. |
| `1-2.webp` | Section 2: Prologue | Secondary Editorial Stacked Photo 1. |
| `3-2.webp` | Section 2: Prologue | Secondary Editorial Stacked Photo 2. |
| `unnamed.webp` | Section 7: Gallery | Special Architectural Detail 1. |
| `unnamed (1).webp` | Section 7: Gallery | Special Architectural Detail 2. |
| `unnamed (2).webp` | Section 7: Gallery | Special Architectural Detail 3. |
| `unnamed (3).webp` | Section 7: Gallery | Special Architectural Detail 4. |
| `unnamed (4).webp` | Section 7: Gallery | Special Architectural Detail 5. |
| `unnamed (5).webp` | Section 1: Hero Experience | Alternate Mobile Hero Image framing. |

---

## 13. APPROVED IMPLEMENTATION STACK

The project will be built strictly using the following official, production-recommended packages:

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "gsap": "^3.12.5",
    "lenis": "^1.1.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@playwright/test": "^1.43.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "prettier": "^3.2.5"
  }
}
```

* **Framework:** Next.js (App Router, latest stable release verified at project initialization).
* **Styling:** Vanilla CSS Custom Properties (Design Tokens) + CSS Modules (`*.module.css`). **No Tailwind CSS.**
* **Smooth Scroll:** `lenis` (Official maintained package from Lenis org).
* **Animation:** `gsap` (Core + `ScrollTrigger`).
* **Testing:** `@playwright/test` for automated browser QA.

---

## 14. REMAINING CLIENT INPUTS

Only the following two items require client verification, as they cannot be derived from existing source material:

> [!NOTE]
> 1. **Villa Nightly Rates:** Rates are currently styled as **"Enquire for Rates"**. If room prices should be displayed on the storefront, exact seasonal pricing for each of the 6 villas (*Maha Maya*, *Amanjena*, *Malak*, *Adiva*, *Ameera*, *Mayan*) must be provided by the client.
> 2. **External Booking Engine Portal:** Currently, room inquiries trigger the Rate Inquiry Modal and WhatsApp Concierge (`+91 98290 71817`). If Maya Garh utilizes a third-party booking portal (e.g. SynXis, SiteMinder, Resavenue), the target booking URL must be provided.

---

# SEO ENGINEERING & SEARCH VISIBILITY

The Maya Garh website must be engineered for excellent technical SEO from the beginning.

The goal is not to claim or guarantee a percentage SEO score or search ranking.

The goal is to satisfy modern technical SEO best practices and make the website highly crawlable, indexable, semantically understandable, performant, and search-friendly.

## 1. Technical SEO

* **Semantic HTML**: Mandatory usage of HTML5 semantic containers (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`). All content blocks must be structurally valid HTML before JS hydrates.
* **Crawlable Navigation**: Standard `<a>` tags with absolute or relative `href` attributes for all page sections, modals, and property ecosystem links. No `div` or `span` onClick handlers without fallback `<a href="...">` anchors.
* **Canonical URLs**: Explicit self-referencing `<link rel="canonical" href="https://mayaluxury.in/maya-garh/">` on the primary landing page, with strict canonical resolution (trailing slash enforcement, HTTPS, and www/non-www normalization).
* **robots.txt Configuration**: Publicly accessible `robots.txt` at `/robots.txt` disallowing private API routes or admin preview paths while permitting full root indexation (`User-agent: *`, `Allow: /`).
* **XML Sitemap**: Standard compliant `sitemap.xml` listing canonical URLs, last modified timestamps (`<lastmod>`), update frequencies (`<changefreq>`), and priority flags.
* **HTTP Status Codes**: Clean 200 OK responses for indexable routes, 404 for non-existent resources, 301 Permanent Redirects for legacy URLs, and proper handling of HEAD/GET crawler requests.
* **Index/Noindex Behavior**: `meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"` on indexable production routes. Strict `noindex, nofollow` headers/tags applied to staging, development, and preview deployments.
* **Clean URLs**: Readable, keyword-meaningful, lower-case paths without parameter noise or trailing session identifiers.
* **Language Metadata**: Declared `<html lang="en">` tag with `hreflang` metadata prepared for regional variants if expanded.
* **Viewport Metadata**: `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` ensuring mobile rendering without scale distortion or mobile viewport locking.
* **HTTPS Assumptions**: All asset links, canonical references, external calls, and API endpoints strictly enforced over `https://`.
* **404 Handling**: Custom semantically styled 404 page returning a true HTTP 404 response code with clear navigation links back to the main sanctuary experience.
* **Redirect Handling**: Server-side 301 redirects for any legacy paths or trailing slash discrepancies to prevent redirect chains.
* **Prevention of Duplicate URLs**: Strict normalization enforcing single canonical URL format (`https://mayaluxury.in/maya-garh/`). Query parameters disallow duplication of content indexing.
* **Staging / Dev Indexing Protection**: Automatic injection of `X-Robots-Tag: noindex, nofollow` headers on non-production hosts (e.g. Vercel preview, local dev, staging subdomains).

## 2. Metadata Architecture

Centralized metadata system (`src/config/seo.config.ts`) driving page-level head rendering in Next.js App Router metadata API:

* **Unique `<title>`**: Concise, luxury-tailored titles strictly using verified naming: `Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan`. Max 60 characters.
* **Unique Meta Description**: Natural, informative descriptions based strictly on verified Maya Garh features without false claims or keyword-stuffing: *"Experience Maya Garh Pushkar, a peaceful royal sanctuary offering luxury villas, secluded courtyards, plunge pools, and authentic Rajasthani hospitality amidst the Aravalli hills."* Max 155 characters.
* **Canonical URL**: Explicit self-referencing URL (`https://mayaluxury.in/maya-garh/`).
* **Open Graph Metadata**:
  * `og:title`: `"Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan"`
  * `og:description`: Verified editorial description of property and villas.
  * `og:url`: `https://mayaluxury.in/maya-garh/`
  * `og:site_name`: `"Maya Luxury"`
  * `og:type`: `"website"` or `"hotel"`
  * `og:locale`: `"en_US"` or `"en_IN"`
  * `og:image`: `https://mayaluxury.in/maya-garh/images/og-maya-garh-hero.jpg` (1200x630px high-res asset).
* **Twitter / X Metadata**:
  * `twitter:card`: `"summary_large_image"`
  * `twitter:title`, `twitter:description`, `twitter:image`.
* **Robots Directives**: `index, follow, max-image-preview:large`.
* **Social Sharing Image**: Dedicated custom 1200x630 WebP/JPEG social card showcasing the central courtyard and Aravalli mountain backdrop (`MAYA-GARH-PUSHKAR57.webp`).
* **Strict Accuracy Guarantee**: No invented claims, fake award mentions, or inflated luxury rating stars.

## 3. Content SEO

Real semantic HTML text structure embedded directly in initial server markup:

* **No JS-Only Text**: Critical brand narrative, villa descriptions, experiential highlights, and contact information rendered in static HTML before GSAP or Lenis scripts initialize.
* **Cinematic Enhancements**: GSAP ScrollTrigger and CSS clip-paths progressively enhance visible text with smooth reveal transitions. If JS is disabled or fails to load, standard CSS displays all text visibly without layout breakage.
* **H1 Strategy**: Exactly one `<h1>` per page, placed in the Hero container: `<h1>Maya Garh Pushkar</h1>` with visual subtitle `<p class="hero-subtitle">A Royal Sanctuary Amidst the Aravallis</p>`.
* **H2/H3 Hierarchy**:
  * `<h2>The Maya Garh Sanctuary</h2>` (Prologue Narrative)
  * `<h2>The Royal Villa Collection</h2>` (Villa Showcase)
    * `<h3>Maha Maya Villa</h3>`
    * `<h3>Amanjena Villa</h3>`
    * `<h3>Malak Villa</h3>`
    * `<h3>Adiva Villa</h3>`
    * `<h3>Ameera Villa</h3>`
    * `<h3>Mayan Villa</h3>`
  * `<h2>Signature Experiential Curations</h2>` (Dining, Sundowners, Wellness, Retreats)
  * `<h2>Destination Weddings & Celebrations</h2>`
  * `<h2>Aravalli & Pushkar Sense of Place</h2>`
  * `<h2>Architectural Photo Gallery</h2>`
* **Paragraph Content**: Full editorial sentences containing natural property descriptors ("courtyard architecture", "plunge pools", "Aravalli hills", "Pushkar sanctuary").
* **Descriptive Anchor Text**: Contextual links (e.g. `"Enquire for Maha Maya Villa"`, `"Explore Royal Courtyard Dining"`, `"View Location in Pushkar"`) rather than generic `"click here"` or `"more"`.
* **Internal Linking**: Contextual links between villa showcases, experiential packages, destination wedding inquiry triggers, and Maya Luxury ecosystem properties.
* **Section Semantics**: Every primary section wrapped in `<section aria-labelledby="section-heading-id">`.
* **Accessible Text Alternatives**: High-contrast text overlays, scalable REM typography, and full keyboard focus indicators.

## 4. Image SEO

* **Descriptive Image Filenames**: All public static assets served with clear descriptive paths (e.g. `maya-garh-pushkar-hero.webp`, `maha-maya-villa-plunge-pool.webp`, `royal-courtyard-dining-pushkar.webp`).
* **Meaningful Alt Text**: Alt text derived directly from verified image content and villa mappings (e.g. `alt="Maya Garh main courtyard architecture framed by Aravalli mountains at dusk"`, `alt="Plunge pool deck and carved stone pillars at Maha Maya Villa"`).
* **Decorative Image Handling**: Background decorative patterns or ambient overlay textures designated with `alt=""` and `aria-hidden="true"`.
* **Responsive Image Sizes**: `next/image` with explicit `sizes` attribute mapping viewports (`sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`), serving optimal physical image dimensions per device.
* **Width/Height & Aspect Ratio**: Explicit intrinsic dimensions or CSS `aspect-ratio` on image parent frames to ensure zero Cumulative Layout Shift (CLS).
* **WebP / AVIF Strategy**: Modern WebP asset format utilized across all 65 property photos with AVIF fallback support configured in Next.js image optimizer.
* **Lazy Loading**: Native `loading="lazy"` applied to all below-the-fold villa cards, experiential grids, and gallery items.
* **Priority Loading for LCP Image**: Hero image (`MAYA-GARH-PUSHKAR57.webp`) specified with `priority={true}`, `fetchpriority="high"`, and `<link rel="preload">` tag for fast LCP performance.
* **Open Graph Image**: Dedicated 1200x630 social sharing card image path declared in meta tags.
* **Image Sitemap Considerations**: Include high-impact villa and architectural gallery image URLs in XML image sitemap annotations for search engines.

## 5. Structured Data Architecture

Valid JSON-LD schemas constructed strictly from verified business data, placed within `<script type="application/ld+json">` elements in server rendered HTML:

* **Hotel / LodgingBusiness Schema**:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://mayaluxury.in/maya-garh/#hotel",
    "name": "Maya Garh Pushkar",
    "url": "https://mayaluxury.in/maya-garh/",
    "logo": "https://mayaluxury.in/maya-garh/logo.png",
    "image": [
      "https://mayaluxury.in/maya-garh/images/MAYA-GARH-PUSHKAR57.webp"
    ],
    "description": "A peaceful royal sanctuary offering luxury villas, secluded courtyards, plunge pools, and authentic Rajasthani hospitality in Pushkar.",
    "telephone": "+91-9829071817",
    "email": "hello@mayaluxury.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pushkar",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Maya Luxury",
      "url": "https://mayaluxury.in"
    }
  }
  ```
* **LocalBusiness & Organization Schema**: Cross-linked organization data tying Maya Garh to the Maya Luxury property portfolio.
* **WebSite Schema**:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mayaluxury.in/#website",
    "url": "https://mayaluxury.in",
    "name": "Maya Luxury",
    "publisher": {
      "@id": "https://mayaluxury.in/#organization"
    }
  }
  ```
* **BreadcrumbList Schema**:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Maya Luxury",
        "item": "https://mayaluxury.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Maya Garh Pushkar",
        "item": "https://mayaluxury.in/maya-garh/"
      }
    ]
  }
  ```
* **Strict Prohibition of Fabricated Data**: No schema tags for unverified star ratings (`aggregateRating`), fake review counts, unconfirmed room rates (`priceRange`), missing amenities, or speculative historical claims.

## 6. Hotel SEO

Specific hospitality SEO architectural requirements:

* **Official Property Name**: Consistently declared as **Maya Garh Pushkar** across HTML titles, visible headers, meta tags, and structured data.
* **Geographic & Destination Context**: Clear entity association with Pushkar, Rajasthan, and the surrounding Aravalli mountain range.
* **Official URL Alignment**: All canonical paths lock to official target `https://mayaluxury.in/maya-garh/`.
* **Verified Contact Data**:
  * Phones: `+91 98290 71817` / `+91 72970 29153`
  * Emails: `hello@mayaluxury.in` / `reservation@mayaluxury.in`
* **Villa Accommodations Data**: Real verified names for all 6 villas (*Maha Maya*, *Amanjena*, *Malak*, *Adiva*, *Ameera*, *Mayan*) mapped with descriptive narratives.
* **Reservation Handling**: Pricing displayed strictly as **"Enquire for Rates"** until exact seasonal rates are client-confirmed. Inquiry CTA routes cleanly to Concierge Modal and WhatsApp Concierge.

## 7. Local SEO

Search optimization for Pushkar and Rajasthan regional query contexts:

* **Target Query Clusters**:
  * Maya Garh / Maya Garh Pushkar
  * luxury stay in Pushkar
  * heritage stay in Pushkar
  * luxury hotel in Pushkar
  * luxury accommodation in Pushkar
  * Rajasthan heritage hospitality
* **Natural Content Integration**: Integrate regional search terms organically into brand narratives (e.g. *"Nestled amidst the serene Aravalli mountains of Pushkar, Maya Garh offers a secluded luxury stay where authentic Rajasthani heritage meets peaceful courtly elegance."*). Zero keyword stuffing.
* **Sense-of-Place Content**: Dedicated Section 6 focusing on Pushkar's desert landscape, serene atmosphere, and regional heritage context using only verified facts.

## 8. Semantic Architecture Mapping

Every visual component maps directly to an accessible, semantically valid HTML5 structure:

| Visual UI Experience | Semantic HTML Structure | Primary HTML Elements Used |
| :--- | :--- | :--- |
| **Section 1: Hero Cinematic** | `<header>` / `<section class="hero">` | `<header>`, `<h1>`, `<p class="subtitle">`, `<nav>`, `<a role="button">` |
| **Section 2: Sanctuary Prologue** | `<section class="prologue">` | `<section>`, `<h2>`, `<p>`, `<figure>`, `<figcaption>`, `<img alt="...">` |
| **Section 3: Royal Villa Showcase** | `<section class="villas">` | `<section>`, `<h2>`, `<article class="villa-card">`, `<h3>`, `<p>`, `<ul class="amenities">`, `<button>` |
| **Section 4: Experiential Curations** | `<section class="experiences">` | `<section>`, `<h2>`, `<ul class="grid">`, `<li>`, `<article>`, `<h3>`, `<p>`, `<a>` |
| **Section 5: Weddings & Celebrations** | `<section class="weddings">` | `<section>`, `<h2>`, `<p>`, `<blockquote class="tagline">`, `<a role="button">` |
| **Section 6: Aravalli & Pushkar Story** | `<section class="location">` | `<section>`, `<h2>`, `<address>`, `<p>`, `<a href="...">` |
| **Section 7: Architectural Gallery** | `<section class="gallery">` | `<section>`, `<h2>`, `<ul class="masonry">`, `<li>`, `<figure>`, `<img alt="...">`, `<figcaption>` |
| **Section 8: Concierge Inquiry Modal** | `<dialog aria-labelledby="...">` | `<dialog>`, `<form>`, `<label>`, `<input>`, `<select>`, `<button>` |
| **Section 9: Footer & Portfolio** | `<footer>` | `<footer>`, `<h2>`, `<nav>`, `<ul class="ecosystem">`, `<address>`, `<p class="copyright">` |

## 9. JavaScript & Rendering SEO

* **Server-Side Rendered (SSR) HTML**: Next.js App Router renders full semantic HTML on server side. Crawlers receive 100% of visible textual content on first HTTP response.
* **Progressive Enhancement Motion**: GSAP ScrollTrigger, Lenis smooth scrolling, and clip-path reveals execute purely as visual enhancement.
* **Crawler & Script Failure Fallback**: If JavaScript fails to execute or is disabled by crawler bots, CSS default styles render all sections, text content, image grids, and links completely visible and functional.
* **Real Anchor Tags**: All navigation triggers and villa details use real HTML `<a>` tags with valid `href` parameters, ensuring search bots can discover and traverse all links without running JS.
* **Reduced Motion Compliance**: Respect `@media (prefers-reduced-motion: reduce)` by disabling scroll-bound animations while preserving visible static content.

## 10. Performance SEO & Core Web Vitals Targets

Cinematic visual design engineered without compromising performance metrics:

* **Largest Contentful Paint (LCP)**: ≤ 2.0 seconds. Optimized via WebP preloading, inline CSS for hero, and efficient hero image compression.
* **Cumulative Layout Shift (CLS)**: ≤ 0.05. Enforced by strict CSS `aspect-ratio` containers, explicit image dimension attributes, and zero dynamic layout insertion above the fold.
* **Interaction to Next Paint (INP)**: ≤ 100 ms. Achieved by passive event listeners, debounced scroll callbacks, and lightweight vanilla CSS layout recalculations.
* **Total JavaScript Payload**: Compressed initial JS bundle under 150 KB gzipped (Next.js core + minimal GSAP/Lenis runtime).
* **Image Payload**: WebP compression targeting under 120 KB per full-bleed photo and under 60 KB per card image.
* **Font Payload**: Modern WOFF2 Google Fonts (*Cormorant Garamond* & *Outfit*) loaded with `font-display: swap` and preconnect links to Google Font origin.
* **Third-Party Script Isolation**: Zero unoptimized third-party analytics or widgets embedded in critical render path.
* **Animation Performance**: All scroll and clip-path animations bound strictly to hardware-accelerated properties (`transform`, `opacity`, `clip-path`).

## 11. Automated SEO Testing Specification (Playwright QA)

Automated Playwright test suite (`tests/seo-qa.spec.ts`) validating SEO compliance on every build:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Maya Garh Automated SEO QA Suite', () => {

  test('Metadata & Head Tags Validation', async ({ page }) => {
    await page.goto('/');
    
    // Title tag checks
    const title = await page.title();
    expect(title).toContain('Maya Garh Pushkar');
    expect(title.length).toBeGreaterThan(15);
    expect(title.length).toBeLessThan(70);

    // Meta description check
    const metaDesc = await page.getAttribute('meta[name="description"]', 'content');
    expect(metaDesc).toBeTruthy();
    expect(metaDesc!.length).toBeGreaterThan(50);
    expect(metaDesc!.length).toBeLessThan(160);

    // Canonical link check
    const canonical = await page.getAttribute('link[rel="canonical"]', 'href');
    expect(canonical).toBe('https://mayaluxury.in/maya-garh/');

    // Open Graph checks
    const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content');
    expect(ogTitle).toBeTruthy();
    const ogImage = await page.getAttribute('meta[property="og:image"]', 'content');
    expect(ogImage).toBeTruthy();
  });

  test('Heading Hierarchy & Semantic Architecture', async ({ page }) => {
    await page.goto('/');
    
    // Exactly one H1 tag
    const h1s = await page.locator('h1').all();
    expect(h1s.length).toBe(1);

    // H2 section headings presence
    const h2s = await page.locator('h2').all();
    expect(h2s.length).toBeGreaterThanOrEqual(5);
  });

  test('Image Accessibility & Optimization', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const ariaHidden = await img.getAttribute('aria-hidden');
      // Every image must have an alt attribute (or be aria-hidden)
      expect(alt !== null || ariaHidden === 'true').toBe(true);
    }
  });

  test('Crawlable Links & Navigation', async ({ page }) => {
    await page.goto('/');
    
    const navLinks = await page.locator('nav a').all();
    expect(navLinks.length).toBeGreaterThan(0);
    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
      expect(href).not.toBe('#');
    }
  });

  test('Structured Data (JSON-LD) Validation', async ({ page }) => {
    await page.goto('/');
    
    const jsonLdScript = await page.locator('script[type="application/ld+json"]').first();
    const content = await jsonLdScript.textContent();
    expect(content).toBeTruthy();
    
    const json = JSON.parse(content!);
    expect(json['@context']).toBe('https://schema.org');
    expect(json['name']).toContain('Maya Garh');
  });

  test('Crawlability without JavaScript', async ({ browser }) => {
    // Launch context with JavaScript disabled
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('/');
    
    // Ensure primary narrative text remains visible in DOM
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Maya Garh');
    expect(bodyText).toContain('Pushkar');
    await context.close();
  });
});
```

## 12. Production SEO Verification Checklist

Final pre-launch verification workflow before domain DNS switch:

* **Google Search Console**: Register property domain `https://mayaluxury.in/maya-garh/` and verify ownership.
* **Sitemap Submission**: Submit XML sitemap URL (`https://mayaluxury.in/maya-garh/sitemap.xml`) to Search Console.
* **URL Inspection**: Perform live URL inspection on primary landing page to confirm successful Googlebot indexing.
* **Rich Results Test**: Pass Google Rich Results Test for Hotel and Breadcrumb JSON-LD schemas with zero errors or warnings.
* **PageSpeed Insights**: Audit live production URL targeting 90+ Mobile & Desktop performance and accessibility scores.
* **Core Web Vitals**: Verify LCP, CLS, and INP metrics meet target green thresholds on real device testing.
* **Canonical Verification**: Confirm `<link rel="canonical">` points strictly to `https://mayaluxury.in/maya-garh/`.
* **robots.txt Verification**: Test `/robots.txt` accessibility and verify disallow rules do not block critical WebP assets or CSS/JS.
* **Structured Data Validation**: Validate schema via Schema.org validator and Google Rich Results Test.
* **Mobile Rendering Audit**: Verify layout rendering on simulated mobile search bots (Googlebot Mobile).
* **Crawlability & Indexability**: Confirm HTTP status 200 OK and absence of accidental `noindex` headers on production build.

## 13. SEO Content Data Model Architecture

Centralized metadata and content architecture separating concerns into `/src/config/`:

* `src/config/seo.config.ts`: Centralized page titles, meta descriptions, canonical URLs, OG image specifications, and robots directives.
* `src/config/content.config.ts`: Verified visible editorial content, villa narrative text, room lists, and experiential copy.
* `src/config/schema.config.ts`: JSON-LD structured data definitions generated cleanly from verified hotel metadata.
* `src/styles/`: Modular CSS visual presentation styles (`globals.css`, `*.module.css`).
* `src/animation/`: GSAP ScrollTrigger motion logic decoupled from semantic data models.

```typescript
// Example Centralized SEO Config Structure
export const MAYA_GARH_SEO_CONFIG = {
  title: "Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan",
  description: "Experience Maya Garh Pushkar, a peaceful royal sanctuary offering luxury villas, secluded courtyards, plunge pools, and authentic Rajasthani hospitality amidst the Aravalli hills.",
  canonical: "https://mayaluxury.in/maya-garh/",
  openGraph: {
    title: "Maya Garh Pushkar | Luxury Royal Sanctuary",
    description: "A peaceful royal sanctuary fit for royalty with serene courtyards, plunge pools, and luxury villas in Pushkar.",
    url: "https://mayaluxury.in/maya-garh/",
    siteName: "Maya Luxury",
    images: [
      {
        url: "https://mayaluxury.in/maya-garh/images/og-maya-garh-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Maya Garh Pushkar Courtyard and Aravalli Mountain View",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
  },
};
```

## 14. SEO Definition of Done

The Maya Garh website build is declared **Production Ready** from an SEO engineering standpoint only when all of the following criteria are met:

* [ ] All indexable pages have unique, accurate, verified `<title>` and meta description tags.
* [ ] Self-referencing canonical URL (`https://mayaluxury.in/maya-garh/`) is properly configured.
* [ ] Production `robots.txt` is accessible and correctly allows search engine indexing.
* [ ] Valid XML `sitemap.xml` is present and dispatches correct canonical URLs.
* [ ] JSON-LD structured data (Hotel, LocalBusiness, BreadcrumbList) passes Schema.org validator with zero errors.
* [ ] Full semantic HTML5 content is rendered on the server side and accessible without JavaScript execution.
* [ ] Important narrative content and villa information remain visible when client-side animations are disabled.
* [ ] All 65 property WebP images feature accurate `alt` text or `aria-hidden="true"` attributes and zero layout shift.
* [ ] Pre-production environments (preview/staging) strictly enforce `noindex, nofollow` headers.
* [ ] Playwright SEO QA automated tests pass with 100% success rate.
* [ ] Production URL completes final Google Search Console, Rich Results, and PageSpeed Insights verification.

---

> [!NOTE]
> **SEO Goal & Disclaimer:** This specification defines rigorous technical SEO implementation, crawlability, indexability, performance, structured data, and search readiness. It does not claim or guarantee a specific percentage SEO score or search engine ranking.

---

*`MAYA_GARH_BUILD_SPEC.md` finalized and approved for implementation. Implementation will begin upon user command.*

