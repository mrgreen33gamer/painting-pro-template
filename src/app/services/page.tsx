// Brushcraft Painting Co. — Services Overview
// Order: Breadcrumb → SectionIntro → TrustBar → ServiceCards → WhatToExpect
//        → ImpactMetrics → WhyChooseUs → ProcessTimeline → GuaranteeSection
//        → Testimonials → LocalServiceAreas → ValueComparison → FAQ → CTABanner → Form
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faPaintRoller, faHouseChimney, faSwatchbook, faBuilding, faPalette, faHammer,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faPaintRoller,  title: "Interior Painting",      body: "Walls, ceilings, trim, and doors — protected with drop cloths and finished with a 2-coat guarantee using Sherwin-Williams and Benjamin Moore paint.", link: "/services/interior-painting" },
    { icon: faHouseChimney, title: "Exterior Painting",       body: "Pressure-washing, scraping, and caulking prep followed by 100%-acrylic exterior paint — EPA Lead-Safe Certified practices on every pre-1978 home.",      link: "/services/exterior-painting" },
    { icon: faSwatchbook,   title: "Cabinet Refinishing",     body: "Factory-quality sprayed cabinet finishes for a fraction of replacement cost — hardware removed, reinstalled, in popular finishes like white shaker.",   link: "/services/cabinet-refinishing" },
    { icon: faBuilding,     title: "Commercial Painting",     body: "After-hours and weekend scheduling for offices, retail, restaurants, and apartment turnovers — fully insured and bonded for commercial contracts.",      link: "/services/commercial-painting" },
    { icon: faPalette,      title: "Color Consultation",      body: "In-home color guidance with sample boards, tested against your actual lighting — credited toward your paint job when booked within 30 days.",           link: "/services/color-consultation" },
    { icon: faHammer,       title: "Drywall Repair & Prep",   body: "Holes, cracks, water stains, and popcorn-ceiling removal — always included in your paint quote, with no surprise add-on charges.",                      link: "/services/drywall-repair-prep" },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free In-Home Estimate",         description: "We walk the project with you, measure surfaces, and explain exactly what's included with a written price before anything is scheduled." },
    { icon: faCheckCircle,  title: "Upfront, Written Pricing",      description: "No hourly billing, no surprise add-ons. You approve the price before we start — and it doesn't change mid-job for the scope we quoted." },
    { icon: faShieldHalved, title: "EPA Lead-Safe Certified Crews", description: "Every crew follows EPA Lead-Safe Certified practices on pre-1978 homes. No shortcuts on containment or cleanup — ever." },
    { icon: faTag,          title: "5-Year Workmanship Guarantee",  description: "Every paint job we complete is backed by a full five years of coverage. If our workmanship fails, we fix it at no charge." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Homes and businesses painted since 2014", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",             suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving the Texas Hill Country",     suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset,      title: "A Real Person Answers",       description: "Call or text and reach a real Brushcraft team member — not a call center. We schedule your free estimate fast, usually within a few days." },
    { icon: faShieldHalved, title: "No Contracts, Ever",          description: "There's no subscription or service agreement required. You hire us because the work is done right — not because you're locked in." },
    { icon: faLock,         title: "Licensed, Bonded & Insured",  description: "Fully insured and bonded on every job, residential or commercial. Proof of insurance available on request for property managers." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate", description: "Call, text, or book online. We'll walk the project with you and provide a written quote — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Prep the Space", description: "Furniture protection, drop cloths, masking, and any needed drywall or surface repair happen before a drop of paint is opened.", icon: faSearch },
    { number: 3, title: "Paint It Right", description: "Professional-grade paint applied by an experienced crew, with daily cleanup and a schedule you can count on.", icon: faFileContract },
    { number: 4, title: "Final Walkthrough", description: "We walk the finished job with you, touch up anything you flag, and back it with our 5-Year Workmanship Guarantee.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag,          title: "Upfront Pricing, Always",       description: "The written price you approve is the price you pay — no hourly billing, no change orders mid-job." },
    { icon: faShieldHalved, title: "5-Year Workmanship Guarantee",  description: "Every job is backed by a full five years of coverage. If our workmanship fails, we return and fix it at no charge." },
    { icon: faRotateLeft,   title: "Satisfaction Guarantee",        description: "Not happy with the result? We'll return to make it right. We stand behind every project, no exceptions." },
    { icon: faLock,         title: "Licensed, Bonded & Insured",    description: "Fully insured and bonded for residential and commercial work. Documentation available on request." },
  ];

  const localAreas = [
    { town: "New Braunfels", benefit: "Home base — fastest scheduling and most available crews.", badge: "Home Base" },
    { town: "San Marcos",    benefit: "Regular route — full interior, exterior, and commercial coverage.", badge: "" },
    { town: "Seguin",        benefit: "Full residential and commercial painting coverage.",                badge: "" },
    { town: "Schertz",       benefit: "Same-week estimates for Schertz homes and businesses.",              badge: "" },
    { town: "Cibolo",        benefit: "Growing coverage area — ask about current availability.",             badge: "" },
    { town: "Boerne",        benefit: "Full service coverage for Hill Country homes.",                       badge: "" },
    { town: "Canyon Lake",   benefit: "Exterior and lake-house painting specialists.",                        badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing",         us: "✅ Always",          others: "❌ Vague estimates" },
    { feature: "5-Year Workmanship Guarantee",     us: "✅ Every job",       others: "❌ Rare or none" },
    { feature: "EPA Lead-Safe Certified crews",    us: "✅ All crews",       others: "❌ Not always" },
    { feature: "No service contracts required",    us: "✅ Always",          others: "❌ Sometimes required" },
    { feature: "Drywall prep included in quote",   us: "✅ No surprise fees", others: "❌ Often billed extra" },
  ];

  const faq = [
    { question: "How much does painting cost in New Braunfels?",            answer: "Interior projects typically run $2,500–$6,000 for an average 3-bedroom home. Exterior projects run $4,000–$12,000 depending on size and prep needed. Cabinet refinishing averages $3,000–$7,000. Commercial work is quoted by square footage. We always provide a written price before starting." },
    { question: "Are you EPA Lead-Safe Certified?",                          answer: "Yes — Brushcraft Painting Co. is an EPA Lead-Safe Certified Firm. For any home built before 1978, our crews follow required lead-safe containment and cleanup practices, no exceptions." },
    { question: "Do I need to move out of my home during the project?",     answer: "No. For interior jobs we work room by room, protect your furniture and floors, and most homeowners stay in the house the entire time. We'll flag any rooms that need to be temporarily off-limits." },
    { question: "What areas do you serve?",                                 answer: "We're based in New Braunfels and serve San Marcos, Seguin, Schertz, Cibolo, Boerne, and Canyon Lake, along with the surrounding Texas Hill Country." },
    { question: "Do you offer a warranty on your work?",                    answer: "Yes — every job is backed by our 5-Year Workmanship Guarantee. If our workmanship fails within that window, we return and fix it at no charge." },
    { question: "How do I get a quote?",                                    answer: "Call, text, or fill out our online form. We'll schedule a free in-home estimate and provide written pricing before any work is scheduled." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services" },
      ]} />

      <SectionIntro
        title="Painting Services for New Braunfels & the Texas Hill Country"
        subtitle="Interior, exterior, cabinets, and commercial work — done right, priced upfront, backed by a 5-Year Workmanship Guarantee on every job."
      />

      <TrustBar headline="Trusted by 1,800+ Central Texas homes and businesses since 2014" />

      <div className={styles.section}>
        <ServiceCardComponent heading="What We Do" cards={services} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How Every Project Works" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Results That Speak for Themselves" metrics={metrics} cityName="New Braunfels" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="New Braunfels" features={whyFeatures} title="Why the Texas Hill Country Chooses Brushcraft" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="New Braunfels" areas={localAreas} servicePath="services" title="Serving All of the Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="New Braunfels" faq={faq} title="Painting Service FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your Project?"
        subline="Free estimates available. Upfront pricing, 5-Year Workmanship Guarantee, no contracts ever."
        primaryText="Call Us Now"
        primaryLink="tel:+18309007400"
        secondaryText="Schedule Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant2
          title="Request a Free Estimate"
          cityName="New Braunfels"
          slug="services"
          spot="services-page-form"
          formVariant={2}
        />
      </div>
    </>
  );
}
