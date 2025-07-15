"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedInput from '../Animation/AnimatedInput';

const skillsList = [
  "Brand Identity", "UI/UX Design", "Web Design", "Motion Graphics", "Illustration", "Strategy",
  "Copywriting", "Other"
];

export default function Partnership() {
   const router = useRouter();
   const [intentText, setIntentText] = useState('');
  const [projectText, setProjectText] = useState('');
   const [selectedSkills, setSelectedSkills] = useState([]);

    const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };


  const handleNext = () => {
    router.push('/Agency_Partnership/ProjectExamples'); 
  };

  return (
<>
 <Header/>
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
             <ArrowLeft
          className="cursor-pointer mb-5 text-gray-400"
          size={30}
          onClick={() => router.push('/Agency_Partnership/AgencyDetails')} 
        />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 2</span>
          </div>
         <div className="custom-left-border">  
        <h1 className="heading-systems">
          Partnership Fit
        </h1>
      </div> 

      <p className="form-subheading">What do you specialize in?</p>
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

           <p className="form-subheading ">What do you usually NOT do?</p>
          <div className="select-wrapper">
          <textarea
            value={intentText}
            onChange={(e) => setIntentText(e.target.value)}
            rows={2}
            className="custom-select"
            placeholder="Tell us  ..."
          />
          </div>

          <p className="form-subheading">Have you worked with dev partners before?</p>
            <div className="select-wrapper">
                       <AnimatedInput placeholder="Yes/No" />
                   </div>
            <p className="form-subheading ">What type of work would you love to collaborate on?</p>
          <div className="select-wrapper">
          <textarea
            value={projectText}
            onChange={(e) => setProjectText(e.target.value)}
            rows={2}
            className="custom-select"
            placeholder="Tell us  ..."
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
