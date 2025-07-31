"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export default function WorkWithSection() {
  const industryList = [
    {
      title: "Commerce & Consumer Products",
      description:
        "Digital storefronts, product discovery, and last-mile fulfillment.",
      tags: ["E-commerce", "Inventory Sync", "Smart Search", "Store Finder"],
    },
    {
      title: "Operation & Infrastructure",
      description: "Digitizing internal workflows and complex multi-unit ops.",
      tags: ["Admin Tools", "Branch Logic", "Approval Flows", "Ops Dashboards"],
    },
    {
      title: "Education & Knowledge",
      description: "Streamlining student services, housing, and campus ops. ",
      tags: ["Transport", "Hostel Ops", "Student Portals", "Admissions CRM"],
    },
    {
      title: "Services & Professional Firms",
      description: "Building credibility and client acquisition engines.",
      tags: ["Websites", "Branding", "Sales Decks", "Lead Capture"],
    },
    {
      title: "Hospitality & Experience",
      description: "Ordering, logistics, and customization at scale. ",
      tags: ["Menu Logic", "Custom Orders", "Multi-Kitchen", "Franchise Tools"],
    },
  ];

  return (
    <div className="util-flex util-flex-1 util-mx-1-5">
      <section className="mt-26 mb-26 md:mb-0">
        <h2 className="heading-systems text-secondary mb-12">
          Who <span className="text-primary">We Work</span> With{" "}
        </h2>
        <div className="space-y-12">
          {industryList.map(({ title, description, tags }, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: false, margin: "-50px" });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="consumer-product"
              >
                <div className="product-left">
                  <h3 className="ecom-heading">{title}</h3>
                  <p className="industry-description mt-4">{description}</p>
                </div>

                <div className="block sm:hidden border-b border-primary w-full mt-2"></div>

                <div className="product-right ">
                  {tags.map((tag, i) => (
                    <span key={i} className="industry-tag  ">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
