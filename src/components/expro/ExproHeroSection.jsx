import Header from "../Home/childComponents/Header";
import ClientButton from "../globalcomponents/Button";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
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


export default function ExproHeroSection() {
   const { ref, inView } = useInView({ triggerOnce: false });
  

  return (
    <>
       
      <div className="hero-wrapper relative overflow-hidden min-h-screen ">
       
        <div className="absolute inset-0 h-screen">
          <video
            className="w-full h-full object-cover hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/expro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
           <Header/>
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5 relative  text-center text-white">
          <div className="hero-section">
            <motion.h1
        className="heading-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={revealVariants}
      >
        Beyond Storefronts. We Build <br /> Commerce Infrastructure.
      </motion.h1>

      <motion.p
        className="heading-subtitles w-full sm:w-[900px] mt-6"
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
        ExPro is our full-stack eCommerce engine built for high-growth brands that need control, speed, and scale — not subscription bloat.
      </motion.p>
            <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
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
             Explore The Platform
            </ClientButton>
            <a
                href="/transformation-framework.pdf"
                className="custom-mobile-button border border-white text-white px-6 py-3 rounded-md text-center font-normal hover:bg-white hover:text-black transition"
                download
            >
                Book A Technical Demo
            </a>
            </motion.div>
            
          </div>
          
        </div>

         <div className="relative z-10 bg-black text-white util-flex util-flex-1 util-mx-1-5 ">
       
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="mb-12 sm:0"
          >
            <div className="heading-systems flex flex-wrap ">
              <p className="text-white">The Problem&nbsp;</p>
              <p className="text-[#FFB100]">We Solve</p>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row text-center md:text-left gap-12 md:gap-35 pb-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: false }}
              className=" expro-left"
            >
              <p className="w-[full] sm:w-[500px]">Shopify breaks when you scale. Headless is too headless.
                 Piecing together tools creates operational chaos.</p>
             
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              viewport={{ once: false }}
              className="flex justify-center items-center "
            >
              <svg
                className="w-50 h-12 text-[#FFB100] animate-arrowDown md:hidden"
                viewBox="0 0 192 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10L96 40L182 10"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="hidden md:block w-6 h-52 text-[#FFB100] animate-arrowDown"
                viewBox="0 0 24 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L20 52L2 102"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              viewport={{ once: false }}
              className="flex-1 w-full mb-30 md:mb-0"
            >
             <p className="text-2xl text-[#FFB100]">
              ExPro fixes this.
            </p>

              <p href="#" className="expro-right pt-8 md:pt-4 block">
                Built on the MERN stack with a production-ready admin panel, mobile apps,
                 and deep integrations it gives you false ownership of your commerce platform.
              </p>
            </motion.div>
          </div>
      

      </div >  
      

      </div>
      
      
    </>
  );
}
