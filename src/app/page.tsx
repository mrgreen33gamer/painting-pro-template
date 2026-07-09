// Brushcraft Painting Co. — Homepage
// Phase 2: Reshuffled component order + fresh content
// Original order: WelcomePage → TrustBar → ServiceCards → WhatToExpect → WhyChooseUs
//                 → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//                 → LocalServiceAreas → FAQ → CTABanner → BlogPreview → Form
//
// New order:      WelcomePage → TrustBar → ImpactMetrics → ServiceCards
//                 → WhyChooseUs → CTABanner (mid) → ProcessTimeline → Testimonials
//                 → GuaranteeSection → LocalServiceAreas → WhatToExpect → FAQ
//                 → BlogPreview → Form
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faPaintRoller, faHouseChimney, faSwatchbook, faBuilding, faPalette, faHammer,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUserTie, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faLayerGroup, faBroom, faStar,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  // ── Services ────────────────────────────────────────────────────────────────
  const services = [
    {
      icon: faPaintRoller,
      title: "Interior Painting",
      body: "Walls, ceilings, trim, and cabinetry painted with clean lines and a flawless finish. Furniture protected, dust contained, done on schedule.",
      link: "/services/interior-painting",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faHouseChimney,
      title: "Exterior Painting",
      body: "Pressure wash, scrape, caulk, prime, and two coats of premium exterior paint built to stand up to Central Texas heat and sun.",
      link: "/services/exterior-painting",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faSwatchbook,
      title: "Cabinet Refinishing",
      body: "Factory-smooth sprayed finishes on kitchen and bath cabinets. A fraction of the cost of replacement, with a like-new result.",
      link: "/services/cabinet-refinishing",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faBuilding,
      title: "Commercial Painting",
      body: "Offices, retail spaces, and multi-unit properties painted on flexible schedules — nights and weekends available to avoid business disruption.",
      link: "/services/commercial-painting",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faPalette,
      title: "Color Consultation",
      body: "In-home color guidance from a design-trained consultant. See real samples in your own lighting before committing to a palette.",
      link: "/services/color-consultation",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faHammer,
      title: "Drywall Repair & Prep",
      body: "Cracks, holes, and water stains patched, sanded, and primed so the repair disappears completely once painted.",
      link: "/services/drywall-repair-prep",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  // ── Impact metrics (moved up — builds trust before selling) ─────────────────
  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Homes painted across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 12,   label: "Years of local painting experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",       suffix: "%", duration: 2 },
  ];

  // ── Why Choose Us (3 differentiators) ───────────────────────────────────────
  const whyFeatures = [
    {
      icon: faShieldHalved,
      title: "EPA Lead-Safe Certified Firm",
      description: "Older homes need extra care. Our crews follow EPA Lead-Safe Certified practices on every pre-1978 property — proper containment, cleanup, and disposal, every time.",
    },
    {
      icon: faUserTie,
      title: "Led by Founder Carlos Reyna",
      description: "Founder and Master Painter Carlos Reyna is personally involved in quality control on every project. Every decision is made locally, and every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2014",
      description: "We're not a franchise. Brushcraft Painting Co. was built in New Braunfels and has painted homes and businesses across the Texas Hill Country for over a decade.",
    },
  ];

  // ── How it works (process) ───────────────────────────────────────────────────
  const processSteps = [
    {
      number: 1,
      title: "Free Estimate",
      description: "Phone, text, or the form below — your choice. We'll walk the space, measure, and provide a written estimate with no obligation.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Color Consultation",
      description: "See real paint samples in your own lighting. We help you narrow down a palette that works for every room, inside or out.",
      icon: faPalette,
    },
    {
      number: 3,
      title: "Prep & Paint",
      description: "Surfaces cleaned, patched, sanded, and masked before a single drop of paint goes on. Then premium paint, applied by an experienced crew.",
      icon: faPaintRoller,
    },
    {
      number: 4,
      title: "Final Walkthrough",
      description: "We walk the finished job with you, touch up anything you flag, and clean up completely. We leave when you're satisfied — not when we feel like it.",
      icon: faCheckCircle,
    },
  ];

  // ── What to expect (moved lower — reinforces process detail after trust built) ─
  const expectations = [
    {
      icon: faLayerGroup,
      title: "Drop Cloths & Masking Everywhere",
      description: "Floors, furniture, fixtures, and landscaping fully protected before we open a single can of paint. Every single visit.",
    },
    {
      icon: faBroom,
      title: "Clean Job Site, Every Day",
      description: "Tools packed away, surfaces wiped down, debris hauled off at the end of each work day. Your home stays livable throughout the job.",
    },
    {
      icon: faFileContract,
      title: "Upfront, Written Pricing",
      description: "Written quote before any work starts. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Quality Paint Brands Only",
      description: "We use premium, professional-grade paint on every job, backed by our full 5-Year Workmanship Guarantee. No thinned-down shortcuts.",
    },
  ];

  // ── Service areas ────────────────────────────────────────────────────────────
  const localAreas = [
    { town: "New Braunfels", benefit: "Home base — fastest scheduling and most available crews in the city.", badge: "Home Base" },
    { town: "San Marcos",    benefit: "Full residential and commercial coverage. On our regular route.",       badge: "" },
    { town: "Seguin",        benefit: "Same-week availability for Seguin homes and businesses.",               badge: "" },
    { town: "Schertz",       benefit: "Regular service area — quick turnaround guaranteed.",                   badge: "" },
    { town: "Cibolo",        benefit: "Full coverage for Cibolo homeowners and property managers.",            badge: "" },
    { town: "Boerne",        benefit: "Regular service area, no trip charge for most Boerne addresses.",       badge: "" },
    { town: "Canyon Lake",   benefit: "Lake-area coverage for full-time residences and vacation homes alike.", badge: "" },
  ];

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  const faq = [
    {
      question: "How much does interior or exterior painting cost in New Braunfels?",
      answer: "Most interior rooms run $400–$1,200 depending on size and prep needed. Full exterior repaints typically run $3,500–$9,000 depending on square footage and siding condition. We always provide a written, flat-rate quote before starting — no surprises.",
    },
    {
      question: "How long does a typical painting project take?",
      answer: "A single interior room is usually done in 1–2 days. A full interior repaint takes 3–5 days, and a full exterior repaint typically takes 4–7 days depending on weather and home size. We'll give you a realistic timeline before we start.",
    },
    {
      question: "How do you handle lead paint in older homes?",
      answer: "We're an EPA Lead-Safe Certified Firm. On any home built before 1978, our crews follow certified containment, cleanup, and disposal procedures to keep your family and pets safe throughout the job.",
    },
    {
      question: "What paint brands and quality do you use?",
      answer: "We use premium, professional-grade paint lines chosen for durability and finish quality — not the cheapest option on the shelf. Every job is backed by our 5-Year Workmanship Guarantee.",
    },
    {
      question: "Are you licensed and insured in Texas?",
      answer: "Yes — fully insured and bonded, with EPA Lead-Safe Certification on file. License and insurance documentation available on request. Call us anytime at (830) 900-7400 with questions.",
    },
    {
      question: "Do you offer financing for larger projects?",
      answer: "Yes — flexible financing options are available for qualifying homeowners on larger interior, exterior, and cabinet refinishing projects. Ask us when you get your free estimate.",
    },
  ];

  // ── TrustBar badges (painting-specific) ─────────────────────────────────────
  const trustBadges = [
    { icon: faStar,          label: "4.9 Google Rating",        sub: "350+ Reviews" },
    { icon: faShieldHalved,  label: "EPA Lead-Safe Certified",  sub: "Firm Certification" },
    { icon: faFileContract,  label: "Insured & Bonded",         sub: "Full Coverage" },
    { icon: faClock,         label: "On-Time Guarantee",        sub: "Every Job" },
    { icon: faRotateLeft,    label: "5-Year Guarantee",         sub: "Workmanship" },
    { icon: faFileAlt,       label: "Upfront Pricing",          sub: "No Surprises" },
    { icon: faHeadset,       label: "Free Estimates",           sub: "No Obligation" },
    { icon: faPaintRoller,   label: "Quality Paint Brands",     sub: "Premium Products Only" },
    { icon: faTrophy,        label: "1,800+ Homes Painted",     sub: "Central Texas" },
    { icon: faUsers,         label: "Locally Owned",            sub: "Since 2014" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="New Braunfels' trusted painting company — EPA Lead-Safe Certified, insured, and guaranteed on every job"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Painting Services for Your Home or Business"
          cards={services}
        />
      </div>
      <CTABanner
        headline="Paint That Looks Like a Renovation."
        subline="Interior, exterior, and cabinet painting with serious prep — clean lines, durable coatings, tidy job sites."
        primaryText="Call (830) 900-7400"
        primaryLink="tel:+18309007400"
        secondaryText="Color Consult"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="New Braunfels"
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="New Braunfels"
          features={whyFeatures}
          title="What Makes Brushcraft Different"
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="New Braunfels"
          areas={localAreas}
          servicePath=""
          title="Serving the Texas Hill Country"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Project, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="New Braunfels"
          faq={faq}
          title="Painting Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request a Free Estimate"
          cityName="New Braunfels"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
