"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useJoinTeam } from '@/context/JoinTeamContext';
import { toast } from 'react-hot-toast';

export default function IntentAndFit() {
  const router = useRouter();
  const { formData, updateStep3, loading } = useJoinTeam();

  const [intentText, setIntentText] = useState('');
  const [projectText, setProjectText] = useState('');

  useEffect(() => {
    if (formData) {
      setIntentText(formData.whyJoinGTW || '');
      setProjectText(formData.proudProject || '');
    }
  }, [formData]);

  const validateForm = () => {
    if (!intentText.trim()) {
      toast.error('Please tell us why you want to join GTW');
      return false;
    }
    if (!projectText.trim()) {
      toast.error('Please describe a project you are proud of');
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    if (!validateForm()) return;

    const data = {
      whyJoinGTW: intentText,
      proudProject: projectText,
    };

    const success = await updateStep3(data);
    if (success) {
      router.push("/join-our-team/availability");
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5 ">
        <div className="step-form-container">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/join-our-team/role-and-skills")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 3</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Intent & Fit</h1>
          </div>

          <p className="form-subheading ">
            Why do you want to join General Tech Works?
          </p>
          <div className="select-wrapper">
            <textarea
              value={intentText}
              onChange={(e) => setIntentText(e.target.value)}
              rows={5}
              className="custom-select"
              placeholder="Tell us what excites you ..."
            />
          </div>

          <p className="form-subheading">
            What’s a project or product you’re proud of? (link or describe)
          </p>
          <div className="select-wrapper">
            <textarea
              value={projectText}
              onChange={(e) => setProjectText(e.target.value)}
              rows={5}
              className="custom-select"
              placeholder="Describe a project that makes you proud..."
            />
          </div>
          <button 
            className="next-button" 
            onClick={handleNext}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Next'} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
