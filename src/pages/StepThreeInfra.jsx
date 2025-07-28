
"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StepThreeInfra() {
   const router = useRouter();
   const [companyType, setCompanyType] = useState('');
   const [startTime, setStartTime] = useState('');
   const [adminPanel,setAdminPanel] = useState('');
   const [d2cMobileApp,setD2cMobileApp] = useState('');

  return (
    <>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/StepTwoForm")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 3</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Track-Specific Questions</h1>
          </div>
          <p className="form-subheading   ">Type of commerce?</p>
          <div className="space-y-2 select-wrapper">
            {["B2C (D2C)", "B2B", "Hybrid"].map((option) => (
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
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>

          <p className="form-subheading   ">
            Estimated number of SKUs or products?
          </p>
          <div className="space-y-2 select-wrapper">
            {["<100", "100–1000", "1000+"].map((option) => (
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
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
          <p className="form-subheading">Required integrations:</p>
          <div className="space-y-2 select-wrapper">
            {[
              "Razorpay",
              "Uniware",
              "Meta Catalog",
              "Others (input field)",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="adminPanel"
                  value={option}
                  checked={adminPanel === option}
                  onChange={() => setAdminPanel(option)}
                  className="form-radio "
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
          <p className="form-subheading ">Do you also need a D2C mobile app?</p>
          <div className="space-y-2 select-wrapper">
            {["Yes", "NO"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="d2cMobileApp"
                  value={option}
                  checked={d2cMobileApp === option}
                  onChange={() => setD2cMobileApp(option)}
                  className="form-radio "
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>

          <button className="next-button">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
