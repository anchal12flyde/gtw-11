"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import AnimatedInput from "../animation/animated-input";
import CountryCode from "@/components/globalcomponents/CountryCodeSelector";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useAuditForm } from "@/context";

export default function AboutYou() {
  const router = useRouter();

  // ---------------- Local States ----------------
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // STRING ONLY
  const [countryCode, setCountryCode] = useState("+91"); // OPTIONAL

  const [errors, setErrors] = useState({});

  // ---------------- Context API ----------------
  const { startForm, updateStep, formId } = useAuditForm();

  // ---------------- Validation ----------------
  const validateStep1 = () => {
    let newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!email.includes("@")) newErrors.email = "Enter a valid email";

    if (!phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  // ---------------- NEXT HANDLER ----------------
  const handleNext = async () => {
    if (!validateStep1()) return;

    // If form doesn't exist → start new one
    let activeFormId = formId;
    if (!activeFormId) {
      const res = await startForm(email);
      activeFormId = res?._id;

      if (!activeFormId) {
        alert("Could not start form");
        return;
      }
    }

    // Payload for backend
    const payload = {
      fullName,
      email,
      phone,
      countryCode,
    };

    const result = await updateStep(1, payload);

    if (result) {
      router.push("/audit/your-product");
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Header />

      <div className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container">
          {/* Step indicator */}
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 1</span>
          </div>

          <div className="custom-left-border">
            <h1 className="heading-systems">About You</h1>
          </div>

          {/* FULL NAME */}
          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter your Full name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          </div>

          {/* EMAIL */}
          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* PHONE + COUNTRY CODE */}
          <div className="select-wrapper">
            <CountryCode
              value={phone}
              onChange={(value) => setPhone(value)}
              onCodeChange={(code) => setCountryCode(code)} // if your component supports this
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <button onClick={handleNext} className="next-button">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
