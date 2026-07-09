// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Work & Fair Prices</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              "I started Brushcraft because I was tired of watching homeowners get burned by sloppy prep work and fly-by-night painters."
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Carlos Reyna</span>
              <span className={styles.pullTitle}>Founder & Master Painter, Brushcraft Painting Co.</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2014 in New Braunfels, TX, Brushcraft Painting Co. started with one crew and one principle:
              give homeowners the straight story about their project, charge a fair price, and back the
              work with a real guarantee. No hourly billing surprises, no upsell pressure, no contracts.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from Boerne to Canyon Lake — with a crew of EPA Lead-Safe Certified painters
              who live and work right here in the Texas Hill Country.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2014', label: 'Founded in New Braunfels' },
                { year: '2017', label: 'Expanded to 5 crews' },
                { year: '2020', label: '1,000 homes painted' },
                { year: '2026', label: '1,800+ homes painted' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
