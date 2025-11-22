"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Head from "next/head";
import { useAuditForm } from "@/context";
import { motion } from "framer-motion";

export default function Confirmation() {
  const router = useRouter();

  // ---------------- Local States ----------------
  const [summary, setSummary] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({}); // <-- NEW

  // ---------------- Context ----------------
  const { updateStep, formId } = useAuditForm();

  // ---------------- Validation ----------------
  const validate = () => {
    let newErrors = {};
    if (!agreed)
      newErrors.agreed = "You must confirm your agreement to submit.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------- Submit Handler ----------------
  const handleSubmit = async () => {
    if (!validate()) return;

    if (!formId) {
      toast.error("Form session missing — restart the audit.");
      return;
    }

    const payload = {
      summary,
      agreed: true,
    };

    setIsLoading(true);

    const res = await updateStep(5, payload);

    setIsLoading(false);

    if (res) {
      toast.success("Form submitted successfully!");
      router.push("/thankyou-page/thank-you");
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
            onClick={() => router.push("/audit/your-goals")}
          />

          {/* Step Indicator */}
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 5</span>
          </div>

          <div className="custom-left-border">
            <h1 className="heading-systems">Confirmation + CTA</h1>
          </div>

          {/* SUMMARY INPUT */}
          <p className="form-subheading">Summary of submitted info</p>

          <div className="select-wrapper">
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={5}
              className={`custom-select ${errors.summary ? "input-error" : ""}`} // <-- NEW
              placeholder="Anything you want to add..."
            />
            {errors.summary && <p className="error-text">{errors.summary}</p>}{" "}
            {/* <-- NEW */}
          </div>

          {/* AGREEMENT */}
          <div className="mt-6">
            <label className="flex items-start gap-3 text-base">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className={`mt-1 ${errors.agreed ? "input-error" : ""}`} // <-- NEW
              />
              <span>
                I understand that GTW is a high-performance, hands-on
                environment and I’m excited to contribute meaningfully.
              </span>
            </label>
            {errors.agreed && <p className="error-text">{errors.agreed}</p>}{" "}
            {/* <-- NEW */}
          </div>

          {/* SUBMIT */}
          <button
            className="next-button"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </>
  );
}
