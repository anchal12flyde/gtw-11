"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const skillsList = [
  "White label", "Co-branded", "Referral-based", " On-demand support", "Retainers"
];

export default function Collaborate() {
   const router = useRouter();
   const [selectedSkills, setSelectedSkills] = useState([]);    
     const [selectedOption, setSelectedOption] = useState("");

    const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };


  const handleNext = () => {
    router.push('/Agency_Partnership/FinalStep'); 
  };

    return (
  <>
   <Header/>
        <div className="util-flex util-flex-1 util-mx-1-5">
          <div className="step-form-container ">
               <ArrowLeft
            className="cursor-pointer mb-5 text-gray-400"
            size={30}
            onClick={() => router.push('/Agency_Partnership/AgencyDetails')} 
          />
            <div className="step-indicator">
              <span className="dot"></span>
              <span className="step-label">Step 4</span>
            </div>
           <div className="custom-left-border">  
          <h1 className="heading-systems">
            How can we collaborate best?
          </h1>
        </div> 
  
        <p className="form-subheading">Preferred engagement model</p>
            <div className="space-y-2 select-wrapper">
              {skillsList.map((skill) => (
                <label key={skill} className="flex items-center gap-2 cursor-pointer">
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

             <p className="form-subheading ">Time zone / availability</p>
          <div className="select-wrapper">
          <input
                type="text"
                placeholder="Enter your email address"
                className="custom-select"
            />

          </div>

          <p className="form-subheading">How did you find us?</p>
          <div className="select-wrapper">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="custom-select"
            >
              <option value="">Select</option>
              <option value="Instagram">Instagram</option>
              <option value="Referral">Referral</option>
              <option value="Behance">Behance </option>
              <option value="Web">Web </option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown className="chevron-icon" size={20} />
          </div>


            
        <button  onClick={handleNext} className="next-button">
                Next <ArrowRight size={16} />
            </button>
     
    </div>
    </div>

</>
  );
}