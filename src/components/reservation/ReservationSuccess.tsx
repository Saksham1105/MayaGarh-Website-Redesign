import React from 'react';
import { RESERVATION_DATA } from '@/data/reservation.data';
import styles from './ReservationSection.module.css';

export interface FormPayload {
  fullName: string;
  email: string;
  phone: string;
  enquiryType: string;
  arrivalDate: string;
  departureDate: string;
  villaPreference: string;
  notes: string;
}

interface ReservationSuccessProps {
  payload: FormPayload;
  onReset: () => void;
}

export const ReservationSuccess: React.FC<ReservationSuccessProps> = ({
  payload,
  onReset,
}) => {
  const { channels } = RESERVATION_DATA;

  // Selected villa title
  const selectedVilla =
    RESERVATION_DATA.villas.find((v) => v.id === payload.villaPreference)?.name ||
    'No Preference';

  // Selected enquiry type label
  const selectedType =
    RESERVATION_DATA.enquiryTypes.find((t) => t.id === payload.enquiryType)
      ?.label || 'Villa Stay';

  // Compose formatted enquiry message
  const compiledMessage = [
    `Hello Maya Luxury Concierge,`,
    `I would like to submit a reservation enquiry for Maya Garh Pushkar:`,
    `- Guest Name: ${payload.fullName}`,
    `- Contact Email: ${payload.email}`,
    `- Phone / WhatsApp: ${payload.phone}`,
    `- Enquiry Type: ${selectedType}`,
    payload.arrivalDate ? `- Arrival Date: ${payload.arrivalDate}` : null,
    payload.departureDate ? `- Departure Date: ${payload.departureDate}` : null,
    payload.villaPreference ? `- Villa Preference: ${selectedVilla}` : null,
    payload.notes ? `- Personal Notes: ${payload.notes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const waUrl = `https://wa.me/${channels.whatsapp.number}?text=${encodeURIComponent(
    compiledMessage
  )}`;

  const mailtoSubject = `${selectedType} Enquiry — ${payload.fullName} (Maya Garh Pushkar)`;
  const mailtoUrl = `mailto:${
    channels.email.reservationEmail
  }?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(
    compiledMessage
  )}`;

  return (
    <div className={styles.successContainer} role="region" aria-label="Enquiry Summary">
      <div className={styles.successHeader}>
        <span className={styles.successBadge}>ENQUIRY COMPILED</span>
        <h3 className={styles.successTitle}>Your Concierge Request is Ready</h3>
        <p className={styles.successSubtitle}>
          We have composed your stay details for direct transmission to the Maya
          Luxury reservation hosts. Please dispatch your enquiry via your
          preferred channel below for immediate personal attention.
        </p>
      </div>

      <div className={styles.summaryCard}>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Guest Name</span>
          <span className={styles.summaryValue}>{payload.fullName}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Enquiry Intent</span>
          <span className={styles.summaryValue}>{selectedType}</span>
        </div>
        {(payload.arrivalDate || payload.departureDate) && (
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Dates</span>
            <span className={styles.summaryValue}>
              {payload.arrivalDate || 'Flexible'} →{' '}
              {payload.departureDate || 'Flexible'}
            </span>
          </div>
        )}
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Villa Preference</span>
          <span className={styles.summaryValue}>{selectedVilla}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Contact</span>
          <span className={styles.summaryValue}>
            {payload.phone} · {payload.email}
          </span>
        </div>
      </div>

      <div className={styles.successActions}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.dispatchWhatsappButton}
          aria-label="Transmit compiled enquiry directly to WhatsApp Concierge"
        >
          <span className={styles.actionIcon} aria-hidden="true">
            💬
          </span>
          <span>DISPATCH VIA WHATSAPP</span>
          <span className={styles.arrowIcon} aria-hidden="true">
            →
          </span>
        </a>

        <a
          href={mailtoUrl}
          className={styles.dispatchEmailButton}
          aria-label="Open email client with pre-filled enquiry details"
        >
          <span className={styles.actionIcon} aria-hidden="true">
            ✉️
          </span>
          <span>DISPATCH VIA EMAIL</span>
          <span className={styles.arrowIcon} aria-hidden="true">
            →
          </span>
        </a>

        <div className={styles.editRow}>
          <button
            type="button"
            onClick={onReset}
            className={styles.editButton}
            aria-label="Edit enquiry information"
          >
            ← Modify Enquiry Details
          </button>
        </div>
      </div>
    </div>
  );
};
