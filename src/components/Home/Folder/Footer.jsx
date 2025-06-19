'use client'
import { useState } from 'react'
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bottom-0 left-0 w-full bg-gray-100 text-black font-inter z-50">
      <div className="mx-auto pr-4 lg:pr-20 ml-4 sm:ml-18 py-10">        

       
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 px-4 py-6 rounded-full bg-white w-full">
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-1/2">
            <img src="/images/GTW_Logo.png" alt="GTW Logo" className="h-10 w-auto px-8" />
          </div>
          <form className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-1/2 px-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="email-input"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>

        
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm mb-12 px-4 sm:px-6 lg:px-12">
          {categories.map(({ title, items }) => (
            <div key={title}>
              <h4 className="category-heading mb-3">{title}</h4><br />
              <ul className="footer-list mt-3 space-y-2 text-gray-600">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Accordion View */}
        <div className="block sm:hidden px-4">
          {categories.map(({ title, items }, index) => (
            <div key={title} className="border-b border-gray-200">
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } pl-2 text-gray-600`}
              >
                {items.map((item, idx) => (
                  <li key={idx} className="py-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="border-t border-gray-300 flex flex-col sm:flex-row justify-between text-sm text-gray-950 pt-8 mx-12">
          <p className="company-name">General Tech Works Private Limited</p>
          <p className="mt-2 sm:mt-0 company-name">2025</p>
        </div>

      </div>
    </footer>
  );
}
