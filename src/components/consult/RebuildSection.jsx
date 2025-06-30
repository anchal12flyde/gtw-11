"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function RebuildSection() {
  return (
    <>
    <div className="yellow-strip" >
       <motion.p  variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
             transition={{ duration: 0.6, ease: "easeOut", delay: 0.01 }}> We’re not here to write a 200-slide deck. We’re here to fix what’s slowing you down.</motion.p> 
      </div>
    <div
      className="operate-section flex flex-col justify-start md:justify-center util-flex util-flex-1 util-mx-1-5 "
      variants={fadeInUp}
    >
      <div className="mt-22 sm:mt-0">
        <div className="w-full md:w-[700px]">
          <motion.div
            className="heading-systems flex flex-wrap w-full md:w-[600px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <span className="text-[#FFB100]">Let's Rebuild</span>&nbsp;
            <span>With Clarity</span>
          </motion.div>

          <motion.p
            className="right-column-text mt-8 "
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            We take on select transformation clients each quarter.Book a discovery call or request a roadmap consultation.
          </motion.p>

         
        <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
            <a
                href="#"
                className="custom-mobile-button bg-[#FFB100] text-black px-6 py-3 rounded-md text-center font-semibold transition"
            >
                Schedule a Call
            </a>
            <a
                href="/transformation-framework.pdf"
                className="custom-mobile-button border border-white text-white px-6 py-3 rounded-md text-center font-semibold hover:bg-white hover:text-black transition"
                download
            >
                Download Our Transformation Framework PDF
            </a>
            </motion.div>

        </div>
      </div>
    </div>
    </>
  );
}
