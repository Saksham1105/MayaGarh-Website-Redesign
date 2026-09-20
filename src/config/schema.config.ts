import { SEO_CONFIG } from './seo.config';

/**
 * JSON-LD Structured Data Generators for Maya Garh Pushkar
 * Strictly built using verified property data.
 * Zero unverified star ratings, review counts, prices, or fabricated amenities.
 */

export const getHotelSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  '@id': `${SEO_CONFIG.canonical}#hotel`,
  name: 'Maya Garh Pushkar',
  url: SEO_CONFIG.canonical,
  logo: 'https://mayaluxury.in/maya-garh/logo.png',
  image: [
    'https://mayaluxury.in/maya-garh/images/MAYA-GARH-PUSHKAR57.webp',
    'https://mayaluxury.in/maya-garh/images/MAYA-GARH-PUSHKAR53-1030x687.webp',
  ],
  description: SEO_CONFIG.description,
  telephone: SEO_CONFIG.contact.phonePrimary,
  email: SEO_CONFIG.contact.emailGeneral,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bhagwanpura',
    addressLocality: 'Pushkar',
    addressRegion: 'Rajasthan',
    postalCode: '305001',
    addressCountry: 'IN',
  },
  parentOrganization: {
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: 'https://mayaluxury.in',
  },
});

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://mayaluxury.in/#website',
  url: 'https://mayaluxury.in',
  name: SEO_CONFIG.siteName,
  publisher: {
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: 'https://mayaluxury.in',
  },
});

export const getBreadcrumbSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Maya Luxury',
      item: 'https://mayaluxury.in',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Maya Garh Pushkar',
      item: SEO_CONFIG.canonical,
    },
  ],
});
