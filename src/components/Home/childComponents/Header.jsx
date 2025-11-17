"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ClientButton from "@/components/globalcomponents/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const pathname = usePathname();

  // ---------------------------------------
  // 🔥 FIXED LOGIC: No useEffect required
  // ---------------------------------------
  const isTransparent =
    pathname === "/" || pathname === "/digital-transformation-service";

  const logoSrc =
    pathname === "/expro"
      ? "/images/exproLogo.png"
      : isTransparent
      ? "/images/gtw_new1.png" // white version
      : "/images/gtw_new.png"; // black version

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
      className={`site-header util-flex util-flex-1 util-mx-1-5 pt-4 
        ${isTransparent ? "transparent-header" : ""}`}
    >
      <div className="flex items-center justify-between h-12">
        {/* LOGO */}
        <Link href="/">
          <img src={logoSrc} alt="GTW Logo" className="gtw-logo h-8 w-auto" />
        </Link>

        {/* NAVIGATION */}
        {pathname !== "/expro" && (
          <nav className="hidden xl:flex gap-6">
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

        {/* GET STARTED BUTTON */}
        <div className="hidden xl:block">
          <ClientButton
            href="/step-one-form"
            className={`${
              isTransparent || pathname === "/expro"
                ? "bg-primary text-white-color1 hover:bg-primary"
                : "bg-secondary text-white-color1 hover:bg-primary hover:text-white-color1"
            }`}
          >
            Get Started
          </ClientButton>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="toggle-menu xl:hidden flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none"
        >
          <span
            className={`block h-[2px] w-[24px] rounded-sm ml-[6px] ${
              isTransparent || pathname === "/expro"
                ? "bg-white-color1"
                : "bg-white-gray"
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[30px] rounded-sm ${
              isTransparent || pathname === "/expro"
                ? "bg-white-color1"
                : "bg-white-gray"
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[24px] rounded-sm ml-[6px] ${
              isTransparent || pathname === "/expro"
                ? "bg-white-color1"
                : "bg-white-gray"
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
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
              <Link
                href="/digital-transformation-service"
                className="block nav-link"
              >
                Digital Transformation
              </Link>
              <Link href="https://expro.store/" className="block nav-link">
                ExPro
              </Link>
              <Link href="/blog" className="block nav-link">
                Insights
              </Link>
              <Link href="/success-stories" className="block nav-link">
                Success Stories
              </Link>
              <Link href="/step-one-form" className="mobile-login-btn block">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
