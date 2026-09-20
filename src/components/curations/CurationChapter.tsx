'use client';

import React from 'react';
import Image from 'next/image';
import { CurationData } from '@/data/curations.data';
import styles from './CurationsSection.module.css';

export type CurationLayoutVariant =
  | 'sundownerRight'
  | 'diningLeft'
  | 'poolPanoramic'
  | 'courtyardStaggered';

interface CurationChapterProps {
  curation: CurationData;
  layoutVariant: CurationLayoutVariant;
  isPriority?: boolean;
}

export const CurationChapter: React.FC<CurationChapterProps> = ({
  curation,
  layoutVariant,
  isPriority = false,
}) => {
  const isDestination = curation.locationType === 'Destination-Based';
  const locationBadge = isDestination ? 'DESTINATION' : 'PROPERTY';

  // Responsive image sizes tailored to each variant's layout width
  const getImageSizes = () => {
    switch (layoutVariant) {
      case 'poolPanoramic':
        return '(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 65vw';
      case 'sundownerRight':
      case 'courtyardStaggered':
        return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw';
      case 'diningLeft':
      default:
        return '(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 50vw';
    }
  };

  return (
    <article
      id={`curation-${curation.id}`}
      aria-label={`${curation.title} — Chapter ${curation.numeral}`}
      className={`${styles.chapterArticle} ${styles[layoutVariant]}`}
      data-chapter={curation.numeral}
    >
      <div className={styles.chapterGrid}>
        {/* Narrative & Information Column */}
        <div className={styles.narrativeColumn} data-animate="narrative">
          <div className={styles.chapterBadgeRow}>
            <span className={styles.chapterNumeral}>{curation.numeral}</span>
            <span className={styles.badgeSeparator} aria-hidden="true">·</span>
            <span className={styles.categoryBadge}>{curation.category.toUpperCase()}</span>
            <span className={styles.badgeSeparator} aria-hidden="true">·</span>
            <span className={styles.locationBadge}>{locationBadge}</span>
          </div>

          <h3 className={styles.chapterTitle}>{curation.title}</h3>

          <p className={styles.chapterSubtitle}>{curation.subtitle}</p>

          <p className={styles.chapterDescription}>{curation.description}</p>

          {/* Verified Highlights derived directly from single source of truth */}
          {curation.highlights && curation.highlights.length > 0 && (
            <div className={styles.highlightsBlock}>
              <span className={styles.highlightsHeading}>CURATED MOMENTS</span>
              <ul className={styles.highlightsList} aria-label={`Highlights of ${curation.title}`}>
                {curation.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className={styles.highlightItem}>
                    <span className={styles.highlightGlyph} aria-hidden="true">✦</span>
                    <span className={styles.highlightText}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.ctaWrapper}>
            <a
              href="#reservation"
              className={styles.ctaLink}
              aria-label={`Enquire experience: ${curation.title}`}
            >
              <span className={styles.ctaText}>ENQUIRE EXPERIENCE</span>
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Editorial Photography Column */}
        <figure className={styles.mediaFigure} data-animate="media">
          <div className={styles.imageFrame} data-animate="image">
            <Image
              src={curation.primaryAsset.path}
              alt={curation.primaryAsset.altText}
              fill
              sizes={getImageSizes()}
              priority={isPriority}
              className={styles.curationImage}
            />
          </div>
          <figcaption className={styles.figcaption}>
            {isDestination ? 'Thar Desert Dunes · Pushkar' : 'Maya Garh Estate · Pushkar'}
          </figcaption>
        </figure>
      </div>
    </article>
  );
};
