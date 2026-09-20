import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 5B — Curations / Experiences Editorial Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Capture console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        // Fail if unhandled runtime errors occur
        expect(msg.text()).not.toContain('Uncaught');
      }
    });
  });

  test('Curations section structure, semantic hierarchy and content on 1440px Desktop', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const curations = page.locator('section#curations');
    await expect(curations).toBeVisible();

    // Accessible section labeling
    await expect(curations).toHaveAttribute(
      'aria-label',
      'Curated Experiences at Maya Garh'
    );

    // Exactly one H2 inside curations section
    const h2 = curations.locator('h2');
    await expect(h2).toHaveCount(1);
    await expect(h2).toHaveText('Beyond the Villa');

    // Section Eyebrow & Subtitle
    await expect(curations.locator('text=CURATIONS & EXPERIENCES')).toBeVisible();
    await expect(
      curations.locator(
        'text=A curated anthology of atmosphere, culinary art, and desert stillness at Maya Garh.'
      )
    ).toBeVisible();

    // Exactly four experience chapters (articles)
    const articles = curations.locator('article[id^="curation-"]');
    await expect(articles).toHaveCount(4);

    // Verify all 4 expected titles appear in H3s
    const expectedTitles = [
      'Pushkar Desert Dune Sundowners',
      'Royal Veranda & Courtyard Dining',
      'The Royal Infinity Pool & Sun Terrace',
      'Courtyard Oasis & Heritage Grounds',
    ];

    for (let i = 0; i < expectedTitles.length; i++) {
      const title = expectedTitles[i];
      const article = articles.nth(i);
      const h3 = article.locator('h3');
      await expect(h3).toHaveText(title);
    }

    // Verify verified descriptions exist in the DOM
    await expect(
      curations.locator('text=As dusk settles over the golden dunes of Pushkar')
    ).toBeVisible();
    await expect(
      curations.locator('text=Savor authentic Rajasthani hospitality and artisanal refreshment')
    ).toBeVisible();
    await expect(
      curations.locator('text=Perched along the fortress battlements, the royal infinity pool')
    ).toBeVisible();
    await expect(
      curations.locator('text=Wander through tranquil estate grounds paved with heritage stone')
    ).toBeVisible();

    // Verify all four primary images exist and have meaningful alt text
    const images = curations.locator('figure img');
    await expect(images).toHaveCount(4);

    const altTexts = [
      'Private desert dune canopy dining setup with floor cushions, lanterns, and burning torches at twilight in Pushkar',
      'Private stone veranda dining table with traditional brass tea service overlooking the pool and Aravalli hills',
      'Starlit royal infinity pool terrace with candlelit lanterns and draped stone colonnade at twilight',
      'Lush courtyard garden lawn with traditional copper surahi urns and shaded stone alcoves at Maya Garh',
    ];

    for (let i = 0; i < 4; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('alt', altTexts[i]);
    }

    // Verify CTA links exist and route to #reservation
    const ctas = curations.locator('a[href="#reservation"]');
    await expect(ctas).toHaveCount(4);
    for (let i = 0; i < 4; i++) {
      const cta = ctas.nth(i);
      await expect(cta).toContainText('ENQUIRE EXPERIENCE');
      await expect(cta).toHaveAttribute('aria-label', /Enquire experience:/);
    }

    // Zero horizontal page overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  test('Keyboard accessibility and focus behavior on CTA buttons', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    // Scroll to curations
    const curations = page.locator('section#curations');
    await curations.scrollIntoViewIfNeeded();

    const firstCta = curations.locator('a[href="#reservation"]').first();
    await firstCta.focus();

    // Verify element is focused
    const isFocused = await firstCta.evaluate((el) => el === document.activeElement);
    expect(isFocused).toBe(true);
  });

  test('Curations adapts cleanly on Mobile (375px) without horizontal overflow', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const curations = page.locator('section#curations');
    await curations.scrollIntoViewIfNeeded();
    await expect(curations).toBeVisible();

    const articles = curations.locator('article[id^="curation-"]');
    await expect(articles).toHaveCount(4);

    // Verify touch target size for CTA on mobile is at least 48px high (target ~52px)
    const firstCta = curations.locator('a[href="#reservation"]').first();
    const box = await firstCta.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(48);
    }

    // Verify zero horizontal page overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  test('Curations adapts cleanly on Tablet Viewports (768px and 1024px)', async ({ page }) => {
    for (const width of [768, 1024]) {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto('/', { waitUntil: 'networkidle' });

      const curations = page.locator('section#curations');
      await curations.scrollIntoViewIfNeeded();
      await expect(curations).toBeVisible();

      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasHorizontalOverflow).toBe(false);
    }
  });

  test('Reduced motion mode renders all content statically without delay', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const curations = page.locator('section#curations');
    await curations.scrollIntoViewIfNeeded();
    await expect(curations).toBeVisible();

    // Verify articles are immediately rendered and visible
    const articles = curations.locator('article[id^="curation-"]');
    await expect(articles).toHaveCount(4);

    for (let i = 0; i < 4; i++) {
      const article = articles.nth(i);
      await expect(article).toBeVisible();
    }
  });
});
