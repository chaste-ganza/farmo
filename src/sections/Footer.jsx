import React from 'react'
import { Globe, MessageSquare, Share2 } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-logo text-gradient">FARMO</h2>
          <p className="footer-bio">
            Built as a robotics project exploring modular design and adaptive systems for real-world environments.
          </p>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="#" className="social-link"><Globe size={20} /></a>
            <a href="#" className="social-link"><MessageSquare size={20} /></a>
            <a href="#" className="social-link"><Share2 size={20} /></a>
          </div>
          <div className="contact-link">
            <a href="mailto:hello@farmo-robotics.xyz" className="pill-btn dark footer-btn">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Modular Rover Project</p>
        <div className="status-indicator">
          <span className="pulse-dot-small"></span>
          <span>Systems Online</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
