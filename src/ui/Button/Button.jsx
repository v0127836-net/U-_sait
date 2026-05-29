import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size    = 'md',
  to,
  href,
  onClick,
  disabled,
  className = '',
  type = 'button',
}) {
  const cls = [styles.btn, styles[variant], styles[size], disabled ? styles.disabled : '', className].join(' ')

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap:   disabled ? {} : { scale: 0.97 },
    transition: { duration: 0.2 },
  }

  if (to) {
    return (
      <motion.div style={{ display: 'inline-flex' }} {...motionProps}>
        <Link to={to} className={cls}>{children}</Link>
      </motion.div>
    )
  }
  if (href) {
    return (
      <motion.a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...motionProps}>
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button className={cls} type={type} onClick={onClick} disabled={disabled} {...motionProps}>
      {children}
    </motion.button>
  )
}
