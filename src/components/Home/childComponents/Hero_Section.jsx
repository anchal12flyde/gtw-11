"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Loader from "../Loader/Loader";

export default function Hero_Section() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="">
      <section className="relative bg-transparent font-inter overflow-visible min-h-screen top-0 left-0 z-50">
        <div className="relative w-full h-[100vh] object-cover">
          <Header />

          <motion.div
            className="absolute inset-0 h-screen"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1], // smooth curve
            }}
          >
            {!isLoaded && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60">
                <Loader />
              </div>
            )}

            <video
              src="https://ik.imagekit.io/p1zreiw3z/4k-resolution-abstract-background-and-line-dot-ba-2025-08-29-11-23-20-utc.mov/ik-video.mp4?updatedAt=1756542635640"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              onLoadedData={() => setIsLoaded(true)}
              className={`relative object-cover w-full h-[900px] sm:h-full transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        </div>

        {/* Hero text/content appears only after video is loaded */}
        {isLoaded && (
          <motion.div
            className="absolute mt-[-170px] sm:mt-[-250px] util-mx-1-5"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1], // smooth curve
            }}
          >
            <h1
              className="heading-hero"
              style={{ color: "var(--text-color-dark)" }}
            >
              Building the{" "}
              <span className="text-primary">Digital Backbone</span>
              <br />
              of Modern Commerce
            </h1>
            <p className="heading-subtitle text-gray-dark mt-2">
              From concept to code, commerce to conversion, we design the
              <br />
              technology infrastructure for tomorrow’s businesses.
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
