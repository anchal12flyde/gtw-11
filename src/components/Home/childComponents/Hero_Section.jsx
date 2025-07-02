'use client'
import { motion } from 'framer-motion';



export default function Hero_Section() {


  return (
    <>
   <div className='util-flex util-flex-1 util-mx-1-5'>
  <section className="relative bg-transparent font-inter overflow-hidden ">
    <div className="hidden md:block relative w-full h-[700px]">
      <img
        src="/images/hero2.png"
        alt="Digital Transformation Banner"
        className="absolute inset-0 w-full h-full object-cover object-left"
      />
    </div>

    
    <div className="block md:hidden relative w-full h-full">
      <div className="hero-banner-wrapper bg-mobile-hero"></div>
    </div>

   
    <div className="block md:hidden relative">
      <div className="">
        <motion.h1
          className="heading-hero-mobile"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Building the<br />
          <span className="text-[#FFB100]">Digital Backbone</span> of
          <br />
          Modern Commerce
        </motion.h1>
        <motion.p
          className="heading-subtitle-mobile mt-4"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          From concept to code, commerce to<br />
          conversion, we design the technology<br />
          infrastructure for tomorrow’s businesses.
        </motion.p>
      </div>
    </div>

    <div className="hidden md:block absolute inset-x-0 bottom-24">
      <motion.h1
        className="heading-hero" 
        style={{ color: "var(--text-color-dark)" }}
        initial={{ opacity: 0, x: -60  }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Building the <span className="text-[#FFB100]">Digital Backbone</span>
        <br />
        of Modern Commerce
      </motion.h1>
      <motion.p
        className="heading-subtitle text-gray-600"
        initial={{ opacity: 0, x: -60  }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
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


    