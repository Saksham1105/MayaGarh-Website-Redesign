const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Launching browser to capture Phase 3 visual evidence...');
  const browser = await chromium.launch();

  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  // Helper function
  async function capture(width, height, scrollY, filename) {
    const context = await browser.newContext({ viewport: { width, height } });
    const page = await context.newPage();
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    if (scrollY === 'prologue') {
      await page.locator('section#prologue').scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
    } else if (scrollY > 0) {
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(600);
    }

    const filePath = path.join(screenshotsDir, filename);
    await page.screenshot({ path: filePath });
    console.log(`Saved screenshot: ${filename} (${width}x${height}) -> ${filePath}`);
    await context.close();
  }

  // 1. 1440x900 Hero -> Prologue transition
  await capture(1440, 900, 450, 'phase3_1440x900_transition.png');

  // 2. 1440x900 Full Prologue
  await capture(1440, 900, 'prologue', 'phase3_1440x900_prologue.png');

  // 3. 1024x768 Prologue Section
  await capture(1024, 768, 'prologue', 'phase3_1024x768_prologue.png');

  // 4. 375x812 Hero -> Mobile Prologue transition
  await capture(375, 812, 350, 'phase3_375x812_transition.png');

  // 5. 375x812 Mobile Prologue Screen
  await capture(375, 812, 'prologue', 'phase3_375x812_prologue.png');

  await browser.close();
  console.log('All Phase 3 visual evidence screenshots captured successfully!');
})().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
