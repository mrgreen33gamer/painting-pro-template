'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSun, faDroplet, faLayerGroup, faPalette, faSeedling } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "If you've read painting advice written for a milder climate, you've probably seen \"10 years\" quoted as a standard repaint cycle. In Central Texas, that number is optimistic for most homes. Intense summer UV followed by humidity swings during Hill Country storms is a tougher combination on paint film than either extreme alone. Here's a more honest look at what to expect, based on siding type and sun exposure.",
  },
  {
    type: 'table',
    heading: 'Typical Exterior Repaint Cycle by Siding Material',
    tableHeaders: ['Siding Material', 'Typical Repaint Cycle', 'Notes for Central Texas'],
    tableRows: [
      ['Wood siding & trim', '5–7 years', 'Shortest cycle — wood moves with humidity swings and needs the most caulk maintenance'],
      ['Fiber cement (HardiePlank)', '8–12 years', 'Holds paint well, but the factory finish still fades under constant UV'],
      ['Stucco', '8–10 years', 'Common in the Hill Country; hairline cracking accelerates the need to repaint'],
      ['Brick with painted trim', '10–15 years (trim only)', 'Brick itself rarely needs repainting — focus on trim, eaves, and shutters'],
      ['Vinyl or composite', '10+ years, as needed', 'Less common locally; fades rather than peels, and is harder to repaint evenly'],
    ],
  },
  {
    type: 'cards',
    heading: 'Factors That Shorten or Extend Your Repaint Cycle',
    cards: [
      { icon: faSun, title: 'Sun exposure', body: 'South- and west-facing walls in New Braunfels take the most direct summer sun and typically fail 2–3 years before shadier elevations.' },
      { icon: faLayerGroup, title: 'Paint quality', body: 'Premium 100% acrylic exterior paint can outlast cheaper builder-grade paint by 3–5 years, even with identical application.' },
      { icon: faDroplet, title: 'Prep quality', body: 'Poor surface prep — skipped sanding, unsealed caulk gaps, painting over mildew — is the single biggest cause of early paint failure.' },
      { icon: faPalette, title: 'Color choice', body: 'Dark colors absorb more heat and UV energy, which breaks down the paint film faster than lighter, reflective colors.' },
      { icon: faSeedling, title: 'Irrigation & landscaping', body: 'Sprinklers hitting siding daily, or shrubs pressed against the wall, trap moisture and shorten the paint\'s effective lifespan.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "In Central Texas, exterior paint often needs replacing 2–3 years sooner than the national averages quoted online — the combination of intense UV and humidity swings is harder on paint film than either extreme alone.",
  },
  {
    type: 'tips',
    heading: 'How to Get the Most Years Out of Your Exterior Paint',
    items: [
      'Choose a 100% acrylic paint rated for high-UV climates, not a budget or interior-grade product',
      'Re-caulk gaps and reseal trim every 2–3 years between full repaints',
      'Trim back trees and shrubs touching the siding to reduce trapped moisture',
      'Have the exterior power-washed annually to remove mildew before it stains the paint',
      'Watch south- and west-facing walls closest — they show wear first and often need attention sooner',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Repaint Your House Exterior in Texas?"
        description="Texas heat and UV shorten the life of exterior paint compared to milder climates. Here's the honest repaint cycle by siding type, sun exposure, and paint quality."
        imageSrc="/pages/blogs/exterior-repaint-cycle.jpg"
        imageAlt="How often to repaint a house exterior in Central Texas"
        category="Maintenance"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Due for an Exterior Repaint?"
        body="Get a free on-site estimate from Brushcraft Painting Co. — upfront pricing and a 5-Year Workmanship Guarantee."
        buttonText="Get a Free Estimate"
        buttonHref="/services/exterior-painting"
      />
      <NewsletterSignup variant={1} spot="exterior-repaint-cycle-blog" />
    </>
  );
}
