import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 7B — Location / Pushkar / Aravallis Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Capture console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        expect(msg.text()).not.toContain('Uncaught');
      }
    });
  });

  test('Location section structure, semantic hierarchy and content on 1440px Desktop', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const location = page.locator('section#location');
    await expect(location).toBeVisible();

    // Scroll into view
    await location.scrollIntoViewIfNeeded();

    // Accessible section labeling
    await expect(location).toHaveAttribute(
      'aria-label',
      'Maya Garh Location and Surroundings'
    );

    // Exactly one H2 inside location section
    const h2 = location.locator('h2');
    await expect(h2).toHaveCount(1);
    await expect(h2).toHaveText('Where the Aravallis Meet the Desert Stillness');

    // Section Eyebrow & Tagline
    await expect(location.locator('text=THE SETTING')).toBeVisible();
    await expect(
      location.locator('text=An Ancient Sacred Valley Framed by Primordial Mountains')
    ).toBeVisible();

    // Geographic Metadata
    await expect(
      location.locator('text=PUSHKAR · AJMER DISTRICT · RAJASTHAN')
    ).toBeVisible();

    // Verified Introduction text
    await expect(
      location.locator(
        'text=Set amidst the peaceful countryside of Bhagwanpura'
      )
    ).toBeVisible();

    // Hero Landscape Panorama
    const heroImage = location.locator('figure img[alt*="rural orchards and the Aravalli"]');
    await expect(heroImage).toBeVisible();

    // Chapter 02: Landscape Dialogue Heading
    const landscapeHeading = location.locator(
      'h3:has-text("An Oasis Between Mountain and Dune")'
    );
    await expect(landscapeHeading).toBeVisible();

    // Both landscape features
    const landscapeArticles = location.locator('article[id^="feature-"]');
    await expect(landscapeArticles).toHaveCount(2);

    await expect(
      location.locator('h4:has-text("The Ancient Aravalli Range & Nag Pahar")')
    ).toBeVisible();
    await expect(
      location.locator('h4:has-text("Pushkar Countryside & Farmland Seclusion")')
    ).toBeVisible();

    // Chapter 03: Sacred Horizons
    const horizonsHeading = location.locator('h3:has-text("Sacred Horizons")');
    await expect(horizonsHeading).toBeVisible();

    const destinations = location.locator('article[id^="destination-"]');
    await expect(destinations).toHaveCount(3);

    await expect(
      location.locator('h4:has-text("Pushkar Lake & The 52 Ghats")')
    ).toBeVisible();
    await expect(
      location.locator('h4:has-text("Jagatpita Brahma Temple")')
    ).toBeVisible();
    await expect(
      location.locator('h4:has-text("Pushkar Desert Dunes & Sundowners")')
    ).toBeVisible();

    // Verify absence of fake stock photos for lake and temple (typographic seals used)
    const lakeCard = location.locator('article#destination-pushkar-lake');
    await expect(lakeCard.locator('img')).toHaveCount(0);
    await expect(lakeCard.locator('text=52 Heritage Ghats')).toBeVisible();

    const templeCard = location.locator('article#destination-brahma-temple');
    await expect(templeCard.locator('img')).toHaveCount(0);
    await expect(templeCard.locator('text=14th-Century Heritage')).toBeVisible();

    // Verified Dune Sundowner photo is present
    const duneCard = location.locator('article#destination-desert-dunes');
    await expect(duneCard.locator('img')).toHaveCount(1);

    // Chapter 04: Access & Route Diagram
    const accessHeading = location.locator(
      'h3:has-text("Reaching the Royal Sanctuary")'
    );
    await expect(accessHeading).toBeVisible();

    // Desktop SVG route diagram exists and is visible
    const routeSvg = location.locator('svg[aria-label*="Editorial transit route"]');
    await expect(routeSvg).toBeVisible();

    // All 4 access points rendered
    const accessCards = location.locator('article[id^="access-"]');
    await expect(accessCards).toHaveCount(4);

    await expect(
      location.locator('#access-jaipur-airport').locator('text=~150 km')
    ).toBeVisible();
    await expect(
      location.locator('#access-kishangarh-airport').locator('text=~45 km')
    ).toBeVisible();
    await expect(
      location.locator('#access-ajmer-junction').locator('text=~15 km')
    ).toBeVisible();
    await expect(
      location.locator('#access-delhi-corridor').locator('text=~400 km')
    ).toBeVisible();

    // Chapter 05: Concierge & CTA
    const conciergeHeading = location.locator('h3:has-text("A Bespoke Welcome")');
    await expect(conciergeHeading).toBeVisible();

    const ctaLink = location.locator('a:has-text("PLAN YOUR ARRIVAL")');
    await expect(ctaLink).toBeVisible();
    await expect(ctaLink).toHaveAttribute('href', '#reservation');

    // Concierge contact details
    await expect(
      location.locator('a[href^="mailto:hello@mayaluxury.in"]')
    ).toBeVisible();
    await expect(location.locator('a[href^="tel:"]')).toBeVisible();
  });

  test('Mobile vertical flow, route pathway, and 52px CTA on 390px Viewport', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const location = page.locator('section#location');
    await location.scrollIntoViewIfNeeded();

    // Verify all 3 destinations stack cleanly
    const destinations = location.locator('article[id^="destination-"]');
    await expect(destinations).toHaveCount(3);

    // Mobile vertical route pathway is rendered
    const mobileRoute = location.locator('div[class*="mobileRouteFlow"]');
    await expect(mobileRoute).toBeVisible();

    // CTA touch target height satisfies ~52px
    const ctaLink = location.locator('a:has-text("PLAN YOUR ARRIVAL")');
    await expect(ctaLink).toBeVisible();

    const box = await ctaLink.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(50);
      expect(box.height).toBeLessThanOrEqual(56);
    }

    // Zero horizontal document overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  test('Keyboard navigation and focus visibility on Arrival CTA', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const location = page.locator('section#location');
    await location.scrollIntoViewIfNeeded();

    const ctaLink = location.locator('a:has-text("PLAN YOUR ARRIVAL")');
    await ctaLink.focus();
    await expect(ctaLink).toBeFocused();

    // Tab to next interactive element
    await page.keyboard.press('Tab');
    const emailLink = location.locator('a[href^="mailto:hello@mayaluxury.in"]');
    await expect(emailLink).toBeFocused();
  });

  test('Reduced motion honors user preference in Location section', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const location = page.locator('section#location');
    await location.scrollIntoViewIfNeeded();

    await expect(location.locator('h2')).toBeVisible();
    await expect(location.locator('a:has-text("PLAN YOUR ARRIVAL")')).toBeVisible();
  });
});
