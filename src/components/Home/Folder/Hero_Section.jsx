'use client'
import { useState } from 'react'

export default function Hero_Section() {


  return (
    <>
   <div className='mb-0 util-flex util-flex-1 util-mx-1-5'>
      <section className="relative bg-white font-inter overflow-hidden pt-2">
      <div className="hidden md:block relative w-full h-[700px] ">
        <img
          src="/images/hero2.png"
          alt="Digital Transformation Banner"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
      </div>
      <div className="block md:hidden relative w-full h-[950px] overflow-hidden ">
       <div className="hero-banner-wrapper">
        <img
            src="/images/hero1.png"
            alt="Digital Transformation Mobile Banner"
            className="hero-banner-image"
        /> 
      </div>
    </div>
        <div className="block md:hidden -mt-99 relative">
          <div className=" w-full max-w-full whitespace-nowrap">
            <h1 className="heading-hero-mobile fade-in-up delay-200">
              Building the<br />
          
                <span className="text-[#FFB100]">Digital Backbone</span> of
              <br />
               Modern Commerce 
            </h1>
           <p className="heading-subtitle-mobile fade-in-up delay-200 mt-4">
            From concept to code, commerce to<br />
            conversion, we design the technology<br />
            infrastructure for tomorrow’s businesses.
          </p>
          </div>
        </div>

     
      <div className="hidden md:block absolute inset-x-0 bottom-24  ">
       
          <h1 className="heading-hero fade-in-up delay-200">
          Building the <span className="text-[#FFB100]">Digital Backbone</span><br />
          of Modern Commerce
        </h1>
          <p className="heading-subtitle fade-in-up delay-200">
            From concept to code, commerce to conversion, we design the<br />
            technology infrastructure for tomorrow’s businesses.
          </p>
       
      </div>

    </section>
    </div>
</>

             )
}


    