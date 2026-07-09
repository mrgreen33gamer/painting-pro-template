"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant1 from "#/PageComponents/ContactForms/Variant1/Form";

import {
  faClock, faSearch, faDoorOpen, faBuilding,
  faHouseChimney, faHandshake,
  faRocket, faTrophy, faChartLine,
  faPaintRoller, faSwatchbook, faHammer, faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialRealEstateIndustryPage() {

  const painPoints = [
    {
      icon: faDoorOpen,
      problem: "Vacant units sit unpainted while rent is lost every day",
      consequence: "Every day a suite sits in turnover instead of leased is lost revenue. Slow contractor turnaround on paint and touch-ups is one of the most common bottlenecks between move-out and move-in.",
    },
    {
      icon: faClock,
      problem: "Painters can't work around tenant business hours",
      consequence: "Occupied retail and office buildings can't have crews blocking entrances or making noise during business hours. Contractors who only work 9-to-5 create scheduling conflicts that delay projects for weeks.",
    },
    {
      icon: faHouseChimney,
      problem: "Faded exterior paint hurts leasing and curb appeal",
      consequence: "Prospective tenants and buyers judge a property in the first ten seconds. Chalky, faded, or peeling exterior paint signals a poorly maintained property before anyone walks through the door.",
    },
    {
      icon: faBuilding,
      problem: "Coordinating paint across a multi-property portfolio is a full-time job",
      consequence: "Managing separate bids, schedules, and crews for each property in a portfolio wastes time that should go toward one dedicated point of contact who understands the whole portfolio.",
    },
    {
      icon: faPalette,
      problem: "New paint doesn't match the building's existing standard",
      consequence: "Without documented paint colors and finishes on file, touch-ups and turnovers end up mismatched, creating a patchwork look across suites and hallways.",
    },
    {
      icon: faHandshake,
      problem: "No single vendor relationship across properties and turnovers",
      consequence: "Re-bidding every single turnover or repaint with a new contractor slows everything down. A standing vendor relationship with locked-in pricing keeps turnovers moving fast.",
    },
  ];

  const whyFeatures = [
    {
      icon: faClock,
      title: "Evening & Weekend Scheduling",
      description: "We schedule around your tenants' business hours — including evenings and weekends — so occupied suites, retail spaces, and offices stay open while the work gets done.",
    },
    {
      icon: faDoorOpen,
      title: "Fast Tenant-Turnover Turnaround",
      description: "We prioritize vacant-unit turnaround so your leasing team can get a suite market-ready as fast as possible, minimizing days of lost rent between tenants.",
    },
    {
      icon: faHouseChimney,
      title: "Curb-Appeal Exterior Repaints",
      description: "We repaint building exteriors and common areas to make a strong first impression for prospective tenants and buyers — protecting your property's value and leasing velocity.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Property Walkthrough & Quote",     description: "We walk the property, document existing paint colors and finishes, and provide a written quote for the current project or standing portfolio pricing.", icon: faSearch },
    { number: 2, title: "Flexible Scheduling Around Tenants", description: "We schedule work during evenings, weekends, or vacancy windows so occupied tenants are never disrupted.", icon: faClock },
    { number: 3, title: "Turnover / Suite Painting",          description: "Crews move fast on vacant units and common areas, matching documented colors and finishes for a consistent property-wide look.", icon: faRocket },
    { number: 4, title: "Final Inspection & Handoff",         description: "We walk the finished space with your property manager or leasing agent and hand off a market-ready suite or a refreshed exterior.", icon: faBuilding },
  ];

  const metrics = [
    { icon: faTrophy,    value: 40,  label: "Commercial properties and suites painted",     suffix: "+", duration: 2 },
    { icon: faChartLine, value: 48,  label: "Average turnaround time on vacant suites",     suffix: "hrs", duration: 2 },
    { icon: faClock,     value: 12,  label: "Years serving Texas Hill Country properties",  suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Evening & weekend scheduling",       us: "✅ Built around your tenants",     others: "❌ Business hours only" },
    { feature: "Fast tenant-turnover turnaround",    us: "✅ Priority vacant-unit scheduling", others: "❌ Standard queue" },
    { feature: "Documented colors & finishes on file", us: "✅ Property-wide color records",  others: "❌ Re-matched by guesswork" },
    { feature: "Standing portfolio pricing",         us: "✅ Locked-in across properties",    others: "❌ Re-quoted every job" },
    { feature: "Single point of contact",            us: "✅ One dedicated project lead",     others: "❌ Different crew each time" },
  ];

  const faq = [
    {
      question: "How fast can you turn around a vacant suite between tenants?",
      answer: "Most single-suite turnovers are completed within 1–3 days depending on size and scope, and we prioritize vacant units to minimize lost rent. We can often start within 48 hours of a walkthrough.",
    },
    {
      question: "Can you work evenings or weekends to avoid disrupting tenants?",
      answer: "Yes — evening and weekend scheduling is standard for occupied commercial properties. We coordinate directly with your property manager to find windows that don't disrupt tenant business hours.",
    },
    {
      question: "Do you keep records of our building's paint colors and finishes?",
      answer: "Yes — we document the exact colors, sheens, and products used on your property so future touch-ups and turnovers match perfectly, without guesswork or mismatched paint.",
    },
    {
      question: "Can you handle painting across our entire portfolio, not just one property?",
      answer: "Yes — we work with property management companies managing multiple buildings and set up standing portfolio pricing and a single point of contact, so you're not re-bidding every project from scratch.",
    },
    {
      question: "Do you offer exterior repaints for leasing and curb-appeal purposes?",
      answer: "Yes — a fresh exterior repaint is one of the highest-ROI improvements for leasing velocity and property value. We work with your leasing team's timeline to have the property looking its best for tours.",
    },
    {
      question: "Are you insured for commercial and multi-tenant properties?",
      answer: "Yes — we're fully insured and bonded, and can provide a certificate of insurance to your property management company or ownership group on request.",
    },
  ];

  const services = [
    { icon: faPaintRoller,  title: "Interior Suite Painting",   body: "Fast turnover painting for vacant offices, retail suites, and common areas.",                link: "/services/interior-painting" },
    { icon: faHouseChimney, title: "Exterior Curb-Appeal Repaints", body: "Building exteriors repainted to boost leasing appeal and protect property value.",       link: "/services/exterior-painting" },
    { icon: faSwatchbook,   title: "Cabinet & Fixture Refinishing", body: "Break rooms, reception desks, and built-ins refreshed without full replacement.",        link: "/services/cabinet-refinishing" },
    { icon: faHammer,       title: "Drywall Repair & Prep",     body: "Wall repairs from tenant move-outs handled before repainting, done right the first time.",   link: "/services/drywall-repair-prep" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Commercial Real Estate" },
      ]} />

      <SectionIntro
        title="Painting for Commercial Real Estate & Property Managers"
        subtitle="Fast tenant-turnover painting and curb-appeal exterior repaints scheduled around your tenants — built for commercial property owners and managers across the Texas Hill Country."
      />

      <TrustBar headline="Trusted by commercial property owners and managers across the Texas Hill Country for over a decade" />

      <IndustryPainPoints
        industry="commercial real estate"
        painPoints={painPoints}
        ctaText="Get a Portfolio Pricing Quote"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="commercial property owners and managers"
          features={whyFeatures}
          title="What We Build Differently for Commercial Properties"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your property" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Painting Service Your Property Needs"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="commercial real estate" faq={faq} title="Commercial Real Estate Painting FAQs" />
      </div>

      <CTABanner
        headline="Ready to Keep Your Suites Market-Ready and Your Property Looking Sharp?"
        subline="Fast tenant-turnover painting and curb-appeal exterior repaints for commercial properties across the Texas Hill Country. Free portfolio walkthrough."
        primaryText="Get a Free Portfolio Walkthrough"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+18309007400"
      />

      <div className={styles.section}>
        <Variant1
          title="Tell Us About Your Property Portfolio"
          cityName="New Braunfels"
          slug="industries/commercial-real-estate"
          spot="commercial-real-estate-industry-page"
          formVariant={1}
        />
      </div>

    </main>
  );
}
