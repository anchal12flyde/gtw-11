"use client";
import ClientButton from "../globalcomponents/Button";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function RebuildSection() {
  return (
    <>
    
  <div
  className="operate-section flex flex-col justify-center items-center util-flex util-flex-1 util-mx-1-5 text-center lg:text-left lg:items-start"
  variants={fadeInUp}
>
  <div className="mt-22 lg:mt-0 w-full">
    <div className="w-full lg:w-[700px] flex flex-col items-center lg:items-start">
      <motion.div
        className="heading-systems flex flex-wrap justify-center lg:justify-start w-full md:w-[600px]"
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
        className="headings mt-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        We take on select transformation clients each quarter. Book a discovery call or request a roadmap consultation.
      </motion.p>

      <motion.div
        className="flex flex-col items-center  justify-start gap-4 mt-8 w-full buttons-align-700"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      >
        <ClientButton
          href="#"
          className="bg-[#FFB100] text-black hover:bg-white hover:text-[#FFB100]"
        >
          Schedule a Call
        </ClientButton>
        <a
          href="/transformation-framework.pdf"
          className="custom-mobile-button"
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
