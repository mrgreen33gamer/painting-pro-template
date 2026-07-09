"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faPhone, faEnvelope,
  faShieldHalved, faPaintRoller, faClock, faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/services',       label: 'Services' },
  { href: '/about',          label: 'About' },
  { href: '/blogs',          label: 'Blog' },
  { href: '/contact',        label: 'Get a Quote' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const SERVICE_LINKS = [
  { href: '/services/interior-painting',      label: 'Interior Painting' },
  { href: '/services/exterior-painting',      label: 'Exterior Painting' },
  { href: '/services/cabinet-refinishing',    label: 'Cabinet Refinishing' },
  { href: '/services/commercial-painting',    label: 'Commercial Painting' },
  { href: '/services/color-consultation',     label: 'Color Consultation' },
  { href: '/services/drywall-repair-prep',    label: 'Drywall Repair & Prep' },
];

const LOCAL_AREAS = [
  'New Braunfels, TX', 'San Marcos, TX', 'Seguin, TX',
  'Schertz, TX', 'Cibolo, TX', 'Boerne, TX',
  'Canyon Lake, TX',
];

const TRUST_ITEMS = [
  { icon: faShieldHalved, label: 'Licensed & Insured' },
  { icon: faPaintRoller,  label: 'EPA Lead-Safe Certified' },
  { icon: faClock,        label: 'On-Time Guarantee' },
  { icon: faRotateLeft,   label: '5-Yr Guarantee' },
];

const SOCIALS = [
  { href: 'https://facebook.com/brushcraftpaintingtx', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://g.page/r/brushcraftpaintingtx',      icon: faGoogle,    label: 'Google' },
];

export default function Footer() {
  const trackEvent = useTrackEvent();

  return (
    <footer className={styles.footer}>

      {/* ── TRUST STRIP ── */}
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_ITEMS.map(({ icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustIcon}><FontAwesomeIcon icon={icon} /></span>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
          <Link
            href="/contact"
            className={styles.trustCta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: 'Book Now', section: 'Footer-Trust' })}
          >
            Book a Tech Today →
          </Link>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className={styles.body}>
        <div className={styles.inner}>

          {/* Col 1 — Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="22"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <polyline points="8 6 12 2 16 6"/>
                  <polyline points="8 18 12 22 16 18"/>
                  <polyline points="6 8 2 12 6 16"/>
                  <polyline points="18 8 22 12 18 16"/>
                </svg>
              </span>
              <div className={styles.logoText}>
                <span className={styles.logoName}>Brushcraft Painting Co.</span>
                <span className={styles.logoSub}>New Braunfels, Texas</span>
              </div>
            </Link>

            <p className={styles.tagline}>
              Upfront pricing. EPA Lead-Safe Certified. Zero contracts — ever. Serving the Texas Hill Country since 2014.
            </p>

            <div className={styles.contactBlock}>
              <a href="tel:+18309007400" className={styles.phoneLink}
                onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Footer Phone', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faPhone} />
                (830) 900-7400
              </a>
              <a href="mailto:hello@brushcraftpaintingtx.com" className={styles.emailLink}
                onClick={() => trackEvent({ eventType: 'email_click', elementLabel: 'Footer Email', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faEnvelope} />
                hello@brushcraftpaintingtx.com
              </a>
              <span className={styles.addressLine}>
                <FontAwesomeIcon icon={faLocationDot} />
                215 Gruene Rd, New Braunfels, TX 78130
              </span>
            </div>

            <div className={styles.socials}>
              {SOCIALS.map(({ href, icon, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className={styles.socialBtn}
                  onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Social' })}>
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div className={styles.col}>
            <span className={styles.colHead}>Company</span>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Nav' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className={styles.col}>
            <span className={styles.colHead}>Our Services</span>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Services' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Service Areas */}
          <div className={styles.col}>
            <span className={styles.colHead}>Service Areas</span>
            <ul className={styles.areaList}>
              {LOCAL_AREAS.map((area) => (
                <li key={area}>
                  <span className={styles.areaDot} />
                  {area}
                </li>
              ))}
              <li className={styles.areaMore}>+ All of the Texas Hill Country</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Brushcraft Painting Co. All Rights Reserved. | EPA Lead-Safe Certified Firm #XXXXXXXX
          </p>
          <a href="tel:+18309007400" className={styles.emergencyBtn}
            onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Call Now', section: 'Footer-Bottom' })}>
            <span className={styles.emergencyDot} />
            Call for a Free Estimate
          </a>
        </div>
      </div>

    </footer>
  );
}
