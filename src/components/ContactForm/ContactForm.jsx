import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { sendContactForm } from '../../services/api'
import styles from './ContactForm.module.css'

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Введите имя'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Введите корректный email'
  return errors
}

export default function ContactForm() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    try {
      await sendContactForm(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className={styles.success}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className={styles.successIcon}><FiCheck size={28} /></div>
        <p className={styles.successText}>Заявка отправлена! Мы свяжемся с вами в&nbsp;ближайшее время.</p>
        <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
          Отправить ещё раз
        </button>
      </motion.div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <div className={styles.field}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          className={[styles.input, errors.name ? styles.inputErr : ''].join(' ')}
          autoComplete="name"
        />
        {errors.name && <span className={styles.err}>{errors.name}</span>}
      </div>

      {/* Email */}
      <div className={styles.field}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          className={[styles.input, errors.email ? styles.inputErr : ''].join(' ')}
          autoComplete="email"
        />
        {errors.email && <span className={styles.err}>{errors.email}</span>}
      </div>

      {/* Message */}
      <div className={styles.field}>
        <input
          id="message"
          name="message"
          type="text"
          placeholder="О проекте"
          value={form.message}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Отправка…' : 'Отправить'}
      </button>

      {/* Privacy */}
      <p className={styles.privacy}>
        Нажимая «Отправить», вы принимаете{' '}
        <a href="#" className={styles.privacyLink}>
          условия обработки персональных данных
        </a>
      </p>

      {status === 'error' && (
        <p className={styles.globalErr}>Ошибка отправки. Напишите нам напрямую.</p>
      )}
    </form>
  )
}
