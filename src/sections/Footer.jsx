import React from 'react'
import { Globe, MessageSquare, Share2 } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
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
            <a href="mailto:gchaste23@gmail.com" className="pill-btn dark footer-btn"><span>Contact Us</span></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="nano-wordmark" aria-label="NANO">
          <span className="nano-letter nano-letter-n">N</span>
          <span className="nano-letter nano-letter-a">A</span>
          <span className="nano-letter nano-letter-n2">N</span>
          <span className="nano-letter nano-letter-o">O</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
