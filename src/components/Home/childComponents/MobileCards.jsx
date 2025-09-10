"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.06,
    },
  },
};

const fadeLeftToRight = {
  hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MobileCards() {
  const cards = [
    { src: "/images/assets/Ezstays Login.png", alt: "Card 4" },
    { src: "/images/assets/Meal Booking.png", alt: "Card 1" },
    { src: "/images/assets/Show my QR.png", alt: "Card 3" },
    { src: "/images/assets/Warden Dashboard.png", alt: "Card 2" },
  ];

  return (
    <motion.section
      className="card-container-wrapper util-flex util-flex-1 util-mx-1-5 mt-26"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="card-container scrollable-mobile">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            className="responsive-card"
            variants={fadeLeftToRight}
            style={{ willChange: "transform, opacity" }}
          >
            <img src={c.src} alt={c.alt} loading="lazy" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
