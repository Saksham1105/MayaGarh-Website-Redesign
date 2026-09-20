'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPContext } from '@/animation/useGSAPContext';
import { LOCATION_DATA } from '@/data/location.data';
import { LocationHero } from './LocationHero';
import { LandscapeDialogue } from './LandscapeDialogue';
import { SacredHorizons } from './SacredHorizons';
import { ArrivalAccess } from './ArrivalAccess';
import styles from './LocationSection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const LocationSection: React.FC = () => {
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

          // 1. Hero Landscape Panorama reveal
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

          // 2. Landscape Dialogue rows reveal
          const landscapeArticles = section.querySelectorAll(
            `article[id^="feature-"]`
          );
          landscapeArticles.forEach((article) => {
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

          // 3. Sacred Horizons Cards stagger
          const horizonCards = section.querySelectorAll(
            `article[id^="destination-"]`
          );
          if (horizonCards.length > 0) {
            gsap.fromTo(
              horizonCards,
              { opacity: 0.5, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: `.${styles.horizonsGrid}`,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // 4. Access Diagram & Line Animation
          const routeContainer = section.querySelector(
            `.${styles.routeIllustrationContainer}`
          );
          if (routeContainer) {
            gsap.fromTo(
              routeContainer,
              { opacity: 0.5, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: routeContainer,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // 5. Access Cards stagger
          const accessCards = section.querySelectorAll(`.${styles.accessCard}`);
          if (accessCards.length > 0) {
            gsap.fromTo(
              accessCards,
              { opacity: 0.5, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: `.${styles.accessMatrixGrid}`,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // 6. Concierge Card reveal
          const conciergeCard = section.querySelector(
            `.${styles.conciergeCard}`
          );
          if (conciergeCard) {
            gsap.fromTo(
              conciergeCard,
              { opacity: 0.5, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: conciergeCard,
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
            `article[id^="feature-"], article[id^="destination-"], .${styles.accessCard}, .${styles.conciergeCard}`
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
      id="location"
      aria-label="Maya Garh Location and Surroundings"
      className={styles.locationSection}
    >
      <div className={styles.ambientBackdrop} aria-hidden="true" />

      {/* Chapter 01 — The Setting */}
      <LocationHero intro={LOCATION_DATA.intro} />

      {/* Chapter 02 — Landscape Dialogue */}
      <LandscapeDialogue
        heading={LOCATION_DATA.landscapeDialogue.heading}
        subtitle={LOCATION_DATA.landscapeDialogue.subtitle}
        features={LOCATION_DATA.landscapeDialogue.features}
      />

      {/* Chapter 03 — Sacred Horizons (Beyond the Estate) */}
      <SacredHorizons
        heading={LOCATION_DATA.sacredHorizons.heading}
        tagline={LOCATION_DATA.sacredHorizons.tagline}
        subtitle={LOCATION_DATA.sacredHorizons.subtitle}
        destinations={LOCATION_DATA.sacredHorizons.destinations}
      />

      {/* Chapter 04 & 05 — Journey, Access & Concierge Arrival */}
      <ArrivalAccess
        accessHeading={LOCATION_DATA.access.heading}
        accessTagline={LOCATION_DATA.access.tagline}
        accessSubtitle={LOCATION_DATA.access.subtitle}
        points={LOCATION_DATA.access.points}
        concierge={LOCATION_DATA.concierge}
      />
    </section>
  );
};
