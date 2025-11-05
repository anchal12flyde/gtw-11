"use client";
import { useRef } from "react";
import Link from "next/link";

export default function SuccessStories() {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // Arrow buttons
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  // Drag functionality
  const handleMouseDown = (e) => {
    isDown.current = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // drag speed
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  return (
    <div className="gradient-yellow-section usecases-section mt-26">
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="relative flex items-left justify-between mb-12 w-full">
          <h2 className="text-left flex-1 heading-systems">
            <span className="text-white-color1">Our Success Stories</span>
          </h2>
        </div>

        {/* Scrollable wrapper */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full flex cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex flex-nowrap gap-8">
            {/* Card 1 */}
            <Link
              href="/success-stories/numyum"
              className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77 h-[510px] overflow-hidden"
            >
              <div className="relative rounded-2xl">
                <img
                  src="/images/Numyum.png"
                  alt="Campus"
                  className="w-full h-55 "
                />
              </div>
              <div className="flex flex-col gap-4 px-6">
                <h3 className="ecom-heading text-left">
                  Numyum – Direct Ordering Engine for Cloud Kitchens
                </h3>
                <p className="paragraph-default">
                  We built a custom food ordering system with OTP-based login,
                  intuitive "Build Your Order" flow, and deep menu
                  customizations. The platform supports multi-kitchen franchise
                  operations, branch-specific pricing, and an integrated order
                  approval system for seamless execution.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/success-stories/ezstays"
              className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77 h-[510px] overflow-hidden"
            >
              <div className="relative rounded-2xl ">
                <img
                  src="/images/Ezstays.png"
                  alt="Campus"
                  className="w-full h-55 "
                />
              </div>
              <div className="flex flex-col gap-4 px-6">
                <h3 className="ecom-heading text-left">
                  EzStays – A Complete OS for Student Housing
                </h3>
                <p className="paragraph-default ">
                  From admissions to mess management, EzStays is an end-to-end
                  hostel management solution. We designed and developed a
                  unified system covering room allocation, student onboarding,
                  transport, payments, kitchen inventory, and more.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77 h-[510px] overflow-hidden"
              href="/success-stories/itel"
            >
              <div className="relative rounded-2xl">
                <img
                  src="/images/Itel - Mobiles.png"
                  alt="Campus"
                  className="w-full h-55 "
                />
              </div>
              <div className="flex flex-col gap-4 px-6">
                <h3 className="ecom-heading text-left">
                  Itel – Scalable Ecommerce for D2C Sales
                </h3>
                <p className="paragraph-default">
                  We developed a full-stack MERN-based ecommerce platform for
                  Itel Mobiles, complete with live search recommendations, smart
                  filtering, store locator, and Unicommerce integration,
                  optimized for speed, reliability, and scale across India.
                </p>
              </div>
            </Link>

            {/* Card 4 */}
            <Link
              href="/success-stories/transexpert"
              className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77 h-[510px] overflow-hidden"
            >
              <div className="relative rounded-2xl">
                <img
                  src="/images/assets/transexpert mockup.jpg"
                  alt="Campus"
                  className="w-full h-55 "
                />
              </div>
              <div className="flex flex-col gap-4 px-6">
                <h3 className="ecom-heading text-left">
                  TransExpert – A Digital Overhaul for a Logistics Group
                </h3>
                <p className="paragraph-default">
                  For TransExpert’s three-brand group, we led a full corporate
                  transformation, including brand identity design, corporate
                  stationery, investor decks, and website UI/UX. We then
                  developed all three brand websites to reflect a consistent,
                  professional digital presence.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Arrows for mobile */}
        <div className="flex justify-center mt-6 sm:hidden">
          <button className="arrow-button" onClick={scrollLeft}>
            <img
              src="https://ik.imagekit.io/a9uxeuyhx/white%20outline%20arrow%201.png?updatedAt=1761296509366"
              alt="Left Arrow"
              className="w-10 h-10"
            />
          </button>
          <button className="arrow-button" onClick={scrollRight}>
            <img
              src="/images/RightArrow.png"
              alt="Right Arrow"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
