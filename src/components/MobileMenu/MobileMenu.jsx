import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useApp } from '../../store/AppContext'
import { navLinks } from '../../data/index'
import Button from '../../ui/Button/Button'
import styles from './MobileMenu.module.css'

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}
const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export default function MobileMenu() {
  const { closeMenu } = useApp()

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={styles.panel}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.head}>
          <span className={styles.logo}><em>u!</em></span>
          <button className={styles.close} onClick={closeMenu} aria-label="Закрыть меню">
            <span /><span />
          </button>
        </div>

        <motion.nav
          className={styles.nav}
          variants={listVariants}
          initial="hidden"
          animate="show"
        >
          {navLinks.map(link => (
            <motion.div key={link.path} variants={itemVariants}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [styles.link, isActive ? styles.active : ''].join(' ')
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

        <div className={styles.cta}>
          <Button variant="primary" size="lg" to="/contact" onClick={closeMenu}>
            Связаться с нами
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
