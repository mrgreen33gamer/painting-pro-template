// src/app/about/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brushcraftpaintingtx.com';
const url      = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Brushcraft Painting Co. — New Braunfels TX Painting Company Since 2014",
  description:
    "Meet the Brushcraft Painting Co. team. Locally owned and operated in New Braunfels, Texas since 2014. EPA Lead-Safe Certified, insured & bonded painters, honest pricing, and a 5-Year Workmanship Guarantee on every job. Serving New Braunfels, San Marcos, Seguin, and the Texas Hill Country.",
  keywords: [
    "about Brushcraft Painting Co.",
    "New Braunfels painting company",
    "painting contractor New Braunfels TX",
    "locally owned painters New Braunfels",
    "EPA Lead-Safe Certified painters Texas",
    "Texas Hill Country painting company",
    "painting company history New Braunfels",
    "Carlos Reyna Brushcraft Painting",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About Brushcraft Painting Co. — New Braunfels TX Painting Company Since 2014",
    description:
      "Locally owned and operated in New Braunfels since 2014. EPA Lead-Safe Certified, insured & bonded, upfront pricing, 5-Year Workmanship Guarantee. Serving the Texas Hill Country.",
    url,
    siteName: "Brushcraft Painting Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Brushcraft Painting Co. — New Braunfels TX Since 2014",
    description:
      "Locally owned painting company in New Braunfels, TX. EPA Lead-Safe Certified, upfront pricing, 5-Year Workmanship Guarantee.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Brushcraft Painting Co.",
  url: BASE_URL,
  telephone: "+18309007400",
  email: "hello@brushcraftpaintingtx.com",
  foundingDate: "2014",
  founder: {
    "@type": "Person",
    name: "Carlos Reyna",
    jobTitle: "Founder & Master Painter",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "215 Gruene Rd",
    addressLocality: "New Braunfels",
    addressRegion: "TX",
    postalCode: "78130",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "New Braunfels", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "San Marcos",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Seguin",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Schertz",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Cibolo",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Boerne",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Canyon Lake",   containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  sameAs: [
    "https://www.facebook.com/brushcraftpaintingtx",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: url },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
