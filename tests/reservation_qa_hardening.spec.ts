import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.describe('Maya Garh Phase 10C — Reservation QA & Conversion Hardening Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Fail test if any unhandled page errors or console errors occur
    page.on('pageerror', (err) => {
      expect(err).toBeNull();
    });
  });

  /* ------------------------------------------------------------------
   * 1. CRITICAL CONTACT CHANNELS & ANTI-OTA / ANTI-FAKE AUDIT
   * ------------------------------------------------------------------ */
  test('1. Critical contact verification and zero fake OTA/pricing widgets', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await section.scrollIntoViewIfNeeded();

    // WhatsApp Concierge Button
    const waLink = section.locator('a[href*="wa.me/919829071817"]');
    await expect(waLink).toBeVisible();
    await expect(waLink).toHaveAttribute('href', /https:\/\/wa\.me\/919829071817/);

    // Primary Reservation Phone
    const primaryPhone = section.locator('a[href="tel:+919829071817"]');
    await expect(primaryPhone).toBeVisible();

    // Secondary Direct Phone
    const directPhone = section.locator('a[href="tel:+917297029153"]');
    await expect(directPhone).toBeVisible();

    // Reservation & Concierge Emails
    const resEmail = section.locator('a[href^="mailto:reservation@mayaluxury.in"]');
    await expect(resEmail).toBeVisible();
    const helloEmail = section.locator('a[href^="mailto:hello@mayaluxury.in"]');
    await expect(helloEmail).toBeVisible();

    // Negative assertions: Zero fake OTA booking links, zero room counters, zero credit card forms
    await expect(section.locator('a[href*="booking.com"]')).toHaveCount(0);
    await expect(section.locator('a[href*="agoda.com"]')).toHaveCount(0);
    await expect(section.locator('a[href*="makemytrip.com"]')).toHaveCount(0);
    await expect(section.locator('text=Only 1 room left')).toHaveCount(0);
    await expect(section.locator('text=Instant Confirmation')).toHaveCount(0);
    await expect(section.locator('input[autocomplete*="cc-"], input[name*="card"]')).toHaveCount(0);
  });

  /* ------------------------------------------------------------------
   * 2. TEST EVERY ENTRY POINT INTO RESERVATIONS
   * ------------------------------------------------------------------ */
  test('2. All major page entry points navigate to reservation or verified concierge route', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    // Header CTA -> Verified WhatsApp route
    const headerCta = page.locator('header a:has-text("Enquire for Rates")');
    await expect(headerCta).toHaveAttribute('href', 'https://wa.me/919829071817');

    // Hero CTA -> Verified WhatsApp route
    const heroCta = page.locator('section[class*="heroSection"] a:has-text("Enquire for Rates")').first();
    await expect(heroCta).toHaveAttribute('href', 'https://wa.me/919829071817');

    // Weddings CTA -> #reservation
    const weddingsCta = page.locator('section#weddings a[href="#reservation"]');
    await expect(weddingsCta).toBeVisible();

    // Curations CTA -> #reservation
    const curationsCta = page.locator('section#curations a[href="#reservation"]').first();
    await expect(curationsCta).toBeVisible();

    // Location CTA -> #reservation
    const locationCta = page.locator('section#location a[href="#reservation"]');
    await expect(locationCta).toBeVisible();
  });

  /* ------------------------------------------------------------------
   * 3. INTENT ROUTING FOR ALL 6 SIGNATURE VILLAS & WEDDINGS
   * ------------------------------------------------------------------ */
  test('3. Intent routing correctly selects all 6 signature villas and wedding buyout', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    const villas = [
      { slug: 'maha-maya', name: 'Maha Maya' },
      { slug: 'amanjena', name: 'Amanjena' },
      { slug: 'malak', name: 'Malak' },
      { slug: 'adiva', name: 'Adiva' },
      { slug: 'ameera', name: 'Ameera' },
      { slug: 'mayan', name: 'Mayan' },
    ];

    for (const villa of villas) {
      await page.goto(`/#reservation?intent=stay&villa=${villa.slug}`, {
        waitUntil: 'networkidle',
      });
      const section = page.locator('section#reservation');
      await section.scrollIntoViewIfNeeded();

      // Check villa preference is selected
      const select = section.locator('#res-villa');
      await expect(select).toHaveValue(villa.slug);

      // Check enquiry type is Villa Stay
      const activeType = section.locator('button[role="radio"][aria-checked="true"]');
      await expect(activeType).toContainText('Villa Stay');
    }

    // Wedding intent route
    await page.goto('/#reservation?intent=wedding', { waitUntil: 'networkidle' });
    const weddingRadio = page
      .locator('section#reservation')
      .locator('button[role="radio"][aria-checked="true"]');
    await expect(weddingRadio).toContainText('Destination Wedding & Buyout');

    // Standard reservation route (default without extra preselection)
    await page.goto('/#reservation', { waitUntil: 'networkidle' });
    const defaultRadio = page
      .locator('section#reservation')
      .locator('button[role="radio"][aria-checked="true"]');
    await expect(defaultRadio).toContainText('Villa Stay');
  });

  /* ------------------------------------------------------------------
   * 4. ENQUIRY MESSAGE QA & SECURITY INJECTION AUDIT
   * ------------------------------------------------------------------ */
  test('4. Special characters and script injection tests encode safely in WhatsApp and Email URLs', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await section.scrollIntoViewIfNeeded();

    // Fill form with special characters and script tags
    const testName = 'Aarav & Meera';
    const testNotes =
      'Looking for a quiet celebration — ideally around sunset. <script>alert("x")</script>';

    await section.locator('#res-full-name').fill(testName);
    await section.locator('#res-email').fill('aarav.meera@example.com');
    await section.locator('#res-phone').fill('+91 98290 99999');
    await section.locator('#res-villa').selectOption({ label: 'Malak' });
    await section.locator('#res-notes').fill(testNotes);

    // Submit form
    await section.locator('button[type="submit"]').click();

    // Verify summary renders without script execution or HTML injection
    const summaryCard = section.locator('div[aria-label="Enquiry Summary"]');
    await expect(summaryCard).toBeVisible();
    await expect(summaryCard.locator('text=Aarav & Meera')).toBeVisible();
    await expect(summaryCard.locator('text=Malak')).toBeVisible();

    // Check WhatsApp URL encoding: ampersand should be encoded as %26 and script tag as %3Cscript%3E
    const waLink = section.locator('a[aria-label*="WhatsApp Concierge"]');
    const waHref = await waLink.getAttribute('href');
    expect(waHref).toBeTruthy();
    expect(waHref).toContain('wa.me/919829071817');
    expect(waHref).toContain('Aarav%20%26%20Meera');
    expect(waHref).toContain('%3Cscript%3Ealert(%22x%22)%3C%2Fscript%3E');

    // Check Email URL encoding
    const emailLink = section.locator('a[aria-label*="email client"]');
    const emailHref = await emailLink.getAttribute('href');
    expect(emailHref).toBeTruthy();
    expect(emailHref).toContain('mailto:reservation@mayaluxury.in');
    expect(emailHref).toContain('Aarav%20%26%20Meera');
    expect(emailHref).toContain('%3Cscript%3Ealert(%22x%22)%3C%2Fscript%3E');
  });

  /* ------------------------------------------------------------------
   * 5. FORM VALIDATION & CORRECTION FLOW
   * ------------------------------------------------------------------ */
  test('5. Form validation displays accessible errors and clears upon field correction', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await section.scrollIntoViewIfNeeded();

    const submitBtn = section.locator('button[type="submit"]');

    // 1. Submit empty form
    await submitBtn.click();
    await expect(section.locator('#res-name-error')).toHaveText('Please enter your full name.');
    await expect(section.locator('#res-email-error')).toHaveText('Please provide a contact email address.');
    await expect(section.locator('#res-phone-error')).toHaveText(
      'Please provide a contact telephone or WhatsApp number.'
    );

    // 2. Test invalid email format
    await section.locator('#res-email').fill('notanemail');
    await submitBtn.click();
    await expect(section.locator('#res-email-error')).toHaveText('Please provide a valid email address.');

    // 3. Test invalid short phone
    await section.locator('#res-phone').fill('123');
    await submitBtn.click();
    await expect(section.locator('#res-phone-error')).toHaveText('Please provide a valid contact number.');

    // 4. Correct fields and submit
    await section.locator('#res-full-name').fill('Princess Devika');
    await section.locator('#res-email').fill('devika@royalheritage.in');
    await section.locator('#res-phone').fill('+91 98290 55555');

    await submitBtn.click();

    // Verify summary is rendered
    await expect(section.locator('div[aria-label="Enquiry Summary"]')).toBeVisible();

    // 5. Click Modify Enquiry Details to return to form
    const editBtn = section.locator('button:has-text("Modify Enquiry Details")');
    await editBtn.click();

    // Verify inputs preserved
    await expect(section.locator('#res-full-name')).toHaveValue('Princess Devika');
    await expect(section.locator('#res-email')).toHaveValue('devika@royalheritage.in');
    await expect(section.locator('#res-phone')).toHaveValue('+91 98290 55555');
  });

  /* ------------------------------------------------------------------
   * 6. NO FALSE SUCCESS NEGATIVE ASSERTIONS
   * ------------------------------------------------------------------ */
  test('6. Never claims false booking or reservation confirmation', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await section.scrollIntoViewIfNeeded();

    // Pre-submission check
    await expect(section.locator('text=Booking confirmed')).toHaveCount(0);
    await expect(section.locator('text=Reservation confirmed')).toHaveCount(0);
    await expect(section.locator('text=Your booking has been received')).toHaveCount(0);
    await expect(section.locator('text=Maya Luxury has received your enquiry')).toHaveCount(0);

    // Fill and submit
    await section.locator('#res-full-name').fill('Raja Man Singh');
    await section.locator('#res-email').fill('mansingh@example.com');
    await section.locator('#res-phone').fill('+91 98290 88888');
    await section.locator('button[type="submit"]').click();

    // Post-submission check on review state
    const summaryCard = section.locator('div[aria-label="Enquiry Summary"]');
    await expect(summaryCard).toBeVisible();

    const summaryText = await summaryCard.innerText();
    expect(summaryText).not.toContain('Booking confirmed');
    expect(summaryText).not.toContain('Reservation confirmed');
    expect(summaryText).not.toContain('Your booking has been received');
    expect(summaryText).not.toContain('Maya Luxury has received your enquiry');
  });

  /* ------------------------------------------------------------------
   * 7. SSR / INITIAL HTML INTEGRITY CHECK
   * ------------------------------------------------------------------ */
  test('7. Verified contact information and headings exist in initial SSR payload', async () => {
    const htmlPath = path.join(process.cwd(), '.next/server/app/index.html');
    expect(fs.existsSync(htmlPath)).toBe(true);

    const html = fs.readFileSync(htmlPath, 'utf8');

    // Required SSR content elements
    expect(html).toContain('Your Stay, Considered Personally');
    expect(html).toContain('+91 98290 71817');
    expect(html).toContain('+91 72970 29153');
    expect(html).toContain('reservation@mayaluxury.in');
    expect(html).toContain('hello@mayaluxury.in');
    expect(html).toContain('https://wa.me/919829071817');
    expect(html).toContain('res-full-name');
  });

  /* ------------------------------------------------------------------
   * 8. NETWORK FAILURE AND 404 AUDIT
   * ------------------------------------------------------------------ */
  test('8. Zero failed network requests or 404s during reservation interaction', async ({
    page,
  }) => {
    const failedUrls: string[] = [];

    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedUrls.push(`${response.status()} — ${response.url()}`);
      }
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#reservation');
    await section.scrollIntoViewIfNeeded();

    await section.locator('#res-full-name').fill('Karan Rathore');
    await section.locator('#res-email').fill('karan@example.com');
    await section.locator('#res-phone').fill('+91 98290 44444');
    await section.locator('button[type="submit"]').click();

    await page.waitForTimeout(500);

    expect(failedUrls).toEqual([]);
  });
});
