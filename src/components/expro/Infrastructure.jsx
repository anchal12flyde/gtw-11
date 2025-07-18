"use client";
import ClientButton from "../globalcomponents/Button";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Infrastructure() {
  return (
    <>
    
   
    <div
      className="operate-section flex flex-col justify-center items-center util-flex util-flex-1 util-mx-1-5 text-center lg:text-left lg:items-start mt-26 "
      variants={fadeInUp}
    >
      <div className="mt-22 sm:mt-0">
        <div className="w-full md:w-[700px]">
        <motion.div
  className="heading-systems flex flex-wrap w-full md:w-[600px] justify-center text-center md:text-left"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
>
  Launch Your Own Infrastructure. Not Someone Else’s Platform.
</motion.div>


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
                className="custom-mobile-button "
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
