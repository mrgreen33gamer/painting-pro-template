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
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faPaintRoller, faHouseChimney, faSwatchbook, faHammer,
} from "@fortawesome/free-solid-svg-icons";

export default function HOAPropertyManagementIndustryPage() {

  const painPoints = [
    {
      icon: faCalendarAlt,
      problem: "No multi-year repaint schedule for the property",
      consequence: "Buildings get repainted reactively, when a board member notices peeling paint, instead of on a planned cycle. That leads to uneven curb appeal and unpredictable spending year to year.",
    },
    {
      icon: faFileInvoiceDollar,
      problem: "Repaint costs blow up the annual budget with no warning",
      consequence: "Without a phased plan and locked-in pricing, a full property repaint lands as one enormous line item instead of a manageable, forecastable expense spread across budget cycles.",
    },
    {
      icon: faUsers,
      problem: "Residents are disrupted by painting crews with no notice",
      consequence: "Common areas, walkways, and parking get blocked without warning, and residents flood the property manager's inbox with complaints that could have been avoided with better scheduling and communication.",
    },
    {
      icon: faBuilding,
      problem: "Buildings across the property don't match anymore",
      consequence: "Different contractors, different paint lots, and touch-ups over the years leave buildings visibly mismatched — hurting the community's overall appearance and resale values.",
    },
    {
      icon: faClipboardList,
      problem: "No single point of contact for a multi-building portfolio",
      consequence: "Coordinating separate quotes and crews for each building or phase wastes board and management time that should be spent on one dedicated point of contact for the whole project.",
    },
    {
      icon: faHandshake,
      problem: "Vendors don't understand HOA approval processes",
      consequence: "Board approvals, resident notifications, and reserve-fund timing all move on their own schedule. A contractor unfamiliar with that process creates friction instead of moving projects forward.",
    },
  ];

  const whyFeatures = [
    {
      icon: faCalendarAlt,
      title: "Multi-Year Repaint Cycle Planning",
      description: "We build a phased repaint schedule across your entire property — buildings, common areas, fencing, and amenity centers — so your board can budget and plan years in advance instead of reacting to complaints.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Locked-In, Phased Pricing",
      description: "We quote the full multi-year plan upfront and lock in pricing per phase, so your budget committee can present a predictable number to the board instead of a surprise bid every cycle.",
    },
    {
      icon: faUsers,
      title: "Resident-Friendly Scheduling & Communication",
      description: "We coordinate move-in-ready notices, staged access to common areas, and clear timelines so residents know exactly what to expect — cutting down on complaints to your management office.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Property Assessment & Bid",       description: "We walk every building and common area, document current condition, and put together a full-property bid broken into manageable phases.", icon: faSearch },
    { number: 2, title: "Phased Scheduling",                description: "We build a multi-year repaint calendar synced to your board's budget cycle and reserve fund timing — no surprises at the annual meeting.", icon: faCalendarAlt },
    { number: 3, title: "Prep & Paint by Building",         description: "Crews move building by building or phase by phase, protecting landscaping and common areas and keeping residents informed the whole way.", icon: faRocket },
    { number: 4, title: "Ongoing Maintenance Plan",         description: "Once the full cycle is complete, we set up a standing maintenance plan so touch-ups and the next cycle stay on schedule automatically.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy,    value: 60,  label: "HOA and multi-unit buildings repainted", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 12,  label: "Communities on a standing repaint plan", suffix: "+", duration: 2 },
    { icon: faClock,     value: 12,  label: "Years serving Texas Hill Country properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Multi-year repaint cycle planning",   us: "✅ Full phased schedule",         others: "❌ One-off quotes only" },
    { feature: "Locked-in, phased pricing",           us: "✅ Budget-friendly phases",       others: "❌ Re-quoted every cycle" },
    { feature: "Single point of contact",             us: "✅ One dedicated project lead",   others: "❌ Different crew each time" },
    { feature: "Resident communication & scheduling", us: "✅ Built into every phase",       others: "❌ Minimal notice" },
    { feature: "EPA Lead-Safe Certified crews",       us: "✅ Certified on every job",       others: "❌ Not always certified" },
  ];

  const faq = [
    {
      question: "How often should an HOA repaint its buildings?",
      answer: "Most Texas Hill Country properties need a full exterior repaint every 7–10 years, with touch-ups in between for high-wear areas like railings, doors, and trim. We build a schedule based on your specific siding material, sun exposure, and current condition.",
    },
    {
      question: "Can you spread the cost of a full property repaint across our budget cycles?",
      answer: "Yes — we build phased proposals that break a full-property repaint into building-by-building or section-by-section phases, each with locked-in pricing, so your board can budget across multiple fiscal years instead of one large expense.",
    },
    {
      question: "How do you minimize disruption to residents during a repaint?",
      answer: "We provide advance notice for every phase, stage work to keep at least one path to each building clear, and protect landscaping, vehicles, and common areas with drop cloths and containment. Most residents barely notice we're there beyond the finished result.",
    },
    {
      question: "Do you work directly with our HOA board or management company?",
      answer: "Yes — we're comfortable presenting proposals at board meetings, working through management company approval processes, and coordinating reserve-fund timing. You get one dedicated point of contact for the entire project.",
    },
    {
      question: "Are you insured and EPA Lead-Safe Certified for older properties?",
      answer: "Yes — we're fully insured and bonded, and our crews are EPA Lead-Safe Certified for any buildings constructed before 1978. Documentation is available for your board or insurance carrier on request.",
    },
    {
      question: "Do you offer a standing maintenance plan after the full repaint cycle is done?",
      answer: "Yes — once your property completes a full repaint cycle, we set up a standing maintenance schedule for touch-ups and the next cycle, so your board never has to start the bidding process from scratch again.",
    },
  ];

  const services = [
    { icon: faHouseChimney,  title: "Exterior Repaints",         body: "Full-property exterior repaints across buildings, fencing, and amenity centers, phased to your budget.", link: "/services/exterior-painting" },
    { icon: faPaintRoller,   title: "Common Area Painting",      body: "Clubhouses, leasing offices, and shared amenity spaces painted with minimal disruption to residents.",     link: "/services/interior-painting" },
    { icon: faSwatchbook,    title: "Unit Turnover Refinishing",  body: "Cabinet refinishing and interior touch-ups for individual units during turnover.",                       link: "/services/cabinet-refinishing" },
    { icon: faHammer,        title: "Drywall Repair & Prep",     body: "Repairs to common-area drywall and unit walls before repainting, done right the first time.",             link: "/services/drywall-repair-prep" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "HOA & Property Management" },
      ]} />

      <SectionIntro
        title="Painting Programs for HOAs & Property Managers"
        subtitle="Multi-year repaint cycles, phased budgets, and resident-friendly scheduling built for community associations and multi-unit properties across the Texas Hill Country."
      />

      <TrustBar headline="Trusted by HOAs and property managers across the Texas Hill Country for over a decade" />

      <IndustryPainPoints
        industry="HOA and property management"
        painPoints={painPoints}
        ctaText="Get a Property-Wide Repaint Plan"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="HOAs and property managers"
          features={whyFeatures}
          title="What We Build Differently for Community Associations"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your community" />
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
        <LocalServiceAreas
          cityName="New Braunfels"
          areas={[
            { town: "New Braunfels", benefit: "Home base — fastest scheduling for local HOAs and communities.", badge: "Home Base" },
            { town: "San Marcos",    benefit: "Multi-unit properties and community associations we actively serve.", badge: "" },
            { town: "Seguin",        benefit: "Growing communities with regular repaint cycle needs.", badge: "" },
            { town: "Schertz",       benefit: "Established neighborhoods and HOA-managed properties.", badge: "" },
            { town: "Cibolo",        benefit: "Newer developments beginning their first repaint cycles.", badge: "" },
            { town: "Boerne",        benefit: "Premium communities with high curb-appeal standards.", badge: "" },
            { town: "Canyon Lake",   benefit: "Lake-area HOAs and multi-unit vacation properties.", badge: "" },
          ]}
          servicePath="industries/hoa-property-management"
          title="Serving Communities Across the Texas Hill Country"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="HOA and property management" faq={faq} title="HOA & Property Management Painting FAQs" />
      </div>

      <CTABanner
        headline="Ready for a Repaint Plan Your Board Can Actually Budget For?"
        subline="Multi-year repaint cycles, phased pricing, and resident-friendly scheduling for HOAs and multi-unit properties across the Texas Hill Country. Free property walkthrough."
        primaryText="Get a Free Property Walkthrough"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+18309007400"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Property"
          cityName="New Braunfels"
          slug="industries/hoa-property-management"
          spot="hoa-property-management-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
