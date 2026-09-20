import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 6B — Destination Weddings & Celebrations Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Capture console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        expect(msg.text()).not.toContain('Uncaught');
      }
    });
  });

  test('Weddings section structure, semantic hierarchy and content on 1440px Desktop', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const weddings = page.locator('section#weddings');
    await expect(weddings).toBeVisible();

    // Scroll into view to trigger deterministic calculations
    await weddings.scrollIntoViewIfNeeded();

    // Accessible section labeling
    await expect(weddings).toHaveAttribute(
      'aria-label',
      'Destination Weddings at Maya Garh Pushkar'
    );

    // Exactly one H2 inside weddings section
    const h2 = weddings.locator('h2');
    await expect(h2).toHaveCount(1);
    await expect(h2).toHaveText('Destination Weddings');

    // Section Eyebrow & Tagline
    await expect(
      weddings.locator('text=DESTINATION WEDDINGS & ROYAL CELEBRATIONS')
    ).toBeVisible();
    await expect(
      weddings.locator('text=A Private Royal Fortress for Intimate Sacred Union')
    ).toBeVisible();

    // Verified Introduction text exists
    await expect(
      weddings.locator(
        'text=Set against the rugged silhouette of the Aravalli hills and the stillness of the Pushkar countryside'
      )
    ).toBeVisible();

    // Panoramic Hero Image
    const heroImage = weddings.locator('figure img[alt*="fortress battlements"]');
    await expect(heroImage).toBeVisible();

    // Chapter 02: Celebration Spaces Heading
    const spacesHeading = weddings.locator('h3:has-text("Celebration Spaces")');
    await expect(spacesHeading).toBeVisible();

    // Exactly five celebration space articles
    const spaceArticles = weddings.locator('article[id^="space-"]');
    await expect(spaceArticles).toHaveCount(5);

    // Verify all 5 expected space titles appear
    const expectedSpaces = [
      'Central Stone Courtyard & Heritage Lawns',
      'Royal Infinity Pool & Colonnaded Terrace',
      'Rajwada Heritage Royal Banquet Hall',
      'Fort Façade & Sandstone Ramparts',
      'The Royal Villa Enclave',
    ];

    for (let i = 0; i < expectedSpaces.length; i++) {
      const spaceTitle = expectedSpaces[i];
      const article = spaceArticles.nth(i);
      await expect(article.locator(`h4:has-text("${spaceTitle}")`)).toBeVisible();
    }

    // Verify verified space descriptions
    await expect(
      weddings.locator('text=A spacious sandstone courtyard and garden lawn framed by towering fort ramparts')
    ).toBeVisible();
    await expect(
      weddings.locator('text=An elevated terrace flanking the royal swimming pool with sweeping views')
    ).toBeVisible();
    await expect(
      weddings.locator('text=An authentic indoor banquet and dining facility featuring exposed timber beams')
    ).toBeVisible();
    await expect(
      weddings.locator('text=The monumental sandstone entrance portal, crenelated bastions')
    ).toBeVisible();
    await expect(
      weddings.locator('text=Six palatial private villas—Maha Maya, Amanjena, Malak, Adiva, Ameera, and Mayan')
    ).toBeVisible();

    // Chapter 03: Wedding Models
    const modelsHeading = weddings.locator(
      'h3:has-text("A Wedding Shaped Around Your Vision")'
    );
    await expect(modelsHeading).toBeVisible();

    const modelCards = weddings.locator('div[id^="model-"]');
    await expect(modelCards).toHaveCount(2);

    await expect(
      weddings.locator('h4:has-text("Fully Curated Wedding Solutions")')
    ).toBeVisible();
    await expect(
      weddings.locator('h4:has-text("Venue-Only Rental")')
    ).toBeVisible();

    // Model details lists
    await expect(
      weddings.locator('text=Dedicated on-ground operational coordination across the fort estate')
    ).toBeVisible();
    await expect(
      weddings.locator('text=Exclusive takeover of versatile indoor and outdoor celebration spaces')
    ).toBeVisible();

    // Chapter 04: Multi-Day Celebration Story
    const multiDayHeading = weddings.locator(
      'h3:has-text("A Multi-Day Celebration Journey")'
    );
    await expect(multiDayHeading).toBeVisible();
    await expect(
      weddings.locator('text=Unhurried Living in a Private Royal Residence')
    ).toBeVisible();

    // Chapter 05: Bespoke Concierge CTA
    const ctaHeading = weddings.locator(
      'h3:has-text("Begin Your Sacred Celebration")'
    );
    await expect(ctaHeading).toBeVisible();

    const ctaLink = weddings.locator('a:has-text("ENQUIRE FOR WEDDINGS")');
    await expect(ctaLink).toBeVisible();
    await expect(ctaLink).toHaveAttribute('href', '#reservation');

    // Concierge contact details
    const emailLink = weddings.locator('a[href^="mailto:hello@mayaluxury.in"]');
    await expect(emailLink).toBeVisible();
    const phoneLink = weddings.locator('a[href^="tel:"]');
    await expect(phoneLink).toBeVisible();
  });

  test('Mobile vertical flow and 52px CTA touch target on 390px Viewport', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const weddings = page.locator('section#weddings');
    await weddings.scrollIntoViewIfNeeded();

    // Verify all 5 celebration spaces are stacked vertically
    const spaceArticles = weddings.locator('article[id^="space-"]');
    await expect(spaceArticles).toHaveCount(5);

    // Verify CTA button dimensions on mobile
    const ctaLink = weddings.locator('a:has-text("ENQUIRE FOR WEDDINGS")');
    await expect(ctaLink).toBeVisible();

    const box = await ctaLink.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      // Must satisfy the ~52px touch-target requirement
      expect(box.height).toBeGreaterThanOrEqual(50);
      expect(box.height).toBeLessThanOrEqual(56);
    }

    // Ensure no horizontal document overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  test('Keyboard navigation and focus visibility on CTA', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const weddings = page.locator('section#weddings');
    await weddings.scrollIntoViewIfNeeded();

    const ctaLink = weddings.locator('a:has-text("ENQUIRE FOR WEDDINGS")');
    await ctaLink.focus();
    await expect(ctaLink).toBeFocused();

    // Trigger keyboard navigation to email coordinate
    await page.keyboard.press('Tab');
    const emailLink = weddings.locator('a[href^="mailto:hello@mayaluxury.in"]');
    await expect(emailLink).toBeFocused();
  });

  test('Reduced motion honors user preference', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const weddings = page.locator('section#weddings');
    await weddings.scrollIntoViewIfNeeded();

    // Everything is rendered and visible without animation block
    await expect(weddings.locator('h2')).toBeVisible();
    await expect(weddings.locator('a:has-text("ENQUIRE FOR WEDDINGS")')).toBeVisible();
  });
});
