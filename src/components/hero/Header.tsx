'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <a href="/" className={styles.brandLink} aria-label="Maya Garh Pushkar Home">
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
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>MAYA GARH</span>
            <span className={styles.brandSubtitle}>PUSHKAR</span>
          </div>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary Sanctuary Navigation">
          <ul className={styles.navList}>
            <li>
              <a href="#prologue" className={styles.navLink}>
                Sanctuary
              </a>
            </li>
            <li>
              <a href="#villas" className={styles.navLink}>
                Villas
              </a>
            </li>
            <li>
              <a href="#curations" className={styles.navLink}>
                Curations
              </a>
            </li>
            <li>
              <a href="#weddings" className={styles.navLink}>
                Weddings
              </a>
            </li>
            <li>
              <a href="#location" className={styles.navLink}>
                Location
              </a>
            </li>
            <li>
              <a href="#gallery" className={styles.navLink}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#accolades" className={styles.navLink}>
                Accolades
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <a href="#reservation" className={styles.ctaButton}>
            Enquire for Rates
          </a>

          <button
            className={styles.mobileMenuTrigger}
            onClick={toggleMobileMenu}
            aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileOpen}
          >
            <svg className={styles.menuIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isMobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${isMobileOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!isMobileOpen}
      >
        <nav aria-label="Mobile Sanctuary Navigation">
          <ul className={styles.mobileNavList}>
          <li>
            <a href="#prologue" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Sanctuary
            </a>
          </li>
          <li>
            <a href="#villas" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Villas
            </a>
          </li>
          <li>
            <a href="#curations" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Curations
            </a>
          </li>
          <li>
            <a href="#weddings" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Weddings
            </a>
          </li>
          <li>
            <a href="#location" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Location
            </a>
          </li>
          <li>
            <a href="#gallery" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#accolades" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Accolades
            </a>
          </li>
          <li className={styles.mobileCtaItem}>
            <a
              href="#reservation"
              className={styles.ctaButton}
              onClick={closeMobileMenu}
            >
              Enquire for Rates
            </a>
          </li>
        </ul>
        </nav>
      </div>
    </>
  );
};
