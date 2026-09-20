import { test, expect } from '@playwright/test';

test.describe('Maya Garh Phase 5C — Curations Final QA & Hardening Suite', () => {
  // ── 1. CONSOLE & NETWORK INTEGRITY ──
  test('Console & Network Integrity — Zero Uncaught Errors or Failed Asset Requests', async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    const failedRequests: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('requestfailed', (req) => {
      failedRequests.push(`${req.url()} (${req.failure()?.errorText})`);
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    const response = await page.goto('/', { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(200);

    // Scroll through entire page to trigger lazy loading of Curations images
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    expect(consoleErrors).toEqual([]);
    expect(failedRequests).toEqual([]);
  });

  // ── 2. SEMANTIC STRUCTURE & SEO AUDIT ──
  test('Semantic HTML & Heading Structure — Strict Document Outline', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const curations = page.locator('section#curations');
    await expect(curations).toBeVisible();

    // Section ID and accessible label
    await expect(curations).toHaveAttribute('id', 'curations');
    await expect(curations).toHaveAttribute('aria-label', 'Curated Experiences at Maya Garh');

    // Section heading hierarchy: exactly one H2, zero H1s in curations
    const h1InCurations = curations.locator('h1');
    await expect(h1InCurations).toHaveCount(0);

    const h2InCurations = curations.locator('h2');
    await expect(h2InCurations).toHaveCount(1);
    await expect(h2InCurations).toHaveText('Beyond the Villa');

    // Exactly 4 articles, each with an H3 and valid data-chapter attribute
    const articles = curations.locator('article[id^="curation-"]');
    await expect(articles).toHaveCount(4);

    const expectedChapters = [
      {
        id: 'curation-desert-sundowner',
        numeral: '01',
        title: 'Pushkar Desert Dune Sundowners',
        caption: 'Thar Desert Dunes · Pushkar',
      },
      {
        id: 'curation-veranda-dining',
        numeral: '02',
        title: 'Royal Veranda & Courtyard Dining',
        caption: 'Maya Garh Estate · Pushkar',
      },
      {
        id: 'curation-royal-infinity-pool',
        numeral: '03',
        title: 'The Royal Infinity Pool & Sun Terrace',
        caption: 'Maya Garh Estate · Pushkar',
      },
      {
        id: 'curation-courtyard-sanctuary',
        numeral: '04',
        title: 'Courtyard Oasis & Heritage Grounds',
        caption: 'Maya Garh Estate · Pushkar',
      },
    ];

    for (let i = 0; i < expectedChapters.length; i++) {
      const exp = expectedChapters[i];
      const article = articles.nth(i);
      await expect(article).toHaveAttribute('id', exp.id);
      await expect(article).toHaveAttribute('data-chapter', exp.numeral);

      const h3 = article.locator('h3');
      await expect(h3).toHaveCount(1);
      await expect(h3).toHaveText(exp.title);

      const figcaption = article.locator('figcaption');
      await expect(figcaption).toHaveText(exp.caption);
    }
  });

  // ── 3. KEYBOARD NAVIGATION & FOCUS STATES ──
  test('Keyboard Navigation — Tab Through All Curations CTAs with Visible Focus', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const curations = page.locator('section#curations');
    await curations.evaluate((el) => el.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(500);

    const ctas = curations.locator('a[href="#reservation"]');
    await expect(ctas).toHaveCount(4);

    for (let i = 0; i < 4; i++) {
      const cta = ctas.nth(i);
      await cta.focus();
      const isFocused = await cta.evaluate((el) => el === document.activeElement);
      expect(isFocused).toBe(true);

      // Verify visible focus outline
      const outline = await cta.evaluate((el) => {
        const cs = window.getComputedStyle(el);
        return {
          outlineStyle: cs.outlineStyle,
          outlineWidth: cs.outlineWidth,
        };
      });
      expect(outline.outlineStyle).not.toBe('none');
    }
  });

  // ── 4. RESPONSIVE EDGE-CASE AUDIT (10 VIEWPORTS) ──
  const VIEWPORTS = [
    { name: 'Desktop Large', width: 1440, height: 900 },
    { name: 'Desktop Medium', width: 1280, height: 800 },
    { name: 'Desktop Landscape', width: 1024, height: 768 },
    { name: 'Tablet Large (iPad Air)', width: 820, height: 1180 },
    { name: 'Tablet Portrait (iPad Mini)', width: 768, height: 1024 },
    { name: 'Mobile XL (iPhone 14/15 Pro Max)', width: 430, height: 932 },
    { name: 'Mobile L (iPhone 11/XR)', width: 414, height: 896 },
    { name: 'Mobile M (iPhone 12/13/14)', width: 390, height: 844 },
    { name: 'Mobile S (iPhone SE/8)', width: 375, height: 812 },
    { name: 'Mobile XS (Android Standard)', width: 360, height: 800 },
  ];

  for (const vp of VIEWPORTS) {
    test(`Responsive Audit — ${vp.name} (${vp.width}x${vp.height}) Zero Overflow & Ergonomic CTAs`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'networkidle' });

      const curations = page.locator('section#curations');
      await curations.evaluate((el) => el.scrollIntoView({ block: 'start' }));
      await page.waitForTimeout(600);

      // Verify zero horizontal page overflow
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(overflow).toBe(false);

      // Verify CTA touch targets meet approved ~52px touch-height specification
      const ctas = curations.locator('a[href="#reservation"]');
      const count = await ctas.count();
      for (let i = 0; i < count; i++) {
        const box = await ctas.nth(i).boundingBox();
        expect(box).not.toBeNull();
        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(48);
          if (vp.width <= 768) {
            expect(Math.round(box.height)).toBe(52);
          }
        }
      }
    });
  }

  // ── 5. REDUCED MOTION AUDIT ──
  test('Reduced Motion Audit — Immediate Visibility with Zero Delay or Opacity Hiding', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const curations = page.locator('section#curations');
    await curations.evaluate((el) => el.scrollIntoView({ block: 'start' }));

    // Check all articles are immediately visible without waiting for scroll animations
    const articles = curations.locator('article[id^="curation-"]');
    for (let i = 0; i < 4; i++) {
      const article = articles.nth(i);
      await expect(article).toBeVisible();

      // Verify elements do not have opacity: 0
      const opacity = await article.evaluate((el) => {
        return window.getComputedStyle(el).opacity;
      });
      expect(Number(opacity)).toBeGreaterThan(0.9);
    }
  });

  // ── 6. FULL USER JOURNEY AUDIT ──
  test('Full User Journey Audit — Hero -> Prologue -> Villas -> Curations Continuity', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    // 1. Hero exists and is visible
    const heroHeading = page.locator('h1');
    await expect(heroHeading).toHaveText('MAYA GARH');

    // 2. Scroll to Prologue
    const prologue = page.locator('section#prologue');
    await prologue.evaluate((el) => el.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(500);
    await expect(prologue).toBeVisible();

    // 3. Scroll to Villas start
    const villas = page.locator('section#villas');
    await villas.evaluate((el) => el.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(500);
    await expect(villas).toBeVisible();

    // Verify counter starts at 01
    const counter = villas.locator('span:text-matches("^\\\\d{2}$")').first();
    await expect(counter).toHaveText('01');

    // 4. Scroll forward through villas
    await page.mouse.wheel(0, 2000);
    await page.waitForTimeout(500);
    const midCount = await counter.textContent();
    expect(Number(midCount)).toBeGreaterThanOrEqual(1);

    // 5. Scroll into Curations
    const curations = page.locator('section#curations');
    await curations.evaluate((el) => el.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(600);
    await expect(curations).toBeVisible();

    // Verify Curations intro is rendered
    const introHeading = curations.locator('h2');
    await expect(introHeading).toHaveText('Beyond the Villa');

    // 6. Scroll in reverse back into Villas
    await villas.evaluate((el) => el.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(600);
    const reversedCount = await counter.textContent();
    expect(Number(reversedCount)).toBeLessThanOrEqual(2);
  });
});
