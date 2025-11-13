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

// useEffect(() => {
//     const handleScroll = () => {
//       console.log(window.scrollY);
//       if (window.scrollY > 50) {
//         console.log("hello");
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);


 useEffect(() => {
  const header = document.querySelector(".site-header");
  if (header) {
    if (
      pathname === "/digital-transformation-service" ||
      pathname === "/"
    ) {
      header.classList.add("transparent-header");
      setLogoSrc("/images/gtw_new1.png");
    } else if (pathname === "/expro") {
      header.classList.remove("transparent-header");
      setLogoSrc("/images/exproLogo.png");
    } else {
      header.classList.remove("transparent-header");
      setLogoSrc("/images/gtw_new.png");
    }
  }
}, [pathname]);

 const isActive = (href) => {
    return (
      pathname === href ||
      (href === "/" && pathname.startsWith("/")) ||
      (href === "/digital-transformation-service" &&
        pathname.startsWith("/digital-transformation-service"))
    );
  };

  return (
    <header
      className={`site-header  util-flex util-flex-1 util-mx-1-5 pt-4 
    ${pathname === "/" ? "home-header" : ""}
  `}
    >
      <div className="  flex items-center justify-between h-12">
        <Link href="/">
          <img
            key={pathname}
            src={logoSrc}
            alt="GTW Logo"
            className="gtw-logo h-8 w-auto"
          />
        </Link>

        {pathname !== "/expro" && (
          <nav className="hidden xl:flex gap-6 ">
            <Link
              className={`nav-link ${isActive("/what-we-do") ? "active" : ""}`}
              href="/what-we-do"
            >
             What We Do
            </Link>
            <Link
              className={`nav-link ${
                isActive("/mobile-apps-development") ? "active" : ""
              }`}
              href="/mobile-apps-development"
            >
              Mobile Apps
            </Link>
            {/* <Link className={`nav-link ${isActive("/StyleGuide") ? 'active' : ''}`} href="/StyleGuide">GTW SaaS Cloud</Link> */}
            <Link
              className={`nav-link ${
                isActive("/digital-transformation-service") ? "active" : ""
              }`}
              href="/digital-transformation-service"
            >
              Digital Transformation
            </Link>
            <a
              className="nav-link"
              href="https://expro.store"
              target="_blank"
              rel="noopener noreferrer"
            >
              ExPro
            </a>

            <Link
              className={`nav-link ${isActive("/blog") ? "active" : ""}`}
              href="/blog"
            >
              Insights
            </Link>
            <Link
              className={`nav-link ${
                isActive("/success-stories") ? "active" : ""
              }`}
              href="/success-stories"
            >
              Success Stories
            </Link>
          </nav>
        )}

        <div className="hidden xl:block">
          <ClientButton
            href="/step-one-form"
            className={`${
              pathname === "/digital-transformation-service" ||
              pathname === "/" ||
              pathname === "/expro"
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
              [
                "/digital-transformation-service",
                "/",
                "/expro",
              ].includes(pathname)
                ? "bg-white-color1"
                : "bg-white-gray"
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[30px] rounded-sm ${
              [
                "/digital-transformation-service",
                "/",
                "/expro",
              ].includes(pathname)
                ? "bg-white-color1"
                : "bg-white-gray"
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[24px] rounded-sm ml-[6px] ${
              [
                "/digital-transformation-service",
                "/",
                "/expro",
              ].includes(pathname)
                ? "bg-white-color1"
                : "bg-white-gray"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-99999 bg-secondary/40 backdrop-saturate-150 xl:hidden mobile-drawer ${
          isOpen ? "backdrop-visible" : "backdrop-hidden"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`mobile-drawer-panel ${
            isOpen ? "mobile-drawer-open" : "mobile-drawer-closed"
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
          {pathname !== "/expro" && (
            <div className="space-y-10">
              <Link href="/what-we-do" className="block nav-link mt-12 ">
                What We Do
              </Link>
              <Link href="/mobile-apps-development" className="block nav-link">
                Mobile Apps
              </Link>
              {/* <Link href="/StyleGuide" className="block nav-link ">GTW SaaS Cloud</Link> */}
              <Link
                href="/digital-transformation-service"
                className="block nav-link "
              >
                Digital Transformation
              </Link>
              <Link href="https://expro.store/" className="block nav-link">
                ExPro
              </Link>
              <Link href="/blog" className="block nav-link ">
                Insights
              </Link>
              <Link href="/success-stories" className="block nav-link ">
                Success Stories
              </Link>
              <Link href="/step-one-form" className="mobile-login-btn  block">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

