/**
 * Maya Garh Pushkar — Reservation & Concierge Data Layer
 * Strictly grounded in Phase 10A research (RESERVATION_RESEARCH.md).
 * Zero fake booking engines, zero fabricated rates, zero unverified availability.
 */

export interface VerifiedVillaOption {
  id: string;
  name: string;
}

export interface ReservationData {
  eyebrow: string;
  heading: string;
  supportingText: string;
  conciergeNotice: string;
  channels: {
    whatsapp: {
      display: string;
      number: string;
      ctaLabel: string;
      stayMessage: string;
      weddingMessage: string;
    };
    phone: {
      primaryDisplay: string;
      primaryTel: string;
      secondaryDisplay: string;
      secondaryTel: string;
      label: string;
      secondaryLabel: string;
    };
    email: {
      reservationEmail: string;
      helloEmail: string;
      reservationSubject: string;
      helloSubject: string;
    };
  };
  enquiryTypes: Array<{
    id: string;
    label: string;
    description: string;
  }>;
  villas: VerifiedVillaOption[];
}

export const RESERVATION_DATA: ReservationData = {
  eyebrow: 'PRIVATE CONCIERGE',
  heading: 'Your Stay, Considered Personally',
  supportingText:
    'A private stay at Maya Garh begins with a conversation. Share your dates, preferences, or celebration plans, and the Maya Luxury concierge team will guide your itinerary personally.',
  conciergeNotice:
    'Maya Garh is a private sanctuary featuring six signature pool residences. All enquiries are attended directly by on-ground concierge hosts in Pushkar.',
  channels: {
    whatsapp: {
      display: '+91 98290 71817',
      number: '919829071817',
      ctaLabel: 'WHATSAPP THE CONCIERGE',
      stayMessage:
        'Hello Maya Luxury, I would like to enquire about a stay at Maya Garh Pushkar.',
      weddingMessage:
        'Hello Maya Luxury, I would like to enquire about hosting a wedding celebration at Maya Garh Pushkar.',
    },
    phone: {
      primaryDisplay: '+91 98290 71817',
      primaryTel: '+919829071817',
      label: 'RESERVATIONS',
      secondaryDisplay: '+91 72970 29153',
      secondaryTel: '+917297029153',
      secondaryLabel: 'DIRECT LINE',
    },
    email: {
      reservationEmail: 'reservation@mayaluxury.in',
      helloEmail: 'hello@mayaluxury.in',
      reservationSubject: 'Reservation Enquiry — Maya Garh Pushkar',
      helloSubject: 'Concierge Enquiry — Maya Garh Pushkar',
    },
  },
  enquiryTypes: [
    {
      id: 'villa-stay',
      label: 'Villa Stay',
      description: 'Private pool villa residency & bespoke dining',
    },
    {
      id: 'destination-wedding',
      label: 'Destination Wedding & Buyout',
      description: 'Full fortress estate buyout, Rajwada feast & lawns',
    },
    {
      id: 'private-celebration',
      label: 'Private Celebration',
      description: 'Intimate anniversaries, sunset gatherings & retreats',
    },
  ],
  villas: [
    { id: 'maha-maya', name: 'Maha Maya' },
    { id: 'amanjena', name: 'Amanjena' },
    { id: 'malak', name: 'Malak' },
    { id: 'adiva', name: 'Adiva' },
    { id: 'ameera', name: 'Ameera' },
    { id: 'mayan', name: 'Mayan' },
    { id: 'no-preference', name: 'No Preference' },
  ],
};
