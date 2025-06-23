"use client";
import { useRef, useState } from "react";
import HoverVideo from "./VideoPlayer";

export default function Explore_Digital() {

  return (
    <>
 
      <section className="util-flex util-flex-1 util-mx-1-5 gradient-section text-white  mt-26">
        <div className=" md:hidden absolute inset-0 flex items-center justify-center ">
          <div className="flex flex-col items-center space-y-50 py-4">
            <h2 className="text-[25vw] text-white/10 font-600 leading-none tracking-wider">
              From
            </h2>
            <h2 className="text-[25vw] text-white/10 font-600 leading-none tracking-wider">
              To
            </h2>
          </div>
        </div>

       <div className="relative container pt-20 sm:pt-38">

         <div className="mb-12">
            <div className="heading-systems flex flex-wrap"> 
           <p className="text-white">We Build.We Digitize.  </p>
             {" "}   <p className="text-[#FFB100] "> We Transform.</p>
             </div>
          </div>
          
           <div className="flex flex-col md:flex-row items-center justify-evenly text-center md:text-left gap-12 md:gap-35">

          <div className="space-y-6 mt-4">
            <p className="left-column-text">Legacy systems</p>
            <p className="left-column-text">Manual operations</p>
            <p className="left-column-text">Scattered tech</p>
          </div>

          
          <div className="flex justify-center items-center my-6">
         
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
          </div>
          <div className=" flex-1 w-full  mb-30 md:mb-0">
            <p className="right-column-text">
              We help organizations rethink the way they run, by{" "}
              <span className="text-[#FFB100]">replacing complexity with clarity –</span>{" "}
              powered   by purpose-built platforms.
            </p>
            <a href="#" className="explore-link pt-12 md:pt-12 block">
              Explore Digital Transformation
            </a>
          </div>
        </div>

          
        </div>
      </section>

      <div className="gradient-yellow-section util-flex util-flex-1 util-mx-1-5">
          <div className="text-left sm:block flex  mb-12  ">
            <div className="heading-systems flex flex-wrap ">
              <div className=" "></div>
              
              <p className="text-black">We build systems,</p>
             <p className="text-white">not just screens.</p>
             </div>
          </div>
          <div className="overflow-auto scrollbar-hide w-full flex">
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
        
      </div>
 
    </>
  );
}
