import React from 'react';
import { getHotelSchema, getWebSiteSchema, getBreadcrumbSchema } from '../config/schema.config';

/**
 * StructuredData Component
 * Injects validated JSON-LD schemas into server-rendered HTML.
 */
export const StructuredData: React.FC = () => {
  const hotelSchema = getHotelSchema();
  const webSiteSchema = getWebSiteSchema();
  const breadcrumbSchema = getBreadcrumbSchema();

  const sanitizeJsonLd = (schema: object): string =>
    JSON.stringify(schema).replace(/</g, '\\u003c');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(hotelSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(breadcrumbSchema) }}
      />
    </>
  );
};
