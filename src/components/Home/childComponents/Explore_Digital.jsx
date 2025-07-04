"use client";
import HoverVideo from "./VideoPlayer";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Explore_Digital() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };


  return (
    <>
 
      <section className="util-flex util-flex-1 util-mx-1-5 gradient-section text-white mt-26">
      
      <div className="md:hidden absolute inset-0 flex items-center justify-center">
        <div   className="flex flex-col items-center space-y-50 py-4">
          <h2 className="text-[25vw] text-white/10 font-600 leading-none tracking-wider">
            From
          </h2>
          <h2 className="text-[25vw] text-white/10 font-600 leading-none tracking-wider">
            To
          </h2>
        </div>
      </div>

     <div className="relative container pt-20 sm:pt-38">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="mb-12"
          >
            <div className="heading-systems flex flex-wrap">
              <p className="text-white">We Build. We Digitize.</p>
              <p className="text-[#FFB100]">We Transform.</p>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-evenly text-center md:text-left gap-12 md:gap-35">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: false }}
              className="space-y-6 mt-4"
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
              className="flex justify-center items-center my-6"
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
             < p className="right-column-text">
                We help organizations rethink the way they run, by{" "}
                <span className="text-[#FFB100]">
                  replacing complexity with clarity –
                </span>{" "}
                powered by purpose-built platforms.
              </p>
              <a href="#" className="explore-link pt-12 md:pt-12 block">
                Explore Digital Transformation
              </a>
            </motion.div>
          </div>
        </div>

    </section>



            <div className="gradient-yellow-section util-flex util-flex-1 util-mx-1-5">
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
          <div className="overflow-auto scrollbar-hide w-full flex"  ref={scrollRef}>
            <div className=" flex-shrink-0"></div>
            <div className="flex flex-nowrap gap-10 pb-4 w-full ">
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">

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
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                  <img
                    src="/images/img4.png"
                    alt="Campus"
                    className="w-full h-50 "
                  />
                </div>
                <div className="flex flex-col gap-4 px-4">
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
              {/* <div className=" flex-shrink-0  w-[20px] sm:w-[60px]"></div> */}
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
