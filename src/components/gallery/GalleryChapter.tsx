import React from 'react';
import Image from 'next/image';
import { GalleryCategory, GalleryImageItem } from '@/data/gallery.data';
import styles from './GallerySection.module.css';

interface GalleryChapterProps {
  chapter: GalleryCategory;
  chapterIndex: number;
  allImages: GalleryImageItem[];
  onOpenLightbox: (globalIndex: number) => void;
  isFirstChapter?: boolean;
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

export const GalleryChapter: React.FC<GalleryChapterProps> = ({
  chapter,
  chapterIndex,
  allImages,
  onOpenLightbox,
  isFirstChapter = false,
}) => {
  const chapterNumber = String(chapterIndex + 1).padStart(2, '0');
  const categoryBadgeLabel = CATEGORY_NAMES[chapter.id] || chapter.title;

  const renderPlate = (
    image: GalleryImageItem,
    aspectClass: string,
    sizes: string,
    isPriority: boolean = false
  ) => {
    const globalIndex = allImages.findIndex((img) => img.id === image.id);
    return (
      <figure className={styles.plateFigure} key={image.id}>
        <button
          type="button"
          className={styles.plateTrigger}
          onClick={() => onOpenLightbox(globalIndex >= 0 ? globalIndex : 0)}
          aria-label={`View enlarged archival plate: ${image.title}`}
        >
          <div className={`${styles.plateImageWrapper} ${aspectClass}`}>
            <Image
              src={image.asset.path}
              alt={image.alt}
              fill
              sizes={sizes}
              priority={isPriority}
              loading={isPriority ? 'eager' : 'lazy'}
              className={styles.plateImage}
            />
          </div>
        </button>
        <figcaption className={styles.plateCaption}>
          <p className={styles.plateTitle}>{image.title}</p>
          <span className={styles.plateCategoryBadge}>{categoryBadgeLabel}</span>
        </figcaption>
      </figure>
    );
  };

  /**
   * Render custom asymmetric compositions per chapter
   * Variation is intentional to deliver a hybrid editorial monograph feeling.
   * Ensures all 32 curated plates across all 8 chapters are presented.
   */
  const renderEditorialContent = () => {
    const imgs = chapter.images;

    switch (chapter.id) {
      case 'architecture':
        // Chapter 01: Hero Monolith (1) + Asymmetric Trio (1 large plate + vertical stack of 2 detail plates) = 4 plates
        return (
          <>
            <div className={styles.gridFullHero}>
              {renderPlate(
                imgs[0],
                styles.ratio2x1,
                '(max-width: 768px) 100vw, 100vw',
                isFirstChapter
              )}
            </div>
            {imgs.length > 1 && (
              <div className={styles.gridTrio}>
                {renderPlate(
                  imgs[1],
                  styles.ratio4x3,
                  '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 60vw'
                )}
                {imgs.length > 2 && (
                  <div className={styles.trioStack}>
                    {renderPlate(
                      imgs[2],
                      styles.ratio3x2,
                      '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw'
                    )}
                    {imgs[3] &&
                      renderPlate(
                        imgs[3],
                        styles.ratio3x2,
                        '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw'
                      )}
                  </div>
                )}
              </div>
            )}
          </>
        );

      case 'villas':
        // Chapter 02: Royal Villa Living (8 curated plates)
        // Pair 1 (imgs 0,1) + Asymmetric Trio (imgs 2,3,4) + Pair 2 (imgs 5,6) + Full Hero (img 7)
        return (
          <>
            <div className={styles.gridPair}>
              {renderPlate(imgs[0], styles.ratio3x2, '(max-width: 768px) 100vw, 50vw')}
              {renderPlate(imgs[1], styles.ratio3x2, '(max-width: 768px) 100vw, 50vw')}
            </div>
            <div style={{ height: 'clamp(1.25rem, 2.5vw, 2.5rem)' }} />
            <div className={styles.gridTrio}>
              {renderPlate(
                imgs[2],
                styles.ratio4x3,
                '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 60vw'
              )}
              <div className={styles.trioStack}>
                {renderPlate(
                  imgs[3],
                  styles.ratio3x2,
                  '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw'
                )}
                {renderPlate(
                  imgs[4],
                  styles.ratio3x2,
                  '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw'
                )}
              </div>
            </div>
            <div style={{ height: 'clamp(1.25rem, 2.5vw, 2.5rem)' }} />
            <div className={styles.gridPair}>
              {renderPlate(imgs[5], styles.ratio3x2, '(max-width: 768px) 100vw, 50vw')}
              {renderPlate(imgs[6], styles.ratio3x2, '(max-width: 768px) 100vw, 50vw')}
            </div>
            {imgs[7] && (
              <>
                <div style={{ height: 'clamp(1.25rem, 2.5vw, 2.5rem)' }} />
                <div className={styles.gridFullHero}>
                  {renderPlate(
                    imgs[7],
                    styles.ratio2x1,
                    '(max-width: 768px) 100vw, 100vw'
                  )}
                </div>
              </>
            )}
          </>
        );

      case 'water':
        // Chapter 03: Wide Cinematic Pool Plate + 3-plate Reflection Sequence = 4 plates
        return (
          <>
            <div className={styles.gridFullHero}>
              {renderPlate(
                imgs[0],
                styles.ratio2x1,
                '(max-width: 768px) 100vw, 100vw'
              )}
            </div>
            <div className={styles.gridTrioEqual}>
              {imgs.slice(1).map((img) =>
                renderPlate(
                  img,
                  styles.ratio3x2,
                  '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                )
              )}
            </div>
          </>
        );

      case 'courtyards':
        // Chapter 04: Dynamic Trio (1 leading garden plate + 2 detail insets) = 3 plates
        return (
          <div className={styles.gridTrio}>
            {renderPlate(
              imgs[0],
              styles.ratio4x3,
              '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 60vw'
            )}
            <div className={styles.trioStack}>
              {imgs[1] &&
                renderPlate(
                  imgs[1],
                  styles.ratio3x2,
                  '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw'
                )}
              {imgs[2] &&
                renderPlate(
                  imgs[2],
                  styles.ratio3x2,
                  '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw'
                )}
            </div>
          </div>
        );

      case 'dining':
        // Chapter 05: Wide Banquet Hall Monolith + 2-Plate Tableware Pair = 3 plates
        return (
          <>
            <div className={styles.gridFullHero}>
              {renderPlate(
                imgs[0],
                styles.ratio2x1,
                '(max-width: 768px) 100vw, 100vw'
              )}
            </div>
            <div className={styles.gridPair}>
              {imgs.slice(1).map((img) =>
                renderPlate(
                  img,
                  styles.ratio3x2,
                  '(max-width: 768px) 100vw, 50vw'
                )
              )}
            </div>
          </>
        );

      case 'landscape':
        // Chapter 06: Wide Aravalli Horizon + 2-Plate Mountain Outlook Pair = 3 plates
        return (
          <>
            <div className={styles.gridFullHero}>
              {renderPlate(
                imgs[0],
                styles.ratio2x1,
                '(max-width: 768px) 100vw, 100vw'
              )}
            </div>
            <div className={styles.gridPair}>
              {imgs.slice(1).map((img) =>
                renderPlate(
                  img,
                  styles.ratio3x2,
                  '(max-width: 768px) 100vw, 50vw'
                )
              )}
            </div>
          </>
        );

      case 'twilight':
        // Chapter 07: Atmospheric Dusk Hero + 2-Plate Night Sequence Pair = 3 plates
        return (
          <>
            <div className={styles.gridFullHero}>
              {renderPlate(
                imgs[0],
                styles.ratio2x1,
                '(max-width: 768px) 100vw, 100vw'
              )}
            </div>
            <div className={styles.gridPair}>
              {imgs.slice(1).map((img) =>
                renderPlate(
                  img,
                  styles.ratio3x2,
                  '(max-width: 768px) 100vw, 50vw'
                )
              )}
            </div>
          </>
        );

      case 'details':
        // Chapter 08: Quad Detail Composition (Peacock fresco, Teak headboard, Elder fresco, Brass service) = 4 plates
        return (
          <div className={styles.gridQuad}>
            {imgs.map((img) =>
              renderPlate(
                img,
                styles.ratio1x1,
                '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
              )
            )}
          </div>
        );

      default:
        return (
          <div className={styles.gridPair}>
            {imgs.map((img) =>
              renderPlate(img, styles.ratio3x2, '(max-width: 768px) 100vw, 50vw')
            )}
          </div>
        );
    }
  };

  return (
    <article
      className={styles.chapterSection}
      id={`gallery-chapter-${chapter.id}`}
      aria-labelledby={`gallery-chapter-title-${chapter.id}`}
    >
      <header className={styles.chapterHeader}>
        <div className={styles.chapterEyebrowRow}>
          <span className={styles.chapterNumeral}>CHAPTER {chapterNumber}</span>
        </div>
        <h3
          className={styles.chapterTitle}
          id={`gallery-chapter-title-${chapter.id}`}
        >
          {chapter.title}
        </h3>
        <p className={styles.chapterDescription}>{chapter.description}</p>
      </header>

      {renderEditorialContent()}
    </article>
  );
};
