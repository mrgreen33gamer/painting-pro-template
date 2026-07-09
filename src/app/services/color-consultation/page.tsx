// Brushcraft Painting Co. — Color Consultation Service Page
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
import Variant1              from "#/PageComponents/ContactForms/Variant1/Form";

import {
  faPalette, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTag,
  faTrophy, faChartLine, faPaintRoller, faHouseChimney, faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

export default function ColorConsultationPage() {

  const expectations = [
    { icon: faSearch,       title: "In-Home Consultation",             description: "We come to you and view your space in its actual natural and artificial light — colors look different on a chip than on your walls." },
    { icon: faFileContract, title: "Sample Boards & Swatches",         description: "We bring large sample boards, not tiny paint chips, so you can see how a color actually reads on your wall throughout the day." },
    { icon: faCheckCircle,  title: "Whole-Home Color Flow",            description: "We help plan how colors transition room to room, so your home feels intentional rather than like a patchwork of unrelated choices." },
    { icon: faTag,          title: "Credited Toward Your Paint Job",   description: "Book your consultation and schedule a full paint job within 30 days, and the consultation fee is credited toward the project." },
  ];

  const whyFeatures = [
    { icon: faPalette,      title: "Lighting-Accurate Recommendations", description: "Colors shift dramatically between morning sun, afternoon shade, and evening lamplight — we evaluate all three before recommending anything." },
    { icon: faShieldHalved, title: "No Guesswork, No Return Trips",     description: "A properly planned color consultation means no repainting a wall three times because the color 'looked different at the store.'" },
    { icon: faSwatchbook,   title: "Works With Any Paint Job",          description: "Whether you're painting one accent wall or your entire home, a consultation makes sure every color choice works together." },
  ];

  const processSteps = [
    { number: 1, title: "Book a Visit",     description: "Schedule an in-home color consultation — often free or credited when bundled with a full paint job over a certain size.", icon: faHeadset },
    { number: 2, title: "Walk the Space",   description: "We view each room in its natural and artificial lighting and discuss the mood and style you're going for.",                icon: faSearch },
    { number: 3, title: "Sample & Compare", description: "Large sample boards are held against your actual walls, furniture, and fixtures — not judged from a tiny paint chip.",      icon: faFileContract },
    { number: 4, title: "Finalize Colors",  description: "We leave you with a clear, whole-home color plan you can hand directly to our painting crew — or take with you anywhere.",   icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 400, label: "Color consultations completed",   suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99,  label: "Clients happy with final color", suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,  label: "Years serving Central Texas homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "New Braunfels", benefit: "Home base — fastest scheduling and most available consultants.", badge: "Home Base" },
    { town: "San Marcos",    benefit: "Regular route — full consultation coverage.",                       badge: "" },
    { town: "Seguin",        benefit: "Full color consultation coverage.",                                  badge: "" },
    { town: "Schertz",       benefit: "Same-week scheduling for color consultations.",                      badge: "" },
    { town: "Cibolo",        benefit: "Growing coverage area — ask about current availability.",            badge: "" },
    { town: "Boerne",        benefit: "Full service coverage for Hill Country homes.",                       badge: "" },
    { town: "Canyon Lake",   benefit: "Color consultations for lake-area homes.",                             badge: "" },
  ];

  const comparisonRows = [
    { feature: "In-home lighting-based evaluation", us: "✅ Standard",       others: "❌ Store swatches only" },
    { feature: "Large sample boards provided",      us: "✅ Every visit",    others: "❌ Small chips only" },
    { feature: "Whole-home color flow planning",     us: "✅ Included",      others: "❌ Room by room only" },
    { feature: "Fee credited toward full paint job", us: "✅ Within 30 days", others: "❌ Rarely offered" },
    { feature: "Can match an existing color",        us: "✅ Yes",           others: "❌ Limited capability" },
  ];

  const faq = [
    { question: "Is the color consultation free?",                          answer: "It's often free or fully credited when bundled with a full paint job over a certain project size. For a standalone consultation not tied to a paint job, we charge a small $150 fee — which is credited toward your project if you book the paint job within 30 days." },
    { question: "How many color options will you bring?",                   answer: "We typically bring several curated options per room based on your style and lighting, plus large sample boards so you can compare them directly against your walls, floors, and fixtures rather than guessing from a tiny chip." },
    { question: "Can you match a color I already have?",                    answer: "Yes — bring us a paint chip, a fabric swatch, or even a photo, and we can match or closely replicate an existing color, or use it as a starting point for something similar but refreshed." },
    { question: "Can you help plan colors for my whole house, not just one room?", answer: "Absolutely — whole-home color flow is one of the most valuable parts of a consultation. We help make sure adjoining rooms and open floor plans transition well instead of clashing." },
    { question: "Do I have to book a paint job to get a consultation?",     answer: "No — you can book a standalone consultation for the $150 fee. Many homeowners just want expert color guidance and plan to paint themselves or hire us later." },
    { question: "How long does a color consultation take?",                 answer: "Most in-home consultations take about 60–90 minutes, depending on how many rooms and how much of the home is involved." },
  ];

  const crossServices = [
    { icon: faPaintRoller,  title: "Interior Painting",   body: "Turn your color plan into a finished interior.",                       link: "/services/interior-painting" },
    { icon: faHouseChimney, title: "Exterior Painting",   body: "Get expert color guidance for your home's exterior too.",                link: "/services/exterior-painting" },
    { icon: faSwatchbook,   title: "Cabinet Refinishing", body: "Choose the perfect cabinet color to complement your walls.",             link: "/services/cabinet-refinishing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Color Consultation" },
      ]} />

      <SectionIntro
        title="Color Consultation in New Braunfels, TX"
        subtitle="In-home color guidance with real sample boards, tested against your actual lighting — credited toward your paint job when booked within 30 days."
      />

      <TrustBar headline="1,800+ Central Texas homes and businesses trust Brushcraft Painting Co." />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens During a Color Consultation" expectations={expectations} />
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
        <LocalServiceAreas cityName="New Braunfels" areas={localAreas} servicePath="services/color-consultation" title="Color Consultations Across the Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="New Braunfels" faq={faq} title="Color Consultation FAQs" />
      </div>

      <CTABanner
        headline="Ready to Find Your Perfect Colors?"
        subline="In-home consultation, real sample boards, whole-home color planning — credited toward your paint job."
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
          title="Book Your Color Consultation"
          cityName="New Braunfels"
          slug="services/color-consultation"
          spot="color-consultation-page-form"
          formVariant={1}
        />
      </div>

    </main>
  );
}
