// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'signs-your-home-needs-a-repaint-new-braunfels-tx',
    title:    '7 Signs Your Home Needs a Repaint in New Braunfels, TX (Before It Gets Expensive)',
    excerpt:  'Texas sun and humidity show up on your paint job long before most homeowners notice. Here are the 7 clear warning signs it’s time to repaint — from chalking to caulk failure.',
    category: 'Exterior',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/repaint-signs.jpg',
    imageAlt: 'Signs your home needs a repaint in New Braunfels TX',
    featured: true,
  },
  {
    slug:     'how-often-should-you-repaint-your-house-exterior',
    title:    'How Often Should You Repaint Your House Exterior in Texas?',
    excerpt:  'Texas heat and UV shorten the life of exterior paint compared to milder climates. Here’s the honest repaint cycle by siding type, sun exposure, and paint quality.',
    category: 'Maintenance',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/exterior-repaint-cycle.jpg',
    imageAlt: 'How often to repaint a house exterior in Central Texas',
  },
  {
    slug:     'oil-based-vs-latex-paint-central-texas',
    title:    'Oil-Based vs. Latex Paint: What’s Best for Central Texas Homes in 2026?',
    excerpt:  'Durability, VOCs, cleanup, and cost — an honest comparison of oil-based and latex paint for Central Texas heat and humidity, and where each one still makes sense.',
    category: 'Materials',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/oil-vs-latex-paint.jpg',
    imageAlt: 'Oil-based vs latex paint comparison for Texas homes',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }