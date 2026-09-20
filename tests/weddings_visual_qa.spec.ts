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

test.describe('Maya Garh Phase 6B — Weddings Responsive Visual QA', () => {
  for (const vp of VIEWPORTS) {
    test(`Responsive check and visual capture on ${vp.name} (${vp.width}x${vp.height})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'networkidle' });

      const weddings = page.locator('section#weddings');
      await expect(weddings).toBeVisible();

      // Scroll into view
      await weddings.scrollIntoViewIfNeeded();

      // Scroll through weddings section so all sub-elements trigger their reveals
      const ctaLink = weddings.locator('a:has-text("ENQUIRE FOR WEDDINGS")');
      await ctaLink.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await weddings.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // On mobile viewports (<= 768px), verify ~52px CTA height
      if (vp.width <= 768) {
        const ctaBox = await ctaLink.boundingBox();
        expect(ctaBox).not.toBeNull();
        if (ctaBox) {
          expect(ctaBox.height).toBeGreaterThanOrEqual(50);
          expect(ctaBox.height).toBeLessThanOrEqual(56);
        }
      }

      // Capture screenshot of the weddings section
      await weddings.screenshot({
        path: `tests/screenshots/weddings_${vp.name}.png`,
      });
    });
  }
});
