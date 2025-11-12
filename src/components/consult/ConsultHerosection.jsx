"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../Home/childComponents/Header";
import ClientButton from "../globalcomponents/Button";
import Loader from "../Home/Loader/Loader";

export default function ConsultHerosection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldShowVideo, setShouldShowVideo] = useState(false);

  // ✅ Check if video was loaded before
  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("consultVideoLoaded");

    if (hasLoadedBefore) {
      setIsLoaded(true);
      setShouldShowVideo(true);
    } else {
      setShouldShowVideo(true);
    }
  }, []);

  const handleVideoLoad = () => {
    setIsLoaded(true);
    sessionStorage.setItem("consultVideoLoaded", "true");
  };

  return (
    <div className="hero-wrapper relative overflow-hidden min-h-screen">
      {/* ✅ Header stays static, no animation */}
      <Header />

      {/* ✅ Video container with loader */}
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
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 transition-opacity duration-500">
            <Loader />
          </div>
        )}

        {shouldShowVideo && (
          <video
            key={Date.now()}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoad}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source
              src="https://ik.imagekit.io/a9uxeuyhx/consult.mp4?updatedAt=1761286282321"
              type="video/mp4"
            />
          </video>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary"></div>
      </motion.div>

      {/* ✅ Hero content with rainfall-like smooth animation */}
      <motion.div
        className="util-flex util-flex-1 util-mx-1-5 relative z-8 text-center text-white-color1"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1], // smooth curve
        }}
      >
        <div className="hero-section">
          <h1 className="heading-heros">
            Rethink. <span className="text-light-blue">Rebuild.</span> Reinvent.
          </h1>

          <p className="heading-subtitles w-full sm:w-[900px] mt-6 mb-8">
            We help organizations modernize how they operate with custom
            systems, smarter workflows, and tech that scales with clarity.
          </p>

          <ClientButton
            href="/step-one-form"
            className="bg-primary text-white-color1 hover:bg-white-color1 hover:text-primary"
          >
            Start a Consult Sprint
          </ClientButton>
        </div>
      </motion.div>
    </div>
  );
}
