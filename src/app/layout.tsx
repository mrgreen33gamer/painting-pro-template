// src/app/layout.tsx
// Brushcraft Painting Co. — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Kalam, Cabin, Lato } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Kalam({
  weight: ["400","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Cabin({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Lato({
  weight: ["400","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.brushcraftpaintingtx.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e1b4b" },
    { media: "(prefers-color-scheme: dark)",  color: "#1e1b4b" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Brushcraft Painting Co. | Interior & Exterior Painting — New Braunfels, TX",
    template: "%s | Brushcraft Painting Co.",
  },
  description:
    "Brushcraft Painting Co. is a New Braunfels, TX painting company offering interior painting, exterior painting, cabinet refinishing, commercial painting, color consultation, and drywall repair for Central Texas homes and businesses. EPA Lead-Safe Certified, locally owned since 2014.",
  keywords: [
    "Brushcraft Painting Co.",
    "painting company New Braunfels TX",
    "interior painters New Braunfels Texas",
    "exterior painting New Braunfels",
    "cabinet refinishing Central Texas",
    "commercial painting New Braunfels TX",
    "house painters San Marcos TX",
    "color consultation New Braunfels",
    "drywall repair New Braunfels",
  ],
  authors: [{ name: "Brushcraft Painting Co.", url: BASE_URL }],
  creator: "Brushcraft Painting Co.",
  publisher: "Brushcraft Painting Co.",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "Brushcraft Painting Co. | Interior & Exterior Painting — New Braunfels, TX",
    description:
      "New Braunfels-based painting company for interior painting, exterior painting, cabinet refinishing, and commercial painting across Central Texas. EPA Lead-Safe Certified & insured. 5-Year Workmanship Guarantee.",
    url: BASE_URL,
    siteName: "Brushcraft Painting Co.",
    images: [
      {
        url: `${BASE_URL}/logos/brushcraft-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "Brushcraft Painting Co. — New Braunfels TX Interior & Exterior Painting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brushcraft Painting Co. | New Braunfels TX Painting Contractor",
    description:
      "Interior painting, exterior painting, cabinet refinishing & commercial painting for Central Texas. EPA Lead-Safe Certified & insured — 5-Year Workmanship Guarantee.",
    images: [`${BASE_URL}/logos/brushcraft-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Brushcraft Painting Co.",
  alternateName: "Brushcraft Painting",
  description:
    "Residential and commercial painting services in New Braunfels and Central Texas — interior painting, exterior painting, cabinet refinishing, commercial painting, color consultation, and drywall repair. EPA Lead-Safe Certified, insured, locally owned since 2014.",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7030,
    longitude: -98.1245,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "New Braunfels", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "San Marcos",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Seguin",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Schertz",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Cibolo",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Boerne",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Canyon Lake",   containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cabinet Refinishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Color Consultation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Repair & Prep" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/brushcraftpaintingtx",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#a855f7" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#1e1b4b",
                }}
              >
                <PulseLoader size={50} color="#a855f7" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}