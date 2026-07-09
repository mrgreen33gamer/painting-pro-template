// Brushcraft Painting Co. — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faPaintRoller,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2014",
      description: "Brushcraft was founded in New Braunfels by Carlos Reyna, a Hill Country native and Master Painter with two decades in the trade. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every painter on our team is background-checked, insured, and trained in EPA Lead-Safe Certified practices for pre-1978 homes. We treat every home we enter with the same respect we'd want for our own families — drop cloths down, surfaces protected, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full repaint when a touch-up will do the job for years. We won't cut corners on prep to save an afternoon. Our reputation is built on straight talk — and over a decade of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Homes painted across the Texas Hill Country", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",                  suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving New Braunfels families",         suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free On-Site Estimate",       description: "Carlos or a senior member of our crew walks your property with you, discusses color and finish options, and gives you a firm, written price — no surprises later.", icon: faClipboardCheck },
    { number: 2, title: "Protect & Prep the Right Way", description: "Furniture covered, surfaces sanded and caulked, and EPA Lead-Safe Certified containment set up on pre-1978 homes. Good paint jobs are won or lost in the prep.", icon: faShieldHalved },
    { number: 3, title: "Paint With Precision",         description: "Our crew applies premium coatings built for Texas heat and humidity, with daily cleanup so your home or business stays livable throughout the project.", icon: faPaintRoller },
    { number: 4, title: "Final Walkthrough & Guarantee", description: "We walk every room and every wall with you before we call the job done, and back the finished work with our 5-Year Workmanship Guarantee.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About Brushcraft Painting Co."
        subtitle="New Braunfels-owned, New Braunfels-operated, and Hill Country-proud since 2014. We do honest painting work at fair prices for the families and businesses we've called neighbors for over a decade."
      />

      <TrustBar headline="1,800+ Texas Hill Country homes trust Brushcraft — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="New Braunfels"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="12 Years, By the Numbers" metrics={metrics} cityName="New Braunfels" />
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

      <CTABanner
        headline="New Braunfels' Painting Company — Ready When You Are"
        subline="Free on-site estimates. Upfront pricing. 5-Year Workmanship Guarantee. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+18309007400"
        secondaryText="Request a Free Estimate"
        secondaryLink="/contact"
      />

    </main>
  );
}
