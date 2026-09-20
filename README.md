# MayaGarh Website Redesign

A cinematic luxury hospitality website redesign for Maya Garh Pushkar, focused on editorial storytelling, architectural photography, destination experiences, and high-end responsive web interaction.

---

## Overview

Maya Garh is a private royal fortress sanctuary situated amidst the ancient Aravalli Range in the countryside of Bhagwanpura, Pushkar, Rajasthan. This project reimagines the digital presence of the property as a tactile, monograph-style editorial journey rather than a conventional hotel landing page. 

The website narrative moves systematically through the fortress architecture, palatial private villa residences, bespoke desert curations, multi-day royal wedding buyouts, and regional geographic access.

---

## Current Section Progression

```text
1. Hero Experience (Chapter 01: The Monolith Arrives) — Complete & QA Approved
2. Prologue (Chapter 02: The Fortified Sanctuary) — Complete & QA Approved
3. Royal Villa Collection (Chapter 03: Six Private Residencies) — Complete & QA Approved
4. Experiential Curations (Chapter 04: The Living Chronicle) — Complete & QA Approved
5. Destination Weddings & Celebrations (Chapter 05: A Private Royal Fortress) — Complete & QA Approved
6. Location & Setting (Chapter 06: Aravallis & Pushkar Horizons) — Complete & QA Approved
7. Gallery & Visual Archive (Chapter 07: 32 Archival Plates) — Research & Data Model Complete (UI In Progress)
8. Accolades & Press (Chapter 08: Recognition & Heritage) — Planned
9. Bespoke Reservation & Inquiries (Chapter 09: Tailored Concierge) — Planned
10. Footer & Epilogue — Planned
```

---

## Technology Stack

The application is built with a modern, high-performance web stack chosen for precision animation, strict type safety, and responsive editorial layout:

* **Framework**: [Next.js](https://nextjs.org/) (App Router, static prerendering)
* **Core**: React 18 & TypeScript
* **Kinetic Animation**: [GSAP](https://gsap.com/) & ScrollTrigger with React `useGSAP` lifecycle management
* **Smooth Inertia Scrolling**: [Lenis](https://lenis.darkroom.engineering/) smooth scroll integration
* **Styling**: Vanilla CSS Modules (scoped component styles, CSS custom properties, zero Tailwind runtime)
* **Media & Imagery**: `next/image` with optimized responsive sizing and WebP formats
* **Testing & QA**: [Playwright](https://playwright.dev/) test suite (functional, accessibility, cross-viewport visual QA)
* **Code Quality**: ESLint & Prettier

---

## Architecture & Code Organization

The codebase follows a strict separation of concerns to maintain content truth, animation safety, and visual consistency:

```text
src/
├── animation/     # Reusable GSAP ScrollTrigger timelines and kinetic hooks
├── app/           # Next.js App Router root layout, metadata, and page assembly
├── components/    # Modular section components (hero, prologue, villas, curations, weddings, location)
├── config/        # Centralized SEO, OpenGraph, JSON-LD structured data schemas
├── data/          # Strongly typed data models (assets, villas, curations, weddings, location, gallery)
├── lib/           # Utility helpers and third-party integrations
└── styles/        # Global typography, color tokens, fluid spacing, CSS reset

public/
└── images/        # Authentic property photography in optimized WebP format

tests/             # Automated Playwright test suites (functional, responsive, and visual QA)
```

### Key Architectural Principles
* **Pure Data Layer**: All copy, geographic coordinates, and transit data live in strongly typed TypeScript data modules (`src/data/`), preventing hardcoded claims in JSX.
* **Central Asset Registry**: Photography is cataloged in `src/data/assets.data.ts` with explicit dimensions, aspect ratios, and verified descriptive alt text.
* **Component Modularity**: Each narrative section is contained in its own folder with dedicated subcomponents and scoped CSS Modules.
* **Hardware-Accelerated Motion**: GSAP animations utilize transforms (`yPercent`, `scale`, `opacity`) and respect user `prefers-reduced-motion` settings.

---

## Development & Verification

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Code Quality & Validation

```bash
# Linting
npm run lint

# TypeScript Compilation Check
npx tsc --noEmit

# Automated Playwright Test Suite
npx playwright test
```

---

## Quality Assurance & Testing Standards

Every section in the project undergoes rigorous multi-layer quality assurance before approval:

* **Cross-Viewport Testing**: Verified across 10 responsive viewports from desktop (`1440×900`, `1280×800`), tablet (`1024×768`, `820×1180`, `768×1024`), down to mobile (`430×932`, `414×896`, `390×844`, `375×812`, `360×800`).
* **Zero Horizontal Overflow**: Every viewport is strictly asserted against `document.documentElement.scrollWidth > window.innerWidth`.
* **Touch-Native Ergonomics**: Interactive mobile CTAs maintain a minimum 52px touch-target height.
* **Accessibility**: Heading hierarchy (`<h1>` through `<h4>`), keyboard focus-visible indicators, full DOM text alternatives for SVG diagrams, and `@media (prefers-reduced-motion: reduce)` overrides.
* **Authentic Media**: Zero fake stock imagery or fabricated photography. Absence of verified photos (e.g. sacred town sites) is treated intentionally through editorial typography and architectural seals.

---

## Copyright & Assets Notice

* **Source Code**: The original source code, scripts, and software architecture are licensed under the [MIT License](LICENSE).
* **Proprietary Property Assets**: All photography, architectural imagery, trademarks, logos, brand names, and proprietary property descriptions of Maya Garh and Maya Luxury remain the exclusive intellectual property of their respective rights holders.
* **Usage Disclaimer**: The MIT License applies solely to the software code. It does **not** grant rights to reproduce, distribute, or commercially exploit Maya Garh property photography, brand identity, or trademarks without prior written permission from the respective rights holders.

---

## Author

Crafted by **Saksham Singh** ([@Saksham1105](https://github.com/Saksham1105)).
