export default function HeroSection() {
  return (
    <>
      <div className="hero-wrapper relative overflow-hidden min-h-screen">
       
        <div className="absolute inset-0 h-screen  z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/LightRays.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5 relative z-10 text-center text-white">
          <div className="hero-section">
            <h1>
              Design Slow. Build Smart. <br /> Launch Fast.
            </h1>
            <p>
              Our philosophy isn’t just a tagline. It’s a deliberate discipline we bring to every product we craft.
            </p>
          </div>
        </div>
        <div className="relative z-10 bg-black text-white util-flex util-flex-1 util-mx-1-5 align-top-left">
        <section className="philosophy-section">
        <div className="heading-systems w-full md:w-[500px] mx-auto ">
        <span className="text-[#FFB100]">We Believe</span>{" "}
        <span>Timeless Systems</span>{" "}
        <span className="text-[#FFB100]">Aren’t Rushed.</span>
      </div>

          <p>
            In a world obsessed with speed, we slow down where it matters at the drawing board.
            Because clarity at the start unlocks velocity at launch.
          </p>
         
        </section>
      </div>
      </div>
    </>
  );
}
