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
  "Brand Identity", "UI/UX Design", "Web Design", "Motion Graphics", "Illustration", "Strategy",
  "Copywriting", "Other"
];

export default function Partnership() {
  const router = useRouter();
  const { formData, updateStep2, loading } = useAgencyPartnership();

  const [whatNotDo, setWhatNotDo] = useState('');
  const [collaborationType, setCollaborationType] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [workedWithDevPartners, setWorkedWithDevPartners] = useState('');

  useEffect(() => {
    if (formData) {
      setSelectedSkills(formData.specializations || []);
      setWhatNotDo(formData.whatNotDo || '');
      setWorkedWithDevPartners(formData.workedWithDevPartners || '');
      setCollaborationType(formData.collaborationType || '');
    }
  }, [formData]);

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const validateForm = () => {
    if (selectedSkills.length === 0) {
      toast.error('Please select at least one specialization');
      return false;
    }
    if (!whatNotDo.trim()) {
      toast.error('Please tell us what you usually do not do');
      return false;
    }
    if (!workedWithDevPartners.trim()) {
      toast.error('Please specify if you have worked with dev partners');
      return false;
    }
    if (!collaborationType.trim()) {
      toast.error('Please tell us what type of work you would love to collaborate on');
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    if (!validateForm()) return;

    const data = {
      specializations: selectedSkills,
      whatNotDo,
      workedWithDevPartners,
      collaborationType,
    };

    const success = await updateStep2(data);
    if (success) {
      router.push('/agency-partnership/project-examples');
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
            <span className="step-label">Step 2</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Partnership Fit</h1>
          </div>

          <p className="form-subheading">What do you specialize in?</p>
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

          <p className="form-subheading ">What do you usually NOT do?</p>
          <div className="select-wrapper">
            <textarea
              value={whatNotDo}
              onChange={(e) => setWhatNotDo(e.target.value)}
              rows={2}
              className="custom-select"
              placeholder="Tell us  ..."
            />
          </div>

          <p className="form-subheading">
            Have you worked with dev partners before?
          </p>
          <div className="select-wrapper">
            <input
              type="text"
              placeholder="Yes/No"
              className="custom-select"
              value={workedWithDevPartners}
              onChange={(e) => setWorkedWithDevPartners(e.target.value)}
            />
          </div>
          <p className="form-subheading ">
            What type of work would you love to collaborate on?
          </p>
          <div className="select-wrapper">
            <textarea
              value={collaborationType}
              onChange={(e) => setCollaborationType(e.target.value)}
              rows={2}
              className="custom-select"
              placeholder="Tell us  ..."
            />
          </div>

          <button 
            onClick={handleNext} 
            className="next-button"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Next'} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
