// src/app/industries/hoa-property-management/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brushcraftpaintingtx.com';
const url = `${BASE_URL}/industries/hoa-property-management`;

export const metadata: Metadata = {
  title: "Painting for HOAs & Property Management | Brushcraft Painting Co.",
  description: "Multi-year repaint cycle planning, phased budgets, and resident-friendly scheduling for HOAs and multi-unit properties across the Texas Hill Country.",
  keywords: [
    "HOA painting contractor Texas",
    "property management painting New Braunfels",
    "multi-unit repaint cycle Texas",
    "community association painting contractor",
    "apartment complex painting Texas Hill Country",
    "HOA exterior repaint budget planning",
    "Brushcraft Painting HOA services",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Painting for HOAs & Property Management | Brushcraft Painting Co.",
    description: "Multi-year repaint cycles and phased budgets for HOAs and multi-unit properties across the Texas Hill Country.",
    url, siteName: "Brushcraft Painting Co.", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/pages/seo-template-resources/about-hero.png`, alt: "HOA & property management painting — Brushcraft Painting Co." }],
  },
  twitter: { card: "summary_large_image", title: "Painting for HOAs & Property Management | Brushcraft Painting Co.", description: "Multi-year repaint cycles and phased budgets for HOAs and multi-unit properties across the Texas Hill Country.", images: [`${BASE_URL}/pages/seo-template-resources/about-hero.png`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Painting Services for HOAs & Property Management",
  description: "Multi-year repaint cycle planning, phased budgets, and resident-friendly scheduling for HOAs and multi-unit properties across the Texas Hill Country.",
  provider: { "@type": "HomeAndConstructionBusiness", name: "Brushcraft Painting Co.", url: BASE_URL, telephone: "+18309007400", address: { "@type": "PostalAddress", streetAddress: "215 Gruene Rd", addressLocality: "New Braunfels", addressRegion: "TX", postalCode: "78130", addressCountry: "US" } },
  serviceType: "Painting, Repaint Cycle Planning, Property Maintenance",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

export default function HOAPropertyManagementIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
