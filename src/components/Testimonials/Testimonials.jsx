import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../../data/index'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [swiper, setSwiper] = useState(null)

  return (
    <section className={styles.section}>
      <div className="container">

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className={styles.title}>Отзывы клиентов</h2>
          <p className={styles.sub}>Узнайте, что говорят о нас наши клиенты</p>
        </motion.div>

        {/* Slider */}
        <div className={styles.sliderWrap}>
          <button className={styles.navBtn} onClick={() => swiper?.slidePrev()} aria-label="Назад">
            <FiChevronLeft size={22} />
          </button>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            onSwiper={setSwiper}
            className={styles.swiper}
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id}>
                <div className={styles.card}>
                  <blockquote className={styles.quote}>{t.quote}</blockquote>
                  <div className={styles.person}>
                    <img src={t.avatar} alt={t.author} className={styles.avatar} loading="lazy" />
                    <p className={styles.authorName}>{t.author}</p>
                    <p className={styles.authorRole}>{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className={styles.navBtn} onClick={() => swiper?.slideNext()} aria-label="Вперёд">
            <FiChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  )
}
