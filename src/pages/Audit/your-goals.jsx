"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedInput from '../animation/animated-input';
import Head from 'next/head';


export default function YourGoals() {
   const router = useRouter();
   const [intentText, setIntentText] = useState('');
   const [experience, setExperience] = useState("");
   const [otherText, setOtherText] = useState("");

  const handleNext = () => {
    router.push('/Audit/Confirmation'); 
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/Audit/focus-areas")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 4</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Your Goals</h1>
          </div>
          <p className="form-subheading ">What’s your primary goal? </p>
          <div className="space-y-2 select-wrapper">
            {[
              "Increase signups",
              "Improve retention",
              "Boost sales",
              "Launch successfully",
              "Other (text)",
            ].map((range) => (
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

            {experience === "Other (text)" && (
              <AnimatedInput
                type="text"
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
                placeholder="Please specify"
                className="custom-select"
              />
            )}
          </div>

          <p className="form-subheading ">
            Any specific challenges you’re facing?
          </p>
          <div className="select-wrapper">
            <textarea
              value={intentText}
              onChange={(e) => setIntentText(e.target.value)}
              rows={5}
              className="custom-select"
              placeholder="Tell us  ..."
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
