'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSun, faLayerGroup, faDroplet, faHammer, faWater, faPaintbrush, faHandSparkles } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "New Braunfels sits squarely in the Texas Hill Country sun belt — long, hot summers and swings between bone-dry heat and high humidity put more stress on exterior paint here than in much of the country. The good news: your house tells you when it needs attention, if you know what to look for. Here are the seven signs we see most often on estimate visits, from early warnings to the ones that mean you've waited too long.",
  },
  {
    type: 'cards',
    heading: '7 Signs Your Home Needs a Repaint',
    cards: [
      { icon: faSun, title: 'Fading and chalking', body: 'UV exposure breaks down pigment and binder over time. If the color looks washed out or leaves a powdery residue on your hand, the protective layer has already failed.' },
      { icon: faLayerGroup, title: 'Peeling or cracking paint', body: 'Once paint starts lifting at the edges or cracking into a spiderweb pattern, moisture is getting underneath it — and it will only spread.' },
      { icon: faDroplet, title: 'Caulk failure around trim and windows', body: 'Cracked, shrunken, or missing caulk lets water behind your siding and trim. This is usually the first thing to fail, well before the paint itself.' },
      { icon: faHammer, title: 'Soft, spongy, or visibly rotted wood', body: 'Press a screwdriver gently into exposed trim or fascia. If it sinks in easily, water has been getting in for a while and carpentry repair is needed before repainting.' },
      { icon: faWater, title: 'Blistering or bubbling paint', body: 'Bubbles usually mean moisture trapped under the paint film, often from humidity, irrigation overspray, or a leak. Painting over it without addressing the source won\'t hold.' },
      { icon: faPaintbrush, title: 'Interior wall staining or discoloration', body: 'Yellowing near light fixtures, brown water rings, or blotchy patches on walls and ceilings are signs of moisture, smoke, or simply years of accumulated grime that a fresh coat resets.' },
      { icon: faHandSparkles, title: 'Heavy scuffing in high-traffic areas', body: 'Hallways, stairwells, and kids\' rooms take a beating. When spot-cleaning stops working and touch-up paint no longer matches, it\'s time for a refresh.' },
    ],
  },
  {
    type: 'table',
    heading: 'Spot Touch-Up vs. Full Repaint — What Fits Your Situation',
    tableHeaders: ['Factor', 'Spot Touch-Up', 'Full Repaint'],
    tableRows: [
      ['Extent of damage', 'Limited to one wall or trim piece', 'Visible across most of the exterior or several rooms'],
      ['Paint condition nearby', 'Still adhering well elsewhere', 'Chalking, cracking, or peeling showing up in multiple spots'],
      ['Age of last paint job', 'Under 5 years old', 'Over 7–10 years old'],
      ['Typical cost', '$150–$600', '$4,500–$12,000+ for a full exterior'],
      ['How long the fix lasts', '1–3 years before it shows again', '7–10 years with quality paint and proper prep'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Run your hand across a sun-facing exterior wall. If it comes away covered in a chalky white residue, the paint's protective layer has broken down — even if the color still looks fine from the street.",
  },
  {
    type: 'tips',
    heading: 'What To Do If You Spot These Signs',
    items: [
      'Get a free on-site inspection before small issues turn into wood replacement',
      'Address caulk failure and wood rot before painting over them — paint won\'t fix a moisture problem',
      'Ask for a written scope that separates carpentry repair from the painting itself',
      'Don\'t wait for peeling to spread past one elevation — south- and west-facing walls fail first in New Braunfels',
      'Plan on a full repaint every 7–10 years for most Central Texas homes, sooner on the sunniest sides',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs Your Home Needs a Repaint in New Braunfels, TX"
        description="Texas sun and humidity show up on your paint job long before most homeowners notice. Here are the 7 clear warning signs it's time to repaint — from chalking to caulk failure."
        imageSrc="/pages/blogs/repaint-signs.jpg"
        imageAlt="Signs your home needs a repaint in New Braunfels TX"
        category="Exterior"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Spotting These Signs on Your Home?"
        body="Get a free on-site estimate from Brushcraft Painting Co. — New Braunfels' EPA Lead-Safe Certified painting company."
        buttonText="Get a Free Estimate"
        buttonHref="/services/exterior-painting"
      />
      <NewsletterSignup variant={1} spot="repaint-signs-blog" />
    </>
  );
}
