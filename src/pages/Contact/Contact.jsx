import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'
import { FaTelegramPlane, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import ContactForm from '../../components/ContactForm/ContactForm'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.page}>
      {/* Background glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.wrap}`}>
        {/* ── Form card ── */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.cardTitle}>Заполните заявку</h2>
          <p className={styles.cardSub}>
            Напишите немного о вашем проекте или задайте
            любые вопросы, которые у вас есть.
          </p>
          <ContactForm />
        </motion.div>

        {/* ── Info ── */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Contacts */}
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Контакты</h3>
            <div className={styles.infoRows}>
              <a href="mailto:u.skillz.edu@gmail.com" className={styles.infoRow}>
                <FiMail className={styles.infoIcon} />
                <span>u.skillz.edu@gmail.com</span>
              </a>
              <a href="tel:+996554201506" className={styles.infoRow}>
                <FiPhone className={styles.infoIcon} />
                <span>+996 554 201 506</span>
              </a>
            </div>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="Telegram"><FaTelegramPlane /></a>
              <a href="#" className={styles.social} aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className={styles.social} aria-label="YouTube"><FaYoutube /></a>
              <a href="#" className={styles.social} aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Address */}
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Адрес</h3>
            <div className={styles.infoRows}>
              <div className={styles.infoRow}>
                <FiMapPin className={styles.infoIcon} />
                <span>ул. Безымянная 4/5</span>
              </div>
              <div className={styles.infoRow}>
                <FiMapPin className={styles.infoIcon} />
                <span>ул. Манаса 91/1</span>
              </div>
              <div className={styles.infoRow}>
                <FiClock className={styles.infoIcon} />
                <span>09:00 – 20:00</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
