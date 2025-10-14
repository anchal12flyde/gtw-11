"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Home/Loader/Loader";
import { FormProvider } from "@/context/FormContext";
import { JoinTeamProvider } from "@/context/JoinTeamContext";
import { AgencyPartnershipProvider } from "@/context/AgencyPartnershipContext";
import { Toaster } from "react-hot-toast";
import "@/app/globals.css";


export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <FormProvider>
          <JoinTeamProvider>
            <AgencyPartnershipProvider>
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathname}
                  initial={{ opacity: 0, y: -100 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 0.77, 0.47, 0.97],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                      ease: "easeIn",
                    },
                  }}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
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
