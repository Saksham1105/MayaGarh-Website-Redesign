import React from 'react';
import { GalleryCategory, GalleryCategoryId, GalleryImageItem } from '@/data/gallery.data';
import { GalleryChapter } from './GalleryChapter';
import styles from './GallerySection.module.css';

interface EditorialGalleryProps {
  categories: GalleryCategory[];
  allImages: GalleryImageItem[];
  activeFilter: 'all' | GalleryCategoryId;
  onOpenLightbox: (globalIndex: number) => void;
}

export const EditorialGallery: React.FC<EditorialGalleryProps> = ({
  categories,
  allImages,
  activeFilter,
  onOpenLightbox,
}) => {
  const displayedCategories =
    activeFilter === 'all'
      ? categories
      : categories.filter((cat) => cat.id === activeFilter);

  return (
    <div className={styles.galleryContent}>
      {displayedCategories.map((chapter, index) => {
        // Find actual index in original categories array for proper chapter numbering (01 to 08)
        const originalIndex = categories.findIndex((c) => c.id === chapter.id);
        const isFirstChapter = index === 0;

        return (
          <GalleryChapter
            key={chapter.id}
            chapter={chapter}
            chapterIndex={originalIndex >= 0 ? originalIndex : index}
            allImages={allImages}
            onOpenLightbox={onOpenLightbox}
            isFirstChapter={isFirstChapter}
          />
        );
      })}
    </div>
  );
};
