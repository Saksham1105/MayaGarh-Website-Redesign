import React from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { PrologueSection } from '@/components/prologue/PrologueSection';
import { VillasSection } from '@/components/villas/VillasSection';
import { CurationsSection } from '@/components/curations/CurationsSection';
import { WeddingsSection } from '@/components/weddings/WeddingsSection';
import { LocationSection } from '@/components/location/LocationSection';
import { GallerySection } from '@/components/gallery/GallerySection';
import { AccoladesSection } from '@/components/accolades/AccoladesSection';
import { ReservationSection } from '@/components/reservation/ReservationSection';
import { Footer } from '@/components/footer';

/**
 * Maya Garh Pushkar — Main Landing Experience
 * Phase 2: Hero Opening Cinematic Experience
 * Phase 3: The Maya Garh Prologue Narrative
 * Phase 4B: The Royal Villa Collection Cinematic Showcase
 * Phase 5B: Curations / Experiences Editorial Experience
 * Phase 6B: Destination Weddings & Celebrations Cinematic Showcase
 * Phase 7B: Location / Pushkar / Aravallis Sense-of-Place Showcase
 * Phase 8B: Visual Archive / Hybrid Editorial Monograph Showcase
 * Phase 9B: Sanctuary Trust & Guest Chronicles Editorial Chapter
 * Phase 10B: Luxury Concierge Reservation & Enquiry Experience
 * Phase 11B: Sanctuary Colophon & Architectural Footer
 */
export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <PrologueSection />
        <VillasSection />
        <CurationsSection />
        <WeddingsSection />
        <LocationSection />
        <GallerySection />
        <AccoladesSection />
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}
