"use client";
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from 'next/navigation';
import AnimatedInput from "./animation/animated-input";
import { motion } from "framer-motion";
import Head from 'next/head';

export default function StepTwoForm() {
  const router = useRouter();
  const [companyType, setCompanyType] = useState('');
  const [startTime, setStartTime] = useState('');

  const handleNext = () => router.push('/step-three-web');

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5">
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
            <AnimatedInput placeholder="Enter your name" />
          </div>
          <div className="select-wrapper">
            <AnimatedInput placeholder="Enter your email address" />
          </div>

          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter your company name"
              className="custom-select"
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

          <motion.button
            onClick={handleNext}
            className="next-button mt-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Next <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </>
  );
}
