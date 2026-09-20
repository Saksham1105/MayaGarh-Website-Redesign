'use client';

import React from 'react';
import { MultiDayStoryData } from '@/data/weddings.data';
import styles from './WeddingsSection.module.css';

interface MultiDayStoryProps {
  story: MultiDayStoryData;
}

export const MultiDayStory: React.FC<MultiDayStoryProps> = ({ story }) => {
  return (
    <div className={styles.multiDayChapter}>
      <div className={styles.container}>
        <div className={styles.multiDayContainer}>
          <div className={styles.multiDayNarrative}>
            <span className={styles.eyebrow}>UNHURRIED LIVING</span>
            <h3 className={styles.chapterTitle}>{story.title}</h3>
            <p className={styles.sectionTagline}>{story.tagline}</p>
            <p className={styles.spaceDescription}>{story.description}</p>
          </div>

          <div className={styles.multiDayHighlights}>
            {story.highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightItem}>
                <span className={styles.highlightNumeral}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.highlightText}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
