"use client";
import styles from "../page.module.scss";

import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
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
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant2 from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faFileContract, faSearch, faLandmark, faClipboardCheck,
  faCalendarAlt, faShieldHalved, faScaleBalanced,
  faRocket, faTrophy, faChartLine, faClock,
  faPaintRoller, faHouseChimney, faHammer, faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export default function MunicipalGovernmentIndustryPage() {

  const painPoints = [
    {
      icon: faFileContract,
      problem: "Painting bids and RFPs take longer than they should",
      consequence: "Public procurement requires detailed, compliant bid responses. A contractor unfamiliar with municipal RFP requirements can slow down or disqualify an otherwise strong proposal.",
    },
    {
      icon: faScaleBalanced,
      problem: "Prevailing wage requirements aren't always documented properly",
      consequence: "Public projects often require prevailing wage compliance and certified payroll documentation. Contractors without experience in this area create compliance risk for the awarding department.",
    },
    {
      icon: faLandmark,
      problem: "Public buildings have deferred maintenance backlogs",
      consequence: "City offices, community centers, and parks facilities often go years between repaints due to budget cycles, leaving peeling paint and worn interiors that reflect poorly on the department.",
    },
    {
      icon: faCalendarAlt,
      problem: "Facilities need to stay open to the public during work",
      consequence: "Community centers, libraries, and city offices can't simply close for a repaint. Scheduling has to work around public hours, events, and programming without disrupting residents.",
    },
    {
      icon: faShieldHalved,
      problem: "Older public buildings need lead-safe painting practices",
      consequence: "Many municipal buildings and parks facilities predate 1978. Painting them without EPA Lead-Safe Certified containment and disposal practices creates real liability for the municipality.",
    },
    {
      icon: faClipboardCheck,
      problem: "No clean documentation for budget and audit purposes",
      consequence: "Public spending requires clear documentation — scopes of work, certified payroll, insurance certificates, and completion sign-off. Missing paperwork slows down reimbursement and audits.",
    },
  ];

  const whyFeatures = [
    {
      icon: faFileContract,
      title: "Experienced with Bid & RFP Processes",
      description: "We respond to public bid and RFP packages with complete, compliant proposals — scopes of work, insurance certificates, references, and pricing structured the way procurement departments expect.",
    },
    {
      icon: faScaleBalanced,
      title: "Prevailing Wage Compliance & Documentation",
      description: "We understand prevailing wage requirements on public projects and provide the certified payroll and compliance documentation your department needs for audit and reimbursement.",
    },
    {
      icon: faShieldHalved,
      title: "EPA Lead-Safe Certified for Older Public Buildings",
      description: "Our crews are EPA Lead-Safe Certified for pre-1978 buildings, so city offices, community centers, and parks facilities are painted with proper containment and disposal practices.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Bid/RFP Response & Site Walk",       description: "We review the RFP or bid package, walk the facility, and submit a complete, compliant proposal with scope, pricing, and required documentation.", icon: faSearch },
    { number: 2, title: "Scheduling Around Public Use",        description: "We build a work schedule around the facility's public hours, events, and programming so operations continue with minimal disruption.", icon: faCalendarAlt },
    { number: 3, title: "Prep & Paint with Compliance Documentation", description: "Crews complete the work with EPA Lead-Safe practices where required and maintain certified payroll and compliance records throughout.", icon: faRocket },
    { number: 4, title: "Final Inspection & Closeout Packet",  description: "We provide a complete closeout packet — final inspection sign-off, compliance documentation, and warranty information — for your records and audit needs.", icon: faClipboardCheck },
  ];

  const metrics = [
    { icon: faTrophy,    value: 15,  label: "Public facilities and municipal buildings painted", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 6,   label: "Municipalities and public agencies served",         suffix: "+", duration: 2 },
    { icon: faClock,     value: 12,  label: "Years serving Texas Hill Country communities",      suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Public bid & RFP experience",         us: "✅ Compliant, complete proposals", others: "❌ Unfamiliar with process" },
    { feature: "Prevailing wage documentation",       us: "✅ Certified payroll provided",    others: "❌ Not offered or incomplete" },
    { feature: "EPA Lead-Safe Certified crews",       us: "✅ Certified for older buildings", others: "❌ Not always certified" },
    { feature: "Scheduling around public operations", us: "✅ Built into every project",      others: "❌ Standard business-hours only" },
    { feature: "Insurance & bonding on file",         us: "✅ Documentation ready to submit", others: "❌ Provided only on request" },
  ];

  const faq = [
    {
      question: "Do you respond to public bid and RFP requests for painting services?",
      answer: "Yes — we regularly respond to municipal bid packages and RFPs with complete proposals, including scope of work, insurance certificates, references, and compliant pricing structures.",
    },
    {
      question: "Can you provide prevailing wage documentation for public projects?",
      answer: "Yes — we understand prevailing wage requirements on public works projects and provide certified payroll records and compliance documentation your department needs for reimbursement and audits.",
    },
    {
      question: "Can you paint public buildings while they stay open to the public?",
      answer: "Yes — we build schedules around a facility's public hours, events, and programming, working in sections or after hours when needed so community centers, libraries, and offices stay operational.",
    },
    {
      question: "Are you EPA Lead-Safe Certified for older municipal buildings?",
      answer: "Yes — we're an EPA Lead-Safe Certified Firm, which is especially important for public buildings built before 1978. We follow proper containment, cleanup, and disposal procedures on every applicable project.",
    },
    {
      question: "What documentation do you provide for budget and audit purposes?",
      answer: "We provide a complete closeout packet including the scope of work, certified payroll (when applicable), insurance certificates, final inspection sign-off, and warranty documentation for your records.",
    },
    {
      question: "Do you carry the insurance and bonding required for public contracts?",
      answer: "Yes — we're fully insured and bonded and can provide certificates of insurance and bonding documentation as part of any bid submission.",
    },
  ];

  const localAreas = [
    { town: "New Braunfels", benefit: "Home base — serving city facilities, parks, and public buildings.", highlight: "Headquarters" },
    { town: "San Marcos",    benefit: "Public buildings and community facilities we actively serve.", highlight: "" },
    { town: "Seguin",        benefit: "County and municipal facilities across Guadalupe County.", highlight: "" },
    { town: "Schertz",       benefit: "Growing municipality with public building maintenance needs.", highlight: "" },
    { town: "Cibolo",        benefit: "City offices and community facilities we actively serve.", highlight: "" },
    { town: "Boerne",        benefit: "Historic public buildings requiring careful, compliant painting.", highlight: "" },
    { town: "Canyon Lake",   benefit: "Parks and recreation facilities around the lake area.", highlight: "" },
  ];

  const services = [
    { icon: faBuilding,     title: "Public Building Interiors", body: "City offices, libraries, and administrative buildings painted with minimal disruption to operations.", link: "/services/interior-painting" },
    { icon: faHouseChimney, title: "Facility Exteriors",        body: "Community centers and parks facilities repainted to hold up to public use and Texas weather.",         link: "/services/exterior-painting" },
    { icon: faPaintRoller,  title: "Community Center Painting", body: "Gyms, event spaces, and shared community rooms painted around your programming calendar.",             link: "/services/commercial-painting" },
    { icon: faHammer,       title: "Drywall Repair & Prep",     body: "Repairs to high-traffic public walls before repainting, documented for your records.",                link: "/services/drywall-repair-prep" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Municipal & Government" },
      ]} />

      <SectionIntro
        title="Painting for Municipal & Government Facilities"
        subtitle="Bid and RFP-ready painting for public buildings, community centers, and parks facilities across the Texas Hill Country — with prevailing wage and EPA Lead-Safe compliance built in."
      />

      <TrustBar headline="Trusted by municipalities and public agencies across the Texas Hill Country for over a decade" />

      <IndustryPainPoints
        industry="municipal and government"
        painPoints={painPoints}
        ctaText="Request Our Bid Packet"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="municipalities and public agencies"
          features={whyFeatures}
          title="What We Build Differently for Public Projects"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your facility" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Texas Hill Country" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Painting Service Your Facility Needs"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="New Braunfels"
          areas={localAreas}
          servicePath="industries/municipal-government"
          title="Serving Public Agencies Across the Texas Hill Country"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="municipal and government" faq={faq} title="Municipal & Government Painting FAQs" />
      </div>

      <CTABanner
        headline="Ready to Submit a Compliant Bid for Your Next Painting Project?"
        subline="Bid and RFP-ready painting proposals for public buildings, community centers, and parks facilities across the Texas Hill Country. Prevailing wage and EPA Lead-Safe compliance included."
        primaryText="Request Our Bid Packet"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+18309007400"
      />

      <div className={styles.section}>
        <Variant2
          title="Tell Us About Your Public Facility Project"
          cityName="New Braunfels"
          slug="industries/municipal-government"
          spot="municipal-government-industry-page"
          formVariant={2}
        />
      </div>

    </main>
  );
}
