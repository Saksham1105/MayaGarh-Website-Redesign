/**
 * Maya Garh Pushkar — Sanctuary Trust & Guest Chronicles Data
 * Grounded strictly in Phase 9A.1 hardened evidence from ACCOLADES_RESEARCH.md.
 * Zero fabricated awards, zero star icons, zero invented testimonials, zero unsupported counts.
 */

export interface GuestRatingItem {
  id: string;
  platform: string;
  score: string;
  scale: string;
  reviewsContext?: string;
  timestamp: string;
  directUrl: string;
  ariaLabel: string;
}

export interface ArchitecturalStatement {
  id: string;
  label: string;
  statement: string;
}

export interface AccoladesData {
  eyebrow: string;
  heading: string;
  monograph: {
    desktop: string;
    mobile: string;
  };
  ratings: GuestRatingItem[];
  architecturalStatements: ArchitecturalStatement[];
  visualAsset: {
    path: string;
    altText: string;
    caption: string;
    width: number;
    height: number;
  };
}

export const ACCOLADES_DATA: AccoladesData = {
  eyebrow: 'SANCTUARY VOICES & RECOGNITION',
  heading: 'Quiet Solitude, Attested by Guests',
  monograph: {
    desktop:
      'Concealed within the quiet rural folds of the Pushkar valley, Maya Garh was conceived as a private royal sanctuary rather than a conventional hotel. Framed by the sacred contours of Nag Pahar and the ancient Aravalli range, the retreat unfolds across monolithic stone courtyards, secluded jali verandas, and private pool villas. Here, amidst the whisper of desert winds and handcrafted Rajasthani stone finishes, seclusion is not merely an amenity—it is the guiding principle of living.',
    mobile:
      'Concealed in the Pushkar valley beneath Nag Pahar and the Aravalli hills, Maya Garh unfolds across stone courtyards, jali verandas, and private pool villas. Handcrafted Rajasthani finishes and absolute seclusion define the sanctuary.',
  },
  ratings: [
    {
      id: 'agoda',
      platform: 'AGODA',
      score: '4.8',
      scale: '/ 5.0',
      timestamp: 'Accessed September 2026',
      directUrl: 'https://www.agoda.com',
      ariaLabel: 'Guest rating: 4.8 out of 5.0 on Agoda, accessed September 2026',
    },
    {
      id: 'goibibo',
      platform: 'GOIBIBO',
      score: '4.4',
      scale: '/ 5.0',
      reviewsContext: '14 guest reviews',
      timestamp: '14 reviews · Accessed September 2026',
      directUrl: 'https://www.goibibo.com',
      ariaLabel:
        'Guest rating: 4.4 out of 5.0 on Goibibo based on 14 guest reviews, accessed September 2026',
    },
    {
      id: 'makemytrip',
      platform: 'MAKEMYTRIP',
      score: '4.2',
      scale: '/ 5.0',
      timestamp: 'Accessed September 2026',
      directUrl: 'https://www.makemytrip.com',
      ariaLabel:
        'Guest rating: 4.2 out of 5.0 on MakeMyTrip, accessed September 2026',
    },
  ],
  architecturalStatements: [
    {
      id: 'setting',
      label: 'THE SETTING',
      statement: 'Private pool villas set against the Aravalli hills and Nag Pahar',
    },
    {
      id: 'architecture',
      label: 'THE ARCHITECTURE',
      statement:
        'Concentric fortress design featuring stone jali screens, central courtyards, and handcrafted Rajasthani finishes',
    },
    {
      id: 'heritage',
      label: 'THE HERITAGE',
      statement:
        'A boutique sanctuary within the Maya Luxury collection of desert and wilderness retreats in Rajasthan',
    },
  ],
  visualAsset: {
    path: '/images/MAYA-GARH-PUSHKAR10-1030x687.webp',
    altText:
      'Shaded stone courtyard alcove with antique teak doors and handcrafted masonry at Maya Garh',
    caption: 'Monolithic stone courtyards & jali passages',
    width: 1030,
    height: 687,
  },
};
