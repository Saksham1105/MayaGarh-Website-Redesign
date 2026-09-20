const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Running comprehensive QA test & capture script...');

  const outputDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Monitor console errors and warnings
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
  });

  // ── 1. 1440x900 DESKTOP AUDIT ──
  console.log('Auditing 1440x900 Desktop...');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // Transition: Prologue -> Villas
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top - 150, behavior: 'instant' });
    }
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_1440x900_transition.png'),
    fullPage: false,
  });

  // Villa 1: Maha Maya
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_1440x900_first_villa.png'),
    fullPage: false,
  });

  // Check Counter at start
  const counterTextInitial = await page.locator('#villas span:text-matches("\\\\d{2}")').first().textContent();
  console.log('Initial Counter text:', counterTextInitial);

  // Scrub down to middle villa (Malak / Adiva)
  await page.mouse.wheel(0, 1800);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(outputDir, 'qa_1440x900_middle_villa.png'),
    fullPage: false,
  });

  // Scrub down to final villa (Mayan)
  await page.mouse.wheel(0, 2400);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(outputDir, 'qa_1440x900_final_villa.png'),
    fullPage: false,
  });

  // Reverse scroll test: scroll back up to Villa 01
  await page.mouse.wheel(0, -4200);
  await page.waitForTimeout(800);
  const counterReversed = await page.locator('#villas span:text-matches("\\\\d{2}")').first().textContent();
  console.log('Reversed Counter text:', counterReversed);

  // ── 2. 1280x800 DESKTOP AUDIT ──
  console.log('Auditing 1280x800 Desktop...');
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_1280x800_first_villa.png'),
    fullPage: false,
  });

  // ── 3. 1024x768 TABLET LANDSCAPE ──
  console.log('Auditing 1024x768 Tablet Landscape...');
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_1024x768_representative.png'),
    fullPage: false,
  });

  // ── 4. 834x1112 TABLET PORTRAIT ──
  console.log('Auditing 834x1112 Tablet Portrait...');
  await page.setViewportSize({ width: 834, height: 1112 });
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_834x1112_inspect.png'),
    fullPage: false,
  });

  // ── 5. 768x1024 TABLET PORTRAIT ──
  console.log('Auditing 768x1024 Tablet Portrait...');
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_768x1024_representative.png'),
    fullPage: false,
  });

  // ── 6. 430x932 MOBILE AUDIT (iPhone Pro Max) ──
  console.log('Auditing 430x932 Mobile...');
  await page.setViewportSize({ width: 430, height: 932 });
  await page.evaluate(() => {
    const el = document.getElementById('villa-maha-maya');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_430x932_representative.png'),
    fullPage: false,
  });

  // ── 7. 390x844 MOBILE AUDIT ──
  console.log('Auditing 390x844 Mobile...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => {
    const el = document.getElementById('villa-amanjena');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_390x844_representative.png'),
    fullPage: false,
  });

  // ── 8. 375x812 MOBILE AUDIT ──
  console.log('Auditing 375x812 Mobile...');
  await page.setViewportSize({ width: 375, height: 812 });

  // Transition
  await page.evaluate(() => {
    const el = document.getElementById('villas');
    if (el) {
      const rect = el.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + rect.top - 80, behavior: 'instant' });
    }
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_375x812_transition.png'),
    fullPage: false,
  });

  // Opening Villa
  await page.evaluate(() => {
    const el = document.getElementById('villa-maha-maya');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_375x812_opening_villa.png'),
    fullPage: false,
  });

  // Middle Villa
  await page.evaluate(() => {
    const el = document.getElementById('villa-malak');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_375x812_middle_villa.png'),
    fullPage: false,
  });

  // Final Villa
  await page.evaluate(() => {
    const el = document.getElementById('villa-mayan');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outputDir, 'qa_375x812_final_villa.png'),
    fullPage: false,
  });

  await browser.close();

  console.log('Console Errors caught:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console error list:', consoleErrors);
  }
  console.log('QA script finished successfully.');
})();
