import { ASSET_MAP, PropertyImageAsset } from './assets.data';

/**
 * Gallery Image Item Interface
 */
export interface GalleryImageItem {
  id: string;
  assetKey: keyof typeof ASSET_MAP;
  asset: PropertyImageAsset;
  category: GalleryCategoryId;
  title: string;
  alt: string;
  orientation: 'landscape' | 'portrait' | 'square';
  priority?: boolean;
}

export type GalleryCategoryId =
  | 'architecture'
  | 'villas'
  | 'water'
  | 'courtyards'
  | 'dining'
  | 'landscape'
  | 'twilight'
  | 'details';

export interface GalleryCategory {
  id: GalleryCategoryId;
  title: string;
  description: string;
  images: GalleryImageItem[];
}

export interface GallerySectionData {
  intro: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    description: string;
    metadataBadge: string;
  };
  categories: GalleryCategory[];
  featuredSequence: GalleryImageItem[];
  allImages: GalleryImageItem[];
}

const RAW_GALLERY_ITEMS: GalleryImageItem[] = [
  {
    id: 'img-arch-panorama',
    assetKey: 'GALLERY_FORT_PANORAMA',
    asset: ASSET_MAP.GALLERY_FORT_PANORAMA,
    category: 'architecture' as GalleryCategoryId,
    title: 'Fortress Monolith in the Aravalli Basin',
    alt: 'Panoramic architectural view of Maya Garh fortress surrounded by the Aravalli mountains',
    orientation: 'landscape',
    priority: true
  },
  {
    id: 'img-arch-facade',
    assetKey: 'GALLERY_FORT_FACADE',
    asset: ASSET_MAP.GALLERY_FORT_FACADE,
    category: 'architecture' as GalleryCategoryId,
    title: 'Grand Bastion Entrance & Ceremonial Stairs',
    alt: 'Monumental sandstone fortress facade and towering bastions with grand entrance stairs',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-arch-colonnade',
    assetKey: 'GALLERY_MARBLE_COLONNADE',
    asset: ASSET_MAP.GALLERY_MARBLE_COLONNADE,
    category: 'architecture' as GalleryCategoryId,
    title: 'Colonnaded Marble Courtyard Arches',
    alt: 'Classical Rajasthani scalloped marble arches and shaded courtyard colonnades',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-arch-portal',
    assetKey: 'GALLERY_ARCH_PASSAGE',
    asset: ASSET_MAP.GALLERY_ARCH_PASSAGE,
    category: 'architecture' as GalleryCategoryId,
    title: 'Heritage Portal with Scalloped Passage',
    alt: 'Arched stone passage with red silk curtains and antique Rajasthani carved mirror',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-villa-blue-salon',
    assetKey: 'GALLERY_BLUE_ROYAL_SALON',
    asset: ASSET_MAP.GALLERY_BLUE_ROYAL_SALON,
    category: 'villas' as GalleryCategoryId,
    title: 'Palatial Salon with Draped Stone Arches',
    alt: 'Royal living salon with powder blue walls, stone arches, pink silk drapes, and carved teak furnishings',
    orientation: 'landscape',
    priority: true
  },
  {
    id: 'img-villa-peacock-suite',
    assetKey: 'GALLERY_MAUVE_PEACOCK_SUITE',
    asset: ASSET_MAP.GALLERY_MAUVE_PEACOCK_SUITE,
    category: 'villas' as GalleryCategoryId,
    title: 'The Royal Peacock Master Suite',
    alt: 'Expansive master bedroom with pink plaster walls, hand-carved peacock headboard, and terrace French doors',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-villa-mustard-suite',
    assetKey: 'GALLERY_MUSTARD_HERITAGE_SUITE',
    asset: ASSET_MAP.GALLERY_MUSTARD_HERITAGE_SUITE,
    category: 'villas' as GalleryCategoryId,
    title: 'Heritage Suite in Ochre & Cobalt',
    alt: 'Mustard yellow royal bedroom with cobalt blue arched wall niches, red bedspread, and exposed timber ceiling',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-villa-teal-horizon',
    assetKey: 'GALLERY_TEAL_HORIZON_BEDROOM',
    asset: ASSET_MAP.GALLERY_TEAL_HORIZON_BEDROOM,
    category: 'villas' as GalleryCategoryId,
    title: 'Teal Bedroom Suite Overlooking Horizons',
    alt: 'Teal master bedroom with open balcony doors framing the distant mountain horizon',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-villa-split-lounge',
    assetKey: 'GALLERY_SPLIT_LEVEL_LOUNGE',
    asset: ASSET_MAP.GALLERY_SPLIT_LEVEL_LOUNGE,
    category: 'villas' as GalleryCategoryId,
    title: 'Double-Height Living Salon & Stone Staircase',
    alt: 'Split-level living lounge with pink velvet seating, exposed timber beams, and masonry stairs',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-villa-rose-salon',
    assetKey: 'GALLERY_ROSE_SALON',
    asset: ASSET_MAP.GALLERY_ROSE_SALON,
    category: 'villas' as GalleryCategoryId,
    title: 'Dusty Rose Living Room with Heritage Niches',
    alt: 'Dusty rose villa living room with red plush seating, geometric Dhurrie rug, and carved alcoves',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-villa-blue-fireplace',
    assetKey: 'GALLERY_BLUE_FIREPLACE_SALON',
    asset: ASSET_MAP.GALLERY_BLUE_FIREPLACE_SALON,
    category: 'villas' as GalleryCategoryId,
    title: 'Royal Blue Salon with Stone Fireplace',
    alt: 'Royal blue living salon with antique carved stone fireplace, velvet armchairs, and brass lantern',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-villa-terrace-room',
    assetKey: 'GALLERY_TERRACE_BEDROOM',
    asset: ASSET_MAP.GALLERY_TERRACE_BEDROOM,
    category: 'villas' as GalleryCategoryId,
    title: 'Sunlit Bedroom Opening to Valley Terrace',
    alt: 'Warm bedroom with red bedspread and picture windows opening directly onto an outdoor stone terrace',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-water-sunlit-pool',
    assetKey: 'GALLERY_SUNLIT_INFINITY_POOL',
    asset: ASSET_MAP.GALLERY_SUNLIT_INFINITY_POOL,
    category: 'water' as GalleryCategoryId,
    title: 'Royal Infinity Pool under Desert Skies',
    alt: 'Sunlit royal infinity pool with red sun parasols, carved stone colonnades, and Aravalli mountain backdrop',
    orientation: 'landscape',
    priority: true
  },
  {
    id: 'img-water-private-plunge',
    assetKey: 'GALLERY_PRIVATE_PLUNGE_POOL',
    asset: ASSET_MAP.GALLERY_PRIVATE_PLUNGE_POOL,
    category: 'water' as GalleryCategoryId,
    title: 'Private Villa Indoor Plunge Pool',
    alt: 'Private indoor plunge pool with azure ceramic tiles and picture window framing the Aravalli peaks',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-water-pool-terrace',
    assetKey: 'GALLERY_POOL_TERRACE_ARCHES',
    asset: ASSET_MAP.GALLERY_POOL_TERRACE_ARCHES,
    category: 'water' as GalleryCategoryId,
    title: 'Colonnaded Pool Terrace & Mountain Crests',
    alt: 'Carved sandstone colonnade arches framing the royal pool terrace and distant granite peaks',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-water-garden-plunge',
    assetKey: 'GALLERY_VILLA_PLUNGE_GARDEN',
    asset: ASSET_MAP.GALLERY_VILLA_PLUNGE_GARDEN,
    category: 'water' as GalleryCategoryId,
    title: 'Outdoor Villa Plunge Pool & Pergola',
    alt: 'Golden hour sunlight on private stone plunge pools, thatched shade pergolas, and villa terraces',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-court-lawn-urns',
    assetKey: 'GALLERY_COURTYARD_LAWN_URNS',
    asset: ASSET_MAP.GALLERY_COURTYARD_LAWN_URNS,
    category: 'courtyards' as GalleryCategoryId,
    title: 'Courtyard Lawn with Traditional Copper Urns',
    alt: 'Lush green courtyard lawn with traditional copper surahi urns, checkerboard paving, and mountain vista',
    orientation: 'square',
    priority: false
  },
  {
    id: 'img-court-alcove',
    assetKey: 'GALLERY_SHADED_COURTYARD_ALCOVE',
    asset: ASSET_MAP.GALLERY_SHADED_COURTYARD_ALCOVE,
    category: 'courtyards' as GalleryCategoryId,
    title: 'Shaded Stone Courtyard with Floor Bolsters',
    alt: 'Shaded stone courtyard alcove with plush cushions, stone paving, and antique teak doors',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-court-valley-terrace',
    assetKey: 'GALLERY_VALLEY_TERRACE_CHARPAI',
    asset: ASSET_MAP.GALLERY_VALLEY_TERRACE_CHARPAI,
    category: 'courtyards' as GalleryCategoryId,
    title: 'Upper Battlement Terrace with Charpais',
    alt: 'Elevated fortress terrace with charpai daybeds overlooking the Pushkar valley and Aravalli hills',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-dining-rajwada-hall',
    assetKey: 'GALLERY_RAJWADA_BANQUET',
    asset: ASSET_MAP.GALLERY_RAJWADA_BANQUET,
    category: 'dining' as GalleryCategoryId,
    title: 'The Rajwada Royal Feast & Banquet Hall',
    alt: 'Royal banquet hall with hand-carved wooden pillars, timber-beamed ceilings, and formal dining tables',
    orientation: 'landscape',
    priority: true
  },
  {
    id: 'img-dining-veranda-tea',
    assetKey: 'GALLERY_VERANDA_HIGH_TEA',
    asset: ASSET_MAP.GALLERY_VERANDA_HIGH_TEA,
    category: 'dining' as GalleryCategoryId,
    title: 'Veranda Dining with Traditional Brassware',
    alt: 'Stone veranda dining table with traditional brass tea service overlooking the pool and Aravalli hills',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-dining-camel-corridor',
    assetKey: 'GALLERY_CAMEL_DINING_CORRIDOR',
    asset: ASSET_MAP.GALLERY_CAMEL_DINING_CORRIDOR,
    category: 'dining' as GalleryCategoryId,
    title: 'Heritage Dining Corridor with Desert Fresco',
    alt: 'Long dining gallery corridor featuring a traditional camel mural and crimson runner rug',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-land-nag-pahar',
    assetKey: 'GALLERY_NAG_PAHAR_VISTA',
    asset: ASSET_MAP.GALLERY_NAG_PAHAR_VISTA,
    category: 'landscape' as GalleryCategoryId,
    title: 'Nag Pahar Mountain Vistas from Living Suite',
    alt: 'Villa panoramic view through glass French doors framing the granite crest of Nag Pahar',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-land-valley-terrace',
    assetKey: 'GALLERY_VALLEY_VIEW_TERRACE',
    asset: ASSET_MAP.GALLERY_VALLEY_VIEW_TERRACE,
    category: 'landscape' as GalleryCategoryId,
    title: 'Verdant Pushkar Orchards & Mountain Horizon',
    alt: 'Terrace doorway from living room framing rural Pushkar date orchards and rugged mountain peaks',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-land-aravalli-lounge',
    assetKey: 'GALLERY_ARAVALLI_LOUNGE_VISTA',
    asset: ASSET_MAP.GALLERY_ARAVALLI_LOUNGE_VISTA,
    category: 'landscape' as GalleryCategoryId,
    title: 'Living Lounge Framing the Ancient Ridge',
    alt: 'Villa living lounge with sliding doors framing the rugged granite crests of the Aravalli range',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-twilight-illumination',
    assetKey: 'GALLERY_NIGHT_ILLUMINATION',
    asset: ASSET_MAP.GALLERY_NIGHT_ILLUMINATION,
    category: 'twilight' as GalleryCategoryId,
    title: 'The Fortified Estate Illuminated at Night',
    alt: 'Full panoramic night illumination of Maya Garh with warm golden floodlights against dark mountain horizon',
    orientation: 'landscape',
    priority: true
  },
  {
    id: 'img-twilight-desert-torches',
    assetKey: 'GALLERY_DESERT_DUNE_TORCHES',
    asset: ASSET_MAP.GALLERY_DESERT_DUNE_TORCHES,
    category: 'twilight' as GalleryCategoryId,
    title: 'Pushkar Desert Dunes Sundowner & Flaming Torches',
    alt: 'Private desert dune canopy dining setup with torches and candle lanterns under twilight skies',
    orientation: 'square',
    priority: false
  },
  {
    id: 'img-twilight-pool-dusk',
    assetKey: 'GALLERY_STARLIT_POOL_DUSK',
    asset: ASSET_MAP.GALLERY_STARLIT_POOL_DUSK,
    category: 'twilight' as GalleryCategoryId,
    title: 'Starlit Infinity Pool with Candlelit Lanterns',
    alt: 'Starlit royal infinity pool terrace with candlelit lanterns, charpais, and draped stone arches at dusk',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-detail-peacock-mural',
    assetKey: 'GALLERY_PEACOCK_HEADBOARD_MURAL',
    asset: ASSET_MAP.GALLERY_PEACOCK_HEADBOARD_MURAL,
    category: 'details' as GalleryCategoryId,
    title: 'Hand-Painted Miniature Peacock Murals',
    alt: 'Intricate twin peacock headboard murals painted in classical Rajasthani miniature tradition',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-detail-elder-fresco',
    assetKey: 'GALLERY_RAJASTHANI_ELDER_FRESCO',
    asset: ASSET_MAP.GALLERY_RAJASTHANI_ELDER_FRESCO,
    category: 'details' as GalleryCategoryId,
    title: 'Rajasthani Courtyard Fresco & Antique Doors',
    alt: 'Wall fresco portrait of a turbaned Rajasthani elder beside antique studded timber doors',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-detail-teak-headboard',
    assetKey: 'GALLERY_CARVED_TEAK_HEADBOARD',
    asset: ASSET_MAP.GALLERY_CARVED_TEAK_HEADBOARD,
    category: 'details' as GalleryCategoryId,
    title: 'Deep-Relief Floral Carved Teak Headboard',
    alt: 'Deep-relief floral carved teakwood headboard with draped red silk archway',
    orientation: 'landscape',
    priority: false
  },
  {
    id: 'img-detail-brass-service',
    assetKey: 'GALLERY_BRASS_TEA_SERVICE',
    asset: ASSET_MAP.GALLERY_BRASS_TEA_SERVICE,
    category: 'details' as GalleryCategoryId,
    title: 'Handcrafted Brass & Copper Tableware',
    alt: 'Traditional Rajasthani handcrafted brass tea set and copper vessels on a carved wooden table',
    orientation: 'landscape',
    priority: false
  },
];

export const GALLERY_DATA: GallerySectionData = {
  intro: {
    eyebrow: 'VISUAL MONOGRAPH',
    headline: 'A Living Chronicle of Stone and Light',
    subheadline: 'The Photographic Archive of Maya Garh Pushkar',
    description:
      'Explore the private royal sanctuary through an edited collection of authentic architecture, secluded courtyard terraces, palatial villa interiors, and the ancient mountain horizons of Pushkar.',
    metadataBadge: '32 ARCHIVAL PLATES · RAJASTHAN',
  },
  categories: [
    {
      id: 'architecture' as GalleryCategoryId,
      title: 'Architecture & Bastions',
      description: 'Monumental sandstone battlements, crenelated ramparts, grand stone stairways, and colonnaded arches.',
      images: RAW_GALLERY_ITEMS.filter(img => ['img-arch-panorama', 'img-arch-facade', 'img-arch-colonnade', 'img-arch-portal'].includes(img.id)),
    },
    {
      id: 'villas' as GalleryCategoryId,
      title: 'Royal Villa Living',
      description: 'Palatial private suites, hand-painted murals, scalloped alcoves, split-level living salons, and sunlit private terraces.',
      images: RAW_GALLERY_ITEMS.filter(img => ['img-villa-blue-salon', 'img-villa-peacock-suite', 'img-villa-mustard-suite', 'img-villa-teal-horizon', 'img-villa-split-lounge', 'img-villa-rose-salon', 'img-villa-blue-fireplace', 'img-villa-terrace-room'].includes(img.id)),
    },
    {
      id: 'water' as GalleryCategoryId,
      title: 'Pools & Reflections',
      description: 'The royal infinity pool, tranquil private indoor plunge pools, and starlit water reflections against granite crests.',
      images: RAW_GALLERY_ITEMS.filter(img => ['img-water-sunlit-pool', 'img-water-private-plunge', 'img-water-pool-terrace', 'img-water-garden-plunge'].includes(img.id)),
    },
    {
      id: 'courtyards' as GalleryCategoryId,
      title: 'Courtyards & Gardens',
      description: 'Lush manicured lawns, traditional copper surahi urns, shaded stone alcoves, and elevated battlement terraces.',
      images: RAW_GALLERY_ITEMS.filter(img => ['img-court-lawn-urns', 'img-court-alcove', 'img-court-valley-terrace'].includes(img.id)),
    },
    {
      id: 'dining' as GalleryCategoryId,
      title: 'Feasts & Tableware',
      description: 'The Rajwada banquet hall, veranda high-tea, heritage dining corridors, and handcrafted Rajasthani brass service.',
      images: RAW_GALLERY_ITEMS.filter(img => ['img-dining-rajwada-hall', 'img-dining-veranda-tea', 'img-dining-camel-corridor'].includes(img.id)),
    },
    {
      id: 'landscape' as GalleryCategoryId,
      title: 'Aravalli Vistas',
      description: 'Rugged granite peaks of the Aravalli range, sacred Nag Pahar, and verdant Pushkar date palm orchards.',
      images: RAW_GALLERY_ITEMS.filter(img => ['img-land-nag-pahar', 'img-land-valley-terrace', 'img-land-aravalli-lounge'].includes(img.id)),
    },
    {
      id: 'twilight' as GalleryCategoryId,
      title: 'Twilight & Lanterns',
      description: 'Blue hour courtyard illuminations, flaming torches across desert dunes, and glowing candlelit ramparts.',
      images: RAW_GALLERY_ITEMS.filter(img => ['img-twilight-illumination', 'img-twilight-desert-torches', 'img-twilight-pool-dusk'].includes(img.id)),
    },
    {
      id: 'details' as GalleryCategoryId,
      title: 'Artisanal Craftsmanship',
      description: 'Handcrafted miniature peacock frescoes, deep-relief floral carved teak, brass vessels, and heritage Dhurrie weaves.',
      images: RAW_GALLERY_ITEMS.filter(img => ['img-detail-peacock-mural', 'img-detail-elder-fresco', 'img-detail-teak-headboard', 'img-detail-brass-service'].includes(img.id)),
    },
  ],
  featuredSequence: ['img-arch-panorama', 'img-arch-facade', 'img-arch-colonnade', 'img-villa-blue-salon', 'img-villa-peacock-suite', 'img-villa-mustard-suite', 'img-villa-split-lounge', 'img-court-lawn-urns', 'img-court-alcove', 'img-water-sunlit-pool', 'img-water-private-plunge', 'img-water-pool-terrace', 'img-dining-rajwada-hall', 'img-dining-veranda-tea', 'img-land-nag-pahar', 'img-land-valley-terrace', 'img-twilight-desert-torches', 'img-twilight-pool-dusk', 'img-twilight-illumination', 'img-detail-peacock-mural', 'img-detail-elder-fresco', 'img-detail-brass-service'].map(
    id => RAW_GALLERY_ITEMS.find(img => img.id === id)!
  ),
  allImages: RAW_GALLERY_ITEMS,
};
