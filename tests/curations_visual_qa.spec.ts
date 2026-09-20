import { test } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

const OUTPUT_DIR = path.join(process.cwd(), 'test-results', 'curations-visual-qa');
const ARTIFACT_DIR = 'C:/Users/Nameless King/.gemini/antigravity-ide/brain/dae3c3ee-3ed8-41e2-bf3a-b2b162b8edd9';

test.describe('Maya Garh Phase 5B — Dedicated Visual QA Suite', () => {
  test.beforeAll(() => {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
  });

  const copyToArtifacts = (filename: string) => {
    const src = path.join(OUTPUT_DIR, filename);
    const dest = path.join(ARTIFACT_DIR, filename);
    if (fs.existsSync(src)) {
      try {
        fs.copyFileSync(src, dest);
      } catch (err) {
        console.log('Error copying to artifacts:', err);
      }
    }
  };

  test('Capture Desktop 1440x900 Curations Editorial Experience', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const curations = page.locator('section#curations');
    await curations.waitFor({ state: 'visible' });

    // 1. Transition: Villas ending into Curations intro
    await page.evaluate(() => {
      const el = document.getElementById('curations');
      if (el) {
        // Scroll so top of Curations is near middle of viewport showing the threshold transition
        window.scrollTo(0, el.offsetTop - 300);
      }
    });
    await page.waitForTimeout(800);
    const shot01 = '01-villas-curations-transition.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot01) });
    copyToArtifacts(shot01);

    // 2. Curations Intro (Beyond the Villa)
    await page.evaluate(() => {
      const el = document.getElementById('curations');
      if (el) {
        window.scrollTo(0, el.offsetTop);
      }
    });
    await page.waitForTimeout(800);
    const shot02 = '02-curations-intro.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot02) });
    copyToArtifacts(shot02);

    // 3. Chapter 01: Pushkar Desert Dune Sundowners
    const chapter1 = page.locator('#curation-desert-sundowner');
    await chapter1.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const shot03 = '03-curation-01.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot03) });
    copyToArtifacts(shot03);

    // 4. Chapter 02: Royal Veranda & Courtyard Dining
    const chapter2 = page.locator('#curation-veranda-dining');
    await chapter2.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const shot04 = '04-curation-02.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot04) });
    copyToArtifacts(shot04);

    // 5. Chapter 03: The Royal Infinity Pool & Sun Terrace
    const chapter3 = page.locator('#curation-royal-infinity-pool');
    await chapter3.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const shot05 = '03-curation-03.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, '05-curation-03.png') });
    copyToArtifacts('05-curation-03.png');

    // 6. Chapter 04: Courtyard Oasis & Heritage Grounds
    const chapter4 = page.locator('#curation-courtyard-sanctuary');
    await chapter4.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const shot06 = '06-curation-04.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot06) });
    copyToArtifacts(shot06);
  });

  test('Capture Desktop 1280x800 Curations Experience', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    const chapter1 = page.locator('#curation-desert-sundowner');
    await chapter1.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const shot = 'desktop-1280x800-curations.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot) });
    copyToArtifacts(shot);
  });

  test('Capture Tablet 1024x768 Landscape Curations Experience', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    const chapter2 = page.locator('#curation-veranda-dining');
    await chapter2.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const shot = 'tablet-1024x768-curations.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot) });
    copyToArtifacts(shot);
  });

  test('Capture Tablet 768x1024 Portrait Curations Experience', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    const chapter1 = page.locator('#curation-desert-sundowner');
    await chapter1.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const shot = 'tablet-768x1024-curations.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot) });
    copyToArtifacts(shot);
  });

  test('Capture Mobile 430x932 Curations Experience', async ({ page }) => {
    await page.setViewportSize({ width: 430, height: 932 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    const chapter1 = page.locator('#curation-desert-sundowner');
    await chapter1.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const shot = 'mobile-430x932-curations.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot) });
    copyToArtifacts(shot);
  });

  test('Capture Mobile 390x844 Curations Experience', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    const chapter3 = page.locator('#curation-royal-infinity-pool');
    await chapter3.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const shot = 'mobile-390x844-curations.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot) });
    copyToArtifacts(shot);
  });

  test('Capture Mobile 375x812 Curations Chapter Flow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    // Intro
    const curations = page.locator('section#curations');
    await curations.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const shotIntro = 'mobile-375x812-intro.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shotIntro) });
    copyToArtifacts(shotIntro);

    // Chapter 01
    const chapter1 = page.locator('#curation-desert-sundowner');
    await chapter1.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const shot01 = 'mobile-375x812-curation-01.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot01) });
    copyToArtifacts(shot01);

    // Chapter 02
    const chapter2 = page.locator('#curation-veranda-dining');
    await chapter2.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const shot02 = 'mobile-375x812-curation-02.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot02) });
    copyToArtifacts(shot02);

    // Chapter 03
    const chapter3 = page.locator('#curation-royal-infinity-pool');
    await chapter3.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const shot03 = 'mobile-375x812-curation-03.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot03) });
    copyToArtifacts(shot03);

    // Chapter 04
    const chapter4 = page.locator('#curation-courtyard-sanctuary');
    await chapter4.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const shot04 = 'mobile-375x812-curation-04.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot04) });
    copyToArtifacts(shot04);
  });

  test('Capture Reduced Motion Mode 1440x900', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    const chapter1 = page.locator('#curation-desert-sundowner');
    await chapter1.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const shot = 'reduced-motion-1440x900-curations.png';
    await page.screenshot({ path: path.join(OUTPUT_DIR, shot) });
    copyToArtifacts(shot);
  });
});
