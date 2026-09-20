import React from 'react';
import { ACCOLADES_DATA, GuestRatingItem } from '@/data/accolades.data';
import styles from './AccoladesSection.module.css';

interface GuestRatingsProps {
  ratingsRef?: React.Ref<HTMLDivElement>;
}

export const GuestRatings: React.FC<GuestRatingsProps> = ({ ratingsRef }) => {
  return (
    <div ref={ratingsRef} className={styles.ratingsContainer}>
      {ACCOLADES_DATA.ratings.map((item: GuestRatingItem) => (
        <a
          key={item.id}
          href={item.directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ratingColumn}
          aria-label={item.ariaLabel}
        >
          <div className={styles.scoreRow}>
            <span className={styles.scoreNumber}>{item.score}</span>
            <span className={styles.scoreScale}>{item.scale}</span>
          </div>

          <div className={styles.platformMeta}>
            <span className={styles.platformName}>{item.platform}</span>
            <span className={styles.timestampText}>{item.timestamp}</span>
          </div>
        </a>
      ))}
    </div>
  );
};
