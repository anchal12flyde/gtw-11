"use client";
import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedInput from '../animation/animated-input';
import Head from 'next/head';
import { useJoinTeam } from '@/context/JoinTeamContext';
import { toast } from 'react-hot-toast';

export default function PeronalDetails() {
  const router = useRouter();
  const { formData, updateFormData, updateStep1, loading } = useJoinTeam();

  const [localData, setLocalData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedinProfile: '',
    portfolioOrGithub: '',
    currentLocation: '',
    willingToRelocate: '',
  });

  useEffect(() => {
    if (formData) {
      setLocalData({
        name: formData.name || '',
        email: formData.email || '',
        phone: formData.phone || '',
        linkedinProfile: formData.linkedinProfile || '',
        portfolioOrGithub: formData.portfolioOrGithub || '',
        currentLocation: formData.currentLocation || '',
        willingToRelocate: formData.willingToRelocate || '',
      });
    }
  }, [formData]);

  const handleInputChange = (field, value) => {
    setLocalData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!localData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!localData.email.trim() || !/\S+@\S+\.\S+/.test(localData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!localData.phone.trim()) {
      toast.error('Please enter your phone number');
      return false;
    }
    if (!localData.currentLocation.trim()) {
      toast.error('Please enter your current location');
      return false;
    }
    if (!localData.willingToRelocate.trim()) {
      toast.error('Please specify if you are willing to relocate');
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    if (!validateForm()) return;

    const success = await updateStep1(localData);
    if (success) {
      router.push("/join-our-team/role-and-skills");
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
            onClick={() => router.push("/")}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 1</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Personal Details</h1>
          </div>
          <div className="select-wrapper">
            <input
              type="text"
              placeholder="Enter your name"
              className="custom-select"
              value={localData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          <div className="select-wrapper">
            <input
              type="email"
              placeholder="Enter your email address"
              className="custom-select"
              value={localData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          <div className="select-wrapper">
            <input
              type="tel"
              placeholder="Enter your Phone number"
              className="custom-select"
              value={localData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
          <div className="select-wrapper">
            <input
              type="url"
              placeholder="Enter your Linkedin Profile"
              className="custom-select"
              value={localData.linkedinProfile}
              onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
            />
          </div>
          <div className="select-wrapper">
            <input
              type="url"
              placeholder="Enter your Portfolio or Github profile"
              className="custom-select"
              value={localData.portfolioOrGithub}
              onChange={(e) => handleInputChange('portfolioOrGithub', e.target.value)}
            />
          </div>
          <div className="select-wrapper">
            <input
              type="text"
              placeholder="Enter your current location"
              className="custom-select"
              value={localData.currentLocation}
              onChange={(e) => handleInputChange('currentLocation', e.target.value)}
            />
          </div>
          <p className="form-subheading">Willing to relocate to Gurgaon?</p>
          <div className="select-wrapper">
            <input
              type="text"
              placeholder="Yes/No"
              className="custom-select"
              value={localData.willingToRelocate}
              onChange={(e) => handleInputChange('willingToRelocate', e.target.value)}
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
