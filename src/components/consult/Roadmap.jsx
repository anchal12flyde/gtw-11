"use client";

import { motion } from "framer-motion";

export default function Roadmap() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const arrow = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-white util-flex util-flex-1 util-mx-1-5 mt-20">
      <div className="relative flex items-left justify-between">
        <h2 className="flex-1 heading-systems">
          How It <span className="text-[#FFB100]">Works</span>
        </h2>
      </div>

      <motion.div
        className="w-full flex mt-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 w-full items-center justify-center">

          <motion.div
            className="flex flex-col gap-10 bg-white rounded-3xl h-[300px] sm:h[400px]"
            variants={card}
          >
            <img src="/images/assets/01.png" alt="Campus" className="campus-image" />
            <div className="flex flex-col gap-4">
              <h3 className="ecom-headings text-left">Discovery</h3>
              <p className="paragraphs-default">
                We deep-dive into your workflows, tools, bottlenecks, and people.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-10 bg-white rounded-3xl h-[400px] hide-on-mobile"
            variants={arrow}
          >
            <div className="justify-items-center mt-8 sm:mt-47 sm:block hidden">
              <img
                src="/images/assets/Arrow 2.png"
                alt="Arrow"
                className="w-38 h-4 filter grayscale opacity-70"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10 bg-white rounded-3xl h-[300px] sm:h[400px]"
            variants={card}
          >
            <img src="/images/assets/02.png" alt="Campus" className="campus-image" />
            <div className="flex flex-col gap-4">
              <h3 className="ecom-headings text-left">Systems Map</h3>
              <p className="paragraphs-default">
                We create a visual blueprint of your current and future tech architecture.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10 bg-white rounded-3xl h-[400px] hide-on-mobile"
            variants={arrow}
          >
            <div className="justify-items-center mt-8 sm:mt-47 sm:block hidden">
              <img
                src="/images/assets/Arrow 2.png"
                alt="Arrow"
                className="w-38 h-4 filter grayscale opacity-70"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10 bg-white rounded-3xl h-[300px] sm:h[400px]"
            variants={card}
          >
            <img src="/images/assets/03.png" alt="Campus" className="campus-image" />
            <div className="flex flex-col gap-4">
              <h3 className="ecom-headings text-left">Transformation Map</h3>
              <p className="paragraphs-default">
                Prioritized, ROI-first plan with clear outcomes, timelines, and cost/effort.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
