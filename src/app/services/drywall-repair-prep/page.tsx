// Brushcraft Painting Co. — Drywall Repair & Prep Service Page
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
import Variant3              from "#/PageComponents/ContactForms/Variant3/Form";

import {
  faHammer, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTag,
  faTrophy, faChartLine, faPaintRoller, faHouseChimney, faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

export default function DrywallRepairPrepPage() {

  const expectations = [
    { icon: faSearch,       title: "Free In-Home Assessment",        description: "We inspect holes, cracks, water stains, and texture issues and give you a written scope — whether it's standalone or bundled into a paint quote." },
    { icon: faFileContract, title: "No Surprise Add-On Charges",     description: "Minor drywall repair is already included in every full paint quote — we don't tack on unexpected charges once we're on-site." },
    { icon: faCheckCircle,  title: "Texture-Matched Finish",         description: "Skim coating and re-texturing are matched to your existing wall or ceiling texture so repairs disappear once painted." },
    { icon: faTag,          title: "5-Year Workmanship Guarantee",   description: "Every repair we complete is backed by a full five years of coverage on our workmanship." },
  ];

  const whyFeatures = [
    { icon: faShieldHalved, title: "Always Included in Paint Quotes", description: "If you're getting a full paint job, minor drywall and surface repair is baked into the quote upfront — no billing surprises mid-project." },
    { icon: faHammer,       title: "Popcorn Ceiling Removal",        description: "We remove outdated popcorn texture and re-texture or smooth-finish the ceiling to match your home's current style." },
    { icon: faClock,        title: "Proper Dry Time, Every Time",    description: "We never rush drywall compound — proper dry time before painting is what keeps repairs from showing through later." },
  ];

  const processSteps = [
    { number: 1, title: "Assess",   description: "We inspect the damage — holes, cracks, water stains, or texture — and provide a written scope of work.",           icon: faHeadset },
    { number: 2, title: "Repair",   description: "Patch, skim coat, or re-texture as needed, matched to your existing wall or ceiling finish.",                       icon: faSearch },
    { number: 3, title: "Cure",     description: "We allow proper dry time for compound and texture before priming — rushing this step is what causes repairs to show through paint.", icon: faFileContract },
    { number: 4, title: "Paint",    description: "Once cured, the repaired area is primed and painted to blend seamlessly with the surrounding surface.",             icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 500, label: "Drywall repair projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,  label: "Customer satisfaction rating",       suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,  label: "Years serving Central Texas homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "New Braunfels", benefit: "Home base — fastest scheduling and most available crews.", badge: "Home Base" },
    { town: "San Marcos",    benefit: "Regular route — full drywall repair coverage.",              badge: "" },
    { town: "Seguin",        benefit: "Full drywall repair and prep coverage.",                      badge: "" },
    { town: "Schertz",       benefit: "Same-week estimates for repair and prep work.",                badge: "" },
    { town: "Cibolo",        benefit: "Growing coverage area — ask about current availability.",     badge: "" },
    { town: "Boerne",        benefit: "Full service coverage for Hill Country homes.",                badge: "" },
    { town: "Canyon Lake",   benefit: "Drywall repair for lake-area homes.",                           badge: "" },
  ];

  const comparisonRows = [
    { feature: "Included free in full paint quotes", us: "✅ Always",       others: "❌ Often billed extra" },
    { feature: "Texture-matched repairs",             us: "✅ Standard",     others: "❌ Visible patch lines" },
    { feature: "Popcorn ceiling removal & re-texture", us: "✅ Available",   others: "❌ Not always offered" },
    { feature: "Proper cure time before painting",     us: "✅ Always",      others: "❌ Often rushed" },
    { feature: "5-Year Workmanship Guarantee",         us: "✅ Every job",   others: "❌ Rare or none" },
  ];

  const faq = [
    { question: "Do I need drywall repair before painting?",              answer: "Any hole, crack, or water stain should be repaired before painting — paint doesn't hide surface damage, it highlights it. The good news is minor repairs are already included in every full paint quote at no extra charge." },
    { question: "Can you match my existing wall or ceiling texture?",     answer: "Yes. Whether it's smooth, orange peel, knockdown, or popcorn, we match the surrounding texture so repairs blend in and don't show as a patch once painted." },
    { question: "How long does drywall compound need to dry before painting?", answer: "It depends on the size of the repair and humidity, but we never rush it. Skipping proper cure time is the most common cause of a repair showing through paint later, so we build the dry time into your schedule." },
    { question: "Is this billed separately or bundled with my paint job?", answer: "Minor repairs are bundled into every full paint quote with no surprise add-on charges. Larger repairs, like extensive water damage or full popcorn ceiling removal, are scoped and quoted in writing before we start." },
    { question: "Can you remove popcorn ceilings?",                       answer: "Yes — we remove popcorn texture and either smooth-finish the ceiling or apply a modern re-texture, then prime and paint it to match the rest of your home." },
    { question: "Do you offer drywall repair as a standalone service?",   answer: "Yes. You don't need to book a full paint job to get drywall repair — we take on standalone repair and prep work whenever it's needed." },
  ];

  const crossServices = [
    { icon: faPaintRoller,  title: "Interior Painting", body: "Finish the job with a full interior repaint after repairs.",           link: "/services/interior-painting" },
    { icon: faHouseChimney, title: "Exterior Painting", body: "We also handle exterior wood repair before painting.",                   link: "/services/exterior-painting" },
    { icon: faSwatchbook,   title: "Cabinet Refinishing", body: "Update your cabinets while we're already on-site for repairs.",        link: "/services/cabinet-refinishing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Drywall Repair & Prep" },
      ]} />

      <SectionIntro
        title="Drywall Repair & Prep in New Braunfels, TX"
        subtitle="Holes, cracks, water stains, and popcorn-ceiling removal — bundled into every paint quote with no surprise add-on charges."
      />

      <TrustBar headline="1,800+ Central Texas homes and businesses trust Brushcraft Painting Co." />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Book Drywall Repair" expectations={expectations} />
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
        <LocalServiceAreas cityName="New Braunfels" areas={localAreas} servicePath="services/drywall-repair-prep" title="Drywall Repair & Prep Across the Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="New Braunfels" faq={faq} title="Drywall Repair & Prep FAQs" />
      </div>

      <CTABanner
        headline="Got Damaged Walls or Ceilings?"
        subline="Free assessments, texture-matched repairs, and no surprise add-on charges when bundled with your paint job."
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
          title="Get Your Drywall Repair Estimate"
          cityName="New Braunfels"
          slug="services/drywall-repair-prep"
          spot="drywall-repair-prep-page-form"
          formVariant={3}
        />
      </div>

    </main>
  );
}
