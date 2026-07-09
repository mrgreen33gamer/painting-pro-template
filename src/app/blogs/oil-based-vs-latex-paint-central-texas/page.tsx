'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faHouse, faDoorClosed, faUtensils, faGripLines, faDroplet, faLandmark } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Ask five different painters whether oil-based or latex paint is better and you'll get five different answers — usually based on habits formed decades ago. The truth in 2026 is more nuanced: latex and acrylic formulas have improved dramatically, oil-based paint still has real advantages in a shrinking number of use cases, and Central Texas heat and humidity change the calculus for both. Here's an honest breakdown.",
  },
  {
    type: 'table',
    heading: 'Oil-Based vs. Latex Paint at a Glance',
    tableHeaders: ['Category', 'Oil-Based (Alkyd)', 'Latex (Acrylic)'],
    tableRows: [
      ['Durability on trim & high-touch surfaces', 'Excellent — very hard, smooth finish', 'Good — modern acrylics have closed the gap significantly'],
      ['VOCs & odor', 'High VOC, strong odor during application', 'Low VOC, minimal odor'],
      ['Dry time between coats', '8–24 hours', '1–4 hours'],
      ['Cleanup', 'Mineral spirits or solvent required', 'Soap and water'],
      ['Flexibility in Texas heat cycles', 'Becomes brittle over time, more prone to cracking', 'Stays flexible, expands and contracts with temperature swings'],
      ['Yellowing over time', 'Yellows, especially noticeable on whites', 'Resists yellowing'],
      ['Best suited for', 'Metal railings, gates, some high-durability trim', 'Walls, siding, cabinets, and most modern interior/exterior use'],
    ],
  },
  {
    type: 'cards',
    heading: 'Where Each One Still Makes Sense',
    cards: [
      { icon: faHouse, title: 'Exterior siding & stucco', body: '100% acrylic latex is the modern standard — it flexes with heat and humidity swings instead of cracking like older oil formulas.' },
      { icon: faDoorClosed, title: 'Interior walls & ceilings', body: 'Latex wins on low odor, quick dry time, and easy soap-and-water cleanup — especially important in occupied homes.' },
      { icon: faUtensils, title: 'Cabinets & doors', body: 'Modern waterborne alkyd hybrids give you a hard, factory-like finish without the strong solvents of traditional oil-based paint.' },
      { icon: faGripLines, title: 'Metal railings, gates & fences', body: 'Oil-based primers and paints still hold a real edge here for rust inhibition and adhesion to bare metal.' },
      { icon: faDroplet, title: 'High-humidity bathrooms & kitchens', body: 'Latex with a mildew-resistant additive handles Central Texas humidity better than oil-based paint, which can trap moisture underneath it.' },
      { icon: faLandmark, title: 'Historic trim restoration', body: 'Oil-based paint is occasionally still specified to match an original finish, though waterborne alkyds are closing that gap fast.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Most modern paint lines have pushed toward waterborne alkyd hybrids — products that apply like latex (soap-and-water cleanup, low odor) but cure into an oil-like hard, smooth finish. For most trim and cabinet work today, we reach for these before traditional oil-based paint.",
  },
  {
    type: 'tips',
    heading: 'How to Choose',
    items: [
      'For exterior siding and stucco in Central Texas heat, choose 100% acrylic latex — it flexes instead of cracking',
      'For cabinets and trim, ask about waterborne alkyd hybrids before defaulting to traditional oil-based paint',
      'If fumes are a concern — young kids, pets, or an occupied home during the project — latex is almost always the better call',
      'Oil-based primers still earn their keep for stain-blocking and rust inhibition on bare metal',
      "When in doubt, ask your painter what's actually in the can — \"oil-based\" and \"alkyd\" don't always mean the same formulation anymore",
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Oil-Based vs. Latex Paint: What's Best for Central Texas Homes?"
        description="Durability, VOCs, cleanup, and cost — an honest comparison of oil-based and latex paint for Central Texas heat and humidity, and where each one still makes sense."
        imageSrc="/pages/blogs/oil-vs-latex-paint.jpg"
        imageAlt="Oil-based vs latex paint comparison for Texas homes"
        category="Materials"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure Which Paint Is Right for Your Project?"
        body="Get a free color and materials consultation from Brushcraft Painting Co."
        buttonText="Get Free Consultation"
        buttonHref="/services/color-consultation"
      />
      <NewsletterSignup variant={1} spot="oil-vs-latex-blog" />
    </>
  );
}
