
"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useFormContext } from "@/context/FormContext";
import { updateStep3 } from "@/services/formApi";

export default function StepThreeConsult() {
   const router = useRouter();
   const { formData } = useFormContext();
   
   const [companyType, setCompanyType] = useState('');
   const [startTime, setStartTime] = useState('');
   const [adminPanel,setAdminPanel] = useState('');
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
         transformationArea: companyType,
         currentSystem: startTime,
         serviceType: adminPanel,
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
      <div className="util-flex util-flex-1 util-mx-1-5">
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
          <p className="form-subheading">What area needs transformation? </p>
          <div className="space-y-2 select-wrapper">
            {[
              "Ops / workflow",
              "ERP / internal tools",
              "Customer experience",
              "Legacy system modernization",
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
            Is there a current system in place?
          </p>
          <div className="space-y-2 select-wrapper">
            {["Manual process", "Legacy digital tool", "No system"].map(
              (option) => (
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
              )
            )}
          </div>
          <p className="form-subheading">
            Do you want us to only advise or also execute?
          </p>
          <div className="space-y-2 select-wrapper">
            {["Advisory only", "Advisory + Build"].map((option) => (
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
