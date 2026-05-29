import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Button from '../../ui/Button/Button'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.bg} aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => <div key={i} className={styles.line} />)}
      </div>
      <div className="container">
        <div className={styles.content}>
          <motion.div
            className={styles.code}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            404
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Страница не найдена
          </motion.h1>
          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Страница, которую вы ищете, не существует или была перемещена.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="primary" size="lg" to="/">
              <FiArrowLeft /> Вернуться на главную
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
