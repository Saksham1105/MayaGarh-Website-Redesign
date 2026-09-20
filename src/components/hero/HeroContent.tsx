'use client';

import React from 'react';
import styles from './HeroContent.module.css';

interface HeroContentProps {
  titleRef?: React.Ref<HTMLHeadingElement>;
  subtitleRef?: React.Ref<HTMLParagraphElement>;
  ctaRef?: React.Ref<HTMLDivElement>;
  scrollRef?: React.Ref<HTMLAnchorElement>;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  titleRef,
  subtitleRef,
  ctaRef,
  scrollRef,
}) => {
  return (
    <div className={`container ${styles.contentWrapper}`}>
      <div className={styles.titleGroup}>
        <p ref={subtitleRef} className={styles.locationSubtitle}>
          PUSHKAR, RAJASTHAN
        </p>

        <h1 ref={titleRef} className={styles.mainTitle}>
          MAYA GARH
        </h1>

        <p className={styles.descriptor}>
          A Royal Sanctuary Amidst the Aravallis
        </p>
      </div>

      <div ref={ctaRef} className={styles.ctaGroup}>
        <a
          href="#reservation?intent=stay"
          className={styles.primaryCta}
        >
          Enquire for Rates
        </a>

        <a href="#prologue" className={styles.secondaryCta}>
          Discover Sanctuary
        </a>
      </div>

      <a ref={scrollRef} href="#prologue" className={styles.scrollIndicator} aria-label="Scroll to Prologue Narrative">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} aria-hidden="true" />
      </a>
    </div>
  );
};
