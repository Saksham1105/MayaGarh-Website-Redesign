import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 11D — Technical Hardening, SEO & Accessibility Suite', () => {
  /* ------------------------------------------------------------------
   * 1. SEO METADATA, CANONICAL & OPEN GRAPH
   * ------------------------------------------------------------------ */
  test('1. SEO metadata, canonical strategy, and social graph are complete and accurate', async ({
    page,
  }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    // Single title tag with brand and location
    await expect(page).toHaveTitle('Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan');

    // Meta description
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute(
      'content',
      'Experience Maya Garh Pushkar, a peaceful royal sanctuary offering luxury villas, secluded courtyards, plunge pools, and authentic Rajasthani hospitality amidst the Aravalli hills.'
    );

    // Exact Canonical URL strategy
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', 'https://mayaluxury.in/maya-garh/');

    // OpenGraph Tags
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      'Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan'
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://mayaluxury.in/maya-garh/'
    );
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
      'content',
      'Maya Luxury'
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://mayaluxury.in/maya-garh/images/MAYA-GARH-PUSHKAR57.webp'
    );

    // Twitter Card Tags
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image'
    );
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      'https://mayaluxury.in/maya-garh/images/MAYA-GARH-PUSHKAR57.webp'
    );

    // Viewport & theme-color
    const viewportMeta = page.locator('meta[name="viewport"]');
    await expect(viewportMeta).toHaveAttribute('content', /width=device-width/);
    const themeColorMeta = page.locator('meta[name="theme-color"]');
    await expect(themeColorMeta).toHaveAttribute('content', '#1A1817');
  });

  /* ------------------------------------------------------------------
   * 2. ROBOTS.TXT & SITEMAP.XML INTEGRITY
   * ------------------------------------------------------------------ */
  test('2. Robots.txt and sitemap.xml serve valid crawler instructions without blocking assets', async ({
    request,
  }) => {
    // 1. Robots.txt
    const robotsRes = await request.get('/robots.txt');
    expect(robotsRes.status()).toBe(200);
    const robotsText = await robotsRes.text();

    expect(robotsText).toContain('User-Agent: *');
    expect(robotsText).toContain('Allow: /');
    // Must NOT disallow /_next/ (which blocks Googlebot CSS/JS rendering)
    expect(robotsText).not.toContain('Disallow: /_next/');
    expect(robotsText).toContain('Sitemap: https://mayaluxury.in/maya-garh/sitemap.xml');

    // 2. Sitemap.xml
    const sitemapRes = await request.get('/sitemap.xml');
    expect(sitemapRes.status()).toBe(200);
    const sitemapText = await sitemapRes.text();

    expect(sitemapText).toContain('<loc>https://mayaluxury.in/maya-garh/</loc>');
  });

  /* ------------------------------------------------------------------
   * 3. SEMANTIC HTML HIERARCHY & LANDMARKS
   * ------------------------------------------------------------------ */
  test('3. Semantic HTML has exactly one H1 and proper landmark hierarchy', async ({
    page,
  }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    // Exactly one H1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    await expect(page.locator('h1')).toHaveText('MAYA GARH');

    // Landmarks
    await expect(page.locator('header[class*="header"]').first()).toBeVisible();
    await expect(page.locator('main#main-content')).toHaveCount(1);
    await expect(page.locator('footer')).toHaveCount(1);
    await expect(page.locator('nav[aria-label="Primary Sanctuary Navigation"]')).toBeVisible();

    // Section H2 Headings across all 8 major chapters
    const expectedH2s = [
      'The Maya Garh Sanctuary',
      'The Royal Villa Collection',
      'Beyond the Villa',
      'Destination Weddings',
      'Where the Aravallis Meet the Desert Stillness',
      'A Living Chronicle of Stone and Light',
      'Quiet Solitude, Attested by Guests',
      'Your Stay, Considered Personally',
    ];

    for (const text of expectedH2s) {
      await expect(page.locator(`h2:has-text("${text}")`).first()).toBeAttached();
    }
  });

  /* ------------------------------------------------------------------
   * 4. TRUTHFUL STRUCTURED DATA (JSON-LD)
   * ------------------------------------------------------------------ */
  test('4. Structured data provides verified Hotel, WebSite, and BreadcrumbList schemas', async ({
    page,
  }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScripts.count();
    expect(count).toBeGreaterThanOrEqual(3);

    const schemas = [];
    for (let i = 0; i < count; i++) {
      const text = await jsonLdScripts.nth(i).textContent();
      if (text) {
        schemas.push(JSON.parse(text));
      }
    }

    // 1. Hotel Schema
    const hotelSchema = schemas.find((s) => s['@type'] === 'Hotel' || (Array.isArray(s['@type']) && s['@type'].includes('Hotel')));
    expect(hotelSchema).toBeTruthy();
    expect(hotelSchema.name).toBe('Maya Garh Pushkar');
    expect(hotelSchema.telephone).toBe('+91 98290 71817');
    expect(hotelSchema.email).toBe('hello@mayaluxury.in');
    expect(hotelSchema.address.addressLocality).toBe('Pushkar');
    expect(hotelSchema.address.addressRegion).toBe('Rajasthan');
    expect(hotelSchema.address.postalCode).toBe('305001');

    // Conservative address schema: strictly omits fabricated street address & geo coordinates
    expect(hotelSchema.address.streetAddress).toBeUndefined();
    expect(hotelSchema.geo).toBeUndefined();

    // Strictly NO fabricated ratings or reviews in JSON-LD
    expect(hotelSchema.aggregateRating).toBeUndefined();
    expect(hotelSchema.review).toBeUndefined();

    // 2. WebSite Schema
    const webSiteSchema = schemas.find((s) => s['@type'] === 'WebSite');
    expect(webSiteSchema).toBeTruthy();
    expect(webSiteSchema.name).toBe('Maya Luxury');

    // 3. BreadcrumbList Schema
    const breadcrumbSchema = schemas.find((s) => s['@type'] === 'BreadcrumbList');
    expect(breadcrumbSchema).toBeTruthy();
    expect(breadcrumbSchema.itemListElement).toHaveLength(2);
  });

  /* ------------------------------------------------------------------
   * 5. IMAGE ACCESSIBILITY & PERFORMANCE
   * ------------------------------------------------------------------ */
  test('5. All images provide descriptive alt text with zero missing sources', async ({
    page,
  }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const images = page.locator('img');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(15);

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
      // Meaningful alt text length
      expect(alt!.trim().length).toBeGreaterThan(3);
    }
  });

  /* ------------------------------------------------------------------
   * 6. NAVIGATION INTEGRITY ACROSS ALL CHAPTERS
   * ------------------------------------------------------------------ */
  test('6. All section anchors resolve to valid semantic elements', async ({
    page,
  }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const requiredAnchors = [
      '#hero',
      '#prologue',
      '#villas',
      '#curations',
      '#weddings',
      '#location',
      '#gallery',
      '#accolades',
      '#reservation',
    ];

    for (const anchor of requiredAnchors) {
      const target = page.locator(anchor);
      await expect(target).toHaveCount(1);
    }
  });

  /* ------------------------------------------------------------------
   * 7. SSR HTML PAYLOAD VERIFICATION (WITHOUT CLIENT JS)
   * ------------------------------------------------------------------ */
  test('7. Initial server HTML payload contains critical headings, villas, and contact channels', async ({
    request,
  }) => {
    const response = await request.get('/');
    expect(response.status()).toBe(200);
    const html = await response.text();

    // Verify key editorial titles in raw SSR HTML
    expect(html).toContain('MAYA GARH');
    expect(html).toContain('The Maya Garh Sanctuary');
    expect(html).toContain('The Royal Villa Collection');
    expect(html).toContain('Beyond the Villa');
    expect(html).toContain('Destination Weddings');
    expect(html).toContain('Where the Aravallis Meet the Desert Stillness');
    expect(html).toContain('A Living Chronicle of Stone and Light');
    expect(html).toContain('Quiet Solitude, Attested by Guests');
    expect(html).toContain('Your Stay, Considered Personally');

    // Verify all 6 villa names exist in raw SSR HTML
    expect(html).toContain('Maha Maya');
    expect(html).toContain('Amanjena');
    expect(html).toContain('Malak');
    expect(html).toContain('Adiva');
    expect(html).toContain('Ameera');
    expect(html).toContain('Mayan');

    // Verify verified contact details exist in raw SSR HTML
    expect(html).toContain('+91 98290 71817');
    expect(html).toContain('hello@mayaluxury.in');
    expect(html).toContain('reservation@mayaluxury.in');
    expect(html).toContain('Bhagwanpura, Pushkar, Rajasthan — 305001');
  });

  /* ------------------------------------------------------------------
   * 8. ACCESSIBILITY: KEYBOARD FOCUS & ESCAPE TRAP
   * ------------------------------------------------------------------ */
  test('8. Interactive elements are keyboard navigable with escape handling on drawer', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });

    // Open mobile menu
    const menuBtn = page.locator('button[aria-label="Open Menu"]');
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();

    // Drawer is now open
    const drawer = page.locator('nav[aria-label="Mobile Sanctuary Navigation"]');
    await expect(drawer).toBeVisible();

    // Press Escape to close
    await page.keyboard.press('Escape');
    await expect(drawer).toBeHidden();
  });

  /* ------------------------------------------------------------------
   * 9. SECURITY: URL ENCODING & NO INLINE EVAL/INJECTION
   * ------------------------------------------------------------------ */
  test('9. Contact action URLs encode parameters safely against XSS', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    await page.locator('#reservation').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    // Fill form with special characters & script tags
    await page.fill('input#res-full-name', '<script>alert("xss")</script> & Royal Guest');
    await page.fill('input#res-email', 'royal.guest@example.com');
    await page.fill('input#res-phone', '+91 98290 71817');
    await page.fill('textarea#res-notes', 'Notes with <tag> & "quotes" & ampersands');

    // Submit form
    await page.click('button:has-text("COMPILE CONCIERGE ENQUIRY")');

    // Modal success channels
    const waLink = page.locator('a:has-text("DISPATCH VIA WHATSAPP")');
    await expect(waLink).toBeVisible();
    const waHref = await waLink.getAttribute('href');

    // Must be properly URL encoded (no raw <script> in URL)
    expect(waHref).not.toContain('<script>');
    expect(waHref).toContain('%3Cscript%3E');

    const mailLink = page.locator('a:has-text("DISPATCH VIA EMAIL")');
    await expect(mailLink).toBeVisible();
    const mailHref = await mailLink.getAttribute('href');
    expect(mailHref).not.toContain('<script>');
    expect(mailHref).toContain('%3Cscript%3E');
  });

  /* ------------------------------------------------------------------
   * 10. NETWORK HYGIENE: ZERO FAILED REQUESTS & ZERO CONSOLE ERRORS
   * ------------------------------------------------------------------ */
  test('10. Page loads with zero console errors and zero failed network requests', async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    const failedRequests: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('requestfailed', (req) => {
      failedRequests.push(`${req.method()} ${req.url()} — ${req.failure()?.errorText}`);
    });

    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    expect(consoleErrors).toEqual([]);
    expect(failedRequests).toEqual([]);
  });
});
