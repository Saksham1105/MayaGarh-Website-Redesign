import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 8B — Visual Archive / Gallery Suite', () => {
  test.beforeEach(async ({ page }) => {
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        expect(msg.text()).not.toContain('Uncaught');
      }
    });
  });

  test('Gallery section semantic hierarchy, H2, and structure on Desktop (1440px)', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const gallery = page.locator('section#gallery');
    await expect(gallery).toBeVisible();

    await gallery.scrollIntoViewIfNeeded();

    // Section accessible label
    await expect(gallery).toHaveAttribute(
      'aria-label',
      'Visual Archive of Maya Garh Pushkar'
    );

    // Exactly one H2 inside gallery section
    const h2 = gallery.locator('h2');
    await expect(h2).toHaveCount(1);
    await expect(h2).toHaveText('A Living Chronicle of Stone and Light');

    // Section Eyebrow & Subheadline
    await expect(gallery.locator('text=THE VISUAL ARCHIVE')).toBeVisible();
    await expect(
      gallery.locator('text=The Photographic Archive of Maya Garh Pushkar')
    ).toBeVisible();

    // Archival metadata badge
    await expect(
      gallery.locator('text=32 ARCHIVAL PLATES · RAJASTHAN')
    ).toBeVisible();

    // Verify all 8 category chapters are rendered under 'All Archive'
    const chapters = gallery.locator('article[id^="gallery-chapter-"]');
    await expect(chapters).toHaveCount(8);

    // Verify exactly 32 image plates are rendered in All Archive view
    const plates = gallery.locator('figure');
    await expect(plates).toHaveCount(32);

    // Verify all images have non-empty alt text
    const images = gallery.locator('figure img');
    const imageCount = await images.count();
    expect(imageCount).toBe(32);

    for (let i = 0; i < imageCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt?.length).toBeGreaterThan(5);
    }
  });

  test('Gallery category filtering behavior', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const gallery = page.locator('section#gallery');
    await gallery.scrollIntoViewIfNeeded();

    // Check all filter buttons exist
    const filterAll = page.locator('#gallery-filter-all');
    await expect(filterAll).toBeVisible();
    await expect(filterAll).toHaveAttribute('aria-pressed', 'true');

    const filterVillas = page.locator('#gallery-filter-villas');
    const filterWater = page.locator('#gallery-filter-water');
    const filterDining = page.locator('#gallery-filter-dining');
    const filterDetails = page.locator('#gallery-filter-details');

    await expect(filterVillas).toBeVisible();
    await expect(filterWater).toBeVisible();
    await expect(filterDining).toBeVisible();
    await expect(filterDetails).toBeVisible();

    // 1. Filter by Villas (8 curated plates)
    await filterVillas.click();
    await expect(filterVillas).toHaveAttribute('aria-pressed', 'true');
    await expect(filterAll).toHaveAttribute('aria-pressed', 'false');

    // Only 1 chapter visible (Villas) and 8 plates
    const villaChapter = gallery.locator('#gallery-chapter-villas');
    await expect(villaChapter).toBeVisible();
    const otherChapter = gallery.locator('#gallery-chapter-architecture');
    await expect(otherChapter).toHaveCount(0);

    const villaPlates = gallery.locator('figure');
    await expect(villaPlates).toHaveCount(8);

    // 2. Filter by Craftsmanship (Details - 4 plates)
    await filterDetails.click();
    await expect(filterDetails).toHaveAttribute('aria-pressed', 'true');
    const detailsChapter = gallery.locator('#gallery-chapter-details');
    await expect(detailsChapter).toBeVisible();
    const detailsPlates = gallery.locator('figure');
    await expect(detailsPlates).toHaveCount(4);

    // 3. Return to All Archive (32 plates across 8 chapters)
    await filterAll.click();
    await expect(filterAll).toHaveAttribute('aria-pressed', 'true');
    await expect(gallery.locator('article[id^="gallery-chapter-"]')).toHaveCount(8);
    await expect(gallery.locator('figure')).toHaveCount(32);
  });

  test('Accessible Lightbox interaction, keyboard navigation, focus trap & restoration', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const gallery = page.locator('section#gallery');
    await gallery.scrollIntoViewIfNeeded();

    // Click the first archival plate trigger button
    const firstTrigger = gallery.locator('figure button').first();
    await firstTrigger.click();

    // Modal dialog opens
    const dialog = page.locator('#gallery-lightbox-dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('role', 'dialog');
    await expect(dialog).toHaveAttribute('aria-modal', 'true');

    // Body scroll locked
    const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflow).toBe('hidden');

    // Counter shows first plate
    const counter = dialog.locator('header').getByText(/ARCHIVAL PLATE 01/i);
    await expect(counter).toBeVisible();

    // Close button exists with minimum touch/click hit area
    const closeBtn = page.locator('#gallery-lightbox-close');
    await expect(closeBtn).toBeVisible();
    const closeBox = await closeBtn.boundingBox();
    expect(closeBox?.width).toBeGreaterThanOrEqual(44);
    expect(closeBox?.height).toBeGreaterThanOrEqual(44);

    // Next navigation button test
    const nextBtn = page.locator('#gallery-lightbox-next');
    await nextBtn.click();
    await expect(dialog.locator('header').getByText(/ARCHIVAL PLATE 02/i)).toBeVisible();

    // Previous navigation button test
    const prevBtn = page.locator('#gallery-lightbox-prev');
    await prevBtn.click();
    await expect(dialog.locator('header').getByText(/ARCHIVAL PLATE 01/i)).toBeVisible();

    // Keyboard navigation: ArrowRight
    await page.keyboard.press('ArrowRight');
    await expect(dialog.locator('header').getByText(/ARCHIVAL PLATE 02/i)).toBeVisible();

    // Keyboard navigation: ArrowLeft
    await page.keyboard.press('ArrowLeft');
    await expect(dialog.locator('header').getByText(/ARCHIVAL PLATE 01/i)).toBeVisible();

    // Escape closes the lightbox
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();

    // Body scroll restored
    const bodyOverflowAfterClose = await page.evaluate(
      () => document.body.style.overflow
    );
    expect(bodyOverflowAfterClose).toBe('');

    // Focus restored to the triggering element
    const isTriggerFocused = await firstTrigger.evaluate(
      (el) => el === document.activeElement
    );
    expect(isTriggerFocused).toBe(true);

    // Test close via Close button
    await firstTrigger.click();
    await expect(dialog).toBeVisible();
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();
  });

  test('Focus trap inside Lightbox dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const gallery = page.locator('section#gallery');
    await gallery.scrollIntoViewIfNeeded();

    const firstTrigger = gallery.locator('figure button').first();
    await firstTrigger.click();

    const dialog = page.locator('#gallery-lightbox-dialog');
    await expect(dialog).toBeVisible();

    const closeBtn = page.locator('#gallery-lightbox-close');
    await expect(closeBtn).toBeVisible();
    await closeBtn.focus();

    // Tab to next focusable control inside modal
    await page.keyboard.press('Tab');
    const focusedAfterTab = await page.evaluate(
      () => document.activeElement?.id
    );
    expect(['gallery-lightbox-close', 'gallery-lightbox-prev', 'gallery-lightbox-next']).toContain(
      focusedAfterTab
    );

    // Close modal
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('Zero broken image requests in Gallery', async ({ page }) => {
    const failedUrls: string[] = [];
    page.on('response', (response) => {
      if (
        response.request().resourceType() === 'image' &&
        response.status() >= 400
      ) {
        failedUrls.push(response.url());
      }
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const gallery = page.locator('section#gallery');
    await gallery.scrollIntoViewIfNeeded();

    // Scroll through the gallery to trigger lazy images
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(1000);

    expect(failedUrls).toHaveLength(0);
  });
});
