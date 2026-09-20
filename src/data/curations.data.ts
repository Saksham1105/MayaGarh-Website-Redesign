/**
 * Maya Garh Experiential Curations — Data Layer
 * 100% verified source content grounded in authentic property architecture and photography.
 * Pure data module — Zero UI components, styling, animation, or viewport logic.
 */

import { ASSET_MAP, PropertyImageAsset } from './assets.data';

export interface CurationData {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  locationType: 'Property-Based' | 'Destination-Based';
  primaryAsset: PropertyImageAsset;
  highlights: string[];
  sourceVerification: string;
}

export const CURATIONS_DATA: CurationData[] = [
  {
    id: 'desert-sundowner',
    numeral: '01',
    title: 'Pushkar Desert Dune Sundowners',
    subtitle: 'Private Twilight Canopy in the Thar Desert',
    description:
      'As dusk settles over the golden dunes of Pushkar, retreat to a secluded private canopy pitched upon the desert sands. Lit by the warm glow of candle lanterns and flaming torches beneath the vast desert sky, experience twilight tranquility, refreshments, and unobstructed panoramic views of the horizon.',
    category: 'Desert & Dunes',
    locationType: 'Destination-Based',
    primaryAsset: ASSET_MAP.CURATION_SUNDOWNER,
    highlights: [
      'Secluded open-air desert dune canopy',
      'Handcrafted floor bolsters and traditional low seating',
      'Atmospheric candlelight and torch illumination',
      'Panoramic Thar desert sunset views',
    ],
    sourceVerification:
      'Verified by authentic property photography unnamed (4).webp and official build specification.',
  },
  {
    id: 'veranda-dining',
    numeral: '02',
    title: 'Royal Veranda & Courtyard Dining',
    subtitle: 'Artisanal High-Tea & Private Courtly Service',
    description:
      'Savor authentic Rajasthani hospitality and artisanal refreshment from the privacy of your stone-arched veranda. Framed by classical jharokha arches looking across the royal pool deck and the Aravalli hills, each dining moment features traditional hammered brass tea service, fresh seasonal fruits, and quiet courtly ambiance.',
    category: 'Artisanal Dining',
    locationType: 'Property-Based',
    primaryAsset: ASSET_MAP.CURATION_DINING,
    highlights: [
      'Private stone veranda and courtyard settings',
      'Traditional hammered brass kettle and tea service',
      'Panoramic pool and Aravalli mountain views',
      'Handcrafted teak furnishings and quiet courtly privacy',
    ],
    sourceVerification:
      'Verified by authentic property photography MAYA-GARH-PUSHKAR45-1030x687.webp and official build specification.',
  },
  {
    id: 'royal-infinity-pool',
    numeral: '03',
    title: 'The Royal Infinity Pool & Sun Terrace',
    subtitle: 'Elevated Horizon Swimming & Twilight Reflection',
    description:
      'Perched along the fortress battlements, the royal infinity pool provides an elevated sanctuary where crystal waters mirror the rugged skyline of the Aravalli mountains. Lounge on traditional woven charpais beneath shaded umbrellas by day, or witness evening stillness as candlelit lanterns cast shimmering amber reflections across the water.',
    category: 'Pool & Leisure',
    locationType: 'Property-Based',
    primaryAsset: ASSET_MAP.CURATION_POOL,
    highlights: [
      'Elevated infinity pool overlooking the Aravalli hills',
      'Evening lantern illumination along the stone terrace',
      'Traditional woven charpai loungers and shaded colonnade',
      'Fortress battlement vantage point above the valley',
    ],
    sourceVerification:
      'Verified by authentic property photography MAYA-GARH-PUSHKAR55-1030x687.webp, MAYA-GARH-PUSHKAR48-1030x687.webp, and official build specification.',
  },
  {
    id: 'courtyard-sanctuary',
    numeral: '04',
    title: 'Courtyard Oasis & Heritage Grounds',
    subtitle: 'Shaded Stone Pavilions & Restorative Courtyard Peace',
    description:
      'Wander through tranquil estate grounds paved with heritage stone, palm-fringed lawns, and antique hammered copper surahi vessels. Rooted in classical Rajasthani courtyard architecture, shaded alcoves with cushioned seating invite unhurried reflection, conversation, and quiet contemplation amidst Pushkar’s serene mountain air.',
    category: 'Sanctuary Grounds',
    locationType: 'Property-Based',
    primaryAsset: ASSET_MAP.CURATION_COURTYARD,
    highlights: [
      'Shaded garden courtyard with checkerboard stone pavers',
      'Antique copper surahi urns and heritage stonework',
      'Deep arched stone alcoves with plush seating bolsters',
      'Peaceful oasis atmosphere framed by mountain breezes',
    ],
    sourceVerification:
      'Verified by authentic property photography unnamed (2).webp and official build specification.',
  },
];
