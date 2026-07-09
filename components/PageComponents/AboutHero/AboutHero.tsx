'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface AboutHeroProps {
  cityName: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ cityName }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.accentBar} aria-hidden="true" />

      <div className={styles.heroContainer}>

        {/* Text column */}
        <motion.div
          className={styles.textColumn}
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>Since 2014 · {cityName}, TX</span>
          <h1 className={styles.heroTitle}>
            Texas Hill Country Painting<br />
            <em>Done Right.</em><br />
            Every Time.
          </h1>
          <p className={styles.heroSubtitle}>
            Brushcraft Painting Co. has been transforming homes and businesses in{' '}
            <strong>{cityName}</strong> and across the Texas Hill Country for over a decade —
            with EPA Lead-Safe Certified crews, upfront pricing, and a guarantee on every single job.
          </p>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>12+</span>
              <span className={styles.statLabel}>Years Local</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.9★</span>
              <span className={styles.statLabel}>Google Rating</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>1,800+</span>
              <span className={styles.statLabel}>Homes Painted</span>
            </div>
          </div>

          <div className={styles.badges}>
            <span className={styles.badge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              EPA Lead-Safe Certified
            </span>
            <span className={styles.badge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              5-Year Guarantee
            </span>
            <span className={styles.badge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Fully Insured
            </span>
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
        >
          <div className={styles.imageFrame}>
            <div className={styles.imageWrapper}>
              <Image
                src="/pages/about/about-hero.jpg"
                alt="Brushcraft Painting Co. — New Braunfels, Texas painting crew"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className={styles.imageOverlay} aria-hidden="true" />
            </div>
            {/* Floating trust card */}
            <div className={styles.trustCard}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="2" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <polyline points="8 6 12 2 16 6"/>
                <polyline points="8 18 12 22 16 18"/>
                <polyline points="6 8 2 12 6 16"/>
                <polyline points="18 8 22 12 18 16"/>
              </svg>
              <div className={styles.trustCardText}>
                <span className={styles.trustCardTitle}>Brushcraft Painting Co.</span>
                <span className={styles.trustCardSub}>New Braunfels' Most Trusted Painters</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;
