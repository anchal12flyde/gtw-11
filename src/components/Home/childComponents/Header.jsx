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

  const [scrolled, setScrolled] = useState(true);
  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState("/images/gtw_new.png");

useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        console.log("hello");
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


 useEffect(() => {
  const header = document.querySelector(".site-header");
  if (header) {
    if (
      pathname === "/Consult" ||
      pathname === "/GTW_Way"
    ) {
      header.classList.add("transparent-header");
      setLogoSrc("/images/gtw_new1.png");
    } else if (pathname === "/Expro") {
      header.classList.remove("transparent-header");
      setLogoSrc("/images/exproLogo.png");
    } else {
      header.classList.remove("transparent-header");
      setLogoSrc("/images/gtw_new.png");
    }
  }
}, [pathname]);

 const isActive = (href) => {
    return pathname === href || 
           (href === "/GTW_Way" && pathname.startsWith("/GTW_Way")) ||
           (href === "/Consult" && pathname.startsWith("/Consult"));
  };

  return (
    <header
      className={`site-header ${
        scrolled ? "" : "slide-down"
      } util-flex util-flex-1 util-mx-1-5 mt-4 
    ${["/Consult", "/GTW_Way", "/Expro"].includes(pathname) ? "" : ""}
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

        {pathname !== "/Expro" && (
          <nav className="hidden xl:flex gap-6 ">
            <Link
              className={`nav-link ${isActive("/GTW_Way") ? "active" : ""}`}
              href="/GTW_Way"
            >
              Philosophy
            </Link>
            <Link
              className={`nav-link ${isActive("/mobile_apps") ? "active" : ""}`}
              href="/mobile_apps"
            >
              Mobile Apps
            </Link>
            {/* <Link className={`nav-link ${isActive("/StyleGuide") ? 'active' : ''}`} href="/StyleGuide">GTW SaaS Cloud</Link> */}
            <Link
              className={`nav-link ${isActive("/Consult") ? "active" : ""}`}
              href="/Consult"
            >
              Digital Transformation
            </Link>
            <Link
              className={`nav-link ${isActive("/Expro") ? "active" : ""}`}
              href="/Expro"
            >
              ExPro
            </Link>
            <Link
              className={`nav-link ${isActive("/Insights") ? "active" : ""}`}
              href="/Insights"
            >
              Insights
            </Link>
            <Link
              className={`nav-link ${
                isActive("/SuccessStories") ? "active" : ""
              }`}
              href="/SuccessStories"
            >
              Success Stories
            </Link>
          </nav>
        )}

        <div className="hidden xl:block">
          <ClientButton
            href="/StepOneForm"
            className={`${
              pathname === "/Consult" ||
              pathname === "/GTW_Way" ||
              pathname === "/Expro"
                ? "bg-primary text-white-color1 hover:bg-primary"
                : "bg-secondary text-white-color1 hover:bg-primary hover:text-white-color1"
            }`}
          >
            Get Started
          </ClientButton>
        </div>

        <button
          onClick={toggleMenu}
          className="toggle-menu xl:hidden flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none"
        >
          <span
            className={`block h-[2px] w-[24px] rounded-sm ml-[6px] ${
              ["/Consult", "/GTW_Way", "/Expro"].includes(pathname)
                ? "bg-white-color1"
                : "bg-white-gray"
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[30px] rounded-sm ${
              ["/Consult", "/GTW_Way", "/Expro"].includes(pathname)
                ? "bg-white-color1"
                : "bg-white-gray"
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[24px] rounded-sm ml-[6px] ${
              ["/Consult", "/GTW_Way", "/Expro"].includes(pathname)
                ? "bg-white-color1"
                : "bg-white-gray"
            }`}
          ></span>
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-secondary/40  backdrop-saturate-150 xl:hidden mobile-drawer"
          onClick={toggleMenu}
        >
          <div
            className={`absolute top-0 right-0 w-64 h-full bg-white-color1 shadow-lg p-6 transform transition-all duration-500 ease-out
                  ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white-gray text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              &times;
            </button>
            {pathname !== "/Expro" && (
              <div className="space-y-10">
                <Link href="/GTW_Way" className="block nav-link mt-12 ">
                  Philosophy
                </Link>
                <Link href="/mobile_apps" className="block nav-link">
                  Mobile Apps
                </Link>
                {/* <Link href="/StyleGuide" className="block nav-link ">GTW SaaS Cloud</Link> */}
                <Link href="/Consult" className="block nav-link ">
                  Digital Transformation
                </Link>
                <Link href="/Expro" className="block nav-link">
                  ExPro
                </Link>
                <Link href="/Insights" className="block nav-link ">
                  Insights
                </Link>
                <Link href="/SuccessStories" className="block nav-link ">
                  Success Stories
                </Link>
                <Link href="/StepOneForm" className="mobile-login-btn  block">
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

