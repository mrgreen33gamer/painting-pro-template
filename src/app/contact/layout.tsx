// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brushcraftpaintingtx.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact Brushcraft Painting Co. | Free Estimate in New Braunfels & Texas Hill Country',
  description:
    'Contact Brushcraft Painting Co. to schedule interior painting, exterior painting, or a free estimate. Serving New Braunfels, San Marcos, Seguin, and the Texas Hill Country. Call (830) 900-7400.',
  keywords: [
    'contact Brushcraft Painting Co.',
    'painting company New Braunfels TX',
    'schedule painting estimate New Braunfels',
    'painting estimate Texas Hill Country',
    'Brushcraft Painting contact',
    '830-900-7400',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact Brushcraft Painting Co. | Free Estimate in New Braunfels & Texas Hill Country',
    description:
      'Call, text, or submit a request for a free painting estimate. Upfront pricing, EPA Lead-Safe Certified painters, 5-Year Workmanship Guarantee.',
    url,
    siteName: 'Brushcraft Painting Co.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Brushcraft Painting Co. | New Braunfels & Texas Hill Country',
    description: 'Schedule painting service or get a free estimate. Call (830) 900-7400.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
