import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import Button       from '../../ui/Button/Button'
import Stats        from '../../components/Stats/Stats'
import { team, values } from '../../data/index'
import styles from './About.module.css'

export default function About() {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerBg} aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className={styles.hLine} />)}
        </div>
        <div className="container">
          <div className={styles.headerGrid}>
            <div className={styles.headerLeft}>
              <motion.span className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                О нас
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                Создаём,<br />чтобы строить<br /><span className={styles.pink}>будущее вместе</span>
              </motion.h1>
            </div>
            <motion.div
              className={styles.headerRight}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
            >
              <p className={styles.headerText}>
                u! — это команда из 10+ дизайнеров, разработчиков и стратегов.
                С 2017 года мы создаём цифровые продукты, которые помогают бизнесам
                расти, масштабироваться и побеждать конкурентов.
              </p>
              <p className={styles.headerText}>
                Мы верим, что отличный продукт рождается на пересечении глубокой аналитики,
                смелого дизайна и безупречного кода. Каждый проект — это наш личный вызов.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Values */}
      <section className={`${styles.values} section-py`}>
        <div className="container">
          <SectionTitle
            eyebrow="Принципы"
            title="Наши ценности"
            subtitle="То, во что мы верим и что определяет каждое наше решение."
            align="center"
          />
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={styles.valueIcon}>{v.icon}</span>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={`${styles.story} section-py`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <SectionTitle
              eyebrow="История"
              title="Как всё начиналось"
              subtitle="От небольшой команды до полноценной цифровой студии."
            />
            <div className={styles.storyContent}>
              <div className={styles.milestone}>
                <span className={styles.milestoneYear}>2017</span>
                <p className={styles.milestoneText}>Основание студии. Первые два клиента. Безоговорочная вера в качество.</p>
              </div>
              <div className={styles.milestone}>
                <span className={styles.milestoneYear}>2019</span>
                <p className={styles.milestoneText}>Расширение до 6 специалистов. Первые международные проекты.</p>
              </div>
              <div className={styles.milestone}>
                <span className={styles.milestoneYear}>2021</span>
                <p className={styles.milestoneText}>50-й проект. Команда выросла до 10 человек. Офис в Москве.</p>
              </div>
              <div className={styles.milestone}>
                <span className={styles.milestoneYear}>2024</span>
                <p className={styles.milestoneText}>Более 50 клиентов. Выход на рынок СНГ и Европы.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`${styles.teamSection} section-py`}>
        <div className="container">
          <SectionTitle
            eyebrow="Команда"
            title="Люди за <span class='accent'>u!</span>"
            subtitle="Профессионалы, которые делают невозможное возможным."
          />
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                className={styles.memberCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div className={styles.memberImg}>
                  <img src={member.avatar} alt={member.name} loading="lazy" />
                </div>
                <h4 className={styles.memberName}>{member.name}</h4>
                <span className={styles.memberRole}>{member.role}</span>
                <p className={styles.memberBio}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section-py`}>
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Работайте с командой<br /><span className={styles.pink}>мирового уровня</span></h2>
            <Button variant="primary" size="xl" to="/contact">
              Начать проект <FiArrowRight />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
