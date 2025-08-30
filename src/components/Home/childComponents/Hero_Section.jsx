'use client'
import { motion } from 'framer-motion';



export default function Hero_Section() {


  return (
    <>
      <div className="">
        <section className="relative bg-transparent font-inter overflow-hidden min-h-screen">
          <div className="hidden md:block relative w-full h-[700px] object-cover">
            <video
              src="https://ik.imagekit.io/p1zreiw3z/4k-resolution-abstract-background-and-line-dot-ba-2025-08-29-11-23-20-utc.mov/ik-video.mp4?updatedAt=1756542635640"
              autoPlay
              loop
              muted
              playsInline
              className="absolute object-cover  w-full h-full"
            />
          </div>

          <div className="block md:hidden relative w-full h-full">
            <div className="hero-banner-wrapper bg-mobile-hero"></div>
          </div>

          <div className="util-flex util-flex-1 util-mx-1-5">
            <div className="block md:hidden relative">
              <div className="">
                <h1 className="heading-hero-mobile">
                  Building the
                  <br />
                  <span className="text-primary">Digital Backbone</span> of
                  <br />
                  Modern Commerce
                </h1>
                <p className="heading-subtitle-mobile mt-4 mb-20">
                  From concept to code, commerce to
                  <br />
                  conversion, we design the technology
                  <br />
                  infrastructure for tomorrow’s businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute  bottom-24 util-mx-1-5 ">
            <h1
              className="heading-hero"
              style={{ color: "var(--text-color-dark)" }}
            >
              Building the{" "}
              <span className="text-primary">Digital Backbone</span>
              <br />
              of Modern Commerce
            </h1>
            <p className="heading-subtitle text-gray-dark mt-2">
              From concept to code, commerce to conversion, we design the
              <br />
              technology infrastructure for tomorrow’s businesses.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}


    