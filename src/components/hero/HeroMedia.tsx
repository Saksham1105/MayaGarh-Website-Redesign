'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroMedia.module.css';
import { ASSET_MAP } from '@/data/assets.data';

interface HeroMediaProps {
  imageRef?: React.Ref<HTMLDivElement>;
}

export const HeroMedia: React.FC<HeroMediaProps> = ({ imageRef }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imageAsset = isMobile ? ASSET_MAP.HERO_MOBILE : ASSET_MAP.HERO_DESKTOP;

  return (
    <div className={styles.mediaContainer}>
      <div ref={imageRef} className={styles.heroImageWrapper}>
        <Image
          key={imageAsset.path}
          src={imageAsset.path}
          alt={imageAsset.altText}
          fill
          priority
          sizes="100vw"
          quality={90}
          className={styles.heroImageDesktop}
        />
      </div>
      <div className={styles.vignetteOverlay} aria-hidden="true" />
      <div className={styles.bottomGradient} aria-hidden="true" />
    </div>
  );
};
