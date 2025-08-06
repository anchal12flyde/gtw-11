'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: "Philosphy",
    path: "/philosophy",
    items: [
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
    ],
  },
  {
    title: "Mobile Apps",
    path: "/mobile-apps-development",
    items: [
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
    ],
  },
  {
    title: "Digital Transformation",
    path: "/digital-transformatio-service",
    items: [
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
    ],
  },
  {
    title: "Expro",
    path: "https://expro.store",
    items: [
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
    ],
  },
  {
    title: "Insights",
    path: "/blog",
    items: [
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
    ],
  },
  {
    title: "Success Stories",
    path: "/success-stories",
    items: [
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
      "Our Team",
      "The GTW Vision",
    ],
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <footer className="bg-gray-light text-secondary font-inter">
      <div className="py-10">
        {/* Mobile Logo */}
        <div className="sm:hidden w-full flex justify-center mb-4 py-2">
          <img
            src="/images/gtw_new.png"
            alt="GTW Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Subscribe capsule */}
        <div className="capsule-container">
          <div className="hidden sm:flex sm:w-1/2 justify-start">
            <img
              src="/images/gtw_new.png"
              alt="GTW Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <form className="flex justify-center sm:justify-start gap-2 w-full">
              <input
                type="email"
                placeholder="Your Email Address"
                className="email-name"
              />
              <button type="submit" className="subscribe-name">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="company-information">
          <div className="company-info gap-28">
            {categories.map(({ title, path }) => (
              <div key={title}>
                <Link href={path}>
                  <h4 className="category-heading cursor-pointer hover:underline">
                    {title}
                  </h4>
                </Link>
                <br />
              </div>
            ))}
          </div>
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5">
          <div className="block sm:hidden">
            {categories.map(({ title, items, path }, index) => (
              <div key={title} className="border-b border-white-gray4">
                <div className="w-full text-left py-4 flex justify-between items-center font-semibold text-base">
                  {/* Title Click - Redirect to Path */}
                  <Link href={path} className="w-full">
                    {title}
                  </Link>

                  {/* Chevron Click - Toggle Accordion */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="ml-2"
                    aria-label="Toggle Submenu"
                  >
                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-white-gray5" />
                    </span>
                  </button>
                </div>

                <ul
                  className={`transition-opacity duration-300 ease-in-out ${
                    openIndex === index ? "opacity-100" : "opacity-0 hidden"
                  } pl-2 text-white-gray6`}
                >
                  {/* Optional sub-items */}
                  {/* {items.map((item, idx) => (
          <li key={idx} className="py-1">
            {item}
          </li>
        ))} */}
                </ul>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
            className="util-flex"
          >
            <div className=" flex flex-col sm:flex-row sm:justify-between  items-center text-sm text-secondary mt-8">
              <p className="company-name">General Tech Works Private Limited</p>
              <p className="mt-2 sm:mt-0 company-name">
                Privacy Policy | Terms and Conditions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
