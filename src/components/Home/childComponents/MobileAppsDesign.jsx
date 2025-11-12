'use client'
import { motion } from "framer-motion";
export default function MobileAppsDesign() {


  return (
    <motion.div
      className="util-flex util-flex-1 util-mx-1-5"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity:  1 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1], 
      }}
    >
      <section className="mobile-section flex flex-col sm:flex-row  pt-30  space-x-24 ">
        <h2 className="heading-hero justify-items-center">Mobile Apps</h2>
        <div className="mobile-divider"></div>
        <p className="heading-subtitle text-gray-dark mt-4 lg:mt-0">
          Designed to Scale, Perform, <br />
          and Impress.
        </p>
      </section>
    </motion.div>
  );
   }
