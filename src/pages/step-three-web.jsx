
"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useFormContext } from "@/context/FormContext";
import { updateStep3 } from "@/services/formApi";

export default function StepThreeWeb() {
  const router = useRouter();
  const { formData } = useFormContext();
  
  const [siteType, setSiteType] = useState('');
  const [brandDesignStatus, setBrandDesignStatus] = useState('');
  const [admiredSites, setAdmiredSites] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNext = async () => {
    if (!siteType || !brandDesignStatus) {
      setError("Please answer all required questions");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await updateStep3(formData.formId, {
        siteType,
        brandDesignStatus,
        admiredSites,
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
          <p className="form-subheading   ">
            What kind of site you are looking for?
          </p>
          <div className="space-y-2 select-wrapper">
            {[
              "Marketing site",
              "Portfolio",
              "Startup launch",
              "Brand storytelling",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="siteType"
                  value={option}
                  checked={siteType === option}
                  onChange={() => setSiteType(option)}
                  className="form-radio "
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>
          <p className="form-subheading   ">
            Do you already have brand design or copy in place?
          </p>
          <div className="space-y-2 select-wrapper">
            {["Yes", "Partial", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="brandDesignStatus"
                  value={option}
                  checked={brandDesignStatus === option}
                  onChange={() => setBrandDesignStatus(option)}
                  className="form-radio "
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>
          <p className="form-subheading   ">
            Any sites you admire or benchmarks?
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
