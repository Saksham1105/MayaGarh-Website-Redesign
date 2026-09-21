import React from 'react';
import type { Metadata, Viewport } from 'next';
import { cormorantGaramond, outfit } from '@/lib/fonts';
import '@/styles/globals.css';
import { SEO_CONFIG } from '@/config/seo.config';
import { StructuredData } from '@/components/StructuredData';
import { LenisProvider } from '@/animation/LenisProvider';

export const metadata: Metadata = {
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  metadataBase: new URL('https://mayaluxury.in'),
  alternates: {
    canonical: SEO_CONFIG.canonical,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: SEO_CONFIG.openGraph.title,
    description: SEO_CONFIG.openGraph.description,
    url: SEO_CONFIG.openGraph.url,
    siteName: SEO_CONFIG.openGraph.siteName,
    locale: SEO_CONFIG.openGraph.locale,
    type: 'website',
    images: SEO_CONFIG.openGraph.images,
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.twitter.title,
    description: SEO_CONFIG.twitter.description,
    images: SEO_CONFIG.twitter.images,
  },
  robots: {
    index: SEO_CONFIG.robots.index,
    follow: SEO_CONFIG.robots.follow,
    googleBot: {
      index: SEO_CONFIG.robots.googleBot.index,
      follow: SEO_CONFIG.robots.googleBot.follow,
      'max-image-preview': SEO_CONFIG.robots.googleBot['max-image-preview'],
      'max-snippet': SEO_CONFIG.robots.googleBot['max-snippet'],
      'max-video-preview': SEO_CONFIG.robots.googleBot['max-video-preview'],
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1A1817',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${outfit.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
