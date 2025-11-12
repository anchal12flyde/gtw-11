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
  const router = useRouter();

  // 🧭 Loader setup
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // 🧭 Scroll to top on route change (hard reset)
  useEffect(() => {
    const handleRouteChange = () => {
      // force next frame to scroll top
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

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
