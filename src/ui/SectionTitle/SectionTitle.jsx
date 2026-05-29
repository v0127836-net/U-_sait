import { motion } from 'framer-motion'
import styles from './SectionTitle.module.css'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', light, className = '' }) {
  return (
    <div className={[styles.wrap, styles[align], light ? styles.light : '', className].join(' ')}>
      {eyebrow && (
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
