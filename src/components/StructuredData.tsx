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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
