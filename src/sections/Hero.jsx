import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import farmoRoverImg from '../assets/images/make_the_sketch_be_in_the_center_of_the_picture_frame_20260409123944_02.png'
import './Hero.css'

const Hero = () => {
  const sentence = "What we did"
  const words = sentence.split('\n')

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })
  const mouseParallaxX = useTransform(springX, [-1000, 1000], [30, -30])
  const mouseParallaxY = useTransform(springY, [-1000, 1000], [30, -30])

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined') {
      x.set(e.clientX - window.innerWidth / 2)
      y.set(e.clientY - window.innerHeight / 2)
    }
  }

  return (
    <section id="what-we-did" className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-content">
        
        <div className="hero-top">
          <h1 className="hero-main-title">
            {words.map((line, lineIndex) => (
              <div key={lineIndex} className={`title-line-wrapper ${lineIndex === 0 ? 'offset-left' : 'offset-right'}`}>
                <motion.span
                  className="title-line"
                  initial={{ y: "100%", skewY: 5 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 + lineIndex * 0.15, ease: [0.33, 1, 0.68, 1] }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h1>
        </div>

        <div className="hero-bottom">
          <motion.div 
            className="hero-visual-box"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            style={{ x: mouseParallaxX, y: mouseParallaxY }}
          >
            <img src={farmoRoverImg} alt="Farmo 6-Wheel Rover Prototype" className="hero-product-img" />
          </motion.div>

          <motion.div 
            className="hero-text-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
          >
            <p className="hero-paragraph">
              We design and build a modular robotic system capable of navigating rough environments and performing targeted agricultural tasks through interchangeable attachments.
            </p>
            <p className="hero-paragraph">
              From concept to prototype, this project explores how robotics can simplify real-world field operations through adaptability and intelligent design.
            </p>
            <div style={{ display: 'flex' }}>
              <button className="nav-pill" style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}>
                <span className="nav-dot" style={{ backgroundColor: '#000' }}></span>
                <span className="button-label">OUR APPROACH</span>
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
