"use client";
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from 'next/navigation';
import AnimatedInput from "./animation/animated-input";
import { motion } from "framer-motion";
import Head from 'next/head';
import { useFormContext } from "@/context/FormContext";
import { startForm, updateStep2 } from "@/services/formApi";

export default function StepTwoForm() {
  const router = useRouter();
  const { formData, updateFormData } = useFormContext();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [startTime, setStartTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNext = async () => {
    if (!name || !email || !companyType || !startTime) {
      setError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const currentFormId = formData.formId;

      if (!currentFormId) {
        throw new Error('Form not initialized. Please start from Step 1.');
      }

      // Update step 2 with all details
      await updateStep2(currentFormId, {
        name,
        email,
        companyName,
        companyType,
        startTime,
      });

      updateFormData({
        name,
        email,
        companyName,
        companyType,
        startTime,
        currentStep: 3,
      });

      // Navigate based on project type
      const projectType = formData.projectType || 'Web';
      const routeMap = {
        'Web': '/step-three-web',
        'Mobile': '/step-three-mobile',
        'SaaS': '/step-three-saas',
        'Infra': '/step-three-infra',
        'Consult': '/step-three-consult',
      };
      
      router.push(routeMap[projectType] || '/step-three-web');
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
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/step-one-form")}
          />

          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 2</span>
          </div>

          <div className="custom-left-border">
            <h1 className="heading-systems">Project Overview</h1>
          </div>
          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter your name"
              value={name}
              onChange={(value) => setName(value)}
            />
          </div>

          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter your email address"
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </div>

          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter your company name"
              className="custom-select"
              value={companyName}
              onChange={(value) => setCompanyName(value)}
            />
          </div>

          <p className="form-subheading   ">
            What best describes your company?
          </p>
          <div className="space-y-2 select-wrapper">
            {["Startup", "SME", "Large Enterprise", "Individual Founder"].map(
              (option) => (
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
              )
            )}
          </div>

          <p className="form-subheading ">When do you want to start?</p>
          <div className="space-y-2 select-wrapper">
            {[
              "Immediately",
              "Within 30 days",
              "In 1–3 months",
              "Just exploring",
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

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <motion.button
            onClick={handleNext}
            className="next-button mt-4"
            disabled={isLoading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isLoading ? "Saving..." : "Next"} <ArrowRight size={16} />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
