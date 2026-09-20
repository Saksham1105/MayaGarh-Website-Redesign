import React from 'react';
import { RESERVATION_DATA } from '@/data/reservation.data';
import styles from './ReservationSection.module.css';

interface ReservationIntroProps {
  eyebrowRef?: React.Ref<HTMLParagraphElement>;
  headingRef?: React.Ref<HTMLHeadingElement>;
  textRef?: React.Ref<HTMLParagraphElement>;
}

export const ReservationIntro: React.FC<ReservationIntroProps> = ({
  eyebrowRef,
  headingRef,
  textRef,
}) => {
  return (
    <div className={styles.introBlock}>
      <p ref={eyebrowRef} className={styles.eyebrow}>
        {RESERVATION_DATA.eyebrow}
      </p>
      <h2 ref={headingRef} className={styles.heading}>
        {RESERVATION_DATA.heading}
      </h2>
      <p ref={textRef} className={styles.supportingText}>
        {RESERVATION_DATA.supportingText}
      </p>
      <div className={styles.conciergeNotice}>
        <span className={styles.noticeDot} aria-hidden="true" />
        <p className={styles.noticeText}>{RESERVATION_DATA.conciergeNotice}</p>
      </div>
    </div>
  );
};
