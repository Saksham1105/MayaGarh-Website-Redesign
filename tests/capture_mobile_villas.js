const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Capturing mobile villas screenshots...');
  const outputDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // 1. 375x812 iPhone / Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1.4 Prologue -> Villas Transition
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) {
      const rect = el.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + rect.top - 80, behavior: 'instant' });
    }
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'mobile_375x812_transition.png'),
    fullPage: false,
  });
  console.log('Captured: mobile_375x812_transition.png');

  // 1.1 Maha Maya opening
  const villa1 = page.locator('#villa-maha-maya');
  await villa1.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -60));
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'mobile_375x812_maha_maya_opening.png'),
    fullPage: false,
  });
  console.log('Captured: mobile_375x812_maha_maya_opening.png');

  // 1.2 Middle Villa (Malak / Adiva)
  const villaMalak = page.locator('#villa-malak');
  await villaMalak.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -60));
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'mobile_375x812_middle_villa.png'),
    fullPage: false,
  });
  console.log('Captured: mobile_375x812_middle_villa.png');

  // 1.3 Final Villa (Mayan)
  const villaMayan = page.locator('#villa-mayan');
  await villaMayan.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -60));
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'mobile_375x812_final_villa.png'),
    fullPage: false,
  });
  console.log('Captured: mobile_375x812_final_villa.png');

  // 2. 390x844 Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const villaAmanjena = page.locator('#villa-amanjena');
  await villaAmanjena.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -60));
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'mobile_390x844_representative.png'),
    fullPage: false,
  });
  console.log('Captured: mobile_390x844_representative.png');

  // 3. 768x1024 Tablet Portrait
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const villaAmeera = page.locator('#villa-ameera');
  await villaAmeera.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -60));
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'tablet_768x1024_representative.png'),
    fullPage: false,
  });
  console.log('Captured: tablet_768x1024_representative.png');

  await browser.close();
  console.log('Mobile screenshots captured successfully.');
})();
