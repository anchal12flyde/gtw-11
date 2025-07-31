import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

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
    <section className="challenge-section ">
      <div className="challenge-container util-flex util-flex-1 util-mx-1-5 mt-26">
        <div className="challenge-image relative w-full h-full lg:h-[700px] lg:w-[600px] ">
          <AnimatePresence mode="wait">
            <motion.img
              key={hoveredItem || "default"} 
              src={hoveredItem ? images[hoveredItem] : defaultImage}
              alt="People abstract image"
              className="w-full h-full object-cover relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
        
        {/* <div className="challenge-image">
          <Image
  src={hoveredItem ? images[hoveredItem] : defaultImage}
  alt="People abstract image"
  width={500}
  height={300} 
  priority={hoveredItem !== null} 
/>
        </div> */}
        <motion.div
          className="challenge-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="heading-systems">
            The Challenge <span className="text-primary">We Solve</span>
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
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
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
