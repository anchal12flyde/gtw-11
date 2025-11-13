"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FoundationSection() {
  return (
    <div
      className="operate-section flex flex-col items-center md:items-start text-center md:text-left"
      variants={fadeInUp}
    >
      
      <div className="util-flex util-flex-1 util-mx-1-5 justify-center">
        <div className="w-full md:w-[700px] flex flex-col items-center md:items-start">
          <motion.div
            className="heading-systems flex flex-wrap w-full md:w-[500px] justify-center md:justify-start text-center md:text-left"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <span>We Don’t Chase Trends.&nbsp;</span>
            <span className="text-light-blue">We Build&nbsp;</span>
            <div>
              <span>Foundations.</span>
            </div>
          </motion.div>

          <motion.p
            className="headings mt-8 text-center md:text-left"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            That’s the GTW Way, slow when it matters, smart where it counts, and
            fast when it’s time to move.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
