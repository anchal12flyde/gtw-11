"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FoundationSection() {
  return (
    < div className="operate-section flex flex-col justify-start md:justify-center" variants={fadeInUp}>
      <div className="util-flex util-flex-1 util-mx-1-5 mt-22 sm:mt-0">
        <div className="w-full md:w-[700px]">
          <motion.div className="heading-systems flex flex-wrap w-full md:w-[500px] " variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" ,delay: 0.1 }}>
            <span>
              We Don’t Chase Trends.
            </span>
            <span className="text-[#FFB100]" >
              We Build
            </span>
            <div >
              <p> Foundations.</p>
            </div>
          </motion.div>

          <motion.p
            className="right-column-text mt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            That’s the GTW Way — slow when it matters, smart where it counts,
            and fast when it’s time to move.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
