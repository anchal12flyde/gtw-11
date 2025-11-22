"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import AnimatedInput from "../animation/animated-input";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useAuditForm } from "@/context";
import { motion } from "framer-motion";

export default function YourGoals() {
  const router = useRouter();

  // ---------------- Local States ----------------
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [otherText, setOtherText] = useState("");
  const [specificChallenge, setSpecificChallenge] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // ---------------- Context ----------------
  const { updateStep, formId } = useAuditForm();

  // ---------------- Validation ----------------
  const validateStep4 = () => {
    const newErrors = {};

    if (!primaryGoal.trim())
      newErrors.primaryGoal = "Please select your primary goal";

    if (primaryGoal === "Other (text)" && !otherText.trim()) {
      newErrors.otherText = "Please specify your custom goal";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------- Next Handler ----------------
  const handleNext = async () => {
    if (!validateStep4()) return;

    if (!formId) {
      alert("Form ID missing — earlier steps not completed");
      return;
    }

    setIsLoading(true);

    const finalGoal = primaryGoal === "Other (text)" ? otherText : primaryGoal;

    const payload = {
      primaryGoal: finalGoal,
      specificChallenge: specificChallenge || "",
    };

    const res = await updateStep(4, payload);

    setIsLoading(false);

    if (res) {
      router.push("/audit/confirmation");
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
        <div className="step-form-container">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/audit/focus-areas")}
          />

          {/* Step Indicator */}
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 4</span>
          </div>

          <div className="custom-left-border">
            <h1 className="heading-systems">Your Goals</h1>
          </div>

          {/* PRIMARY GOAL */}
          <p className="form-subheading">What’s your primary goal?</p>

          <div className="space-y-2 select-wrapper">
            {[
              "Increase signups",
              "Improve retention",
              "Boost sales",
              "Launch successfully",
              "Other (text)",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="primaryGoal"
                  value={item}
                  checked={primaryGoal === item}
                  onChange={(e) => setPrimaryGoal(e.target.value)}
                  className="form-radio"
                />
                <span className="text-md">{item}</span>
              </label>
            ))}

            {/* OTHER TEXT FIELD */}
            {primaryGoal === "Other (text)" && (
              <div className="mt-3">
                <AnimatedInput
                  type="text"
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                  placeholder="Please specify"
                  className={errors.otherText ? "input-error" : ""}
                />
                {errors.otherText && (
                  <p className="error-text">{errors.otherText}</p>
                )}
              </div>
            )}

            {errors.primaryGoal && (
              <p className="error-text">{errors.primaryGoal}</p>
            )}
          </div>

          {/* SPECIFIC CHALLENGE */}
          <p className="form-subheading mt-6">
            Any specific challenges you’re facing?
          </p>

          <div className="select-wrapper">
            <textarea
              value={specificChallenge}
              onChange={(e) => setSpecificChallenge(e.target.value)}
              rows={5}
              className="custom-select"
              placeholder="Tell us ..."
            />
          </div>

          {/* NEXT BUTTON */}
          <button
            onClick={handleNext}
            className="next-button"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Next"}
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </>
  );
}
