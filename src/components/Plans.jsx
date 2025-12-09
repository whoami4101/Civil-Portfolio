import { motion } from 'framer-motion'
import './Plans.css'

const plans = [
  { name: 'Bronze', icon: 'fa-medal', color: 'bronze', price: '₹420.00', discounted: '₹84 - ₹210', features: ['ESP-32 Module', 'DHT11 Sensor', 'Soil Moisture Sensor'] },
  { name: 'Silver', icon: 'fa-medal', color: 'silver', price: '₹2,620.00', discounted: '₹524 - ₹1,310', features: ['ESP-32 Module', 'DHT11 Sensor', 'Soil Moisture Sensor', 'PH Sensor', 'NPK Sensor'] },
  { name: 'Gold', icon: 'fa-medal', color: 'gold', price: '₹3,170.00', discounted: '₹634 - ₹1,585', popular: true, features: ['ESP-32 Module', 'DHT11 Sensor', 'Soil Moisture Sensor', 'PH Sensor', 'NPK Sensor', 'Memory Module', 'ESP32-CAM'] },
  { name: 'Diamond', icon: 'fa-gem', color: 'diamond', price: '₹3,540.00', discounted: '₹708 - ₹1,770', features: ['ESP-32 Module', 'DHT11 Sensor', 'Soil Moisture Sensor', 'PH Sensor', 'NPK Sensor', 'Memory Module', 'ESP32-CAM', 'GSM Module'] }
]

export default function Plans() {
  return (
    <section id="plans" className="plans">
      <div className="container">
        <h2 className="section-title">Subscription Plans</h2>
        <p className="section-subtitle">Choose the perfect plan for your farming needs</p>
        <div className="plans-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.03 }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className={`plan-header ${plan.color}`}>
                <i className={`fas ${plan.icon}`}></i>
                <h3>{plan.name}</h3>
              </div>
              <div className="plan-body">
                <div className="plan-price">
                  <span className="original-price">{plan.price}</span>
                  <div className="discounted-price">
                    <span className="price-range">{plan.discounted}</span>
                    <span className="scheme-badge">PMDDKY Scheme</span>
                  </div>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, j) => (
                    <li key={j}><i className="fas fa-check"></i> {feature}</li>
                  ))}
                </ul>
                <motion.button 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
