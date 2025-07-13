"use client";

import { motion } from "framer-motion";

export default function OperateAcrossSection() {
  const items = [
    { title: "Design like a founder", desc: "Think business, not just pixels" },
    { title: "Write it down", desc: "Mobile access to SaaS platforms" },
    { title: "Stay sharp", desc: "Buyer-seller, review, filters, listings" },
    { title: "Code like an owner", desc: "Direct ordering, kitchen dashboards, loyalty" },
    { title: "Deploy like a partner", desc: "Field checklists, geo-logging, approvals" },
    { title: "Deploy like a partner", desc: "Buyer-seller, review, filters, listings" },
  ];

  return (
    <>
      <section className="util-flex util-flex-1 util-mx-1-5 gradient-section text-white mt-26">
        <div className="relative container pt-20 sm:pt-20 pb-20 sm:pb-0">
          <div className="mb-20">
            <motion.div
              className="heading-systems text-white text-2xl font-semibold leading-snug"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span>How</span>
              <span className="text-[#FFB100]"> We Operate</span>
              <span> Across</span>
              <div>
                <span>Every Division</span>
              </div>
            </motion.div>
          </div>

      <div className="flex flex-wrap justify-between gap-8">
  {items.map((item, index) => (
    <motion.div
      key={index}
      className="across-card flex w-full sm:w-[48%] lg:w-[24%] max-w-sm"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="w-[3px] bg-[#FFB100] mr-3"></div>
      <div>
        <h3 className="division-title">{item.title}</h3>
        <p className="division-desc text-gray-600">{item.desc}</p>
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </section>
    </>
  );
}
