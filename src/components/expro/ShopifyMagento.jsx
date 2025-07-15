"use client";
import { useRef } from "react";

export default function ShopifyMagento() {
     const scrollRef = useRef(null);
    
      const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
      };
    
      const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
      };
    
     return (
<>
    <div className="bg-[#F5F5F7]  py-22  mt-26">
    <div className="util-flex util-flex-1 util-mx-1-5"> 
    <div className="relative flex items-left justify-between mb-12 w-full ">
              <h2 className="text-left  flex-1 heading-systems ">
                <span className="text-[#FFB100]">Who</span>{" "}
                <span>It's For</span>
              </h2>
              <div className="hidden sm:flex gap-0">
                <button className="arrow-button" onClick={scrollLeft}>
                  <img src="/images/Leftarrow2.png" alt="Left Arrow" className="w-10 h-10" />
                </button>
                <button className="arrow-button" onClick={scrollRight}>
                  <img src="/images/Rightarrow1.png" alt="Right Arrow" className="w-10 h-10" />
                </button>
              </div>
            </div>
         </div>   
          <div className="">
            <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-12 sm:gap-0 ml-8 lg:ml-0 mr-8 lg:mr-0 ">
                
            <div className="flex-shrink-0 snap-start w-[90vw]  flex flex-col md:flex-row gap-12 ">
              <div className="w-[90vw] sm:w-[50vw] ">
                <img
                  src="/images/assets/img9.png"
                  alt="Global"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full sm:w-[30vw] flex flex-col justify-end mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              Large brands moving away from Shopify/Magento
            </h3>
            <p className="text-gray-700">
              We offer clarity-first consulting backed by execution capability.
              Whether you’re exploring modernization or ready to rebuild, we guide
              you from map to momentum.
            </p>
          </div>
            </div>
            <div className="flex-shrink-0 snap-start w-[90vw] sm:w-[90vw] flex flex-col md:flex-row gap-12">
              <div className="w-[90vw] sm:w-[50vw] ">
                <img
                  src="/images/assets/img8.png"
                  alt="Global"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full sm:w-[30vw] flex flex-col justify-end mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Large brands moving away from Shopify/Magento
                </h3>
                <p className="text-gray-700">
                  We offer clarity-first consulting backed by execution capability.
                  Whether you’re exploring modernization or ready to rebuild, we guide
                  you from map to momentum.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 snap-start w-[90vw] sm:w-[90vw] flex flex-col md:flex-row gap-12">
              <div className=" w-[90vw] sm:w-[50vw] ">
                <img
                  src="/images/assets/img9.png"
                  alt="Global"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full sm:w-[30vw] flex flex-col justify-end mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Large brands moving away from Shopify/Magento
                </h3>
                <p className="text-gray-700">
                  We offer clarity-first consulting backed by execution capability.
                  Whether you’re exploring modernization or ready to rebuild, we guide
                  you from map to momentum.
                </p>
              </div>
            </div>
            <div className=" flex-shrink-0  w-[20px] sm:w-[200px]"></div>
          </div>

          </div>
 



           <div className="flex justify-center mt-6 sm:hidden">
               <button className="arrow-button" onClick={scrollLeft}>
                 <img src="/images/Leftarrow2.png" alt="Left Arrow" className="w-10 h-10" />
               </button>
               <button className="arrow-button" onClick={scrollRight}>
                 <img src="/images/Rightarrow1.png" alt="Right Arrow" className="w-10 h-10" />
               </button>
             </div>
                  
      </div>


</>

     )


}

