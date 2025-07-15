"use client";

import { useState } from 'react';
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from 'next/navigation';



export default function FinalStep() {
 const router = useRouter();
const [agreed, setAgreed] = useState(false);

  const handleNext = () => {
    if (!agreed) {
      alert("Please confirm your understanding to proceed.");
      return;
    }
    router.push('/ThankYouPage/ThankYou');
  };

  return (
    <>
    <Header />
          <div className="util-flex util-flex-1 util-mx-1-5 ">
            <div className="step-form-container">
              <ArrowLeft
                className="cursor-pointer mb-5 text-gray-400"
                size={30}
                onClick={() => router.push('/Join_Our_Team/IntentAndFit')}
              />
              <div className="step-indicator">
                <span className="dot"></span>
                <span className="step-label">Step 5</span>
              </div>
               <div className="custom-left-border">
            <h1 className="heading-systems">Final Step</h1>
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
                I understand that GTW is a high-performance, hands-on environment and I’m excited to contribute meaningfully.
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
