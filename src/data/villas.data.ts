/**
 * Maya Garh Royal Villa Collection — Data Layer
 * 100% verified source content derived from official build specification.
 * Pure data module — Zero UI components, styling, animation, or viewport logic.
 */

import { ASSET_MAP, PropertyImageAsset } from './assets.data';

export interface VillaData {
  id: string;
  number: string;
  name: string;
  narrative: string;
  rateDisplay: string;
  ctaLabel: string;
  primaryAsset: PropertyImageAsset;
}

export const VILLAS_DATA: VillaData[] = [
  {
    id: 'maha-maya',
    number: '01',
    name: 'Maha Maya',
    narrative:
      'Indulge in the opulence of Maha Maya, where grandeur and elegance take center stage.',
    rateDisplay: 'Enquire for Rates',
    ctaLabel: 'Enquire for Maha Maya',
    primaryAsset: ASSET_MAP.VILLA_MAHA_MAYA_HERO,
  },
  {
    id: 'amanjena',
    number: '02',
    name: 'Amanjena',
    narrative:
      'Amanjena embodies a peaceful paradise, offering a taste of utmost luxury.',
    rateDisplay: 'Enquire for Rates',
    ctaLabel: 'Enquire for Amanjena',
    primaryAsset: ASSET_MAP.VILLA_AMANJENA_HERO,
  },
  {
    id: 'malak',
    number: '03',
    name: 'Malak',
    narrative:
      'Malak, the villa fit for an angel or king, exudes regal splendor and divine beauty.',
    rateDisplay: 'Enquire for Rates',
    ctaLabel: 'Enquire for Malak',
    primaryAsset: ASSET_MAP.VILLA_MALAK_HERO,
  },
  {
    id: 'adiva',
    number: '04',
    name: 'Adiva',
    narrative:
      'Adiva, with its pleasant and gentle aura, creates an environment that provides immeasurable pleasure and comfort.',
    rateDisplay: 'Enquire for Rates',
    ctaLabel: 'Enquire for Adiva',
    primaryAsset: ASSET_MAP.VILLA_ADIVA_HERO,
  },
  {
    id: 'ameera',
    number: '05',
    name: 'Ameera',
    narrative:
      'Ameera, a name befitting a princess or leader, promises a royal experience that will leave you feeling like true royalty.',
    rateDisplay: 'Enquire for Rates',
    ctaLabel: 'Enquire for Ameera',
    primaryAsset: ASSET_MAP.VILLA_AMEERA_HERO,
  },
  {
    id: 'mayan',
    number: '06',
    name: 'Mayan',
    narrative:
      'Mayan, with its connection to the Mayan people, embraces the rich cultural heritage and invokes a sense of mystique and fascination.',
    rateDisplay: 'Enquire for Rates',
    ctaLabel: 'Enquire for Mayan',
    primaryAsset: ASSET_MAP.VILLA_MAYAN_HERO,
  },
];
