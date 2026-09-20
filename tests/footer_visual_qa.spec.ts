import { test, expect } from '@playwright/test';

test.describe('Phase 11B — Visual QA Captures', () => {
  test('Capture Desktop Header and Footer', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    // Capture header
    const header = page.locator('header[class*="Header_header"]').first();
    await header.screenshot({ path: 'test-results/phase11b-header-desktop.png' });

    // Capture footer
    const footer = page.locator('footer[aria-label="Sanctuary Colophon and Directory"]');
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await footer.screenshot({ path: 'test-results/phase11b-footer-desktop.png' });

    // Check no horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  test('Capture Mobile Header Drawer and Footer', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });

    // Open mobile drawer and capture
    const menuTrigger = page.locator('header button[aria-label*="Menu"]');
    await menuTrigger.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: 'test-results/phase11b-mobile-drawer.png' });

    // Close drawer
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // Scroll to footer and capture
    const footer = page.locator('footer[aria-label="Sanctuary Colophon and Directory"]');
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await footer.screenshot({ path: 'test-results/phase11b-footer-mobile.png' });

    // Check no horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });
});
