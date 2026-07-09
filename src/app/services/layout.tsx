// src/app/services/layout.tsx
// Brushcraft Painting Co. — /services parent layout
// Broad "all services" metadata (no per-city keyword cannibalization) +
// OfferCatalog schema listing all 6 services + BreadcrumbList for /services.
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.brushcraftpaintingtx.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Painting Services | Interior, Exterior, Cabinets & More | Brushcraft Painting Co.",
  description:
    "Brushcraft Painting Co. offers interior painting, exterior painting, cabinet refinishing, commercial painting, color consultation, and drywall repair for New Braunfels and Central Texas. EPA Lead-Safe Certified, 5-Year Workmanship Guarantee.",
  keywords: [
    "painting company New Braunfels TX",
    "interior painters New Braunfels",
    "exterior painting Central Texas",
    "cabinet refinishing New Braunfels TX",
    "commercial painting contractor Texas Hill Country",
    "color consultation New Braunfels",
    "drywall repair New Braunfels TX",
    "EPA Lead-Safe Certified painters Texas",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Painting Services | Interior, Exterior, Cabinets & More | Brushcraft Painting Co.",
    description:
      "Interior painting, exterior painting, cabinet refinishing, commercial painting, color consultation, and drywall repair for New Braunfels and Central Texas. EPA Lead-Safe Certified, 5-Year Workmanship Guarantee.",
    url,
    siteName: "Brushcraft Painting Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/logos/brushcraft-banner.png?v=1`,
        alt: "Brushcraft Painting Co. — Painting Services for New Braunfels & Central Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painting Services | Brushcraft Painting Co.",
    description:
      "Interior, exterior, cabinet, and commercial painting for New Braunfels and Central Texas. EPA Lead-Safe Certified, 5-Year Workmanship Guarantee.",
    images: [`${BASE_URL}/logos/brushcraft-banner.png?v=1`],
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Brushcraft Painting Co. — Painting Services",
  description:
    "Residential and commercial painting services for New Braunfels and Central Texas: interior painting, exterior painting, cabinet refinishing, commercial painting, color consultation, and drywall repair.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Brushcraft Painting Co.",
    url: BASE_URL,
    telephone: "+18309007400",
    address: { "@type": "PostalAddress", addressLocality: "New Braunfels", addressRegion: "TX", addressCountry: "US" },
  },
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Interior Painting",
        description: "Walls, ceilings, trim, and doors finished with a 2-coat guarantee and low-VOC paint options.",
        url: `${BASE_URL}/services/interior-painting`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Exterior Painting",
        description: "Siding, trim, fascia, and soffits — pressure-washed, prepped, and finished with 100%-acrylic exterior paint. EPA Lead-Safe Certified practices for pre-1978 homes.",
        url: `${BASE_URL}/services/exterior-painting`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cabinet Refinishing",
        description: "Factory-quality sprayed cabinet finishes for kitchens and bathrooms — hardware removal and reinstall included.",
        url: `${BASE_URL}/services/cabinet-refinishing`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Commercial Painting",
        description: "After-hours and weekend scheduling for offices, retail, restaurants, apartment turnovers, and warehouses. Fully insured and bonded.",
        url: `${BASE_URL}/services/commercial-painting`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Color Consultation",
        description: "In-home color consultation with sample boards, tested against your natural and artificial lighting.",
        url: `${BASE_URL}/services/color-consultation`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Drywall Repair & Prep",
        description: "Holes, cracks, water-stain repair, popcorn-ceiling removal, and skim coating — bundled into every paint quote at no surprise cost.",
        url: `${BASE_URL}/services/drywall-repair-prep`,
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: url },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
