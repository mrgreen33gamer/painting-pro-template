import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Brushcraft Painting Co.",
  description: "How we collect, use, and protect your information at Brushcraft Painting Co. in New Braunfels, TX.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}