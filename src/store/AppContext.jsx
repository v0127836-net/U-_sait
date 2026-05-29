import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu  = useCallback(() => {
    setMenuOpen(true)
    document.body.classList.add('no-scroll')
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    document.body.classList.remove('no-scroll')
  }, [])

  const toggleMenu = useCallback(() => {
    menuOpen ? closeMenu() : openMenu()
  }, [menuOpen, openMenu, closeMenu])

  return (
    <AppContext.Provider value={{ menuOpen, openMenu, closeMenu, toggleMenu }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
