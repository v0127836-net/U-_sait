import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle  from '../../ui/SectionTitle/SectionTitle'
import PortfolioCard from '../../ui/PortfolioCard/PortfolioCard'
import Button        from '../../ui/Button/Button'
import { portfolioItems, portfolioCategories } from '../../data/index'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === active)

  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerBg} aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className={styles.hLine} />)}
        </div>
        <div className="container">
          <div className={styles.headerContent}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Проекты
            </motion.h1>
            <motion.p
              className={styles.headerSub}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Избранные работы нашей студии — от дизайна до запуска.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className={`${styles.main} section-py`}>
        <div className="container">
          {/* Filter tabs */}
          <motion.div
            className={styles.filters}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {portfolioCategories.map(cat => (
              <button
                key={cat.id}
                className={[styles.filterBtn, active === cat.id ? styles.filterActive : ''].join(' ')}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.grid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((item, i) => (
                <PortfolioCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className={styles.empty}>Нет проектов в данной категории.</p>
          )}
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
            <div>
              <h2 className={styles.ctaTitle}>Хотите так же?</h2>
              <p className={styles.ctaSub}>Расскажите нам о своём проекте</p>
            </div>
            <Button variant="primary" size="lg" to="/contact">
              Обсудить проект
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
