
"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

export default function StepFive() {
   const router = useRouter();

   const handleNext = () => {
    router.push('/thankyou-page/thank-you'); 
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
            className="cursor-pointer mb-5 text-gray-400"
            size={30}
            onClick={() => router.push("/step-four")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 5</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Final Notes & Submit</h1>
          </div>
          <p className="form-subheading   ">
            Any additional notes or context we should know?
          </p>
          <input type="text" name="admiredSites" className="input-box" />

          <button onClick={handleNext} className="next-button">
            Submit <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}