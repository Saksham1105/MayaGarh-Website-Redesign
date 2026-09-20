import React from 'react';
import { GalleryCategory, GalleryCategoryId } from '@/data/gallery.data';
import styles from './GallerySection.module.css';

interface GalleryFiltersProps {
  categories: GalleryCategory[];
  activeFilter: 'all' | GalleryCategoryId;
  onSelectFilter: (filter: 'all' | GalleryCategoryId) => void;
}

const FILTER_SHORT_LABELS: Record<GalleryCategoryId, string> = {
  architecture: 'ARCHITECTURE',
  villas: 'VILLAS',
  water: 'POOLS & WATER',
  courtyards: 'COURTYARDS',
  dining: 'DINING',
  landscape: 'ARAVALLI VISTAS',
  twilight: 'TWILIGHT',
  details: 'CRAFTSMANSHIP',
};

export const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  categories,
  activeFilter,
  onSelectFilter,
}) => {
  return (
    <nav
      className={styles.filtersWrapper}
      aria-label="Gallery category filters"
    >
      <div className={styles.filtersContainer}>
        <ul className={styles.filterNav}>
          <li className={styles.filterItem}>
            <button
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === 'all' ? styles.filterButtonActive : ''
              }`}
              aria-pressed={activeFilter === 'all'}
              onClick={() => onSelectFilter('all')}
              id="gallery-filter-all"
            >
              ALL ARCHIVE
            </button>
          </li>
          {categories.map((cat) => {
            const isSelected = activeFilter === cat.id;
            const label = FILTER_SHORT_LABELS[cat.id] || cat.title.toUpperCase();
            return (
              <li key={cat.id} className={styles.filterItem}>
                <button
                  type="button"
                  className={`${styles.filterButton} ${
                    isSelected ? styles.filterButtonActive : ''
                  }`}
                  aria-pressed={isSelected}
                  onClick={() => onSelectFilter(cat.id)}
                  id={`gallery-filter-${cat.id}`}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
