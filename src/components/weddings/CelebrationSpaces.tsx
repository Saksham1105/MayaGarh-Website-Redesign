'use client';

import React from 'react';
import Image from 'next/image';
import { CelebrationSpace } from '@/data/weddings.data';
import styles from './WeddingsSection.module.css';

interface CelebrationSpacesProps {
  spaces: CelebrationSpace[];
}

export const CelebrationSpaces: React.FC<CelebrationSpacesProps> = ({ spaces }) => {
  // We expect 5 celebration spaces
  const space1 = spaces[0]; // Central Stone Courtyard
  const space2 = spaces[1]; // Royal Infinity Pool & Terrace
  const space3 = spaces[2]; // Rajwada Royal Banquet Hall
  const space4 = spaces[3]; // Fort Façade & Sandstone Ramparts
  const space5 = spaces[4]; // Royal Villa Enclave

  return (
    <div className={styles.spacesChapter}>
      <div className={styles.container}>
        <header className={styles.spacesHeader}>
          <span className={styles.eyebrow}>THE ESTATE AS A CANVAS</span>
          <h3 className={styles.chapterTitle}>Celebration Spaces</h3>
          <p className={styles.spacesSubtitle}>
            Across 22 secluded acres of private royal fortress, five distinct heritage settings
            provide authentic architectural canvases for sacred union and courtly celebration.
          </p>
        </header>

        <div className={styles.spacesSequence}>
          {/* Space 01 — Central Stone Courtyard & Heritage Lawns (Wide Asymmetric) */}
          {space1 && (
            <article id={`space-${space1.id}`} className={styles.spaceRowAsymmetric}>
              <figure className={styles.spaceMediaFigure}>
                <div className={styles.spaceImageFrameStandard}>
                  <Image
                    src={space1.asset.path}
                    alt={space1.asset.altText}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 55vw"
                    className={styles.spaceImage}
                  />
                </div>
              </figure>

              <div className={styles.spaceNarrative}>
                <div className={styles.spaceHeaderMeta}>
                  <span className={styles.spaceNumeral}>{space1.numeral}</span>
                  <span className={styles.spaceLocationBadge}>{space1.locationType}</span>
                </div>
                <h4 className={styles.spaceTitle}>{space1.title}</h4>
                <p className={styles.spaceSubtitle}>{space1.subtitle}</p>
                <p className={styles.spaceDescription}>{space1.description}</p>
              </div>
            </article>
          )}

          {/* Spaces 02 & 03 — Offset Diptych (Poolside Terrace + Rajwada Banquet) */}
          <div className={styles.spacesDiptychGrid}>
            {space2 && (
              <article id={`space-${space2.id}`} className={styles.diptychCard}>
                <figure className={styles.spaceMediaFigure}>
                  <div className={styles.spaceImageFramePortrait}>
                    <Image
                      src={space2.asset.path}
                      alt={space2.asset.altText}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className={styles.spaceImage}
                    />
                  </div>
                </figure>
                <div className={styles.diptychContent}>
                  <div className={styles.spaceHeaderMeta}>
                    <span className={styles.spaceNumeral}>{space2.numeral}</span>
                    <span className={styles.spaceLocationBadge}>{space2.locationType}</span>
                  </div>
                  <h4 className={styles.spaceTitle}>{space2.title}</h4>
                  <p className={styles.spaceSubtitle}>{space2.subtitle}</p>
                  <p className={styles.spaceDescription}>{space2.description}</p>
                </div>
              </article>
            )}

            {space3 && (
              <article
                id={`space-${space3.id}`}
                className={`${styles.diptychCard} ${styles.diptychCardOffset}`}
              >
                <figure className={styles.spaceMediaFigure}>
                  <div className={styles.spaceImageFramePortrait}>
                    <Image
                      src={space3.asset.path}
                      alt={space3.asset.altText}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className={styles.spaceImage}
                    />
                  </div>
                </figure>
                <div className={styles.diptychContent}>
                  <div className={styles.spaceHeaderMeta}>
                    <span className={styles.spaceNumeral}>{space3.numeral}</span>
                    <span className={styles.spaceLocationBadge}>{space3.locationType}</span>
                  </div>
                  <h4 className={styles.spaceTitle}>{space3.title}</h4>
                  <p className={styles.spaceSubtitle}>{space3.subtitle}</p>
                  <p className={styles.spaceDescription}>{space3.description}</p>
                </div>
              </article>
            )}
          </div>

          {/* Space 04 — Fort Façade & Sandstone Ramparts (Reversed Asymmetric) */}
          {space4 && (
            <article id={`space-${space4.id}`} className={styles.spaceRowReversed}>
              <div className={styles.spaceNarrative}>
                <div className={styles.spaceHeaderMeta}>
                  <span className={styles.spaceNumeral}>{space4.numeral}</span>
                  <span className={styles.spaceLocationBadge}>{space4.locationType}</span>
                </div>
                <h4 className={styles.spaceTitle}>{space4.title}</h4>
                <p className={styles.spaceSubtitle}>{space4.subtitle}</p>
                <p className={styles.spaceDescription}>{space4.description}</p>
              </div>

              <figure className={styles.spaceMediaFigure}>
                <div className={styles.spaceImageFrameStandard}>
                  <Image
                    src={space4.asset.path}
                    alt={space4.asset.altText}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 55vw"
                    className={styles.spaceImage}
                  />
                </div>
              </figure>
            </article>
          )}

          {/* Space 05 — The Royal Villa Enclave (Full-Width Architectural Showcase) */}
          {space5 && (
            <article id={`space-${space5.id}`} className={styles.spaceBuyoutFeature}>
              <figure className={styles.spaceMediaFigure}>
                <div className={styles.spaceImageFramePanoramic}>
                  <Image
                    src={space5.asset.path}
                    alt={space5.asset.altText}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 92vw, 1320px"
                    className={styles.spaceImage}
                  />
                </div>
              </figure>

              <div className={styles.buyoutContent}>
                <div>
                  <div className={styles.spaceHeaderMeta}>
                    <span className={styles.spaceNumeral}>{space5.numeral}</span>
                    <span className={styles.spaceLocationBadge}>{space5.locationType}</span>
                  </div>
                  <h4 className={styles.spaceTitle}>{space5.title}</h4>
                  <p className={styles.spaceSubtitle}>{space5.subtitle}</p>
                </div>
                <div>
                  <p className={styles.spaceDescription}>{space5.description}</p>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};
