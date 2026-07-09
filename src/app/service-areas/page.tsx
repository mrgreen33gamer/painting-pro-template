// Brushcraft Painting Co. — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'New Braunfels',
    slug:        'new-braunfels-tx',
    county:      'Comal County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest scheduling and most available crews in the city. Full interior painting, exterior painting, cabinet refinishing, and commercial painting across all of New Braunfels.',
    highlights:  ['Fastest scheduling', 'Free on-site estimates', 'All services available'],
  },
  {
    city:        'San Marcos',
    slug:        'san-marcos-tx',
    county:      'Hays County',
    badge:       'Primary Area',
    description: 'Full painting coverage for San Marcos homes and businesses. Fast scheduling from our New Braunfels base — typically within the same week.',
    highlights:  ['Same-week scheduling', 'Residential & commercial', 'Free estimates'],
  },
  {
    city:        'Seguin',
    slug:        'seguin-tx',
    county:      'Guadalupe County',
    badge:       'Primary Area',
    description: "Serving Seguin's neighborhoods and historic homes with the same upfront pricing and 5-Year Workmanship Guarantee as every other area we cover.",
    highlights:  ['Upfront pricing', '5-Year Workmanship Guarantee', 'EPA Lead-Safe Certified'],
  },
  {
    city:        'Schertz',
    slug:        'schertz-tx',
    county:      'Guadalupe County',
    badge:       '',
    description: 'Reliable interior and exterior painting for Schertz residents. We handle everything from single-room refreshes to full exterior repaints.',
    highlights:  ['Insured & bonded crews', 'Free estimates', 'No contracts'],
  },
  {
    city:        'Cibolo',
    slug:        'cibolo-tx',
    county:      'Guadalupe County',
    badge:       '',
    description: 'Residential painting service for the Cibolo area, including many of the newer subdivisions. Upfront pricing applies just the same.',
    highlights:  ['Newer-home expertise', 'Upfront pricing', 'Free estimates'],
  },
  {
    city:        'Boerne',
    slug:        'boerne-tx',
    county:      'Kendall County',
    badge:       '',
    description: 'Detail-oriented craftsmanship for Boerne homes — we make the drive out to the Hill Country, and upfront pricing applies just the same.',
    highlights:  ['Hill Country coverage', 'EPA Lead-Safe Certified', 'Free estimates'],
  },
  {
    city:        'Canyon Lake',
    slug:        'canyon-lake-tx',
    county:      'Comal County',
    badge:       '',
    description: 'Rural and lakefront property painting for the Canyon Lake area, including exterior work built to handle sun and lake-humidity exposure.',
    highlights:  ['Lakefront exterior expertise', 'Insured & bonded', 'Free estimates'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'We serve New Braunfels and the surrounding Texas Hill Country — including San Marcos, Seguin, Schertz, Cibolo, Boerne, Canyon Lake, and most communities within about an hour of New Braunfels. Call us if you\'re not sure — we probably cover your area.',
  },
  {
    question: 'Is your pricing the same in all service areas?',
    answer: 'Yes — upfront, written pricing applies across every city and community we serve. The price we quote before we start is the price you pay, regardless of your location.',
  },
  {
    question: 'Do you offer free estimates outside of New Braunfels?',
    answer: 'Yes. Free on-site estimates are available across all of our service areas, 7 days a week. We\'ll give you an honest timeline when you call — not a vague window.',
  },
  {
    question: 'Do you handle commercial painting in all areas?',
    answer: 'Yes — office buildings, retail spaces, restaurants, and multi-family properties are within scope across all our coverage areas. Call to discuss your specific project and location.',
  },
  {
    question: 'How soon can you start my project?',
    answer: 'For New Braunfels and immediate surrounding areas (San Marcos, Seguin, Schertz, Cibolo), we typically schedule an estimate within a few days and can often start within 1-2 weeks. For outlying areas like Boerne and Canyon Lake, scheduling is similar — call to confirm current availability.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Texas Hill Country Painting — Since 2014
            </div>
            <h1 className={styles.heroTitle}>
              Service Areas
              <span className={styles.heroAccent}>We Come to You.</span>
            </h1>
            <p className={styles.heroSub}>
              Based in New Braunfels, serving the entire Texas Hill Country. Upfront pricing, EPA Lead-Safe Certified painters, and a 5-Year Workmanship Guarantee — no matter where you are.
            </p>
            <div className={styles.heroActions}>
              <a href="tel:+18309007400" className={styles.heroCTAPrimary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call (830) 900-7400
              </a>
              <Link href="/contact" className={styles.heroCTASecondary}>
                Free Estimate
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Quick trust strip */}
          <motion.div className={styles.trustStrip}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {[
              { val: '60min',   lbl: 'Coverage radius from New Braunfels' },
              { val: '7+',     lbl: 'Cities we actively serve' },
              { val: 'Free', lbl: 'On-site estimates' },
              { val: '5-Year', lbl: 'Workmanship Guarantee' },
            ].map(({ val, lbl }) => (
              <div key={lbl} className={styles.trustStat}>
                <span className={styles.trustVal}>{val}</span>
                <span className={styles.trustLbl}>{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Areas grid ── */}
      <section className={styles.areasSection}>
        <div className={styles.areasSectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Full Coverage Map</span>
            <h2 className={styles.sectionTitle}>Every Community We Serve</h2>
            <p className={styles.sectionSub}>
              Click any city to see local service details, common painting needs in your area, and what to expect from our team.
            </p>
          </div>

          <div className={styles.areasGrid}>
            {SERVICE_AREAS.map((area, i) => {
              const isHub = area.badge === 'Home Base';
              const isPrimary = area.badge === 'Primary Area';

              return (
                <motion.div
                  key={area.slug}
                  className={`${styles.areaCard} ${isHub ? styles.areaCardHub : ''} ${isPrimary ? styles.areaCardPrimary : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                >
                  {area.badge && (
                    <span className={`${styles.areaBadge} ${isHub ? styles.areaBadgeHub : styles.areaBadgeNearby}`}>
                      {area.badge}
                    </span>
                  )}

                  <div className={styles.areaPin} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>

                  <div className={styles.areaTopRow}>
                    <h3 className={styles.areaCity}>{area.city}</h3>
                    <span className={styles.areaCounty}>{area.county}</span>
                  </div>

                  <p className={styles.areaDesc}>{area.description}</p>

                  <ul className={styles.areaHighlights}>
                    {area.highlights.map(h => (
                      <li key={h}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.areaFooter}>
                    <a href="tel:+18309007400" className={styles.areaCallBtn}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Call Now
                    </a>
                    <Link href="/contact" className={styles.areaEstimateBtn}>
                      Free Estimate
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Not on the list? ── */}
      <section className={styles.unlisted}>
        <div className={styles.unlistedInner}>
          <div className={styles.unlistedIcon} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div className={styles.unlistedText}>
            <h3>Don't see your city?</h3>
            <p>We cover most of the Texas Hill Country within about an hour of New Braunfels. Call us — there's a good chance we serve your area.</p>
          </div>
          <a href="tel:+18309007400" className={styles.unlistedCTA}>
            Call (830) 900-7400
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        cityName="the Texas Hill Country"
        faq={faq}
        title="Service Area FAQs"
      />

      {/* ── CTA Banner ── */}
      <CTABanner
        headline="Ready to Schedule? We'll Come to You."
        subline="Free estimates available across the Texas Hill Country. Upfront pricing, 5-Year Workmanship Guarantee, no contracts ever."
        primaryText="Call (830) 900-7400"
        primaryLink="tel:+18309007400"
        secondaryText="Get a Free Estimate"
        secondaryLink="/contact"
      />

    </main>
  );
}
