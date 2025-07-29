import Header from "../Home/childComponents/Header";
import AnimatedCards from "../globalcomponents/AnimatedCards";



export default function HeroSection() {
   const data = [
     {
       title: "Design Slow → Create with Clarity",
       description:
         "We start with the user, not the UI. We ask questions that hurt. Explore edge cases. Challenge assumptions. Because good design isn’t decoration. It’s strategic silence, confident pacing, and intuitive flows.",
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
         "Component-based frontends",
         "Multi-tenant SaaS backends",
         "Third-party integrations with clean abstraction",
         "DevOps-ready from day one",
       ],
     },
     {
       title: "Launch Fast → Move With Confidence",
       description:
         "We release fast, not frantically. Our agile approach is backed by analytics, versioning, and clarity in ownership. Because a strong launch is only the start of a smart feedback loop.",
       action: "What it looks like in action:",
       overlayItems: [
         "Iterative sprints with weekly demos ",
         "Feature flagging & staging environments",
         "Metrics-first launch dashboards",
         "Ongoing support with measurable outcomes",
       ],
     },
   ];

  return (
    <>
      <div className="hero-wrapper relative overflow-hidden min-h-screen ">
        <div className="absolute inset-0 h-screen">
          <video
            className="w-full h-full object-cover hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/light-rays.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary"></div>
          <Header />
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5 relative  text-center text-white-color1-color1 ">
          <div className="hero-section">
            <h1 className="heading-heros">
              Design Slow. Build Smart. <br /> Launch Fast.
            </h1>

            <p className="heading-subtitles w-full sm:w-[900px] mt-4">
              Our philosophy isn’t just a tagline. It’s a deliberate discipline
              we bring to every product we craft.
            </p>
          </div>
        </div>

        <div className="relative z-10 bg-secondary text-white-color1 util-flex util-flex-1 util-mx-1-5 mb-10 mt-45 ">
          <section className="philosophy-section mix-blend-difference ">
            <div className="heading-systems w-full max-w-[500px] mx-auto">
              <span className="text-light-blue">We Believe</span>{" "}
              <span>Timeless Systems</span>{" "}
              <span className="text-light-blue">Aren’t Rushed.</span>
            </div>

            <div className="w-full max-w-[900px] mx-auto">
              <p className="headings mt-4 ">
                In a world obsessed with speed, we slow down where it matters at
                the drawing board. Because clarity at the start unlocks velocity
                at launch.
              </p>
            </div>
          </section>
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5">
          <AnimatedCards cards={data} />
        </div>
      </div>
    </>
  );
}
