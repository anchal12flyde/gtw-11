"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function PeronalDetails() {
   const router = useRouter();

  const handleNext = () => {
    router.push('/Join_Our_Team/RoleAndSkills'); 
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
          Personal Details
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
             <p className="form-subheading">Phone Number</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your phone number"
                className="custom-select"
            />
            </div>
            <p className="form-subheading">LinkedIn Profile</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your linkedIn profile"
                className="custom-select"
            />
            </div>
            <p className="form-subheading">Portfolio or GitHub (if applicable)</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your portfolio or gitHub"
                className="custom-select"
            />
            </div>  
            <p className="form-subheading">Current Location</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Enter your current location"
                className="custom-select"
            />
            </div>
            <p className="form-subheading">Willing to relocate to Gurgaon?</p>
            <div className="select-wrapper">
            <input
                type="text"
                placeholder="Yes/No"
                className="custom-select"
            />
            </div>
        
            <button  onClick={handleNext} className="next-button">
                Next <ArrowRight size={16} />
            </button>
     
    </div>
    </div>

</>
  );
}
