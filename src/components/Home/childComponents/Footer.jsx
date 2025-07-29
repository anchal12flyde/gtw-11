'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react';


const categories = [
  {
    title: 'Philosphy',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Mobile Apps',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Digital Transformation',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Expro',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Insights',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Success Stories',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  }
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="sm:hidden w-full flex justify-center mb-4 py-2"
        >
          <img
            src="/images/gtw_new.png"
            alt="GTW Logo"
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Subscribe capsule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className="capsule-container"
        >
          <div className="hidden sm:flex sm:w-1/2 justify-start">
            <img
              src="/images/gtw_new.png"
              alt="GTW Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <form className="flex justify-center sm:justify-start items-center gap-2 w-full">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow px-4 py-2 rounded-full border border-border-gray-white 0 w-[50%] sm:w-96 lg:w-[500px] placeholder:text-sm sm:placeholder:text-base"
              />
              <button
                type="submit"
                className="bg-secondary text-white-color1 px-4 py-2 rounded-full w-[50%] sm:w-40 lg:w-48 text-sm lg:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <div className="company-information">
          <div className="company-info">
            {categories.map(({ title, items }) => (
              <div key={title}>
                <h4 className="category-heading ">{title}</h4>
                <br />
                {/* <ul className="footer-list mt-3 space-y-1 text-gray-600">
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul> */}
              </div>
            ))}
          </div>
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5">
          <div className="block sm:hidden ">
            {categories.map(({ title, items }, index) => (
              <div key={title} className="border-b border-white-gray4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 flex justify-between items-center font-semibold text-base"
                >
                  {title}
                  <span
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-white-gray5" />
                  </span>
                </button>
                <ul
                  className={`transition-opacity duration-300 ease-in-out ${
                    openIndex === index ? "opacity-100" : "opacity-0 hidden"
                  } pl-2 text-white-gray6`}
                >
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
                Privacy Policy| Terms and Conditions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
