// src/app/industries/commercial-real-estate/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brushcraftpaintingtx.com';
const url = `${BASE_URL}/industries/commercial-real-estate`;

export const metadata: Metadata = {
  title: "Commercial Real Estate Painting | Brushcraft Painting Co.",
  description: "Fast tenant-turnover painting and curb-appeal exterior repaints scheduled around tenants for commercial property owners and managers across the Texas Hill Country.",
  keywords: [
    "commercial painting contractor Texas",
    "tenant turnover painting New Braunfels",
    "commercial property repaint Texas Hill Country",
    "office building exterior painting Texas",
    "retail suite painting contractor",
    "property management painting services",
    "Brushcraft Painting commercial real estate",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Real Estate Painting | Brushcraft Painting Co.",
    description: "Fast tenant-turnover painting and curb-appeal exterior repaints for commercial properties across the Texas Hill Country.",
    url, siteName: "Brushcraft Painting Co.", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/pages/seo-template-resources/about-hero.png`, alt: "Commercial real estate painting — Brushcraft Painting Co." }],
  },
  twitter: { card: "summary_large_image", title: "Commercial Real Estate Painting | Brushcraft Painting Co.", description: "Fast tenant-turnover painting and curb-appeal exterior repaints for commercial properties across the Texas Hill Country.", images: [`${BASE_URL}/pages/seo-template-resources/about-hero.png`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Painting Services for Commercial Real Estate",
  description: "Fast tenant-turnover painting and curb-appeal exterior repaints scheduled around tenants for commercial property owners and managers across the Texas Hill Country.",
  provider: { "@type": "HomeAndConstructionBusiness", name: "Brushcraft Painting Co.", url: BASE_URL, telephone: "+18309007400", address: { "@type": "PostalAddress", streetAddress: "215 Gruene Rd", addressLocality: "New Braunfels", addressRegion: "TX", postalCode: "78130", addressCountry: "US" } },
  serviceType: "Commercial Painting, Tenant Turnover Painting, Exterior Repaints",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

export default function CommercialRealEstateIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
