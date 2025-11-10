
"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useFormContext } from "@/context/FormContext";
import { updateStep3 } from "@/services/formApi";

export default function StepThreeSaas() {
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
         mvpType: companyType,
         coreFunctionality: startTime,
         multiTenancy: adminPanel,
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
          <p className="form-subheading   ">
            Is this a fresh MVP or rebuilding an existing tool?
          </p>
          <div className="space-y-2 select-wrapper">
            {["New MVP", "Rebuild"].map((option) => (
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

          <p className="form-subheading   ">Core functionality?</p>
          <div className="space-y-2 select-wrapper">
            {[
              "User dashboards",
              "Admin panel",
              "Payments & subscriptions",
              "Analytics or reports",
            ].map((option) => (
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
            Do you require multi-tenancy (multiple clients under one system)?
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
          <p className="form-subheading ">
            Any examples of what you're trying to build?
          </p>
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
      </div>
    </>
  );
}
