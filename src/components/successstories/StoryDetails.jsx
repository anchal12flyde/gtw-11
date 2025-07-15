'use client'
import { useState, useEffect } from "react";
import Link from "next/link"
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};


export default function StoryDetails() {
      const [open, setOpen] = useState(false);
    return (
        <>
        <Head>
        <title>Story Details</title>
      </Head>
            <div className="util-flex util-flex-1 util-mx-1-5">
                <div className="px-0 sm:px-30">
              
                    <div className="mt-15">

                <div className="flex items-center justify-between mb-6">
               <div className="inline-flex items-center gap-[10px] rounded-[6px] bg-[#F5F5F7] p-[12px_16px]">
                <Link
                    href="/SuccessStories"
                    className="flex items-center text-sm text-[#727171] hover:underline">
                    <img
                    src="/images/assets/backArrow.png"
                    alt="Back"
                    className="w-2 h-3 mr-2"
                    />
                    Previous
                </Link>
                </div>
                    <div className="flex items-center gap-2 relative perspective">
                        <div
                        className={`absolute left-[-120px] top-0 flex  origin-right flip-container ${
                            open ? "rotate-y-0" : "rotate-y-90"
                        }`}
                        >
                            <Image
                            src="/images/assets/facebookIcon.png"
                            alt="Facebook"
                            width={43}
                            height={43}
                           
                            />
                            <Image
                            src="/images/assets/linkedinIcon.png"
                            alt="LinkedIn"
                            width={43}
                            height={43}
                            
                            />
                            <Image
                            src="/images/assets/threadIcon.png"
                            alt="Threads"
                            width={43}
                            height={43}
                            />
                        </div>

                    
                        <button
                            onClick={() => setOpen(!open)}
                            className="z-10 transition-transform duration-300"
                        >
                            <Image
                            src={
                                open
                                ? "/images/assets/crossIcon.png"
                                : "/images/assets/shareIcon.png"
                            }
                            alt="Toggle Share"
                            width={43}
                            height={43}
                            />
                        </button>

                      
                        <Image
                            src="/images/assets/shareLink.png"
                            alt="Link"
                            width={43}
                            height={43}
                        />
                        </div>

               
               
                </div>

                        <h1 className="heading-systems mb-8">
                            Design Slow. Build Smart. Launch Fast.
                        </h1>
                      <div className="blog-details-text flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
                            <span className="category">Category:</span>
                            <p className="insight-tags" style={{ display: 'flex', gap: '46px', margin: 0 }}>
                            <span>Mobile App</span>
                            <span>Mobile App</span>
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <p>6 min read &nbsp; / &nbsp; July 5, 2025</p>
                        </div>
                        </div>


                    </div>

                    <div className="background-hero mt-16">
                        <img
                            src="/images/success_bg.png"
                            alt="Insight Hero"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    
                    

                <div className="mt-20 blog-reading flex flex-col gap-y-8">
   
      <motion.div
        className="background-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
         transition={{ duration: 0.6, ease: "easeOut" ,delay: 0.2 }}
      >
        <img
          src="/images/assets/success_img.png"
          alt="Insight Hero"
          className="w-full h-auto object-cover pb-4"
        />
        <p>Triarchy co-founder and creative director, Adam Taubenfligel - TRIARCHY</p>
      </motion.div>

     

      <motion.div
        className="flex flex-col gap-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
         transition={{ duration: 0.6, ease: "easeOut" ,delay: 0.1}}
      >
        <div>
          <h3>Madgicx Overview: AI & Automation for Efficient Meta Ads</h3>
          <p className="mt-4">Madgicx is an all-in-one ad management platform...</p>
        </div>

        <div className="flex flex-col gap-y-8">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false}}
              variants={fadeInUp}
               transition={{ duration: 0.6, ease: "easeOut" ,delay: 0.1 }}
            >
              <h4>Budget Allocation</h4>
              <ul className="mt-2 list-disc pl-5">
                <li>Manual Meta Ads - Static budgets; manual shifts‍</li>
                <li>With Madgicx (AI/Automation) - Autonomous Budget Optimizer (ABO)...</li>
                <li>Impact on CAC - Cuts wasted spend; lowers CAC</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

                   


                </div>
            </div>
        </>
    )
}
