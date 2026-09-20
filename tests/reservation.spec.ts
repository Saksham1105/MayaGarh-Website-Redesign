import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 10B — Reservation & Concierge Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Monitor console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        expect(msg.text()).not.toContain('Uncaught');
      }
    });
  });

  test('Reservation section structure, semantic hierarchy and verified contact channels on 1440px Desktop', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await expect(section).toBeVisible();

    // Scroll into view
    await section.scrollIntoViewIfNeeded();

    // Accessible section labeling
    await expect(section).toHaveAttribute(
      'aria-label',
      'Reservation and Bespoke Concierge'
    );

    // Exactly one H2 inside reservation section
    const h2 = section.locator('h2');
    await expect(h2).toHaveCount(1);
    await expect(h2).toHaveText('Your Stay, Considered Personally');

    // Section Eyebrow
    await expect(section.getByText('PRIVATE CONCIERGE', { exact: true })).toBeVisible();

    // Primary WhatsApp Channel
    const waLink = section.locator('a[aria-label*="WhatsApp Maya Luxury Concierge"]');
    await expect(waLink).toBeVisible();
    await expect(waLink).toHaveAttribute('href', /wa\.me\/919829071817/);
    await expect(section.locator('p[class*="channelPhoneDisplay"]')).toHaveText('+91 98290 71817');
    await expect(section.locator('text=WHATSAPP THE CONCIERGE')).toBeVisible();

    // Telephone Lines
    const resPhone = section.locator('a[href="tel:+919829071817"]');
    await expect(resPhone).toBeVisible();
    const directPhone = section.locator('a[href="tel:+917297029153"]');
    await expect(directPhone).toBeVisible();

    // Email Addresses
    const resEmail = section.locator('a[href*="mailto:reservation@mayaluxury.in"]');
    await expect(resEmail).toBeVisible();
    const helloEmail = section.locator('a[href*="mailto:hello@mayaluxury.in"]');
    await expect(helloEmail).toBeVisible();

    // Form inputs exist
    await expect(section.locator('#res-full-name')).toBeVisible();
    await expect(section.locator('#res-email')).toBeVisible();
    await expect(section.locator('#res-phone')).toBeVisible();
    await expect(section.locator('#res-arrival')).toBeVisible();
    await expect(section.locator('#res-departure')).toBeVisible();
    await expect(section.locator('#res-villa')).toBeVisible();
    await expect(section.locator('#res-notes')).toBeVisible();

    // Verify all six verified signature villas appear in the select dropdown
    const villaSelect = section.locator('#res-villa');
    const options = await villaSelect.locator('option').allTextContents();
    expect(options).toContain('Maha Maya');
    expect(options).toContain('Amanjena');
    expect(options).toContain('Malak');
    expect(options).toContain('Adiva');
    expect(options).toContain('Ameera');
    expect(options).toContain('Mayan');
    expect(options).toContain('No Preference');
    expect(options.length).toBe(7);

    // Negative assertions: Zero fake checkout, room count tickers, or payment fields
    await expect(section.locator('input[name*="card"], input[id*="card"]')).toHaveCount(0);
    await expect(section.locator('text=Book Now')).toHaveCount(0);
    await expect(section.locator('text=Only 1 room left')).toHaveCount(0);
    await expect(section.locator('text=Instant Confirmation')).toHaveCount(0);
    await expect(section.locator('text=₹')).toHaveCount(0);

    // Check zero horizontal overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test('Form validation and client-side enquiry composition flow', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await section.scrollIntoViewIfNeeded();

    const submitBtn = section.locator('button[type="submit"]');

    // 1. Submit empty form to verify validation errors
    await submitBtn.click();

    await expect(section.locator('#res-name-error')).toBeVisible();
    await expect(section.locator('#res-email-error')).toBeVisible();
    await expect(section.locator('#res-phone-error')).toBeVisible();

    // 2. Fill in valid data
    await section.locator('#res-full-name').fill('Maharani Gayatri');
    await section.locator('#res-email').fill('gayatri@example.com');
    await section.locator('#res-phone').fill('+91 98290 12345');
    await section.locator('#res-villa').selectOption({ label: 'Maha Maya' });
    await section.locator('#res-notes').fill('Arriving at twilight, sunset tea request.');

    // 3. Submit valid form
    await submitBtn.click();

    // 4. Verify confirmation/composition state appears (ReservationSuccess)
    const successRegion = section.locator('div[aria-label="Enquiry Summary"]');
    await expect(successRegion).toBeVisible();
    await expect(section.locator('text=ENQUIRY COMPILED')).toBeVisible();
    await expect(section.locator('text=Your Concierge Request is Ready')).toBeVisible();
    await expect(section.locator('text=Maharani Gayatri')).toBeVisible();
    await expect(section.locator('text=Maha Maya')).toBeVisible();

    // Direct dispatch buttons exist with proper URLs
    const dispatchWa = section.locator('a[aria-label*="WhatsApp Concierge"]');
    await expect(dispatchWa).toBeVisible();
    await expect(dispatchWa).toHaveAttribute('href', /wa\.me\/919829071817/);
    await expect(dispatchWa).toHaveAttribute('href', /Maharani%20Gayatri/);

    const dispatchEmail = section.locator('a[aria-label*="email client"]');
    await expect(dispatchEmail).toBeVisible();
    await expect(dispatchEmail).toHaveAttribute('href', /mailto:reservation@mayaluxury\.in/);

    // Edit button allows returning to form
    const editBtn = section.locator('button:has-text("Modify Enquiry Details")');
    await expect(editBtn).toBeVisible();
    await editBtn.click();

    // Form is visible again with preserved values
    await expect(section.locator('#res-full-name')).toHaveValue('Maharani Gayatri');
  });

  test('Contextual intent routing preselects wedding and villa preferences', async ({
    page,
  }) => {
    // 1. Visit with wedding intent hash
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/#reservation?intent=wedding', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await section.scrollIntoViewIfNeeded();

    // Wedding enquiry type button is selected
    const weddingRadio = section.locator('button[role="radio"][aria-checked="true"]');
    await expect(weddingRadio).toContainText('Destination Wedding & Buyout');

    // 2. Visit with villa intent hash
    await page.goto('/#reservation?intent=stay&villa=amanjena', { waitUntil: 'networkidle' });
    await section.scrollIntoViewIfNeeded();

    const villaSelect = section.locator('#res-villa');
    await expect(villaSelect).toHaveValue('amanjena');

    const stayRadio = section.locator('button[role="radio"][aria-checked="true"]');
    await expect(stayRadio).toContainText('Villa Stay');
  });

  test('Keyboard navigation and focus visibility on reservation form', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await section.scrollIntoViewIfNeeded();

    const fullNameInput = section.locator('#res-full-name');
    await fullNameInput.focus();
    await expect(fullNameInput).toBeFocused();

    await page.keyboard.press('Tab');
    const emailInput = section.locator('#res-email');
    await expect(emailInput).toBeFocused();

    await page.keyboard.press('Tab');
    const phoneInput = section.locator('#res-phone');
    await expect(phoneInput).toBeFocused();
  });

  test('Reduced motion honors user preference in Reservation section', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await section.scrollIntoViewIfNeeded();

    const h2 = section.locator('h2');
    await expect(h2).toBeVisible();

    const form = section.locator('form');
    await expect(form).toBeVisible();

    const opacity = await form.evaluate((el) => window.getComputedStyle(el).opacity);
    expect(Number(opacity)).toBeGreaterThan(0.5);
  });
});
