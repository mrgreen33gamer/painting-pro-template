// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Brushcraft Painting Co. — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'New Braunfels, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Exterior Painting',
    text:     "Our siding was chalky and faded after years in the Texas sun. Brushcraft pressure-washed, caulked every gap, and put two coats of quality paint on in under a week. The crew showed up on time every single day and the color they helped us pick looks incredible against our stone.",
  },
  {
    name:     'Sandra K.',
    location: 'San Marcos, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Interior Painting',
    text:     'Had our whole downstairs repainted and they moved furniture, laid drop cloths over everything, and cleaned up spotless each night. Carlos came by personally to check the color match in different light before they started. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Seguin, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Cabinet Refinishing',
    text:     'Our kitchen cabinets looked dated but were solid wood, so we didn\'t want to replace them. Brushcraft sprayed them in a factory-smooth white finish and swapped the hardware. It looks like a brand new kitchen for a fraction of the cost of new cabinets.',
  },
  {
    name:     'Patricia L.',
    location: 'Schertz, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Color Consultation',
    text:     'Had three companies quote us. Brushcraft was the only one who brought real color samples and walked our rooms with us before recommending anything — not just pushing whatever was in stock. The whole-house palette they helped us settle on flows beautifully room to room.',
  },
  {
    name:     'David M.',
    location: 'Cibolo, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Drywall Repair & Prep',
    text:     'We had water-stain damage and some cracked drywall from a settling foundation. The crew patched, sanded, and primed it so well you can\'t even tell where the repairs were once painted. Great crew, very professional, left the house spotless.',
  },
  {
    name:     'Angela W.',
    location: 'Boerne, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Exterior Painting',
    text:     'Our home was built in the 1970s and they handled the lead-safe prep the right way — plastic sheeting, containment, the works — without making it feel like a big disruption. No shortcuts, no hidden fees either. My new go-to painting company for life.',
  },
  {
    name:     'Robert H.',
    location: 'Canyon Lake, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Commercial Painting',
    text:     'We hired Brushcraft to repaint our office lobby and hallways over a weekend so we wouldn\'t lose business hours. They finished ahead of schedule and the finish quality is excellent. The crew was patient and knowledgeable — didn\'t feel rushed at all. Highly recommend.',
  },
  {
    name:     'Cheryl B.',
    location: 'New Braunfels, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Interior Painting',
    text:     'Called them about a small touch-up job after a move-in and they treated it like it mattered just as much as a whole-house repaint. Fair pricing, no upselling, and the paint they used held up beautifully. I have two small kids at home — this crew genuinely made it easy. Thank you.',
  },
];

export default reviews;
