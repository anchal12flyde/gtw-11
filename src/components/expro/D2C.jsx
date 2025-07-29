import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function D2C() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const images = {
    1: "/images/assets/d2c1.png",
    2: "/images/assets/IMG1.jpg",
    3: "/images/assets/IMG7.jpg",
    4: "/images/assets/IMG5.jpg",
  };

  const defaultImage = images[1];

  return (
    <section className="challenge-section mt-26">
      <div className="challenge-container util-flex util-flex-1 util-mx-1-5">
        <div className="challenge-image">
          <img
            src={hoveredItem ? images[hoveredItem] : defaultImage}
            alt="People abstract image"
          />
        </div>
     <motion.div
      className="challenge-content"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="heading-systems ">
        D2C Mobile App
      </span>

      
      <ul className="challenge-list mt-12">
        {[
          "Branded iOS + Android app (React Native)",
          "Realtime push notifications",
          "Custom theming + CMS from backend",
          "Works with same product catalog and order engine",
        ].map((text, index) => (
          <motion.li
            key={index}
            onMouseEnter={() => setHoveredItem(index + 1)}
            onMouseLeave={() => setHoveredItem(null)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <span className="number">{String(index + 1).padStart(2, "0")}</span>{" "}
            {text}
          </motion.li>
        ))}
      </ul>
  
  <Link href="/Audit/AboutYou" passHref>
      <motion.div
        className="cta-box cursor-pointer"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <strong>Already Have an app?</strong>
    <div className="cta-link flex items-center gap-2">
      Request an Audit
      <ArrowRight className="w-6 h-10" />
    </div>
      </motion.div>
</Link>

    </motion.div>
      </div>
    </section>
  );
}
