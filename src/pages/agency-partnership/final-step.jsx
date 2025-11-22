"use client";
import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useAgencyPartnership } from '@/context/AgencyPartnershipContext';
import { toast } from 'react-hot-toast';
import { motion } from "framer-motion";

export default function final_step() {
  const router = useRouter();
  const { formData, submitApplication, loading } = useAgencyPartnership();

  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (formData) {
      setAgreed(formData.agreedToTerms || false);
    }
  }, [formData]);

  const handleNext = async () => {
    if (!agreed) {
      toast.error("Please confirm your understanding to proceed.");
      return;
    }

    const success = await submitApplication(true);
    if (success) {
      router.push("/thankyou-page/thank-you");
    }
  };
   
     return (
       <>
         <Head>
           <meta name="robots" content="noindex,nofollow" />
         </Head>
         <Header />
         <motion.div
                 initial={{ y: -40, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="util-flex util-flex-1 util-mx-1-5">
           <div className="step-form-container ">
             <ArrowLeft
               className="cursor-pointer mb-5 text-arrow-color"
               size={30}
               onClick={() => router.push("/agency-partnership/collaborate")}
             />
             <div className="step-indicator">
               <span className="dot"></span>
               <span className="step-label">Step 5</span>
             </div>
             <div className="custom-left-border">
               <h1 className="heading-systems">Final Step</h1>
             </div>

             <p className="form-subheading">
               We believe great partnerships start with clarity and respect. If
               that sounds like your vibe, let’s talk.
             </p>

             <div className="mt-6">
               <label className="flex items-start gap-3 text-base">
                 <input
                   type="checkbox"
                   checked={agreed}
                   onChange={(e) => setAgreed(e.target.checked)}
                   className="mt-1"
                 />
                 <span>
                   I understand and agree to the partnership terms.
                 </span>
               </label>
             </div>

             <button 
               onClick={handleNext} 
               className="next-button"
               disabled={loading}
             >
               {loading ? 'Submitting...' : 'Submit'} <ArrowRight size={16} />
             </button>
           </div>
         </motion.div>
       </>
     );
}
