import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

const Loader = ({ assetsLoaded, onComplete }) => {
  const [progress, setProgress] = useState(0)

  // Physics for filling the visual bar
  useEffect(() => {
    let interval = null;

    if (!assetsLoaded) {
      // If assets are heavy/still downloading, fake the progress but stall at exactly 90%
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return 90;
          return prev + Math.floor(Math.random() * 20) + 5
        })
      }, 150)
    } else {
      // Assets are ready natively from cache, punch it to 100% immediately!
      clearInterval(interval)
      setProgress(100)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [assetsLoaded])

  // Triggers the dismissal of the layer once 100% is securely reached
  useEffect(() => {
    if (progress === 100 && assetsLoaded) {
      const timer = setTimeout(() => {
        onComplete()
      }, 500) // Small visual suspension at 100%
      return () => clearTimeout(timer)
    }
  }, [progress, assetsLoaded, onComplete])

  return (
    <motion.div 
      className="loader-wrapper"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="loader-content">
        <h1 className="loader-logo">FARMO</h1>
        
        <div className="loader-progress-wrapper">
          <span className="loader-number">{Math.min(progress, 100)}%</span>
          <div className="loader-bar-container">
            <motion.div 
              className="loader-bar" 
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ type: "tween", ease: "linear", duration: 0.15 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
