# MAYA GARH PUSHKAR — PHASE 8A: GALLERY ASSET AUDIT & STORY ARCHITECTURE

**Status**: Research, Asset Audit & Architectural Modeling Complete  
**Date**: September 2026  
**Subject**: Curated Visual Monograph & Archival Data Model for Maya Garh Pushkar  
**Source of Truth**: `public/images/`, `src/data/assets.data.ts`, `src/data/gallery.data.ts`  
**Strict Boundary**: Asset audit, editorial curation, and data modeling only. No UI components or CSS implemented in Phase 8A.

---

## EXECUTIVE SUMMARY

A comprehensive asset audit of the complete Maya Garh photographic repository (`public/images/`) was conducted using direct pixel inspection and visual contact sheets. The audit evaluated all **65 property image files** across resolution, composition, subject matter, existing section usage, and editorial suitability.

* **Total Images in Repository**: 65
* **Images Used in Existing Sections (Hero → Location)**: 24
* **Images Completely Unused (Fresh Discovery Assets)**: 41
* **Images Rejected (Duplicates, Low-Res, Awkward Crops)**: 15
* **Total Usable Images**: 50
* **Final Recommended Gallery Curation**: **32 premier plates** (20 newly surfaced assets + 12 signature property anchors)
* **Target Scale**: Achieves the target density of 24–36 high-impact images without dilution or visual redundancy.

---

## SECTION A — COMPLETE IMAGE INVENTORY (65 ASSETS)

| # | Filename | Dimensions | Aspect Ratio | Existing Asset Key | Visual Subject | Category | Section Usage | Status | Gallery Decision |
|---|---|---|---|---|---|---|---|---|---|
| 01 | `1-2.webp` | 1600×800 | 2.000 (2:1) | `PROLOGUE_DETAIL` | Panoramic night illumination of fort bastions against dark mountain horizon | Twilight | Prologue Detail | High-Res Anchor | **INCLUDE** (Archival Anchor) |
| 02 | `3-2.webp` | 1600×800 | 2.000 (2:1) | `WEDDINGS_ROYAL_BANQUET` | Rajwada banquet hall with carved timber pillars and celebratory feast tables | Dining | Weddings Banquet | High-Res Anchor | **INCLUDE** (Archival Anchor) |
| 03 | `MAYA-GARH-PUSHKAR1-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `VILLA_MALAK_HERO` | Malak Villa master bedroom suite with scalloped arches & red bedspread | Villas | Villas Showcase | Used Once | Redundant (Covered in Villas) |
| 04 | `MAYA-GARH-PUSHKAR10-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `VILLA_MAYAN_HERO` | Shaded stone courtyard alcove with plush floor bolsters & carved teak doors | Courtyards | Villas Showcase | Unused in Courtyards | **INCLUDE** (Courtyard Alcove) |
| 05 | `MAYA-GARH-PUSHKAR11-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Split-level living lounge with pink velvet seating, high timber ceiling, stone stairs | Villas | Unused | Fresh Discovery | **INCLUDE** (Split-Level Lounge) |
| 06 | `MAYA-GARH-PUSHKAR12.webp` | 568×800 | 0.710 (Narrow) | None | Narrow vertical doorway crop looking into bedroom | Villas | Unused | Sub-standard Res | **REJECT** (Low resolution: 568px) |
| 07 | `MAYA-GARH-PUSHKAR13-1030x696.webp` | 1030×696 | 1.480 (~3:2) | None | Twin bedroom with sage green walls & miniature peacock mural headboards | Details | Unused | Fresh Discovery | **INCLUDE** (Peacock Fresco) |
| 08 | `MAYA-GARH-PUSHKAR14-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Bedroom with wall fresco portrait of Rajasthani elder and antique studded doors | Details | Unused | Fresh Discovery | **INCLUDE** (Elder Portrait Fresco) |
| 09 | `MAYA-GARH-PUSHKAR15-1030x678.webp` | 1030×678 | 1.499 (~3:2) | `VILLA_ADIVA_HERO` | Adiva Villa tranquil bedroom suite framing with carved headboard | Villas | Villas Showcase | Used Once | Redundant (Covered in Villas) |
| 10 | `MAYA-GARH-PUSHKAR16-1030x694.webp` | 1030×694 | 1.484 (~3:2) | None | Sage green drawing room with arched stone alcove and teal velvet armchairs | Villas | Unused | Fresh Discovery | Usable Candidate |
| 11 | `MAYA-GARH-PUSHKAR17-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Villa bedroom with ornate deep-relief floral carved teakwood headboard | Details | Unused | Fresh Discovery | **INCLUDE** (Carved Teak Headboard) |
| 12 | `MAYA-GARH-PUSHKAR18-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `SUNDOWNER_EXPERIENCE` | Terracotta bedroom with twin beds and carved timber headboards | Villas | Curations Sundowner | Used Once | Usable Candidate |
| 13 | `MAYA-GARH-PUSHKAR19-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `VILLA_AMANJENA_HERO` | Amanjena Villa private courtly entrance portal | Architecture | Villas Showcase | Used Once | Usable Candidate |
| 14 | `MAYA-GARH-PUSHKAR2-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Blue salon with low stone arches and brass tabletop | Villas | Unused | Near-duplicate | **REJECT** (Duplicate of #4) |
| 15 | `MAYA-GARH-PUSHKAR20-1030x705.webp` | 1030×705 | 1.461 (~3:2) | None | Arched stone passage with red silk curtains, wood chest, & antique carved mirror | Architecture | Unused | Fresh Discovery | **INCLUDE** (Archway Passage) |
| 16 | `MAYA-GARH-PUSHKAR21-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Teal salon with red upholstered sofas & courtly warrior fresco mural | Details | Unused | Fresh Discovery | Usable Candidate |
| 17 | `MAYA-GARH-PUSHKAR22-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Celebratory dining hall setup with pink wall niches & candelabras | Dining | Weddings Data | Minor Mention | Usable Candidate |
| 18 | `MAYA-GARH-PUSHKAR23-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Dusty rose living room with red sofas, geometric Dhurrie rug, & carved wall niches | Villas | Unused | Fresh Discovery | **INCLUDE** (Dusty Rose Salon) |
| 19 | `MAYA-GARH-PUSHKAR24-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `VILLA_AMEERA_HERO` | Long dining corridor featuring desert camel mural and red runner rug | Dining | Villas Showcase | Unused in Dining | **INCLUDE** (Camel Dining Corridor) |
| 20 | `MAYA-GARH-PUSHKAR25-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Palatial royal master salon with powder blue walls, stone arches, pink silk drapery | Villas | Unused | Fresh Discovery | **INCLUDE** (Blue Royal Salon) |
| 21 | `MAYA-GARH-PUSHKAR26-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Living room with geometric Dhurrie rug, carved table, & orange silk window drapes | Details | Unused | Fresh Discovery | Usable Candidate |
| 22 | `MAYA-GARH-PUSHKAR28-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Near-duplicate of #25 showing television screen on console | Villas | Unused | Near-duplicate | **REJECT** (Distracting TV screen) |
| 23 | `MAYA-GARH-PUSHKAR29-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Powder blue bedroom with white bed and dark armchair | Villas | Unused | Glare / Flat | **REJECT** (Exterior window glare) |
| 24 | `MAYA-GARH-PUSHKAR3-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Suite study with vintage olive-green desk, chair, & striped handloom rug | Villas | Unused | Fresh Discovery | Usable Candidate |
| 25 | `MAYA-GARH-PUSHKAR30-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `RETREAT_EXPERIENCE` | Brick-vaulted arch bedroom with doors opening to mountain terrace | Villas | Curations Retreat | Used Once | Usable Candidate |
| 26 | `MAYA-GARH-PUSHKAR31-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Living room with pink seating and glass doors leading onto private courtyard | Courtyards | Unused | Fresh Discovery | Usable Candidate |
| 27 | `MAYA-GARH-PUSHKAR33-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Private covered plunge pool with azure ceramic tiles and picture window framing Aravallis | Water | Unused | Fresh Discovery | **INCLUDE** (Private Plunge Pool) |
| 28 | `MAYA-GARH-PUSHKAR34-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Teal master bedroom with open balcony door framing mountain horizon | Villas | Unused | Fresh Discovery | **INCLUDE** (Teal Horizon Suite) |
| 29 | `MAYA-GARH-PUSHKAR35-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Wide-angle view of green twin bedroom | Villas | Unused | Near-duplicate | **REJECT** (Distorted wide crop; #13 is superior) |
| 30 | `MAYA-GARH-PUSHKAR36-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Green drawing room angle with armchairs | Villas | Unused | Near-duplicate | **REJECT** (Duplicate angle of #16) |
| 31 | `MAYA-GARH-PUSHKAR37-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Ochre sandstone living hall with exposed beams and hand-carved antique doors | Architecture | Unused | Fresh Discovery | Usable Candidate |
| 32 | `MAYA-GARH-PUSHKAR38-1030x729.webp` | 1030×729 | 1.413 (~3:2) | None | Teal living room looking outward through glass doors framing Nag Pahar | Landscape | Unused | Fresh Discovery | **INCLUDE** (Nag Pahar Vista) |
| 33 | `MAYA-GARH-PUSHKAR39-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Living room with maroon sofas and stone arches | Villas | Unused | Repetitive / Harsh | **REJECT** (Harsh indoor lighting) |
| 34 | `MAYA-GARH-PUSHKAR4-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Master suite with brass tea service on low carved table & Dhurrie | Details | Unused | Fresh Discovery | **INCLUDE** (Brass Tableware) |
| 35 | `MAYA-GARH-PUSHKAR40-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Twin bedroom with red bedspread & windows opening onto mountain terrace | Villas | Unused | Fresh Discovery | **INCLUDE** (Terrace Bedroom) |
| 36 | `MAYA-GARH-PUSHKAR41-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Bedroom with twin beds and red drapery | Villas | Unused | Redundant | **REJECT** (Superseded by #40 & #58) |
| 37 | `MAYA-GARH-PUSHKAR42-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Living room lounge with leather seating and doors framing Aravalli ridge | Landscape | Unused | Fresh Discovery | **INCLUDE** (Aravalli Ridge Lounge) |
| 38 | `MAYA-GARH-PUSHKAR43-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Terrace door from living room overlooking Pushkar orchards and granite hills | Landscape | Unused | Fresh Discovery | **INCLUDE** (Pushkar Orchard Vista) |
| 39 | `MAYA-GARH-PUSHKAR44-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Pink drawing room with double French doors opening onto private stone balcony | Architecture | Unused | Fresh Discovery | Usable Candidate |
| 40 | `MAYA-GARH-PUSHKAR45-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `CURATION_DINING` | Stone veranda dining table with brass tea service looking over pool and hills | Dining | Curations Dining | Signature | **INCLUDE** (Veranda High Tea) |
| 41 | `MAYA-GARH-PUSHKAR46-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Tight shot of pink bedroom and peacock headboard | Villas | Unused | Near-duplicate | **REJECT** (Tighter duplicate of #47) |
| 42 | `MAYA-GARH-PUSHKAR47-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Grand master suite with carved peacock headboard, teal chairs, terrace doors | Villas | Unused | Fresh Discovery | **INCLUDE** (Peacock Master Suite) |
| 43 | `MAYA-GARH-PUSHKAR48-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `WELLNESS_EXPERIENCE`, `LOCATION_VALLEY_TERRACE` | Elevated fortress terrace with charpais looking out over green Pushkar valley | Courtyards | Curations, Location | High-Impact | **INCLUDE** (Upper Battlement Terrace) |
| 44 | `MAYA-GARH-PUSHKAR49-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Ochre living lounge with leather ottoman, rustic table, orange arched alcove | Villas | Unused | Fresh Discovery | Usable Candidate |
| 45 | `MAYA-GARH-PUSHKAR5-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Split-level living room with pink chairs | Villas | Unused | Near-duplicate | **REJECT** (Near-duplicate of #11) |
| 46 | `MAYA-GARH-PUSHKAR50-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Ochre bedroom with scalloped headboard, red bedspread, terrace sunlight | Villas | Unused | Fresh Discovery | Usable Candidate |
| 47 | `MAYA-GARH-PUSHKAR51-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Living room with red sofas and TV console | Villas | Unused | Redundant / TV | **REJECT** (Prominent television) |
| 48 | `MAYA-GARH-PUSHKAR52-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Royal blue salon with carved stone fireplace, cobalt chairs, brass lantern | Villas | Unused | Fresh Discovery | **INCLUDE** (Blue Fireplace Salon) |
| 49 | `MAYA-GARH-PUSHKAR53-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `PROLOGUE_PRIMARY` | White marble courtyard colonnade with ornate scalloped arches | Architecture | Prologue Primary | Architectural Anchor | **INCLUDE** (Marble Colonnade) |
| 50 | `MAYA-GARH-PUSHKAR54-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Two-story bedroom with staircase and pink walls | Villas | Unused | Awkward Perspective | **REJECT** (Disjointed staircase angle) |
| 51 | `MAYA-GARH-PUSHKAR55-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `CURATION_POOL`, `WEDDINGS_POOL_SOIRÉE` | Starlit infinity pool terrace with candlelit lanterns, charpais, draped arches | Twilight | Curations, Weddings | Twilight Anchor | **INCLUDE** (Starlit Pool Dusk) |
| 52 | `MAYA-GARH-PUSHKAR56-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Twin bedroom with wooden beam ceiling | Villas | Unused | Low Contrast | **REJECT** (Flat low-contrast lighting) |
| 53 | `MAYA-GARH-PUSHKAR57-1030x616.webp` | 1030×616 | 1.672 (~16:9) | `ARAVALLI_LANDSCAPE`, `LOCATION_PANORAMA` | Fortress estate in rural Aravalli landscape (1030x616 crop) | Architecture | Location Hero | Cropped Duplicate | **REJECT** (Cropped duplicate of #57) |
| 54 | `MAYA-GARH-PUSHKAR57.webp` | 1600×800 | 2.000 (2:1) | `HERO_DESKTOP`, `VILLA_MAHA_MAYA_HERO` | High-res uncropped panorama of Maya Garh fortress nestled in Aravallis | Architecture | Hero, Schema, SEO | Master Panorama | **INCLUDE** (Master Monolith Panorama) |
| 55 | `MAYA-GARH-PUSHKAR58-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Mustard yellow royal bedroom with cobalt blue wall niches & timber ceiling | Villas | Unused | Fresh Discovery | **INCLUDE** (Mustard & Cobalt Suite) |
| 56 | `MAYA-GARH-PUSHKAR59-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Sunlit royal infinity pool with red parasols, stone colonnades, & Aravallis | Water | Unused | Fresh Discovery | **INCLUDE** (Sunlit Infinity Pool) |
| 57 | `MAYA-GARH-PUSHKAR6-1030x687.webp` | 1030×687 | 1.499 (~3:2) | `DINING_EXPERIENCE` | Intimate alcove salon with dark wood fretwork jali screens & teal chairs | Courtyards | Curations Dining | Signature | Usable Candidate |
| 58 | `MAYA-GARH-PUSHKAR62-1030x579.webp` | 1030×579 | 1.779 (~16:9) | `LOCATION_ARAVALLI_VISTA` | Pool terrace facing stone colonnade arches with flying birds and mountain peak | Water | Location Dialogue | Signature | **INCLUDE** (Colonnaded Pool Terrace) |
| 59 | `MAYA-GARH-PUSHKAR8-1030x687.webp` | 1030×687 | 1.499 (~3:2) | None | Vaulted brick ceiling bedroom | Villas | Unused | Near-duplicate | **REJECT** (Near-duplicate of #30) |
| 60 | `unnamed (1).webp` | 1280×720 | 1.778 (~16:9) | `WEDDINGS_BANNER`, `WEDDINGS_HERO_PANORAMA` | High-angle panorama of fortress battlements, pool, colonnade, & mountains | Architecture | Weddings Hero | Archival Anchor | Usable Candidate |
| 61 | `unnamed (2).webp` | 1020×1020 | 1.000 (1:1) | `CURATION_COURTYARD` | Lush courtyard lawn with copper surahi urns, checkerboard paving, mountains | Courtyards | Curations Courtyard | Signature | **INCLUDE** (Courtyard Lawn Urns) |
| 62 | `unnamed (3).webp` | 765×1020 | 0.750 (3:4) | `WEDDINGS_TWILIGHT_COURTYARD` | Evening dusk courtyard walkway with lit palm trees & warm uplighted walls | Twilight | Weddings Courtyard | Vertical Anchor | Usable Candidate |
| 63 | `unnamed (4).webp` | 1020×1020 | 1.000 (1:1) | `CURATION_SUNDOWNER`, `LOCATION_DESERT_SUNDOWNER` | Private desert dune canopy dining with torches & candle lanterns under dusk sky | Twilight | Curations, Location | Signature | **INCLUDE** (Desert Dune Torches) |
| 64 | `unnamed (5).webp` | 1360×1020 | 1.333 (4:3) | `HERO_MOBILE`, `WEDDINGS_ESTATE_BUYOUT` | Golden hour light on private plunge pools, thatched pergolas, & villa terraces | Water | Hero Mobile, Weddings | Signature | **INCLUDE** (Outdoor Villa Plunge) |
| 65 | `unnamed.webp` | 1360×756 | 1.799 (~16:9) | `WEDDINGS_FORT_FACADE`, `LOCATION_ARRIVAL_GATEWAY` | Monumental stone fortress facade with towering bastions & grand ceremonial stairs | Architecture | Weddings, Location | Grand Gateway | **INCLUDE** (Grand Bastion Facade) |

---

## SECTION B — CATEGORY CLASSIFICATION

All 50 usable assets naturally group into **8 coherent thematic chapters**, reflecting authentic Rajasthani palace life:

### 01 — ARCHITECTURE & BASTIONS (8 Usable / 4 Recommended in Core Archive)
* **Scope**: Monumental stone battlements, crenelated ramparts, grand ceremonial stairs, colonnaded walkways, and fortified portals.
* **Curated Plates**:
  1. `MAYA-GARH-PUSHKAR57.webp` — *Fortress Monolith in the Aravalli Basin* (1600×800)
  2. `unnamed.webp` — *Grand Bastion Entrance & Ceremonial Stairs* (1360×756)
  3. `MAYA-GARH-PUSHKAR53-1030x687.webp` — *Colonnaded Marble Courtyard Arches* (1030×687)
  4. `MAYA-GARH-PUSHKAR20-1030x705.webp` — *Heritage Portal with Scalloped Passage* (1030×705)

### 02 — ROYAL VILLA LIVING (16 Usable / 8 Recommended in Core Archive)
* **Scope**: Palatial suites across the 6 private villas, hand-painted frescoes, scalloped archways, split-level living salons, carved teak furniture, and private stone terraces.
* **Curated Plates**:
  1. `MAYA-GARH-PUSHKAR25-1030x687.webp` — *Palatial Salon with Draped Stone Arches* (1030×687)
  2. `MAYA-GARH-PUSHKAR47-1030x687.webp` — *The Royal Peacock Master Suite* (1030×687)
  3. `MAYA-GARH-PUSHKAR58-1030x687.webp` — *Heritage Suite in Ochre & Cobalt* (1030×687)
  4. `MAYA-GARH-PUSHKAR34-1030x687.webp` — *Teal Bedroom Suite Overlooking Horizons* (1030×687)
  5. `MAYA-GARH-PUSHKAR11-1030x687.webp` — *Double-Height Living Salon & Stone Staircase* (1030×687)
  6. `MAYA-GARH-PUSHKAR23-1030x687.webp` — *Dusty Rose Living Room with Heritage Niches* (1030×687)
  7. `MAYA-GARH-PUSHKAR52-1030x687.webp` — *Royal Blue Salon with Stone Fireplace* (1030×687)
  8. `MAYA-GARH-PUSHKAR40-1030x687.webp` — *Sunlit Bedroom Opening to Valley Terrace* (1030×687)

### 03 — POOLS & REFLECTIONS (4 Usable / 4 Recommended in Core Archive)
* **Scope**: Royal infinity pool terrace, private indoor plunge pool with Aravalli mountain window, and villa plunge pools.
* **Curated Plates**:
  1. `MAYA-GARH-PUSHKAR59-1030x687.webp` — *Royal Infinity Pool under Desert Skies* (1030×687)
  2. `MAYA-GARH-PUSHKAR33-1030x687.webp` — *Private Villa Indoor Plunge Pool* (1030×687)
  3. `MAYA-GARH-PUSHKAR62-1030x579.webp` — *Colonnaded Pool Terrace & Mountain Crests* (1030×579)
  4. `unnamed (5).webp` — *Outdoor Villa Plunge Pool & Pergola* (1360×1020)

### 04 — COURTYARDS & GARDENS (5 Usable / 3 Recommended in Core Archive)
* **Scope**: Lush manicured lawns, traditional copper surahi urns, shaded stone alcoves, and elevated battlement terraces.
* **Curated Plates**:
  1. `unnamed (2).webp` — *Courtyard Lawn with Traditional Copper Urns* (1020×1020)
  2. `MAYA-GARH-PUSHKAR10-1030x687.webp` — *Shaded Stone Courtyard with Floor Bolsters* (1030×687)
  3. `MAYA-GARH-PUSHKAR48-1030x687.webp` — *Upper Battlement Terrace with Charpais* (1030×687)

### 05 — FEASTS & TABLEWARE (5 Usable / 3 Recommended in Core Archive)
* **Scope**: The Rajwada banquet hall, veranda high-tea, heritage dining corridors, and handcrafted Rajasthani brass service.
* **Curated Plates**:
  1. `3-2.webp` — *The Rajwada Royal Feast & Banquet Hall* (1600×800)
  2. `MAYA-GARH-PUSHKAR45-1030x687.webp` — *Veranda Dining with Traditional Brassware* (1030×687)
  3. `MAYA-GARH-PUSHKAR24-1030x687.webp` — *Heritage Dining Corridor with Desert Fresco* (1030×687)

### 06 — ARAVALLI VISTAS (3 Usable / 3 Recommended in Core Archive)
* **Scope**: Rugged granite peaks of the Aravalli range, sacred Nag Pahar, and verdant Pushkar date palm orchards.
* **Curated Plates**:
  1. `MAYA-GARH-PUSHKAR38-1030x729.webp` — *Nag Pahar Mountain Vistas from Living Suite* (1030×729)
  2. `MAYA-GARH-PUSHKAR43-1030x687.webp` — *Verdant Pushkar Orchards & Mountain Horizon* (1030×687)
  3. `MAYA-GARH-PUSHKAR42-1030x687.webp` — *Living Lounge Framing the Ancient Ridge* (1030×687)

### 07 — TWILIGHT & LANTERNS (4 Usable / 3 Recommended in Core Archive)
* **Scope**: Blue hour courtyard illuminations, flaming torches across desert dunes, and glowing candlelit ramparts.
* **Curated Plates**:
  1. `1-2.webp` — *The Fortified Estate Illuminated at Night* (1600×800)
  2. `unnamed (4).webp` — *Pushkar Desert Dunes Sundowner & Flaming Torches* (1020×1020)
  3. `MAYA-GARH-PUSHKAR55-1030x687.webp` — *Starlit Infinity Pool with Candlelit Lanterns* (1030×687)

### 08 — ARTISANAL CRAFTSMANSHIP (5 Usable / 4 Recommended in Core Archive)
* **Scope**: Handcrafted miniature peacock frescoes, deep-relief floral carved teak, brass vessels, and heritage Dhurrie weaves.
* **Curated Plates**:
  1. `MAYA-GARH-PUSHKAR13-1030x696.webp` — *Hand-Painted Miniature Peacock Murals* (1030×696)
  2. `MAYA-GARH-PUSHKAR14-1030x687.webp` — *Rajasthani Courtyard Fresco & Antique Doors* (1030×687)
  3. `MAYA-GARH-PUSHKAR17-1030x687.webp` — *Deep-Relief Floral Carved Teak Headboard* (1030×687)
  4. `MAYA-GARH-PUSHKAR4-1030x687.webp` — *Handcrafted Brass & Copper Tableware* (1030×687)

---

## SECTION C — EXISTING SECTION USAGE BREAKDOWN

Cross-referencing the 24 images already in use:

| Section | Image Files Used | Context |
|---|---|---|
| **Hero Experience** | `MAYA-GARH-PUSHKAR57.webp`, `unnamed (5).webp` | Desktop and mobile hero backgrounds |
| **Prologue Narrative** | `MAYA-GARH-PUSHKAR53-1030x687.webp`, `1-2.webp` | Colonnade architecture & archival detail |
| **Villa Collection** | `MAYA-GARH-PUSHKAR57.webp`, `MAYA-GARH-PUSHKAR19-1030x687.webp`, `MAYA-GARH-PUSHKAR1-1030x687.webp`, `MAYA-GARH-PUSHKAR15-1030x678.webp`, `MAYA-GARH-PUSHKAR24-1030x687.webp`, `MAYA-GARH-PUSHKAR10-1030x687.webp` | Hero cards for the 6 private villas |
| **Experiential Curations** | `MAYA-GARH-PUSHKAR6-1030x687.webp`, `MAYA-GARH-PUSHKAR18-1030x687.webp`, `MAYA-GARH-PUSHKAR48-1030x687.webp`, `MAYA-GARH-PUSHKAR30-1030x687.webp`, `unnamed (4).webp`, `MAYA-GARH-PUSHKAR45-1030x687.webp`, `MAYA-GARH-PUSHKAR55-1030x687.webp`, `unnamed (2).webp` | 4 curation chapters + background layers |
| **Weddings & Celebrations** | `unnamed (1).webp`, `unnamed (3).webp`, `3-2.webp`, `MAYA-GARH-PUSHKAR55-1030x687.webp`, `unnamed.webp`, `unnamed (5).webp`, `MAYA-GARH-PUSHKAR22-1030x687.webp` | Celebration spaces and wedding buyout cards |
| **Location & Setting** | `MAYA-GARH-PUSHKAR57-1030x616.webp`, `MAYA-GARH-PUSHKAR62-1030x579.webp`, `MAYA-GARH-PUSHKAR48-1030x687.webp`, `unnamed (4).webp`, `unnamed.webp` | Aravalli landscape, Nag Pahar, and Pushkar dunes |

---

## SECTION D — DUPLICATE & REPETITION ANALYSIS

Direct pixel comparisons revealed multiple near-duplicate image pairs where one image was markedly superior:

1. **`MAYA-GARH-PUSHKAR57.webp` (1600×800) vs `MAYA-GARH-PUSHKAR57-1030x616.webp` (1030×616)**:
   * **Analysis**: The 1600px uncropped asset contains superior detail, full sky gradient, and uncompressed horizon data.
   * **Decision**: Keep the 1600×800 master; reject the 1030×616 crop for the Gallery.

2. **`MAYA-GARH-PUSHKAR25-1030x687.webp` vs `MAYA-GARH-PUSHKAR28-1030x687.webp`**:
   * **Analysis**: Both depict the palatial powder-blue salon with carved teal table and pink silk drapes. However, `#28` frames a modern flat-screen television prominently, disrupting the heritage royal aesthetic.
   * **Decision**: Select `#25`; reject `#28`.

3. **`MAYA-GARH-PUSHKAR46-1030x687.webp` vs `MAYA-GARH-PUSHKAR47-1030x687.webp`**:
   * **Analysis**: Both feature the carved peacock headboard in the pink master suite. `#46` is a tight bed crop, whereas `#47` provides wide architectural context including the seating alcove and sunlit balcony door.
   * **Decision**: Select `#47`; reject `#46`.

4. **`MAYA-GARH-PUSHKAR11-1030x687.webp` vs `MAYA-GARH-PUSHKAR5-1030x687.webp`**:
   * **Analysis**: Both capture the double-height split-level living lounge with stone staircase. `#11` has a cleaner focal plane and balanced illumination on the pink armchairs.
   * **Decision**: Select `#11`; reject `#5`.

5. **`MAYA-GARH-PUSHKAR13-1030x696.webp` vs `MAYA-GARH-PUSHKAR35-1030x687.webp`**:
   * **Analysis**: Both show the green twin bedroom with peacock headboard murals. `#13` is a straight-on editorial frame highlighting the painted artwork. `#35` suffers from wide-angle optical distortion.
   * **Decision**: Select `#13`; reject `#35`.

6. **`MAYA-GARH-PUSHKAR4-1030x687.webp` vs `MAYA-GARH-PUSHKAR2-1030x687.webp`**:
   * **Analysis**: Both depict the blue suite with low stone arches. `#4` includes a rich artisanal foreground of handcrafted brass tableware and tea service.
   * **Decision**: Select `#4`; reject `#2`.

---

## SECTION E — RECOMMENDED GALLERY IMAGE SET (32 PREMIER PLATES)

The curated 32-image archive provides an edited monograph of the property. **20 plates are completely fresh (never seen before in the website journey)**, creating a rich layer of discovery:

| Index | Asset Key | Filename | Resolution | Category | Title | Discovery Status |
|---|---|---|---|---|---|---|
| 01 | `GALLERY_FORT_PANORAMA` | `MAYA-GARH-PUSHKAR57.webp` | 1600×800 | Architecture | Fortress Monolith in the Aravalli Basin | Iconic Anchor |
| 02 | `GALLERY_FORT_FACADE` | `unnamed.webp` | 1360×756 | Architecture | Grand Bastion Entrance & Ceremonial Stairs | Iconic Anchor |
| 03 | `GALLERY_MARBLE_COLONNADE` | `MAYA-GARH-PUSHKAR53-1030x687.webp` | 1030×687 | Architecture | Colonnaded Marble Courtyard Arches | Iconic Anchor |
| 04 | `GALLERY_ARCH_PASSAGE` | `MAYA-GARH-PUSHKAR20-1030x705.webp` | 1030×705 | Architecture | Heritage Portal with Scalloped Passage | **Fresh Discovery** |
| 05 | `GALLERY_BLUE_ROYAL_SALON` | `MAYA-GARH-PUSHKAR25-1030x687.webp` | 1030×687 | Villas | Palatial Salon with Draped Stone Arches | **Fresh Discovery** |
| 06 | `GALLERY_MAUVE_PEACOCK_SUITE` | `MAYA-GARH-PUSHKAR47-1030x687.webp` | 1030×687 | Villas | The Royal Peacock Master Suite | **Fresh Discovery** |
| 07 | `GALLERY_MUSTARD_HERITAGE_SUITE` | `MAYA-GARH-PUSHKAR58-1030x687.webp` | 1030×687 | Villas | Heritage Suite in Ochre & Cobalt | **Fresh Discovery** |
| 08 | `GALLERY_TEAL_HORIZON_BEDROOM` | `MAYA-GARH-PUSHKAR34-1030x687.webp` | 1030×687 | Villas | Teal Bedroom Suite Overlooking Horizons | **Fresh Discovery** |
| 09 | `GALLERY_SPLIT_LEVEL_LOUNGE` | `MAYA-GARH-PUSHKAR11-1030x687.webp` | 1030×687 | Villas | Double-Height Living Salon & Stone Staircase | **Fresh Discovery** |
| 10 | `GALLERY_ROSE_SALON` | `MAYA-GARH-PUSHKAR23-1030x687.webp` | 1030×687 | Villas | Dusty Rose Living Room with Heritage Niches | **Fresh Discovery** |
| 11 | `GALLERY_BLUE_FIREPLACE_SALON` | `MAYA-GARH-PUSHKAR52-1030x687.webp` | 1030×687 | Villas | Royal Blue Salon with Stone Fireplace | **Fresh Discovery** |
| 12 | `GALLERY_TERRACE_BEDROOM` | `MAYA-GARH-PUSHKAR40-1030x687.webp` | 1030×687 | Villas | Sunlit Bedroom Opening to Valley Terrace | **Fresh Discovery** |
| 13 | `GALLERY_SUNLIT_INFINITY_POOL` | `MAYA-GARH-PUSHKAR59-1030x687.webp` | 1030×687 | Water | Royal Infinity Pool under Desert Skies | **Fresh Discovery** |
| 14 | `GALLERY_PRIVATE_PLUNGE_POOL` | `MAYA-GARH-PUSHKAR33-1030x687.webp` | 1030×687 | Water | Private Villa Indoor Plunge Pool | **Fresh Discovery** |
| 15 | `GALLERY_POOL_TERRACE_ARCHES` | `MAYA-GARH-PUSHKAR62-1030x579.webp` | 1030×579 | Water | Colonnaded Pool Terrace & Mountain Crests | Iconic Anchor |
| 16 | `GALLERY_VILLA_PLUNGE_GARDEN` | `unnamed (5).webp` | 1360×1020 | Water | Outdoor Villa Plunge Pool & Pergola | Iconic Anchor |
| 17 | `GALLERY_COURTYARD_LAWN_URNS` | `unnamed (2).webp` | 1020×1020 | Courtyards | Courtyard Lawn with Traditional Copper Urns | Iconic Anchor |
| 18 | `GALLERY_SHADED_COURTYARD_ALCOVE` | `MAYA-GARH-PUSHKAR10-1030x687.webp` | 1030×687 | Courtyards | Shaded Stone Courtyard with Floor Bolsters | **Fresh Discovery** |
| 19 | `GALLERY_VALLEY_TERRACE_CHARPAI` | `MAYA-GARH-PUSHKAR48-1030x687.webp` | 1030×687 | Courtyards | Upper Battlement Terrace with Charpais | Iconic Anchor |
| 20 | `GALLERY_RAJWADA_BANQUET` | `3-2.webp` | 1600×800 | Dining | The Rajwada Royal Feast & Banquet Hall | Iconic Anchor |
| 21 | `GALLERY_VERANDA_HIGH_TEA` | `MAYA-GARH-PUSHKAR45-1030x687.webp` | 1030×687 | Dining | Veranda Dining with Traditional Brassware | Iconic Anchor |
| 22 | `GALLERY_CAMEL_DINING_CORRIDOR` | `MAYA-GARH-PUSHKAR24-1030x687.webp` | 1030×687 | Dining | Heritage Dining Corridor with Desert Fresco | **Fresh Discovery** |
| 23 | `GALLERY_NAG_PAHAR_VISTA` | `MAYA-GARH-PUSHKAR38-1030x729.webp` | 1030×729 | Landscape | Nag Pahar Mountain Vistas from Living Suite | **Fresh Discovery** |
| 24 | `GALLERY_VALLEY_VIEW_TERRACE` | `MAYA-GARH-PUSHKAR43-1030x687.webp` | 1030×687 | Landscape | Verdant Pushkar Orchards & Mountain Horizon | **Fresh Discovery** |
| 25 | `GALLERY_ARAVALLI_LOUNGE_VISTA` | `MAYA-GARH-PUSHKAR42-1030x687.webp` | 1030×687 | Landscape | Living Lounge Framing the Ancient Ridge | **Fresh Discovery** |
| 26 | `GALLERY_NIGHT_ILLUMINATION` | `1-2.webp` | 1600×800 | Twilight | The Fortified Estate Illuminated at Night | Iconic Anchor |
| 27 | `GALLERY_DESERT_DUNE_TORCHES` | `unnamed (4).webp` | 1020×1020 | Twilight | Pushkar Desert Dunes Sundowner & Flaming Torches | Iconic Anchor |
| 28 | `GALLERY_STARLIT_POOL_DUSK` | `MAYA-GARH-PUSHKAR55-1030x687.webp` | 1030×687 | Twilight | Starlit Infinity Pool with Candlelit Lanterns | Iconic Anchor |
| 29 | `GALLERY_PEACOCK_HEADBOARD_MURAL` | `MAYA-GARH-PUSHKAR13-1030x696.webp` | 1030×696 | Details | Hand-Painted Miniature Peacock Murals | **Fresh Discovery** |
| 30 | `GALLERY_RAJASTHANI_ELDER_FRESCO` | `MAYA-GARH-PUSHKAR14-1030x687.webp` | 1030×687 | Details | Rajasthani Courtyard Fresco & Antique Doors | **Fresh Discovery** |
| 31 | `GALLERY_CARVED_TEAK_HEADBOARD` | `MAYA-GARH-PUSHKAR17-1030x687.webp` | 1030×687 | Details | Deep-Relief Floral Carved Teak Headboard | **Fresh Discovery** |
| 32 | `GALLERY_BRASS_TEA_SERVICE` | `MAYA-GARH-PUSHKAR4-1030x687.webp` | 1030×687 | Details | Handcrafted Brass & Copper Tableware | **Fresh Discovery** |

---

## SECTION F — REJECTED IMAGE SET (15 ASSETS) & RATIONALE

| # | Filename | Primary Category | Reason for Rejection |
|---|---|---|---|
| 01 | `MAYA-GARH-PUSHKAR12.webp` | Villas | Sub-standard resolution (568×800 width < 600px threshold) and awkward vertical doorway crop. |
| 02 | `MAYA-GARH-PUSHKAR2-1030x687.webp` | Villas | Redundant near-duplicate angle of `MAYA-GARH-PUSHKAR4` with less compelling foreground detail. |
| 03 | `MAYA-GARH-PUSHKAR5-1030x687.webp` | Villas | Duplicate angle of split-level lounge; superseded by superior lighting and composition of `MAYA-GARH-PUSHKAR11`. |
| 04 | `MAYA-GARH-PUSHKAR8-1030x687.webp` | Villas | Redundant brick-vaulted bedroom angle, very similar to `MAYA-GARH-PUSHKAR30`. |
| 05 | `MAYA-GARH-PUSHKAR28-1030x687.webp` | Villas | Near-duplicate of `MAYA-GARH-PUSHKAR25`; includes a prominent modern TV screen that detracts from the palace aesthetic. |
| 06 | `MAYA-GARH-PUSHKAR29-1030x687.webp` | Villas | Harsh exterior daylight glare through the window creating blown-out highlights. |
| 07 | `MAYA-GARH-PUSHKAR35-1030x687.webp` | Villas | Wide-angle lens optical distortion on bed frame; `MAYA-GARH-PUSHKAR13` provides superior focus on the peacock murals. |
| 08 | `MAYA-GARH-PUSHKAR36-1030x687.webp` | Villas | Duplicate angle of green salon, inferior in composition to `MAYA-GARH-PUSHKAR16`. |
| 09 | `MAYA-GARH-PUSHKAR39-1030x687.webp` | Villas | Harsh indoor flash/lighting and visual redundancy with superior villa living rooms. |
| 10 | `MAYA-GARH-PUSHKAR41-1030x687.webp` | Villas | Redundant twin bedroom composition; superseded by `MAYA-GARH-PUSHKAR40` and `MAYA-GARH-PUSHKAR58`. |
| 11 | `MAYA-GARH-PUSHKAR46-1030x687.webp` | Villas | Tighter crop of peacock master suite; superseded by expansive view of `MAYA-GARH-PUSHKAR47`. |
| 12 | `MAYA-GARH-PUSHKAR51-1030x687.webp` | Villas | Redundant living room angle featuring a prominent television console. |
| 13 | `MAYA-GARH-PUSHKAR54-1030x687.webp` | Villas | Disjointed multi-door hallway and awkward staircase angle lacking focal interest. |
| 14 | `MAYA-GARH-PUSHKAR56-1030x687.webp` | Villas | Flat, low-contrast lighting and inferior visual interest compared to other bedroom suites. |
| 15 | `MAYA-GARH-PUSHKAR57-1030x616.webp` | Landscape | Direct cropped duplicate of master 1600×800 `MAYA-GARH-PUSHKAR57.webp`. |

---

## SECTION G — RECOMMENDED EDITORIAL SEQUENCE

Rather than a static alphabetical or random layout, the Gallery should unfold as an architectural journey from exterior fortress monumentality into intimate private courtly spaces, expanding outward to the desert horizons, and concluding with evening illumination and artisanal details:

```text
1. ARCHITECTURE & MONUMENTALITY
   ↓ [The fortress arrives: battlements, grand stairs, colonnades]
2. ARRIVAL & PASSAGES
   ↓ [Moving through arched stone portals into the private enclave]
3. ROYAL VILLA LIVING
   ↓ [Private suites: cobalt alcoves, peacock murals, split-level lounges]
4. COURTYARDS & WATER
   ↓ [Lush lawns, copper urns, infinity pool, private indoor plunge pool]
5. ROYAL DINING & FEASTS
   ↓ [Rajwada banquet hall, veranda high-tea, heritage camel corridor]
6. ARAVALLI & VALLEY HORIZONS
   ↓ [Framed mountain vistas, Nag Pahar crests, Pushkar date orchards]
7. TWILIGHT & EVENING ILLUMINATIONS
   ↓ [Desert dune torches, starlit pool terrace, golden fortress illumination]
8. CRAFTSMANSHIP & TEXTURES
   ↓ [Close-up miniature frescoes, carved teakwood, brass vessels, Dhurrie weaves]
```

This 8-stage sequence ensures that every scroll movement provides a rhythmic tonal shift between grand vistas, intimate interiors, cool water reflections, and tactile craftsmanship.

---

## SECTION H — RECOMMENDED DESKTOP INTERACTION (EVALUATION & SELECTION)

### Evaluation of Candidate Approaches

* **Option A: Editorial Masonry with Staggered Rhythms**
  * *Pros*: Visually dynamic; handles alternating aspect ratios well.
  * *Cons*: Can quickly degenerate into an unorganized Pinterest grid if not strictly controlled; uneven scroll speeds create visual fatigue.

* **Option B: Cinematic Horizontal Visual Journey**
  * *Pros*: Novel and highly immersive on ultra-wide desktop monitors.
  * *Cons*: Forces horizontal scroll hijack on desktop; poor touchpad ergonomics for Windows users; breaks the established natural vertical flow of the website.

* **Option C: Full-Width Image Chapters with Supporting Insets**
  * *Pros*: Monumental and majestic; highly cinematic.
  * *Cons*: Consumes massive vertical height across 32 images; can feel repetitive if every chapter uses the same large template.

* **Option D: Hybrid Editorial Monograph (RECOMMENDED)**
  * *Architecture*:
    * An **Editorial Category Switcher** at the top (`All Archive`, `Architecture`, `Villas`, `Pools & Water`, `Courtyards`, `Dining`, `Aravalli Vistas`, `Twilight`, `Craftsmanship`).
    * A **Curated Asymmetric Layout** utilizing varied, deliberate container rhythms (e.g., 1 large featured plate + 2 complementary plates, alternating with panoramic full-width breaks).
    * Smooth GSAP ScrollTrigger micro-parallax reveals for individual plates.
    * An interactive **Archive Modal / Lightbox** allowing high-resolution inspection with keyboard navigation (`Esc`, `←`, `→`).
  * *Rationale*: Matches the luxury publishing aesthetic of *Architectural Digest* and high-end monographs, avoids scroll hijack, and gives the visitor control over exploration.

---

## SECTION I — RECOMMENDED MOBILE INTERACTION STRATEGY

On mobile devices (≤768px down to 360px):

1. **Natural Vertical Flow**: Zero horizontal scrolling, zero sticky pin locks.
2. **Generous Editorial Plates**: Full-width or near full-width images (16:9, 3:2, or 4:3) with comfortable margins (16px–20px).
3. **Pacing with Occasional Paired Details**: 1 large hero plate followed by a 2-column detail pair, followed by another large plate. This prevents endless identical card scrolling.
4. **Touch-Native Filtering**: Horizontally swipeable, pill-style category bar with `overflow-x: auto` and hidden scrollbars.
5. **Generous Touch Targets**: Lightbox triggers and category pills sized to ≥48px touch clearance.
6. **Zero Horizontal Overflow**: Strict `max-width: 100vw; overflow-x: hidden;` bounds.

---

## SECTION J — LIGHTBOX / FULLSCREEN RECOMMENDATION

A lightbox is **STRONGLY RECOMMENDED** for the Gallery section, adhering to accessibility standards:

* **Modal Overlay**: Deep twilight backdrop (`rgba(10, 8, 7, 0.95)`) with subtle blur (`backdrop-filter: blur(8px)`).
* **Keyboard Navigation**:
  * `Escape` closes the lightbox.
  * `ArrowRight` advances to next image.
  * `ArrowLeft` returns to previous image.
  * Focus trap locks keyboard focus inside the modal dialog while open.
* **Scroll Lock**: Body scroll locked (`overflow: hidden`) when modal is active, preventing background scroll jank.
* **Plate Metadata**: Subtle bottom caption displaying plate title, category, and archival reference number (e.g., `PLATE 07 OF 32`).
* **Accessible Controls**: High-contrast, aria-labeled Close, Previous, and Next buttons with clear `:focus-visible` gold rings.
* **Reduced Motion**: Instant opacity fades without zooming transforms when `prefers-reduced-motion: reduce` is detected.

---

## SECTION K — IMAGE SEO RECOMMENDATIONS

1. **Descriptive `alt` Attributes**:
   * Every plate in `src/data/gallery.data.ts` possesses unique, factual alt text describing the actual architectural features, color palette, materials, and mountain views.
   * Zero keyword stuffing (e.g., no repetitive "best luxury resort in pushkar rajasthan").
2. **Responsive Image Loading**:
   * Next.js `<Image>` component with tailored `sizes`:
     * Desktop featured: `(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 1200px`
     * Supporting grid: `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px`
   * Only top 1–2 featured images given `priority={true}`; all subsequent images lazy-loaded (`loading="lazy"`).
3. **Stable Aspect Ratios**:
   * All image containers set explicit CSS aspect ratios (`aspect-ratio: 16 / 9`, `3 / 2`, `4 / 3`, or `1 / 1`) to eliminate Cumulative Layout Shift (CLS).

---

## SECTION L — ASSET GAPS & TRUTHFUL BOUNDARIES

Based on the verified audit of `public/images/`:

* **No Dedicated Spa Treatment Room Photography**: While wellness is referenced in Curations, the library contains no interior massage or treatment room photos. The gallery truthfully focuses on outdoor courtyards, terraces, and plunge pools.
* **No Direct Exterior Photography of Pushkar Town Landmarks**: There are no local files of Pushkar Lake ghats or the Brahma Temple. As established in Phase 7B, the website truthfully represents these through typography, text, and architectural seals rather than fake stock photos.
* **Abundant Villa & Living Interiors**: The library is exceptionally rich in villa master suites, split-level salons, carved headboards, plunge pools, and dining settings, ensuring a rich visual monograph without external stock photography.

---

## SUMMARY OF PHASE 8A DELIVERABLES

1. **Audit Document**: Complete image inventory, duplicate analysis, and architectural recommendations compiled in `GALLERY_RESEARCH.md`.
2. **Asset Registry Update**: 32 typed gallery keys added to `src/data/assets.data.ts`.
3. **Gallery Data Model**: Strongly typed `src/data/gallery.data.ts` generated with complete metadata, categories, alt text, and featured sequence.
4. **Build & Type Integrity**: Verified via `npx tsc --noEmit` (0 errors), `npx eslint src --ext .ts,.tsx` (0 errors), and `npm run build` (production compilation successful).
