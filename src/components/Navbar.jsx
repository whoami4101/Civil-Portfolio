import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="nav-brand">
          <i className="fas fa-seedling"></i>
          <span>KrishiMitra</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#plans">Plans</a></li>
        </ul>
      </div>
    </motion.nav>
  )
}
