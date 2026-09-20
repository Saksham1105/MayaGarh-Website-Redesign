/**
 * Maya Garh Property Photography Asset Registry
 * Strict mapping derived directly from approved build specification.
 * Zero fabricated filenames or placeholder paths.
 */

export interface PropertyImageAsset {
  filename: string;
  path: string;
  section: string;
  usage: string;
  altText: string;
}

export const ASSET_MAP: Record<string, PropertyImageAsset> = {
  HERO_DESKTOP: {
    filename: 'MAYA-GARH-PUSHKAR57.webp',
    path: '/images/MAYA-GARH-PUSHKAR57.webp',
    section: 'Hero Experience',
    usage: 'Main Desktop Hero Background',
    altText: 'Maya Garh Pushkar royal courtyard framed by Aravalli mountains',
  },
  HERO_MOBILE: {
    filename: 'unnamed (5).webp',
    path: '/images/unnamed (5).webp',
    section: 'Hero Experience',
    usage: 'Alternate Mobile Hero Framing',
    altText: 'Maya Garh sanctuary entry archway and courtyard',
  },
  PROLOGUE_PRIMARY: {
    filename: 'MAYA-GARH-PUSHKAR53-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR53-1030x687.webp',
    section: 'Prologue Narrative',
    usage: 'Main Courtyard Architecture Image',
    altText: 'Marble courtyard architecture and shaded colonnades at Maya Garh',
  },
  PROLOGUE_DETAIL: {
    filename: '1-2.webp',
    path: '/images/1-2.webp',
    section: 'Prologue Narrative',
    usage: 'Secondary Editorial Architectural Detail Image',
    altText: 'Hand-carved Rajasthani stone archway and courtyard passage detail',
  },
  VILLA_MAHA_MAYA_HERO: {
    filename: 'MAYA-GARH-PUSHKAR57.webp',
    path: '/images/MAYA-GARH-PUSHKAR57.webp',
    section: 'Villa Collection',
    usage: 'Maha Maya Villa Primary Hero Card',
    altText: 'Maha Maya Villa terrace and Aravalli mountain backdrop',
  },
  VILLA_AMANJENA_HERO: {
    filename: 'MAYA-GARH-PUSHKAR19-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR19-1030x687.webp',
    section: 'Villa Collection',
    usage: 'Amanjena Villa Primary Hero Card',
    altText: 'Amanjena Villa private courtly entrance',
  },
  VILLA_MALAK_HERO: {
    filename: 'MAYA-GARH-PUSHKAR1-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR1-1030x687.webp',
    section: 'Villa Collection',
    usage: 'Malak Villa Primary Hero Card',
    altText: 'Malak Villa regal living room and heritage stone details',
  },
  VILLA_ADIVA_HERO: {
    filename: 'MAYA-GARH-PUSHKAR15-1030x678.webp',
    path: '/images/MAYA-GARH-PUSHKAR15-1030x678.webp',
    section: 'Villa Collection',
    usage: 'Adiva Villa Primary Hero Card',
    altText: 'Adiva Villa tranquil bedroom suite framing',
  },
  VILLA_AMEERA_HERO: {
    filename: 'MAYA-GARH-PUSHKAR24-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR24-1030x687.webp',
    section: 'Villa Collection',
    usage: 'Ameera Villa Primary Hero Card',
    altText: 'Ameera Villa palace lawn and hand-carved stone archways',
  },
  VILLA_MAYAN_HERO: {
    filename: 'MAYA-GARH-PUSHKAR10-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR10-1030x687.webp',
    section: 'Villa Collection',
    usage: 'Mayan Villa Primary Hero Card',
    altText: 'Mayan Villa bedroom interior with handcrafted Rajasthani furniture',
  },
  DINING_EXPERIENCE: {
    filename: 'MAYA-GARH-PUSHKAR6-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR6-1030x687.webp',
    section: 'Experiential Curations',
    usage: 'Royal Courtyard Dining Feature',
    altText: 'Candlelit royal courtyard dining table setup at Maya Garh',
  },
  SUNDOWNER_EXPERIENCE: {
    filename: 'MAYA-GARH-PUSHKAR18-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR18-1030x687.webp',
    section: 'Experiential Curations',
    usage: 'Pushkar Desert Sundowner Feature',
    altText: 'Golden dusk sundowner seating overlooking the Pushkar desert horizon',
  },
  WELLNESS_EXPERIENCE: {
    filename: 'MAYA-GARH-PUSHKAR48-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR48-1030x687.webp',
    section: 'Experiential Curations',
    usage: 'Ayurvedic Spa Treatment Feature',
    altText: 'Ayurvedic wellness pavilion nestled in shaded garden courtyard',
  },
  RETREAT_EXPERIENCE: {
    filename: 'MAYA-GARH-PUSHKAR30-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR30-1030x687.webp',
    section: 'Experiential Curations',
    usage: 'Pushkar Excursion & Retreat Feature',
    altText: 'Guided desert excursion through sacred Pushkar landscape',
  },
  CURATION_SUNDOWNER: {
    filename: 'unnamed (4).webp',
    path: '/images/unnamed (4).webp',
    section: 'Experiential Curations',
    usage: 'Desert Dune Sundowner & Twilight Canopy Feature',
    altText:
      'Private desert dune canopy dining setup with floor cushions, lanterns, and burning torches at twilight in Pushkar',
  },
  CURATION_DINING: {
    filename: 'MAYA-GARH-PUSHKAR45-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR45-1030x687.webp',
    section: 'Experiential Curations',
    usage: 'Royal Veranda High-Tea & Artisanal Dining Feature',
    altText:
      'Private stone veranda dining table with traditional brass tea service overlooking the pool and Aravalli hills',
  },
  CURATION_POOL: {
    filename: 'MAYA-GARH-PUSHKAR55-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR55-1030x687.webp',
    section: 'Experiential Curations',
    usage: 'Royal Infinity Pool & Colonnade Leisure Feature',
    altText:
      'Starlit royal infinity pool terrace with candlelit lanterns and draped stone colonnade at twilight',
  },
  CURATION_COURTYARD: {
    filename: 'unnamed (2).webp',
    path: '/images/unnamed (2).webp',
    section: 'Experiential Curations',
    usage: 'Courtyard Gardens & Heritage Sanctuary Grounds Feature',
    altText:
      'Lush courtyard garden lawn with traditional copper surahi urns and shaded stone alcoves at Maya Garh',
  },
  WEDDINGS_BANNER: {
    filename: 'unnamed (1).webp',
    path: '/images/unnamed (1).webp',
    section: 'Weddings & Celebrations',
    usage: 'Grand Fort Estate Wedding Overview',
    altText:
      'Elevated panoramic view of Maya Garh fortress, royal infinity pool, colonnade, and Aravalli mountains',
  },
  WEDDINGS_HERO_PANORAMA: {
    filename: 'unnamed (1).webp',
    path: '/images/unnamed (1).webp',
    section: 'Weddings & Celebrations',
    usage: 'Panoramic Fort Estate Opening',
    altText:
      'Sweeping architectural view of Maya Garh fortress battlements, royal infinity pool, and the Aravalli range',
  },
  WEDDINGS_TWILIGHT_COURTYARD: {
    filename: 'unnamed (3).webp',
    path: '/images/unnamed (3).webp',
    section: 'Weddings & Celebrations',
    usage: 'Twilight Courtyard & Pheras Grounds',
    altText:
      'Illuminated stone walkway and courtyard grounds at twilight with palm trees and uplighted fortress ramparts',
  },
  WEDDINGS_ROYAL_BANQUET: {
    filename: '3-2.webp',
    path: '/images/3-2.webp',
    section: 'Weddings & Celebrations',
    usage: 'Heritage Royal Banquet & Feast Hall',
    altText:
      'Royal banquet hall with hand-carved wooden pillars, timber-beamed ceilings, hanging amber lanterns, and dining tables',
  },
  WEDDINGS_POOL_SOIRÉE: {
    filename: 'MAYA-GARH-PUSHKAR55-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR55-1030x687.webp',
    section: 'Weddings & Celebrations',
    usage: 'Poolside Sangeet & Starlit Soirée',
    altText:
      'Starlit royal infinity pool terrace with candlelit lanterns, charpai daybeds, and draped stone arches at dusk',
  },
  WEDDINGS_FORT_FACADE: {
    filename: 'unnamed.webp',
    path: '/images/unnamed.webp',
    section: 'Weddings & Celebrations',
    usage: 'Grand Fort Entrance & Ceremonial Arrival',
    altText:
      'Monumental fortified stone entrance facade of Maya Garh with towering bastions and grand ceremonial stairs',
  },
  WEDDINGS_ESTATE_BUYOUT: {
    filename: 'unnamed (5).webp',
    path: '/images/unnamed (5).webp',
    section: 'Weddings & Celebrations',
    usage: 'Private Villa Enclave & Wedding Party Residency',
    altText:
      'Golden hour sunlight on private plunge pools, thatched pergolas, and stone villa terraces at Maya Garh',
  },
  ARAVALLI_LANDSCAPE: {
    filename: 'MAYA-GARH-PUSHKAR57-1030x616.webp',
    path: '/images/MAYA-GARH-PUSHKAR57-1030x616.webp',
    section: 'Aravalli Sense of Place',
    usage: 'Aravalli Landscape Backdrop',
    altText: 'Panoramic Aravalli mountain range framing Maya Garh Pushkar',
  },
  LOCATION_PANORAMA: {
    filename: 'MAYA-GARH-PUSHKAR57-1030x616.webp',
    path: '/images/MAYA-GARH-PUSHKAR57-1030x616.webp',
    section: 'Location & Setting',
    usage: 'Fortress Estate in the Aravalli Landscape',
    altText:
      'Elevated panoramic view of Maya Garh fortress surrounded by rural orchards and the Aravalli mountain horizon in Pushkar',
  },
  LOCATION_ARAVALLI_VISTA: {
    filename: 'MAYA-GARH-PUSHKAR62-1030x579.webp',
    path: '/images/MAYA-GARH-PUSHKAR62-1030x579.webp',
    section: 'Location & Setting',
    usage: 'Aravalli Mountain Ridge from Pool Terrace',
    altText:
      'Stone arches and royal pool terrace framing the distant granite peak of the Aravalli hills at Maya Garh',
  },
  LOCATION_VALLEY_TERRACE: {
    filename: 'MAYA-GARH-PUSHKAR48-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR48-1030x687.webp',
    section: 'Location & Setting',
    usage: 'Colonnaded Battlement Terrace Overlooking Valley',
    altText:
      'Elevated fortress terrace with charpais looking out over the green Pushkar valley and mountain range',
  },
  LOCATION_DESERT_SUNDOWNER: {
    filename: 'unnamed (4).webp',
    path: '/images/unnamed (4).webp',
    section: 'Location & Setting',
    usage: 'Pushkar Desert Dunes Canopy',
    altText:
      'Private twilight desert canopy with floor bolsters and burning torches on the sand dunes of Pushkar',
  },
  LOCATION_ARRIVAL_GATEWAY: {
    filename: 'unnamed.webp',
    path: '/images/unnamed.webp',
    section: 'Location & Setting',
    usage: 'Fortress Arrival Portal',
    altText:
      'Monumental fortified sandstone entrance portal and ceremonial stairs leading into Maya Garh Pushkar',
  },
  // Gallery Section Curated Assets
  GALLERY_FORT_PANORAMA: {
    filename: 'MAYA-GARH-PUSHKAR57.webp',
    path: '/images/MAYA-GARH-PUSHKAR57.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Fortress Monolith in the Aravalli Basin',
    altText: 'Panoramic architectural view of Maya Garh fortress surrounded by the Aravalli mountains',
  },
  GALLERY_FORT_FACADE: {
    filename: 'unnamed.webp',
    path: '/images/unnamed.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Grand Bastion Entrance & Ceremonial Stairs',
    altText: 'Monumental sandstone fortress facade and towering bastions with grand entrance stairs',
  },
  GALLERY_MARBLE_COLONNADE: {
    filename: 'MAYA-GARH-PUSHKAR53-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR53-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Colonnaded Marble Courtyard Arches',
    altText: 'Classical Rajasthani scalloped marble arches and shaded courtyard colonnades',
  },
  GALLERY_ARCH_PASSAGE: {
    filename: 'MAYA-GARH-PUSHKAR20-1030x705.webp',
    path: '/images/MAYA-GARH-PUSHKAR20-1030x705.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Heritage Portal with Scalloped Passage',
    altText: 'Arched stone passage with red silk curtains and antique Rajasthani carved mirror',
  },
  GALLERY_BLUE_ROYAL_SALON: {
    filename: 'MAYA-GARH-PUSHKAR25-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR25-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Palatial Salon with Draped Stone Arches',
    altText: 'Royal living salon with powder blue walls, stone arches, pink silk drapes, and carved teak furnishings',
  },
  GALLERY_MAUVE_PEACOCK_SUITE: {
    filename: 'MAYA-GARH-PUSHKAR47-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR47-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'The Royal Peacock Master Suite',
    altText: 'Expansive master bedroom with pink plaster walls, hand-carved peacock headboard, and terrace French doors',
  },
  GALLERY_MUSTARD_HERITAGE_SUITE: {
    filename: 'MAYA-GARH-PUSHKAR58-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR58-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Heritage Suite in Ochre & Cobalt',
    altText: 'Mustard yellow royal bedroom with cobalt blue arched wall niches, red bedspread, and exposed timber ceiling',
  },
  GALLERY_TEAL_HORIZON_BEDROOM: {
    filename: 'MAYA-GARH-PUSHKAR34-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR34-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Teal Bedroom Suite Overlooking Horizons',
    altText: 'Teal master bedroom with open balcony doors framing the distant mountain horizon',
  },
  GALLERY_SPLIT_LEVEL_LOUNGE: {
    filename: 'MAYA-GARH-PUSHKAR11-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR11-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Double-Height Living Salon & Stone Staircase',
    altText: 'Split-level living lounge with pink velvet seating, exposed timber beams, and masonry stairs',
  },
  GALLERY_ROSE_SALON: {
    filename: 'MAYA-GARH-PUSHKAR23-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR23-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Dusty Rose Living Room with Heritage Niches',
    altText: 'Dusty rose villa living room with red plush seating, geometric Dhurrie rug, and carved alcoves',
  },
  GALLERY_BLUE_FIREPLACE_SALON: {
    filename: 'MAYA-GARH-PUSHKAR52-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR52-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Royal Blue Salon with Stone Fireplace',
    altText: 'Royal blue living salon with antique carved stone fireplace, velvet armchairs, and brass lantern',
  },
  GALLERY_TERRACE_BEDROOM: {
    filename: 'MAYA-GARH-PUSHKAR40-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR40-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Sunlit Bedroom Opening to Valley Terrace',
    altText: 'Warm bedroom with red bedspread and picture windows opening directly onto an outdoor stone terrace',
  },
  GALLERY_SUNLIT_INFINITY_POOL: {
    filename: 'MAYA-GARH-PUSHKAR59-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR59-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Royal Infinity Pool under Desert Skies',
    altText: 'Sunlit royal infinity pool with red sun parasols, carved stone colonnades, and Aravalli mountain backdrop',
  },
  GALLERY_PRIVATE_PLUNGE_POOL: {
    filename: 'MAYA-GARH-PUSHKAR33-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR33-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Private Villa Indoor Plunge Pool',
    altText: 'Private indoor plunge pool with azure ceramic tiles and picture window framing the Aravalli peaks',
  },
  GALLERY_POOL_TERRACE_ARCHES: {
    filename: 'MAYA-GARH-PUSHKAR62-1030x579.webp',
    path: '/images/MAYA-GARH-PUSHKAR62-1030x579.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Colonnaded Pool Terrace & Mountain Crests',
    altText: 'Carved sandstone colonnade arches framing the royal pool terrace and distant granite peaks',
  },
  GALLERY_VILLA_PLUNGE_GARDEN: {
    filename: 'unnamed (5).webp',
    path: '/images/unnamed (5).webp',
    section: 'Visual Archive & Gallery',
    usage: 'Outdoor Villa Plunge Pool & Pergola',
    altText: 'Golden hour sunlight on private stone plunge pools, thatched shade pergolas, and villa terraces',
  },
  GALLERY_COURTYARD_LAWN_URNS: {
    filename: 'unnamed (2).webp',
    path: '/images/unnamed (2).webp',
    section: 'Visual Archive & Gallery',
    usage: 'Courtyard Lawn with Traditional Copper Urns',
    altText: 'Lush green courtyard lawn with traditional copper surahi urns, checkerboard paving, and mountain vista',
  },
  GALLERY_SHADED_COURTYARD_ALCOVE: {
    filename: 'MAYA-GARH-PUSHKAR10-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR10-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Shaded Stone Courtyard with Floor Bolsters',
    altText: 'Shaded stone courtyard alcove with plush cushions, stone paving, and antique teak doors',
  },
  GALLERY_VALLEY_TERRACE_CHARPAI: {
    filename: 'MAYA-GARH-PUSHKAR48-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR48-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Upper Battlement Terrace with Charpais',
    altText: 'Elevated fortress terrace with charpai daybeds overlooking the Pushkar valley and Aravalli hills',
  },
  GALLERY_RAJWADA_BANQUET: {
    filename: '3-2.webp',
    path: '/images/3-2.webp',
    section: 'Visual Archive & Gallery',
    usage: 'The Rajwada Royal Feast & Banquet Hall',
    altText: 'Royal banquet hall with hand-carved wooden pillars, timber-beamed ceilings, and formal dining tables',
  },
  GALLERY_VERANDA_HIGH_TEA: {
    filename: 'MAYA-GARH-PUSHKAR45-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR45-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Veranda Dining with Traditional Brassware',
    altText: 'Stone veranda dining table with traditional brass tea service overlooking the pool and Aravalli hills',
  },
  GALLERY_CAMEL_DINING_CORRIDOR: {
    filename: 'MAYA-GARH-PUSHKAR24-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR24-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Heritage Dining Corridor with Desert Fresco',
    altText: 'Long dining gallery corridor featuring a traditional camel mural and crimson runner rug',
  },
  GALLERY_NAG_PAHAR_VISTA: {
    filename: 'MAYA-GARH-PUSHKAR38-1030x729.webp',
    path: '/images/MAYA-GARH-PUSHKAR38-1030x729.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Nag Pahar Mountain Vistas from Living Suite',
    altText: 'Villa panoramic view through glass French doors framing the granite crest of Nag Pahar',
  },
  GALLERY_VALLEY_VIEW_TERRACE: {
    filename: 'MAYA-GARH-PUSHKAR43-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR43-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Verdant Pushkar Orchards & Mountain Horizon',
    altText: 'Terrace doorway from living room framing rural Pushkar date orchards and rugged mountain peaks',
  },
  GALLERY_ARAVALLI_LOUNGE_VISTA: {
    filename: 'MAYA-GARH-PUSHKAR42-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR42-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Living Lounge Framing the Ancient Ridge',
    altText: 'Villa living lounge with sliding doors framing the rugged granite crests of the Aravalli range',
  },
  GALLERY_NIGHT_ILLUMINATION: {
    filename: '1-2.webp',
    path: '/images/1-2.webp',
    section: 'Visual Archive & Gallery',
    usage: 'The Fortified Estate Illuminated at Night',
    altText: 'Full panoramic night illumination of Maya Garh with warm golden floodlights against dark mountain horizon',
  },
  GALLERY_DESERT_DUNE_TORCHES: {
    filename: 'unnamed (4).webp',
    path: '/images/unnamed (4).webp',
    section: 'Visual Archive & Gallery',
    usage: 'Pushkar Desert Dunes Sundowner & Flaming Torches',
    altText: 'Private desert dune canopy dining setup with torches and candle lanterns under twilight skies',
  },
  GALLERY_STARLIT_POOL_DUSK: {
    filename: 'MAYA-GARH-PUSHKAR55-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR55-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Starlit Infinity Pool with Candlelit Lanterns',
    altText: 'Starlit royal infinity pool terrace with candlelit lanterns, charpais, and draped stone arches at dusk',
  },
  GALLERY_PEACOCK_HEADBOARD_MURAL: {
    filename: 'MAYA-GARH-PUSHKAR13-1030x696.webp',
    path: '/images/MAYA-GARH-PUSHKAR13-1030x696.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Hand-Painted Miniature Peacock Murals',
    altText: 'Intricate twin peacock headboard murals painted in classical Rajasthani miniature tradition',
  },
  GALLERY_RAJASTHANI_ELDER_FRESCO: {
    filename: 'MAYA-GARH-PUSHKAR14-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR14-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Rajasthani Courtyard Fresco & Antique Doors',
    altText: 'Wall fresco portrait of a turbaned Rajasthani elder beside antique studded timber doors',
  },
  GALLERY_CARVED_TEAK_HEADBOARD: {
    filename: 'MAYA-GARH-PUSHKAR17-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR17-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Deep-Relief Floral Carved Teak Headboard',
    altText: 'Deep-relief floral carved teakwood headboard with draped red silk archway',
  },
  GALLERY_BRASS_TEA_SERVICE: {
    filename: 'MAYA-GARH-PUSHKAR4-1030x687.webp',
    path: '/images/MAYA-GARH-PUSHKAR4-1030x687.webp',
    section: 'Visual Archive & Gallery',
    usage: 'Handcrafted Brass & Copper Tableware',
    altText: 'Traditional Rajasthani handcrafted brass tea set and copper vessels on a carved wooden table',
  },
};

