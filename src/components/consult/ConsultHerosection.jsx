"use client";
import Header from "../Home/childComponents/Header";
import ClientButton from "../globalcomponents/Button";

export default function ConsultHerosection() {
  return (
    <div className="hero-wrapper relative overflow-hidden min-h-screen">
      <Header />

      {/* ✅ Video background */}
      <div className="absolute inset-0 h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source
            src="https://ik.imagekit.io/a9uxeuyhx/consult.mp4?updatedAt=1761286282321"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary"></div>
      </div>

      {/* ✅ Hero content */}
      <div className="util-flex util-flex-1 util-mx-1-5 relative z-8 text-center text-white-color1">
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
