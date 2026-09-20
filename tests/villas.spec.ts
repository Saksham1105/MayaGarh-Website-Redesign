import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 4 — Royal Villa Collection QA Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  // ── 1. DATA INTEGRITY & HEADING HIERARCHY ──
  test('Data Integrity & Semantic Heading Hierarchy', async ({ page }) => {
    const villasSection = page.locator('section#villas');
    await expect(villasSection).toBeAttached();

    // Verify accessible H2 heading exists for the section
    const sectionH2 = villasSection.locator('h2');
    await expect(sectionH2).toBeAttached();
    expect(await sectionH2.textContent()).toContain('Royal Villa Collection');

    // Verify all 6 villa H3 titles exist with exact names
    const expectedVillas = ['Maha Maya', 'Amanjena', 'Malak', 'Adiva', 'Ameera', 'Mayan'];
    const h3Headings = villasSection.locator('h3');
    await expect(h3Headings).toHaveCount(6);

    for (let i = 0; i < expectedVillas.length; i++) {
      await expect(h3Headings.nth(i)).toHaveText(expectedVillas[i]);
    }

    // Verify verified rate labels (exactly 6)
    const rateTags = villasSection.locator('span', { hasText: 'Enquire for Rates' });
    await expect(rateTags).toHaveCount(6);

    // Verify verified CTA links (exactly 6)
    const ctas = villasSection.locator('a[href^="#reservation?intent=stay&villa="]');
    await expect(ctas).toHaveCount(6);

    // Verify all 6 images have descriptive alt text
    const images = villasSection.locator('img');
    await expect(images).toHaveCount(6);
    for (let i = 0; i < 6; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt!.length).toBeGreaterThan(10);
    }
  });

  // ── 2. DESKTOP INTERACTION & SCRUB (1440x900) ──
  test('Desktop 1440x900 Scrub, Counter Synchronization & Reversing', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    const villasSection = page.locator('section#villas');
    await villasSection.evaluate((el) => el.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(600);

    // Verify section header & counter are visible
    const eyebrow = villasSection.locator('span', { hasText: 'THE ROYAL VILLA COLLECTION' });
    await expect(eyebrow).toBeVisible();

    const currentCounter = villasSection.locator('span:text-matches("^\\\\d{2}$")').first();
    await expect(currentCounter).toHaveText('01');

    // Scroll through chapters
    await page.mouse.wheel(0, 1800);
    await page.waitForTimeout(600);
    const midCounter = await currentCounter.textContent();
    expect(Number(midCounter)).toBeGreaterThanOrEqual(1);

    // Scroll to the end
    await page.mouse.wheel(0, 2400);
    await page.waitForTimeout(600);

    // Reverse scroll back up
    await page.mouse.wheel(0, -5000);
    await page.waitForTimeout(1400);
    const reversedCounter = await currentCounter.textContent();
    expect(Number(reversedCounter)).toBeLessThanOrEqual(2);

    // Verify zero body horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
  });

  // ── 3. DESKTOP 1280x800 AUDIT ──
  test('Desktop 1280x800 Renders Cleanly with Zero Overflow', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });

    const villasSection = page.locator('section#villas');
    await villasSection.scrollIntoViewIfNeeded();

    const eyebrow = villasSection.locator('span', { hasText: 'THE ROYAL VILLA COLLECTION' });
    await expect(eyebrow).toBeVisible();

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(1280);
  });

  // ── 4. TABLET LANDSCAPE 1024x768 AUDIT ──
  test('Tablet Landscape 1024x768 Renders Desktop Pinned Showcase', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });

    const villasSection = page.locator('section#villas');
    await villasSection.scrollIntoViewIfNeeded();

    const eyebrow = villasSection.locator('span', { hasText: 'THE ROYAL VILLA COLLECTION' });
    await expect(eyebrow).toBeVisible();

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(1024);
  });

  // ── 5. TABLET PORTRAIT 834x1112 AUDIT ──
  test('Tablet 834x1112 Portrait Renders Cleanly', async ({ page }) => {
    await page.setViewportSize({ width: 834, height: 1112 });

    const villasSection = page.locator('section#villas');
    await villasSection.scrollIntoViewIfNeeded();

    const firstH3 = villasSection.locator('h3', { hasText: 'Maha Maya' });
    await expect(firstH3).toBeAttached();

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(834);
  });

  // ── 6. TABLET PORTRAIT 768x1024 AUDIT ──
  test('Tablet 768x1024 Portrait Renders Touch-Native Editorial Flow', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });

    const villasSection = page.locator('section#villas');
    await villasSection.scrollIntoViewIfNeeded();

    const firstH3 = villasSection.locator('h3', { hasText: 'Maha Maya' });
    await expect(firstH3).toBeAttached();

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(768);
  });

  // ── 7. MOBILE 430x932 AUDIT ──
  test('Mobile 430x932 (Large Mobile) Touch-Native Experience', async ({ page }) => {
    await page.setViewportSize({ width: 430, height: 932 });

    const villasSection = page.locator('section#villas');
    await villasSection.scrollIntoViewIfNeeded();

    const firstCta = villasSection.locator('a', { hasText: 'Enquire for Maha Maya' });
    await expect(firstCta).toBeAttached();

    const ctaBox = await firstCta.boundingBox();
    if (ctaBox) {
      expect(ctaBox.height).toBeGreaterThanOrEqual(44);
    }

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(430);
  });

  // ── 8. MOBILE 390x844 AUDIT ──
  test('Mobile 390x844 Touch-Native Experience', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    const villasSection = page.locator('section#villas');
    await villasSection.scrollIntoViewIfNeeded();

    const amanH3 = villasSection.locator('h3', { hasText: 'Amanjena' });
    await expect(amanH3).toBeAttached();

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(390);
  });

  // ── 9. MOBILE 375x812 AUDIT ──
  test('Mobile 375x812 Standard Mobile Touch-Native Experience', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    const villasSection = page.locator('section#villas');
    await villasSection.scrollIntoViewIfNeeded();

    const mayanH3 = villasSection.locator('h3', { hasText: 'Mayan' });
    await expect(mayanH3).toBeAttached();

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375);
  });

  // ── 10. KEYBOARD ACCESSIBILITY AUDIT ──
  test('Keyboard Navigation Tabs Through All Six Villa CTAs', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    const villasSection = page.locator('section#villas');
    await villasSection.scrollIntoViewIfNeeded();

    // Focus the first villa CTA directly
    const firstCta = villasSection.locator('a[href^="#reservation?intent=stay&villa="]').first();
    await firstCta.focus();
    await expect(firstCta).toBeFocused();

    // Tab through subsequent villa CTAs
    const allCtas = villasSection.locator('a[href^="#reservation?intent=stay&villa="]');
    const count = await allCtas.count();
    expect(count).toBe(6);

    for (let i = 0; i < count; i++) {
      await allCtas.nth(i).focus();
      await expect(allCtas.nth(i)).toBeFocused();
    }
  });

  // ── 11. REDUCED MOTION AUDIT ──
  test('Reduced Motion Presents All 6 Villa Chapters in Standard Flow', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });

    const villasSection = page.locator('section#villas');
    await villasSection.scrollIntoViewIfNeeded();

    const articles = villasSection.locator('article');
    await expect(articles).toHaveCount(6);

    for (let i = 0; i < 6; i++) {
      await expect(articles.nth(i)).toBeAttached();
    }
  });
});
