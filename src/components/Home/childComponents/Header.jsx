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
  const [logoSrc, setLogoSrc] = useState("/images/GTW_Logo.png");

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
      setLogoSrc("/images/whitelogo.png");
    } else if (pathname === "/Expro") {
      header.classList.remove("transparent-header");
      setLogoSrc("/images/exproLogo.png");
    } else {
      header.classList.remove("transparent-header");
      setLogoSrc("/images/GTW_Logo.png");
    }
  }
}, [pathname]);

  return (
  
 <header
  className={`site-header ${scrolled ? '' : 'slide-down'} util-flex util-flex-1 util-mx-1-5 mt-4 
    ${["/Consult", "/GTW_Way", "/Expro"].includes(pathname) ? "" : "" }
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
      <nav className="hidden xl:flex gap-6 items-center">
        <Link className="nav-link" href="/GTW_Way">Philosophy</Link>
        <Link className="nav-link" href="/mobile_apps">Mobile Apps</Link>
        <Link className="nav-link" href="/StyleGuide">GTW SaaS Cloud</Link>
        <Link className="nav-link" href="/Consult">Digital Transformation</Link>
        <Link className="nav-link" href="/Expro">ExPro</Link>
        <Link className='nav-link' href="/Insights">Insights</Link>
        <Link className='nav-link' href="/SuccessStories">Success Stories</Link>
      </nav>
    )}


    <div className="hidden xl:block">
      <ClientButton
        href="/StepOneForm"
        className={`${
          pathname === "/Consult" || pathname === "/GTW_Way"|| pathname ==="/Expro"
            ? "bg-[#FFB100] text-white hover:bg-[#ffaa00]"
            : "bg-black text-white hover:bg-[#FFB100] hover:text-black"
        }`}
      >Get Started
      </ClientButton>
    </div>


  
<button
  onClick={toggleMenu}
  className="toggle-menu xl:hidden flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none"
>
  <span className={`block h-[2px] w-[24px] rounded-sm ml-[6px] ${["/Consult", "/GTW_Way", "/Expro"].includes(pathname) ? "bg-white" : "bg-gray-700"}`}></span>
  <span className={`block h-[2px] w-[30px] rounded-sm ${["/Consult", "/GTW_Way", "/Expro"].includes(pathname) ? "bg-white" : "bg-gray-700"}`}></span>
  <span className={`block h-[2px] w-[24px] rounded-sm ml-[6px] ${["/Consult", "/GTW_Way", "/Expro"].includes(pathname) ? "bg-white" : "bg-gray-700"}`}></span>
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
                {pathname !== "/Expro" && (
                    <>
                      <Link href="/GTW_Way" className="block nav-link mt-12 mb-8">Philosophy</Link>
                      <Link href="/mobile_apps" className="block nav-link mb-8">Mobile Apps</Link>
                      <Link href="/StyleGuide" className="block nav-link mb-8">GTW SaaS Cloud</Link>
                      <Link href="/Consult" className="block nav-link mb-8">Digital Transformation</Link>
                      <Link href="/Expro" className="block nav-link mb-8">ExPro</Link>
                      <Link href="/Insights" className="block nav-link mb-8">Insights</Link>
                      <Link href="/SuccessStories" className="block nav-link mb-8">Success Stories</Link>
                    </>
                  )}

                <Link href="/StepOneForm" className="mobile-login-btn mt-4 block">Get Started</Link>

              </div>
            </div>
            )}
            </header>
         
  )
}

