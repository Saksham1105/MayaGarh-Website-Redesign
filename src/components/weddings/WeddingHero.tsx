'use client';

import React from 'react';
import Image from 'next/image';
import { PropertyImageAsset } from '@/data/assets.data';
import styles from './WeddingsSection.module.css';

interface WeddingHeroProps {
  eyebrow: string;
  title: string;
  tagline: string;
  introduction: string;
  heroAsset: PropertyImageAsset;
}

export const WeddingHero: React.FC<WeddingHeroProps> = ({
  eyebrow,
  title,
  tagline,
  introduction,
  heroAsset,
}) => {
  return (
    <div className={styles.invitationChapter}>
      <div className={styles.container}>
        <header className={styles.invitationHeader}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.sectionHeadline}>{title}</h2>
          <p className={styles.sectionTagline}>{tagline}</p>
          <p className={styles.invitationIntro}>{introduction}</p>
        </header>

        <figure className={styles.heroMediaFigure}>
          <div className={styles.heroImageFrame}>
            <Image
              src={heroAsset.path}
              alt={heroAsset.altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 92vw, 1320px"
              loading="lazy"
              quality={85}
              className={styles.heroImage}
            />
          </div>
          <figcaption className={styles.heroFigcaption}>
            <span>{heroAsset.usage}</span>
            <span className={styles.heroFigcaptionAccent}>Maya Garh Fort Estate</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
