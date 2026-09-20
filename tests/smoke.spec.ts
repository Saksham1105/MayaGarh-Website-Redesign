import { test, expect } from '@playwright/test';

test.describe('Maya Garh Technical Smoke Suite', () => {
  test('Application loads and renders baseline SEO HTML', async ({ page }) => {
    await page.goto('/');

    // Validate Document Title
    const title = await page.title();
    expect(title).toContain('Maya Garh Pushkar');

    // Validate H1 Heading
    const h1 = page.locator('h1').first();
    await expect(h1).toHaveText('MAYA GARH');

    // Validate Meta Description
    const metaDesc = await page.getAttribute('meta[name="description"]', 'content');
    expect(metaDesc).toBeTruthy();
    expect(metaDesc).toContain('Maya Garh Pushkar');

    // Validate Canonical Link
    const canonical = await page.getAttribute('link[rel="canonical"]', 'href');
    expect(canonical).toBe('https://mayaluxury.in/maya-garh/');

    // Validate JSON-LD Schema
    const jsonLd = page.locator('script[type="application/ld+json"]').first();
    const content = await jsonLd.textContent();
    expect(content).toBeTruthy();
    const parsed = JSON.parse(content!);
    expect(parsed['name']).toBe('Maya Garh Pushkar');
  });
});
