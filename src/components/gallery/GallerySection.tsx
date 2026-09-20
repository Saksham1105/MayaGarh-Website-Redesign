'use client';

import React, { useRef, useState, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPContext } from '@/animation/useGSAPContext';
import {
  GALLERY_DATA,
  GalleryCategoryId,
  GalleryImageItem,
} from '@/data/gallery.data';
import { GalleryIntro } from './GalleryIntro';
import { GalleryFilters } from './GalleryFilters';
import { EditorialGallery } from './EditorialGallery';
import { GalleryLightbox } from './GalleryLightbox';
import styles from './GallerySection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const GallerySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | GalleryCategoryId>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Active pool of images matching current filter
  const activeImages: GalleryImageItem[] = useMemo(() => {
    if (activeFilter === 'all') {
      return GALLERY_DATA.allImages;
    }
    const cat = GALLERY_DATA.categories.find((c) => c.id === activeFilter);
    return cat ? cat.images : [];
  }, [activeFilter]);

  // Lightbox navigation handlers
  const handleOpenLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrevLightbox = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + activeImages.length) % activeImages.length;
    });
  }, [activeImages.length]);

  const handleNextLightbox = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % activeImages.length;
    });
  }, [activeImages.length]);

  // GSAP subtle cinematic reveals
  useGSAPContext(
    () => {
      const mm = gsap.matchMedia();

      // Run animations only when user does not prefer reduced motion
      mm.add(
        '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
        () => {
          const section = sectionRef.current;
          if (!section) return;

          // 1. Reveal intro container
          const intro = section.querySelector(`.${styles.introContainer}`);
          if (intro) {
            gsap.fromTo(
              intro,
              { opacity: 0.5, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: intro,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // 2. Reveal chapters gently
          const chapters = section.querySelectorAll(`.${styles.chapterSection}`);
          chapters.forEach((chapter) => {
            gsap.fromTo(
              chapter,
              { opacity: 0.85, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: chapter,
                  start: 'top 88%',
                  toggleActions: 'play none none none',
                },
              }
            );
          });
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className={styles.gallerySection}
      aria-label="Visual Archive of Maya Garh Pushkar"
    >
      {/* 1. Header & Storytelling Introduction */}
      <GalleryIntro intro={GALLERY_DATA.intro} />

      {/* 2. Accessible Editorial Category Filter Navigation */}
      <GalleryFilters
        categories={GALLERY_DATA.categories}
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />

      {/* 3. Hybrid Editorial Monograph Image Presentation */}
      <EditorialGallery
        categories={GALLERY_DATA.categories}
        allImages={activeImages}
        activeFilter={activeFilter}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* 4. Accessible Quiet Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxIndex !== null}
        images={activeImages}
        currentIndex={lightboxIndex ?? 0}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </section>
  );
};
