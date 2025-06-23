"use client";
import { useState } from "react";

export default function Card_Section() {
  return (
    <div className="util-flex util-flex-1 util-mx-1-5">
    <section className=" bg-white mt-16 sm:mt-0">
     
        <div className=" mb-12">
          <h2 className="heading-systems flex flex-wrap">
            <span className="text-black">We build systems,</span>
            <span className="text-[#FFB100]"> not just screens.</span>
          </h2>
        </div>
        <div className="flex justify-center ">
          <div className="usecases-grid1">
            <div className="relative rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 h-[480px] w-full">
              <div className="absolute inset-0 rounded-xl bg-[linear-gradient(140deg,_black_15%,_transparent_40%)]"></div>
              <img
                src="/images/img2.png"
                alt="Modern Websites"
                className="w-full h-full "
              />
              <div className="absolute top-6 left-10 text-white text-3xl font-semibold select-none">
                <div className="flex flex-row lg:flex-col gap-x-2 lg:gap-x-0 lg:gap-y-1">
                  <p className="desktop-heading">Modern</p>
                  <p className="desktop-heading">Websites</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 h-[480px] w-full">
              <div className="absolute inset-0 rounded-xl bg-[linear-gradient(140deg,_black_15%,_transparent_40%)]"></div>
              <img
                src="/images/img3.png"
                alt="E-Commerce Infrastructure"
                className="w-full h-full "
              />
              <div className="absolute top-6 left-10 text-white text-3xl font-semibold select-none">
                <div className="hidden lg:flex flex-col gap-y-1">
                  <p className="desktop-heading">E-Commerce</p>
                  <p className="desktop-heading">
                    Digital <br />
                    Infrastructure
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-2 lg:hidden">
                  <p className="desktop-heading">E-Commerce</p>
                  <p className="desktop-heading">Digital</p>
                  <p className="desktop-heading w-full">Infrastructure</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 h-[480px] w-full">
              <div className="absolute inset-0 rounded-xl bg-[linear-gradient(140deg,_black_15%,_transparent_40%)]"></div>
              <img
                src="/images/img1.png"
                alt="Mobile Apps"
                className="w-full h-full"
              />
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
    </div>
  );
}
