import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../../store/AppContext'
import useScrolled from '../../hooks/useScrolled'
import Button from '../../ui/Button/Button'
import MobileMenu from '../MobileMenu/MobileMenu'
import { navLinks } from '../../data/index'
import styles from './Header.module.css'

export default function Header() {
  const { menuOpen, toggleMenu } = useApp()
  const scrolled = useScrolled(30)

  return (
    <>
      <motion.header
        className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <em>u!</em>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Навигация">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  [styles.navLink, isActive ? styles.active : ''].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className={styles.actions}>
            <Button variant="outline" size="sm" to="/contact" className={styles.ctaBtn}>
              Связаться с нами
            </Button>
            <button
              className={[styles.burger, menuOpen ? styles.burgerOpen : ''].join(' ')}
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu />}
      </AnimatePresence>
    </>
  )
}
