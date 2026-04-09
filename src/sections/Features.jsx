import React from 'react'
import { motion } from 'framer-motion'
import feat1Img from '../assets/images/module_water.png'
import feat2Img from '../assets/images/module_seed.png'
import './Features.css'

const Features = () => {
  const works = [
    {
      title: '6-wheel terrain mobility',
      tags: 'SYSTEM HIGHLIGHT',
      img: feat1Img,
      link: '#',
    },
    {
      title: 'Modular attachment system',
      tags: 'SYSTEM HIGHLIGHT',
      img: feat2Img,
      link: '#',
    },
    {
      title: 'Real-world agricultural application',
      tags: 'SYSTEM HIGHLIGHT',
      img: feat1Img,
      link: '#',
    },
    {
      title: 'Expandable and upgradeable design',
      tags: 'SYSTEM HIGHLIGHT',
      img: feat2Img,
      link: '#',
    },
  ]

  return (
    <section id="system-highlights" className="featured-work-section">
      <div className="fw-header">
        <h2 className="fw-main-title">System Highlights</h2>
        <p className="fw-subtitle">
          KEY CAPABILITIES AND DESIGN PRINCIPLES THAT DEFINE THE ROVER PLATFORM.
        </p>
      </div>

      <div className="fw-grid">
        {works.map((work, i) => (
          <motion.a
            href={work.link}
            key={i}
            className="fw-card"
            initial="initial"
            whileHover="hover"
            viewport={{ once: true, margin: '-50px' }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <div className="fw-image-wrapper">
              <motion.img
                src={work.img}
                alt={work.title}
                className="fw-image"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              />
            </div>
            <div className="fw-info">
              <p className="fw-tags">{work.tags}</p>
              <h3 className="fw-title">{work.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Features
