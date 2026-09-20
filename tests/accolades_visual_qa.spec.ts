import { test, expect } from '@playwright/test';

const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'tablet-landscape-1024', width: 1024, height: 768 },
  { name: 'tablet-ipad-air-820', width: 820, height: 1180 },
  { name: 'tablet-portrait-768', width: 768, height: 1024 },
  { name: 'mobile-iphone14promax-430', width: 430, height: 932 },
  { name: 'mobile-iphone-xr-414', width: 414, height: 896 },
  { name: 'mobile-iphone14-390', width: 390, height: 844 },
  { name: 'mobile-iphone-se-375', width: 375, height: 812 },
  { name: 'mobile-android-360', width: 360, height: 800 },
];

test.describe('Maya Garh Phase 9B — Accolades Responsive Visual QA', () => {
  for (const vp of VIEWPORTS) {
    test(`Responsive check and visual capture on ${vp.name} (${vp.width}x${vp.height})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'networkidle' });

      const accolades = page.locator('section#accolades');
      await expect(accolades).toBeVisible();

      // Scroll into view to trigger ScrollTrigger animations
      await accolades.scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);

      // Verify no horizontal overflow across any viewport
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasHorizontalOverflow).toBe(false);

      // Verify H2, Eyebrow and Monograph
      await expect(accolades.locator('h2')).toHaveText(
        'Quiet Solitude, Attested by Guests'
      );
      await expect(accolades.locator('text=SANCTUARY VOICES & RECOGNITION')).toBeVisible();

      // Verify 3 ratings present
      const ratings = accolades.locator('a[class*="ratingColumn"]');
      await expect(ratings).toHaveCount(3);

      // Capture screenshot for visual inspection with fixed header temporarily hidden
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.visibility = 'hidden';
      });

      await accolades.screenshot({
        path: `test-results/accolades-${vp.name}.png`,
      });

      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.visibility = 'visible';
      });
    });
  }
});
