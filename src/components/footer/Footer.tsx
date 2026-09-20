'use client';

import React from 'react';
import { useLenis } from '@/animation/LenisProvider';
import { RESERVATION_DATA } from '@/data/reservation.data';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { lenis } = useLenis();

  const handleBackToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Sanctuary Colophon and Directory">
      <div className={styles.footerContainer}>
        {/* Main 4-Column Directory Grid */}
        <div className={styles.directoryGrid}>
          {/* Column 1: Brand & Heritage */}
          <div className={styles.brandColumn}>
            <div className={styles.brandHeader}>
              <svg
                className={styles.crestIcon}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M20 2L24.5 15.5H38L27 23.5L31.5 37L20 28.5L8.5 37L13 23.5L2 15.5H15.5L20 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <span className={styles.brandTitle}>MAYA GARH</span>
                <span className={styles.brandSubtitle}>PUSHKAR</span>
              </div>
            </div>

            <p className={styles.brandDescription}>
              A Royal Sanctuary in Pushkar, Rajasthan. Six signature private pool residences
              framed by the primordial Aravalli Range.
            </p>

            <span className={styles.brandAttribution}>A Maya Luxury Property</span>
          </div>

          {/* Column 2: The Sanctuary Navigation */}
          <div className={styles.navColumn}>
            <h4 className={styles.columnTitle}>THE SANCTUARY</h4>
            <ul className={styles.navList}>
              <li>
                <a href="#prologue" className={styles.navLink}>
                  Sanctuary
                </a>
              </li>
              <li>
                <a href="#villas" className={styles.navLink}>
                  The Villas
                </a>
              </li>
              <li>
                <a href="#curations" className={styles.navLink}>
                  Curations
                </a>
              </li>
              <li>
                <a href="#location" className={styles.navLink}>
                  Location & Setting
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Celebrations & Archive Navigation */}
          <div className={styles.navColumn}>
            <h4 className={styles.columnTitle}>CELEBRATIONS</h4>
            <ul className={styles.navList}>
              <li>
                <a href="#weddings" className={styles.navLink}>
                  Weddings & Buyouts
                </a>
              </li>
              <li>
                <a href="#gallery" className={styles.navLink}>
                  Visual Archive
                </a>
              </li>
              <li>
                <a href="#accolades" className={styles.navLink}>
                  Accolades
                </a>
              </li>
              <li>
                <a href="#reservation" className={styles.navLink}>
                  Reservation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Concierge Channels */}
          <div className={styles.conciergeColumn}>
            <h4 className={styles.columnTitle}>CONCIERGE</h4>
            <div className={styles.conciergeDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Reservations</span>
                <a
                  href={`tel:${RESERVATION_DATA.channels.phone.primaryTel}`}
                  className={styles.contactValue}
                >
                  {RESERVATION_DATA.channels.phone.primaryDisplay}
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Direct Line</span>
                <a
                  href={`tel:${RESERVATION_DATA.channels.phone.secondaryTel}`}
                  className={styles.contactValue}
                >
                  {RESERVATION_DATA.channels.phone.secondaryDisplay}
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Reservations Email</span>
                <a
                  href={`mailto:${RESERVATION_DATA.channels.email.reservationEmail}`}
                  className={styles.contactValue}
                >
                  {RESERVATION_DATA.channels.email.reservationEmail}
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>General Inquiries</span>
                <a
                  href={`mailto:${RESERVATION_DATA.channels.email.helloEmail}`}
                  className={styles.contactValue}
                >
                  {RESERVATION_DATA.channels.email.helloEmail}
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>WhatsApp Concierge</span>
                <a
                  href={`https://wa.me/${RESERVATION_DATA.channels.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                >
                  Message Concierge
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className={styles.colophonBar}>
          <div className={styles.colophonInfo}>
            <p className={styles.addressText}>
              Bhagwanpura, Pushkar, Rajasthan — 305001
            </p>
            <p className={styles.copyrightText}>
              © {currentYear} Maya Luxury. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            onClick={handleBackToTop}
            className={styles.backToTopButton}
            aria-label="Scroll to top of sanctuary page"
          >
            <span>Back to Top</span>
            <span className={styles.backToTopArrow} aria-hidden="true">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
