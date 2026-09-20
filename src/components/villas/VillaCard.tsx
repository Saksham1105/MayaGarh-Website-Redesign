'use client';

import React from 'react';
import Image from 'next/image';
import { VillaData } from '@/data/villas.data';
import styles from './VillaCard.module.css';

interface VillaCardProps {
  villa: VillaData;
  index: number;
  total: number;
  isPriority?: boolean;
}

export const VillaCard: React.FC<VillaCardProps> = ({
  villa,
  index,
  total,
  isPriority = false,
}) => {
  return (
    <article
      id={`villa-${villa.id}`}
      aria-label={`${villa.name} — Villa ${villa.number} of ${total}`}
      className={styles.chapterArticle}
    >
      <div className={styles.chapterGrid}>
        {/* Narrative & Info Column */}
        <div className={styles.infoColumn} data-animate="info">
          <span className={styles.chapterBadge}>
            VILLA {villa.number} / {String(total).padStart(2, '0')}
          </span>

          <h3 className={styles.title}>{villa.name}</h3>

          <p className={styles.editorialQuote}>{villa.narrative}</p>

          <div className={styles.metaRow}>
            <span className={styles.rateBadge}>{villa.rateDisplay}</span>
          </div>

          <a
            href={`#reservation?intent=stay&villa=${villa.id}`}
            className={styles.ctaLink}
            aria-label={`${villa.ctaLabel} — Opens reservation concierge`}
          >
            <span>{villa.ctaLabel}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>

        {/* Photography Column */}
        <div className={styles.imageColumn} data-animate="image">
          <div className={styles.imageWrapper}>
            <Image
              src={villa.primaryAsset.path}
              alt={villa.primaryAsset.altText}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1440px) 45vw, 600px"
              quality={85}
              priority={isPriority}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
