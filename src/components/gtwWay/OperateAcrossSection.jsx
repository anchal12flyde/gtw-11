"use client";

import { motion } from "framer-motion";

export default function OperateAcrossSection() {
  const items = [
    {
      title: "Design like a founder",
      desc: "Every design decision ties back to business impact, user clarity, and long-term scalability.",
    },
    {
      title: "Write it down",
      desc: "We document systems, flows, and feedback to ensure clarity, continuity, and product memory.",
    },
    {
      title: "Stay sharp",
      desc: "User journeys are crafted for precision — from search and filters to reviews and conversions.",
    },
    {
      title: "Code like an owner",
      desc: "We build stable, extensible systems that drive performance, uptime, and team trust.",
    },
    {
      title: "Deploy like a partner",
      desc: "Our rollouts are tested in real scenarios — field use, geo-logging, checklists, and approvals.",
    },
    {
      title: "Support like a stakeholder",
      desc: "We actively monitor, iterate, and resolve issues — owning uptime and user experience end to end.",
    },
  ];

  return (
    <>
      <section className="util-flex util-flex-1 util-mx-1-5 gradient-section text-white-color1 usecases-section mt-26">
        <div className="relative container ">
          <div className="mb-20">
            <motion.div
              className="heading-systems text-white-color1 text-2xl font-semibold leading-snug"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span>How</span>
              <span className="text-light-blue"> We Operate</span>
              <span> Across</span>
              <div>
                <span>Every Division</span>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-between gap-12">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="across-card flex w-full sm:w-[48%] lg:w-[24%] max-w-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-1 bg-light-blue mr-3"></div>
                <div>
                  <h3 className="division-title">{item.title}</h3>
                  <p className="division-desc text-white-gray6">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
