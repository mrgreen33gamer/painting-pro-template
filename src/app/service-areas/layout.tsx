// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brushcraftpaintingtx.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Painting Service Areas | New Braunfels, San Marcos, Seguin & Texas Hill Country | Brushcraft',
  description:
    'Brushcraft Painting Co. serves New Braunfels, San Marcos, Seguin, Schertz, Cibolo, Boerne, Canyon Lake, and the rest of the Texas Hill Country. Upfront pricing, free estimates, 5-Year Workmanship Guarantee.',
  keywords: [
    'painting service areas Texas Hill Country',
    'painters New Braunfels TX',
    'painters San Marcos TX',
    'painters Seguin TX',
    'painters Boerne TX',
    'exterior painting Texas Hill Country',
    'interior painting New Braunfels',
    'Brushcraft Painting Co. service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Painting Service Areas | Brushcraft Painting Co. — Texas Hill Country',
    description:
      'Serving New Braunfels and the Texas Hill Country with upfront-priced interior painting, exterior painting, cabinet refinishing, and more. Free estimates available.',
    url,
    siteName: 'Brushcraft Painting Co.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painting Service Areas | Brushcraft Painting Co. — Texas Hill Country',
    description: 'Serving New Braunfels and the Texas Hill Country. Upfront pricing, free estimates, 5-Year Workmanship Guarantee.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Brushcraft Painting Co.',
  url: BASE_URL,
  telephone: '+18309007400',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '215 Gruene Rd',
    addressLocality: 'New Braunfels',
    addressRegion: 'TX',
    postalCode: '78130',
    addressCountry: 'US',
  },
  areaServed: [
    'New Braunfels, TX', 'San Marcos, TX', 'Seguin, TX', 'Schertz, TX',
    'Cibolo, TX', 'Boerne, TX', 'Canyon Lake, TX',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
  priceRange: '$$',
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
