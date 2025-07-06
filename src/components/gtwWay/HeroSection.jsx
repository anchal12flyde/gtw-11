import Header from "../Home/childComponents/Header";
import AnimatedCards from "../globalcomponents/AnimatedCards";
export default function HeroSection() {
   const data = [
    {
      title: "Design Slow → Create with Clarity",
      description:
        "We start with the user — not the UI. We ask questions that hurt. Explore edge cases. Challenge assumptions. Because good design isn’t decoration. It’s strategic silence, confident pacing, and intuitive flows.",
      action: "What it looks like in action:",
      overlayItems: [
        "Deep discovery workshops",
        "User journey mapping",
        "Brand-aligned UI/UX systems",
        "Accessibility and content hierarchy",
      ],
    },
    {
      title: "Build Smart → Engineer for Scale",
      description:
       "We don’t duct-tape. We build with architecture in mind. Reusable logic. Modular structure. Clean APIs. Thoughtful DB design.",
      action: "What it looks like in action:",
      overlayItems: [
        "Deep discovery workshops",
        "User journey mapping",
        "Brand-aligned UI/UX systems",
        "Accessibility and content hierarchy",
      ],
    },
    {
      title: "Launch Fast → Move With Confidence",
      description:
       "We release fast — not frantically. Our agile approach is backed by analytics, versioning, and clarity in ownership. Because a strong launch is only the start of a smart feedback loop.",
      action: "What it looks like in action:",
      overlayItems: [
        "Deep discovery workshops",
        "User journey mapping",
        "Brand-aligned UI/UX systems",
        "Accessibility and content hierarchy",
      ],
    },
    
  ];

  return (
    <>
       
      <div className="hero-wrapper relative overflow-hidden min-h-screen">
       
        <div className="absolute inset-0 h-screen">
          <video
            className="w-full h-full object-cover hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/LightRays.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
           <Header/>
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5 relative  text-center text-white">
          <div className="hero-section">
            <h1  className="heading-hero">
              Design Slow. Build Smart. <br /> Launch Fast.
            </h1>
            <p className="heading-subtitles  w-[full] sm:w-[900px] ">
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
      <div>
        
      </div>
        <p className="headings mt-4 ">  
            In a world obsessed with speed, we slow down where it matters at the drawing board.
            Because clarity at the start unlocks velocity at launch.
          </p>
         
        </section>
      </div >
      
      <div className="util-flex util-flex-1 util-mx-1-5">
    <AnimatedCards cards={data} />;
      </div>

      </div>
    </>
  );
}
