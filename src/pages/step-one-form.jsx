
"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import Link from 'next/link';
import Head from "next/head";
import { useFormContext } from "@/context/FormContext";
import { updateStep1 } from "@/services/formApi";

export default function StepOneForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { formData, updateFormData } = useFormContext();

  const handleNext = async () => {
    if (!selectedOption) {
      setError("Please select a project type");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Create form in backend with step 1 data
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_BASE_URL}/form/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectType: selectedOption }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to start form');
      }

      // Store formId and project type in context
      updateFormData({ 
        formId: data.data._id,
        projectType: selectedOption,
        currentStep: 1 
      });
      
      router.push("/step-two-form");
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
      <div className=" util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 1</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">What are we building together?</h1>
          </div>
          <p className="form-subheading">
            Select the primary track for your project
          </p>

          <div className="select-wrapper ">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="custom-select "
            >
              <option value="">Select</option>
              <option value="Web">
                🌐 Web (Flyde Studio – Informational, Brand, Marketing Sites)
              </option>
              <option value="Mobile">
                📱 Mobile (Flyde Apps – Native Mobile Apps)
              </option>
              <option value="SaaS">
                ☁️ SaaS (GTW SaaS Cloud – Launch-Ready SaaS Platforms)
              </option>
              <option value="Infra">
                🏬 Infra (ExPro Infra – Scalable E-commerce Solutions)
              </option>
              <option value="Consult">
                🧠 Consult (GTW Consult – Digital Transformation & Strategy)
              </option>
            </select>
            <ChevronDown className="chevron-icon" size={20} />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          
          <button
            className="next-button"
            onClick={handleNext}
            disabled={!selectedOption || isLoading}
          >
            {isLoading ? "Saving..." : "Next"} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
