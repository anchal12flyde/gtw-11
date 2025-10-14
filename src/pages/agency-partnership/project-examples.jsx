"use client";
import { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Upload } from 'lucide-react';
import Head from 'next/head';
import { useAgencyPartnership } from '@/context/AgencyPartnershipContext';
import { toast } from 'react-hot-toast';

export default function ProjectExamples() {
  const router = useRouter();
  const { formData, updateStep3, loading } = useAgencyPartnership();

  const [recentProjects, setRecentProjects] = useState('');
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    if (formData) {
      setRecentProjects(formData.recentProjects || '');
    }
  }, [formData]);

  const handlePortfolioUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed");
      return;
    }
    setPortfolio(file);
  };

  const validateForm = () => {
    if (!recentProjects.trim()) {
      toast.error('Please share your recent projects');
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    if (!validateForm()) return;

    const data = {
      recentProjects,
    };

    const success = await updateStep3(data, portfolio);
    if (success) {
      router.push('/agency-partnership/collaborate');
    }
  };

   return (
     <>
       <Head>
         <meta name="robots" content="noindex,nofollow" />
       </Head>
       <Header />
       <div className="util-flex util-flex-1 util-mx-1-5">
         <div className="step-form-container ">
           <ArrowLeft
             className="cursor-pointer mb-5 text-arrow-color"
             size={30}
             onClick={() => router.push("/agency-partnership/partnership")}
           />
           <div className="step-indicator">
             <span className="dot"></span>
             <span className="step-label">Step 3</span>
           </div>
           <div className="custom-left-border">
             <h1 className="heading-systems">Project Examples</h1>
           </div>

           <p className="form-subheading ">
             Share 1–2 recent projects you're proud of (links or description)
           </p>
           <div className="select-wrapper">
             <textarea
               value={recentProjects}
               onChange={(e) => setRecentProjects(e.target.value)}
               rows={2}
               className="custom-select"
               placeholder=" links or description ..."
             />
           </div>

           <p className="form-subheading">Upload Portfolio (PDF only)</p>
           <label htmlFor="portfolioUpload" className="custom-upload-btn">
             <Upload size={18} className="mr-2" />
             Upload
           </label>
           <input
             id="portfolioUpload"
             type="file"
             accept=".pdf"
             onChange={handlePortfolioUpload}
             className="hidden"
           />

           {portfolio && <p className="text-md mt-6">{portfolio.name} uploaded</p>}

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

