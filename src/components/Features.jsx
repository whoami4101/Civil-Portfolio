import { motion } from 'framer-motion'
import './Features.css'

const features = [
  { icon: 'fa-thermometer-half', title: 'Temperature & Humidity', desc: 'Real-time monitoring with DHT11 sensor for optimal crop conditions' },
  { icon: 'fa-tint', title: 'Soil Moisture', desc: 'Track soil moisture levels to optimize irrigation schedules' },
  { icon: 'fa-flask', title: 'pH & NPK Sensors', desc: 'Measure soil pH and nutrient levels for better crop yield' },
  { icon: 'fa-camera', title: 'Visual Monitoring', desc: 'ESP32-CAM for remote crop surveillance and analysis' },
  { icon: 'fa-database', title: 'Data Storage', desc: 'Memory module for historical data tracking and insights' },
  { icon: 'fa-signal', title: 'GSM Connectivity', desc: 'Stay connected anywhere with GSM module support' }
]

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.6 }}
              >
                <i className={`fas ${feature.icon}`}></i>
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
