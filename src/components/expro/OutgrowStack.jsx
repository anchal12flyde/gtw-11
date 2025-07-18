"use client";

export default function OutgrowStack() {
  const timelineItems = [
    {
      title: "Payments & Transactions",
      description:
        "Razorpay, Cashfree, PayU, CCAvenue, Stripe, PayPal.",
      image: "/images/assets/exproIcon1.png",
    },
    {
      title: "Catalog Sync",
      description:
        "Meta Catalog Sync + Dynamic Product Ads.",
      image: "/images/assets/exproIcon2.png",
    },
    {
      title: "Order Management Systems",
      description:
        "Uniware WMS + order sync.",
      image: "/images/assets/exproIcon3.png",
    },
    {
      title: "Performance Marketing",
      description:
        "Google Tag Manager, GA4, and Meta Pixel.",
      image: "/images/assets/exproIcon4.png",
    },
    {
      title: "Communication",
      description:
        "WhatsApp Order Support, Mailchimp, SMS Gateways.",
      image: "/images/assets/exproIcon5.png",
    },
     {
      title: "Shipping And Taxations",
      description:
        "GST/tax automation, Pincode-level shipping rules.",
      image: "/images/assets/exproIcon6.png",
    },
     {
      title: "ERP Systems",
      description:
        "API gateway for ERP/CRM bridge.",
      image: "/images/assets/exproIcon7.png",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 util-flex util-flex-1 util-mx-1-5 mt-26 py-20">
        <div className="timeline-wrapper">
           <h4 className="text-[24px] font-semibold text-black  mb-8 sm:mb-[-60px]">
           Integrations That<br/> Matter

        </h4>
          <div className="timeline">
            
            <h2 className="heading-systems ">
        You <span className="text-[#FFB100]">Won’t Outgrow</span> this stack.
      </h2>
            {timelineItems.map((item, index) => (
              <div className="timeline-item mt-18" key={index}>
                <div className="flex flex-col md:flex-row items-left gap-6 md:gap-70">
                  <div className="timeline-image order-1 md:order-2">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="timeline-content order-2 md:order-1">
                    <h3 >{item.title}</h3>
                    <p >{item.description}</p>
                    
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
