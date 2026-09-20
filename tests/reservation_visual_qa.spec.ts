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

test.describe('Maya Garh Phase 10B — Reservation Responsive Visual QA', () => {
  for (const vp of VIEWPORTS) {
    test(`Responsive check and visual capture on ${vp.name} (${vp.width}x${vp.height})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'networkidle' });

      const reservation = page.locator('section#reservation');
      await expect(reservation).toBeVisible();

      // Scroll into view to trigger ScrollTrigger animations
      await reservation.scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);

      // Verify no horizontal overflow across any viewport
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasHorizontalOverflow).toBe(false);

      // Verify H2 and Eyebrow
      await expect(reservation.locator('h2')).toHaveText(
        'Your Stay, Considered Personally'
      );
      await expect(reservation.getByText('PRIVATE CONCIERGE', { exact: true })).toBeVisible();

      // Verify WhatsApp button and form elements
      const waBtn = reservation.locator('a[aria-label*="WhatsApp Maya Luxury Concierge"]');
      await expect(waBtn).toBeVisible();
      const form = reservation.locator('form');
      await expect(form).toBeVisible();

      // Temporarily hide fixed header for clean section screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.visibility = 'hidden';
      });

      await reservation.screenshot({
        path: `test-results/reservation-${vp.name}.png`,
      });

      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.visibility = 'visible';
      });
    });
  }

  test('Visual capture of compiled enquiry summary state on Desktop 1440px', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const reservation = page.locator('section#reservation');
    await reservation.scrollIntoViewIfNeeded();

    await reservation.locator('#res-full-name').fill('Aarav & Meera');
    await reservation.locator('#res-email').fill('aarav.meera@example.com');
    await reservation.locator('#res-phone').fill('+91 98290 71817');
    await reservation.locator('#res-villa').selectOption({ label: 'Maha Maya' });
    await reservation
      .locator('#res-notes')
      .fill('Looking for a quiet celebration — ideally around sunset.');

    await reservation.locator('button[type="submit"]').click();

    const summary = reservation.locator('div[aria-label="Enquiry Summary"]');
    await expect(summary).toBeVisible();

    await page.evaluate(() => {
      const header = document.querySelector('header');
      if (header) header.style.visibility = 'hidden';
    });

    await reservation.screenshot({
      path: 'test-results/reservation-summary-desktop-1440.png',
    });
  });

  test('Visual capture of compiled enquiry summary state on Mobile 390px', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const reservation = page.locator('section#reservation');
    await reservation.scrollIntoViewIfNeeded();

    await reservation.locator('#res-full-name').fill('Aarav & Meera');
    await reservation.locator('#res-email').fill('aarav.meera@example.com');
    await reservation.locator('#res-phone').fill('+91 98290 71817');
    await reservation.locator('#res-villa').selectOption({ label: 'Maha Maya' });
    await reservation
      .locator('#res-notes')
      .fill('Looking for a quiet celebration — ideally around sunset.');

    await reservation.locator('button[type="submit"]').click();

    const summary = reservation.locator('div[aria-label="Enquiry Summary"]');
    await expect(summary).toBeVisible();

    await page.evaluate(() => {
      const header = document.querySelector('header');
      if (header) header.style.visibility = 'hidden';
    });

    await reservation.screenshot({
      path: 'test-results/reservation-summary-mobile-390.png',
    });
  });
});
