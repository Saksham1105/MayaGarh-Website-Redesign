'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPContext } from '@/animation/useGSAPContext';
import styles from './HeroSection.module.css';
import { Header } from './Header';
import { HeroMedia } from './HeroMedia';
import { HeroContent } from './HeroContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLAnchorElement | null>(null);

  useGSAPContext(
    () => {
      // 1. Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (mediaRef.current) {
        tl.fromTo(
          mediaRef.current,
          { scale: 1.08, opacity: 0.4 },
          { scale: 1.0, opacity: 1, duration: 1.8 }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=1.2'
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0 },
          '-=0.6'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );
      }

      if (scrollRef.current) {
        tl.fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.4'
        );
      }

      // 2. Exit Scroll Choreography
      if (sectionRef.current) {
        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        if (mediaRef.current) {
          exitTl.to(mediaRef.current, { yPercent: 20, scale: 1.04 }, 0);
        }

        if (titleRef.current) {
          exitTl.to(titleRef.current, { y: -50, opacity: 0 }, 0);
        }

        if (ctaRef.current) {
          exitTl.to(ctaRef.current, { y: -30, opacity: 0 }, 0);
        }

        if (scrollRef.current) {
          exitTl.to(scrollRef.current, { opacity: 0 }, 0);
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="hero" ref={sectionRef} className={styles.heroSection} aria-label="Hero Opening Cinematic">
      <Header />
      <HeroMedia imageRef={mediaRef} />
      <HeroContent
        titleRef={titleRef}
        subtitleRef={subtitleRef}
        ctaRef={ctaRef}
        scrollRef={scrollRef}
      />
    </section>
  );
};
