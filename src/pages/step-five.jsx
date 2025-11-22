"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import { useFormContext } from "@/context/FormContext";
import { updateStep5 } from "@/services/formApi";
import { motion } from "framer-motion";

export default function StepFive() {
  const router = useRouter();
  const { formData, clearFormData } = useFormContext();
  
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNext = async () => {
    setIsLoading(true);
    setError('');

    try {
      await updateStep5(formData.formId, additionalNotes);
      
      // Clear form data after successful submission
      clearFormData();
      
      router.push('/thankyou-page/thank-you');
    } catch (err) {
      setError(err.message || "Failed to submit. Please try again.");
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
            className="cursor-pointer mb-5 text-gray-400"
            size={30}
            onClick={() => router.push("/step-four")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 5</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Final Notes & Submit</h1>
          </div>
          <p className="form-subheading   ">
            Any additional notes or context we should know?
          </p>
          <input 
            type="text" 
            name="additionalNotes" 
            className="input-box" 
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button 
            onClick={handleNext} 
            className="next-button"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"} <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </>
  );
}