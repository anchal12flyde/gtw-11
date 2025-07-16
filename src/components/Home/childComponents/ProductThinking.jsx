'use client'
import { motion } from 'framer-motion'

export default function ProductThinking() {
  const fadeUpLeftToRight = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <section className="feature-section util-flex util-flex-1 util-mx-1-5 mt-26">
    
      <motion.div
        className="flex flex-col md:flex-row items-start sm:items-center gap-4 md:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        variants={fadeUpLeftToRight}
      >
        <div>
          <img src="/images/assets/mobileIcon1.png" className="w-25 h-25 md:w-30 md:h-30" alt="Icon" />
        </div>
        <div>
          <h2 className="feature-title">Product Thinking First</h2>
          <p className="feature-subtitle">We help you refine scope, not just ship tasks</p>
        </div>
      </motion.div>

  
      <motion.div
        className="flex flex-col md:flex-row items-start sm:items-center md:justify-items-start gap-4 md:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        variants={fadeUpLeftToRight}
      >
        <div>
          <img src="/images/assets/mobileIcon2.png" className="w-25 h-25 md:w-30 md:h-30" alt="Icon" />
        </div>
        <div>
          <h2 className="feature-title">Cross-Platform Mastery</h2>
          <p className="feature-subtitle">iOS + Android from a single, native-feeling codebase</p>
        </div>
      </motion.div>

   
      <motion.div
        className="flex flex-col md:flex-row items-start sm:items-center md:justify-items-start gap-4 md:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        variants={fadeUpLeftToRight}
      >
        <div>
          <img src="/images/assets/mobileIcon3.png" className="w-25 h-25 md:w-30 md:h-30" alt="Icon" />
        </div>
        <div>
          <h2 className="feature-title">QA + Scale Support</h2>
          <p className="feature-subtitle">From first deploy to v2, we are with you at every build stage</p>
        </div>
      </motion.div>
    </section>
  )
}
