"use client";
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
        <div className="relative  w-full h-[350px] lg:w-[600px] lg:h-[630px] overflow-hidden challenge-image">
          {Object.entries(images).map(([key, src]) => {
            const isVisible = String(hoveredItem ?? 1) === key;
            return (
              <motion.div
                key={key}
                className="absolute inset-0 img"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ pointerEvents: "none" }} // disables accidental hover interference
              >
                <Image
                  src={src}
                  alt="People abstract image"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="challenge-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
              <motion.div
                className="challenge-detail"
                key={index}
                onMouseEnter={() => setHoveredItem(index + 1)}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {text}
              </motion.div>
            ))}
          </ul>

          <Link href="/audit/about-you" passHref>
            <motion.div
              className="cta-box cursor-pointer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
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
