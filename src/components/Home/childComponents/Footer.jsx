'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: "Verticals",
    path: "/philosophy",
    items: [
      "Mobile Apps",
      "Digital Transformation",
      "Website Development",
      "Software Development",
      
    ],
  },
  {
    title: "Saas Solutions",
    path: "/mobile-apps-development",
    items: [
      "Expro",
      "Difooch",
      "Auditchef",
      "Startup Launcher",
      
    ],
  },
  {
    title: "Company",
    path: "/digital-transformation-service",
    items: [
      "GTW Home",
      "Our Philosophy",
      "Become a Client",
      "Join Our Team",
    ],
  },
  {
    title: "Quick Links",
    path: "https://expro.store",
    items: [
      "Insights",
      "Success Stories",
      "Pay Online",
      "Raise a Ticket",
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
      <div className=" pt-[48px] lg:pt-[94px] pb-[55px]">
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

        <div className="footer-bottom ">
          {/* Left side image */}
          <div className="footer-left">
            <img
              src="/images/footer-image.png"
              alt="Footer Illustration"
              className="footer-image"
            />
          </div>

          {/* Right side footer links */}
          <div className="footer-right">
            <div className="footer-links">
              {categories.map(({ title, items }) => (
                <div key={title}>
                  <h4 className="category-heading ">{title}</h4>
                  <ul className="footer-list ">
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5">
          <div className="block lg:hidden">
            {categories.map(({ title, items, path }, index) => (
              <div key={title} className="border-b border-white-gray4">
                <div className="w-full text-left pt-4 pb-2 flex justify-between items-center font-semibold text-base">
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
                  className={`transition-opacity duration-300 pb-5 ease-in-out ${
                    openIndex === index ? "opacity-100" : "opacity-0 hidden"
                  } pl-2 text-white-gray6`}
                >
                  {/* Optional sub-items */}
                  {items.map((item, idx) => (
                    <li key={idx} className="py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className=""
        >
          <div className="grey-divider hidden lg:block"></div>
          <div className="util-flex util-mx-1-5">
            <div className=" flex flex-col sm:flex-row sm:justify-between  items-center company-name mt-8 ">
              <p className="company-name">General Tech Works Private Limited</p>
              <p className="mt-2 sm:mt-0 company-name">
                Privacy Policy | Terms and Conditions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
