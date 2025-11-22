"use client";
import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedInput from '../animation/animated-input';
import Head from 'next/head';
import { useAgencyPartnership } from '@/context/AgencyPartnershipContext';
import { toast } from 'react-hot-toast';
import { motion } from "framer-motion";

export default function AgencyDetails() {
  const router = useRouter();
  const { formData, updateStep1, loading } = useAgencyPartnership();

  const [localData, setLocalData] = useState({
    agencyName: '',
    email: '',
    websiteUrl: '',
    socialMedia: '',
    location: '',
    teamSize: '',
  });

  useEffect(() => {
    if (formData) {
      setLocalData({
        agencyName: formData.agencyName || "",
        email: formData.email || "",
        websiteUrl: formData.websiteUrl || "",
        socialMedia: formData.socialMedia || "",
        location: formData.location || "",
        teamSize: formData.teamSize || "",
      });
    }
  }, [formData]);

  const handleInputChange = (field, value) => {
    setLocalData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!localData.agencyName.trim()) {
      toast.error('Please enter your agency/studio name');
      return false;
    }
    if (!localData.email.trim()) {
      toast.error("Please enter your Email");
      return false;
    }
    if (!localData.location.trim()) {
      toast.error('Please enter your location');
      return false;
    }
    if (!localData.teamSize) {
      toast.error('Please select your team size');
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    if (!validateForm()) return;

    const success = await updateStep1(localData);
    if (success) {
      router.push('/agency-partnership/partnership');
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Header />
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container ">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 1</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Studio / Agency Details</h1>
          </div>
          <div className="select-wrapper">
            <AnimatedInput
              type="text"
              placeholder="Enter your Agency/Studio name"
              className="custom-select"
              value={localData.agencyName}
              onChange={(value) => handleInputChange("agencyName", value)}
            />
          </div>

          <div className="select-wrapper">
            <AnimatedInput
              type="text"
              placeholder="Enter your Email"
              className="custom-select"
              value={localData.email}
              onChange={(value) => handleInputChange("email", value)}
            />
          </div>

          <div className="select-wrapper">
            <AnimatedInput
              type="url"
              placeholder="Enter your Website or Portfolio URL"
              className="custom-select"
              value={localData.websiteUrl}
              onChange={(value) => handleInputChange("websiteUrl", value)}
            />
          </div>

          <div className="select-wrapper">
            <AnimatedInput
              type="text"
              placeholder="Enter your Instagram or Dribble"
              className="custom-select"
              value={localData.socialMedia}
              onChange={(value) => handleInputChange("socialMedia", value)}
            />
          </div>

          <div className="select-wrapper">
            <AnimatedInput
              type="text"
              placeholder="Enter your City or Country"
              className="custom-select"
              value={localData.location}
              onChange={(value) => handleInputChange("location", value)}
            />
          </div>

          <p className="form-subheading ">Team Size</p>
          <div className="space-y-2 select-wrapper">
            {["1", "2–5", "5–15", "15+"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="teamSize"
                  value={option}
                  checked={localData.teamSize === option}
                  onChange={() => handleInputChange("teamSize", option)}
                  className="form-radio text-yellow-500"
                />
                <span className="text-md">{option}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="next-button"
            disabled={loading}
          >
            {loading ? "Saving..." : "Next"} <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </>
  );
}
