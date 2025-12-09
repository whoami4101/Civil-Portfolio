import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get Started Today</h2>
        <p className="section-subtitle">Download our app or reach out to us</p>
        <div className="contact-buttons">
          <motion.a 
            href="https://drive.google.com/uc?export=download&id=1nAu-DJ2NrXuvlHKefwFk4bratC8d16fb"
            className="contact-btn download"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download"></i>
            <span>Download App</span>
          </motion.a>
          <motion.a 
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn message"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-whatsapp"></i>
            <span>Message Us</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
