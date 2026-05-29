import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import ServiceCard  from '../../ui/ServiceCard/ServiceCard'
import Accordion    from '../../components/Accordion/Accordion'
import Button       from '../../ui/Button/Button'
import { services, faqItems, trustedCompanies } from '../../data/index'
import styles from './Services.module.css'

/* Accordion variant for services */
function ServiceAccordion() {
  return (
    <section className={`${styles.accordionSection} section-py`}>
      <div className="container">
        <div className={styles.accGrid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionTitle
              eyebrow="Что мы делаем"
              title="Предоставляем весь перечень услуг, необходимый для достижения максимальной конверсии"
            />
          </motion.div>

          <div className={styles.accList}>
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                className={styles.accItem}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link to={`/services/${s.id}`} className={styles.accRow}>
                  <span className={styles.accNum}>{s.num}</span>
                  <span className={styles.accTitle}>{s.title}</span>
                  <p className={styles.accDesc}>{s.short}</p>
                  <span className={styles.accArrow}><FiArrowRight /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg} aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.headerLine} />
          ))}
        </div>
        <div className="container">
          <div className={styles.headerContent}>
            <motion.span
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Услуги
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Всё что нужно для<br />
              <span className={styles.pink}>роста вашего бизнеса</span>
            </motion.h1>
            <motion.p
              className={styles.headerSub}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              От стратегии до разработки — мы покрываем полный цикл создания цифрового продукта.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service accordion */}
      <ServiceAccordion />

      {/* Service cards grid */}
      <section className={`${styles.cardsSection} section-py`}>
        <div className="container">
          <SectionTitle
            eyebrow="Направления"
            title="Наши ключевые <span class='accent'>компетенции</span>"
            align="center"
          />
          <div className={styles.cardsGrid}>
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.faqSection} section-py`}>
        <div className="container">
          <div className={styles.faqGrid}>
            <SectionTitle
              eyebrow="FAQ"
              title="Частые вопросы"
              subtitle="Ответы на самые популярные вопросы о работе с нами."
            />
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section-py`}>
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>
              Расскажите о вашем проекте
            </h2>
            <Button variant="primary" size="lg" to="/contact">
              Написать нам <FiArrowRight />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
