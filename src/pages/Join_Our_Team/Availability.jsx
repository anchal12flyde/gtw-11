"use client";

import { useState } from 'react';
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from 'next/navigation';



export default function Availability() {
 const router = useRouter();
  const [startTime, setStartTime] = useState('');

  const handleNext = () => {
    router.push('/Join_Our_Team/FinalStep');
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
            <span className="step-label">Step 4</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems"> Availability</h1>
          </div>

          
          <p className="form-subheading ">
            Why do you want to join General Tech Works?
          </p>
          <div className="space-y-2 select-wrapper">
                {['Within a week', 'Within a month', 'Later'].map((option) => (
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

                 <p className="form-subheading">Are you open to freelance / trial assignments?</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="yes / no"
                className="custom-select"
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