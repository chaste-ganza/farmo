import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import farmoRoverImg from '../assets/images/farmo_rover.png'
import './Overview.css'

const Overview = () => {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Slow down the Y movement of the text block to create physical depth
  const textOffset = useTransform(scrollYProgress, [0, 1], [30, -30])
  const imageOffset = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section ref={ref} className="panoramic-overview-section">
      <div className="pan-header-container">
        <motion.p
          className="pan-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          OUR APPROACH
        </motion.p>
        <motion.h2 
          className="pan-title"
          style={{ y: textOffset }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          We combine mechanical design, embedded systems, and modular engineering to build a robotic platform that adapts to different tasks instead of being limited to one function.
        </motion.h2>
      </div>

      <div className="pan-image-container">
        <motion.div 
          className="pan-image-wrapper"
          style={{ y: imageOffset }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={farmoRoverImg} alt="Panoramic Showcase" className="pan-image" />
        </motion.div>
      </div>

      <div className="pan-footer">
        <span className="pan-plus">+</span>
        <span className="pan-plus">+</span>
        <span className="pan-scroll-txt">SCROLL TO EXPLORE</span>
        <span className="pan-plus">+</span>
        <span className="pan-plus">+</span>
      </div>
    </section>
  )
}

export default Overview
