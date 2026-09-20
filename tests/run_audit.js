const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const lines = [];

  function log(tag, msg) {
    const line = `[${tag}] ${msg}`;
    console.log(line);
    lines.push(line);
  }

  // ── SEO + IMAGE AUDIT ─────────────────────────────────────────────────────
  const context1 = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page1 = await context1.newPage();

  // Track network requests before navigating
  const imgRequests = [];
  page1.on('request', req => {
    const url = req.url();
    if (url.includes('/_next/image') || (req.resourceType() === 'image')) {
      imgRequests.push(url);
    }
  });

  await page1.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page1.waitForTimeout(1000);

  // SEO
  log('SEO', 'title: ' + await page1.title());
  log('SEO', 'meta description: ' + await page1.getAttribute('meta[name="description"]', 'content'));
  log('SEO', 'canonical: ' + await page1.getAttribute('link[rel="canonical"]', 'href'));
  log('SEO', 'og:title: ' + await page1.getAttribute('meta[property="og:title"]', 'content'));
  log('SEO', 'og:description: ' + await page1.getAttribute('meta[property="og:description"]', 'content'));
  log('SEO', 'og:image: ' + await page1.getAttribute('meta[property="og:image"]', 'content'));
  log('SEO', 'robots: ' + (await page1.getAttribute('meta[name="robots"]', 'content') || 'tag not present in head (handled by Next.js headers)'));
  log('SEO', 'H1 count: ' + await page1.locator('h1').count());
  log('SEO', 'H1 text: "' + (await page1.locator('h1').first().textContent()).trim() + '"');

  // JSON-LD
  const jsonLdEls = await page1.locator('script[type="application/ld+json"]').all();
  for (let i = 0; i < jsonLdEls.length; i++) {
    const raw = await jsonLdEls[i].textContent();
    const parsed = JSON.parse(raw);
    log('JSON-LD', `[${i}] @type: ${parsed['@type']}, name: ${parsed.name || 'n/a'}`);
  }

  // Image requests
  const heroDesktop = imgRequests.filter(u => u.includes('MAYA-GARH-PUSHKAR57'));
  const heroMobile = imgRequests.filter(u => u.includes('unnamed'));
  log('IMG', 'Total /_next/image requests: ' + imgRequests.length);
  log('IMG', 'Desktop hero requests: ' + heroDesktop.length);
  log('IMG', 'Mobile hero requests: ' + heroMobile.length);
  if (heroDesktop[0]) log('IMG', 'Desktop URL: ' + heroDesktop[0]);
  if (heroMobile[0]) log('IMG', 'Mobile URL: ' + heroMobile[0]);

  // Check if BOTH images are served simultaneously (double-download defect)
  log('IMG', 'Both hero images downloaded simultaneously: ' + (heroDesktop.length > 0 && heroMobile.length > 0 ? 'YES (defect)' : 'NO (single asset)'));

  // Inspect rendered image element
  const imgEl = page1.locator('img').first();
  const imgSrc = await imgEl.getAttribute('src');
  const imgSizes = await imgEl.getAttribute('sizes');
  const imgPriority = await imgEl.getAttribute('fetchpriority');
  log('IMG', 'Rendered img src: ' + imgSrc);
  log('IMG', 'Rendered img sizes attr: ' + imgSizes);
  log('IMG', 'Rendered img fetchpriority: ' + imgPriority);
  await context1.close();

  // ── VIEWPORT 1024 × 768 ──────────────────────────────────────────────────
  const context2 = await browser.newContext({ viewport: { width: 1024, height: 768 } });
  const page2 = await context2.newPage();
  await page2.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page2.waitForTimeout(800);

  const h1_1024 = page2.locator('h1').first();
  const h1Box_1024 = await h1_1024.boundingBox();
  log('1024x768', 'H1 text: "' + (await h1_1024.textContent()).trim() + '"');
  log('1024x768', 'H1 boundingBox: x=' + Math.round(h1Box_1024?.x) + ' y=' + Math.round(h1Box_1024?.y) + ' w=' + Math.round(h1Box_1024?.width) + ' h=' + Math.round(h1Box_1024?.height));
  const nav1024 = await page2.locator('nav[aria-label="Primary Sanctuary Navigation"]').isVisible();
  log('1024x768', 'Desktop nav visible: ' + nav1024);
  const hamburger1024 = await page2.locator('button[aria-label="Open Menu"]').isVisible();
  log('1024x768', 'Hamburger button visible: ' + hamburger1024);
  const cta1024 = page2.locator('a.primaryCta, a[href*="wa.me"]').first();
  const ctaBox1024 = await page2.locator('a', { hasText: 'Enquire for Rates' }).first().boundingBox();
  log('1024x768', 'Primary CTA boundingBox: x=' + Math.round(ctaBox1024?.x) + ' y=' + Math.round(ctaBox1024?.y) + ' w=' + Math.round(ctaBox1024?.width) + ' h=' + Math.round(ctaBox1024?.height));
  const scrollBox1024 = await page2.locator('a[aria-label="Scroll to Prologue Narrative"]').boundingBox();
  const secCtaBox1024 = await page2.locator('a', { hasText: 'Discover Sanctuary' }).first().boundingBox();
  const gap1024 = scrollBox1024 && secCtaBox1024 ? Math.round(scrollBox1024.y - (secCtaBox1024.y + secCtaBox1024.height)) : 'N/A';
  log('1024x768', 'Scroll indicator top: ' + Math.round(scrollBox1024?.y));
  log('1024x768', 'Gap (secondary CTA bottom → scroll indicator top): ' + gap1024 + 'px');
  log('1024x768', 'Collision: ' + (typeof gap1024 === 'number' ? (gap1024 < 0 ? 'YES - overlap ' + Math.abs(gap1024) + 'px' : 'No, clear gap') : 'N/A'));
  await page2.screenshot({ path: './tests/screenshots/audit_1024x768.png' });
  await context2.close();

  // ── VIEWPORT 375 × 812 ──────────────────────────────────────────────────
  const context3 = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page3 = await context3.newPage();
  await page3.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page3.waitForTimeout(800);

  const h1_375 = page3.locator('h1').first();
  const h1Box_375 = await h1_375.boundingBox();
  log('375x812', 'H1 text: "' + (await h1_375.textContent()).trim() + '"');
  log('375x812', 'H1 boundingBox: x=' + Math.round(h1Box_375?.x) + ' y=' + Math.round(h1Box_375?.y) + ' w=' + Math.round(h1Box_375?.width) + ' h=' + Math.round(h1Box_375?.height));
  const nav375 = await page3.locator('nav[aria-label="Primary Sanctuary Navigation"]').isVisible();
  log('375x812', 'Desktop nav visible (should be hidden): ' + nav375);
  const hamburger375 = await page3.locator('button[aria-label="Open Menu"]').isVisible();
  log('375x812', 'Hamburger button visible: ' + hamburger375);
  const primaryCtaBox375 = await page3.locator('a', { hasText: 'Enquire for Rates' }).first().boundingBox();
  const secCtaBox375 = await page3.locator('a', { hasText: 'Discover Sanctuary' }).first().boundingBox();
  const scrollBox375 = await page3.locator('a[aria-label="Scroll to Prologue Narrative"]').boundingBox();
  log('375x812', 'Primary CTA: y=' + Math.round(primaryCtaBox375?.y) + ' bottom=' + Math.round((primaryCtaBox375?.y||0) + (primaryCtaBox375?.height||0)));
  log('375x812', 'Secondary CTA: y=' + Math.round(secCtaBox375?.y) + ' bottom=' + Math.round((secCtaBox375?.y||0) + (secCtaBox375?.height||0)));
  log('375x812', 'Scroll indicator: y=' + Math.round(scrollBox375?.y));
  const gap375 = scrollBox375 && secCtaBox375 ? Math.round(scrollBox375.y - (secCtaBox375.y + secCtaBox375.height)) : 'N/A';
  log('375x812', 'Gap (secondary CTA bottom → scroll indicator top): ' + gap375 + 'px');
  log('375x812', 'Collision: ' + (typeof gap375 === 'number' ? (gap375 < 0 ? 'YES - overlap ' + Math.abs(gap375) + 'px' : 'No, clear gap of ' + gap375 + 'px') : 'N/A'));
  await page3.screenshot({ path: './tests/screenshots/audit_375x812.png' });

  // Mobile menu test
  const menuBtn375 = page3.locator('button[aria-label="Open Menu"]');
  await menuBtn375.click();
  await page3.waitForTimeout(400);
  const drawerLinks = await page3.locator('ul.mobileNavList a, a', { hasText: 'Sanctuary' }).last().isVisible();
  log('375x812', 'Mobile drawer open, Sanctuary link visible: ' + drawerLinks);
  await page3.screenshot({ path: './tests/screenshots/audit_375x812_menu.png' });
  await context3.close();

  // ── ACCESSIBILITY ─────────────────────────────────────────────────────────
  const context4 = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page4 = await context4.newPage();
  await page4.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  log('A11Y', 'H1 count: ' + await page4.locator('h1').count());
  log('A11Y', 'aria-hidden elements: ' + await page4.locator('[aria-hidden="true"]').count());
  log('A11Y', 'Brand link aria-label present: ' + (await page4.locator('a[aria-label="Maya Garh Pushkar Home"]').count() > 0));
  log('A11Y', 'Scroll indicator aria-label present: ' + (await page4.locator('a[aria-label="Scroll to Prologue Narrative"]').count() > 0));
  const waLink = page4.locator('a[href*="wa.me"]').first();
  log('A11Y', 'WhatsApp link rel attr: ' + await waLink.getAttribute('rel'));
  log('A11Y', 'WhatsApp link target attr: ' + await waLink.getAttribute('target'));

  // Check first image alt text
  const imgAlt = await page4.locator('img').first().getAttribute('alt');
  log('A11Y', 'Hero image alt text: "' + imgAlt + '"');

  await context4.close();
  await browser.close();

  // Write all to file
  fs.writeFileSync('./tests/screenshots/audit_results.txt', lines.join('\n'), 'utf8');
  console.log('\n=== DONE. Results saved to tests/screenshots/audit_results.txt ===\n');
})().catch(err => { console.error(err); process.exit(1); });
