const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const VIEWPORTS = [
  { name: 'desktop_1440x900', width: 1440, height: 900 },
  { name: 'desktop_1280x800', width: 1280, height: 800 },
  { name: 'desktop_1024x768', width: 1024, height: 768 },
  { name: 'tablet_820x1180', width: 820, height: 1180 },
  { name: 'tablet_768x1024', width: 768, height: 1024 },
  { name: 'mobile_430x932', width: 430, height: 932 },
  { name: 'mobile_414x896', width: 414, height: 896 },
  { name: 'mobile_390x844', width: 390, height: 844 },
  { name: 'mobile_375x812', width: 375, height: 812 },
  { name: 'mobile_360x800', width: 360, height: 800 },
];

(async () => {
  const browser = await chromium.launch();
  const postDir = path.join(__dirname, '..', 'test-results', 'post_coherence');
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }

  console.log('=== PHASE 11C — POST-COHERENCE AUDIT & VALIDATION ===\n');

  const auditData = {
    viewports: [],
    typography: {},
    sectionSpacing: {},
    performance: {},
    consoleErrors: [],
  };

  // 1. Audit Across All 10 Viewports
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    // Check horizontal overflow
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);

    console.log(`[Viewport: ${vp.name}] ${vp.width}x${vp.height} — ScrollHeight: ${scrollHeight}px, Overflow: ${overflow ? 'FAIL' : 'PASS'}`);

    // Capture Hero, Accolades, and Footer screenshots
    const hero = page.locator('#hero');
    if (await hero.count() > 0) {
      await hero.first().screenshot({ path: path.join(postDir, `${vp.name}_hero.png`) });
    }

    const accolades = page.locator('#accolades');
    if (await accolades.count() > 0) {
      await accolades.first().screenshot({ path: path.join(postDir, `${vp.name}_accolades.png`) });
    }

    const footer = page.locator('footer');
    if (await footer.count() > 0) {
      await footer.first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await footer.first().screenshot({ path: path.join(postDir, `${vp.name}_footer.png`) });
    }

    auditData.viewports.push({
      name: vp.name,
      width: vp.width,
      height: vp.height,
      scrollHeight,
      hasOverflow: overflow,
    });

    await page.close();
  }

  // 2. Detailed Style and Motion Audit on Desktop 1440x900
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const consoleMessages = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleMessages.push(`[ERROR] ${msg.text()}`);
    }
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Performance metrics (Lab)
  const perf = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find(p => p.name === 'first-contentful-paint');

    return {
      domContentLoaded: nav ? Math.round(nav.domContentLoadedEventEnd - nav.startTime) : null,
      loadComplete: nav ? Math.round(nav.loadEventEnd - nav.startTime) : null,
      fcp: fcp ? Math.round(fcp.startTime) : null,
    };
  });
  auditData.performance = perf;
  auditData.consoleErrors = consoleMessages;
  console.log('\n[Performance Lab Post-Coherence]', perf);

  // Eyebrow typography audit
  const eyebrows = await page.evaluate(() => {
    const results = {};
    const sections = [
      { id: 'hero', selector: '#hero p[class*="locationSubtitle"]' },
      { id: 'prologue', selector: '#prologue span[class*="eyebrow"]' },
      { id: 'villas', selector: '#villas span[class*="eyebrow"], #villas span[class*="chapterBadge"]' },
      { id: 'curations', selector: '#curations span[class*="eyebrow"], #curations p[class*="eyebrow"]' },
      { id: 'weddings', selector: '#weddings span[class*="eyebrow"], #weddings p[class*="eyebrow"]' },
      { id: 'location', selector: '#location span[class*="eyebrow"], #location p[class*="eyebrow"]' },
      { id: 'gallery', selector: '#gallery span[class*="eyebrow"], #gallery p[class*="eyebrow"]' },
      { id: 'accolades', selector: '#accolades span[class*="eyebrow"], #accolades p[class*="eyebrow"]' },
      { id: 'reservation', selector: '#reservation span[class*="eyebrow"], #reservation p[class*="eyebrow"]' },
    ];

    for (const sec of sections) {
      const el = document.querySelector(sec.selector);
      if (el) {
        const cs = window.getComputedStyle(el);
        results[sec.id] = {
          text: el.textContent.trim(),
          fontSize: cs.fontSize,
          letterSpacing: cs.letterSpacing,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          textTransform: cs.textTransform,
          color: cs.color,
        };
      }
    }
    return results;
  });
  auditData.typography.eyebrows = eyebrows;

  // Headings audit
  const headings = await page.evaluate(() => {
    const results = {};
    const sections = ['hero', 'prologue', 'villas', 'curations', 'weddings', 'location', 'gallery', 'accolades', 'reservation'];
    for (const id of sections) {
      const sec = document.getElementById(id);
      if (sec) {
        const heading = sec.querySelector('h1, h2');
        if (heading) {
          const cs = window.getComputedStyle(heading);
          results[id] = {
            tag: heading.tagName.toLowerCase(),
            text: heading.textContent.trim().substring(0, 40),
            fontSize: cs.fontSize,
            lineHeight: cs.lineHeight,
            fontFamily: cs.fontFamily.split(',')[0].replace(/['"]/g, ''),
            fontWeight: cs.fontWeight,
            color: cs.color,
          };
        }
      }
    }
    return results;
  });
  auditData.typography.headings = headings;

  // Section Spacing & Material audit
  const sectionMetrics = await page.evaluate(() => {
    const results = {};
    const sections = ['hero', 'prologue', 'villas', 'curations', 'weddings', 'location', 'gallery', 'accolades', 'reservation', 'footer'];
    for (const id of sections) {
      const el = id === 'footer' ? document.querySelector('footer') : document.getElementById(id);
      if (el) {
        const cs = window.getComputedStyle(el);
        results[id] = {
          paddingTop: cs.paddingTop,
          paddingBottom: cs.paddingBottom,
          backgroundColor: cs.backgroundColor,
          borderTop: cs.borderTop,
        };
      }
    }
    return results;
  });
  auditData.sectionSpacing = sectionMetrics;

  fs.writeFileSync(path.join(postDir, 'post_audit_data.json'), JSON.stringify(auditData, null, 2));

  console.log('\n=== TYPOGRAPHY: EYEBROWS (POST-COHERENCE) ===');
  console.table(eyebrows);

  console.log('\n=== TYPOGRAPHY: HEADINGS (POST-COHERENCE) ===');
  console.table(headings);

  console.log('\n=== SECTION SPACING & SURFACES (POST-COHERENCE) ===');
  console.table(sectionMetrics);

  console.log('\n=== CONSOLE ERRORS ===');
  console.log(consoleMessages.length > 0 ? consoleMessages.join('\n') : 'Zero console errors.');

  await browser.close();
  console.log('\nPost-coherence audit completed successfully.');
})();
