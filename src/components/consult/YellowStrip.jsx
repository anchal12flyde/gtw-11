"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
export default function YellowStrip() {
  return (
    <>
    <div className="yellow-strip" >
       <motion.p   variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
             transition={{ duration: 0.6, ease: "easeOut", delay: 0.01 }}> We’re not here to write a 200 pages slide deck. We’re here to fix what’s slowing you down.</motion.p> 
      </div>
       </>
  );
}
