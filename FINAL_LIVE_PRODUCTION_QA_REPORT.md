# Final Live Production QA Report — Maya Garh Pushkar

**Target Production URL**: `https://mayaluxury.in/maya-garh/`  
**GitHub Repository**: `https://github.com/Saksham1105/MayaGarh-Website-Redesign`  
**Target Approved Commit**: `090cb6b perf: eliminate layout shift and fix favicon`  
**Audit Date**: September 21, 2026  
**Final Audit Classification**: **BLOCKED (DEPLOYMENT NOT CUT OVER)**  

---

## Executive Summary

A comprehensive live production audit was conducted on `https://mayaluxury.in/maya-garh/` using Playwright headless browser sessions and direct HTTP protocol inspection.

### Primary Finding & Deployment Status
The production domain `https://mayaluxury.in/` is **NOT currently serving commit `090cb6b` or any Next.js build**. 

Instead, the domain is actively serving a legacy **WordPress 6.9.8** application running the **Enfold Theme (v7.1.3)** hosted on **Hostinger / LiteSpeed (PHP 8.3.33)** with Hostinger Edge CDN (`hcdn`).

Because the production domain has not undergone the DNS cutover or reverse proxy deployment to serve the Next.js repository, live validation of the new Next.js components, font strategies (`display: 'optional'`), and brand favicon assets cannot be verified against the live domain until the deployment is published to this URL.

---

## 1. Deployment Version & Platform Identification

| Property | Value Observed on Live Domain | Expected Next.js Value |
|---|---|---|
| **Web Server** | `hcdn` (Hostinger Edge CDN) | Next.js Server / Vercel Edge / Node |
| **Backend Runtime** | `PHP/8.3.33` (`X-Powered-By`) | Node.js Runtime (`next start`) |
| **CMS / Framework** | `WordPress 6.9.8` (`generator` meta tag) | Next.js 14.2.35 App Router |
| **Theme / Design System** | `Enfold 7.1.3` (`wp-content/themes/enfold`) | Maya Luxury Design 2 (CSS Modules) |
| **API Endpoints** | `https://mayaluxury.in/wp-json/` | Next.js Static / Internal Routes |
| **Caching Layer** | `LiteSpeed Cache` (`x-litespeed-cache: hit`) | Next.js ISR / CDN Edge |
| **Target Commit (`090cb6b`)** | **NOT DEPLOYED** | Deployed |

---

## 2. Live Availability & Route Status

Direct HTTP response status check against `mayaluxury.in`:

| Route URL | HTTP Status | Content-Type | Finding |
|---|---|---|---|
| `https://mayaluxury.in/maya-garh/` | **200 OK** | `text/html; charset=UTF-8` | Serves legacy WordPress page |
| `https://mayaluxury.in/maya-garh/robots.txt` | **404 Not Found** | `text/html; charset=UTF-8` | Legacy WordPress 404 error page |
| `https://mayaluxury.in/maya-garh/sitemap.xml` | **404 Not Found** | `text/html; charset=UTF-8` | Legacy WordPress 404 error page |
| `https://mayaluxury.in/favicon.ico` | **404 Not Found** | `text/html` | Missing favicon asset |
| `https://mayaluxury.in/maya-garh/favicon.ico` | **404 Not Found** | `text/html; charset=UTF-8` | Missing favicon asset |
| `https://mayaluxury.in/favicon.svg` | **404 Not Found** | `text/html; charset=UTF-8` | Missing vector favicon asset |
| `https://mayaluxury.in/apple-touch-icon.png` | **404 Not Found** | `text/html; charset=UTF-8` | Missing Apple touch icon |

---

## 3. Live Console & Network Integrity

### 3.1 Network Failures & Connection Resets
- **Hostinger CDN Rate-Limiting**: The edge proxy (`ef676327...-mum-edge7`) aggressively drops rapid automated browser requests with `net::ERR_CONNECTION_RESET` / `ECONNRESET`.
- **404 Assets**: Favicons and crawler routes (`robots.txt`, `sitemap.xml`) return HTTP 404.
- **Zero Next.js Chunks**: No `_next/static/chunks/*` are loaded by the client.

### 3.2 Live Console Messages
The legacy WordPress site outputs:
- Notice logs for legacy jQuery plugins (`avia-js`, `waypoints`).
- 0 fatal JavaScript uncaught exceptions, but console warnings for missing favicon assets.

---

## 4. Live Core Web Vitals (Legacy Site Baseline)

Measurements captured on the live WordPress site across responsive viewports:

| Viewport | Dimensions | Measured CLS | Measured LCP | Layout Shifts |
|---|---|---|---|---|
| Desktop Large | 1440 x 900 | 0.0022 | ~2.1s | 1 shift |
| Desktop Medium | 1280 x 800 | 0.0025 | ~2.2s | 1 shift |
| Tablet Landscape | 1024 x 768 | 0.0051 | ~2.4s | 1 shift |
| iPad Mini | 768 x 1024 | 0.0484 | ~2.6s | 1 shift |
| iPhone 14 Pro Max | 430 x 932 | 0.0000 | ~2.1s | 0 shifts |
| iPhone XR / 11 | 414 x 896 | 0.0000 | ~2.1s | 0 shifts |
| iPhone SE | 375 x 812 | 0.0000 | ~2.0s | 0 shifts |

*Note*: The legacy site relies on unoptimized images and external Google Font blocking CSS (`Cabin`), resulting in a significantly slower LCP (~2.0s–2.6s) compared to the local Next.js production build (~340ms–380ms).

---

## 5. Font Verification on Live Domain

- **Loaded Fonts**:
  - `Cabin` loaded via blocking external stylesheet:  
    `https://fonts.googleapis.com/css?family=Cabin&display=auto`
- **Target Typography**:
  - `Cormorant Garamond` (Hero & section headings): **NOT LOADED**
  - `Outfit` (Navigation & UI body): **NOT LOADED**
- **Evaluation**: The approved Next.js self-hosted font architecture (`display: 'optional'`) is not present on the live domain because the deployment cutover has not occurred.

---

## 6. Image Delivery on Live Domain

- **Asset Formats**: The live WordPress site serves legacy `.jpg` and unoptimized `.png` assets from `/wp-content/uploads/`.
- **Next.js Image Optimization**: No WebP responsive `_next/image` loader is active.
- **Payload Sizes**: Image payloads exceed 1.2MB on initial viewport load due to lack of modern picture srcset delivery.

---

## 7. User Journey & Feature Audit (Live Domain)

| Feature Area | Live Production State (Legacy WordPress) | Expected Next.js State (Commit 090cb6b) |
|---|---|---|
| **Header Navigation** | Legacy Enfold horizontal menu | 7-item editorial navigation + mobile drawer |
| **Hero Section** | Basic WordPress slider | Cinematic Hero with verified royal star crest |
| **Villas Collection** | Static WordPress gallery grid | Spatial scrub showcase with 6 signature villas |
| **Curations / Experiences**| Plain text paragraphs | Multi-chapter curated editorial flow |
| **Destination Weddings** | Generic contact section | Dedicated wedding showcase with buyout CTA |
| **Location & Experiences** | Google Maps iframe | Architectural location cards with travel metadata |
| **Gallery** | Static masonry grid | 9-category filterable rail + accessible lightbox |
| **Trust & Accolades** | Not present | Sanctuary Trust & Guest Chronicles suite |
| **Reservation Flow** | Generic mailto form | Direct concierge booking with intent routing |

---

## 8. Villa & Wedding Reservation Intent Routing

- **Villa CTA Test**: In the legacy WordPress site, no villa cards link to `#reservation?intent=stay&villa=<slug>`.
- **Wedding CTA Test**: In the legacy WordPress site, there is no `#reservation?intent=wedding` handler.

---

## 9. Accessibility & SEO Audit on Live Domain

### 9.1 Accessibility
- **H1 Count**: **0 H1 tags** found on `https://mayaluxury.in/maya-garh/` (Violates WCAG 2.1 & HTML5 landmark requirements).
- **ARIA Attributes**: Missing landmark roles (`main`, `nav`, `banner`).
- **Focus Rings**: Default browser outline without contrast optimization.

### 9.2 SEO Metadata & Structured Data
- **Title**: `Maya Garh - Maya Luxury` (Generic fallback).
- **Meta Description**: Missing or default WordPress excerpt.
- **Canonical**: Points to `https://mayaluxury.in/maya-garh/`.
- **Structured Data**: Missing `Hotel`, `WebSite`, and `BreadcrumbList` JSON-LD schemas.
- **Crawlers**: `/robots.txt` and `/sitemap.xml` return HTTP 404.

---

## 10. Security & Response Headers

Captured headers from `https://mayaluxury.in/maya-garh/`:
```http
HTTP/2 200 
server: hcdn
date: Mon, 21 Sep 2026 10:57:23 GMT
content-type: text/html; charset=UTF-8
content-encoding: br
x-powered-by: PHP/8.3.33
x-litespeed-cache: hit
platform: hostinger
panel: hpanel
content-security-policy: upgrade-insecure-requests
etag: "166-1789892962;br"
x-hcdn-cache-status: HIT
alt-svc: h3=":443"; ma=86400
```

### Security Deficiencies on Live Domain:
1. **Runtime Information Disclosure**: `x-powered-by: PHP/8.3.33` exposes exact server software.
2. **Missing HSTS**: No `Strict-Transport-Security` header present.
3. **Missing MIME Sniffing Protection**: No `X-Content-Type-Options: nosniff`.
4. **Missing Clickjacking Protection**: No `X-Frame-Options` or frame-ancestors CSP.
5. **Missing Referrer Policy**: No `Referrer-Policy` header.

---

## 11. Defects Summary & Actionable Recommendations

### Defect 1: Production Domain Not Pointing to Next.js Deployment
- **Severity**: **CRITICAL / BLOCKER**
- **URL**: `https://mayaluxury.in/maya-garh/`
- **Evidence**: Server reports `PHP/8.3.33`, `WordPress 6.9.8`, `Enfold Theme`.
- **Root Cause**: The domain `mayaluxury.in` has not yet been connected (via DNS records, Vercel/Cloudflare/reverse proxy) to the Next.js application in GitHub repository `Saksham1105/MayaGarh-Website-Redesign`.
- **Action Required**: Perform hosting deployment / reverse proxy cutover to deploy the Next.js repository to production.

### Defect 2: Missing Favicon Assets on Live Server
- **Severity**: MEDIUM
- **URL**: `https://mayaluxury.in/favicon.ico`
- **Evidence**: Returns HTTP 404.
- **Status in Next.js Repo**: Fully resolved at commit `090cb6b` (will take effect immediately once Next.js is deployed).

### Defect 3: Missing Crawler Routes
- **Severity**: MEDIUM
- **URLs**: `https://mayaluxury.in/maya-garh/robots.txt`, `https://mayaluxury.in/maya-garh/sitemap.xml`
- **Evidence**: Both return HTTP 404 on the legacy site.
- **Status in Next.js Repo**: Fully resolved and tested in Playwright test suite (will take effect once Next.js is deployed).

---

## 12. Final Status Classification

```text
=================================================================================
                               FINAL AUDIT STATUS                                
=================================================================================
                                   [ BLOCKED ]                                   
                                                                                 
Reason:                                                                          
The live domain https://mayaluxury.in/maya-garh/ is currently serving a legacy   
WordPress/PHP site on Hostinger and has NOT YET BEEN DEPLOYED with commit        
090cb6b (or any Next.js redesign build).                                        
                                                                                 
The Next.js codebase is 100% verified locally (153/153 Playwright PASS,         
CLS: 0.0000, TypeScript 0 errors, production build PASS) and is waiting for      
the production hosting deployment cutover.                                       
=================================================================================
```
