"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Head from "next/head";
import { useAuditForm } from "@/context"; // CONTEXT API

export default function Confirmation() {
  const router = useRouter();

  // ---------------- Local States ----------------
  const [summary, setSummary] = useState("");
  const [agreed, setAgreed] = useState(false);

  // ---------------- Context ----------------
  const { updateStep, formId } = useAuditForm();

  // ---------------- Submit Handler ----------------
  const handleSubmit = async () => {
    if (!agreed) {
      toast.error("Please confirm your agreement to submit.");
      return;
    }

    if (!formId) {
      toast.error("Form session missing — restart the audit.");
      return;
    }

    const payload = {
      summary,
      agreed: true,
    };

    const res = await updateStep(5, payload);

    if (res) {
      toast.success("Form submitted successfully!");

      // Redirect to homepage or success page
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Header />

      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/audit-temp/your-goals")}
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
              className="custom-select"
              placeholder="Anything you want to add..."
            />
          </div>

          {/* AGREEMENT */}
          <div className="mt-6">
            <label className="flex items-start gap-3 text-base">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1"
              />
              <span>
                I understand that GTW is a high-performance, hands-on
                environment and I’m excited to contribute meaningfully.
              </span>
            </label>
          </div>

          {/* SUBMIT */}
          <button className="next-button" onClick={handleSubmit}>
            Submit <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
