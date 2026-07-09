// src/app/industries/municipal-government/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brushcraftpaintingtx.com';
const url = `${BASE_URL}/industries/municipal-government`;

export const metadata: Metadata = {
  title: "Municipal & Government Painting | Brushcraft Painting Co.",
  description: "Bid and RFP-ready painting for public buildings, community centers, and parks facilities across the Texas Hill Country, with prevailing wage and EPA Lead-Safe compliance.",
  keywords: [
    "municipal painting contractor Texas",
    "government building painting New Braunfels",
    "public works painting RFP Texas",
    "prevailing wage painting contractor",
    "community center painting Texas Hill Country",
    "parks facility painting contractor",
    "Brushcraft Painting municipal services",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Municipal & Government Painting | Brushcraft Painting Co.",
    description: "Bid and RFP-ready painting for public buildings, community centers, and parks facilities across the Texas Hill Country.",
    url, siteName: "Brushcraft Painting Co.", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/pages/seo-template-resources/about-hero.png`, alt: "Municipal and government painting — Brushcraft Painting Co." }],
  },
  twitter: { card: "summary_large_image", title: "Municipal & Government Painting | Brushcraft Painting Co.", description: "Bid and RFP-ready painting for public buildings, community centers, and parks facilities across the Texas Hill Country.", images: [`${BASE_URL}/pages/seo-template-resources/about-hero.png`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Painting Services for Municipal & Government Facilities",
  description: "Bid and RFP-ready painting for public buildings, community centers, and parks facilities across the Texas Hill Country, with prevailing wage and EPA Lead-Safe compliance.",
  provider: { "@type": "HomeAndConstructionBusiness", name: "Brushcraft Painting Co.", url: BASE_URL, telephone: "+18309007400", address: { "@type": "PostalAddress", streetAddress: "215 Gruene Rd", addressLocality: "New Braunfels", addressRegion: "TX", postalCode: "78130", addressCountry: "US" } },
  serviceType: "Municipal Painting, Public Facility Painting, Government Contracting",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

export default function MunicipalGovernmentIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
