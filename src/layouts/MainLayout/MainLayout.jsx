import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { AppProvider } from '../../store/AppContext'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25 } },
}

function PageWrapper() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Outlet />
      </motion.main>
    </AnimatePresence>
  )
}

export default function MainLayout() {
  return (
    <AppProvider>
      <Header />
      <PageWrapper />
      <Footer />
    </AppProvider>
  )
}
