
"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useFormContext } from "@/context/FormContext";
import { updateStep3 } from "@/services/formApi";
import { motion } from "framer-motion";

export default function StepThreeMobile() {
   const router = useRouter();
   const { formData } = useFormContext();
   
   const [companyType, setCompanyType] = useState('');
   const [startTime, setStartTime] = useState('');
   const [adminPanel,setAdminPanel] = useState('');
   const [admiredSites, setAdmiredSites] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const handleNext = async () => {
     if (!companyType || !startTime || !adminPanel) {
       setError("Please answer all required questions");
       return;
     }

     setIsLoading(true);
     setError('');

     try {
       await updateStep3(formData.formId, {
         appCoreUse: companyType,
         targetPlatforms: startTime,
         needsAdminPanel: adminPanel,
         references: admiredSites,
       });

       router.push('/step-four');
     } catch (err) {
       setError(err.message || "Failed to save. Please try again.");
       setIsLoading(false);
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
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/step-two-form")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 3</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Track-Specific Questions</h1>
          </div>
          <p className="form-subheading   ">What’s the core use of your app?</p>
          <div className="space-y-2 select-wrapper">
            {[
              "Ordering or commerce",
              "Internal operations",
              "Booking or scheduling",
              "Learning or training",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="companyType"
                  value={option}
                  checked={companyType === option}
                  onChange={() => setCompanyType(option)}
                  className="form-radio "
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>

          <p className="form-subheading   ">
            What platforms do you want to target?
          </p>
          <div className="space-y-2 select-wrapper">
            {["iOS", "Android", "Both"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="startTime"
                  value={option}
                  checked={startTime === option}
                  onChange={() => setStartTime(option)}
                  className="form-radio "
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>
          <p className="form-subheading">
            Do you need admin panel/back-office functionality?
          </p>
          <div className="space-y-2 select-wrapper">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="adminPanel"
                  value={option}
                  checked={adminPanel === option}
                  onChange={() => setAdminPanel(option)}
                  className="form-radio "
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>
          <p className="form-subheading ">Any similar apps or references?</p>
          <input 
            type="text" 
            name="admiredSites" 
            className="input-box" 
            value={admiredSites}
            onChange={(e) => setAdmiredSites(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button 
            onClick={handleNext}
            className="next-button"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Next"} <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </>
  );
}
