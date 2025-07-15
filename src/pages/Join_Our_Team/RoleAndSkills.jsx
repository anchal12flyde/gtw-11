"use client";

import { useState } from 'react';
import { ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { useRouter } from 'next/navigation';
import { Upload } from 'lucide-react';

const skillsList = [
  "React", "Node.js", "Figma", "MongoDB", "TypeScript", "Webflow",
  "Firebase", "Express.js", "Git"
];

export default function RoleAndSkills() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [resume, setResume] = useState(null);

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }
    setResume(file);
  };

  const handleNext = () => {
    console.log({
      role: selectedOption,
      experience,
      selectedSkills,
      resume
    });

    router.push('/Join_Our_Team/IntentAndFit');
  };

  return (
    <>
      <Header />
      <div className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container">
          <ArrowLeft
            className="cursor-pointer mb-5 text-gray-400"
            size={30}
            onClick={() => router.push('/Join_Our_Team/PersonalDetails')}
          />
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 2</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Role & Skills</h1>
          </div>

          <p className="form-subheading">Which role are you applying for?</p>
          <div className="select-wrapper">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="custom-select"
            >
              <option value="">Select</option>
              <option value="Backend">Backend Dev</option>
              <option value="Native">React Native Dev</option>
              <option value="UI/UX">UI/UX Designer</option>
              <option value="Executive">Executive Assistant</option>
              <option value="Manager">Project Manager</option>
              <option value="Frontend">Frontend Dev</option>
              <option value="Junior">Junior Dev</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown className="chevron-icon" size={20} />
          </div>

          <p className="form-subheading ">How many years of experience do you have?</p>
          <div className="space-y-2 select-wrapper">
            {["0–1", "1–3", "3–5", "5+"].map((range) => (
              <label key={range} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="experience"
                  value={range}
                  checked={experience === range}
                  onChange={(e) => setExperience(e.target.value)}
                   className="form-radio text-yellow-500"
                />
                 <span className="text-sm">{range}</span>
              </label>
            ))}
          </div>

         
          <p className="form-subheading">Core Skills / Tech Stack</p>
          <div className="space-y-2 select-wrapper">
            {skillsList.map((skill) => (
              <label key={skill} className="flex items-center gap-2 cursor-pointer">
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


        <p className="form-subheading">Upload Resume (PDF only)</p>
        <label htmlFor="resumeUpload" className="custom-upload-btn">
                <Upload size={18} className="mr-2" />
                Upload
                </label>
                <input
                id="resumeUpload"
                type="file"
                accept=".pdf"
                onChange={handleResumeUpload}
                className="hidden"
                />

                {resume && (
                <p className="text-md mt-6">
                    {resume.name} uploaded
                </p>
                )}

          
          <button className="next-button" onClick={handleNext}>
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
