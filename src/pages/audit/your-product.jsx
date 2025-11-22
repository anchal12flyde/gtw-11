"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import AnimatedInput from "../animation/animated-input";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useAuditForm } from "@/context";
import { motion } from "framer-motion";

export default function YourProduct() {
  const router = useRouter();

  // ---------------- Local States ----------------
  const [productName, setProductName] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [platform, setPlatform] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // ---------------- Context ----------------
  const { updateStep, formId } = useAuditForm();

  // ---------------- Validation ----------------
  const validateStep2 = () => {
    const newErrors = {};

    if (!productName.trim()) newErrors.productName = "Product name is required";
    if (!websiteLink.trim())
      newErrors.websiteLink = "Website/App Link is required";
    if (!platform.trim()) newErrors.platform = "Platform selection is required";
    if (!description.trim())
      newErrors.description = "Brief description is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ---------------- Save & Next ----------------
  const handleNext = async () => {
    if (!validateStep2()) return;

    if (!formId) {
      alert("Form ID missing — Step 1 was not completed properly.");
      return;
    }

    setIsLoading(true);

    const payload = {
      productName,
      websiteLink,
      platform,
      description,
    };

    const res = await updateStep(2, payload);

    setIsLoading(false);

    if (res) {
      router.push("/audit/focus-areas");
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
            onClick={() => router.push("/audit/about-you")}
          />

          {/* STEP INDICATOR */}
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 2</span>
          </div>

          <div className="custom-left-border">
            <h1 className="heading-systems">Your Product</h1>
          </div>

          {/* PRODUCT NAME */}
          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter Product name"
              type="text"
              name="productName"
              value={productName}
              onChange={setProductName}
              className={errors.productName ? "input-error" : ""}
            />
            {errors.productName && (
              <p className="error-text">{errors.productName}</p>
            )}
          </div>

          {/* WEBSITE LINK */}
          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter Website/App Link"
              type="text"
              name="websiteLink"
              value={websiteLink}
              onChange={setWebsiteLink}
              className={errors.websiteLink ? "input-error" : ""}
            />
            {errors.websiteLink && (
              <p className="error-text">{errors.websiteLink}</p>
            )}
          </div>

          {/* PLATFORM */}
          <p className="form-subheading">Platform</p>
          <div className="space-y-2 select-wrapper">
            {["IOS", "Android", "Web", "Other"].map((item) => (
              <label
                key={item}
                className={`flex items-center gap-2 cursor-pointer ${
                  errors.platform ? "input-error" : ""
                }`}
              >
                <input
                  type="radio"
                  name="platform"
                  value={item}
                  checked={platform === item}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="form-radio"
                />
                <span className="text-md">{item}</span>
              </label>
            ))}
            {errors.platform && <p className="error-text">{errors.platform}</p>}
          </div>

          {/* DESCRIPTION */}
          <p className="form-subheading">Brief Description</p>
          <div className="select-wrapper">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className={`custom-select ${
                errors.description ? "input-error" : ""
              }`}
              placeholder="Tell us what excites you ..."
            />
            {errors.description && (
              <p className="error-text">{errors.description}</p>
            )}
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
