import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import './ExperienceRating.css'

const ExperienceRating = () => {
  const [rating, setRating] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Show popup only if we hit the bottom of the page, and haven't intentionally closed it
    if (latest > 0.98 && !dismissed && !isVisible) {
      setIsVisible(true)
    }
  })

  const options = [
    { id: 1, emoji: '🤯', text: 'MIND BLOWN' },
    { id: 2, emoji: '🔥', text: 'INCREDIBLE' },
    { id: 3, emoji: '✨', text: 'SMOOTH' },
    { id: 4, emoji: '🤔', text: 'NEUTRAL' },
  ]

  const handleSelect = (id) => {
    setRating(id)
    setTimeout(() => {
      setSubmitted(true)
      // Auto dismiss after a few seconds
      setTimeout(() => {
        setIsVisible(false)
        setDismissed(true)
      }, 3000)
    }, 600)
  }

  const handleClose = () => {
    setIsVisible(false)
    setDismissed(true)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="rating-popup"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <button className="rating-close-btn" onClick={handleClose}>✕</button>
          
          <div className="rating-container">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div 
                  key="rating-prompt"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                  transition={{ duration: 0.4 }}
                  className="rating-content"
                >
                  <h2 className="rating-title">Rate the experience</h2>
                  
                  <div className="rating-options">
                    {options.map((opt) => (
                      <motion.button 
                        key={opt.id}
                        onClick={() => handleSelect(opt.id)}
                        className={`rating-btn ${rating === opt.id ? 'selected' : ''}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="rating-emoji">{opt.emoji}</span>
                        <span className="rating-text">{opt.text}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="rating-success"
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  className="rating-success"
                >
                  <motion.div 
                    className="success-icon"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ✦
                  </motion.div>
                  <h2 className="rating-title">Feedback Received.</h2>
                  <p className="rating-subtitle">Thank you for exploring Farmo.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ExperienceRating
