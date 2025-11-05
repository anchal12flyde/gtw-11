"use client";
import { useState } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Card_Section() {
  return (
    <div className="util-flex util-flex-1 util-mx-1-5">
      <section className="mt-70 sm:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="heading-systems flex flex-wrap">
            <span className="text-secondary">We build systems,</span>
            &nbsp; <span className="text-primary"> not just screens</span>
          </h2>
        </motion.div>

        <div className="flex justify-evenly lg:justify-start ">
          <div className="usecases-grid1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[500px] w-full"
            >
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Modern%20websites.png?updatedAt=1762335948683"
                alt="Modern Websites"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-10 text-white-color text-3xl font-semibold select-none">
                <div className="flex flex-row lg:flex-col gap-x-2 lg:gap-x-0 lg:gap-y-1">
                  <p className="desktop-heading">Modern</p>
                  <p className="desktop-heading">Websites</p>
                </div>
              </div>
            </motion.div>

            <Link href="https://expro.store">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden  h-[380px] sm:h-[500px] w-full"
              >
               
                <img
                  src="https://ik.imagekit.io/a9uxeuyhx/E-commerce%20Digital%20Infrastructure.png?updatedAt=1762336177634"
                  alt="E-Commerce Infrastructure"
                  className="w-full h-full"
                />
                <div className="absolute top-6 left-10 text-white-color text-3xl font-semibold select-none">
                  <div className="hidden lg:flex flex-col gap-y-1">
                    <p className="desktop-heading">E-Commerce</p>
                    <p className="desktop-heading">
                      Digital <br />
                      Infrastructure
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-2 lg:hidden">
                    <p className="desktop-heading">E-Commerce</p>
                    <p className="desktop-heading">Digital</p>
                    <p className="desktop-heading w-full">Infrastructure</p>
                  </div>
                </div>
              </motion.div>
            </Link>
            <Link href="/mobile-apps-development">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[500px] w-full cursor-pointer"
              >
                <img
                  src="https://ik.imagekit.io/a9uxeuyhx/Mobile%20Apps.png?updatedAt=1762335880837"
                  alt="Mobile Apps"
                  className="w-full h-full"
                />
                <div className="absolute top-6 left-10 text-white-color text-3xl font-semibold select-none">
                  <div className="flex flex-row lg:flex-col gap-x-2 lg:gap-x-0 lg:gap-y-1">
                    <p className="desktop-heading">Mobile</p>
                    <p className="desktop-heading">Apps</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
