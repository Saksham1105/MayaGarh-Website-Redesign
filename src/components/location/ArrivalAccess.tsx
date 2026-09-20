'use client';

import React from 'react';
import Link from 'next/link';
import { AccessPoint, ConciergeArrivalData } from '@/data/location.data';
import styles from './LocationSection.module.css';

interface ArrivalAccessProps {
  accessHeading: string;
  accessTagline: string;
  accessSubtitle: string;
  points: AccessPoint[];
  concierge: ConciergeArrivalData;
}

export const ArrivalAccess: React.FC<ArrivalAccessProps> = ({
  accessHeading,
  accessTagline,
  accessSubtitle,
  points,
  concierge,
}) => {
  return (
    <div className={styles.accessChapter}>
      <div className={styles.container}>
        {/* Chapter 04 — Journey & Access */}
        <header className={styles.chapterHeader}>
          <span className={styles.eyebrow}>{accessTagline}</span>
          <h3 className={styles.chapterTitle}>{accessHeading}</h3>
          <p className={styles.chapterSubtitle}>{accessSubtitle}</p>
        </header>

        {/* Custom Editorial Route Diagram */}
        <div className={styles.routeIllustrationContainer}>
          <div className={styles.routeDiagramTitle}>
            <span>Regional Access Corridor & Arrival Route</span>
          </div>

          {/* Desktop & Tablet Horizontal SVG Flow */}
          <svg
            className={styles.desktopRouteSvg}
            viewBox="0 0 1000 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Editorial transit route from Jaipur to Kishangarh, Ajmer, Nag Pahar, and Maya Garh Pushkar"
            role="img"
          >
            {/* Connecting Base Guideline */}
            <line
              x1="90"
              y1="80"
              x2="910"
              y2="80"
              stroke="rgba(194, 142, 100, 0.3)"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="routePathLine"
            />

            {/* Distance Badges between Nodes */}
            <g transform="translate(190, 48)">
              <rect
                x="-40"
                y="-14"
                width="80"
                height="24"
                rx="2"
                fill="#1C1917"
                stroke="rgba(194, 142, 100, 0.3)"
              />
              <text
                x="0"
                y="2"
                textAnchor="middle"
                fill="#D4AF37"
                fontSize="11"
                fontFamily="var(--font-sans)"
                letterSpacing="0.05em"
              >
                ~105 km
              </text>
            </g>

            <g transform="translate(390, 48)">
              <rect
                x="-36"
                y="-14"
                width="72"
                height="24"
                rx="2"
                fill="#1C1917"
                stroke="rgba(194, 142, 100, 0.3)"
              />
              <text
                x="0"
                y="2"
                textAnchor="middle"
                fill="#D4AF37"
                fontSize="11"
                fontFamily="var(--font-sans)"
                letterSpacing="0.05em"
              >
                ~30 km
              </text>
            </g>

            <g transform="translate(590, 48)">
              <rect
                x="-36"
                y="-14"
                width="72"
                height="24"
                rx="2"
                fill="#1C1917"
                stroke="rgba(194, 142, 100, 0.3)"
              />
              <text
                x="0"
                y="2"
                textAnchor="middle"
                fill="#D4AF37"
                fontSize="11"
                fontFamily="var(--font-sans)"
                letterSpacing="0.05em"
              >
                ~15 km
              </text>
            </g>

            <g transform="translate(790, 48)">
              <rect
                x="-48"
                y="-14"
                width="96"
                height="24"
                rx="2"
                fill="#1C1917"
                stroke="rgba(194, 142, 100, 0.3)"
              />
              <text
                x="0"
                y="2"
                textAnchor="middle"
                fill="#D4AF37"
                fontSize="11"
                fontFamily="var(--font-sans)"
                letterSpacing="0.05em"
              >
                Mountain Pass
              </text>
            </g>

            {/* Node 1: Jaipur */}
            <g transform="translate(90, 80)">
              <circle r="16" fill="#1C1917" stroke="var(--accent-gold)" strokeWidth="2" />
              <circle r="5" fill="var(--accent-gold)" />
              <text
                y="38"
                textAnchor="middle"
                fill="#FDFBF7"
                fontSize="13"
                fontFamily="var(--font-serif)"
                letterSpacing="0.05em"
              >
                Jaipur (JAI)
              </text>
              <text
                y="54"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="10"
                fontFamily="var(--font-sans)"
              >
                ~150 km
              </text>
            </g>

            {/* Node 2: Kishangarh */}
            <g transform="translate(290, 80)">
              <circle r="14" fill="#1C1917" stroke="rgba(194, 142, 100, 0.5)" strokeWidth="1.5" />
              <circle r="4" fill="#D4AF37" />
              <text
                y="38"
                textAnchor="middle"
                fill="#FDFBF7"
                fontSize="13"
                fontFamily="var(--font-serif)"
                letterSpacing="0.05em"
              >
                Kishangarh (KQH)
              </text>
              <text
                y="54"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="10"
                fontFamily="var(--font-sans)"
              >
                ~45 km
              </text>
            </g>

            {/* Node 3: Ajmer */}
            <g transform="translate(490, 80)">
              <circle r="14" fill="#1C1917" stroke="rgba(194, 142, 100, 0.5)" strokeWidth="1.5" />
              <circle r="4" fill="#D4AF37" />
              <text
                y="38"
                textAnchor="middle"
                fill="#FDFBF7"
                fontSize="13"
                fontFamily="var(--font-serif)"
                letterSpacing="0.05em"
              >
                Ajmer Junction (AII)
              </text>
              <text
                y="54"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="10"
                fontFamily="var(--font-sans)"
              >
                ~15 km
              </text>
            </g>

            {/* Node 4: Nag Pahar */}
            <g transform="translate(690, 80)">
              <circle r="12" fill="#1C1917" stroke="rgba(194, 142, 100, 0.35)" strokeWidth="1" />
              <circle r="3" fill="#A89F91" />
              <text
                y="38"
                textAnchor="middle"
                fill="#D6CEC5"
                fontSize="12"
                fontFamily="var(--font-serif)"
                letterSpacing="0.05em"
              >
                Nag Pahar
              </text>
              <text
                y="54"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="10"
                fontFamily="var(--font-sans)"
              >
                Ghati Pass
              </text>
            </g>

            {/* Node 5: Maya Garh (Highlighted Sanctuary Destination) */}
            <g transform="translate(890, 80)">
              <circle
                r="22"
                fill="rgba(194, 142, 100, 0.15)"
                stroke="var(--accent-gold)"
                strokeWidth="1.5"
              />
              <circle r="14" fill="#1C1917" stroke="var(--accent-gold)" strokeWidth="2" />
              <circle r="6" fill="var(--accent-gold)" />
              <text
                y="40"
                textAnchor="middle"
                fill="#FDFBF7"
                fontSize="14"
                fontWeight="500"
                fontFamily="var(--font-serif)"
                letterSpacing="0.05em"
              >
                Maya Garh
              </text>
              <text
                y="56"
                textAnchor="middle"
                fill="var(--accent-gold)"
                fontSize="10"
                fontFamily="var(--font-sans)"
                letterSpacing="0.1em"
              >
                PUSHKAR
              </text>
            </g>
          </svg>

          {/* Mobile Vertical Flow Pathway (<= 768px) */}
          <div className={styles.mobileRouteFlow} aria-hidden="true">
            <div className={styles.mobileRouteStep}>
              <div className={styles.mobileRouteNode} />
              <span className={styles.mobileRouteLabel}>Jaipur International Airport (JAI)</span>
              <span className={styles.mobileRouteDistance}>~150 km · NH48 Expressway</span>
            </div>
            <div className={styles.mobileRouteStep}>
              <div className={styles.mobileRouteNode} />
              <span className={styles.mobileRouteLabel}>Kishangarh Airport (KQH)</span>
              <span className={styles.mobileRouteDistance}>~45 km · Regional Flights</span>
            </div>
            <div className={styles.mobileRouteStep}>
              <div className={styles.mobileRouteNode} />
              <span className={styles.mobileRouteLabel}>Ajmer Junction (AII)</span>
              <span className={styles.mobileRouteDistance}>~15 km · Vande Bharat & Shatabdi</span>
            </div>
            <div className={styles.mobileRouteStep}>
              <div className={styles.mobileRouteNode} />
              <span className={styles.mobileRouteLabel}>Nag Pahar Mountain Pass</span>
              <span className={styles.mobileRouteDistance}>Scenic Ghati Drive</span>
            </div>
            <div className={styles.mobileRouteStep}>
              <div className={`${styles.mobileRouteNode} ${styles.mobileRouteNodeHighlight}`} />
              <span className={styles.mobileRouteLabel}>Maya Garh Pushkar</span>
              <span className={styles.mobileRouteDistance}>Fortress Sanctuary Arrival</span>
            </div>
          </div>
        </div>

        {/* Semantic Accessible Distance Matrix Cards */}
        <div className={styles.accessMatrixGrid}>
          {points.map((point) => (
            <article key={point.id} id={`access-${point.id}`} className={styles.accessCard}>
              <span className={styles.accessHubBadge}>{point.hubType}</span>
              <h4 className={styles.accessHubName}>{point.name}</h4>
              <div className={styles.accessDistance}>{point.distance}</div>
              <p className={styles.accessDetail}>{point.routeDetail}</p>
            </article>
          ))}
        </div>

        {/* Chapter 05 — Arrival & Concierge Assistance */}
        <div className={styles.conciergeChapter}>
          <div className={styles.conciergeCard}>
            <span className={styles.eyebrow}>{concierge.eyebrow}</span>
            <h3 className={styles.conciergeTitle}>{concierge.title}</h3>
            <p className={styles.conciergeDescription}>{concierge.description}</p>

            <div className={styles.ctaButtonWrapper}>
              <Link
                href={concierge.ctaTarget}
                className={styles.ctaLink}
                aria-label="Plan your arrival with the Maya Luxury concierge"
              >
                <span>{concierge.ctaLabel}</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className={styles.conciergeCoordinates}>
              <a
                href={`mailto:${concierge.conciergeEmail}`}
                className={styles.contactCoordinate}
                aria-label={`Email concierge: ${concierge.conciergeEmail}`}
              >
                <span className={styles.coordinateLabel}>Email:</span>
                <span>{concierge.conciergeEmail}</span>
              </a>
              <a
                href={`tel:${concierge.conciergePhone.replace(/\s+/g, '')}`}
                className={styles.contactCoordinate}
                aria-label={`Call concierge: ${concierge.conciergePhone}`}
              >
                <span className={styles.coordinateLabel}>Phone:</span>
                <span>{concierge.conciergePhone}</span>
              </a>
              <span className={styles.contactCoordinate}>
                <span className={styles.coordinateLabel}>Coordinates:</span>
                <span>{concierge.coordinates}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
