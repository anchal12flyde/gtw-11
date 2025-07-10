'use client'
import { useRef } from "react";
import Link from "next/link";

export default function StoriesHeroSection() {
    const scrollRef = useRef(null);
    
      const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
      };
    
      const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
      };

  return (
    <>
    <div className="util-flex util-flex-1 util-mx-1-5 mt-12 relative " >
         <h1 className="heading-systems mb-6">
           Success Stories – How GTW Transforms Businesses
        </h1>
          <div className="hidden sm:flex gap-0">
                <button className="arrow-button" onClick={scrollLeft}>
                  <img src="/images/Leftarrow2.png" alt="Left Arrow" className="w-10 h-10" />
                </button>
                <button className="arrow-button" onClick={scrollRight}>
                  <img src="/images/Rightarrow1.png" alt="Right Arrow" className="w-10 h-10" />
                </button>
              </div>
        
     

    </div>
       <div ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-12 sm:gap-12 ">
             
              <div className="  flex-shrink-0 snap-start w-[80vw]  flex flex-col md:flex-row ">
            
              <div className="grid-container ">
            <div className="column1">
            <div className="row1">
                <div className="row1-col">
                    <img src="/images/assets/grid1.png"/>
                </div>
                <div className="row1-col">
                    <img src="/images/assets/grid2.png"/>
                </div>
            </div>
           <div className="row2"> 
                    <div className="author-name  font-semibold text-gray-800 text-lg">
                    Sheryl Sandberg
                </div>
                <div className="author-title text-sm text-gray-500">
                    Vice President &nbsp; /&nbsp; TransExpert
                </div></div>
            </div>
            <div className="column2">
                <p className="grid-title">
                    TransExpert has been an exceptional partner to work with. Not only
                    have they brought forward strategic solutions, but have allowed us
                    to manage our business with peace-of-mind and strive towards our
                    value of delivering on Commitment and Customer Focus.
                </p>
                <Link href='#'  className="insight-link">Read More</Link>
                </div>
                </div>
                </div>

            <div className="flex-shrink-0 snap-start w-[80vw]  flex flex-col  ">
              <div className="grid-container">
            <div className="column1">
            <div className="row1">
                <div className="row1-col">
                    <img src="/images/assets/grid1.png"/>
                </div>
                <div className="row1-col">
                    <img src="/images/assets/grid2.png"/>
                    </div>
                </div>
                <div className="row2"> 
        <div className="author-name  font-semibold text-gray-800 text-lg">
        Sheryl Sandberg
      </div>
      <div className="author-title ">
        Vice President &nbsp; /&nbsp; TransExpert
      </div></div>
            </div>
            <div className="column2">
                <p className="quote-text">
                    TransExpert has been an exceptional partner to work with. Not only
                    have they brought forward strategic solutions, but have allowed us
                    to manage our business with peace-of-mind and strive towards our
                    value of delivering on Commitment and Customer Focus.
                </p>
            </div>
            </div>
            </div>

           <div className="flex-shrink-0 snap-start w-[80vw]  flex flex-col md:flex-row gap-12">
              <div className="grid-container">
            <div className="column1">
            <div className="row1">
                <div className="row1-col">
                    <img src="/images/assets/grid1.png"/>
                </div>
                <div className="row1-col">
                    <img src="/images/assets/grid2.png"/>
                    </div>
                </div>
                <div className="row2"> 
        <div className="author-name  font-semibold text-gray-800 text-lg">
        Sheryl Sandberg
      </div>
      <div className="author-title text-sm text-gray-500">
        Vice President &nbsp; /&nbsp; TransExpert
      </div></div>
            </div>
            <div className="column2">
                <p className="quote-text">
                    TransExpert has been an exceptional partner to work with. Not only
                    have they brought forward strategic solutions, but have allowed us
                    to manage our business with peace-of-mind and strive towards our
                    value of delivering on Commitment and Customer Focus.
                </p>
            </div>
            </div>
            </div>
<div className=" flex-shrink-0  w-[20px] sm:w-[300px]"></div>
 


        </div>
          <div className="flex justify-center mt-6 sm:hidden">
               <button className="arrow-button" onClick={scrollLeft}>
                 <img src="/images/Leftarrow2.png" alt="Left Arrow" className="w-10 h-10" />
               </button>
               <button className="arrow-button" onClick={scrollRight}>
                 <img src="/images/Rightarrow1.png" alt="Right Arrow" className="w-10 h-10" />
               </button>
             </div>
    </>
      )
}
