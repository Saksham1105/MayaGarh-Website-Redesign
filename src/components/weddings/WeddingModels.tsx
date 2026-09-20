'use client';

import React from 'react';
import { WeddingModel } from '@/data/weddings.data';
import styles from './WeddingsSection.module.css';

interface WeddingModelsProps {
  models: WeddingModel[];
}

export const WeddingModels: React.FC<WeddingModelsProps> = ({ models }) => {
  return (
    <div className={styles.modelsChapter}>
      <div className={styles.container}>
        <header className={styles.modelsHeader}>
          <span className={styles.eyebrow}>TWO VERIFIED ENGAGEMENT MODELS</span>
          <h3 className={styles.chapterTitle}>A Wedding Shaped Around Your Vision</h3>
          <p className={styles.modelsSubtitle}>
            Whether entrusting Maya Luxury’s on-ground team with operational coordination or
            partnering with independent event designers for complete architectural freedom.
          </p>
        </header>

        <div className={styles.modelsGrid}>
          {models.map((model) => (
            <div key={model.id} id={`model-${model.id}`} className={styles.modelCard}>
              <span className={styles.modelBadge}>
                {model.id === 'fully-curated'
                  ? 'Concierge-Led Experience'
                  : 'Independent Creative Direction'}
              </span>
              <h4 className={styles.modelTitle}>{model.title}</h4>
              <p className={styles.modelDescription}>{model.description}</p>
              <div className={styles.modelDivider} />
              <ul className={styles.modelDetailsList}>
                {model.details.map((detail, index) => (
                  <li key={index} className={styles.modelDetailItem}>
                    <span className={styles.detailDot} aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
