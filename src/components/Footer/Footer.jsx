import { Link } from 'react-router-dom'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaInstagram, FaYoutube, FaTelegramPlane, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import styles from './Footer.module.css'

const navLinks = [
  { label: 'Главная',   path: '/' },
  { label: 'Услуги',    path: '/services' },
  { label: 'Портфолио', path: '/portfolio' },
  { label: 'О нас',     path: '/about' },
  { label: 'Контакты',  path: '/contact' },
]

const socials = [
  { icon: FaInstagram,     label: 'Instagram', href: '#' },
  { icon: FaYoutube,       label: 'YouTube',   href: '#' },
  { icon: FaTiktok,        label: 'TikTok',    href: '#' },
]

const contacts = [
  { icon: FiPhone,         label: '+996 554 201 506',    href: 'tel:+996554201506' },
  { icon: FaTelegramPlane, label: 'Telegram',             href: '#' },
  { icon: FaWhatsapp,      label: 'WhatsApp',             href: '#' },
  { icon: FiMail,          label: 'u.skillz.edu@gmail.com', href: 'mailto:u.skillz.edu@gmail.com' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Main columns */}
        <div className={styles.grid}>

          {/* Navigation */}
          <div className={styles.col}>
            <ul className={styles.navList}>
              {navLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Social</h4>
            <ul className={styles.contactList}>
              {socials.map(s => (
                <li key={s.label}>
                  <a href={s.href} className={styles.contactItem}>
                    <s.icon size={16} className={styles.icon} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Контакты</h4>
            <ul className={styles.contactList}>
              {contacts.map(c => (
                <li key={c.label}>
                  <a href={c.href} className={styles.contactItem}>
                    <c.icon size={16} className={styles.icon} />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <Link to="/" className={styles.logo}>u!</Link>
          <p className={styles.copy}>
            © 2023 | ОсОО «U!SkillZ» | Все права защищены.
            Копирование материалов запрещено.
          </p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Политика конфиденциальности</a>
            <a href="#" className={styles.legalLink}>Договор оферты</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
