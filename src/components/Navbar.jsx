import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const [transitionTarget, setTransitionTarget] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsCompact(latest > 0.001)
  })

  const navItems = useMemo(
    () => [
      { id: 'overview', label: 'Overview' },
      { id: 'what-we-did', label: 'What We Did' },
      { id: 'core-architecture', label: 'Core Architecture' },
      { id: 'modular-ecosystem', label: 'Modular Ecosystem' },
      { id: 'demo', label: 'Demo' },
      { id: 'development-journey', label: 'Development Journey' },
      { id: 'system-highlights', label: 'System Highlights' },
      { id: 'team', label: 'Team' },
      { id: 'footer', label: 'Contact' },
    ],
    [],
  )

  const handleNavigate = (sectionId) => {
    if (isTransitioning) return

    setMenuOpen(false)
    setTransitionTarget(sectionId)
    setIsTransitioning(true)
  }

  React.useEffect(() => {
    if (!isTransitioning || !transitionTarget) return

    const coverTimer = window.setTimeout(() => {
      const element = document.getElementById(transitionTarget)
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    }, 320)

    const releaseTimer = window.setTimeout(() => {
      setIsTransitioning(false)
      setTransitionTarget(null)
    }, 900)

    return () => {
      window.clearTimeout(coverTimer)
      window.clearTimeout(releaseTimer)
    }
  }, [isTransitioning, transitionTarget])

  const activeTransitionLabel = navItems.find((item) => item.id === transitionTarget)?.label

  return (
    <>
      <motion.nav
        className={`main-nav ${isCompact ? 'is-compact' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="nav-logo">
          FARMO
        </div>
        <motion.div
          className="middle-text"
          aria-hidden={isCompact}
          initial={false}
          animate={
            isCompact
              ? { opacity: 0, y: -16, maxWidth: 0, paddingBottom: 0, marginInline: 0 }
              : { opacity: 1, y: 0, maxWidth: 400, paddingBottom: '1.3rem', marginInline: 0 }
          }
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          Meet <span style={{ color: 'rgb(51, 68, 244)', fontSize: '35px' }}>Farmo</span> <br /> a modular farming robot that adapts to every task.
        </motion.div>
        <div className="nav-actions">
          <button className="nav-pill dark" onClick={() => handleNavigate('team')}>
            <span className="button-label">LET&apos;S TALK</span> <span className="nav-dot"></span>
          </button>
          <div className={`nav-menu-shell ${menuOpen ? 'is-open' : ''}`}>
            <button className="nav-pill" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="site-menu">
              <span className="button-label">MENU</span> <span className="nav-dots">••</span>
            </button>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  id="site-menu"
                  className="nav-menu-panel"
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className="nav-menu-link"
                      onClick={() => handleNavigate(item.id)}
                    >
                      <span className="button-label">{item.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="nav-route-transition"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="nav-route-transition-inner"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.22, delay: 0.16 }}
            >
              <p className="nav-route-kicker">Navigating to</p>
              <h2 className="nav-route-title">{activeTransitionLabel}</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
