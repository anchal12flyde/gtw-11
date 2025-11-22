"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useFormContext } from "@/context/FormContext";
import { updateStep4 } from "@/services/formApi";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function StepFour() {
  const router = useRouter();
  const { formData } = useFormContext();
  
  const [budgetRange, setBudgetRange] = useState('');
  const [postLaunchSupport, setPostLaunchSupport] = useState('');
  const [documents, setDocuments] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [portfolio, setPortfolio] = useState(null);

  const handlePortfolioUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed");
      return;
    }
    setPortfolio(file);
  };
  const handleNext = async () => {
    if (!budgetRange || !postLaunchSupport) {
      setError("Please answer all required questions");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await updateStep4(formData.formId, {
        budgetRange,
        postLaunchSupport,
        documents,
      });

      router.push('/step-five');
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
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="util-flex util-flex-1 util-mx-1-5"
      >
        <div className="step-form-container ">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/step-three-web")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 4</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Budget & Scope Alignment</h1>
          </div>
          <p className="form-subheading   ">
            What’s your approximate budget range?
          </p>
          <div className="space-y-2 select-wrapper">
            {["Under ₹50k", "₹50k – ₹1L", "₹1L – ₹5L"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="budgetRange"
                  value={option}
                  checked={budgetRange === option}
                  onChange={() => setBudgetRange(option)}
                  className="form-radio "
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>

          <p className="form-subheading   ">
            Do you need support after launch?
          </p>
          <div className="space-y-2 select-wrapper">
            {["Yes, ongoing retainer", "Only initial build"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="postLaunchSupport"
                  value={option}
                  checked={postLaunchSupport === option}
                  onChange={() => setPostLaunchSupport(option)}
                  className="form-radio "
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>
          <p className="form-subheading">
            Upload any relevant documents or briefs (optional)
          </p>
          <label htmlFor="portfolioUpload" className="custom-upload-btn">
            <Upload size={18} className="mr-2" />
            Upload
          </label>
          <input
            id="portfolioUpload"
            type="file"
            accept=".pdf"
            onChange={handlePortfolioUpload}
            className="hidden"
          />

          {portfolio && (
            <p className="text-md mt-6">{portfolio.name} uploaded</p>
          )}

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