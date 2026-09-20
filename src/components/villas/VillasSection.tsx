'use client';

import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPContext } from '@/animation/useGSAPContext';
import { VILLAS_DATA } from '@/data/villas.data';
import { VillaCard } from './VillaCard';
import styles from './VillasSection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const VillasSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAPContext(
    () => {
      const mm = gsap.matchMedia();

      // Desktop / Landscape: Viewport pinned horizontal scrub
      mm.add(
        '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
        () => {
          const pinned = pinnedRef.current;
          const track = trackRef.current;
          if (!pinned || !track) return;

          const totalVillas = VILLAS_DATA.length;
          const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

          const tween = gsap.to(track, {
            x: getScrollAmount,
            ease: 'none',
            scrollTrigger: {
              trigger: pinned,
              pin: true,
              scrub: 0.8,
              start: 'top top',
              end: () => `+=${track.scrollWidth - window.innerWidth}`,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const rawProgress = self.progress * totalVillas;
                const current = Math.min(Math.floor(rawProgress), totalVillas - 1);
                setActiveIndex(current);
              },
            },
          });

          return () => {
            tween.kill();
          };
        }
      );

      // Mobile / Tablet Portrait: Lightweight entrance movement on scroll
      mm.add(
        '(max-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          const section = sectionRef.current;
          if (!section) return;

          const articles = gsap.utils.toArray<HTMLElement>(
            section.querySelectorAll('article')
          );

          articles.forEach((article) => {
            const img = article.querySelector('[data-animate="image"]');
            const info = article.querySelector('[data-animate="info"]');

            if (img) {
              gsap.fromTo(
                img,
                { opacity: 0.7, scale: 1.02 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.9,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: article,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                  },
                }
              );
            }

            if (info) {
              gsap.fromTo(
                info,
                { opacity: 0.5, y: 16 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
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

  const activeNumber = String(activeIndex + 1).padStart(2, '0');
  const totalNumber = String(VILLAS_DATA.length).padStart(2, '0');

  return (
    <section
      ref={sectionRef}
      id="villas"
      aria-label="The Royal Villa Collection"
      className={styles.villasSection}
    >
      <div ref={pinnedRef} className={styles.pinnedContainer}>
        {/* Fixed Pinned Header & Counter Overlay */}
        <div className={styles.sectionHeader}>
          <h2 className="sr-only">The Royal Villa Collection</h2>
          <span className={styles.eyebrow}>THE ROYAL VILLA COLLECTION</span>
          <p className={styles.mobileSectionTitle}>Six Palatial Sanctuaries</p>
          <p className={styles.mobileSectionSubtitle}>
            Intimate royal retreats steeped in Pushkar heritage &amp; desert stillness
          </p>
        </div>

        <div
          className={styles.progressCounter}
          aria-live="polite"
          aria-atomic="true"
        >
          <span className={styles.counterCurrent}>{activeNumber}</span> /{' '}
          <span>{totalNumber}</span>
        </div>

        {/* Horizontal Scrub Track (Desktop) / Vertical Document Flow (Mobile) */}
        <div ref={trackRef} className={styles.track}>
          {VILLAS_DATA.map((villa, idx) => (
            <VillaCard
              key={villa.id}
              villa={villa}
              index={idx}
              total={VILLAS_DATA.length}
              isPriority={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
