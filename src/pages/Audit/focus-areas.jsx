"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedInput from '../animation/animated-input';
import Head from 'next/head';

const skillsList = [
  "UI/UX", "Performance", "Conversion Optimization", "Accessibility", "Tech Stack / Code Review", "Competitor Comparison",
];

export default function FocusAreas() {
   const router = useRouter();
   const [intentText, setIntentText] = useState('');
   const [selectedSkills, setSelectedSkills] = useState([]);

  const handleNext = () => {
    router.push('/audit/your-goals'); 
  };
  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/audit/your-product")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 3</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Focus Areas</h1>
          </div>
          <p className="form-subheading ">What kind of audit do you need?</p>

          <div className="space-y-2 select-wrapper">
            {skillsList.map((skill) => (
              <label
                key={skill}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleSkillToggle(skill)}
                  className="form-radio text-yellow-500"
                />
                {skill}
              </label>
            ))}
          </div>

          <p className="form-subheading ">Optionally</p>
          <div className="select-wrapper">
            <textarea
              value={intentText}
              onChange={(e) => setIntentText(e.target.value)}
              rows={5}
              className="custom-select"
              placeholder="Other – please specify"
            />
          </div>

          <button onClick={handleNext} className="next-button">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
