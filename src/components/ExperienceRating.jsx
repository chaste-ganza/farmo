import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ExperienceRating.css'

const ExperienceRating = ({ dockedOpen = false }) => {
  const [rating, setRating] = useState(7)
  const [submitted, setSubmitted] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (!dockedOpen) {
      setDismissed(false)
      setRating(7)
      setSubmitted(false)
    }
  }, [dockedOpen])

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true)
      setTimeout(() => {
        setDismissed(true)
      }, 2400)
    }, 250)
  }

  const handleClose = () => {
    setDismissed(true)
  }

  const shouldShow = dockedOpen && !dismissed

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="rating-popup rating-popup-inline"
          initial={{ opacity: 0, x: 16, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 12, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        >
          <button className="rating-close-btn" onClick={handleClose}>✕</button>

          <div className="rating-container">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="rating-prompt"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="rating-content"
                >
                  <p className="rating-kicker">User Experience</p>
                  <h2 className="rating-title">Rate the experience</h2>

                  <div className="rating-slider-shell">
                    <div className="rating-slider-labels">
                      <span>Low</span>
                      <span>High</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="rating-slider"
                      aria-label="Rate the experience from 1 to 10"
                    />
                    <div className="rating-slider-value">Score: {rating}/10</div>
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    className="rating-submit-btn"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Submit feedback</span>
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="rating-success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="rating-success"
                >
                  <motion.div
                    className="success-icon"
                    animate={{ rotate: 360, scale: [1, 1.12, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    ✦
                  </motion.div>
                  <h2 className="rating-title">Feedback received</h2>
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
