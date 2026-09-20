'use client';

import React from 'react';
import Image from 'next/image';
import { LandscapeFeature } from '@/data/location.data';
import styles from './LocationSection.module.css';

interface LandscapeDialogueProps {
  heading: string;
  subtitle: string;
  features: LandscapeFeature[];
}

export const LandscapeDialogue: React.FC<LandscapeDialogueProps> = ({
  heading,
  subtitle,
  features,
}) => {
  const feature1 = features[0];
  const feature2 = features[1];

  return (
    <div className={styles.landscapeChapter}>
      <div className={styles.container}>
        <header className={styles.chapterHeader}>
          <span className={styles.eyebrow}>LANDSCAPE DIALOGUE</span>
          <h3 className={styles.chapterTitle}>{heading}</h3>
          <p className={styles.chapterSubtitle}>{subtitle}</p>
        </header>

        <div className={styles.landscapeSequence}>
          {/* Feature 01: The Ancient Aravalli Range & Nag Pahar (Standard Asymmetric) */}
          {feature1 && (
            <article id={`feature-${feature1.id}`} className={styles.landscapeRow}>
              <figure className={styles.landscapeMediaFigure}>
                <div className={styles.landscapeImageFrame}>
                  <Image
                    src={feature1.asset.path}
                    alt={feature1.asset.altText}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 55vw"
                    className={styles.landscapeImage}
                  />
                </div>
              </figure>

              <div className={styles.landscapeNarrative}>
                <div className={styles.featureMeta}>
                  <span className={styles.featureNumeral}>{feature1.numeral}</span>
                  <span className={styles.horizonBadge}>Aravalli Mountain Ridge</span>
                </div>
                <h4 className={styles.featureTitle}>{feature1.title}</h4>
                <p className={styles.featureSubtitle}>{feature1.subtitle}</p>
                <p className={styles.featureDescription}>{feature1.description}</p>
              </div>
            </article>
          )}

          {/* Feature 02: Pushkar Countryside & Farmland Seclusion (Reversed Asymmetric) */}
          {feature2 && (
            <article id={`feature-${feature2.id}`} className={styles.landscapeRowReversed}>
              <div className={styles.landscapeNarrative}>
                <div className={styles.featureMeta}>
                  <span className={styles.featureNumeral}>{feature2.numeral}</span>
                  <span className={styles.horizonBadge}>Bhagwanpura Oasis</span>
                </div>
                <h4 className={styles.featureTitle}>{feature2.title}</h4>
                <p className={styles.featureSubtitle}>{feature2.subtitle}</p>
                <p className={styles.featureDescription}>{feature2.description}</p>
              </div>

              <figure className={styles.landscapeMediaFigure}>
                <div className={styles.landscapeImageFrame}>
                  <Image
                    src={feature2.asset.path}
                    alt={feature2.asset.altText}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 55vw"
                    className={styles.landscapeImage}
                  />
                </div>
              </figure>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};
