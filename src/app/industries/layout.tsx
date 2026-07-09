// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brushcraftpaintingtx.com';
const url      = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Painting for HOAs, Commercial & Government | Brushcraft Painting Co.",
  description:
    "Brushcraft Painting Co. builds painting programs for HOAs and property management, commercial real estate, and municipal and government facilities across the Texas Hill Country.",
  keywords: [
    "HOA painting contractor Texas",
    "commercial real estate painting New Braunfels",
    "municipal painting contractor Texas",
    "property management painting services",
    "government building painting Texas Hill Country",
    "multi-unit repaint cycle Texas",
    "Brushcraft Painting industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | Brushcraft Painting Co. — New Braunfels, TX",
    description:
      "Painting programs for HOAs, commercial real estate, and municipal/government facilities across the Texas Hill Country. Built for how your organization actually works.",
    url,
    siteName: "Brushcraft Painting Co.",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/brushcraft-banner.png`, alt: "Brushcraft Painting Co. — Industries Served" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Brushcraft Painting Co.",
    description: "Painting programs for HOAs, commercial real estate, and municipal/government facilities across the Texas Hill Country.",
    images: [`${BASE_URL}/logos/brushcraft-banner.png`],
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: url },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Industry-Specific Painting Services — New Braunfels TX",
  description:
    "Brushcraft Painting Co. provides painting programs tailored to HOAs and property management, commercial real estate, and municipal and government facilities across the Texas Hill Country.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Brushcraft Painting Co.",
    url: BASE_URL,
    telephone: "+18309007400",
    address: {
      "@type": "PostalAddress",
      streetAddress: "215 Gruene Rd",
      addressLocality: "New Braunfels",
      addressRegion: "TX",
      postalCode: "78130",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: "Painting, Repaint Cycle Planning, Commercial Painting, Municipal Painting",
  url,
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
