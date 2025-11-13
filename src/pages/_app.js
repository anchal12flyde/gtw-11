import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Home/Loader/Loader";
import { FormProvider } from "@/context/FormContext";
import { JoinTeamProvider } from "@/context/JoinTeamContext";
import { AgencyPartnershipProvider } from "@/context/AgencyPartnershipContext";
import { Toaster } from "react-hot-toast";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false); // 👈 NEW
  const router = useRouter();

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Route change scroll
  useEffect(() => {
    const handleRouteChange = () => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <FormProvider>
          <JoinTeamProvider>
            <AgencyPartnershipProvider>
              <Component {...pageProps} />
            </AgencyPartnershipProvider>
          </JoinTeamProvider>
        </FormProvider>
      )}

      {/* ⭐ Go To Top Floating Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "#000",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            zIndex: 9999,
          }}
        >
          ↑
        </button>
      )}

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "black",
            padding: "12px 20px",
            borderRadius: "0.75rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            fontSize: "15px",
          },
        }}
      />
    </>
  );
}
