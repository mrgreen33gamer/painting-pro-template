"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";

import styles from "./page.module.scss";

import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Organization Before We Quote",
      description: "An HOA board, a commercial property manager, and a city procurement office all work differently. Before we quote anything, we learn your approval process, budget cycle, and scheduling constraints — and build the proposal around them.",
    },
    {
      icon: faShieldHalved,
      title: "EPA Lead-Safe Certified, Fully Insured",
      description: "We're based in New Braunfels, TX and hold EPA Lead-Safe Certification for older buildings, along with full insurance and bonding — the documentation multi-unit, commercial, and public projects require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Painting, Scheduling & Compliance — All Under One Roof",
      description: "Whether your project needs a phased repaint plan, after-hours scheduling, or prevailing wage documentation — we handle all of it. No juggling multiple vendors for one project.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,   label: "B2B industries actively served across Texas",        suffix: "",  duration: 2 },
    { icon: faChartLine, value: 100, label: "Multi-unit and commercial properties painted",        suffix: "+", duration: 3 },
    { icon: faClock,     value: 12,  label: "Years serving Texas Hill Country organizations",      suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "New Braunfels", benefit: "Our home base — serving HOAs, commercial properties, and public agencies.", highlight: "Headquarters" },
    { town: "San Marcos",    benefit: "Multi-unit properties and commercial buildings across the city.",           highlight: "" },
    { town: "Seguin",        benefit: "Growing commercial corridor and county facilities we serve.",                highlight: "" },
    { town: "Schertz",       benefit: "Established communities and municipal facilities.",                         highlight: "" },
    { town: "Cibolo",        benefit: "Newer developments and commercial properties in a fast-growing city.",       highlight: "" },
    { town: "Boerne",        benefit: "Premium communities and historic public buildings.",                         highlight: "" },
    { town: "Canyon Lake",   benefit: "Lake-area HOAs, vacation properties, and parks facilities.",                 highlight: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling & process",  us: "✅ Built per project type",       others: "❌ One-size-fits-all approach" },
    { feature: "Texas Hill Country market knowledge",         us: "✅ 12+ years in New Braunfels",   others: "❌ Out-of-area contractors" },
    { feature: "EPA Lead-Safe Certified crews",                us: "✅ Certified on every job",       others: "❌ Not always certified" },
    { feature: "Transparent, upfront pricing",                 us: "✅ Quote before any work starts", others: "❌ Billable hours + surprises" },
    { feature: "5-Year Workmanship Guarantee",                  us: "✅ On every project",             others: "❌ Limited or no guarantee" },
  ];

  const faq = [
    {
      question: "What types of organizations does Brushcraft Painting Co. work with?",
      answer: "We currently have dedicated programs and proven experience for HOAs and property management, commercial real estate, and municipal and government facilities — in addition to our standard residential painting services.",
    },
    {
      question: "Do you build a custom proposal for each organization, or use the same approach for everyone?",
      answer: "Every proposal is built around the organization and the project. An HOA board, a commercial property manager, and a city procurement office all have completely different approval processes, budget cycles, and scheduling needs — we build to those differences specifically.",
    },
    {
      question: "Do you serve organizations outside of New Braunfels?",
      answer: "Yes — while we're based in New Braunfels and primarily serve the Texas Hill Country, we've completed projects for HOAs, commercial properties, and public agencies from San Marcos to Boerne and Canyon Lake.",
    },
    {
      question: "Can you handle painting for a multi-property or multi-building portfolio?",
      answer: "Yes — we build phased, portfolio-wide pricing and scheduling for organizations managing multiple properties or buildings, with a single dedicated point of contact for the entire relationship.",
    },
    {
      question: "How do I know which program is right for my organization?",
      answer: "Start by clicking your industry below or contacting us directly. We'll do a free property walkthrough, identify your biggest scheduling and budget constraints, and recommend the approach that fits — no pressure, no overselling.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <SectionIntro
        title="Industries We Serve Across Texas"
        subtitle="Painting programs built for how your organization actually works — repaint cycles, tenant turnover, and public bid processes, not a generic residential quote."
      />

      <TrustBar headline="Trusted by HOAs, commercial properties, and public agencies across the Texas Hill Country for over a decade" />

      {/* ── THE INDUSTRY GRID ── */}
      <div className={styles.section}>
        <SectionIndustriesServed
          title="Browse by Industry"
          subtitle="Click your industry to see exactly what we build for organizations like yours."
        />
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Texas Hill Country"
          features={whyFeatures}
          title="Why Industry-Specific Matters"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="New Braunfels"
          areas={localAreas}
          title="Organizations Served Across the Texas Hill Country"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison
          title="Why Organizations Choose Brushcraft Painting Co."
          rows={comparisonRows}
        />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="New Braunfels"
          faq={faq}
          title="Industry Painting Services — Frequently Asked Questions"
        />
      </div>

      <CTABanner
        headline="Don't See Your Organization Type? Let's Talk."
        subline="We work with organizations outside our listed industries all the time. If you manage a property, portfolio, or public facility with a repeatable painting need — we can build a program around it. Free consultation, no pressure."
        primaryText="Tell Us About Your Organization"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+18309007400"
      />

      <div className={styles.section}>
        <Variant4
          title="Get a Free Industry-Specific Estimate"
          cityName="New Braunfels"
          slug="industries"
          spot="industries-hub-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
