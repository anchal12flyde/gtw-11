"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "../Home/Loader/Loader";
import api from "@/utils/api";


export default function StoriesHeroSection() {
  const scrollRef = useRef(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstCardLoaded, setFirstCardLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // ✅ Fetch success stories dynamically
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await api.get("/success-stories");
        const stories = res.data || [];

        // Transform to match your old "cards" structure
        const mapped = stories.map((story) => ({
          images: [story.photo, story.logo],
          name: story.founderName,
          title: story.founderPost,
          text: story.description,
          link: `/success-stories/${story._id}`,
        }));

        setCards(mapped);
      } catch (err) {
        console.error("Error fetching success stories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  // Track first card image load
  const handleFirstCardImageLoad = () => {
    setLoadedCount((prev) => {
      const newCount = prev + 1;
      if (cards.length && newCount === cards[0].images.length)
        setFirstCardLoaded(true);
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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="util-flex util-flex-1 util-mx-1-5 mt-15 relative">
        <h1 cla ssName="heading-systems mb-6">
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
                          alt={`${card.name}-${idx}`}
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
