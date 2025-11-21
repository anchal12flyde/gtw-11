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

const skillsList = [
  "White label", "Co-branded", "Referral-based", "On-demand support", "Retainers"
];

export default function Collaborate() {
  const router = useRouter();
  const { formData, updateStep4, loading } = useAgencyPartnership();

  const [selectedSkills, setSelectedSkills] = useState([]);    
  const [selectedOption, setSelectedOption] = useState("");
  const [timeZone, setTimeZone] = useState("");

  useEffect(() => {
    if (formData) {
      setSelectedSkills(formData.engagementModels || []);
      setTimeZone(formData.timeZone || '');
      setSelectedOption(formData.howFoundUs || '');
    }
  }, [formData]);

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const validateForm = () => {
    if (selectedSkills.length === 0) {
      toast.error('Please select at least one engagement model');
      return false;
    }
    if (!timeZone.trim()) {
      toast.error('Please enter your time zone');
      return false;
    }
    if (!selectedOption) {
      toast.error('Please tell us how you found us');
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    if (!validateForm()) return;

    const data = {
      engagementModels: selectedSkills,
      timeZone,
      howFoundUs: selectedOption,
    };

    const success = await updateStep4(data);
    if (success) {
      router.push('/agency-partnership/final-step');
    }
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
              onClick={() => router.push("/agency-partnership/agency-details")}
            />
            <div className="step-indicator">
              <span className="dot"></span>
              <span className="step-label">Step 4</span>
            </div>
            <div className="custom-left-border">
              <h1 className="heading-systems">How can we collaborate best?</h1>
            </div>

            <p className="form-subheading">Preferred engagement model</p>
            <div className="space-y-2 select-wrapper">
              {skillsList.map((skill) => (
                <label
                  key={skill}
                  className="flex items-center gap-2 cursor-pointer"
                >
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
              <AnimatedInput
                type="text"
                placeholder="Enter Time Zone"
                className="custom-select"
                value={timeZone}
                onChange={(value) => setTimeZone(value)}
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

            <button
              onClick={handleNext}
              className="next-button"
              disabled={loading}
            >
              {loading ? "Saving..." : "Next"} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </>
    );
}