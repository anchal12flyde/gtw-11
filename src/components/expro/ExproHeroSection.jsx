import Header from "../Home/childComponents/Header";
import ClientButton from "../globalcomponents/Button";
import { motion } from "framer-motion";


export default function ExproHeroSection() {

  return (
    <>
       
      <div className="hero-wrapper relative overflow-hidden min-h-screen ">
       
        <div className="absolute inset-0 min-h-screen bg-black">
          <video
            className=" hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
             >
            <source src="/videos/expro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black"></div>
           <Header/>
       

        </div>

        <div className="util-flex util-flex-1 util-mx-1-5 relative  text-center text-white">
          <div className="hero-section ">
            <h1
        className="heading-heros"
       
      >
        Beyond Storefronts. We Build <br /> Commerce Infrastructure.
      </h1>

      <p
        className="heading-subtitles w-full sm:w-[900px] mt-6"
      
      >
        ExPro is our full-stack eCommerce engine built for high-growth brands that need control, speed, and scale, not subscription bloat.
      </p>
            <div
            className="flex flex-col sm:flex-row gap-4 mt-8"
        
          
            >
            <ClientButton
                href="#"
                className="bg-[#FFB100] text-black hover:bg-white hover:text-[#FFB100]"
            >
             Explore The Platform
            </ClientButton>
            <a
                href="/transformation-framework.pdf"
                className="custom-mobile-button"
                download
            >
                Book A Technical Demo
            </a>
            </div>
            
          </div>
          
        </div>

         <div className="relative z-10 bg-black text-white util-flex util-flex-1 util-mx-1-5 py-30 ">
        <div className="lg:hidden absolute inset-0 flex items-center justify-center">
        <div   className="flex flex-col items-center space-y-42 ">
          <h2 className="text-[25vw] text-white/10 font-600 leading-none tracking-wider">
            From
          </h2>
          <h2 className="text-[25vw] text-white/10 font-600 leading-none tracking-wider">
            To
          </h2>
        </div>
      </div>
      <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="mb-12 "
          >
            <div className="heading-systems flex flex-wrap justify-center text-center w-full lg:justify-start lg:text-left">
              <p className="text-white">The Problem&nbsp;</p>
              <p className="text-[#FFB100]">We Solve</p>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row  items-center justify-evenly text-center lg:text-left gap-14 md:gap-35 ">
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
                className="w-50 text-[#FFB100] animate-arrowDown md:hidden"
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
                className="hidden lg:block w-8 text-[#FFB100] animate-arrowDown"
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

            <motion.div className="flex-1 "
             initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              viewport={{ once: false }}
            >
             <p className="text-2xl text-[#FFB100]">
              ExPro fixes this.
            </p>

              <p href="#" className="expro-right pt-8 lg:pt-4 block">
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
