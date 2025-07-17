"use client";
import HoverVideo from "../Home/childComponents/VideoPlayer";
import { useRef } from "react";


export default function SuccessStories() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };


  return (
        <div className="gradient-yellow-section  py-20 mt-26">
              <div className="util-flex util-flex-1 util-mx-1-5">
              <div className="relative flex items-left justify-between mb-12 w-full">
              <h2 className="text-left font-semibold text-xl sm:text-2xl md:text-3xl  heading-systems ">
              
                <span className="block md:inline text-white">Our Success</span> {" "} 
                 <span className="text-black">Stories</span>
              </h2>
              <div className="hidden sm:flex">
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
          
            <div className="flex flex-nowrap gap-10  ">
            <div className=" yellow-container">
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80  h-[400px] overflow-hidden">

                <HoverVideo src="/videos/vd2.mp4"  />
                
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    EzStays
                  </h3>
                  <p className="paragraph-default">
                    Reimagined student housing ops across admissions, transport, finance, and food
                     resulting in 60% process efficiency gain.
                  </p>
                </div>
              </div>
             </div>

              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                   <HoverVideo src="/videos/vd2.mp4"  />
                </div>
                <div className="flex flex-col gap-4 px-4">
                  <h3 className="ecom-heading text-left">
                    AuditChef
                  </h3>
                  <p className="paragraph-default ">
                  Designed a compliance platform for a real estate company now rolled 
                  out across 20+ construction sites with live snag tracking.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                   <HoverVideo src="/videos/vd2.mp4"/>
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    AuditChef
                  </h3>
                  <p className="paragraph-default">
                    Reimagined student housing ops across admissions, transport, finance, and food
                     resulting in 60% process efficiency gain.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <HoverVideo src="/videos/vd1.mp4"/>

                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    AuditChef
                  </h3>
                  <p className="paragraph-default">
                    Designed a compliance platform for a real estate company now rolled 
                  out across 20+ construction sites with live snag tracking.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden ">
                <div className="relative rounded-2xl">
                   <HoverVideo src="/videos/vd2.mp4"  />
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                   AuditChef
                  </h3>
                  <p className="paragraph-default">
                   Reimagined student housing ops across admissions, transport, finance, and food
                     resulting in 60% process efficiency gain.
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
       );
}
