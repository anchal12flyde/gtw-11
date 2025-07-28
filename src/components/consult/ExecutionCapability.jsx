"use client";

export default function ExecutionCapability() {

  const timelineItems = [
    {
      title: "Workflow audit + tech landscape mapping",
      description:
        "We offer clarity-first consulting backed by execution capability. Whether you're exploring modernization or ready to rebuild, we guide you from map to momentum.",
      image: "/images/assets/icon1.png",
    },
    {
      title: "Modern platform recommendation (buy vs build)",
      description:
        "We offer clarity-first consulting backed by execution capability. Whether you’re facing modernization or ready to rebuild, we guide you from map to momentum.",
      image: "/images/assets/icon2.png",
    },
    {
      title: "System map & architecture blueprint",
      description:
        "We offer clarity-first consulting backed by execution capability. Whether you’re facing modernization or ready to rebuild, we guide you from map to momentum.",
      image: "/images/assets/icon3.png",
    },
    {
      title: "MVP scoping and build strategy",
      description:
        "We offer clarity-first consulting backed by execution capability. Whether you’re facing modernization or ready to rebuild, we guide you from map to momentum.",
      image: "/images/assets/icon4.png",
    },
    {
      title: "Tool replacement & process digitization",
      description:
        "We offer clarity-first consulting backed by execution capability. Whether you’re facing modernization or ready to rebuild, we guide you from map to momentum.",
      image: "/images/assets/icon5.png",
    },
  ];
  

  return (
    <>
      <div className="bg-gray-light util-flex util-flex-1 util-mx-1-5 mt-26 usecases-section">
        <div className="timeline-wrapper">
          <h4 className="text-[24px] font-semibold text-secondary  mb-8 sm:mb-[-30px]">
            What We Do
          </h4>
          <div className="timeline">
            <h2 className="heading-systems ">
              We Offer <span className="text-primary">Clarity-First</span>{" "}
              Consulting Backed By{" "}
              <span className="text-primary">Execution Capability</span>.
            </h2>
            {timelineItems.map((item, index) => (
              <div className="timeline-item mt-18" key={index}>
                <div className="flex flex-col md:flex-row items-left gap-6 md:gap-70">
                  <div className="timeline-image order-1 md:order-2">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="timeline-content order-2 md:order-1">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
