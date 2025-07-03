'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import ClientButton from '@/components/globalcomponents/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const pathname = usePathname();

  const [logoSrc, setLogoSrc] = useState("/images/GTW_Logo.png");

  useEffect(() => {
    const header = document.querySelector(".site-header");
    if (header) {
      if (
        pathname === "/Consult" ||
        pathname === "/GTW_Way"
      ) {
        header.classList.add("transparent-header");
        setLogoSrc("/images/whitelogo.png");
      } else {
        header.classList.remove("transparent-header");
        setLogoSrc("/images/GTW_Logo.png");
      }
    }
  }, [pathname]);

  return (
  
<header
  className={`site-header util-flex util-flex-1 util-mx-1-5 mt-4 z-[999] w-full
    ${pathname === "/Consult" || pathname === "/GTW_Way" ? "fixed top-0 left-0" : ""}
  `}
>


       <div className="container flex items-center justify-between h-12">
      <Link href="/">
      <img
        key={pathname}
        src={logoSrc}
        alt="GTW Logo"
        className="gtw-logo h-8 w-auto"
      />
    </Link>


  
  <nav className="hidden md:flex gap-6 items-center">
    <Link className="nav-link" href="/GTW_Way">Philosophy</Link>
    <Link className="nav-link" href="/mobile_apps">Mobile Apps</Link>
    <Link className="nav-link" href="/Consult">Consult</Link>
    <Link className="nav-link" href="#">Digital Transformation</Link>
    <Link className="nav-link" href="#">ExPro</Link>
  </nav>

<div className="hidden md:block">
  <ClientButton
    href="/StepOneForm"
    className={`${
      pathname === "/Consult" || pathname === "/GTW_Way"
        ? "bg-yellow-400 text-white"
        : "bg-black text-white"
    }`}
  >
    Get Started
  </ClientButton>
</div>


  
  <button
    onClick={toggleMenu}
    className="toggle-menu md:hidden flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none "
  >
    <span className="block h-[2px] w-[24px] bg-gray-700 rounded-sm ml-[6px]"></span>
    <span className="block h-[2px] w-[30px] bg-gray-700 rounded-sm"></span>
    <span className="block h-[2px] w-[24px] bg-gray-700 rounded-sm ml-[6px]"></span>
  </button>
</div>
            {isOpen && (
            <div
                className="fixed inset-0 z-40 bg-black/40  backdrop-saturate-150 md:hidden mobile-drawer"
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
                <Link href="/GTW_Way" className="block nav-link mt-12 mb-8">Philosophy</Link>
                <Link href="/mobile_apps" className="block nav-link mb-8">Mobile Apps</Link>
                <Link href="/Consult" className="block nav-link mb-8">Consult</Link>
                <Link href="/blog" className="block nav-link mb-8">Digital Transformation</Link>
                <Link href="/expro" className="block nav-link mb-8">ExPro</Link>
                <Link href="/login" className="mobile-login-btn mt-4 block">Get Started</Link>

              </div>
            </div>
            )}


             
            </header>
         
  )
}

