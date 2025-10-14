"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from 'next/navigation';
import AnimatedInput from '../animation/animated-input';
import Head from 'next/head';
import { useJoinTeam } from '@/context/JoinTeamContext';
import { toast } from 'react-hot-toast';

export default function Availability() {
  const router = useRouter();
  const { formData, updateStep4, loading } = useJoinTeam();

  const [startTime, setStartTime] = useState('');
  const [openToFreelance, setOpenToFreelance] = useState('');

  useEffect(() => {
    if (formData) {
      setStartTime(formData.startTime || '');
      setOpenToFreelance(formData.openToFreelance || '');
    }
  }, [formData]);

  const validateForm = () => {
    if (!startTime) {
      toast.error('Please select when you can start');
      return false;
    }
    if (!openToFreelance.trim()) {
      toast.error('Please specify if you are open to freelance assignments');
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    if (!validateForm()) return;

    const data = {
      startTime,
      openToFreelance,
    };

    const success = await updateStep4(data);
    if (success) {
      router.push("/join-our-team/final-step");
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
            <span className="step-label">Step 4</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems"> Availability</h1>
          </div>

          <p className="form-subheading ">When can you start?</p>
          <div className="space-y-2 select-wrapper">
            {["Within a week", "Within a month", "Later"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="startTime"
                  value={option}
                  checked={startTime === option}
                  onChange={() => setStartTime(option)}
                  className="form-radio "
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>

          <p className="form-subheading">
            Are you open to freelance / trial assignments?
          </p>
          <div className="select-wrapper">
            <input
              type="text"
              placeholder="Yes/No"
              className="custom-select"
              value={openToFreelance}
              onChange={(e) => setOpenToFreelance(e.target.value)}
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