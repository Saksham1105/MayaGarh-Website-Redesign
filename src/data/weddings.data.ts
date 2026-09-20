/**
 * Maya Garh Destination Weddings & Celebrations — Data Layer
 * 100% verified source content grounded in authentic property architecture,
 * Maya Luxury official documentation, and verified estate photography.
 *
 * PURE DATA MODULE — Zero JSX, CSS, GSAP, or component logic.
 */

import { ASSET_MAP, PropertyImageAsset } from './assets.data';

export interface CelebrationSpace {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  description: string;
  imageKey: string;
  asset: PropertyImageAsset;
  locationType: 'Property-Based' | 'Destination-Based';
  verified: boolean;
  verificationSource: string;
}

export interface WeddingModel {
  id: string;
  title: string;
  description: string;
  details: string[];
  verificationNote: string;
}

export interface MultiDayStoryData {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface WeddingCTAData {
  label: string;
  target: string;
  supportingText: string;
  conciergeEmail: string;
  conciergePhone: string;
}

export interface WeddingSectionData {
  eyebrow: string;
  title: string;
  tagline: string;
  introduction: string;
  heroAsset: PropertyImageAsset;
  celebrationSpaces: CelebrationSpace[];
  weddingModels: WeddingModel[];
  multiDayStory: MultiDayStoryData;
  cta: WeddingCTAData;
}

export const WEDDINGS_DATA: WeddingSectionData = {
  eyebrow: 'DESTINATION WEDDINGS & ROYAL CELEBRATIONS',
  title: 'Destination Weddings',
  tagline: 'A Private Royal Fortress for Intimate Sacred Union',
  introduction:
    'Set against the rugged silhouette of the Aravalli hills and the stillness of the Pushkar countryside, Maya Garh offers an authentic private fortress for intimate destination celebrations. Grounded in principles of unhurried living, discretion, and exclusivity, the estate provides a secluded royal residence where families and wedding parties gather in absolute privacy for multi-day ceremonial journeys.',
  heroAsset: ASSET_MAP.WEDDINGS_HERO_PANORAMA,
  celebrationSpaces: [
    {
      id: 'central-courtyard',
      numeral: '01',
      title: 'Central Stone Courtyard & Heritage Lawns',
      subtitle: 'Open-Air Ceremonies Surrounded by Fortified Bastions',
      description:
        'A spacious sandstone courtyard and garden lawn framed by towering fort ramparts and date palms. The setting can be shaped around intimate ceremonies and starlit open-air gatherings, featuring ambient lantern illumination along classical stone arches.',
      imageKey: 'WEDDINGS_TWILIGHT_COURTYARD',
      asset: ASSET_MAP.WEDDINGS_TWILIGHT_COURTYARD,
      locationType: 'Property-Based',
      verified: true,
      verificationSource:
        'Verified by authentic courtyard photography unnamed (3).webp and property architectural survey.',
    },
    {
      id: 'infinity-pool-terrace',
      numeral: '02',
      title: 'Royal Infinity Pool & Colonnaded Terrace',
      subtitle: 'Elevated Battlements Overlooking the Desert Horizon',
      description:
        'An elevated terrace flanking the royal swimming pool with sweeping views across the valley toward the Aravalli range. Draped stone colonnades and floating candlelit lanterns create an evocative architectural backdrop for evening gatherings, acoustic music, and twilight cocktail receptions.',
      imageKey: 'WEDDINGS_POOL_SOIRÉE',
      asset: ASSET_MAP.WEDDINGS_POOL_SOIRÉE,
      locationType: 'Property-Based',
      verified: true,
      verificationSource:
        'Verified by authentic property photography MAYA-GARH-PUSHKAR55-1030x687.webp.',
    },
    {
      id: 'rajwada-banquet-hall',
      numeral: '03',
      title: 'Rajwada Heritage Royal Banquet Hall',
      subtitle: 'Indoor Celebratory Feasting & Courtly Hospitality',
      description:
        'An authentic indoor banquet and dining facility featuring exposed timber beams, hand-carved wooden columns, and antique amber glass lamps. Designed for royal feasting and formal banquets, providing seamless transition to adjoining verandas and courtyards.',
      imageKey: 'WEDDINGS_ROYAL_BANQUET',
      asset: ASSET_MAP.WEDDINGS_ROYAL_BANQUET,
      locationType: 'Property-Based',
      verified: true,
      verificationSource:
        'Verified by official facility records and authentic photography 3-2.webp and MAYA-GARH-PUSHKAR22-1030x687.webp.',
    },
    {
      id: 'fort-facade-ramparts',
      numeral: '04',
      title: 'Fort Façade & Sandstone Ramparts',
      subtitle: 'Monolithic Architecture for Ceremonial Arrivals',
      description:
        'The monumental sandstone entrance portal, crenelated bastions, and grand stone stairs provide an imposing heritage setting for ceremonial arrivals, traditional procession entries, and architectural portraiture.',
      imageKey: 'WEDDINGS_FORT_FACADE',
      asset: ASSET_MAP.WEDDINGS_FORT_FACADE,
      locationType: 'Property-Based',
      verified: true,
      verificationSource:
        'Verified by authentic property entrance photography unnamed.webp.',
    },
    {
      id: 'private-villa-enclave',
      numeral: '05',
      title: 'The Royal Villa Enclave',
      subtitle: 'Exclusive Estate Residency Across Six Private Pool Sanctuaries',
      description:
        'Six palatial private villas—Maha Maya, Amanjena, Malak, Adiva, Ameera, and Mayan—serve as the private enclave for the wedding party. Each villa features independent living salons, bedrooms, private plunge pools, and sun terraces, ensuring secluded bridal preparations and restful sanctuary throughout the celebration.',
      imageKey: 'WEDDINGS_ESTATE_BUYOUT',
      asset: ASSET_MAP.WEDDINGS_ESTATE_BUYOUT,
      locationType: 'Property-Based',
      verified: true,
      verificationSource:
        'Verified by approved six-villa collection architecture and authentic photography unnamed (5).webp.',
    },
  ],
  weddingModels: [
    {
      id: 'fully-curated',
      title: 'Fully Curated Wedding Solutions',
      description:
        'A comprehensive celebration model where Maya Luxury’s on-ground team coordinates logistics, guest accommodations across the private villas, and bespoke celebratory dining throughout the estate.',
      details: [
        'Dedicated on-ground operational coordination across the fort estate',
        'Guest accommodation management across the six private pool villas',
        'Bespoke culinary curation and courtly feasting in the Rajwada hall',
        'Coordinated multi-day celebration logistics and estate staffing',
      ],
      verificationNote:
        'Approved language: "fully curated, all-inclusive wedding solutions" and "on-ground teams for logistics, guest accommodation, and catering".',
    },
    {
      id: 'venue-only-rental',
      title: 'Venue-Only Rental',
      description:
        'An exclusive fort buyout model offering wedding planners, independent creative directors, and couples complete architectural freedom to shape their own bespoke production across the estate.',
      details: [
        'Exclusive takeover of versatile indoor and outdoor celebration spaces',
        'Complete flexibility for external event designers and production teams',
        'Total seclusion of the 22-acre private estate grounds for the wedding party',
        'Direct coordination with property leadership for seamless technical execution',
      ],
      verificationNote:
        'Approved language: "venue-only rental" and "versatile event spaces suitable for both traditional and contemporary wedding designs".',
    },
  ],
  multiDayStory: {
    title: 'A Multi-Day Celebration Journey',
    tagline: 'Unhurried Living in a Private Royal Residence',
    description:
      'Maya Garh is inherently designed for multi-day celebrations where time slows down. From ceremonial arrivals beneath the fortress ramparts to twilight vows in the central courtyard and celebratory feasts in the Rajwada banquet hall, the estate allows families to celebrate without the constraints or interruptions of a public hotel. Surrounded by desert flora and ancient mountain silhouettes, every moment unfolds at an unhurried, royal pace.',
    highlights: [
      'Multi-day ceremonial flow without public hotel interruptions',
      'Exclusive estate buyout ensuring complete privacy for the wedding party',
      'Versatile spatial movement from sunlit lawns to starlit poolside terraces',
      'Atmosphere of authentic Rajasthani heritage and courtly hospitality',
    ],
  },
  cta: {
    label: 'Enquire for Weddings',
    target: '#reservation?intent=wedding',
    supportingText:
      'All wedding and celebration inquiries are handled through personal consultation with the Maya Luxury concierge to craft an itinerary tailored to your vision.',
    conciergeEmail: 'hello@mayaluxury.in',
    conciergePhone: '+91 98290 71817',
  },
};
