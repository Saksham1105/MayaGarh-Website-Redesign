/**
 * Centralized SEO Configuration for Maya Garh Pushkar
 * Derived strictly from verified property information.
 * Zero fabricated claims, ratings, prices, or room specs.
 */

export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  siteName: string;
  locale: string;
  type: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: string;
    type: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      'max-image-preview': 'large' | 'standard' | 'none';
      'max-snippet': number;
      'max-video-preview': number;
    };
  };
  contact: {
    phonePrimary: string;
    phoneSecondary: string;
    emailGeneral: string;
    emailReservations: string;
    instagram: string;
    whatsApp: string;
  };
}

export const SEO_CONFIG: SEOConfig = {
  title: 'Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan',
  description:
    'Experience Maya Garh Pushkar, a peaceful royal sanctuary offering luxury villas, secluded courtyards, plunge pools, and authentic Rajasthani hospitality amidst the Aravalli hills.',
  canonical: 'https://mayaluxury.in/maya-garh/',
  siteName: 'Maya Luxury',
  locale: 'en_IN',
  type: 'website',
  openGraph: {
    title: 'Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan',
    description:
      'Experience Maya Garh Pushkar, a peaceful royal sanctuary offering luxury villas, secluded courtyards, plunge pools, and authentic Rajasthani hospitality.',
    url: 'https://mayaluxury.in/maya-garh/',
    siteName: 'Maya Luxury',
    locale: 'en_IN',
    type: 'hotel',
    images: [
      {
        url: 'https://mayaluxury.in/maya-garh/images/MAYA-GARH-PUSHKAR57.webp',
        width: 1200,
        height: 630,
        alt: 'Maya Garh Pushkar Courtyard and Aravalli Mountain Backdrop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maya Garh Pushkar | Luxury Royal Sanctuary in Rajasthan',
    description:
      'Experience Maya Garh Pushkar, a peaceful royal sanctuary offering luxury villas, secluded courtyards, plunge pools, and authentic Rajasthani hospitality.',
    images: ['https://mayaluxury.in/maya-garh/images/MAYA-GARH-PUSHKAR57.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  contact: {
    phonePrimary: '+91 98290 71817',
    phoneSecondary: '+91 72970 29153',
    emailGeneral: 'hello@mayaluxury.in',
    emailReservations: 'reservation@mayaluxury.in',
    instagram: '@maya_luxury_',
    whatsApp: 'https://wa.me/919829071817',
  },
};
