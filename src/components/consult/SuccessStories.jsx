"use client";
import HoverVideo from "../Home/childComponents/VideoPlayer";
import { useRef } from "react";


export default function SuccessStories() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };


  return (
   <div className="gradient-yellow-section usecases-section mt-26">
          <div className="util-flex util-flex-1 util-mx-1-5 ">
            <div className="relative flex items-left justify-between mb-12 w-full">
              <h2 className="text-left  flex-1 heading-systems ">
                <span className="text-white-color1">
                 Our Success Stories
                </span>
              </h2>
              {/* <div className="hidden sm:flex gap-0">
                <button className="arrow-button" onClick={scrollLeft}>
                  <img
                    src="/images/LeftArrow.png"
                    alt="Left Arrow"
                    className="w-10 h-10"
                  />
                </button>
                <button className="arrow-button" onClick={scrollRight}>
                  <img
                    src="/images/RightArrow.png"
                    alt="Right Arrow"
                    className="w-10 h-10"
                  />
                </button>
              </div> */}
            </div>
  
            <div
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full flex "
              ref={scrollRef}
            >
              <div className="flex flex-nowrap gap-8 ">
                <div className="">
                  <div className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77  h-[510px] overflow-hidden">
                    <HoverVideo src="/videos/vd2.mp4" />
  
                    <div className="flex flex-col gap-4 px-6">
                      <h3 className="ecom-heading text-left">
                        Numyum – Direct Ordering Engine for Cloud Kitchens
                      </h3>
                      <p className="paragraph-default">
                        We built a custom food ordering system with OTP-based
                        login, intuitive "Build Your Order" flow, and deep menu
                        customizations. The platform supports multi-kitchen
                        franchise operations, branch-specific pricing, and an
                        integrated order approval system for seamless execution.
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77 h-[510px] overflow-hidden ">
                  <div className="relative rounded-2xl ">
                    <img
                      src="/images/img4.png"
                      alt="Campus"
                      className="w-full h-55 "
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-6">
                    <h3 className="ecom-heading text-left">
                      EzStays – A Complete OS for Student Housing
                    </h3>
                    <p className="paragraph-default ">
                      From admissions to mess management, EzStays is an end-to-end
                      hostel management solution. We designed and developed a
                      unified system covering room allocation, student onboarding,
                      transport, payments, kitchen inventory, and more.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77  h-[510px] overflow-hidden">
                  <div className="relative rounded-2xl">
                    <img
                      src="/images/img7.png"
                      alt="Campus"
                      className="w-full h-55 "
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-6">
                    <h3 className="ecom-heading text-left">
                      Itel – Scalable Ecommerce for D2C Sales
                    </h3>
                    <p className="paragraph-default">
                      We developed a full-stack MERN-based ecommerce platform for
                      Itel Mobiles, complete with live search recommendations,
                      smart filtering, store locator, and Unicommerce integration
                      — optimized for speed, reliability, and scale across India.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77  h-[510px] overflow-hidden">
                  <HoverVideo src="/videos/vd1.mp4" />
  
                  <div className="flex flex-col gap-4 px-6">
                    <h3 className="ecom-heading text-left">
                      TransExpert – A Digital Overhaul for a Logistics Group
                    </h3>
                    <p className="paragraph-default">
                      For TransExpert’s three-brand group, we led a full corporate
                      transformation — including brand identity design, corporate
                      stationery, investor decks, and website UI/UX. We then
                      developed all three brand websites to reflect a consistent,
                      professional digital presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="flex justify-center  mt-6 sm:hidden">
              <button className="arrow-button" onClick={scrollLeft}>
                <img
                  src="/images/LeftArrow.png"
                  alt="Left Arrow"
                  className="w-10 h-10"
                />
              </button>
              <button className="arrow-button" onClick={scrollRight}>
                <img
                  src="/images/RightArrow.png"
                  alt="Right Arrow"
                  className="w-10 h-10"
                />
              </button>
            </div>
          </div>
        </div>
  );
}
