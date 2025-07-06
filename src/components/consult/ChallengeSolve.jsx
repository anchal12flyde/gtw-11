import { useState } from "react";
import { motion } from "framer-motion";

export default function ChallengeSection() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const images = {
    1: "/images/assets/img4.png",
    2: "/images/img1.png",
    3: "/images/img2.png",
    4: "/images/img3.png",
  };

  const defaultImage = images[1];

  return (
    <section className="challenge-section">
      <div className="challenge-container util-flex util-flex-1 util-mx-1-5">
        <div className="challenge-image">
          <img
            src={hoveredItem ? images[hoveredItem] : defaultImage}
            alt="People abstract image"
          />
        </div>
     <motion.div
      className="challenge-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="heading-systems">
        The Challenge <span className="text-[#FFB100]">We Solve</span>
      </span>

      <p className="challenge-subtitle">
        Your business isn’t broken. But the way it runs might be.
      </p>

      <ul className="challenge-list">
        {[
          "Manual, error-prone operations",
          "Legacy tools duct-taped together",
          "Teams stuck between apps and spreadsheets",
          "No central system of record or clarity",
        ].map((text, index) => (
          <motion.li
            key={index}
            onMouseEnter={() => setHoveredItem(index + 1)}
            onMouseLeave={() => setHoveredItem(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <span className="number">{String(index + 1).padStart(2, "0")}</span>{" "}
            {text}
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <strong>GTW Consult Exists To Fix This.</strong>
        <a href="#" className="cta-link">
          Contact Us
          <img src="/images/assets/Arrow 1.png" alt="arrow" />
        </a>
      </motion.div>
    </motion.div>
      </div>
    </section>
  );
}
