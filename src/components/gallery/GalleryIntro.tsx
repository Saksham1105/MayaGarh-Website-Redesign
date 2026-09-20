import React from 'react';
import { GallerySectionData } from '@/data/gallery.data';
import styles from './GallerySection.module.css';

interface GalleryIntroProps {
  intro: GallerySectionData['intro'];
}

export const GalleryIntro: React.FC<GalleryIntroProps> = ({ intro }) => {
  return (
    <div className={styles.introContainer}>
      <span className={styles.introEyebrow}>{intro.eyebrow}</span>
      <h2 className={styles.introHeadline}>{intro.headline}</h2>
      <p className={styles.introSubheadline}>{intro.subheadline}</p>
      <p className={styles.introDescription}>{intro.description}</p>
      <div className={styles.introBadge}>
        <span aria-hidden="true">✦</span>
        <span>{intro.metadataBadge}</span>
      </div>
    </div>
  );
};
