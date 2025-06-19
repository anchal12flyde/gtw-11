'use client'
import { useState } from 'react'
import Link from 'next/link'


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
   <header className="w-full mt-4 sticky top-0 bg-white shadow-md z-50 transition-all duration-300 md:relative md:bg-transparent md:shadow-none md:top-auto">
      <div className="mx-auto pr-6 lg:pr-30  ml-9 sm:ml-26">
        <div className="flex items-center justify-between h-12 ">
          <Link href="/" className="flex items-center">
            <img
              src="/images/GTW_Logo.png"
              alt="GTW Logo"
              className="h-10 w-auto object-contain"
              />
          </Link>
         <nav className="hidden md:flex navbar gap-8  custom-navbar">
          <Link className="nav-link" href="#">Web</Link>
          <Link className="nav-link" href="/mobile_apps">Mobile Apps</Link>
          <Link className="nav-link" href="#">GTW SaaS Cloud</Link>
          <Link className="nav-link" href="#">Digital Transformation</Link>
          <Link className="nav-link" href="#">ExPro</Link>
        </nav>

          <div className="hidden md:block">
            <Link href="/login" className="client-login">
              Client Login
            </Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none">
            <span className="block h-[2px] w-[24px] bg-gray-700 rounded-sm ml-[6px]"></span>
            <span className="block h-[2px] w-[30px] bg-gray-700 rounded-sm"></span>
            <span className="block h-[2px] w-[24px] bg-gray-700 rounded-sm ml-[6px]"></span>
          </button>
        </div>

          {isOpen && (
          <div
              className="fixed inset-0 z-40 bg-black/40  backdrop-saturate-150 md:hidden"
              onClick={toggleMenu}
            >
            <div
              className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 transform transition-all duration-500 ease-out
                ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-gray-600 text-2xl focus:outline-none"
                aria-label="Close menu"
              >
                &times;
              </button>
              <Link href="/about" className="block nav-link mt-12 mb-8">Web</Link>
              <Link href="/mobile_apps" className="block nav-link mb-8">Mobile Apps</Link>
              <Link href="/services" className="block nav-link mb-8">GTW SaaS Cloud</Link>
              <Link href="/blog" className="block nav-link mb-8">Digital Transformation</Link>
              <Link href="/expro" className="block nav-link mb-8">ExPro</Link>
              <Link href="/login" className="client-login mt-4 block">Client Login</Link>

            </div>
          </div>
          )}


            </div>
          </header>
  )
}

