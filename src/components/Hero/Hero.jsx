import { motion } from 'framer-motion'
import Button from '../../ui/Button/Button'
import styles from './Hero.module.css'

const lineVariants = {
  hidden: { scaleY: 0 },
  show:   { scaleY: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background grid lines */}
      <div className={styles.grid} aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.gridLine}
            variants={lineVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: i * 0.06 }}
          />
        ))}
      </div>

      {/* Background glow */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.content}>
        {/* Headline */}
        <div className={styles.headline}>
          <motion.h1
            className={styles.h1}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Создайте{' '}
            <span className={styles.pink}>будущее</span>
            <br />
            вашего бизнеса вместе
            <br />
            <span className={styles.pink}>с нами</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Сочетая передовые технологии с креативным подходом мы
            превращаем Ваши идеи в уникальные и успешные веб-приложения.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="primary" size="lg" to="/portfolio" className={styles.heroBtn}>
              Посмотреть работы
            </Button>

            <div className={styles.social}>
              <div className={styles.avatars}>
                {[11, 32, 54].map(n => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/80?img=${n}`}
                    alt=""
                    className={styles.ava}
                  />
                ))}
              </div>
              <div>
                <p className={styles.socialNum}>50+</p>
                <p className={styles.socialLabel}>Довольных клиентов</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
