'use client'
import { useState } from 'react'

export default function Card_Section() {


  return (

      <section className="px-4 sm:px-6 lg:px-8 bg-white mb-16 pt-0">
          <div className="max-w-6xl mx-auto px-4 lg:px-0 ml-2 sm:ml-22">
          <div className="text-left max-w-2xl mb-8">
          <h2 className="heading-systems">
          <span className="text-black ">We build </span>
          <span className="text-black ">systems</span>
          <span className="text-black ">,</span>
          <span className="text-[#FFB100]"> not just screens.</span>
        </h2>
        </div>      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[450px]">
            <div className="absolute inset-0 rounded-xl bg-[linear-gradient(140deg,_black_15%,_transparent_40%)]"></div>
            <img src="/images/img2.png" alt="Modern Websites" className="w-full h-full  " />
          <div className="absolute top-6 left-10 text-white text-3xl font-semibold select-none">
            <div className="flex flex-row lg:flex-col gap-x-2 lg:gap-x-0 lg:gap-y-1">
              <p className="desktop-heading">Modern</p>
              <p className="desktop-heading">Websites</p>
            </div>
          </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[450px]">
             <div className="absolute inset-0 rounded-xl bg-[linear-gradient(140deg,_black_15%,_transparent_40%)]"></div>
            <img src="/images/img3.png" alt="E-Commerce Infrastructure" className="w-full h-full " />
            <div className="absolute top-6 left-10 text-white text-3xl font-semibold select-none">
              <div className="hidden lg:flex flex-col gap-y-1">
                <p className="desktop-heading">E-Commerce</p>
                <p className="desktop-heading">Digital Infrastructure</p>
              </div>
             
              <div className="flex flex-wrap gap-x-2 lg:hidden">
                <p className="desktop-heading">E-Commerce</p>
                <p className="desktop-heading">Digital</p>
                <p className="desktop-heading w-full">Infrastructure</p>
              </div>
            </div>

          </div>

         
          <div className="relative rounded-2xl overflow-hidden  transform transition-transform duration-500 hover:scale-105 h-[450px]">
             <div className="absolute inset-0 rounded-xl bg-[linear-gradient(140deg,_black_15%,_transparent_40%)]"></div>
            <img src="/images/img1.png" alt="Mobile Apps" className="w-full h-full " />
            <div className="absolute top-6 left-10 text-white text-3xl font-semibold select-none">
            <div className="flex flex-row lg:flex-col gap-x-2 lg:gap-x-0 lg:gap-y-1">
              <p className="desktop-heading">Mobile</p>
              <p className="desktop-heading">Apps</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

     )
}