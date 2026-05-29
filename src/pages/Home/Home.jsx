import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Hero        from '../../components/Hero/Hero'
import Testimonials from '../../components/Testimonials/Testimonials'
import ServiceCard  from '../../ui/ServiceCard/ServiceCard'
import PortfolioCard from '../../ui/PortfolioCard/PortfolioCard'
import Button       from '../../ui/Button/Button'
import { services, portfolioItems } from '../../data/index'
import teamImg from '../../image/img1.jpg'
import styles from './Home.module.css'

/* ─────────────────────────────────────────────
   1. Trusted companies — SVG award badges
───────────────────────────────────────────── */
const WREATH = [
  { cx: 30, cy: 84, rot: 120 },
  { cx: 19, cy: 74, rot: 140 },
  { cx: 12, cy: 62, rot: 160 },
  { cx:  9, cy: 50, rot: 180 },
  { cx: 12, cy: 38, rot: 200 },
  { cx: 19, cy: 26, rot: 220 },
  { cx: 30, cy: 16, rot: 240 },
]

function WreathLeaves({ flip }) {
  const leaves = WREATH.map((l, i) => (
    <ellipse key={i} cx={l.cx} cy={l.cy} rx="5.5" ry="1.8"
      transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}
      fill="rgba(255,255,255,0.45)" />
  ))
  return flip
    ? <g transform="translate(100,0) scale(-1,1)">{leaves}</g>
    : <g>{leaves}</g>
}

function LaurelBadge({ top, main, sub }) {
  return (
    <svg viewBox="0 0 100 100" width="92" height="92" aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.3"/>
      <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8"/>
      <WreathLeaves />
      <WreathLeaves flip />
      {top && (
        <text x="50" y="42" textAnchor="middle" fontSize="7" fontWeight="800"
          letterSpacing="1.5" fill="rgba(255,255,255,0.68)">{top}</text>
      )}
      <text x="50" y={top ? '54' : '53'} textAnchor="middle" fontSize="11" fontWeight="900"
        letterSpacing="0.3" fill="rgba(255,255,255,0.92)">{main}</text>
      {sub && (
        <text x="50" y={top ? '63' : '63'} textAnchor="middle" fontSize="5.2" fontWeight="700"
          letterSpacing="0.8" fill="rgba(255,255,255,0.48)">{sub}</text>
      )}
      <text x="50" y="74" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.58)">
        {'★ ★ ★ ★ ★'}
      </text>
    </svg>
  )
}

function RectBadge() {
  return (
    <svg viewBox="0 0 88 88" width="88" height="88" aria-hidden="true">
      <rect x="5" y="11" width="78" height="66" rx="9" fill="none"
        stroke="rgba(255,255,255,0.42)" strokeWidth="1.5"/>
      <rect x="10" y="16" width="68" height="56" rx="6" fill="none"
        stroke="rgba(255,255,255,0.16)" strokeWidth="0.8"/>
      <line x1="35" y1="28" x2="53" y2="48" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="53" y1="28" x2="35" y2="48" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="44" cy="38" r="5" fill="#0e0c0b" stroke="rgba(255,255,255,0.48)" strokeWidth="1.2"/>
      <line x1="44" y1="20" x2="44" y2="25" stroke="rgba(255,255,255,0.42)" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="44" y="59" textAnchor="middle" fontSize="8.5" fontWeight="800"
        letterSpacing="2" fill="rgba(255,255,255,0.72)">ULTRA</text>
      <text x="44" y="70" textAnchor="middle" fontSize="7.5" fontWeight="700"
        letterSpacing="2" fill="rgba(255,255,255,0.52)">CLEAR</text>
    </svg>
  )
}

function OvalBadge() {
  return (
    <svg viewBox="0 0 108 90" width="108" height="90" aria-hidden="true">
      <ellipse cx="54" cy="45" rx="50" ry="41" fill="none"
        stroke="rgba(255,255,255,0.42)" strokeWidth="1.5"/>
      <ellipse cx="54" cy="45" rx="43" ry="34" fill="none"
        stroke="rgba(255,255,255,0.16)" strokeWidth="0.8"/>
      <circle cx="54" cy="33" r="13" fill="none" stroke="rgba(255,255,255,0.48)" strokeWidth="1.2"/>
      <ellipse cx="54" cy="33" rx="13" ry="6" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"/>
      <ellipse cx="54" cy="33" rx="7" ry="13" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"/>
      <line x1="41" y1="33" x2="67" y2="33" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"/>
      <text x="54" y="56" textAnchor="middle" fontSize="6" fontWeight="800"
        letterSpacing="0.5" fill="rgba(255,255,255,0.62)">INTERNATIONAL</text>
      <text x="54" y="67" textAnchor="middle" fontSize="9.5" fontWeight="900"
        letterSpacing="0.3" fill="rgba(255,255,255,0.9)">MEGA</text>
      <text x="54" y="77" textAnchor="middle" fontSize="6.5" fontWeight="700"
        letterSpacing="1" fill="rgba(255,255,255,0.52)">STANDARD</text>
    </svg>
  )
}

const BADGES = [
  { id: 1, el: <RectBadge /> },
  { id: 2, el: <OvalBadge /> },
  { id: 3, el: <LaurelBadge top="HYPER"    main="BEST"    sub="AWARD WINNING" /> },
  { id: 4, el: <LaurelBadge top="ULTIMATE" main="WINNER"  sub="ULTRA BEST" /> },
  { id: 5, el: <LaurelBadge top="ULTRA"    main="PRESTIGE" sub="BEST OF THE WORLD" /> },
]

function TrustedSection() {
  return (
    <section className={styles.trusted}>
      <div className="container">
        <motion.h2
          className={styles.trustedHeading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          Нам доверяют 10+ компаний
        </motion.h2>

        <div className={styles.badges}>
          {BADGES.map((b, i) => (
            <motion.div
              key={b.id}
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              {b.el}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   2. Company / About section
───────────────────────────────────────────── */
const companyStats = [
  { num: '7 лет', label: 'Опыта на рынке' },
  { num: '50+',   label: 'Успешных проектов' },
  { num: '10',    label: 'Опытных специалистов' },
  { num: '50+',   label: 'Счастливых клиентов' },
]

function CompanySection() {
  return (
    <section className={styles.company}>
      <div className={styles.companyGlow} aria-hidden="true" />

      <div className="container">
        <div className={styles.companyGrid}>

          {/* Left: heading + photo */}
          <div className={styles.companyLeft}>
            <motion.h2
              className={styles.companyHeading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Оригинальность и качество для нас всегда на первом месте
            </motion.h2>

            <motion.div
              className={styles.teamPhotoWrap}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img
                src={teamImg}
                alt="Команда студии u!"
                className={styles.teamPhoto}
                loading="lazy"
              />
              {/* Pink accent bar */}
              <div className={styles.teamAccentBar} />
            </motion.div>
          </div>

          {/* Right: text + stats */}
          <div className={styles.companyRight}>
            <motion.p
              className={styles.companyText}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              U! — компания с богатым 7-летним опытом, вдохновившая и поддержавшая более 50 проектов.
              Мы предлагаем Вам разнообразные услуги, способствующие развитию вашего бизнеса.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button variant="outline" size="md" to="/about">Подробнее о нас</Button>
            </motion.div>

            {/* Stats 2×2 */}
            <motion.div
              className={styles.statsGrid}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              {companyStats.map((s, i) => (
                <div key={i} className={styles.statItem}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   3. Services
───────────────────────────────────────────── */
function ServicesSection() {
  const preview = services.slice(0, 3)

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesGlow} aria-hidden="true" />
      <div className="container">

        <motion.div
          className={styles.servicesMeta}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className={styles.servicesTitle}>Наши услуги</h2>
          <p className={styles.servicesSub}>
            Мы предлагаем Вам широкий спектр профессиональных услуг, которые помогут
            воплотить ваши идеи в реальность и достичь новых высот.
          </p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {preview.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        <motion.div
          className={styles.servicesBtn}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Button variant="outline" size="md" to="/services">Все услуги</Button>
        </motion.div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   4. Portfolio preview
───────────────────────────────────────────── */
function PortfolioSection() {
  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <div className={styles.sectionHead}>
          <div>
            <motion.h2
              className={styles.portfolioTitle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Наши проекты
            </motion.h2>
            <motion.p
              className={styles.portfolioSub}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ознакомьтесь с некоторыми из наших работ, в которых
              мы добились отличных результатов.
            </motion.p>
          </div>
          <Link to="/portfolio" className={styles.moreLink}>
            Больше проектов <FiArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.portfolioGrid}>
          {portfolioItems.slice(0, 2).map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   5. CTA Banner
───────────────────────────────────────────── */
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      {/* grid lines */}
      <div className={styles.ctaGrid} aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.ctaGridLine} />
        ))}
      </div>
      <div className={styles.ctaGlow} aria-hidden="true" />

      <div className="container">
        <motion.div
          className={styles.ctaInner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.ctaTitle}>
            Расскажите<br />о вашем проекте
          </h2>
          <Button variant="primary" size="lg" to="/contact" className={styles.ctaBtn}>
            Заполнить заявку
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <CompanySection />
      <ServicesSection />
      <PortfolioSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
