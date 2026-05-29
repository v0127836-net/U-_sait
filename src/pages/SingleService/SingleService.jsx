import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi'
import SectionTitle  from '../../ui/SectionTitle/SectionTitle'
import Button        from '../../ui/Button/Button'
import TestimonialCard from '../../ui/TestimonialCard/TestimonialCard'
import PortfolioCard from '../../ui/PortfolioCard/PortfolioCard'
import { services, testimonials, portfolioItems } from '../../data/index'
import styles from './SingleService.module.css'

export default function SingleService() {
  const { id }  = useParams()
  const service = services.find(s => s.id === id)

  if (!service) return <Navigate to="/services" replace />

  const related = portfolioItems.slice(0, 3)

  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerBg} aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className={styles.line} />)}
        </div>
        <div className="container">
          <div className={styles.headerContent}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Link to="/services" className={styles.back}>
                <FiArrowLeft /> Все услуги
              </Link>
            </motion.div>

            <motion.span
              className={styles.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {service.num}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              className={styles.headerSub}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {service.full}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button variant="primary" size="lg" to="/contact">
                Обсудить проект <FiArrowRight />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className={`${styles.steps} section-py`}>
        <div className="container">
          <SectionTitle eyebrow="Процесс" title="Этапы работы" />
          <div className={styles.stepsGrid}>
            {service.steps.map((step, i) => (
              <motion.div
                key={step.num}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className={styles.stepNum}>{step.num}</span>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className={`${styles.tools} section-py`}>
        <div className="container">
          <div className={styles.toolsGrid}>
            <SectionTitle
              eyebrow="Инструменты и технологии"
              title={`Чем мы работаем`}
              subtitle="Используем только проверенные и современные инструменты для достижения наилучшего результата."
            />
            <div className={styles.toolsList}>
              {service.tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  className={styles.tool}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <FiCheck className={styles.toolCheck} />
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`${styles.gallery} section-py`}>
        <div className="container">
          <SectionTitle eyebrow="Наш опыт" title="Примеры работ" align="center" />
          <div className={styles.galleryGrid}>
            {[1,2,3,4,5,6].map((n, i) => (
              <motion.div
                key={n}
                className={styles.galleryItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <img
                  src={`https://picsum.photos/seed/${id}${n}/600/450`}
                  alt={`Пример ${n}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} section-py`}>
        <div className="container">
          <SectionTitle eyebrow="Отзывы" title="Что говорят клиенты" align="center" />
          <div className={styles.testGrid}>
            {testimonials.slice(0, 3).map(t => (
              <TestimonialCard key={t.id} item={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className={`${styles.related} section-py`}>
        <div className="container">
          <div className={styles.relatedHead}>
            <SectionTitle eyebrow="Портфолио" title="Похожие проекты" />
            <Button variant="outline" size="md" to="/portfolio">
              Все проекты <FiArrowRight />
            </Button>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} />
            ))}
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
            <h2>Расскажите о вашем проекте</h2>
            <Button variant="primary" size="lg" to="/contact">
              Написать нам <FiArrowRight />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
