'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

const categories = [
  {
    title: "Verticals",
    items: [
      { label: "Mobile Apps", path: "/mobile-apps-development" },
      {
        label: "Digital Transformation",
        path: "/digital-transformation-service",
      },
      { label: "Website Development", path: "#" },
      { label: "Software Development", path: "#" },
    ],
  },
  {
    title: "Saas Solutions",
    items: [
      { label: "Expro", path: "https://expro.store" },
      { label: "Difooch", path: "https://difooch.com" },
      { label: "Auditchef", path: "#" },
      { label: "Startup Launcher", path: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "GTW Home", path: "/" },
      { label: "Our Philosophy", path: "/philosophy" },
      { label: "Become a Client", path: "/step-one-form" },
      { label: "Join Our Team", path: "/join-our-team/personal-details" },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { label: "Insights", path: "/blog" },
      { label: "Success Stories", path: "/success-stories" },
      { label: "Pay Online", path: "#" },
      { label: "Raise a Ticket", path: "#" },
    ],
  },
];



export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      toast.error('Please enter your email address')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
      const response = await fetch(`${API_BASE_URL}/subscriptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success(result.message || 'Successfully subscribed to our newsletter!')
        setEmail('')
      } else {
        toast.error(result.message || 'Failed to subscribe')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      toast.error('Failed to subscribe. Please try again.')
    } finally {
      setLoading(false)
    }
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
            <form
              onSubmit={handleSubscribe}
              className="flex justify-center sm:justify-start gap-2 w-full"
            >
              <input
                type="email"
                placeholder="Your Email Address"
                className="email-name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                className="subscribe-name"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
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
                  <h4 className="category-heading">{title}</h4>
                  <ul className="footer-list">
                    {items.map(({ label, path }, idx) => (
                      <li key={idx}>
                        {/* Agar external link hai to target="_blank" */}
                        {path.startsWith("http") ? (
                          <Link
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {label}
                          </Link>
                        ) : (
                          <Link href={path}>{label}</Link>
                        )}
                      </li>
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
                <div className="w-full text-left pt-5 pb-2 flex justify-between items-center font-semibold text-base">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <Link href="#" className="flex-1">
                      {title}
                    </Link>

                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-white-gray5" />
                    </span>
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-2 pb-5 text-white-gray6">
                    {items.map(({ label, path }, idx) => (
                      <li key={idx} className="py-1">
                        <Link href={path} className="block">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <Link
                  href="/privacy-policy"
                  className="hover:underline hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link
                  href="/terms-and-condition"
                  className="hover:underline hover:text-primary transition-colors"
                >
                  Terms and Conditions
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
