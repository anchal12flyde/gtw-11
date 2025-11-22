"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

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

  const cards = [
    {
      src: "https://ik.imagekit.io/a9uxeuyhx/Dashboard%20screen.png",
      alt: "Card 4",
    },
    {
      src: "https://ik.imagekit.io/a9uxeuyhx/Single%20property%20View.png",
      alt: "Card 1",
    },
    {
      src: "https://ik.imagekit.io/a9uxeuyhx/Transport.png",
      alt: "Card 2",
    },
    {
      src: "https://ik.imagekit.io/a9uxeuyhx/space%20booking.png",
      alt: "Card 3",
    },
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  };

  return (
    <motion.section
      className="relative mt-26 util-flex util-flex-1 util-mx-1-5"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ✅ Cards container with fade-in */}
      <motion.div
        ref={scrollRef}
        className="card-container flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory sm:overflow-visible"
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
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Arrow buttons (for mobile) */}
      <div className="flex justify-center mt-6 lg:hidden">
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
