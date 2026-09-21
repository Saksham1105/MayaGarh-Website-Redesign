# SEO, GEO & AEO Pre-Optimization Audit Report — Maya Garh Pushkar

**Target Production URL**: `https://mayaluxury.in/maya-garh/`  
**GitHub Repository**: `https://github.com/Saksham1105/MayaGarh-Website-Redesign`  
**Current Commit**: `090cb6b perf: eliminate layout shift and fix favicon`  
**Audit Date**: September 21, 2026  
**Status**: Pre-Implementation Audit (Observation & Analysis Only)  

---

## 1. Executive Summary

This audit evaluates the Next.js application codebase for Search Engine Optimization (SEO), Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO). The purpose is to ensure that Google, Bing, emerging AI answer engines (SearchGPT, Perplexity, Gemini, Claude, ChatGPT), and human luxury travelers clearly understand the exact entity, location, offerings, and booking mechanisms of Maya Garh Pushkar—without keyword stuffing and without inventing any unverified claims.

---

## 2. Current Architecture & Metadata Inventory

### 2.1 Meta Title
- **Current Title**: `Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan`
- **Character Count**: 57 characters (Optimal pixel width ~510px, well within Google's ~600px / 60-character limit).
- **Entity Analysis**:
  - Contains entity primary name: `Maya Garh Pushkar`
  - Defines the character: `Luxury Royal Sanctuary`
  - Defines geographic scope: `Rajasthan`
- **Assessment**: Strong, but can be further clarified from "Sanctuary" to specific hospitality accommodation category: "Heritage Villa Retreat" or "Private Villa Retreat".

### 2.2 Meta Description
- **Current Description**:  
  `Experience Maya Garh Pushkar, a peaceful royal sanctuary offering luxury villas, secluded courtyards, plunge pools, and authentic Rajasthani hospitality amidst the Aravalli hills.`
- **Character Count**: 176 characters (slightly exceeds the ideal SERP truncation threshold of 155–160 characters).
- **Factual Claims Check**:
  - `Maya Garh Pushkar`: Verified entity name.
  - `peaceful royal sanctuary`: Verified editorial character.
  - `luxury villas`: Verified (6 signature pool villas).
  - `secluded courtyards`: Verified in property architecture.
  - `plunge pools`: Verified in villa architecture.
  - `authentic Rajasthani hospitality`: Verified brand philosophy.
  - `amidst the Aravalli hills`: Verified geography.
- **Assessment**: Truncates on mobile SERPs. Should be streamlined to 145–155 characters while increasing accommodation specificity (e.g., highlighting "six signature villas").

### 2.3 Canonical URL & Route Strategy
- **Canonical in `layout.tsx` / `seo.config.ts`**: `https://mayaluxury.in/maya-garh/`
- **Trailing Slash Behavior**: Canonical includes trailing slash `/maya-garh/`.
- **Base Path**: The Next.js app is deployed to serve under `/maya-garh/` in production, with sitemap pointing to `https://mayaluxury.in/maya-garh/`.

### 2.4 Robots & Sitemap
- **`src/app/robots.ts`**:
  - Rules: `userAgent: '*'`, `allow: '/'`, `disallow: '/api/'`.
  - Sitemap declared: `https://mayaluxury.in/maya-garh/sitemap.xml`.
  - Crawler Safety: Crucially, does NOT block `/_next/`, static assets, images, or fonts.
- **`src/app/sitemap.ts`**:
  - Single entry: `url: 'https://mayaluxury.in/maya-garh/'`, `priority: 1.0`, `changeFrequency: 'weekly'`.

### 2.5 Open Graph & Twitter Cards
- **Open Graph**:
  - `og:title`: `Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan`
  - `og:description`: 144 characters (optimized for WhatsApp/iMessage/social unfurls).
  - `og:url`: `https://mayaluxury.in/maya-garh/`
  - `og:site_name`: `Maya Luxury`
  - `og:locale`: `en_IN`
  - `og:type`: `website` in `layout.tsx` (matches Open Graph protocol standards).
  - `og:image`: `https://mayaluxury.in/maya-garh/images/MAYA-GARH-PUSHKAR57.webp` (1200x630, authentic courtyard & mountain panorama).
- **Twitter**:
  - `card`: `summary_large_image`
  - `title`, `description`, `images` configured and consistent with Open Graph.

### 2.6 Favicon Architecture
- Configured in `src/app/layout.tsx` via Next.js Metadata API:
  - SVG: `/favicon.svg` (Scalable vector luxury star crest)
  - ICO: `/favicon.ico` (Multi-resolution 16x16 / 32x32 / 48x48)
  - PNG: `/favicon-32x32.png`
  - Apple Touch Icon: `/apple-touch-icon.png` (180x180)

---

## 3. Semantic HTML & Content Hierarchy Audit

### 3.1 Headings Hierarchy
- **`<h1>`**: Exactly 1 semantic H1 in document (`<h1 className={styles.mainTitle}>MAYA GARH</h1>` in `HeroContent.tsx`).
- **`<h2>` Section Headings**:
  1. **Prologue**: `The Maya Garh Sanctuary`
  2. **Villas**: `The Royal Villa Collection` (Accessible `.sr-only` heading)
  3. **Curations**: `Beyond the Villa`
  4. **Weddings**: `Destination Weddings`
  5. **Location**: `Where the Aravallis Meet the Desert Stillness`
  6. **Gallery**: `A Living Chronicle of Stone and Light`
  7. **Accolades**: `Quiet Solitude, Attested by Guests`
  8. **Reservation**: `Your Stay, Considered Personally`
- **Subheadings (`<h3>`, `<h4>`)**:
  - Follow strict logical tree (Villa names as `<h3>`, curation titles as `<h3>`, celebration spaces as `<h4>`, distance hubs as `<h4>`).
  - No heading levels are skipped.

### 3.2 Landmarks
- `<main id="main-content">` encloses all 9 page sections.
- `<header>` encloses the top navigation bar.
- `<nav aria-label="Primary Sanctuary Navigation">` wraps header links.
- `<nav aria-label="Mobile Drawer Navigation">` wraps mobile navigation.
- `<nav aria-label="Sanctuary Chapter Navigation">` and `<nav aria-label="Celebrations & Archive Navigation">` wrap footer links.
- `<footer>` wraps colophon and contact details.

### 3.3 Server-Side Rendered (SSR) HTML Payload
- Crucial factual content is fully present in SSR HTML without requiring client JavaScript:
  - Complete villa narratives and names (Maha Maya, Amanjena, Malak, Adiva, Ameera, Mayan).
  - Experiential curations (Desert Sundowners, Veranda Dining, Infinity Pool, Courtyard Oasis).
  - Celebration spaces (Central Courtyard, Infinity Pool Terrace, Rajwada Banquet Hall).
  - Physical geographic location (Bhagwanpura, Pushkar, Ajmer, Rajasthan — 305001).
  - Transit distances (Jaipur 150 km, Kishangarh 45 km, Ajmer 15 km).
  - Concierge phone numbers (`+91 98290 71817`, `+91 72970 29153`) and emails (`hello@mayaluxury.in`, `reservation@mayaluxury.in`).
  - Full structured data (`<script type="application/ld+json">`).

---

## 4. Structured Data (JSON-LD) Audit

### 4.1 Implemented Schemas
The current schema implementation in `src/config/schema.config.ts` includes:
1. **`Hotel`**:
   - `name`: `'Maya Garh Pushkar'`
   - `url`: `'https://mayaluxury.in/maya-garh/'`
   - `logo`: `'https://mayaluxury.in/maya-garh/logo.png'`
   - `image`: Array of verified property photography URLs.
   - `telephone`: `'+91 98290 71817'`
   - `email`: `'hello@mayaluxury.in'`
   - `address`: Locality: Pushkar, Region: Rajasthan, PostalCode: 305001, Country: IN.
   - `parentOrganization`: Maya Luxury (`https://mayaluxury.in`).
2. **`WebSite`**:
   - `name`: `'Maya Luxury'`
   - `url`: `'https://mayaluxury.in'`
3. **`BreadcrumbList`**:
   - Level 1: Maya Luxury (`https://mayaluxury.in`)
   - Level 2: Maya Garh Pushkar (`https://mayaluxury.in/maya-garh/`)

### 4.2 Factual Integrity & Compliance
- **Zero Fabricated Claims**:
  - No unverified `starRating` or fake 5-star claims.
  - No synthetic `aggregateRating` or fake review counts.
  - No fabricated `priceRange`.
  - No invented check-in / check-out times.
  - No unsupported amenities.
- **Omission of Unverified Geo/Street Coordinates in JSON-LD**:
  - Maintained as strictly verified by prior audits.

---

## 5. Image SEO & Accessibility Audit

- **Gallery Plates**: 32 curated plates across 8 categories (Architecture, Villas, Water, Courtyards, Dining, Landscape, Twilight, Details).
- **Alt Attributes**:
  - 100% of images possess descriptive, meaningful alt texts.
  - No repetitive keyword strings or spammy tags.
  - Alt texts describe the visible architectural subject matter (e.g., *"Panoramic architectural view of Maya Garh fortress surrounded by the Aravalli mountains"*).
- **Performance Attributes**:
  - Hero image uses `priority={true}` with explicit `fetchPriority="high"`.
  - Below-the-fold images use `loading="lazy"` with responsive `sizes` attribute.
  - Formats: Modern compressed WebP assets.

---

## 6. Internal Linking & Navigation Anchors

- Navigation items utilize descriptive labels:
  - `Sanctuary` → `#prologue`
  - `The Villas` → `#villas`
  - `Curations` → `#curations`
  - `Weddings & Buyouts` → `#weddings`
  - `Location & Setting` → `#location`
  - `Visual Archive` → `#gallery`
  - `Accolades` → `#accolades`
  - `Reservation` → `#reservation`
- CTAs include intent parameters:
  - `#reservation?intent=stay` (Villa Stay preselected)
  - `#reservation?intent=wedding` (Destination Wedding & Buyout preselected)
- Semantic back-to-top button in footer.

---

## 7. Entity, GEO & AEO Evaluation

### 7.1 Entity Consistency
- The entity is identified as **Maya Garh Pushkar**, part of the **Maya Luxury** collection.
- Context: A private luxury heritage retreat / royal villa sanctuary located near Pushkar, Rajasthan, amidst the Aravalli Range.
- Verified Accommodation: Exactly six signature private pool villas (`Maha Maya`, `Amanjena`, `Malak`, `Adiva`, `Ameera`, `Mayan`).
- Verified Experiences: Pushkar Desert Dune Sundowners, Royal Veranda & Courtyard Dining, Royal Infinity Pool, Courtyard Oasis.

### 7.2 Generative Engine Optimization (GEO) Gaps
- AI models (GPT-4o, Claude, Perplexity, Gemini) extract answers from authoritative, direct factual statements.
- Currently, the page content is highly poetic and editorial. While atmospheric, AI crawlers benefit from an explicit, concise factual entity summary embedded seamlessly in the semantic markup.
- Adding a natural, visible **Entity & Sanctuary Summary** block within the editorial prologue ensures that AI answer engines extract concise, un-hallucinated facts about:
  - Who owns / operates it (Maya Luxury)
  - Where it is (Pushkar, Rajasthan, India)
  - What it offers (Six private pool residences, intimate destination weddings, desert sundowners)
  - How reservations work (Personalized concierge enquiries, no public automated booking engine)

### 7.3 Answer Engine Optimization (AEO) Opportunities
- High-intent traveler questions that AI answer engines field:
  1. *What is Maya Garh Pushkar?*
  2. *How many villas are at Maya Garh Pushkar?*
  3. *Where is Maya Garh located relative to Pushkar and Jaipur?*
  4. *Does Maya Garh host destination weddings and estate buyouts?*
  5. *How do guests book or enquire for rates?*
- By embedding clear, concise factual answers naturally within the existing component architecture, answer engines can extract direct answers without needing a spammy FAQ accordion.

---

## 8. Prioritized Recommendations for Implementation

1. **Meta Title Enhancement**:
   - Refine to: `Maya Garh Pushkar | Luxury Heritage Villa Retreat in Rajasthan` (63 chars / ~540px).
   - Accurately captures both "Heritage" architecture and "Villa Retreat" category.
2. **Meta Description Streamlining**:
   - Refine to: `Discover Maya Garh Pushkar, a private luxury heritage retreat near Pushkar, Rajasthan, featuring six signature pool villas, courtyards, and bespoke experiences.` (163 chars / 148 chars trimmed).
3. **Structured Data Refinement**:
   - Augment `Hotel` schema with explicit `@type: ['Hotel', 'LodgingBusiness']`.
   - Include `numberOfRooms: 6` (strictly verified: exactly six signature pool residences).
   - Ensure `address` includes verified postal code and district.
4. **Semantic Entity Summary for GEO/AEO**:
   - Ensure the Prologue / Sanctuary narrative provides crystal-clear machine-readable and human-readable factual grounding.
5. **Update Test Assertions**:
   - Update `tests/technical_hardening.spec.ts` to assert the approved title, description, and structured data refinements, ensuring 153/153 Playwright tests continue to pass.
