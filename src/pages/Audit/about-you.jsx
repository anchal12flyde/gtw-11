"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedInput from '../animation/animated-input';
import CountryCode from '@/components/globalcomponents/CountryCodeSelector';
import Head from 'next/head';


export default function AboutYou() {
   const router = useRouter();
   const [phone, setPhone] = useState('');

  const handleNext = () => {
    router.push('/audit/your-product'); 
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container ">
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 1</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">About You</h1>
          </div>
          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter your Full name"
              type="text"
              name="fullName"
              autoComplete="name"
            />
          </div>
          <div className="select-wrapper">
            <AnimatedInput
              placeholder="Enter your email address"
              type="email"
              name="email"
              autoComplete="email"
            />
          </div>
          <div className="select-wrapper ">
            <CountryCode value={phone} onChange={setPhone} />
          </div>

          <button onClick={handleNext} className="next-button">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
