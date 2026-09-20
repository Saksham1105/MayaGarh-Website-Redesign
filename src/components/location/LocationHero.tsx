'use client';

import React from 'react';
import Image from 'next/image';
import { LocationIntroData } from '@/data/location.data';
import styles from './LocationSection.module.css';

interface LocationHeroProps {
  intro: LocationIntroData;
}

export const LocationHero: React.FC<LocationHeroProps> = ({ intro }) => {
  return (
    <div className={styles.settingChapter}>
      <div className={styles.container}>
        <header className={styles.settingHeader}>
          <span className={styles.eyebrow}>{intro.eyebrow}</span>
          <h2 className={styles.sectionHeadline}>{intro.headline}</h2>
          <p className={styles.sectionTagline}>{intro.tagline}</p>
          <p className={styles.settingIntro}>{intro.description}</p>
          <div className={styles.geographicMeta}>
            <span>{intro.geographicMeta}</span>
          </div>
        </header>

        <figure className={styles.heroMediaFigure}>
          <div className={styles.heroImageFrame}>
            <Image
              src={intro.heroAsset.path}
              alt={intro.heroAsset.altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 92vw, 1320px"
              className={styles.heroImage}
            />
          </div>
          <figcaption className={styles.heroFigcaption}>
            <span>{intro.heroAsset.usage}</span>
            <span className={styles.heroFigcaptionAccent}>Maya Garh Fort Estate</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
