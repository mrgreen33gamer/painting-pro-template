// Brushcraft Painting Co. — Commercial Painting Service Page
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
import Variant2              from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faBuilding, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faLock,
  faTrophy, faChartLine, faHouseChimney, faPaintRoller, faHammer, faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialPaintingPage() {

  const expectations = [
    { icon: faSearch,        title: "Free Walkthrough & Quote",       description: "We walk your space with you or your property manager and provide a written, square-footage-based quote before scheduling." },
    { icon: faClock,         title: "After-Hours & Weekend Options",  description: "Painting scheduled nights and weekends to avoid disrupting your business, tenants, or customers during operating hours." },
    { icon: faLock,          title: "Fully Insured & Bonded",         description: "Documentation available for property managers and general contractors — no gaps in coverage on commercial jobs." },
    { icon: faCheckCircle,   title: "Fast Turnaround on Turnovers",   description: "Apartment and unit turnover pricing built for speed, so vacant units get back on the market quickly." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Nights & Weekends Available",     description: "We staff crews for after-hours and weekend work specifically so retail, restaurants, and offices don't lose business hours to painting." },
    { icon: faShieldHalved, title: "Insured & Bonded for Commercial Work", description: "We carry the coverage commercial contracts require and provide proof of insurance and bonding on request." },
    { icon: faBuilding,     title: "Experience with Property Managers", description: "From single-unit turnovers to multi-building portfolios, we understand the pricing and scheduling property managers need." },
  ];

  const processSteps = [
    { number: 1, title: "Walkthrough & Quote", description: "We assess the space with you and provide a written, square-footage-based quote — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Schedule",            description: "We build a schedule around your business hours, tenant turnover dates, or building access windows.",           icon: faSearch },
    { number: 3, title: "Paint",               description: "Crews complete the work with minimal disruption, cleaning up daily and coordinating with your on-site staff.", icon: faFileContract },
    { number: 4, title: "Sign-Off",            description: "We walk the finished space with you or your property manager and address any punch-list items immediately.",   icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 180, label: "Commercial and multi-unit projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,  label: "Client satisfaction rating",                     suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,  label: "Years serving Central Texas businesses",         suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "New Braunfels", benefit: "Home base — fastest scheduling and most available crews.", badge: "Home Base" },
    { town: "San Marcos",    benefit: "Regular route — full commercial coverage.",                  badge: "" },
    { town: "Seguin",        benefit: "Full commercial painting coverage.",                          badge: "" },
    { town: "Schertz",       benefit: "Same-week quotes for commercial and multi-unit properties.",  badge: "" },
    { town: "Cibolo",        benefit: "Growing coverage area — ask about current availability.",     badge: "" },
    { town: "Boerne",        benefit: "Full service coverage for Hill Country businesses.",           badge: "" },
    { town: "Canyon Lake",   benefit: "Commercial coverage for lake-area properties.",                 badge: "" },
  ];

  const comparisonRows = [
    { feature: "After-hours & weekend scheduling", us: "✅ Standard offering", others: "❌ Business hours only" },
    { feature: "Fully insured & bonded",           us: "✅ Documentation provided", others: "❌ Varies" },
    { feature: "Written, itemized quote",          us: "✅ Always",             others: "❌ Vague estimate" },
    { feature: "Apartment turnover pricing",       us: "✅ Built for speed",    others: "❌ Not specialized" },
    { feature: "5-Year Workmanship Guarantee",     us: "✅ Every job",          others: "❌ Rare or none" },
  ];

  const faq = [
    { question: "Do you work nights and weekends?",                          answer: "Yes — after-hours and weekend scheduling is one of our most-used commercial options. We build the schedule around your business hours so you don't lose operating time or customer access." },
    { question: "Can you provide proof of insurance and bonding?",           answer: "Yes. We're fully insured and bonded for commercial contracts and can provide documentation directly to your property manager, general contractor, or leasing office as needed." },
    { question: "How do you price multi-unit apartment turnovers?",         answer: "Apartment and unit turnover work is priced per unit based on square footage and scope, with volume consideration for multi-unit or ongoing portfolio work. Ask us for a per-unit rate sheet." },
    { question: "How long does a typical commercial project take?",         answer: "Timeline depends entirely on square footage and scope — a single office suite might take 2–3 days, while a larger retail space or warehouse could take one to two weeks. We give you a firm schedule at quote time." },
    { question: "What types of commercial spaces do you paint?",            answer: "Offices, retail stores, restaurants, apartment turnovers, and warehouses. If it's a commercial or multi-unit property, we can quote it." },
    { question: "How is commercial pricing structured?",                    answer: "Commercial work is quoted by square footage and scope rather than a fixed price range — every space is different. We'll walk your property and provide a written, itemized quote before any work begins." },
  ];

  const crossServices = [
    { icon: faHouseChimney, title: "Exterior Painting",     body: "Refresh the outside of your building or storefront.",           link: "/services/exterior-painting" },
    { icon: faPaintRoller,  title: "Interior Painting",     body: "Office, retail, and common-area interior painting.",             link: "/services/interior-painting" },
    { icon: faHammer,       title: "Drywall Repair & Prep", body: "Repair walls between tenants or before a full repaint.",         link: "/services/drywall-repair-prep" },
    { icon: faPalette,      title: "Color Consultation",    body: "Get help choosing brand-aligned colors for your space.",         link: "/services/color-consultation" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Painting" },
      ]} />

      <SectionIntro
        title="Commercial Painting in New Braunfels, TX"
        subtitle="Offices, retail, restaurants, apartment turnovers, and warehouses — after-hours scheduling, fully insured and bonded crews."
      />

      <TrustBar headline="1,800+ Central Texas homes and businesses trust Brushcraft Painting Co." />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Commercial Painting" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="New Braunfels" features={whyFeatures} title="Why Property Managers Choose Brushcraft" />
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
        <LocalServiceAreas cityName="New Braunfels" areas={localAreas} servicePath="services/commercial-painting" title="Commercial Painting Across the Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="New Braunfels" faq={faq} title="Commercial Painting FAQs" />
      </div>

      <CTABanner
        headline="Ready to Schedule Your Commercial Project?"
        subline="Free walkthroughs and written quotes. After-hours scheduling, fully insured and bonded."
        primaryText="Call Us Now"
        primaryLink="tel:+18309007400"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant2
          title="Get Your Commercial Painting Quote"
          cityName="New Braunfels"
          slug="services/commercial-painting"
          spot="commercial-painting-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
