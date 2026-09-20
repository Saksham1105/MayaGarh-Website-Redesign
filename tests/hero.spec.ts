import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 2 Hero Experience Suite', () => {
  test('Hero renders correctly on 1440px Desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    // Validate H1 title
    const h1 = page.locator('h1');
    await expect(h1).toHaveText('MAYA GARH');

    // Validate subtitle badge
    const subtitle = page.locator('#hero p', { hasText: 'PUSHKAR, RAJASTHAN' });
    await expect(subtitle).toBeVisible();

    // Validate CTA buttons
    const primaryCta = page.locator('div[class*="ctaGroup"] a', { hasText: 'Enquire for Rates' }).first();
    await expect(primaryCta).toBeVisible();
    await expect(primaryCta).toHaveAttribute('href', '#reservation?intent=stay');

    // Validate Desktop Navigation
    const nav = page.locator('nav[aria-label="Primary Sanctuary Navigation"]');
    await expect(nav).toBeVisible();
  });

  test('Hero renders and adapts correctly on 375px Mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Validate H1 title on mobile
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Desktop nav should be hidden on mobile
    const desktopNav = page.locator('nav[aria-label="Primary Sanctuary Navigation"]');
    await expect(desktopNav).toBeHidden();

    // Mobile menu trigger button should be visible
    const mobileMenuBtn = page.locator('button[aria-label="Open Menu"]');
    await expect(mobileMenuBtn).toBeVisible();

    // Click mobile menu trigger and verify drawer opens
    await mobileMenuBtn.click();
    const drawerLink = page.locator('a', { hasText: 'Sanctuary' }).last();
    await expect(drawerLink).toBeVisible();
  });
});
