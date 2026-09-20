import React from 'react';
import { RESERVATION_DATA } from '@/data/reservation.data';
import styles from './ReservationSection.module.css';

interface ConciergeChannelsProps {
  currentIntent?: string;
  channelsRef?: React.Ref<HTMLDivElement>;
}

export const ConciergeChannels: React.FC<ConciergeChannelsProps> = ({
  currentIntent = 'villa-stay',
  channelsRef,
}) => {
  const { channels } = RESERVATION_DATA;

  // Contextual WhatsApp prefilled message
  const waMessage =
    currentIntent === 'destination-wedding'
      ? channels.whatsapp.weddingMessage
      : channels.whatsapp.stayMessage;

  const waUrl = `https://wa.me/${channels.whatsapp.number}?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <div ref={channelsRef} className={styles.channelsBlock}>
      {/* Primary WhatsApp Direct Concierge */}
      <div className={styles.primaryChannelCard}>
        <div className={styles.channelMetaHeader}>
          <span className={styles.channelTypeBadge}>DIRECT CONCIERGE</span>
          <span className={styles.channelStatus}>On-Ground Host</span>
        </div>

        <p className={styles.channelPhoneDisplay}>{channels.whatsapp.display}</p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
          aria-label={`WhatsApp Maya Luxury Concierge at ${channels.whatsapp.display}`}
        >
          <span className={styles.whatsappIcon} aria-hidden="true">
            💬
          </span>
          <span>{channels.whatsapp.ctaLabel}</span>
          <span className={styles.arrowIcon} aria-hidden="true">
            →
          </span>
        </a>
      </div>

      {/* Secondary Direct Contact Lines */}
      <div className={styles.secondaryChannelsGrid}>
        {/* Telephone Lines */}
        <div className={styles.contactItem}>
          <span className={styles.contactLabel}>{channels.phone.label}</span>
          <a
            href={`tel:${channels.phone.primaryTel}`}
            className={styles.contactValueLink}
            aria-label={`Call Reservations at ${channels.phone.primaryDisplay}`}
          >
            {channels.phone.primaryDisplay}
          </a>
        </div>

        <div className={styles.contactItem}>
          <span className={styles.contactLabel}>
            {channels.phone.secondaryLabel}
          </span>
          <a
            href={`tel:${channels.phone.secondaryTel}`}
            className={styles.contactValueLink}
            aria-label={`Call Direct Line at ${channels.phone.secondaryDisplay}`}
          >
            {channels.phone.secondaryDisplay}
          </a>
        </div>

        {/* Email Addresses */}
        <div className={styles.contactItem}>
          <span className={styles.contactLabel}>RESERVATION DESK</span>
          <a
            href={`mailto:${channels.email.reservationEmail}?subject=${encodeURIComponent(
              channels.email.reservationSubject
            )}`}
            className={styles.contactValueLink}
            aria-label={`Email Reservations at ${channels.email.reservationEmail}`}
          >
            {channels.email.reservationEmail}
          </a>
        </div>

        <div className={styles.contactItem}>
          <span className={styles.contactLabel}>GENERAL ENQUIRIES</span>
          <a
            href={`mailto:${channels.email.helloEmail}?subject=${encodeURIComponent(
              channels.email.helloSubject
            )}`}
            className={styles.contactValueLink}
            aria-label={`Email General Concierge at ${channels.email.helloEmail}`}
          >
            {channels.email.helloEmail}
          </a>
        </div>
      </div>
    </div>
  );
};
