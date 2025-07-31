import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
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
        <div className="relative w-full h-[350px] lg:w-[600px] lg:h-[600px] challenge-image">
          {Object.entries(images).map(([key, src]) => {
            const isVisible = String(hoveredItem ?? 1) === key;
            return (
              <motion.div
                key={key}
                className="absolute inset-0"
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
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="heading-systems ">D2C Mobile App</span>

          <ul className="challenge-list mt-12">
            {[
              "Branded iOS + Android app (React Native)",
              "Realtime push notifications",
              "Custom theming + CMS from backend",
              "Works with same product catalog and order engine",
            ].map((text, index) => (
              <motion.div
                className="challenge-detail"
                key={index}
                onMouseEnter={() => setHoveredItem(index + 1)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {text}
              </motion.div>
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
