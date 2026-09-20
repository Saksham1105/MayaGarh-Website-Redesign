import React from 'react';
import { ACCOLADES_DATA } from '@/data/accolades.data';
import styles from './AccoladesSection.module.css';

interface AccoladesIntroProps {
  eyebrowRef?: React.Ref<HTMLParagraphElement>;
  headingRef?: React.Ref<HTMLHeadingElement>;
  monographRef?: React.Ref<HTMLParagraphElement>;
}

export const AccoladesIntro: React.FC<AccoladesIntroProps> = ({
  eyebrowRef,
  headingRef,
  monographRef,
}) => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introLeft}>
        <p ref={eyebrowRef} className={styles.eyebrow}>
          {ACCOLADES_DATA.eyebrow}
        </p>
        <h2 ref={headingRef} className={styles.heading}>
          {ACCOLADES_DATA.heading}
        </h2>
      </div>

      <div className={styles.introRight}>
        <p ref={monographRef} className={styles.monographDesktop}>
          {ACCOLADES_DATA.monograph.desktop}
        </p>
        <p className={styles.monographMobile}>
          {ACCOLADES_DATA.monograph.mobile}
        </p>
      </div>
    </div>
  );
};
