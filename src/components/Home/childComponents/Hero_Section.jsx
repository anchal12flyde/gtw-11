'use client'
import { motion } from 'framer-motion';


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
export default function Hero_Section() {


  return (
    <>
   <div className=''>
  <section className="relative bg-transparent font-inter overflow-hidden min-h-screen">
    <div className="hidden md:block relative w-full h-[700px]">
      <img
        src="/images/hero2.png"
        alt="Digital Transformation Banner"
        className="absolute object-cover object-left"
      />
    </div>

    
    <div className="block md:hidden relative w-full h-full">
      <div className="hero-banner-wrapper bg-mobile-hero"></div>
    </div>

   <div className='util-flex util-flex-1 util-mx-1-5'>
    <div className="block md:hidden relative">
      <div className="">
        <motion.h1
          className="heading-hero-mobile"
          initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={revealVariants}
        >
          Building the<br />
          <span className="text-[#FFB100]">Digital Backbone</span> of
          <br />
          Modern Commerce
        </motion.h1>
        <motion.p
          className="heading-subtitle-mobile mt-4"
          initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          ...revealVariants,
          visible: {
            ...revealVariants.visible,
            transition: { duration: 1, ease: "easeOut", delay: 0.2 },
          },
        }}
        >
          From concept to code, commerce to<br />
          conversion, we design the technology<br />
          infrastructure for tomorrow’s businesses.
        </motion.p>
      </div>
    </div>
</div>

    <div className="hidden md:block absolute  bottom-24 util-mx-1-5 ">
      <motion.h1
        className="heading-hero" 
        style={{ color: "var(--text-color-dark)" }}
       initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={revealVariants}
      >
        Building the <span className="text-[#FFB100]">Digital Backbone</span>
        <br />
        of Modern Commerce
      </motion.h1>
      <motion.p
        className="heading-subtitle text-[#313131]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          ...revealVariants,
          visible: {
            ...revealVariants.visible,
            transition: { duration: 1, ease: "easeOut", delay: 0.2 },
          },
        }}
      >
        From concept to code, commerce to conversion, we design the<br />
        technology infrastructure for tomorrow’s businesses.
      </motion.p>
    </div>

  </section>
</div>
</>

             )
}


    