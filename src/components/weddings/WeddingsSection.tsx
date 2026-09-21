'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPContext } from '@/animation/useGSAPContext';
import { WEDDINGS_DATA } from '@/data/weddings.data';
import { WeddingHero } from './WeddingHero';
import { CelebrationSpaces } from './CelebrationSpaces';
import { WeddingModels } from './WeddingModels';
import { MultiDayStory } from './MultiDayStory';
import styles from './WeddingsSection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const WeddingsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAPContext(
    () => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet (> 768px)
      mm.add(
        '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
        () => {
          const section = sectionRef.current;
          if (!section) return;

          // 1. Hero Panorama subtle reveal
          const heroFigure = section.querySelector(`.${styles.heroMediaFigure}`);
          if (heroFigure) {
            gsap.fromTo(
              heroFigure,
              { opacity: 0.5, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: heroFigure,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // 2. Celebration Spaces reveals
          const spaceArticles = section.querySelectorAll(
            `article[id^="space-"]`
          );
          spaceArticles.forEach((article) => {
            gsap.fromTo(
              article,
              { opacity: 0.5, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: article,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          });

          // 3. Wedding Models stagger
          const modelCards = section.querySelectorAll(`.${styles.modelCard}`);
          if (modelCards.length > 0) {
            gsap.fromTo(
              modelCards,
              { opacity: 0.5, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: `.${styles.modelsGrid}`,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // 4. Multi-Day Highlights
          const multiDayContainer = section.querySelector(
            `.${styles.multiDayContainer}`
          );
          if (multiDayContainer) {
            gsap.fromTo(
              multiDayContainer,
              { opacity: 0.5, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: multiDayContainer,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // 5. CTA Card reveal
          const ctaCard = section.querySelector(`.${styles.ctaCard}`);
          if (ctaCard) {
            gsap.fromTo(
              ctaCard,
              { opacity: 0.5, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: ctaCard,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        }
      );

      // Mobile (<= 768px)
      mm.add(
        '(max-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          const section = sectionRef.current;
          if (!section) return;

          // Gentle single-trigger fades on mobile
          const cards = section.querySelectorAll(
            `article[id^="space-"], .${styles.modelCard}, .${styles.ctaCard}`
          );
          cards.forEach((card) => {
            gsap.fromTo(
              card,
              { opacity: 0.6, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                },
              }
            );
          });
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="weddings"
      aria-label="Destination Weddings at Maya Garh Pushkar"
      className={styles.weddingsSection}
    >
      <div className={styles.ambientBackdrop} aria-hidden="true" />

      {/* Chapter 01 — The Invitation */}
      <WeddingHero
        eyebrow={WEDDINGS_DATA.eyebrow}
        title={WEDDINGS_DATA.title}
        tagline={WEDDINGS_DATA.tagline}
        introduction={WEDDINGS_DATA.introduction}
        heroAsset={WEDDINGS_DATA.heroAsset}
      />

      {/* Chapter 02 — The Estate as a Canvas (Celebration Spaces) */}
      <CelebrationSpaces spaces={WEDDINGS_DATA.celebrationSpaces} />

      {/* Chapter 03 — Wedding Models */}
      <WeddingModels models={WEDDINGS_DATA.weddingModels} />

      {/* Chapter 04 — Multi-Day Story */}
      <MultiDayStory story={WEDDINGS_DATA.multiDayStory} />

      {/* Chapter 05 — Bespoke Concierge CTA */}
      <div className={styles.ctaChapter}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <span className={styles.eyebrow}>BESPOKE CONSULTATION</span>
            <h3 className={styles.ctaTitle}>Begin Your Sacred Celebration</h3>
            <p className={styles.ctaSupportingText}>
              {WEDDINGS_DATA.cta.supportingText}
            </p>

            <div className={styles.ctaButtonWrapper}>
              <a
                href={WEDDINGS_DATA.cta.target}
                className={styles.ctaLink}
                aria-label="Enquire for destination weddings at Maya Garh Pushkar"
              >
                <span>ENQUIRE FOR WEDDINGS</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </a>
            </div>

            <div className={styles.conciergeCoordinates}>
              <a
                href={`mailto:${WEDDINGS_DATA.cta.conciergeEmail}`}
                className={styles.contactCoordinate}
                aria-label={`Email Maya Luxury Concierge: ${WEDDINGS_DATA.cta.conciergeEmail}`}
              >
                <span className={styles.coordinateLabel}>Email:</span>
                <span>{WEDDINGS_DATA.cta.conciergeEmail}</span>
              </a>
              <a
                href={`tel:${WEDDINGS_DATA.cta.conciergePhone.replace(/\s+/g, '')}`}
                className={styles.contactCoordinate}
                aria-label={`Call Maya Luxury Concierge: ${WEDDINGS_DATA.cta.conciergePhone}`}
              >
                <span className={styles.coordinateLabel}>Concierge:</span>
                <span>{WEDDINGS_DATA.cta.conciergePhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
