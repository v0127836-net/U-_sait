import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import styles from './PortfolioCard.module.css'

export default function PortfolioCard({ item, index = 0 }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className={styles.imgWrap}>
        <img
          src={item.image}
          alt={item.title}
          className={styles.img}
          loading="lazy"
        />
      </div>

      <div className={styles.meta}>
        <span className={styles.client}>{item.client || item.categoryLabel}</span>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{item.title}</h3>
          <Link to="/portfolio" className={styles.arrow}>
            <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
