'use client'
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="util-flex util-flex-1 util-mx-1-5 mt-15 relative">
        <h1 className="heading-systems mb-6">
          Success Stories – How GTW Transforms Businesses
        </h1>
        <div className="hidden sm:flex gap-0 justify-end">
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
      </div>

      <div
        ref={scrollRef}
        className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide mt-6"
      >
        <div className="flex snap-start ">
          <div className="flex-shrink-0 w-[21px] md:w-[90px] bg-white-color1 " />
          <div className="responsive-snap-container ">
            <div className="grid-container ">
              <div className="column1">
                <div className="row1">
                  <div className="row1-col">
                    <Image
                      src="/images/assets/grid1.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="row1-col">
                    <Image
                      src="/images/assets/grid2.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="row2">
                  <p className="author-name">Sheryl Sandberg</p>
                  <p className="author-title ">
                    Vice President &nbsp; /&nbsp; TransExpert
                  </p>
                </div>
              </div>
              <div className="column2">
                <p className="grid-title">
                  TransExpert has been an exceptional partner to work with. Not
                  only have they brought forward strategic solutions, but have
                  allowed us to manage our business with peace-of-mind and
                  strive towards our value of delivering on Commitment and
                  Customer Focus. As a partner, if a solution does not exist
                  they are willing to work with you to assist in developing one
                  or offering alternative approaches.
                </p>
                <img src="/images/assets/Vector.png" className="vector" />
                <Link href="#" className="insight-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex snap-start">
          <div className="flex-shrink-0 w-[21px] md:w-[90px] bg-white-color1 " />
          <div className="responsive-snap-container ">
            <div className="grid-container ">
              <div className="column1">
                <div className="row1">
                  <div className="row1-col">
                    <Image
                      src="/images/assets/grid1.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="row1-col">
                    <Image
                      src="/images/assets/grid2.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="row2">
                  <p className="author-name">Sheryl Sandberg</p>
                  <p className="author-title ">
                    Vice President &nbsp; /&nbsp; TransExpert
                  </p>
                </div>
              </div>
              <div className="column2">
                <p className="grid-title">
                  TransExpert has been an exceptional partner to work with. Not
                  only have they brought forward strategic solutions, but have
                  allowed us to manage our business with peace-of-mind and
                  strive towards our value of delivering on Commitment and
                  Customer Focus. As a partner, if a solution does not exist
                  they are willing to work with you to assist in developing one
                  or offering alternative approaches.
                </p>
                <img src="/images/assets/Vector.png" className="vector" />
                <Link href="#" className="insight-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex snap-start">
          <div className="flex-shrink-0 w-[21px] md:w-[90px] bg-white-color1 " />
          <div className="responsive-snap-container ">
            <div className="grid-container ">
              <div className="column1">
                <div className="row1">
                  <div className="row1-col">
                    <Image
                      src="/images/assets/grid1.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="row1-col">
                    <Image
                      src="/images/assets/grid2.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="row2">
                  <p className="author-name">Sheryl Sandberg</p>
                  <p className="author-title ">
                    Vice President &nbsp; /&nbsp; TransExpert
                  </p>
                </div>
              </div>
              <div className="column2">
                <p className="grid-title">
                  TransExpert has been an exceptional partner to work with. Not
                  only have they brought forward strategic solutions, but have
                  allowed us to manage our business with peace-of-mind and
                  strive towards our value of delivering on Commitment and
                  Customer Focus. As a partner, if a solution does not exist
                  they are willing to work with you to assist in developing one
                  or offering alternative approaches.
                </p>
                <img src="/images/assets/Vector.png" className="vector" />
                <Link href="#" className="insight-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-shrink-0  w-[20px] sm:w-[400px] lg:w-[800px]" />
      </div>

      <div className="flex justify-center mt-6 sm:hidden">
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
    </>
  );
}
