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
    <section className="bg-white-color1 util-flex util-flex-1 util-mx-1-5 mt-26">
      <div className="relative flex ">
        <h2 className="flex-1 heading-systems">
          How It <span className="text-primary">Works</span>
        </h2>
      </div>

      <motion.div
        className="w-full flex mt-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex flex-wrap lg:flex-nowrap">
          <motion.div
            className="work-card flex flex-col gap-10  h-[300px] sm:h-auto justify-end"
            variants={card}
          >
            <img
              src="https://ik.imagekit.io/a9uxeuyhx/New%20Folder/01.png?updatedAt=1763033568388"
              alt="Campus"
              className="number-image"
            />
            <div className="flex flex-col gap-4">
              <h3 className="ecom-headings text-left">Discovery</h3>
              <p className="text-gray-dark paragraphs-defaul text-left">
                We deep-dive into your workflows, tools, bottlenecks, and
                people.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="work-card flex flex-col gap-10  h-auto hide-on-mobile "
            variants={arrow}
          >
            <div className="justify-items-center sm:mt-37 sm:block hidden ">
              <img
                src="/images/assets/Arrow 2.png"
                alt="Arrow"
                className="w-38 h-4 filter grayscale opacity-70"
              />
            </div>
          </motion.div>

          <motion.div
            className="work-card flex flex-col gap-10 h-[300px] sm:h-auto justify-end"
            variants={card}
          >
            <img
              src="https://ik.imagekit.io/a9uxeuyhx/New%20Folder/02.png?updatedAt=1763033592021"
              alt="Campus"
              className="number-image"
            />
            <div className="flex flex-col gap-4">
              <h3 className="ecom-headings text-left">Systems Map</h3>
              <p className="text-gray-dark paragraphs-defaul text-left">
                We create a visual blueprint of your current and future tech
                architecture.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="work-card flex flex-col gap-10  h-auto hide-on-mobile "
            variants={arrow}
          >
            <div className="justify-items-center sm:mt-37 sm:block hidden ">
              <img
                src="/images/assets/Arrow 2.png"
                alt="Arrow"
                className="w-38 h-4 filter grayscale opacity-70"
              />
            </div>
          </motion.div>

          <motion.div
            className="work-card flex flex-col gap-10 h-[300px] sm:h-auto justify-end"
            variants={card}
          >
            <img
              src="https://ik.imagekit.io/a9uxeuyhx/New%20Folder/03.png?updatedAt=1763033656545"
              alt="Campus"
              className="number-image"
            />
            <div className="flex flex-col gap-4">
              <h3 className="ecom-headings text-left">Transformation Map</h3>
              <p className="text-gray-dark paragraphs-defaul text-left">
                Prioritized, ROI-first plan with clear outcomes, timelines, and
                cost.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
