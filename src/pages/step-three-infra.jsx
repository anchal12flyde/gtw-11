
"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useFormContext } from "@/context/FormContext";
import { updateStep3 } from "@/services/formApi";

export default function StepThreeInfra() {
   const router = useRouter();
   const { formData } = useFormContext();
   
   const [companyType, setCompanyType] = useState('');
   const [startTime, setStartTime] = useState('');
   const [adminPanel,setAdminPanel] = useState('');
   const [d2cMobileApp,setD2cMobileApp] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const handleNext = async () => {
     if (!companyType || !startTime || !adminPanel || !d2cMobileApp) {
       setError("Please answer all required questions");
       return;
     }

     setIsLoading(true);
     setError('');

     try {
       await updateStep3(formData.formId, {
         commerceType: companyType,
         skuVolume: startTime,
         integrations: adminPanel,
         needsD2CMobileApp: d2cMobileApp,
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
      <div className="util-flex util-flex-1 util-mx-1-5 ">
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
          <p className="form-subheading   ">Type of commerce?</p>
          <div className="space-y-2 select-wrapper">
            {["B2C (D2C)", "B2B", "Hybrid"].map((option) => (
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
            Estimated number of SKUs or products?
          </p>
          <div className="space-y-2 select-wrapper">
            {["<100", "100–1000", "1000+"].map((option) => (
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
          <p className="form-subheading">Required integrations:</p>
          <div className="space-y-2 select-wrapper">
            {[
              "Razorpay",
              "Uniware",
              "Meta Catalog",
              "Others (input field)",
            ].map((option) => (
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
          <p className="form-subheading ">Do you also need a D2C mobile app?</p>
          <div className="space-y-2 select-wrapper">
            {["Yes", "NO"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="d2cMobileApp"
                  value={option}
                  checked={d2cMobileApp === option}
                  onChange={() => setD2cMobileApp(option)}
                  className="form-radio "
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button 
            onClick={handleNext}
            className="next-button"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Next"} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
