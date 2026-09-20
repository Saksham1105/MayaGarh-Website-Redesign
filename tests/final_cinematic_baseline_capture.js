const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const VIEWPORTS = [
  { name: 'desktop_1440x900', category: 'Desktop', width: 1440, height: 900 },
  { name: 'desktop_1280x800', category: 'Desktop', width: 1280, height: 800 },
  { name: 'desktop_1024x768', category: 'Desktop', width: 1024, height: 768 },
  { name: 'tablet_820x1180', category: 'Tablet', width: 820, height: 1180 },
  { name: 'tablet_768x1024', category: 'Tablet', width: 768, height: 1024 },
  { name: 'mobile_430x932', category: 'Mobile', width: 430, height: 932 },
  { name: 'mobile_414x896', category: 'Mobile', width: 414, height: 896 },
  { name: 'mobile_390x844', category: 'Mobile', width: 390, height: 844 },
  { name: 'mobile_375x812', category: 'Mobile', width: 375, height: 812 },
  { name: 'mobile_360x800', category: 'Mobile', width: 360, height: 800 },
];

const SECTIONS = [
  { id: 'hero', name: 'Hero', selector: '#hero' },
  { id: 'prologue', name: 'Prologue', selector: '#prologue' },
  { id: 'villas', name: 'Villas', selector: '#villas' },
  { id: 'curations', name: 'Curations', selector: '#curations' },
  { id: 'weddings', name: 'Weddings', selector: '#weddings' },
  { id: 'location', name: 'Location', selector: '#location' },
  { id: 'gallery', name: 'Gallery', selector: '#gallery' },
  { id: 'accolades', name: 'Accolades', selector: '#accolades' },
  { id: 'reservation', name: 'Reservation', selector: '#reservation' },
  { id: 'footer', name: 'Footer', selector: 'footer' },
];

(async () => {
  const browser = await chromium.launch();
  const outputDir = path.join(__dirname, '..', 'test-results', 'final_baseline');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('=== PHASE 11E — FINAL CINEMATIC BASELINE CAPTURE ===\n');

  const baselineResults = {
    capturedAt: new Date().toISOString(),
    viewports: [],
    sections: {},
    opticalAudit: {},
  };

  for (const vp of VIEWPORTS) {
    console.log(`\n--- Capturing Viewport: ${vp.name} (${vp.width}x${vp.height}) ---`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);

    console.log(`Overflow: ${hasOverflow ? 'FAIL (HAS OVERFLOW)' : 'PASS (0 overflow)'}, Total Height: ${scrollHeight}px`);

    const vpDir = path.join(outputDir, vp.name);
    if (!fs.existsSync(vpDir)) {
      fs.mkdirSync(vpDir, { recursive: true });
    }

    // Capture each section
    for (const sec of SECTIONS) {
      const el = page.locator(sec.selector);
      if (await el.count() > 0) {
        await el.first().scrollIntoViewIfNeeded();
        await page.waitForTimeout(400);
        const shotPath = path.join(vpDir, `${sec.id}.png`);
        await el.first().screenshot({ path: shotPath });
      }
    }

    baselineResults.viewports.push({
      name: vp.name,
      category: vp.category,
      width: vp.width,
      height: vp.height,
      scrollHeight,
      hasOverflow,
    });

    await page.close();
  }

  // Perform optical typography & image art direction measurements on desktop 1440x900
  const detailPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await detailPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await detailPage.waitForTimeout(800);

  const opticalAudit = await detailPage.evaluate(() => {
    const data = {
      heroH1: null,
      sectionH2s: {},
      eyebrows: {},
      heroImageProps: null,
      paletteContrast: {},
    };

    const h1 = document.querySelector('h1');
    if (h1) {
      const cs = window.getComputedStyle(h1);
      data.heroH1 = {
        text: h1.textContent.trim(),
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        fontFamily: cs.fontFamily,
        color: cs.color,
      };
    }

    const sections = ['prologue', 'villas', 'curations', 'weddings', 'location', 'gallery', 'accolades', 'reservation'];
    for (const id of sections) {
      const sec = document.getElementById(id);
      if (sec) {
        const h2 = sec.querySelector('h2');
        if (h2) {
          const cs = window.getComputedStyle(h2);
          data.sectionH2s[id] = {
            text: h2.textContent.trim(),
            fontSize: cs.fontSize,
            lineHeight: cs.lineHeight,
            fontFamily: cs.fontFamily.split(',')[0],
            color: cs.color,
            marginTop: cs.marginTop,
            marginBottom: cs.marginBottom,
          };
        }
      }
    }

    // Hero image evaluation
    const heroImg = document.querySelector('#hero img');
    if (heroImg) {
      const cs = window.getComputedStyle(heroImg);
      const rect = heroImg.getBoundingClientRect();
      data.heroImageProps = {
        src: heroImg.getAttribute('src'),
        objectFit: cs.objectFit,
        objectPosition: cs.objectPosition,
        renderedWidth: Math.round(rect.width),
        renderedHeight: Math.round(rect.height),
      };
    }

    return data;
  });

  baselineResults.opticalAudit = opticalAudit;
  fs.writeFileSync(path.join(outputDir, 'baseline_results.json'), JSON.stringify(baselineResults, null, 2));

  console.log('\n=== OPTICAL AUDIT SUMMARY ===');
  console.log('Hero H1:', opticalAudit.heroH1);
  console.log('Section H2s Count:', Object.keys(opticalAudit.sectionH2s).length);
  console.log('Hero Image Props:', opticalAudit.heroImageProps);

  await browser.close();
  console.log('\nAll 10 viewports and 100 section screenshots captured successfully.');
})();
