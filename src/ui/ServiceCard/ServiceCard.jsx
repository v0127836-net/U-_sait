import { motion } from 'framer-motion'
import {
  FiPenTool, FiCode, FiShield, FiTrendingUp, FiLayers, FiCheckSquare,
} from 'react-icons/fi'
import styles from './ServiceCard.module.css'

const ICON_MAP = {
  design:          FiPenTool,
  development:     FiCode,
  support:         FiShield,
  seo:             FiTrendingUp,
  'design-systems': FiLayers,
  testing:         FiCheckSquare,
}

export default function ServiceCard({ service, index = 0 }) {
  const Icon = ICON_MAP[service.id] || FiCode

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.iconWrap}>
        <Icon size={20} />
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.desc}>{service.short}</p>
    </motion.article>
  )
}
