"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedInput from '../Animation/AnimatedInput';


export default function PeronalDetails() {
   const router = useRouter();

  const handleNext = () => {
    router.push('/Join_Our_Team/RoleAndSkills'); 
  };

  return (
    <>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 1</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Personal Details</h1>
          </div>
          <div className="select-wrapper">
            <AnimatedInput placeholder="Enter your name" />
          </div>
          <div className="select-wrapper">
            <AnimatedInput placeholder="Enter your email address" />
          </div>
          <div className="select-wrapper">
            <AnimatedInput placeholder="Enter your Phone number" />
          </div>
          <div className="select-wrapper">
            <AnimatedInput placeholder="Enter your Linkedin Profile" />
          </div>
          <div className="select-wrapper">
            <AnimatedInput placeholder="Enter your Portfolio or Github profile" />
          </div>
          <div className="select-wrapper">
            <AnimatedInput placeholder="Enter your current location" />
          </div>
          <p className="form-subheading">Willing to relocate to Gurgaon?</p>
          <div className="select-wrapper">
            <input type="text" placeholder="Yes/No" className="custom-select" />
          </div>

          <button onClick={handleNext} className="next-button">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
