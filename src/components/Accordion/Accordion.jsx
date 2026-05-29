import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import styles from './Accordion.module.css'

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={[styles.item, isOpen ? styles.open : ''].join(' ')}>
      <button className={styles.trigger} onClick={onToggle} aria-expanded={isOpen}>
        <span className={styles.triggerText}>{item.q}</span>
        <span className={styles.icon}>
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.body}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.answer}>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className={styles.wrap}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
        />
      ))}
    </div>
  )
}
