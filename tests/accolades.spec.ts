import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 9B — Sanctuary Trust & Guest Chronicles Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Monitor console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        expect(msg.text()).not.toContain('Uncaught');
      }
    });
  });

  test('Accolades section structure, semantic hierarchy and verified content on 1440px Desktop', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#accolades');
    await expect(section).toBeVisible();

    // Scroll into view
    await section.scrollIntoViewIfNeeded();

    // Accessible section labeling
    await expect(section).toHaveAttribute(
      'aria-label',
      'Sanctuary Trust and Guest Recognition'
    );

    // Exactly one H2 inside accolades section
    const h2 = section.locator('h2');
    await expect(h2).toHaveCount(1);
    await expect(h2).toHaveText('Quiet Solitude, Attested by Guests');

    // Section Eyebrow
    await expect(section.locator('text=SANCTUARY VOICES & RECOGNITION')).toBeVisible();

    // Verified Editorial Monograph text
    await expect(
      section.locator('text=Concealed within the quiet rural folds of the Pushkar valley')
    ).toBeVisible();
    await expect(
      section.locator('text=seclusion is not merely an amenity—it is the guiding principle of living')
    ).toBeVisible();

    // Three factual rating blocks
    const agodaCol = section.locator('a[aria-label*="Agoda"]');
    await expect(agodaCol).toBeVisible();
    await expect(agodaCol.locator('text=4.8')).toBeVisible();
    await expect(agodaCol.locator('text=/ 5.0')).toBeVisible();
    await expect(agodaCol.locator('text=AGODA')).toBeVisible();
    await expect(agodaCol.locator('text=Accessed September 2026')).toBeVisible();

    const goibiboCol = section.locator('a[aria-label*="Goibibo"]');
    await expect(goibiboCol).toBeVisible();
    await expect(goibiboCol.locator('text=4.4')).toBeVisible();
    await expect(goibiboCol.locator('text=/ 5.0')).toBeVisible();
    await expect(goibiboCol.locator('text=GOIBIBO')).toBeVisible();
    await expect(goibiboCol.locator('text=14 reviews · Accessed September 2026')).toBeVisible();

    const mmtCol = section.locator('a[aria-label*="MakeMyTrip"]');
    await expect(mmtCol).toBeVisible();
    await expect(mmtCol.locator('text=4.2')).toBeVisible();
    await expect(mmtCol.locator('text=/ 5.0')).toBeVisible();
    await expect(mmtCol.locator('text=MAKEMYTRIP')).toBeVisible();
    await expect(mmtCol.locator('text=Accessed September 2026')).toBeVisible();

    // Verified Architectural Statements
    await expect(section.locator('text=THE SETTING')).toBeVisible();
    await expect(
      section.locator('text=Private pool villas set against the Aravalli hills and Nag Pahar')
    ).toBeVisible();

    await expect(section.locator('text=THE ARCHITECTURE')).toBeVisible();
    await expect(
      section.locator(
        'text=Concentric fortress design featuring stone jali screens, central courtyards, and handcrafted Rajasthani finishes'
      )
    ).toBeVisible();

    await expect(section.locator('text=THE HERITAGE')).toBeVisible();
    await expect(
      section.locator(
        'text=A boutique sanctuary within the Maya Luxury collection of desert and wilderness retreats in Rajasthan'
      )
    ).toBeVisible();

    // Approved visual asset
    const img = section.locator('figure img');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute(
      'alt',
      'Shaded stone courtyard alcove with antique teak doors and handcrafted masonry at Maya Garh'
    );
    await expect(section.locator('text=Monolithic stone courtyards & jali passages')).toBeVisible();

    // Strict Negative Assertions: Zero badges, star icons, commercial plaques, or unsupported claims
    await expect(section.locator('.star, [class*="star"], svg.star')).toHaveCount(0);
    await expect(section.locator('.badge, [class*="badge"]')).toHaveCount(0);
    await expect(section.locator('.trophy, [class*="trophy"]')).toHaveCount(0);
    await expect(section.locator('text=10 Palatial')).toHaveCount(0);
    await expect(section.locator('text=Topgallant')).toHaveCount(0);
    await expect(section.locator('text=World\'s Best')).toHaveCount(0);
    await expect(section.locator('text=Award-Winning')).toHaveCount(0);
    await expect(section.locator('text=5-Star Luxury')).toHaveCount(0);

    // Verify zero horizontal page overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test('Mobile vertical flow, responsive monograph, and touch target sizing on 390px Viewport', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#accolades');
    await expect(section).toBeVisible();
    await section.scrollIntoViewIfNeeded();

    // Mobile monograph is visible while desktop monograph is hidden
    const mobileMonograph = section.locator('p[class*="monographMobile"]');
    await expect(mobileMonograph).toBeVisible();

    // Rating columns have comfortable interaction targets (min 48px height)
    const ratingLinks = section.locator('a[class*="ratingColumn"]');
    const count = await ratingLinks.count();
    expect(count).toBe(3);

    for (let i = 0; i < count; i++) {
      const link = ratingLinks.nth(i);
      const box = await link.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(48);
      }
    }

    // Zero horizontal page overflow on mobile
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test('Keyboard navigation tabs through all rating links with visible focus', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#accolades');
    await section.scrollIntoViewIfNeeded();

    const firstRating = section.locator('a[aria-label*="Agoda"]');
    await firstRating.focus();
    await expect(firstRating).toBeFocused();

    await page.keyboard.press('Tab');
    const secondRating = section.locator('a[aria-label*="Goibibo"]');
    await expect(secondRating).toBeFocused();

    await page.keyboard.press('Tab');
    const thirdRating = section.locator('a[aria-label*="MakeMyTrip"]');
    await expect(thirdRating).toBeFocused();
  });

  test('Reduced motion honors user preference in Accolades section', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const section = page.locator('section#accolades');
    await section.scrollIntoViewIfNeeded();

    const h2 = section.locator('h2');
    await expect(h2).toBeVisible();

    const agodaCol = section.locator('a[aria-label*="Agoda"]');
    await expect(agodaCol).toBeVisible();

    const opacity = await agodaCol.evaluate((el) => window.getComputedStyle(el).opacity);
    expect(Number(opacity)).toBeGreaterThan(0.5);
  });
});
