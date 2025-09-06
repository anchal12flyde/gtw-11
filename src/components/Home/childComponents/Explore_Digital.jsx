"use client";
import HoverVideo from "./VideoPlayer";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Explore_Digital() {
  const scrollRef = useRef(null);

   const CARD_WIDTH = 320 ; 

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="util-flex util-flex-1 util-mx-1-5 gradient-section text-white-color1 mt-26  usecases-section ">
        <div className="lg:hidden absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-42 ">
            <motion.h2
              className="text-[25vw] text-white-color1/10 font-600 leading-none tracking-wider"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              From
            </motion.h2>
            <motion.h2
              className="text-[25vw] text-white-color1/10 font-600 leading-none tracking-wider"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              viewport={{ once: true }}
            >
              To
            </motion.h2>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="heading-systems flex flex-wrap justify-center text-center w-full lg:justify-start lg:text-left">
              <p className="text-white">We Build. We Digitilize.</p>
              &nbsp;<p className="text-light-blue">We Transform.</p>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-evenly text-center lg:text-left gap-14 lg:gap-35">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="left-column-text">Legacy systems</p>
              <p className="left-column-text">Manual operations</p>
              <p className="left-column-text">Scattered tech</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <svg
                className="w-50  text-light-blue animate-arrowDown lg:hidden"
                viewBox="0 0 192 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10L96 40L182 10"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="hidden lg:block w-8  text-light-blue animate-arrowDown"
                viewBox="0 0 24 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L20 52L2 102"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              viewport={{ once: true }}
              className="flex-1 space-y-16"
            >
              <p className="right-column-text justify-items-start">
                We help organizations rethink the way they run, by{" "}
                <span className="text-light-blue">
                  replacing complexity with clarity –
                </span>{" "}
                powered by purpose-built platforms.
              </p>

              <a
                href="/digital-transformation-service"
                className="explore-link  block"
              >
                Explore Digital Transformation
              </a>
            </motion.div>
          </div>
        </div>

        <div className="relative lg:hidden">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="heading-systems flex flex-wrap justify-center text-center w-full lg:justify-start lg:text-left">
              <p className="text-white">We Build. We Digitilize.</p>
              &nbsp;<p className="text-light-blue">We Transform.</p>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-evenly text-center lg:text-left gap-14 lg:gap-35">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="left-column-text">Legacy systems</p>
              <p className="left-column-text">Manual operations</p>
              <p className="left-column-text">Scattered tech</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <svg
                className="w-50  text-light-blue animate-arrowDown lg:hidden"
                viewBox="0 0 192 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10L96 40L182 10"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="hidden lg:block w-8  text-light-blue animate-arrowDown"
                viewBox="0 0 24 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L20 52L2 102"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              viewport={{ once: true }}
              className="flex-1 space-y-16"
            >
              <p className="right-column-text justify-items-start">
                We help organizations rethink the way they run, by{" "}
                <span className="text-light-blue">
                  replacing complexity with clarity –
                </span>{" "}
                powered by purpose-built platforms.
              </p>

              <a
                href="/digital-transformatio-service"
                className="explore-link  block"
              >
                Explore Digital Transformation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="gradient-yellow-section usecases-section">
        <div className="util-flex util-flex-1 util-mx-1-5 ">
          <div className="relative flex items-left justify-between mb-12 w-full">
            <h2 className="text-left  flex-1 heading-systems ">
              <span className="text-white-color1">
                Building scalable systems that solve real-world problems.
              </span>
            </h2>
            {/* <div className="hidden sm:flex gap-0">
              <button className="arrow-button" onClick={scrollLeft}>
                <img
                  src="/images/LeftArrow.png"
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
            </div> */}
          </div>

          <div
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full flex "
            ref={scrollRef}
          >
            <div className="flex flex-nowrap gap-8 ">
              <div className="">
                <div className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77  h-[510px] overflow-hidden">
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
                      We built a custom food ordering system with OTP-based
                      login, intuitive "Build Your Order" flow, and deep menu
                      customizations. The platform supports multi-kitchen
                      franchise operations, branch-specific pricing, and an
                      integrated order approval system for seamless execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77 h-[510px] overflow-hidden ">
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
              </div>
              <div className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77  h-[510px] overflow-hidden">
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
                    Itel Mobiles, complete with live search recommendations,
                    smart filtering, store locator, and Unicommerce integration
                    optimized for speed, reliability, and scale across India.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white-color1 rounded-3xl w-70 lg:w-77  h-[510px] overflow-hidden">
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
                    transformation including brand identity design, corporate
                    stationery, investor decks, and website UI/UX. We
                    thendeveloped all three brand websites to reflect a
                    consistent,professional digital presence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center  mt-6 sm:hidden">
            <button className="arrow-button" onClick={scrollLeft}>
              <img
                src="/images/LeftArrow.png"
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
    </>
  );
}
