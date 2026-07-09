// Brushcraft Painting Co. — Exterior Painting Service Page
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
import Variant3             from "#/PageComponents/ContactForms/Variant3/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faCertificate,
  faTrophy, faChartLine, faPaintRoller, faSwatchbook, faHammer, faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function ExteriorPaintingPage() {

  const expectations = [
    { icon: faSearch,        title: "Free In-Home Estimate",              description: "We inspect your siding, trim, fascia, and soffits, and give you a written scope and price before scheduling anything." },
    { icon: faFileContract,  title: "Full Surface Prep",                  description: "Pressure-washing, scraping, sanding, and caulking every gap — the prep work that determines how long your paint job actually lasts." },
    { icon: faCertificate,   title: "EPA Lead-Safe Certified Practices",  description: "Required containment and cleanup procedures on every home built before 1978 — no shortcuts, no exceptions." },
    { icon: faCheckCircle,   title: "100%-Acrylic Exterior Paint",        description: "Built to handle Texas heat, UV exposure, and sudden storms — applied with a 5-Year Workmanship Guarantee." },
  ];

  const whyFeatures = [
    { icon: faCertificate,   title: "EPA Lead-Safe Certified Firm",       description: "Older homes need extra care. We're a certified Lead-Safe firm and follow required practices on every pre-1978 property." },
    { icon: faClock,         title: "Weather-Aware Scheduling",           description: "Texas heat and sudden storms can ruin an exterior job. We schedule around temperature and forecast to protect the finish." },
    { icon: faShieldHalved,  title: "7–10 Year Paint Life",               description: "Proper prep plus 100%-acrylic exterior paint means your exterior holds up for 7–10 years, not 2–3." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate",   description: "We inspect the exterior, identify problem areas, and give you a written price — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Wash & Prep",     description: "Pressure-washing, scraping loose paint, sanding, and caulking every gap before priming begins.",                icon: faSearch },
    { number: 3, title: "Paint",           description: "100%-acrylic exterior paint applied in weather-appropriate conditions, with daily site cleanup.",               icon: faFileContract },
    { number: 4, title: "Walkthrough",     description: "We walk the exterior with you, touch up anything you flag, and back it with our 5-Year Workmanship Guarantee.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 650, label: "Exterior painting projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,  label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,  label: "Years serving Central Texas homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "New Braunfels", benefit: "Home base — fastest scheduling and most available crews.", badge: "Home Base" },
    { town: "San Marcos",    benefit: "Regular route — full exterior coverage.",                    badge: "" },
    { town: "Seguin",        benefit: "Full exterior painting coverage.",                            badge: "" },
    { town: "Schertz",       benefit: "Same-week estimates for exterior projects.",                  badge: "" },
    { town: "Cibolo",        benefit: "Growing coverage area — ask about current availability.",     badge: "" },
    { town: "Boerne",        benefit: "Full service coverage for Hill Country homes.",                badge: "" },
    { town: "Canyon Lake",   benefit: "Exterior and lake-house painting specialists.",                 badge: "" },
  ];

  const comparisonRows = [
    { feature: "Full pressure-wash, scrape & caulk prep", us: "✅ Every job",   others: "❌ Often skipped" },
    { feature: "EPA Lead-Safe Certified crews",           us: "✅ All crews",   others: "❌ Not always" },
    { feature: "100%-acrylic exterior-grade paint",       us: "✅ Standard",    others: "❌ Varies" },
    { feature: "Weather-aware scheduling",                us: "✅ Always",      others: "❌ Rarely tracked" },
    { feature: "5-Year Workmanship Guarantee",            us: "✅ Every job",   others: "❌ Rare or none" },
  ];

  const faq = [
    { question: "What's the best season to paint a house in Texas?",         answer: "Spring and fall are ideal — mild temperatures and lower humidity give paint the best cure time. We can also paint through summer with early-morning scheduling and weather monitoring to avoid the hottest parts of the day." },
    { question: "How long does exterior paint typically last?",              answer: "With proper prep and 100%-acrylic exterior paint, most homes hold their finish for 7–10 years. Cheap prep or low-grade paint can fail in 2–3 years, which is why prep work matters more than the paint itself." },
    { question: "My home was built before 1978 — is that a problem?",       answer: "Not a problem, but it does require extra care. We're an EPA Lead-Safe Certified Firm, and our crews follow federally required containment and cleanup practices on every pre-1978 home to keep your family and pets safe." },
    { question: "What happens if it rains during my exterior project?",      answer: "We monitor the forecast and schedule around weather. If rain interrupts an in-progress job, we pause, protect exposed surfaces, and resume as soon as conditions allow — at no extra charge to you." },
    { question: "How much does exterior painting cost?",                    answer: "Most homes run $4,000–$12,000 depending on size, siding material, and how much prep and repair is needed. We provide a written quote after a free in-home estimate." },
    { question: "Do you paint trim, fascia, and soffits too?",              answer: "Yes — exterior painting includes siding, trim, fascia, soffits, and doors. We'll walk the full exterior with you and note anything that needs extra attention before quoting." },
  ];

  const crossServices = [
    { icon: faHammer,       title: "Drywall Repair & Prep", body: "We handle exterior wood repair and interior drywall damage before painting.", link: "/services/drywall-repair-prep" },
    { icon: faPalette,      title: "Color Consultation",    body: "Get expert help choosing exterior colors that suit your home and neighborhood.", link: "/services/color-consultation" },
    { icon: faPaintRoller,  title: "Interior Painting",     body: "Complete the inside of your home with the same quality finish.",                link: "/services/interior-painting" },
    { icon: faSwatchbook,   title: "Cabinet Refinishing",   body: "Update kitchen or bath cabinets with a factory-smooth sprayed finish.",           link: "/services/cabinet-refinishing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Exterior Painting" },
      ]} />

      <SectionIntro
        title="Exterior Painting in New Braunfels, TX"
        subtitle="Siding, trim, fascia, and soffits — full prep, 100%-acrylic paint, and EPA Lead-Safe Certified practices on every pre-1978 home."
      />

      <TrustBar headline="1,800+ Central Texas homes and businesses trust Brushcraft Painting Co." />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Exterior Painting" expectations={expectations} />
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
        <LocalServiceAreas cityName="New Braunfels" areas={localAreas} servicePath="services/exterior-painting" title="Exterior Painting Across the Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="New Braunfels" faq={faq} title="Exterior Painting FAQs" />
      </div>

      <CTABanner
        headline="Ready to Protect Your Home's Exterior?"
        subline="Free in-home estimates. EPA Lead-Safe Certified crews, 100%-acrylic paint, 5-Year Workmanship Guarantee."
        primaryText="Call Us Now"
        primaryLink="tel:+18309007400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant3
          title="Get Your Exterior Painting Estimate"
          cityName="New Braunfels"
          slug="services/exterior-painting"
          spot="exterior-painting-page-form"
          formVariant={3}
        />
      </div>

    </main>
  );
}
