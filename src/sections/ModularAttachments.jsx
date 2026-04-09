import React from 'react'
import { motion } from 'framer-motion'
import waterModuleImg from '../assets/images/Copilot_20260409_144930.png'
import seedModuleImg from '../assets/images/Copilot_20260409_145612.png'
import carryModuleImg from '../assets/images/BCO.9077a339-0288-4d7e-abd2-efcc0966de69.png'
import './ModularAttachments.css'

const ModularAttachments = () => {
  const modules = [
    {
      id: "water",
      name: "Watering Module",
      desc: "Targeted watering system using a compact pump and adjustable nozzle for controlled plant hydration.",
      img: waterModuleImg
    },
    {
      id: "seed",
      name: "Seed Planting Module",
      desc: "Servo-based dispensing system designed to release seeds at specific positions with simple mechanical precision.",
      img: seedModuleImg
    },
    {
      id: "carry",
      name: "Carrying Module",
      desc: "Lightweight payload platform for transporting small tools, materials, or additional components.",
      img: carryModuleImg // Re-using image proxy for now
    }
  ];

  return (
    <section id="modular-ecosystem" className="modules-section">
      <div className="modules-bg-glow"></div>
      
      <div className="modules-header">
        <h2 className="section-title text-gradient-green">Modular Ecosystem</h2>
        <p className="modules-subtitle">Swap tools depending on the task. One platform, multiple functions.</p>
      </div>

      <div className="modules-list">
        {modules.map((mod, i) => (
          <motion.div 
            key={mod.id}
            className={`module-card flex-row-${i % 2 === 0 ? 'regular' : 'reverse'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="module-text-content">
              <h3 className="module-title">{mod.name}</h3>
              <p className="module-desc">{mod.desc}</p>
              <button className="pill-btn dark"><span>View Specs</span></button>
            </div>
            
            <div className="module-visual">
              <div className="module-placeholder-wrapper">
                {/* 2D image is back, replacing WebGL */}
                <img src={mod.img} alt={mod.name} className="module-image-asset" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ModularAttachments
