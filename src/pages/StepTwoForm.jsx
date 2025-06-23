
"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function StepTwoForm() {
   const router = useRouter();
    const [companyType, setCompanyType] = useState('');
  const [startTime, setStartTime] = useState('');

  return (
<>

 <Header/>
      <div className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container ">
             <ArrowLeft
          className="cursor-pointer mb-5 text-gray-400"
          size={30}
          onClick={() => router.push('/StepOneForm')} 
        />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 2</span>
          </div>
         <div className="custom-left-border">  
        <h1 className="heading-systems">
          Project Overview
        </h1>
      </div>    
          <p className="form-subheading">Full Name</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your name"
                className="custom-select"
            />
            </div>
            <p className="form-subheading">Email Address</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your email address"
                className="custom-select"
            />
            </div>
             <p className="form-subheading">Company Name</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your company name"
                className="custom-select"
            />
            </div>

            <p className="form-subheading   ">What best describes your company?</p>
                <div className="space-y-2 select-wrapper">
                {['Startup', 'SME', 'Large Enterprise', 'Individual Founder'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="companyType"
                        value={option}
                        checked={companyType === option}
                        onChange={() => setCompanyType(option)}
                        className="form-radio text-yellow-500"
                    />
                    <span className="text-sm">{option}</span>
                    </label>
                ))}
                </div>

                <p className="form-subheading ">When do you want to start?</p>
                <div className="space-y-2 select-wrapper">
                {['Immediately', 'Within 30 days', 'In 1–3 months', 'Just exploring'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="startTime"
                        value={option}
                        checked={startTime === option}
                        onChange={() => setStartTime(option)}
                        className="form-radio text-yellow-500"
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
