// src/app/blogs/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Painting Tips for New Braunfels & Texas Hill Country Homeowners",
  description: "Practical advice on paint selection, exterior repaint cycles, and home maintenance from Brushcraft Painting Co. — serving New Braunfels and the Texas Hill Country.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}