"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';


export default function Confirmation() {
   const router = useRouter();
   const [intentText, setIntentText] = useState('');
   const [agreed, setAgreed] = useState(false);

  const handleNext = () => {
  if (!agreed) {
    toast.error("Please confirm your understanding to proceed.");
    return;
  }
  router.push('/');
};

  return (
    <>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/Audit/YourGoals")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 5</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Confirmation + CTA</h1>
          </div>
          <p className="form-subheading ">Summary of submitted info</p>
          <div className="select-wrapper">
            <textarea
              value={intentText}
              onChange={(e) => setIntentText(e.target.value)}
              rows={5}
              className="custom-select"
              placeholder="Tell us  ..."
            />
          </div>

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

          <button className="next-button" onClick={handleNext}>
            Submit <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
