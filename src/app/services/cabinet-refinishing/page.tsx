// Brushcraft Painting Co. — Cabinet Refinishing Service Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhatToExpect → WhyChooseUs
//        → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//        → LocalServiceAreas → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4              from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSwatchbook, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTag,
  faTrophy, faChartLine, faPaintRoller, faPalette, faHammer,
} from "@fortawesome/free-solid-svg-icons";

export default function CabinetRefinishingPage() {

  const expectations = [
    { icon: faSearch,       title: "Free In-Home Estimate",           description: "We assess your cabinet boxes and doors, discuss finish and color options, and give you a written price before scheduling." },
    { icon: faFileContract, title: "Hardware Removed & Reinstalled",  description: "Every hinge, pull, and knob is removed before finishing and reinstalled afterward — or swapped for new hardware if you'd like." },
    { icon: faCheckCircle,  title: "Sprayed, Not Brushed",            description: "A sprayed finish looks factory-smooth, with no brush marks or roller texture — the difference between DIY and professional results." },
    { icon: faTag,          title: "5-Year Workmanship Guarantee",    description: "Every cabinet refinishing job we complete is backed by a full five years of coverage on our workmanship." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "5–7 Day Turnaround",              description: "Most kitchens are back in use within 5–7 days. We work efficiently in a dedicated spray area to minimize disruption to your home." },
    { icon: faSwatchbook,   title: "Popular Finishes On Hand",        description: "White shaker, navy, and sage green are our most-requested colors — but we can match or create any color you have in mind." },
    { icon: faShieldHalved, title: "A Fraction of Replacement Cost",  description: "Refinishing solid cabinet boxes typically costs far less than full replacement, with a comparable factory-quality result." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate",  description: "We assess your cabinets, discuss finish and color, and provide a written price — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Remove & Prep",  description: "Doors and hardware removed, surfaces cleaned, sanded, and primed to accept a smooth, durable finish.",         icon: faSearch },
    { number: 3, title: "Spray Finish",   description: "Cabinet boxes and doors sprayed in a dedicated area for an even, factory-smooth finish — no brush marks.",     icon: faFileContract },
    { number: 4, title: "Reinstall",      description: "Doors rehung, hardware reinstalled (or upgraded), and every surface inspected before we call the job done.",   icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 240, label: "Kitchens and bathrooms refinished", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,  label: "Customer satisfaction rating",       suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,  label: "Years serving Central Texas homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "New Braunfels", benefit: "Home base — fastest scheduling and most available crews.", badge: "Home Base" },
    { town: "San Marcos",    benefit: "Regular route — full cabinet refinishing coverage.",         badge: "" },
    { town: "Seguin",        benefit: "Full cabinet refinishing coverage.",                          badge: "" },
    { town: "Schertz",       benefit: "Same-week estimates for kitchen and bath projects.",          badge: "" },
    { town: "Cibolo",        benefit: "Growing coverage area — ask about current availability.",     badge: "" },
    { town: "Boerne",        benefit: "Full service coverage for Hill Country homes.",                badge: "" },
    { town: "Canyon Lake",   benefit: "Cabinet refinishing for lake-area homes.",                      badge: "" },
  ];

  const comparisonRows = [
    { feature: "Sprayed factory-smooth finish",     us: "✅ Standard",     others: "❌ Often brushed" },
    { feature: "Hardware removal & reinstall",      us: "✅ Included",     others: "❌ Extra charge" },
    { feature: "Written price before work starts",  us: "✅ Always",       others: "❌ Verbal estimate only" },
    { feature: "5-Year Workmanship Guarantee",       us: "✅ Every job",    others: "❌ Rare or none" },
    { feature: "Full color-change capability",       us: "✅ Any color",    others: "❌ Limited options" },
  ];

  const faq = [
    { question: "How long is my kitchen unusable during refinishing?",   answer: "Typically 5–7 days. Doors and drawer fronts are removed to a dedicated spray area, so your kitchen boxes stay in place — you'll have limited access to some storage during that window, but the space isn't fully torn out." },
    { question: "Is refinishing really cheaper than replacing cabinets?", answer: "Yes, significantly. Refinishing solid cabinet boxes runs $3,000–$7,000 for an average kitchen, versus tens of thousands for full replacement — with a comparable factory-quality look when it's sprayed rather than brushed." },
    { question: "Can I completely change my cabinet color?",             answer: "Absolutely. White shaker, navy, and sage green are our most popular requests, but we can match or create virtually any color. We'll bring samples to your free estimate so you can see the finish in your own lighting." },
    { question: "Can I get new hardware while you're at it?",            answer: "Yes — this is a great time to upgrade hardware. We can reinstall your existing hinges and pulls or install new hardware you provide or that we help you source." },
    { question: "Will the finish hold up to daily kitchen use?",         answer: "Yes. We use durable, cabinet-grade coatings designed to resist kitchen wear, grease, and cleaning — backed by our 5-Year Workmanship Guarantee." },
    { question: "Do you refinish bathroom cabinets too?",                answer: "Yes — the same sprayed-finish process works for bathroom vanities and cabinetry, and is often a faster turnaround than a full kitchen." },
  ];

  const crossServices = [
    { icon: faPaintRoller, title: "Interior Painting",  body: "Pair your new cabinet finish with a full interior repaint.",             link: "/services/interior-painting" },
    { icon: faPalette,     title: "Color Consultation", body: "Get expert help choosing a cabinet color that flows with the rest of your home.", link: "/services/color-consultation" },
    { icon: faHammer,      title: "Drywall Repair & Prep", body: "We handle wall repairs near cabinetry before we paint.",              link: "/services/drywall-repair-prep" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Cabinet Refinishing" },
      ]} />

      <SectionIntro
        title="Cabinet Refinishing in New Braunfels, TX"
        subtitle="Factory-quality sprayed finishes for kitchen and bath cabinets — hardware removed and reinstalled, backed by a 5-Year Workmanship Guarantee."
      />

      <TrustBar headline="1,800+ Central Texas homes and businesses trust Brushcraft Painting Co." />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Cabinet Refinishing" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="New Braunfels" features={whyFeatures} title="Why New Braunfels Calls Brushcraft First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="New Braunfels" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="New Braunfels" areas={localAreas} servicePath="services/cabinet-refinishing" title="Cabinet Refinishing Across the Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="New Braunfels" faq={faq} title="Cabinet Refinishing FAQs" />
      </div>

      <CTABanner
        headline="Ready for a Brand-New Kitchen Look?"
        subline="Free in-home estimates. Factory-quality sprayed finish, hardware handled, 5-Year Workmanship Guarantee."
        primaryText="Call Us Now"
        primaryLink="tel:+18309007400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Get Your Cabinet Refinishing Estimate"
          cityName="New Braunfels"
          slug="services/cabinet-refinishing"
          spot="cabinet-refinishing-page-form"
          formVariant={4}
        />
      </div>

    </main>
  );
}
