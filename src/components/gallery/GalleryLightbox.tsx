import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { GalleryImageItem } from '@/data/gallery.data';
import styles from './GallerySection.module.css';

interface GalleryLightboxProps {
  isOpen: boolean;
  images: GalleryImageItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const CATEGORY_NAMES: Record<string, string> = {
  architecture: 'Architecture & Bastions',
  villas: 'Royal Villa Living',
  water: 'Pools & Reflections',
  courtyards: 'Courtyards & Gardens',
  dining: 'Feasts & Tableware',
  landscape: 'Aravalli Vistas',
  twilight: 'Twilight & Lanterns',
  details: 'Artisanal Craftsmanship',
};

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  // Body scroll lock & focus restoration
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement | null;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus close button on open
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        clearTimeout(timer);
        if (triggerElementRef.current) {
          triggerElementRef.current.focus();
        }
      };
    }
  }, [isOpen]);

  // Keyboard navigation & Focus Trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'Tab') {
        if (!dialogRef.current) return;
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) {
    return null;
  }

  const activeImage = images[currentIndex] || images[0];
  const categoryLabel = CATEGORY_NAMES[activeImage.category] || activeImage.category.toUpperCase();

  return (
    <div
      className={styles.lightboxBackdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      id="gallery-lightbox-backdrop"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Archival image viewer"
        className={styles.lightboxDialog}
        id="gallery-lightbox-dialog"
      >
        {/* Lightbox Header: Counter and Close button */}
        <header className={styles.lightboxHeader}>
          <div className={styles.lightboxCounter}>
            ARCHIVAL PLATE {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.lightboxCloseButton}
            onClick={onClose}
            aria-label="Close archival image viewer"
            id="gallery-lightbox-close"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* Lightbox Body: Previous, Image, Next */}
        <div className={styles.lightboxBody}>
          <button
            type="button"
            className={`${styles.lightboxNavButton} ${styles.lightboxPrev}`}
            onClick={onPrev}
            aria-label="Previous plate"
            id="gallery-lightbox-prev"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.lightboxImageStage}>
            <Image
              src={activeImage.asset.path}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
              className={styles.lightboxImage}
              id="gallery-lightbox-active-img"
            />
          </div>

          <button
            type="button"
            className={`${styles.lightboxNavButton} ${styles.lightboxNext}`}
            onClick={onNext}
            aria-label="Next plate"
            id="gallery-lightbox-next"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Lightbox Footer: Image Title & Category */}
        <footer className={styles.lightboxFooter}>
          <h4 className={styles.lightboxCaptionTitle}>{activeImage.title}</h4>
          <span className={styles.lightboxCaptionCategory}>{categoryLabel}</span>
        </footer>
      </div>
    </div>
  );
};
