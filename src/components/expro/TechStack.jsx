"use client";
import { useRef } from "react";


export default function TechStack() {
     const scrollRef = useRef(null);
    const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  };
    const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };
  return (
    <section className=" util-flex util-flex-1 util-mx-1-5  mt-26">
      <div className="relative flex items-left justify-between mb-12 w-full">
        <h2 className=" flex-1 heading-systems ">Tech Stack</h2>
      </div>
      <div className="overflow-auto scrollbar-hide w-full flex" ref={scrollRef}>
        <div className="flex flex-nowrap gap-4  w-full">
          <div className="tech-cards justify-between  bg-[linear-gradient(320deg,_#ffb100_0%,_#ffcd5d_100%)] space-y-26  ">
            <div className="campus-image-wrapper ">
              <img
                src="/images/assets/expro1.png"
                alt="Campus"
                className="campus-image"
              />
            </div>

            <div className="flex flex-col gap-4  ">
              <h3 className="ecom-headings text-left text-white-color1">
                Frontend
              </h3>
              <p className="paragraphs-default text-white-color1">
                React, Next.js, Tailwind
              </p>
            </div>
          </div>

          <div className="tech-cards justify-between  bg-[linear-gradient(320deg,_#ffb100_0%,_#ffcd5d_100%)] space-y-26">
            <div className="campus-image-wrapper ">
              <img
                src="/images/assets/expro2.png"
                alt="Campus"
                className="campus-image"
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <h3 className="ecom-headings text-left text-white-color1">
                Mobile
              </h3>
              <p className="paragraphs-default text-white-color1">
                React Native
              </p>
            </div>
          </div>

          <div className="tech-cards justify-between  bg-[linear-gradient(320deg,_#ffb100_0%,_#ffcd5d_100%)] space-y-26">
            <div className="campus-image-wrapper">
              <img
                src="/images/assets/expro3.png"
                alt="Campus"
                className="campus-image"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="ecom-headings text-left text-white-color1">
                Backend
              </h3>
              <p className="paragraphs-default text-white-color1">
                Node.js, Express, MongoDB
              </p>
            </div>
          </div>

          <div className="tech-cards justify-between  bg-[linear-gradient(320deg,_#ffb100_0%,_#ffcd5d_100%)] space-y-26">
            <div className="campus-image-wrapper ">
              <img
                src="/images/assets/expro4.png"
                alt="Campus"
                className="campus-image"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="ecom-headings text-left text-white-color1">
                Infra
              </h3>
              <p className="paragraphs-default text-white-color1">
                AWS / Render / Vercel
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 lg:hidden">
        <button className="arrow-button" onClick={scrollLeft}>
          <img
            src="/images/Leftarrow2.png"
            alt="Left Arrow"
            className="w-10 h-10"
          />
        </button>
        <button className="arrow-button" onClick={scrollRight}>
          <img
            src="/images/Rightarrow1.png"
            alt="Right Arrow"
            className="w-10 h-10"
          />
        </button>
      </div>
    </section>
  );
}
