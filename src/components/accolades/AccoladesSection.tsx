'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPContext } from '@/animation/useGSAPContext';
import { AccoladesIntro } from './AccoladesIntro';
import { GuestRatings } from './GuestRatings';
import { ArchitecturalStatements } from './ArchitecturalStatements';
import styles from './AccoladesSection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const AccoladesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const introEyebrowRef = useRef<HTMLParagraphElement>(null);
  const introHeadingRef = useRef<HTMLHeadingElement>(null);
  const introMonographRef = useRef<HTMLParagraphElement>(null);
  const topDividerRef = useRef<HTMLDivElement>(null);
  const ratingsRef = useRef<HTMLDivElement>(null);
  const bottomDividerRef = useRef<HTMLDivElement>(null);
  const statementsRef = useRef<HTMLDivElement>(null);

  // GSAP restrained editorial reveals
  useGSAPContext(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const section = sectionRef.current;
        if (!section) return;

        // 1. Intro Reveal (Eyebrow, Heading, Monograph)
        const introTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        introTimeline
          .fromTo(
            introEyebrowRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' }
          )
          .fromTo(
            introHeadingRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out' },
            '-=0.45'
          )
          .fromTo(
            introMonographRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
            '-=0.5'
          );

        // 2. Top Hairline Divider Reveal
        if (topDividerRef.current) {
          gsap.fromTo(
            topDividerRef.current,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 1.1,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: topDividerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // 3. Ratings Stagger Reveal (No spinning/count-up; quiet editorial appearance)
        if (ratingsRef.current) {
          const ratingCols = ratingsRef.current.querySelectorAll(
            `.${styles.ratingColumn}`
          );

          gsap.fromTo(
            ratingCols,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.18,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: ratingsRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // 4. Bottom Hairline Divider Reveal
        if (bottomDividerRef.current) {
          gsap.fromTo(
            bottomDividerRef.current,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 1.1,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: bottomDividerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // 5. Architectural Statements & Visual Figure Reveal
        if (statementsRef.current) {
          const statementBlocks = statementsRef.current.querySelectorAll(
            `.${styles.statementBlock}`
          );
          const visualFig = statementsRef.current.querySelector(
            `.${styles.visualFigure}`
          );

          gsap.fromTo(
            statementBlocks,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: statementsRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );

          if (visualFig) {
            gsap.fromTo(
              visualFig,
              { opacity: 0, y: 25 },
              {
                opacity: 1,
                y: 0,
                duration: 1.0,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: visualFig,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="accolades"
      ref={sectionRef}
      className={styles.section}
      aria-label="Sanctuary Trust and Guest Recognition"
    >
      <div className={styles.inner}>
        <AccoladesIntro
          eyebrowRef={introEyebrowRef}
          headingRef={introHeadingRef}
          monographRef={introMonographRef}
        />

        <div
          ref={topDividerRef}
          className={styles.hairlineDivider}
          aria-hidden="true"
        />

        <GuestRatings ratingsRef={ratingsRef} />

        <div
          ref={bottomDividerRef}
          className={styles.hairlineDivider}
          aria-hidden="true"
        />

        <ArchitecturalStatements statementsRef={statementsRef} />
      </div>
    </section>
  );
};
