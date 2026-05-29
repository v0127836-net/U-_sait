import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../../data/index'
import styles from './Stats.module.css'

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <span ref={ref} className={styles.num}>
      {val}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className={styles.item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Counter target={s.value} suffix={s.suffix} />
            <span className={styles.label}>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
