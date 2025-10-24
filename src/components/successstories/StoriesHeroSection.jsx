"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "../Home/Loader/Loader";

export default function StoriesHeroSection() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstCardLoaded, setFirstCardLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const cards = [
    {
      images: [
        "/images/assets/Itel - Founder.png",
        "/images/assets/Itel - Logo.png",
      ],
      name: "Manoj Verma",
      title: "Marketing Head / iTel Mobiles",
      text: "TransExpert has been an exceptional partner to work with. Not only have they brought forward strategic solutions, but have allowed us to manage our business with peace-of-mind and strive towards our value of delivering on Commitment and Customer Focus. As a partner, if a solution does not exist they are willing to work with you to assist in developing one or offering alternative approaches.",
      link: "/success-stories/itel",
    },
    {
      images: [
        "/images/assets/ezstays - Founder.png",
        "/images/assets/ezstays Logo.png",
      ],
      name: "Vaibhav Khanna",
      title: "Founder & CEO / Ezstays",
      text: "TransExpert has been an exceptional partner to work with. Not only have they brought forward strategic solutions, but have allowed us to manage our business with peace-of-mind and strive towards our value of delivering on Commitment and Customer Focus. As a partner, if a solution does not exist they are willing to work with you to assist in developing one or offering alternative approaches.",
      link: "/success-stories/ezstays",
    },
    {
      images: [
        "/images/assets/Transexpert - Founder.png",
        "/images/assets/Transexpert - Logo.png",
      ],
      name: "Cassandra Chumber",
      title: "Head of Sales / TransExpert Inc.",
      text: "TransExpert has been an exceptional partner to work with. Not only have they brought forward strategic solutions, but have allowed us to manage our business with peace-of-mind and strive towards our value of delivering on Commitment and Customer Focus. As a partner, if a solution does not exist they are willing to work with you to assist in developing one or offering alternative approaches.",
      link: "/success-stories/transexpert",
    },
    {
      images: [
        "/images/assets/Numyum - Founder.png",
        "/images/assets/Numyum - Logo.png",
      ],
      name: "Savar Mahlotra",
      title: "Managing Director Ksm group / Numyum",
      text: "TransExpert has been an exceptional partner to work with. Not only have they brought forward strategic solutions, but have allowed us to manage our business with peace-of-mind and strive towards our value of delivering on Commitment and Customer Focus. As a partner, if a solution does not exist they are willing to work with you to assist in developing one or offering alternative approaches.",
      link: "/success-stories/numyum",
    },
  ];

  // Track first card images load
  const handleFirstCardImageLoad = () => {
    setLoadedCount((prev) => {
      const newCount = prev + 1;
      if (newCount === cards[0].images.length) setFirstCardLoaded(true);
      return newCount;
    });
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Track which card is currently visible
  const updateCurrentIndex = () => {
    if (!scrollRef.current) return;
    const scrollLeftPos = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.firstChild.offsetWidth;
    const index = Math.round(scrollLeftPos / cardWidth);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const refCurrent = scrollRef.current;
    refCurrent?.addEventListener("scroll", updateCurrentIndex);
    return () => refCurrent?.removeEventListener("scroll", updateCurrentIndex);
  }, []);

  return (
    <>
      <div className="util-flex util-flex-1 util-mx-1-5 mt-15 relative">
        <h1 className="heading-systems mb-6">
          Success Stories – How GTW Transforms Businesses
        </h1>
        <div className="hidden sm:flex gap-0 justify-end">
          <button className="arrow-button cursor-pointer" onClick={scrollLeft}>
            <img
              src={
                currentIndex === 0
                  ? "/images/LeftArrow.png"
                  : "https://ik.imagekit.io/a9uxeuyhx/RightArrow1.png?updatedAt=1761297095162"
              }
              alt="Left Arrow"
              className="w-10 h-10"
            />
          </button>
          <button className="arrow-button cursor-pointer" onClick={scrollRight}>
            <img
              src={
                currentIndex === cards.length - 1
                  ? "https://ik.imagekit.io/a9uxeuyhx/LeftArrow%201.png?updatedAt=1761297353159"
                  : "/images/RightArrow.png"
              }
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
        {cards.map((card, i) => (
          <div className="flex snap-start" key={i}>
            <div className="flex-shrink-0 w-[21px] md:w-[90px] bg-white-color1" />
            <div className="responsive-snap-container relative">
              {i === 0 && !firstCardLoaded && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
                  <Loader />
                </div>
              )}

              <div className="grid-container">
                <div className="column1">
                  <div className="row1">
                    {card.images.map((src, idx) => (
                      <div className="row1-col" key={idx}>
                        <Image
                          src={src}
                          alt=""
                          width={500}
                          height={300}
                          className="w-full h-full object-cover rounded-[20px]"
                          onLoadingComplete={
                            i === 0 ? handleFirstCardImageLoad : undefined
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="row2">
                    <p className="author-name">{card.name}</p>
                    <p className="author-title">{card.title}</p>
                  </div>
                </div>
                <div className="column2">
                  <p className="grid-title">{card.text}</p>
                  <img src="/images/assets/Vector.png" className="vector" />
                  <Link href={card.link} className="insight-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-[20px] sm:w-[400px] lg:w-[800px]" />
      </div>

      {/* Mobile arrows */}
      <div className="flex justify-center mt-6 sm:hidden">
        <button className="arrow-button" onClick={scrollLeft}>
          <img
            src={
              currentIndex === 0
                ? "/images/LeftArrow.png"
                : "/images/RightArrow1.png"
            }
            alt="Left Arrow"
            className="w-10 h-10"
          />
        </button>
        <button className="arrow-button" onClick={scrollRight}>
          <img
            src={
              currentIndex === cards.length - 1
                ? "/images/white-outline-arrow.png"
                : "/images/RightArrow.png"
            }
            alt="Right Arrow"
            className="w-10 h-10"
          />
        </button>
      </div>
    </>
  );
}
