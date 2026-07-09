'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string; // 'brand' | 'cert' | 'tool'
  icon?:    string; // emoji or short abbreviation for display
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Paint Brands We Use',
    items: [
      { name: 'Sherwin-Williams', type: 'brand', icon: '🎨' },
      { name: 'Benjamin Moore',   type: 'brand', icon: '🎨' },
      { name: 'PPG',              type: 'brand', icon: '🎨' },
      { name: 'Behr',             type: 'brand', icon: '🎨' },
      { name: 'Kelly-Moore',      type: 'brand', icon: '🎨' },
      { name: 'Valspar',          type: 'brand', icon: '🎨' },
    ],
  },
  {
    label: 'Certifications & Licenses',
    items: [
      { name: 'EPA Lead-Safe Certified', type: 'cert', icon: '✓' },
      { name: 'Fully Insured',           type: 'cert', icon: '✓' },
      { name: 'Bonded',                  type: 'cert', icon: '✓' },
      { name: '5-Year Guarantee',        type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Project Types',
    items: [
      { name: 'Interior Painting',    type: 'tool', icon: '🖌️' },
      { name: 'Exterior Painting',    type: 'tool', icon: '🖌️' },
      { name: 'Cabinet Refinishing',  type: 'tool', icon: '🖌️' },
      { name: 'Commercial Painting',  type: 'tool', icon: '🖌️' },
      { name: 'Color Consultation',   type: 'tool', icon: '🖌️' },
      { name: 'Drywall Repair',       type: 'tool', icon: '🖌️' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Premium Brands, Every Project',
  subtitle = 'We use professional-grade paint on every job — no shortcuts, no thinned-down products, no excuses.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <div key={gi} className={styles.group}>
              <span className={styles.groupLabel}>{group.label}</span>
              <div className={styles.items}>
                {group.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    className={`${styles.item} ${item.type === 'cert' ? styles.itemCert : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: gi * 0.06 + ii * 0.04, duration: 0.4, ease: 'easeOut' }}
                  >
                    {item.type === 'cert' ? (
                      <div className={styles.certCheck} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    ) : (
                      <div className={styles.itemDot} aria-hidden="true" />
                    )}
                    <span className={styles.itemName}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
