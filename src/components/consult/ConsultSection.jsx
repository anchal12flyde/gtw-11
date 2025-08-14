"use client";
import { useRef } from "react";





export default function ConsultSection() {
     const scrollRef = useRef(null);
    const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };
    const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };
  return (
    <section className="bg-gray-100 util-flex util-flex-1 util-mx-1-5 py-20 mt-26 ">
      <div className="relative flex items-left justify-between mb-12 w-full">
        <h2 className=" flex-1 heading-systems ">
          <span className="text-primary">Why GTW</span> Consult
        </h2>
      </div>

      <div
        ref={scrollRef}
        style={{
          transform: "translateX(0)",
          scrollBehavior: "smooth",
          display: "flex",
          scrollSnapType: "x mandatory",
          overflowX: "auto",
        }}
        className="scrollbar-hide"
      >
        <div className="flex flex-nowrap gap-4  w-full">
          <div className="tech-card justify-between rounded-3xl space-y-26">
            <div className="campus-image-wrapper ">
              <img
                src="/images/assets/eclipse.png"
                alt="Campus"
                className="image"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <h3 className="ecom-headings text-left">Systems-first</h3>
              <p className="paragraphs-default text-gray-dark">
                Systems-first, not software-first.
              </p>
            </div>
          </div>

          <div className="tech-card justify-between  rounded-3xl space-y-26">
            <div className="campus-image-wrapper ">
              <img
                src="/images/assets/eclipse1.png"
                alt="Campus"
                className="image"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="ecom-headings text-left">Tech-aware empathy</h3>
              <p className="paragraphs-default text-gray-dark">
                Deep technical understanding + founder empathy.
              </p>
            </div>
          </div>
          <div className="tech-card justify-between rounded-3xl space-y-26">
            <div className="campus-image-wrapper">
              <img
                src="/images/assets/eclipse2.png"
                alt="Campus"
                className="image"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="ecom-headings text-left">
                Execution-ready strategy
              </h3>
              <p className="paragraphs-default text-gray-dark">
                Execution-ready thinking (unlike static strategy firms).
              </p>
            </div>
          </div>
          <div className="tech-card justify-between rounded-3xl space-y-26">
            <div className="campus-image-wrapper ">
              <img
                src="/images/assets/eclipse3.png"
                alt="Campus"
                className="image"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="ecom-headings text-left">End-to-end continuity</h3>
              <p className="paragraphs-default text-gray-dark">
                Seamless handoff to in-house GTW product and dev teams.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 lg:hidden">
        <button className="arrow-button" onClick={scrollLeft}>
          <img
            src="/images/Leftarrow.png"
            alt="Left Arrow"
            className="w-10 h-10"
          />
        </button>
        <button className="arrow-button" onClick={scrollRight}>
          <img
            src="/images/Rightarrow.png"
            alt="Right Arrow"
            className="w-10 h-10"
          />
        </button>
      </div>
    </section>
  );
}
