
"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import Link from 'next/link'

export default function StepOneForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();

  const handleNext = () => {
//     if (!selectedOption) return;
//   router.push("/StepTwoForm");
  };

  return (
<>
 
 <Header/>
  <div className=" util-flex util-flex-1 util-mx-1-5 ">
    <div className="step-form-container ">
      <div className="step-indicator">
        <span className="dot"></span>
        <span className="step-label">Step 1</span>
      </div>
     <div className="custom-left-border">  
    <h1 className="heading-systems">
      What are we building together?
    </h1>
  </div>    
      <p className="form-subheading">Select the primary track for your project</p>

      
      <div className="select-wrapper ">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="custom-select "
        >
          <option value="">Select</option>
          <option value="Web">🌐 Web (Flyde Studio – Informational, Brand, Marketing Sites)</option>
          <option value="Mobile">📱 Mobile (Flyde Apps – Native Mobile Apps)</option>
          <option value="SaaS">☁️ SaaS (GTW SaaS Cloud – Launch-Ready SaaS Platforms)</option>
          <option value="Infra">🏬 Infra (ExPro Infra – Scalable E-commerce Solutions)</option>
          <option value="Consult">🧠 Consult (GTW Consult – Digital Transformation & Strategy)</option>
         
        </select>
        <ChevronDown className="chevron-icon" size={20} />
      </div>

     <Link href='/StepTwoForm'>
    <button className="next-button" onClick={handleNext} disabled={!selectedOption}>
        Next <ArrowRight size={16} />
      </button>
      </Link>
    </div>
    </div>
</>
  );
}
