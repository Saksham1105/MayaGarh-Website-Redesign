'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPContext } from '@/animation/useGSAPContext';
import { ReservationIntro } from './ReservationIntro';
import { ConciergeChannels } from './ConciergeChannels';
import { ReservationForm } from './ReservationForm';
import { ReservationSuccess, FormPayload } from './ReservationSuccess';
import { RESERVATION_DATA } from '@/data/reservation.data';
import styles from './ReservationSection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ReservationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const channelsRef = useRef<HTMLDivElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormPayload>({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: 'villa-stay',
    arrivalDate: '',
    departureDate: '',
    villaPreference: 'no-preference',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Parse contextual intent from URL hash or query params
  const parseContextualIntent = useCallback(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash || '';
    const search = window.location.search || '';
    const fullParams = `${hash.includes('?') ? hash.split('?')[1] : ''}&${
      search.startsWith('?') ? search.slice(1) : search
    }`;

    const urlParams = new URLSearchParams(fullParams);
    const intentParam = urlParams.get('intent')?.toLowerCase();
    const villaParam = urlParams.get('villa')?.toLowerCase();

    let resolvedIntent = 'villa-stay';
    if (intentParam === 'wedding' || intentParam === 'destination-wedding') {
      resolvedIntent = 'destination-wedding';
    } else if (
      intentParam === 'celebration' ||
      intentParam === 'private-celebration'
    ) {
      resolvedIntent = 'private-celebration';
    } else if (intentParam === 'stay' || intentParam === 'villa-stay') {
      resolvedIntent = 'villa-stay';
    }

    let resolvedVilla = 'no-preference';
    if (villaParam) {
      const match = RESERVATION_DATA.villas.find(
        (v) =>
          v.id === villaParam ||
          v.name.toLowerCase().replace(/\s+/g, '-') === villaParam
      );
      if (match) {
        resolvedVilla = match.id;
        resolvedIntent = 'villa-stay';
      }
    }

    setFormData((prev) => ({
      ...prev,
      enquiryType: resolvedIntent,
      villaPreference: resolvedVilla,
    }));
  }, []);

  useEffect(() => {
    parseContextualIntent();
    window.addEventListener('hashchange', parseContextualIntent);
    return () => window.removeEventListener('hashchange', parseContextualIntent);
  }, [parseContextualIntent]);

  const handleFieldChange = <K extends keyof FormPayload>(
    field: K,
    value: FormPayload[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // GSAP animations
  useGSAPContext(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const section = sectionRef.current;
        if (!section) return;

        // Left wing intro & channels reveal
        const leftTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });

        leftTimeline
          .fromTo(
            eyebrowRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' }
          )
          .fromTo(
            headingRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out' },
            '-=0.45'
          )
          .fromTo(
            textRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
            '-=0.5'
          )
          .fromTo(
            channelsRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            '-=0.4'
          );

        // Right wing form wrapper reveal
        if (formWrapperRef.current) {
          gsap.fromTo(
            formWrapperRef.current,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: formWrapperRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="reservation"
      ref={sectionRef}
      className={styles.section}
      aria-label="Reservation and Bespoke Concierge"
    >
      {/* Anchor alias for #booking routes */}
      <div id="booking" aria-hidden="true" style={{ position: 'absolute', top: 0 }} />

      <div className={styles.inner}>
        {/* Left Wing: Intro & Direct Concierge Touchpoints */}
        <div className={styles.leftWing}>
          <ReservationIntro
            eyebrowRef={eyebrowRef}
            headingRef={headingRef}
            textRef={textRef}
          />

          <ConciergeChannels
            currentIntent={formData.enquiryType}
            channelsRef={channelsRef}
          />
        </div>

        {/* Right Wing: Enquiry Form or Success Confirmation */}
        <div ref={formWrapperRef} className={styles.rightWing}>
          {isSubmitted ? (
            <ReservationSuccess
              payload={formData}
              onReset={() => setIsSubmitted(false)}
            />
          ) : (
            <ReservationForm
              formData={formData}
              onChange={handleFieldChange}
              onSubmitSuccess={() => setIsSubmitted(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
};
