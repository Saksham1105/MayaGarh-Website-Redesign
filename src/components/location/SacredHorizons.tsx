'use client';

import React from 'react';
import Image from 'next/image';
import { SacredDestination } from '@/data/location.data';
import styles from './LocationSection.module.css';

interface SacredHorizonsProps {
  heading: string;
  tagline: string;
  subtitle: string;
  destinations: SacredDestination[];
}

export const SacredHorizons: React.FC<SacredHorizonsProps> = ({
  heading,
  tagline,
  subtitle,
  destinations,
}) => {
  return (
    <div className={styles.horizonsChapter}>
      <div className={styles.container}>
        <header className={styles.chapterHeader}>
          <span className={styles.eyebrow}>{tagline}</span>
          <h3 className={styles.chapterTitle}>{heading}</h3>
          <p className={styles.chapterSubtitle}>{subtitle}</p>
        </header>

        <div className={styles.horizonsGrid}>
          {destinations.map((dest) => (
            <article
              key={dest.id}
              id={`destination-${dest.id}`}
              className={styles.horizonCard}
            >
              <div className={styles.horizonCardBody}>
                <div className={styles.horizonHeaderMeta}>
                  <span className={styles.horizonBadge}>{dest.category}</span>
                  <span className={styles.horizonDistance}>{dest.distanceLabel}</span>
                </div>

                <h4 className={styles.horizonTitle}>{dest.title}</h4>
                <p className={styles.horizonDescription}>{dest.description}</p>

                {/* Typographic Architectural Seal for Non-Photographic Heritage Horizons */}
                {dest.hasVisualSeal && (
                  <div className={styles.typographicSeal}>
                    <div className={styles.sealMonogram} aria-hidden="true">
                      {dest.id === 'pushkar-lake' ? '52' : 'ॐ'}
                    </div>
                    <div className={styles.sealText}>
                      <span>
                        {dest.id === 'pushkar-lake'
                          ? 'Sacred Sarovar & Maha Aarti · 52 Heritage Ghats'
                          : 'Jagatpita Brahma Mandir · 14th-Century Heritage'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Authentic Asset Framing for Verified Desert Dune Sundowner */}
              {dest.asset && (
                <figure className={styles.horizonMediaFigure}>
                  <Image
                    src={dest.asset.path}
                    alt={dest.asset.altText}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.horizonImage}
                  />
                </figure>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
