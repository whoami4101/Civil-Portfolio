import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        {['🌿', '🌾', '🌱', '🍃'].map((emoji, i) => (
          <motion.div
            key={i}
            className={`leaf leaf${i + 1}`}
            animate={{
              y: [-20, -60, -20],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 1.5
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Smart Farming Made Simple
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Monitor soil health, weather conditions, and crop growth with our advanced IoT devices
          </motion.p>
          <motion.a 
            href="#plans" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
