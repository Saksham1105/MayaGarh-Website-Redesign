const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const metrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find(p => p.name === 'first-contentful-paint');

    return {
      domContentLoaded: nav ? nav.domContentLoadedEventEnd - nav.startTime : null,
      loadComplete: nav ? nav.loadEventEnd - nav.startTime : null,
      fcp: fcp ? fcp.startTime : null,
    };
  });

  console.log('PERF_METRICS:', JSON.stringify(metrics));

  await browser.close();
})();
