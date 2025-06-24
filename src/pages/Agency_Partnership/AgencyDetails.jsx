"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function AgencyDetails() {
   const router = useRouter();
   const [startTime, setStartTime] = useState('');

  const handleNext = () => {
    router.push('/Agency_Partnership/Partnership'); 
  };

  return (
<>
 <Header/>
      <div className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container ">
             <ArrowLeft
          className="cursor-pointer mb-5 text-gray-400"
          size={30}
          onClick={() => router.push('/')} 
        />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 1</span>
          </div>
         <div className="custom-left-border">  
        <h1 className="heading-systems">
          Studio / Agency Details
        </h1>
      </div>    
          <p className="form-subheading">Agency / Studio Name</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your Agency / Studio Name"
                className="custom-select"
            />
            </div>
            <p className="form-subheading">Website or Portfolio</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your Website or Portfolio url"
                className="custom-select"
            />
            </div>
             <p className="form-subheading">Instagram / Dribbble (optional) </p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your Instagram / Dribbble"
                className="custom-select"
            />
            </div>
            <p className="form-subheading">City & Country</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your City & Country"
                className="custom-select"
            />
            </div>
            <p className="form-subheading ">
           Team Size
          </p>
          <div className="space-y-2 select-wrapper">
                {['1', ' 2–5', '5–15','15+'].map((option) => (
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
           
        
            <button  onClick={handleNext} className="next-button">
                Next <ArrowRight size={16} />
            </button>
     
    </div>
    </div>

</>
  );
}
