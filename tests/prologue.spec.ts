import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 3 — Prologue Section Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test('Prologue renders correctly on 1440px Desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    const prologue = page.locator('section#prologue');
    await expect(prologue).toBeVisible();

    // Validate H2 Heading
    const h2 = prologue.locator('h2');
    await expect(h2).toHaveText('The Maya Garh Sanctuary');

    // Validate verified quote
    const quote = prologue.locator('blockquote p');
    await expect(quote).toContainText('Indulge in the opulence of Maya Garh');

    // Validate body narrative
    const bodyText = prologue.locator('p').nth(1);
    await expect(bodyText).toContainText('Offering a peaceful paradise fit for royalty');

    // Validate primary courtyard image
    const primaryImg = prologue.locator('img').first();
    await expect(primaryImg).toBeVisible();
    const primaryAlt = await primaryImg.getAttribute('alt');
    expect(primaryAlt).toContain('Marble courtyard architecture');

    // Validate secondary detail image
    const detailImg = prologue.locator('img').nth(1);
    await expect(detailImg).toBeVisible();
    const detailAlt = await detailImg.getAttribute('alt');
    expect(detailAlt).toContain('Hand-carved');

    // Validate zero horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
  });

  test('Prologue renders cleanly on 375px Mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    const prologue = page.locator('section#prologue');
    await expect(prologue).toBeVisible();

    const h2 = prologue.locator('h2');
    await expect(h2).toBeVisible();

    // Check images adapt without horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375);
  });

  test('Hero to Prologue scroll link navigates to #prologue', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    const scrollBtn = page.locator('a[href="#prologue"]').first();
    await scrollBtn.click();
    await page.waitForTimeout(500);

    const prologue = page.locator('section#prologue');
    await expect(prologue).toBeInViewport();
  });
});
