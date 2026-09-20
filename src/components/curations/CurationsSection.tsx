'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPContext } from '@/animation/useGSAPContext';
import { CURATIONS_DATA } from '@/data/curations.data';
import { CurationChapter, CurationLayoutVariant } from './CurationChapter';
import styles from './CurationsSection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LAYOUT_VARIANTS: CurationLayoutVariant[] = [
  'sundownerRight',
  'diningLeft',
  'poolPanoramic',
  'courtyardStaggered',
];

export const CurationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const thresholdRef = useRef<HTMLDivElement>(null);

  useGSAPContext(
    () => {
      const mm = gsap.matchMedia();

      // Desktop & Landscape Tablet (> 768px)
      mm.add(
        '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
        () => {
          const section = sectionRef.current;
          const threshold = thresholdRef.current;
          if (!section) return;

          // 1. Transitional Threshold Entrance
          if (threshold) {
            const heading = threshold.querySelector(`.${styles.introHeadline}`);
            const subtitle = threshold.querySelector(`.${styles.introSubtitle}`);
            const eyebrow = threshold.querySelector(`.${styles.introEyebrow}`);

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: threshold,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            });

            if (eyebrow) {
              tl.fromTo(eyebrow, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 });
            }
            if (heading) {
              tl.fromTo(heading, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
            }
            if (subtitle) {
              tl.fromTo(subtitle, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');
            }
          }

          // 2. Individual Chapter Reveals
          const articles = gsap.utils.toArray<HTMLElement>(
            section.querySelectorAll(`.${styles.chapterArticle}`)
          );

          articles.forEach((article) => {
            const media = article.querySelector('[data-animate="media"]');
            const narrative = article.querySelector('[data-animate="narrative"]');
            const image = article.querySelector('[data-animate="image"]');

            // Subtle mask & scale reveal on media frame
            if (media) {
              gsap.fromTo(
                media,
                {
                  opacity: 0.4,
                  clipPath: 'inset(6% 0 0 0)',
                },
                {
                  opacity: 1,
                  clipPath: 'inset(0% 0 0 0)',
                  duration: 1.1,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: article,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                  },
                }
              );
            }

            // Subtle vertical parallax depth on the inner image
            if (image) {
              gsap.fromTo(
                image,
                { yPercent: -3 },
                {
                  yPercent: 3,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: article,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.8,
                  },
                }
              );
            }

            // Staggered narrative reveal
            if (narrative) {
              gsap.fromTo(
                narrative,
                { opacity: 0.2, y: 24 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.9,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: article,
                    start: 'top 78%',
                    toggleActions: 'play none none none',
                  },
                }
              );
            }
          });
        }
      );

      // Mobile & Portrait Tablet (<= 768px)
      mm.add(
        '(max-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          const section = sectionRef.current;
          if (!section) return;

          const articles = gsap.utils.toArray<HTMLElement>(
            section.querySelectorAll(`.${styles.chapterArticle}`)
          );

          articles.forEach((article) => {
            const media = article.querySelector('[data-animate="media"]');
            const narrative = article.querySelector('[data-animate="narrative"]');

            if (media) {
              gsap.fromTo(
                media,
                { opacity: 0.6, scale: 0.98 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: article,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                  },
                }
              );
            }

            if (narrative) {
              gsap.fromTo(
                narrative,
                { opacity: 0.5, y: 16 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: article,
                    start: 'top 82%',
                    toggleActions: 'play none none none',
                  },
                }
              );
            }
          });
        }
      );

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="curations"
      aria-label="Curated Experiences at Maya Garh"
      className={styles.curationsSection}
    >
      {/* 1. Architectural Transitional Threshold (Villas Charcoal -> Curations Linen) */}
      <div ref={thresholdRef} className={styles.transitionThreshold}>
        <div className={styles.introContent}>
          <span className={styles.introEyebrow}>CURATIONS &amp; EXPERIENCES</span>
          <h2 className={styles.introHeadline}>Beyond the Villa</h2>
          <p className={styles.introSubtitle}>
            A curated anthology of atmosphere, culinary art, and desert stillness at Maya Garh.
          </p>
          <div className={styles.introDivider} aria-hidden="true">
            <span className={styles.dividerLine} />
            <span className={styles.dividerEmblem}>✦</span>
            <span className={styles.dividerLine} />
          </div>
        </div>
      </div>

      {/* 2. Asymmetric Editorial Anthology Canvas */}
      <div className={styles.anthologyCanvas}>
        {CURATIONS_DATA.map((curation, idx) => (
          <CurationChapter
            key={curation.id}
            curation={curation}
            layoutVariant={LAYOUT_VARIANTS[idx % LAYOUT_VARIANTS.length]}
            isPriority={false}
          />
        ))}
      </div>
    </section>
  );
};
