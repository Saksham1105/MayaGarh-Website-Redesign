'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPContext } from '@/animation/useGSAPContext';
import { PROLOGUE_DATA } from '@/data/prologue.data';
import { ASSET_MAP } from '@/data/assets.data';
import styles from './PrologueSection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const PrologueSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const primaryImgRef = useRef<HTMLDivElement>(null);
  const detailImgRef = useRef<HTMLDivElement>(null);

  useGSAPContext(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
          isMobile: '(max-width: 768px) and (prefers-reduced-motion: no-preference)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            if (textColRef.current) {
              gsap.set(textColRef.current.children, { opacity: 1, y: 0 });
            }
            if (primaryImgRef.current) {
              gsap.set(primaryImgRef.current, { opacity: 1, scale: 1 });
            }
            return;
          }

          // Editorial text sequence reveal
          if (textColRef.current) {
            gsap.fromTo(
              textColRef.current.children,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.85,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: textColRef.current,
                  start: 'top 88%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // Primary image smooth reveal
          if (primaryImgRef.current) {
            gsap.fromTo(
              primaryImgRef.current,
              { opacity: 0.4, scale: 1.04 },
              {
                opacity: 1,
                scale: 1.0,
                duration: 1.0,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: primaryImgRef.current,
                  start: 'top 88%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // Secondary detail image parallax translation (desktop/tablet only via matchMedia)
          if (detailImgRef.current && isDesktop) {
            gsap.to(detailImgRef.current, {
              yPercent: -15,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
              },
            });
          }
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
      id="prologue"
      aria-label="The Maya Garh Prologue Narrative"
      className={styles.prologueSection}
    >
      <div className="container">
        <div className={styles.prologueGrid}>
          {/* Editorial Narrative Column */}
          <div ref={textColRef} className={styles.textColumn}>
            <span className={styles.eyebrow}>{PROLOGUE_DATA.eyebrow}</span>
            <h2 className={styles.heading}>{PROLOGUE_DATA.heading}</h2>

            <blockquote className={styles.editorialBlockquote}>
              <p className={styles.quoteText}>{PROLOGUE_DATA.quote}</p>
            </blockquote>

            <p className={styles.bodyText}>{PROLOGUE_DATA.paragraph1}</p>
            <p className={styles.bodyText}>{PROLOGUE_DATA.paragraph2}</p>

            <div className={styles.dividerLine} aria-hidden="true" />
          </div>

          {/* Architectural Imagery Column */}
          <div className={styles.imageColumn}>
            <figure className={styles.primaryFigure}>
              <div ref={primaryImgRef} className={styles.primaryImageWrapper}>
                <Image
                  src={ASSET_MAP.PROLOGUE_PRIMARY.path}
                  alt={ASSET_MAP.PROLOGUE_PRIMARY.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 42vw, 560px"
                  quality={85}
                  className={styles.primaryImage}
                />
              </div>
              <figcaption className="sr-only">
                {PROLOGUE_DATA.primaryImageCaption}
              </figcaption>
            </figure>

            <figure ref={detailImgRef} className={styles.detailFigure}>
              <div className={styles.detailImageWrapper}>
                <Image
                  src={ASSET_MAP.PROLOGUE_DETAIL.path}
                  alt={ASSET_MAP.PROLOGUE_DETAIL.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 35vw, (max-width: 1440px) 25vw, 340px"
                  quality={85}
                  className={styles.detailImage}
                />
              </div>
              <figcaption className="sr-only">
                {PROLOGUE_DATA.detailImageCaption}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
