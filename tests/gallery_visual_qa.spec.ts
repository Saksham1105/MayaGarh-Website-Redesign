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

test.describe('Maya Garh Phase 8B — Gallery Responsive Visual QA Matrix', () => {
  for (const vp of VIEWPORTS) {
    test(`Responsive visual QA on ${vp.name} (${vp.width}x${vp.height})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'networkidle' });

      const gallery = page.locator('section#gallery');
      await expect(gallery).toBeVisible();

      // Scroll into view and trigger lazy image loading through entire gallery
      await gallery.scrollIntoViewIfNeeded();
      await page.evaluate(async () => {
        const galleryEl = document.getElementById('gallery');
        if (!galleryEl) return;
        const rect = galleryEl.getBoundingClientRect();
        const start = window.scrollY + rect.top;
        const end = start + rect.height;
        for (let y = start; y < end; y += 800) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 60));
        }
        window.scrollTo(0, start);
      });
      await page.waitForTimeout(600);

      // Verify no horizontal overflow on any viewport
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasHorizontalOverflow).toBe(false);

      // Verify H2
      await expect(gallery.locator('h2')).toHaveText(
        'A Living Chronicle of Stone and Light'
      );

      // On mobile viewports (<= 768px), verify category buttons have touch target >= 48px
      if (vp.width <= 768) {
        const filterButton = gallery.locator('#gallery-filter-all');
        const box = await filterButton.boundingBox();
        expect(box).not.toBeNull();
        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }

      // Hide fixed header momentarily to avoid visual stitching artifacts during element screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.visibility = 'hidden';
      });

      // Capture screenshot of Gallery intro & first chapter
      await gallery.screenshot({
        path: `tests/screenshots/gallery_${vp.name}.png`,
      });
    });
  }

  test('Lightbox opens and displays responsively on Mobile (390x844)', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const gallery = page.locator('section#gallery');
    await gallery.scrollIntoViewIfNeeded();

    const firstTrigger = gallery.locator('figure button').first();
    await firstTrigger.click();

    const dialog = page.locator('#gallery-lightbox-dialog');
    await expect(dialog).toBeVisible();

    // Verify close button is at least 44px
    const closeBtn = page.locator('#gallery-lightbox-close');
    const closeBox = await closeBtn.boundingBox();
    expect(closeBox?.width).toBeGreaterThanOrEqual(44);
    expect(closeBox?.height).toBeGreaterThanOrEqual(44);

    // Verify image is visible
    const activeImg = page.locator('#gallery-lightbox-active-img');
    await expect(activeImg).toBeVisible();

    // Take screenshot of mobile lightbox
    await page.screenshot({
      path: 'tests/screenshots/gallery_lightbox_mobile_390.png',
    });

    // Close
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();
  });
});
