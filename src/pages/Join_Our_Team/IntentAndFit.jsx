"use client";

import { useState } from 'react';
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from 'next/navigation';



export default function IntentAndFit() {
 const router = useRouter();
  const [intentText, setIntentText] = useState('');
  const [projectText, setProjectText] = useState('');

  const handleNext = () => {
    router.push('/Join_Our_Team/Availability');
  };

  return (
    <>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container">
          <ArrowLeft
            className="cursor-pointer mb-5 text-gray-400"
            size={30}
            onClick={() => router.push('/Join_Our_Team/RoleAndSkills')}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 3</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Intent & Fit</h1>
          </div>

          <p className="form-subheading ">
            Why do you want to join General Tech Works?
          </p>
           <div className="select-wrapper">
          <textarea
            value={intentText}
            onChange={(e) => setIntentText(e.target.value)}
            rows={5}
            className="custom-select"
            placeholder="Tell us what excites you ..."
          />
          </div>

          <p className="form-subheading">
            What’s a project or product you’re proud of? (link or describe)
          </p>
          <div className="select-wrapper">
          <textarea
            value={projectText}
            onChange={(e) => setProjectText(e.target.value)}
            rows={5}
            className="custom-select"
            placeholder="Describe a project that makes you proud..."
          />
          </div>
          <button className="next-button" onClick={handleNext}>
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
