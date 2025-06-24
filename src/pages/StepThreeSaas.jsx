
"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StepThreeSaas() {
   const router = useRouter();
   const [companyType, setCompanyType] = useState('');
   const [startTime, setStartTime] = useState('');
   const [adminPanel,setAdminPanel] = useState('');

  return (
<>

 <Header/>
  <div className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container ">
             <ArrowLeft
          className="cursor-pointer mb-5 text-gray-400"
          size={30}
          onClick={() => router.push('/StepTwoForm')} 
        />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 3</span>
          </div>
         <div className="custom-left-border">  
        <h1 className="heading-systems">
          Track-Specific Questions
        </h1>
      </div>  
       <p className="form-subheading   ">Is this a fresh MVP or rebuilding an existing tool?</p>
                <div className="space-y-2 select-wrapper">
                {['New MVP', 'Rebuild'].map((option) => (
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

                <p className="form-subheading   ">Core functionality?</p>
                <div className="space-y-2 select-wrapper">
                {['User dashboards', 'Admin panel', 'Payments & subscriptions','Analytics or reports'].map((option) => (
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
                <p className="form-subheading">Do you require multi-tenancy (multiple clients under one system)?</p>
                <div className="space-y-2 select-wrapper">
                {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="adminPanel"
                        value={option}
                        checked={adminPanel === option}
                        onChange={() => setAdminPanel(option)}
                        className="form-radio text-yellow-500"
                    />
                    <span className="text-sm">{option}</span>
                    </label>
                ))}
                </div>
                <p className="form-subheading ">Any examples of what you're trying to build?</p>
                <input
                    type="text"
                    name="admiredSites"
                    className="input-box"
                />


      
            <button className="next-button">
                Next <ArrowRight size={16} />
            </button>
     
    </div>
    </div>


 
 </>
  );
}
