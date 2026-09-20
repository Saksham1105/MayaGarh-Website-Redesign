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

test.describe('Maya Garh Phase 7B — Location Responsive Visual QA', () => {
  for (const vp of VIEWPORTS) {
    test(`Responsive check and visual capture on ${vp.name} (${vp.width}x${vp.height})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'networkidle' });

      const location = page.locator('section#location');
      await expect(location).toBeVisible();

      // Scroll into view and scroll down through section to trigger reveals
      await location.scrollIntoViewIfNeeded();
      const ctaLink = location.locator('a:has-text("PLAN YOUR ARRIVAL")');
      await ctaLink.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await location.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Verify no horizontal overflow across any viewport
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasHorizontalOverflow).toBe(false);

      // Verify H2 and CTA
      await expect(location.locator('h2')).toHaveText(
        'Where the Aravallis Meet the Desert Stillness'
      );
      await expect(ctaLink).toBeVisible();

      // On mobile viewports (<= 768px), verify ~52px CTA height
      if (vp.width <= 768) {
        const ctaBox = await ctaLink.boundingBox();
        expect(ctaBox).not.toBeNull();
        if (ctaBox) {
          expect(ctaBox.height).toBeGreaterThanOrEqual(50);
          expect(ctaBox.height).toBeLessThanOrEqual(56);
        }
      }

      // Hide fixed header momentarily to avoid fixed-position stitching artifacts during element capture
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.visibility = 'hidden';
      });

      // Capture screenshot of the location section
      await location.screenshot({
        path: `tests/screenshots/location_${vp.name}.png`,
      });
    });
  }
});
