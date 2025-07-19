"use client";
import HoverVideo from "./VideoPlayer";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Explore_Digital() {
  const scrollRef = useRef(null);

   const CARD_WIDTH = 320 + 40; 

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
    }
  };

  return (
    <>
 
      <section className="util-flex util-flex-1 util-mx-1-5 gradient-section text-white mt-26 py-20">
      
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

     <div className="relative ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="mb-12"
          >
         <div className="heading-systems flex flex-wrap justify-center text-center w-full lg:justify-start lg:text-left">

              <p className="text-white">We Build. We Digitize.</p>
              &nbsp;<p className="text-[#FFB100]">We Transform.</p>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-evenly text-center lg:text-left gap-14 lg:gap-35">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: false }}
              className="space-y-5"
            >
              <p className="left-column-text">Legacy systems</p>
              <p className="left-column-text">Manual operations</p>
              <p className="left-column-text">Scattered tech</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <svg
                className="w-50  text-[#FFB100] animate-arrowDown lg:hidden"
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
                className="hidden lg:block w-8  text-[#FFB100] animate-arrowDown"
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
              className="flex-1 space-y-16"
            >
             < p className="right-column-text justify-items-start">
                We help organizations rethink the way they run, by{" "}
                <span className="text-[#FFB100]">
                  replacing complexity with clarity –
                </span>{" "}
                powered by purpose-built platforms.
              </p>
              <a href="#" className="explore-link  block">
                Explore Digital Transformation
              </a>
            </motion.div>
          </div>
        </div>

    </section>



            <div className="gradient-yellow-section py-20">

              <div className="util-flex util-flex-1 util-mx-1-5 ">
              <div className="relative flex items-left justify-between mb-12 w-full">
              <h2 className="text-left  flex-1 heading-systems ">
                <span className="text-black">We build systems,</span>{" "}
                <span className="block md:inline text-white">not just screens.</span>
              </h2>
              <div className="hidden sm:flex gap-0">
                <button className="arrow-button" onClick={scrollLeft}>
                  <img src="/images/LeftArrow.png" alt="Left Arrow" className="w-10 h-10" />
                </button>
                <button className="arrow-button" onClick={scrollRight}>
                  <img src="/images/RightArrow.png" alt="Right Arrow" className="w-10 h-10" />
                </button>
              </div>
            </div>
            </div>

          <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full flex"  ref={scrollRef}>
            
            <div className="flex flex-nowrap gap-10 ">
       <div className=" yellow-container">
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80  h-[400px] overflow-hidden">

                <HoverVideo src="/videos/vd2.mp4"  />
                
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    Ecommerce for Scale
                  </h3>
                  <p className="paragraph-default">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
            </div>

              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                  <img
                    src="/images/img4.png"
                    alt="Campus"
                    className="w-full h-50 "
                  />
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    A Campus Goes Digital
                  </h3>
                  <p className="paragraph-default ">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                  <img
                    src="/images/img7.png"
                    alt="Campus"
                    className="w-full h-50 "
                  />
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    Landing That Converts
                  </h3>
                  <p className="paragraph-default">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <HoverVideo src="/videos/vd1.mp4"/>

                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    Ecommerce for Scale
                  </h3>
                  <p className="paragraph-default">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden ">
                <div className="relative rounded-2xl">
                  <img
                    src="/images/img7.png"
                    alt="Campus"
                    className="w-full h-50"
                  />
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    A Campus Goes Digital
                  </h3>
                  <p className="paragraph-default">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
               <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                  <img
                    src="/images/img4.png"
                    alt="Campus"
                    className="w-full h-50 "
                  />
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    A Campus Goes Digital
                  </h3>
                  <p className="paragraph-default ">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
              
               <div className=" flex-shrink-0  w-[10px] sm:w-[50px]"></div>
            </div>
          </div>
        
          <div className="flex justify-center  mt-6 sm:hidden">
            <button className="arrow-button" onClick={scrollLeft}>
              <img src="/images/LeftArrow.png" alt="Left Arrow" className="w-10 h-10" />
            </button>
            <button className="arrow-button" onClick={scrollRight}>
              <img src="/images/RightArrow.png" alt="Right Arrow" className="w-10 h-10" />
            </button>
          </div>     
                  
      </div>
 
    </>
  );
}
