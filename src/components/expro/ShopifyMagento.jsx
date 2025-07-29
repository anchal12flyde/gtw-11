"use client";
import { useRef } from "react";

export default function ShopifyMagento() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-gray-light mt-26 py-20">
        <div className="util-flex util-flex-1 util-mx-1-5">
          <div className="relative flex items-left justify-between mb-12 w-full ">
            <h2 className="text-left  flex-1 heading-systems ">
              <span className="text-primary">Who</span> <span>It's For</span>
            </h2>
            <div className="hidden sm:flex gap-0">
              <button className="arrow-button" onClick={scrollLeft}>
                <img
                  src="/images/Leftarrow2.png"
                  alt="Left Arrow"
                  className="w-10 h-10"
                />
              </button>
              <button className="arrow-button" onClick={scrollRight}>
                <img
                  src="/images/Rightarrow1.png"
                  alt="Right Arrow"
                  className="w-10 h-10"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-12 sm:gap-0 ml-6 lg:ml-0 mr-6 lg:mr-0"
          >
            <div className="flex-shrink-0 snap-start w-[90vw]  flex flex-col md:flex-row gap-12 sticky top-0 mb-4">
              <div className="box1">
                <img
                  src="/images/assets/IMG6.JPG"
                  alt="Global"
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="w-full sm:w-[30vw] flex flex-col mt-0 md:mt-36">
                <h3 className="text-2xl font-semibold mb-2">
                  Brands Outgrowing Templates
                </h3>
                <p className="text-gray-dark2">
                  If you’ve outpaced Shopify or Magento and find yourself
                  fighting with plugins, theme limitations, or slow page loads,
                  it’s time to level up. ExPro gives you true platform
                  ownership, lightning-fast performance, and backend flexibility
                  that scales as you grow. Say goodbye to subscription bloat and
                  hello to infrastructure that’s fully yours.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 snap-start w-[90vw] flex flex-col md:flex-row gap-12 ">
              <div className="box1">
                <img
                  src="/images/assets/IMG3.jpg"
                  alt="Global"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:w-[30vw] flex flex-col mt-0 md:mt-36">
                <h3 className="text-2xl font-semibold mb-2">
                  Manufacturers Going D2C
                </h3>
                <p className="text-gray-dark2">
                  You're no longer just building products, you're building
                  customer relationships. ExPro helps manufacturers go direct
                  with a full-stack D2C platform that connects catalogs,
                  inventory, fulfillment, and customer support in one
                  streamlined system. Launch a branded experience that puts your
                  products (and margins) in the spotlight.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 snap-start w-[90vw]  flex flex-col md:flex-row gap-12 items-center sticky top-0">
              <div className="box1">
                <img
                  src="/images/assets/IMG8.jpeg"
                  alt="Global"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:w-[30vw] flex flex-col mt-0 md:mt-36">
                <h3 className="text-2xl font-semibold mb-2">
                  Agencies Seeking White-Label Commerce
                </h3>
                <p className="text-gray-dark2">
                  Could you give your clients a commerce engine that performs
                  like an in-house build, without the overhead? ExPro offers
                  white-label flexibility, admin role controls, and powerful
                  customization, all under your agency’s brand. Whether you’re
                  delivering MVPs or scaling platforms, we make it easier to
                  provide fast, reliable, and future-proof solutions.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 snap-start w-[90vw]  flex flex-col md:flex-row gap-12  sticky top-0">
              <div className="box1">
                <img
                  src="/images/assets/IMG10.jpeg"
                  alt="Global"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:w-[30vw] flex flex-col mt-0 md:mt-36">
                <h3 className="text-2xl font-semibold mb-2">
                  Startups Launching App + Web in Parallel
                </h3>
                <p className="text-gray-dark2">
                  Move faster than your competition by launching across mobile
                  and web simultaneously. With ExPro, your product catalog, CMS,
                  and backend logic are shared across both platforms, saving you
                  time, cost, and maintenance headaches. Build once, launch
                  everywhere, and focus on growth from day one.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 snap-start w-[90vw] flex flex-col md:flex-row gap-12  sticky top-0">
              <div className="box1">
                <img
                  src="/images/assets/IMG6.JPG"
                  alt="Global"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:w-[30vw] flex flex-col mt-0 md:mt-36">
                <h3 className="text-2xl font-semibold mb-2">
                  Ops-Heavy Businesses With ERP Needs
                </h3>
                <p className="text-gray-dark2">
                  Complex operations demand more than cookie-cutter platforms.
                  Whether you're managing multiple warehouses, pricing tiers,
                  B2B workflows, or returns logic, ExPro integrates deeply with
                  ERP and CRM systems, adapts to your internal processes, and
                  provides granular control over how your business runs online.
                </p>
              </div>
            </div>
            <div className=" flex-shrink-0  w-[20px] sm:w-[200px]"></div>
          </div>
        </div>

        <div className="flex justify-center mt-6 sm:hidden">
          <button className="arrow-button" onClick={scrollLeft}>
            <img
              src="/images/Leftarrow2.png"
              alt="Left Arrow"
              className="w-10 h-10"
            />
          </button>
          <button className="arrow-button" onClick={scrollRight}>
            <img
              src="/images/Rightarrow1.png"
              alt="Right Arrow"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
    </>
  );
}
