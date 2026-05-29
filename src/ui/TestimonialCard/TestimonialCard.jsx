import styles from './TestimonialCard.module.css'
import { FiStar } from 'react-icons/fi'

export default function TestimonialCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.stars}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <FiStar key={i} className={styles.star} />
        ))}
      </div>
      <blockquote className={styles.quote}>«{item.quote}»</blockquote>
      <footer className={styles.footer}>
        <img src={item.avatar} alt={item.author} className={styles.avatar} loading="lazy" />
        <div>
          <p className={styles.author}>{item.author}</p>
          <p className={styles.role}>{item.role}</p>
        </div>
      </footer>
    </article>
  )
}
