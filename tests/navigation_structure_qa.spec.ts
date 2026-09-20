import { test, expect } from '@playwright/test';

test.describe('Phase 11B — Structural & Navigation Corrections QA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('01 — Header desktop navigation contains complete 7 items and correct anchors', async ({ page }) => {
    const desktopNav = page.locator('nav[aria-label="Primary Sanctuary Navigation"]');
    await expect(desktopNav).toBeVisible();

    const expectedNavLinks = [
      { text: 'Sanctuary', href: '#prologue' },
      { text: 'Villas', href: '#villas' },
      { text: 'Curations', href: '#curations' },
      { text: 'Weddings', href: '#weddings' },
      { text: 'Location', href: '#location' },
      { text: 'Gallery', href: '#gallery' },
      { text: 'Accolades', href: '#accolades' },
    ];

    const navLinks = desktopNav.locator('a');
    await expect(navLinks).toHaveCount(7);

    for (let i = 0; i < expectedNavLinks.length; i++) {
      const link = navLinks.nth(i);
      await expect(link).toHaveText(expectedNavLinks[i].text);
      await expect(link).toHaveAttribute('href', expectedNavLinks[i].href);
    }
  });

  test('02 — Header CTA links to #reservation', async ({ page }) => {
    const headerCta = page.locator('header a:has-text("Enquire for Rates")');
    await expect(headerCta).toBeVisible();
    await expect(headerCta).toHaveAttribute('href', '#reservation');
  });

  test('03 — Hero primary CTA links to #reservation?intent=stay without external target', async ({ page }) => {
    const heroCta = page.locator('div[class*="HeroContent_ctaGroup"] a:has-text("Enquire for Rates")');
    await expect(heroCta).toBeVisible();
    await expect(heroCta).toHaveAttribute('href', '#reservation?intent=stay');
    await expect(heroCta).not.toHaveAttribute('target', '_blank');
  });

  test('04 — Villa cards link to #reservation?intent=stay&villa=<slug>', async ({ page }) => {
    const firstVillaCta = page.locator('#villas article a[aria-label*="Opens reservation concierge"]').first();
    await expect(firstVillaCta).toBeVisible();
    const href = await firstVillaCta.getAttribute('href');
    expect(href).toMatch(/^#reservation\?intent=stay&villa=/);
  });

  test('05 — Weddings CTA links to #reservation?intent=wedding', async ({ page }) => {
    const weddingCta = page.locator('#weddings a:has-text("Enquire for Weddings")');
    await expect(weddingCta).toBeVisible();
    await expect(weddingCta).toHaveAttribute('href', '#reservation?intent=wedding');
  });

  test('06 — Mobile drawer menu operates with accessibility (Escape key, body scroll lock, zero inline styles)', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 390, height: 844 });

    const menuTrigger = page.locator('header button[aria-label*="Menu"]');
    await expect(menuTrigger).toBeVisible();

    // Trigger should have aria-expanded false initially
    await expect(menuTrigger).toHaveAttribute('aria-expanded', 'false');

    // Open menu
    await menuTrigger.click();
    await expect(menuTrigger).toHaveAttribute('aria-expanded', 'true');

    // Verify body scroll is locked
    const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflow).toBe('hidden');

    // Verify drawer links
    const drawerLinks = page.locator('div[class*="mobileDrawer"] a');
    await expect(drawerLinks).toHaveCount(8); // 7 sections + 1 CTA

    const expectedMobileHrefs = [
      '#prologue',
      '#villas',
      '#curations',
      '#weddings',
      '#location',
      '#gallery',
      '#accolades',
      '#reservation',
    ];

    for (let i = 0; i < expectedMobileHrefs.length; i++) {
      await expect(drawerLinks.nth(i)).toHaveAttribute('href', expectedMobileHrefs[i]);
    }

    // Verify no inline styles on mobile list items
    const inlineStyledItems = page.locator('div[class*="mobileDrawer"] li[style]');
    await expect(inlineStyledItems).toHaveCount(0);

    // Press Escape to close
    await page.keyboard.press('Escape');
    await expect(menuTrigger).toHaveAttribute('aria-expanded', 'false');

    // Body overflow unlocked
    const bodyOverflowAfter = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflowAfter).toBe('');
  });

  test('07 — Luxury Footer is rendered with verified details, directory, and accessible back to top', async ({ page }) => {
    const footer = page.locator('footer[aria-label="Sanctuary Colophon and Directory"]');
    await expect(footer).toBeVisible();

    // Brand column
    await expect(footer.getByText('MAYA GARH', { exact: true })).toBeVisible();
    await expect(footer.getByText('PUSHKAR', { exact: true })).toBeVisible();
    await expect(footer.getByText('A Maya Luxury Property', { exact: true })).toBeVisible();

    // Verified Phones
    const phonePrimary = footer.locator('a[href="tel:+919829071817"]');
    await expect(phonePrimary).toBeVisible();
    await expect(phonePrimary).toHaveText('+91 98290 71817');

    const phoneSecondary = footer.locator('a[href="tel:+917297029153"]');
    await expect(phoneSecondary).toBeVisible();
    await expect(phoneSecondary).toHaveText('+91 72970 29153');

    // Verified Emails
    const emailRes = footer.locator('a[href="mailto:reservation@mayaluxury.in"]');
    await expect(emailRes).toBeVisible();

    const emailHello = footer.locator('a[href="mailto:hello@mayaluxury.in"]');
    await expect(emailHello).toBeVisible();

    // Verified WhatsApp
    const whatsapp = footer.locator('a[href*="wa.me/919829071817"]');
    await expect(whatsapp).toBeVisible();

    // Verified Address
    await expect(footer.locator('text=Bhagwanpura, Pushkar, Rajasthan — 305001')).toBeVisible();

    // Copyright
    const currentYear = new Date().getFullYear();
    await expect(footer.locator(`text=© ${currentYear} Maya Luxury. All rights reserved.`)).toBeVisible();

    // Back to top button
    const backToTop = footer.locator('button[aria-label*="Scroll to top"]');
    await expect(backToTop).toBeVisible();

    // Verify it is a button and keyboard focusable
    await backToTop.focus();
    await expect(backToTop).toBeFocused();
  });

  test('08 — All 8 major section containers have scroll-margin-top defined', async ({ page }) => {
    const sectionIds = [
      'prologue',
      'villas',
      'curations',
      'weddings',
      'location',
      'gallery',
      'accolades',
      'reservation',
    ];

    for (const id of sectionIds) {
      const section = page.locator(`#${id}`);
      await expect(section).toBeAttached();

      const scrollMarginTop = await section.evaluate((el) => {
        return window.getComputedStyle(el).scrollMarginTop;
      });

      // Must have a non-zero scroll-margin-top (e.g. clamp evaluates to pixels > 40px)
      expect(parseFloat(scrollMarginTop)).toBeGreaterThan(40);
    }
  });
});
