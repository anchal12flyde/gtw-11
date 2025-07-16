'use client'
import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }, 
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)", 
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};



export default function MobileAppsDesign() {


  return (
    
    <div className='util-flex util-flex-1 util-mx-1-5'>
      <section className="mobile-section flex flex-col md:flex-row items-start justify-start py-30  gap-4 md:gap-0 ">
                <motion.h2 className="mobile-header-title mr-26"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={revealVariants}
                >
                  Mobile Apps
                  </motion.h2>
                <motion.div className="mobile-divider"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={revealVariants}
                ></motion.div>
                <motion.p className="mobile-subtitle text-gray-800 pl-26"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={revealVariants}
                >
                  Designed to Scale, Perform, <br />
                  and Impress.
                </motion.p>
              </section>
</div>
      )
   }
