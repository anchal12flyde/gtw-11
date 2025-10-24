"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "../Home/Loader/Loader";

export default function StoriesHeroSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Track first card images load
  const firstCardImages = [
    "/images/assets/Itel - Founder.png",
    "/images/assets/Itel - Logo.png",
  ];
  const [loadedCount, setLoadedCount] = useState(0);
  const [firstCardLoaded, setFirstCardLoaded] = useState(false);

  const handleFirstCardImageLoad = () => {
    setLoadedCount((prev) => {
      const newCount = prev + 1;
      if (newCount === firstCardImages.length) setFirstCardLoaded(true);
      return newCount;
    });
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

      <div
        ref={scrollRef}
        className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide mt-6"
      >
        {/* First Card with Loader */}
        <div className="flex snap-start">
          <div className="flex-shrink-0 w-[21px] md:w-[90px] bg-white-color1" />
          <div className="responsive-snap-container relative">
            {!firstCardLoaded && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
                <Loader />
              </div>
            )}

            <div className="grid-container">
              <div className="column1">
                <div className="row1">
                  {firstCardImages.map((src, i) => (
                    <div className="row1-col" key={i}>
                      <Image
                        src={src}
                        alt=""
                        width={500}
                        height={300}
                        className="w-full h-full object-cover rounded-[20px]"
                        onLoadingComplete={handleFirstCardImageLoad}
                      />
                    </div>
                  ))}
                </div>
                <div className="row2">
                  <p className="author-name">Manoj Verma</p>
                  <p className="author-title">Marketing Head / iTel Mobiles</p>
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
                <Link href="/success-stories/itel" className="insight-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex snap-start">
          <div className="flex-shrink-0 w-[21px] md:w-[90px] bg-white-color1" />
          <div className="responsive-snap-container">
            <div className="grid-container">
              <div className="column1">
                <div className="row1">
                  <div className="row1-col">
                    <Image
                      src="/images/assets/ezstays - Founder.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="row1-col">
                    <Image
                      src="/images/assets/ezstays Logo.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                </div>
                <div className="row2">
                  <p className="author-name">Vaibhav Khanna</p>
                  <p className="author-title">Founder & CEO / Ezstays</p>
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
                <Link href="/success-stories/ezstays" className="insight-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="flex snap-start">
          <div className="flex-shrink-0 w-[21px] md:w-[90px] bg-white-color1" />
          <div className="responsive-snap-container">
            <div className="grid-container">
              <div className="column1">
                <div className="row1">
                  <div className="row1-col">
                    <Image
                      src="/images/assets/Transexpert - Founder.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="row1-col">
                    <Image
                      src="/images/assets/Transexpert - Logo.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                </div>
                <div className="row2">
                  <p className="author-name">Cassandra Chumber</p>
                  <p className="author-title">
                    Head of Sales / TransExpert Inc.
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
                <Link
                  href="/success-stories/transexpert"
                  className="insight-link"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="flex snap-start">
          <div className="flex-shrink-0 w-[21px] md:w-[90px] bg-white-color1" />
          <div className="responsive-snap-container">
            <div className="grid-container">
              <div className="column1">
                <div className="row1">
                  <div className="row1-col">
                    <Image
                      src="/images/assets/Numyum - Founder.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="row1-col">
                    <Image
                      src="/images/assets/Numyum - Logo.png"
                      alt=""
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                </div>
                <div className="row2">
                  <p className="author-name">Savar Mahlotra</p>
                  <p className="author-title">
                    Managing Director Ksm group / Numyum
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
                <Link href="/success-stories/numyum" className="insight-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* End spacer */}
        <div className="flex-shrink-0 w-[20px] sm:w-[400px] lg:w-[800px]" />
      </div>

      <div className="flex justify-center mt-6 sm:hidden">
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
    </>
  );
}
