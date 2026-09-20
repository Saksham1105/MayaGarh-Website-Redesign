const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'test-results', 'curations-final-qa');
const ARTIFACT_DIR = 'C:/Users/Nameless King/.gemini/antigravity-ide/brain/dae3c3ee-3ed8-41e2-bf3a-b2b162b8edd9';

const VIEWPORTS = [
  { id: '1440x900', width: 1440, height: 900, label: 'Desktop Large' },
  { id: '1280x800', width: 1280, height: 800, label: 'Desktop Medium' },
  { id: '1024x768', width: 1024, height: 768, label: 'Desktop Landscape' },
  { id: '820x1180', width: 820, height: 1180, label: 'Tablet Large' },
  { id: '768x1024', width: 768, height: 1024, label: 'Tablet Portrait' },
  { id: '430x932', width: 430, height: 932, label: 'Mobile XL' },
  { id: '414x896', width: 414, height: 896, label: 'Mobile L' },
  { id: '390x844', width: 390, height: 844, label: 'Mobile M' },
  { id: '375x812', width: 375, height: 812, label: 'Mobile S' },
  { id: '360x800', width: 360, height: 800, label: 'Mobile XS' },
];

(async () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Starting Phase 5C Visual QA Screen Capture across 10 Viewports...');

  // 1. Capture Desktop 1440x900 detailed chapters
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const curations = page.locator('section#curations');
  await curations.evaluate((el) => el.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(800);

  const desktopShots = [
    { name: 'desktop-1440x900-intro.png', target: 'section#curations' },
    { name: 'desktop-1440x900-curation-01.png', target: '#curation-desert-sundowner' },
    { name: 'desktop-1440x900-curation-02.png', target: '#curation-veranda-dining' },
    { name: 'desktop-1440x900-curation-03.png', target: '#curation-royal-infinity-pool' },
    { name: 'desktop-1440x900-curation-04.png', target: '#curation-courtyard-sanctuary' },
  ];

  for (const shot of desktopShots) {
    const loc = page.locator(shot.target);
    await loc.evaluate((el) => el.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(600);
    const dest = path.join(OUTPUT_DIR, shot.name);
    await page.screenshot({ path: dest });
    fs.copyFileSync(dest, path.join(ARTIFACT_DIR, shot.name));
    console.log(`Captured: ${shot.name}`);
  }

  // 2. Capture each viewport at Curations entrance & representative chapter
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    // First scroll to curations section so ScrollTrigger settles past Villas
    await page.evaluate(() => {
      const cur = document.querySelector('section#curations');
      if (cur) cur.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await page.waitForTimeout(400);

    // Then scroll precisely to chapter 1
    await page.evaluate(() => {
      const ch1 = document.querySelector('#curation-desert-sundowner');
      if (ch1) ch1.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await page.waitForTimeout(600);

    const filename = `curations-${vp.id}.png`;
    const dest = path.join(OUTPUT_DIR, filename);
    await page.screenshot({ path: dest });
    fs.copyFileSync(dest, path.join(ARTIFACT_DIR, filename));
    console.log(`Captured: ${filename} (${vp.label})`);
  }

  // 3. Capture 375x812 full mobile chapter progression
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  await page.evaluate(() => {
    const cur = document.querySelector('section#curations');
    if (cur) cur.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(400);

  const mobileShots = [
    { name: 'mobile-375x812-chapter-01.png', target: '#curation-desert-sundowner' },
    { name: 'mobile-375x812-chapter-02.png', target: '#curation-veranda-dining' },
    { name: 'mobile-375x812-chapter-03.png', target: '#curation-royal-infinity-pool' },
    { name: 'mobile-375x812-chapter-04.png', target: '#curation-courtyard-sanctuary' },
  ];

  for (const shot of mobileShots) {
    await page.evaluate((sel) => {
      const loc = document.querySelector(sel);
      if (loc) loc.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, shot.target);
    await page.waitForTimeout(600);
    const dest = path.join(OUTPUT_DIR, shot.name);
    await page.screenshot({ path: dest });
    fs.copyFileSync(dest, path.join(ARTIFACT_DIR, shot.name));
    console.log(`Captured: ${shot.name}`);
  }

  await browser.close();
  console.log('Phase 5C Visual QA Screen Capture completed successfully.');
})();
