"use client";
import { useState } from 'react';
import { ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Upload } from 'lucide-react';

export default function ProjectExamples() {
   const router = useRouter();
   const [intentText, setIntentText] = useState('');
    const [resume, setResume] = useState(null);


   const handleNext = () => {
    router.push('/Agency_Partnership/Collaborate'); 
  };

   const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }
    setResume(file);
  };

   return (
  <>
   <Header/>
        <div className="util-flex util-flex-1 util-mx-1-5">
          <div className="step-form-container ">
               <ArrowLeft
            className="cursor-pointer mb-5 text-gray-400"
            size={30}
            onClick={() => router.push('/Agency_Partnership/Partnership')} 
          />
            <div className="step-indicator">
              <span className="dot"></span>
              <span className="step-label">Step 3</span>
            </div>
           <div className="custom-left-border">  
          <h1 className="heading-systems">
            Project Examples
          </h1>
        </div> 

        
           <p className="form-subheading ">Share 1–2 recent projects you're proud of (links or description)</p>
          <div className="select-wrapper">
          <textarea
            value={intentText}
            onChange={(e) => setIntentText(e.target.value)}
            rows={2}
            className="custom-select"
            placeholder=" links or description ..."
          />
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


          <button  onClick={handleNext} className="next-button">
                Next <ArrowRight size={16} />
            </button>
     
    </div>
    </div>

</>
  );
}

