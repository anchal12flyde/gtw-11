"use client";
import { useState } from "react";
import Header from "../Home/childComponents/Header";
import ClientButton from "../globalcomponents/Button";
import { useInView } from "react-intersection-observer";
import Loader from "../Home/Loader/Loader";

export default function ConsultHerosection() {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [isLoaded, setIsLoaded] = useState(false); // track if video loaded

  return (
    <div className="hero-wrapper relative overflow-hidden min-h-screen">
      <Header />

      {/* Video container with loader */}
      <div className="absolute inset-0 h-screen" ref={ref}>
        {/* Loader overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60">
            <Loader />
          </div>
        )}

        {/* Video lazy load */}
        {inView && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            onLoadedData={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source
              src="https://ik.imagekit.io/a9uxeuyhx/consult.mp4?updatedAt=1761286282321"
              type="video/mp4"
            />
          </video>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary"></div>
      </div>

      {/* Hero content */}
      <div className="util-flex util-flex-1 util-mx-1-5 relative z-10 text-center text-white-color1">
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
      </div>
    </div>
  );
}
