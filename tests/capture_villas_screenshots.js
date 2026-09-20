const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser to capture Phase 4B visual evidence...');

  const outputDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // ── 1. 1440x900 DESKTOP AUDIT ──
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Prologue -> Villas Transition screenshot
  const villasSection = page.locator('#villas');
  await villasSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'phase4b_1440x900_transition.png'),
    fullPage: false,
  });
  console.log('Saved: phase4b_1440x900_transition.png');

  // First Villa (Maha Maya) viewport
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'phase4b_1440x900_villas_first.png'),
    fullPage: false,
  });
  console.log('Saved: phase4b_1440x900_villas_first.png');

  // Middle Villa (Malak / Adiva - scroll down horizontal scrub track)
  await page.mouse.wheel(0, 1800);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(outputDir, 'phase4b_1440x900_villas_middle.png'),
    fullPage: false,
  });
  console.log('Saved: phase4b_1440x900_villas_middle.png');

  // Final Villa (Mayan - scroll further down)
  await page.mouse.wheel(0, 3200);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(outputDir, 'phase4b_1440x900_villas_final.png'),
    fullPage: false,
  });
  console.log('Saved: phase4b_1440x900_villas_final.png');

  // ── 2. 1024x768 TABLET LANDSCAPE AUDIT ──
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Tablet First Villa
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'phase4b_1024x768_villas_first.png'),
    fullPage: false,
  });
  console.log('Saved: phase4b_1024x768_villas_first.png');

  // Tablet Middle Villa
  await page.mouse.wheel(0, 1600);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(outputDir, 'phase4b_1024x768_villas_middle.png'),
    fullPage: false,
  });
  console.log('Saved: phase4b_1024x768_villas_middle.png');

  await browser.close();
  console.log('Phase 4B visual evidence screenshots captured successfully!');
})();
