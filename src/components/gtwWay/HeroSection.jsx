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
      
     <div class="hero-section">
  <h1>
    Design Slow. Build Smart. <br /> Launch Fast. 
  </h1>
  <p>
    Our philosophy isn’t just a tagline. It’s a deliberate discipline we bring to every product we craft.
  </p>
</div>

    </div>

    </div>
    </>
  );
}
