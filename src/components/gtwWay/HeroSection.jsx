export default function HeroSection() {
  return (
    <>
    
    <div className="hero-wrapper">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/LightRays.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  <div className="util-flex util-flex-1 util-mx-1-5">
      
      <div className="hero-section">
      <h1 className="hero-heading">
        Design Slow. Build Smart. <br /> Launch Fast.
      </h1>
      <p className="hero-subtext">
        Our philosophy isn’t just a tagline. It’s a deliberate discipline we bring to every product we craft.
      </p>
    </div>

    {/* <div className="hero-section">
     <h2 className="heading-systems flex flex-wrap">
       <span className="text-[#FFB100]"> We Believe</span>
            <span className="text-white">Timeless System</span>
            <span className="text-[#FFB100]">Aren't Rushed</span>
          </h2>
          <p className="hero-subtext">
       In a world obsessed with speed, we slow down where it matters at the drawing board. 
       Because clarity at the start unlocks velocity at launch.
      </p>



    </div> */}

    </div>

    </div>
    </>
  );
}
