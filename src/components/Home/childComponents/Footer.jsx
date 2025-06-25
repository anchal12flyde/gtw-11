'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react';


const categories = [
  {
    title: 'Company',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Verticals',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Resources',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Industries',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Careers',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  },
  {
    title: 'Legal',
    items: ['The GTW Vision', 'Our Team', 'The GTW Vision', 'Our Team', 'The GTW Vision']
  }
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <footer className="bg-gray-100 text-black font-inter">
      <div className="py-10">

        {/* Mobile Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="sm:hidden w-full flex justify-center mb-4 py-2"
        >
          <img
            src="/images/GTW_Logo.png"
            alt="GTW Logo"
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Subscribe capsule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: false }}
          className="capsule-container"
        >
          <div className="hidden sm:flex sm:w-1/2 justify-start">
            <img
              src="/images/GTW_Logo.png"
              alt="GTW Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <form className="flex justify-center sm:justify-start items-center gap-2 w-full">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow px-4 py-2 rounded-full border border-gray-300 w-[65%] sm:w-96 lg:w-[500px] placeholder:text-sm sm:placeholder:text-base"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-full w-[35%] sm:w-40 lg:w-48"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>


        <div className='util-flex util-flex-1 util-mx-1-5'>
        {/* <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm mb-12">
          {categories.map(({ title, items }) => (
            <div key={title}>
              <h4 className="category-heading mb-3">{title}</h4><br />
              <ul className="footer-list mt-3 space-y-1 text-gray-600">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        </div>

        
        <div className='util-flex util-flex-1 util-mx-1-5'>
        {/* <div className="block sm:hidden ">
          {categories.map(({ title, items }, index) => (
            <div key={title} className="border-b border-gray-200 p-2 ">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 flex justify-between items-center font-semibold text-base"
              >
                {title}
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </span>

              </button>
             <ul
                className={`transition-opacity duration-300 ease-in-out ${
                  openIndex === index ? 'opacity-100' : 'opacity-0 hidden'
                } pl-2 text-gray-600`}
              >

                {items.map((item, idx) => (
                  <li key={idx} className="py-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
       <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: false }}
          className="util-flex util-flex-1 util-mx-1-5"
        >
          <div className=" flex flex-col sm:flex-row sm:justify-between justify-center items-center text-sm text-gray-950 pt-0 sm:mt-8">
            <p className="company-name">General Tech Works Private Limited</p>
            <p className="mt-2 sm:mt-0 company-name">2025</p>
          </div>
        </motion.div>
        </div>

        


      </div>
    </footer>
  
  );
}
