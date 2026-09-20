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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const activeBtn = container.querySelector<HTMLElement>(
      `#gallery-filter-${activeFilter}`
    );
    if (!activeBtn) return;

    // Only auto-scroll if container has horizontal overflow
    if (container.scrollWidth <= container.clientWidth) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Calculate center offset relative to the scroll container
    const containerWidth = container.clientWidth;
    const btnLeft = activeBtn.offsetLeft;
    const btnWidth = activeBtn.offsetWidth;
    const targetScrollLeft = btnLeft - containerWidth / 2 + btnWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [activeFilter]);

  return (
    <nav
      className={styles.filtersWrapper}
      aria-label="Gallery category filters"
    >
      <div ref={containerRef} className={styles.filtersContainer}>
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
