// src/app/sitemap.xml/route.ts
// Brushcraft Painting Co. — XML Sitemap
// Covers: all static pages and the 6 core service pages. No per-city SEO
// subpages are built for this site, so no per-service-city arrays here.
import { NextResponse } from 'next/server';
import { getAllPosts } from '&/blog-posts';

export const revalidate = 0;

export async function GET() {
  const baseUrl = 'https://www.brushcraftpaintingtx.com';
  const today   = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const staticPages = [
    { url: '/',               priority: '1.0',  changefreq: 'weekly'  },
    { url: '/about',          priority: '0.9',  changefreq: 'monthly' },
    { url: '/services',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/service-areas',  priority: '0.8',  changefreq: 'monthly' },
    { url: '/contact',        priority: '0.8',  changefreq: 'monthly' },
    { url: '/blogs',          priority: '0.7',  changefreq: 'weekly'  },
    { url: '/privacy-policy', priority: '0.4',  changefreq: 'yearly'  },
  ];

  // ── Core service pages ─────────────────────────────────────────────────────
  const coreServices = [
    { url: '/services/interior-painting',   priority: '0.95', changefreq: 'weekly'  },
    { url: '/services/exterior-painting',   priority: '0.95', changefreq: 'weekly'  },
    { url: '/services/cabinet-refinishing', priority: '0.85', changefreq: 'monthly' },
    { url: '/services/commercial-painting', priority: '0.85', changefreq: 'monthly' },
    { url: '/services/color-consultation',  priority: '0.80', changefreq: 'monthly' },
    { url: '/services/drywall-repair-prep', priority: '0.80', changefreq: 'monthly' },
  ];

  // ── Blog pages ─────────────────────────────────────────────────────────────
  const blogPages = getAllPosts().map((post: any) => ({
    url: `/blogs/${post.slug}`,
    priority: '0.70',
    changefreq: 'monthly',
  }));

  const allPages = [
    ...staticPages,
    ...coreServices,
    ...blogPages,
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  allPages.forEach(({ url, priority, changefreq }) => {
    xml += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
