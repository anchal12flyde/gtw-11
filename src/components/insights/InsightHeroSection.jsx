"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Loader from "../Home/Loader/Loader";
export default function InsightHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="util-flex util-flex-1 util-mx-1-5 mt-15 relative"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1], 
      }}
    >
      <div className="background-hero relative">
        {/* Loader overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30">
            <Loader />
          </div>
        )}

        {/* Image */}
        <Image
          src="/images/insights_bg.png"
          alt="Insight Hero"
          className={`w-full h-auto object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          width={1920}
          height={1080}
          placeholder="empty"
          onLoadingComplete={() => setIsLoaded(true)}
          priority
        />

        {/* Overlay content stays in same place, layout intact */}
        <div className="insight-card space-y-4">
          <div className="insight-tags">
            <span>Mobile App</span>
            <span>Mobile App</span>
          </div>
          <div className="content-wrapper space-y-10">
            <h2>Design Slow. Build Smart. Launch Fast.</h2>
            <Link href="#" className="insight-link">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
