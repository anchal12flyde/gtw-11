"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedInput from '../Animation/AnimatedInput';


export default function YourProduct() {
   const router = useRouter();
   const [intentText, setIntentText] = useState('');
   const [experience, setExperience] = useState("");

  const handleNext = () => {
    router.push('/Audit/FocusAreas'); 
  };

  return (
    <>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/Audit/AboutYou")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 2</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Your Product</h1>
          </div>
          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter Product name"
              type="text"
              name="productname"
              autoComplete="name"
            />
          </div>
          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter  Website/App Link"
              type="link"
              name="link"
              autoComplete="link"
            />
          </div>
          <p className="form-subheading ">Platform </p>
          <div className="space-y-2 select-wrapper">
            {["IOS", "Android", "Web", "Other"].map((range) => (
              <label
                key={range}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="experience"
                  value={range}
                  checked={experience === range}
                  onChange={(e) => setExperience(e.target.value)}
                  className="form-radio text-yellow-500"
                />
                <span className="text-md">{range}</span>
              </label>
            ))}
          </div>

          <p className="form-subheading ">Brief Description</p>
          <div className="select-wrapper">
            <textarea
              value={intentText}
              onChange={(e) => setIntentText(e.target.value)}
              rows={5}
              className="custom-select"
              placeholder="Tell us what excites you ..."
            />
          </div>

          <button onClick={handleNext} className="next-button">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
