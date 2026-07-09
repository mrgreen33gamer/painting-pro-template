// Brushcraft Painting Co. — Interior Painting Service Page
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
import Variant1             from "#/PageComponents/ContactForms/Variant1/Form";

import {
  faPaintRoller, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTag,
  faTrophy, faChartLine, faHouseChimney, faSwatchbook, faHammer, faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function InteriorPaintingPage() {

  const expectations = [
    { icon: faSearch,       title: "Free In-Home Estimate",                description: "We walk every room with you, note trim and ceiling condition, and give you a written price before anything is scheduled." },
    { icon: faFileContract, title: "Furniture & Floor Protection",         description: "Drop cloths over every floor, furniture moved or fully covered, and doorways masked before a single can of paint is opened." },
    { icon: faCheckCircle,  title: "2-Coat Guarantee",                     description: "Every wall gets two full coats for even coverage and true color — no thin, patchy single-coat jobs." },
    { icon: faTag,          title: "5-Year Workmanship Guarantee",         description: "Every interior job we complete is backed by a full five years of coverage on our workmanship." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "2–4 Day Average Turnaround",     description: "Most 3-bedroom interiors are completed in 2–4 days. We give you a realistic schedule upfront and stick to it." },
    { icon: faPaintRoller,  title: "Sherwin-Williams & Benjamin Moore", description: "We paint with premium Sherwin-Williams and Benjamin Moore products, including low-VOC options for families and pets." },
    { icon: faShieldHalved, title: "You Don't Have to Move Out",     description: "We work room by room and protect your home as we go. Most homeowners stay in the house for the entire project." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate",  description: "We walk your home, discuss colors and finishes, and provide a written price — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Protect & Prep", description: "Furniture moved or covered, floors protected, walls patched and sanded before any paint goes on.",           icon: faSearch },
    { number: 3, title: "Paint",          description: "Two full coats applied by an experienced crew, with daily cleanup so your home stays livable.",              icon: faFileContract },
    { number: 4, title: "Walkthrough",    description: "We walk every room with you, touch up anything you flag, and back it with our 5-Year Workmanship Guarantee.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 900, label: "Interior painting projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,  label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,  label: "Years serving Central Texas homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "New Braunfels", benefit: "Home base — fastest scheduling and most available crews.", badge: "Home Base" },
    { town: "San Marcos",    benefit: "Regular route — full interior coverage.",                    badge: "" },
    { town: "Seguin",        benefit: "Full interior painting coverage.",                            badge: "" },
    { town: "Schertz",       benefit: "Same-week estimates for interior projects.",                  badge: "" },
    { town: "Cibolo",        benefit: "Growing coverage area — ask about current availability.",     badge: "" },
    { town: "Boerne",        benefit: "Full service coverage for Hill Country homes.",                badge: "" },
    { town: "Canyon Lake",   benefit: "Interior painting for lake-area homes.",                        badge: "" },
  ];

  const comparisonRows = [
    { feature: "Written price before work starts",   us: "✅ Always",        others: "❌ Verbal estimate only" },
    { feature: "2-coat guarantee on every wall",      us: "✅ Standard",      others: "❌ Often a single coat" },
    { feature: "Furniture & floor protection",        us: "✅ Every room",    others: "❌ Varies" },
    { feature: "5-Year Workmanship Guarantee",        us: "✅ Every job",     others: "❌ Rare or none" },
    { feature: "Low-VOC paint options",               us: "✅ Available",     others: "❌ Not always offered" },
  ];

  const faq = [
    { question: "How long does interior painting take?",                answer: "An average 3-bedroom home takes 2–4 days from start to finish. Larger homes or homes with extensive trim and ceiling work can take a bit longer — we'll give you a realistic timeline at your estimate." },
    { question: "Do you move my furniture?",                            answer: "Yes. We move furniture away from walls and cover anything that can't be moved with plastic sheeting, plus drop cloths on every floor. Your belongings are protected the entire time." },
    { question: "What paint brands do you use?",                        answer: "We primarily use Sherwin-Williams and Benjamin Moore, both of which offer excellent coverage and durability. We also offer low-VOC and zero-VOC options at your request." },
    { question: "Do I need to leave my home during the project?",       answer: "No. We work room by room, so most homeowners stay in the house the entire time. We'll let you know in advance if any specific room needs to be off-limits for a day." },
    { question: "Will the paint smell affect my family or pets?",       answer: "Standard paints have some odor while drying, though it fades within a day or two. If odor is a concern, ask about our low-VOC and zero-VOC paint options — they have little to no smell." },
    { question: "How much does interior painting cost?",                answer: "Most 3-bedroom homes run $2,500–$6,000 depending on square footage, ceiling height, trim detail, and color changes. We provide a written quote after a free in-home estimate." },
  ];

  const crossServices = [
    { icon: faHouseChimney, title: "Exterior Painting",     body: "Complete the outside of your home with the same quality finish.",     link: "/services/exterior-painting" },
    { icon: faSwatchbook,   title: "Cabinet Refinishing",   body: "Update kitchen or bath cabinets with a factory-smooth sprayed finish.", link: "/services/cabinet-refinishing" },
    { icon: faHammer,       title: "Drywall Repair & Prep", body: "Holes, cracks, and water stains repaired before we paint.",              link: "/services/drywall-repair-prep" },
    { icon: faPalette,      title: "Color Consultation",    body: "Get expert help choosing colors that work with your home's lighting.",   link: "/services/color-consultation" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Interior Painting" },
      ]} />

      <SectionIntro
        title="Interior Painting in New Braunfels, TX"
        subtitle="Walls, ceilings, trim, and doors — protected floors and furniture, a 2-coat guarantee, and a 5-Year Workmanship Guarantee on every job."
      />

      <TrustBar headline="1,800+ Central Texas homes and businesses trust Brushcraft Painting Co." />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Interior Painting" expectations={expectations} />
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
        <LocalServiceAreas cityName="New Braunfels" areas={localAreas} servicePath="services/interior-painting" title="Interior Painting Across the Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="New Braunfels" faq={faq} title="Interior Painting FAQs" />
      </div>

      <CTABanner
        headline="Ready to Refresh Your Interior?"
        subline="Free in-home estimates. Upfront pricing, 5-Year Workmanship Guarantee, protected floors and furniture on every job."
        primaryText="Call Us Now"
        primaryLink="tel:+18309007400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant1
          title="Get Your Interior Painting Estimate"
          cityName="New Braunfels"
          slug="services/interior-painting"
          spot="interior-painting-page-form"
          formVariant={1}
        />
      </div>

    </main>
  );
}
