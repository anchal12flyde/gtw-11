"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Loader from "../Loader/Loader";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MobileCards() {
  const scrollRef = useRef(null);
  const CARD_WIDTH = 320;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  };

  const cards = [
    { src: "/images/assets/Ezstays Login.png", alt: "Card 4" },
    { src: "/images/assets/Meal Booking.png", alt: "Card 1" },
    { src: "/images/assets/Show my QR.png", alt: "Card 3" },
    { src: "/images/assets/Warden Dashboard.png", alt: "Card 2" },
  ];

  // Loader state
  const [loadedCount, setLoadedCount] = useState(0);
  const allLoaded = loadedCount === cards.length;

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <motion.section
      className="util-flex util-flex-1 util-mx-1-5 mt-26 relative"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Loader overlay */}
      {!allLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
          <Loader />
        </div>
      )}

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="card-container scrollable-mobile flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory sm:overflow-visible"
      >
        {cards.map((c, i) => (
          <motion.div
            key={i}
            className="responsive-card flex-shrink-0 snap-center"
            variants={fadeIn}
            style={{ willChange: "opacity, filter" }}
          >
            <img
              src={c.src}
              alt={c.alt}
              loading="lazy"
              className="w-[320px] h-auto"
              onLoad={handleImageLoad}
            />
          </motion.div>
        ))}
      </div>

      {/* Arrows only on mobile */}
      <div className="flex justify-center mt-6 sm:hidden">
        <button className="arrow-button" onClick={scrollLeft}>
          <img
            src="/images/LeftArrow.png"
            alt="Left Arrow"
            className="w-8 h-8"
          />
        </button>
        <button className="arrow-button" onClick={scrollRight}>
          <img
            src="/images/RightArrow.png"
            alt="Right Arrow"
            className="w-8 h-8"
          />
        </button>
      </div>
    </motion.section>
  );
}
