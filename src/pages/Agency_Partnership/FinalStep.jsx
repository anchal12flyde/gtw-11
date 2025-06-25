"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function PeronalDetails() {
   const router = useRouter();

    const handleNext = () => {
       router.push('/ThankYouPage/ThankYou'); 
     };
   
     return (
   <>
    <Header/>
    <div className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container ">
             <ArrowLeft
          className="cursor-pointer mb-5 text-gray-400"
          size={30}
          onClick={() => router.push('/Agency_Partnership/Collaborate')} 
        />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 5</span>
          </div>
         <div className="custom-left-border">  
        <h1 className="heading-systems">
           Final Step
        </h1>
      </div>    

       <p className="form-subheading">We believe great partnerships start with clarity and respect. If that sounds like your vibe, let’s talk.</p>

            <button  onClick={handleNext} className="next-button">
                Submit <ArrowRight size={16} />
            </button>
     
    </div>
    </div>

</>
  );
}
