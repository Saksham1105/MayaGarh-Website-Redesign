import { test, expect } from '@playwright/test';

/**
 * Maya Garh Hero — Full Audit Script
 * Run with: npx playwright test tests/hero_audit.spec.ts --reporter=list
 * Captures: SEO head, H1, images, 4 viewports, mobile menu interaction
 */

test.describe('Maya Garh Hero — Full Audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test('SEO Head — Exact metadata values', async ({ page }) => {
    const title = await page.title();
    console.log('[SEO] title:', title);

    const metaDesc = await page.getAttribute('meta[name="description"]', 'content');
    console.log('[SEO] meta description:', metaDesc);

    const canonical = await page.getAttribute('link[rel="canonical"]', 'href');
    console.log('[SEO] canonical:', canonical);

    const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content');
    console.log('[SEO] og:title:', ogTitle);

    const ogDesc = await page.getAttribute('meta[property="og:description"]', 'content');
    console.log('[SEO] og:description:', ogDesc);

    const ogImage = await page.getAttribute('meta[property="og:image"]', 'content');
    console.log('[SEO] og:image:', ogImage);

    const robotsMeta = await page.getAttribute('meta[name="robots"]', 'content');
    console.log('[SEO] robots meta:', robotsMeta);

    const h1Count = await page.locator('h1').count();
    const h1Text = await page.locator('h1').first().textContent();
    console.log('[SEO] H1 count:', h1Count, '| H1 text:', `"${h1Text?.trim()}"`);

    const jsonLdScripts = await page.locator('script[type="application/ld+json"]').all();
    for (let i = 0; i < jsonLdScripts.length; i++) {
      const raw = await jsonLdScripts[i].textContent();
      console.log(`[SEO] JSON-LD [${i}]:`, raw?.trim().slice(0, 120), '...');
    }

    expect(title).toContain('Maya Garh');
    expect(h1Count).toBe(1);
    expect(canonical).toBeTruthy();
  });

  test('Image Requests — Network audit', async ({ page }) => {
    const imageRequests: string[] = [];
    page.on('request', (req) => {
      if (req.resourceType() === 'image' || req.url().includes('/_next/image')) {
        imageRequests.push(req.url());
      }
    });

    await page.reload({ waitUntil: 'networkidle' });

    const heroImages = imageRequests.filter(
      (u) => u.includes('MAYA-GARH-PUSHKAR57') || u.includes('unnamed')
    );
    console.log('[IMG] Total image requests:', imageRequests.length);
    for (const u of imageRequests) {
      console.log('[IMG] request:', u);
    }
    console.log('[IMG] Hero-related requests:', heroImages.length);
    for (const u of heroImages) {
      console.log('[IMG] HERO:', u);
    }
  });

  test('Viewport 1024×768 — Layout audit', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    const h1 = page.locator('h1');
    const h1Box = await h1.boundingBox();
    console.log('[1024x768] H1 text:', await h1.textContent());
    console.log('[1024x768] H1 boundingBox:', JSON.stringify(h1Box));

    const desktopNav = page.locator('nav[aria-label="Primary Sanctuary Navigation"]');
    const navVisible = await desktopNav.isVisible();
    console.log('[1024x768] Desktop nav visible:', navVisible);

    const mobileBtn = page.locator('button[aria-label="Open Menu"]');
    const mobileBtnVisible = await mobileBtn.isVisible();
    console.log('[1024x768] Mobile hamburger visible:', mobileBtnVisible);

    const primaryCta = page.locator('a', { hasText: 'Enquire for Rates' }).first();
    const ctaBox = await primaryCta.boundingBox();
    console.log('[1024x768] Primary CTA boundingBox:', JSON.stringify(ctaBox));

    const scrollIndicator = page.locator('a[aria-label="Scroll to Prologue Narrative"]');
    const scrollBox = await scrollIndicator.boundingBox();
    const ctaBottom = ctaBox ? ctaBox.y + ctaBox.height : 0;
    const scrollTop = scrollBox?.y ?? 0;
    const gap = scrollTop - ctaBottom;
    console.log('[1024x768] Scroll indicator boundingBox:', JSON.stringify(scrollBox));
    console.log('[1024x768] Gap between CTA bottom and scroll indicator:', gap, 'px');

    await page.screenshot({ path: './tests/screenshots/audit_1024x768.png', fullPage: false });

    expect(h1Box).not.toBeNull();
    expect(gap).toBeGreaterThan(10);
  });

  test('Viewport 375×812 — Mobile layout audit', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    const h1 = page.locator('h1');
    const h1Box = await h1.boundingBox();
    console.log('[375x812] H1 text:', await h1.textContent());
    console.log('[375x812] H1 boundingBox:', JSON.stringify(h1Box));

    const primaryCta = page.locator('a', { hasText: 'Enquire for Rates' }).first();
    const ctaBox = await primaryCta.boundingBox();
    console.log('[375x812] Primary CTA boundingBox:', JSON.stringify(ctaBox));

    const secondaryCta = page.locator('a', { hasText: 'Discover Sanctuary' }).first();
    const secCtaBox = await secondaryCta.boundingBox();
    console.log('[375x812] Secondary CTA boundingBox:', JSON.stringify(secCtaBox));

    const scrollIndicator = page.locator('a[aria-label="Scroll to Prologue Narrative"]');
    const scrollBox = await scrollIndicator.boundingBox();
    const secBottom = secCtaBox ? secCtaBox.y + secCtaBox.height : 0;
    const scrollTop = scrollBox?.y ?? 0;
    const gap = scrollTop - secBottom;
    console.log('[375x812] Scroll indicator boundingBox:', JSON.stringify(scrollBox));
    console.log('[375x812] Gap between secondary CTA and scroll indicator:', gap, 'px');

    await page.screenshot({ path: './tests/screenshots/audit_375x812.png', fullPage: false });

    // Open mobile menu and check
    const menuBtn = page.locator('button[aria-label="Open Menu"]');
    await menuBtn.click();
    await page.waitForTimeout(400);
    const drawerLink = page.locator('a', { hasText: 'Sanctuary' }).last();
    const drawerVisible = await drawerLink.isVisible();
    console.log('[375x812] Mobile drawer Sanctuary link visible after click:', drawerVisible);
    await page.screenshot({ path: './tests/screenshots/audit_375x812_menu_open.png', fullPage: false });

    expect(h1Box).not.toBeNull();
    expect(gap).toBeGreaterThan(10); // no collision
  });

  test('Accessibility — Keyboard nav and ARIA', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.reload({ waitUntil: 'networkidle' });

    // Check H1 count
    const h1Count = await page.locator('h1').count();
    console.log('[A11Y] H1 count:', h1Count);

    // Check decorative overlays have aria-hidden
    const ariaHiddenOverlays = await page.locator('[aria-hidden="true"]').count();
    console.log('[A11Y] aria-hidden elements:', ariaHiddenOverlays);

    // Check Brand link aria-label
    const brandLink = page.locator('a[aria-label="Maya Garh Pushkar Home"]');
    const brandLinkExists = await brandLink.count();
    console.log('[A11Y] Brand link aria-label present:', brandLinkExists > 0);

    // Check scroll indicator aria-label
    const scrollA11y = await page.locator('a[aria-label="Scroll to Prologue Narrative"]').count();
    console.log('[A11Y] Scroll indicator aria-label present:', scrollA11y > 0);

    // Check WhatsApp CTA rel attribute
    const waLink = page.locator('a[href="https://wa.me/919829071817"]').first();
    const waRel = await waLink.getAttribute('rel');
    console.log('[A11Y] WhatsApp CTA rel:', waRel);

    // Check mobile menu aria-expanded
    await page.setViewportSize({ width: 375, height: 812 });
    await page.reload({ waitUntil: 'networkidle' });
    const menuBtn = page.locator('button[aria-label="Open Menu"]');
    const expanded = await menuBtn.getAttribute('aria-expanded');
    console.log('[A11Y] Mobile menu aria-expanded (before click):', expanded);
    await menuBtn.click();
    await page.waitForTimeout(300);
    const expandedAfter = await page.locator('button[aria-label="Close Menu"]').count();
    console.log('[A11Y] After click, Close Menu button present:', expandedAfter > 0);

    expect(h1Count).toBe(1);
  });
});
