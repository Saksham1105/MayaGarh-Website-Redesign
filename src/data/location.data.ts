/**
 * Maya Garh Location & Setting — Data Layer
 * 100% verified source content grounded in authentic geography,
 * Rajasthan Tourism records, and property asset documentation.
 *
 * PURE DATA MODULE — Zero JSX, CSS, GSAP, or component logic.
 */

import { ASSET_MAP, PropertyImageAsset } from './assets.data';

export interface LocationIntroData {
  eyebrow: string;
  headline: string;
  tagline: string;
  description: string;
  geographicMeta: string;
  address: string;
  heroAsset: PropertyImageAsset;
}

export interface LandscapeFeature {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  description: string;
  asset: PropertyImageAsset;
}

export interface SacredDestination {
  id: string;
  numeral: string;
  title: string;
  category: string;
  distanceLabel: string;
  description: string;
  asset?: PropertyImageAsset;
  hasVisualSeal: boolean;
}

export interface AccessPoint {
  id: string;
  name: string;
  hubType: 'Aviation' | 'Domestic Airport' | 'Express Rail' | 'Capital Corridor';
  distance: string;
  routeDetail: string;
}

export interface ConciergeArrivalData {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaTarget: string;
  conciergeEmail: string;
  conciergePhone: string;
  conciergeAltPhone: string;
  coordinates: string;
  addressSummary: string;
}

export interface LocationSectionData {
  intro: LocationIntroData;
  landscapeDialogue: {
    heading: string;
    subtitle: string;
    features: LandscapeFeature[];
  };
  sacredHorizons: {
    heading: string;
    tagline: string;
    subtitle: string;
    destinations: SacredDestination[];
  };
  access: {
    heading: string;
    tagline: string;
    subtitle: string;
    points: AccessPoint[];
  };
  concierge: ConciergeArrivalData;
}

export const LOCATION_DATA: LocationSectionData = {
  intro: {
    eyebrow: 'THE SETTING',
    headline: 'Where the Aravallis Meet the Desert Stillness',
    tagline: 'An Ancient Sacred Valley Framed by Primordial Mountains',
    description:
      'Set amidst the peaceful countryside of Bhagwanpura within the sacred Pushkar valley of Rajasthan, Maya Garh is an authentic private fortress sanctuary. Situated quietly outside the town’s spiritual bustle, the estate rests in a fertile valley basin enclosed by date palms, rose fields, and the rugged granite crests of the ancient Aravalli Range.',
    geographicMeta: 'PUSHKAR · AJMER DISTRICT · RAJASTHAN',
    address: 'Khasra No. 983, 987, 979, 988, Bhagwanpura, Pushkar, Ajmer, Rajasthan — 305001',
    heroAsset: ASSET_MAP.LOCATION_PANORAMA,
  },
  landscapeDialogue: {
    heading: 'An Oasis Between Mountain and Dune',
    subtitle:
      'A harmonious sanctuary where primordial granite formations temper desert winds, creating a peaceful micro-climate across the fortress grounds.',
    features: [
      {
        id: 'aravalli-nag-pahar',
        numeral: '01',
        title: 'The Ancient Aravalli Range & Nag Pahar',
        subtitle: 'Natural Mountain Bastions & Desert Sunset Vistas',
        description:
          'Rising dramatically along the valley horizon, the ancient Aravalli mountains—among the most primordial geological systems in the world—form a sheltering basin for Pushkar. The prominent granite massif of Nag Pahar (Snake Mountain) stands between Pushkar and Ajmer, channeling restorative mountain breezes across the royal pool terrace and illuminating the evening sky with amber reflections.',
        asset: ASSET_MAP.LOCATION_ARAVALLI_VISTA,
      },
      {
        id: 'pushkar-countryside',
        numeral: '02',
        title: 'Pushkar Countryside & Farmland Seclusion',
        subtitle: 'Rural Serenity Removed from the Pilgrim Hustle',
        description:
          'Tucked within the rural agrarian pocket of Bhagwanpura, Maya Garh is surrounded by traditional farmland, indigenous acacia, and flowering orchards. The property offers an unhurried, private fortress experience where birdsong and mountain stillness replace urban commotion, while remaining within effortless reach of Pushkar’s sacred center.',
        asset: ASSET_MAP.LOCATION_VALLEY_TERRACE,
      },
    ],
  },
  sacredHorizons: {
    heading: 'Sacred Horizons',
    tagline: 'Beyond the Fortress Ramparts',
    subtitle:
      'Revered for millennia as a timeless sacred realm, the surrounding Pushkar landscape reveals legendary water sanctuaries, revered temples, and open desert dunes.',
    destinations: [
      {
        id: 'pushkar-lake',
        numeral: '01',
        title: 'Pushkar Lake & The 52 Ghats',
        category: 'Beyond the Estate · ~10–15 Minutes',
        distanceLabel: '~10–15 Mins Drive',
        description:
          'A sacred semi-circular water sanctuary surrounded by 52 historical bathing ghats and hundreds of whitewashed temples. Revered as Tirtha Raj (the king of pilgrimage waters), where evening Maha Aarti resonates with temple bells, Vedic chants, and floating brass oil lamps at twilight.',
        hasVisualSeal: true,
      },
      {
        id: 'brahma-temple',
        numeral: '02',
        title: 'Jagatpita Brahma Temple',
        category: 'Within Pushkar · ~10–15 Minutes',
        distanceLabel: '~10–15 Mins Drive',
        description:
          'The most prominent and historically venerated sanctuary dedicated to Lord Brahma in India. Easily identified by its distinct 14th-century red spire (shikhara), silver-inlaid marble floor, and sacred swan (hamsa) motif, standing as the spiritual core of the ancient pilgrimage route.',
        hasVisualSeal: true,
      },
      {
        id: 'desert-dunes',
        numeral: '03',
        title: 'Pushkar Desert Dunes & Sundowners',
        category: 'Fringes of the Thar · Bespoke Excursion',
        distanceLabel: 'Private Excursion',
        description:
          'Where the farmland softens into rolling golden desert dunes, retreat to an intimate private canopy pitched on the sands. Lit by glowing candle lanterns and flaming torches beneath the desert stars, enjoy artisanal refreshments and panoramic sunset tranquility.',
        asset: ASSET_MAP.LOCATION_DESERT_SUNDOWNER,
        hasVisualSeal: false,
      },
    ],
  },
  access: {
    heading: 'Reaching the Royal Sanctuary',
    tagline: 'Seamless Regional Transit & Highway Connectivity',
    subtitle:
      'Conveniently connected by smooth national expressways, rapid railway corridors, and regional airports across Rajasthan.',
    points: [
      {
        id: 'jaipur-airport',
        name: 'Jaipur International Airport (JAI)',
        hubType: 'Aviation',
        distance: '~150 km',
        routeDetail: '6-Lane National Highway 48 corridor connecting directly to Pushkar.',
      },
      {
        id: 'kishangarh-airport',
        name: 'Kishangarh Airport (KQH)',
        hubType: 'Domestic Airport',
        distance: '~45 km',
        routeDetail: 'The closest regional domestic airport with direct flights into Ajmer district.',
      },
      {
        id: 'ajmer-junction',
        name: 'Ajmer Junction Railway Station (AII)',
        hubType: 'Express Rail',
        distance: '~15 km',
        routeDetail:
          'Direct Vande Bharat and Shatabdi express links from Delhi and Jaipur, followed by a scenic mountain pass drive across Nag Pahar.',
      },
      {
        id: 'delhi-corridor',
        name: 'New Delhi Corridor',
        hubType: 'Capital Corridor',
        distance: '~400 km',
        routeDetail: 'Accessible via the Western Dedicated corridor and national expressway network.',
      },
    ],
  },
  concierge: {
    eyebrow: 'BESPOKE CONCIERGE ASSISTANCE',
    title: 'A Bespoke Welcome',
    description:
      'All arrivals and regional transfers can be tailored through the Maya Luxury concierge. Private chauffeur transfers from Jaipur International Airport, Kishangarh Airport, or Ajmer Junction are arranged directly upon request to ensure seamless transit to the fortress gates.',
    ctaLabel: 'PLAN YOUR ARRIVAL',
    ctaTarget: '#reservation',
    conciergeEmail: 'hello@mayaluxury.in',
    conciergePhone: '+91 98290 71817',
    conciergeAltPhone: '+91 72970 29153',
    coordinates: '26.4907° N, 74.5511° E',
    addressSummary: 'Bhagwanpura, Pushkar, District Ajmer, Rajasthan — 305001',
  },
};
