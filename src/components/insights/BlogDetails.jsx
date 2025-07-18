'use client'
import { useState, useEffect } from "react";
import Link from "next/link"
import Image from "next/image";
import BlogCard from "@/components/globalcomponents/BlogCards";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function BlogDetails() {
     const [open, setOpen] = useState(false);
    const blogData = [
   {
    imageSrc: "/images/assets/blog_img1.png",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Blog_Details",
  },
  {
    imageSrc: "/images/assets/blog_img2.png",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Blog_Details",
  },
  {
    imageSrc: "/images/assets/blog_img3.png",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Blog_Details",
  },]
   
    return (
        <>
          
            <div className="util-flex util-flex-1 util-mx-1-5">
                <div className="px-0 lg:px-30">
                    
                 
                    <div className="mt-15">

                <div className="flex items-center justify-between mb-6">
               <div className="inline-flex items-center gap-[10px] rounded-[6px] bg-[#F5F5F7] p-[12px_16px]">
                <Link
                    href="/Insights"
                    className="flex items-center text-sm text-[#727171] hover:underline">
                    <img
                    src="/images/assets/backArrow.png"
                    alt="Back"
                    className="w-2 h-3 mr-2"
                    />
                    Back to GTW Blog
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
                                           className="hover:scale-110 transition-transform duration-300"
                                           />
                                           <Image
                                           src="/images/assets/linkedinIcon.png"
                                           alt="LinkedIn"
                                           width={43}
                                           height={43}
                                           className="hover:scale-110 transition-transform duration-300"
                                           />
                                           <Image
                                           src="/images/assets/threadIcon.png"
                                           alt="Threads"
                                           width={43}
                                           height={43}
                                           className="hover:scale-110 transition-transform duration-300"
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
                          <Image
                              src="/images/insights_bg.png"
                              alt="Insight Hero"
                              className="w-full h-auto object-cover"
                              width={1920}  
                              height={1080} 
                              placeholder="empty"
                              priority={false}
                          />
                    </div>
                    
                    

                     <div className="mt-20 blog-reading flex flex-col gap-y-16">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                         transition={{ duration: 0.6, ease: "easeOut" ,delay: 0.1 }}
                    >
                            <p>
                            The MVNO (Mobile Virtual Network Operator) market is fiercely competitive. B2C MVNOs often lack the brand recognition of major carriers, face high churn rates, and must offer aggressive pricing to win customers. This combination 
                            drives customer acquisition costs (CAC) higher than in many industries. In fact, analysts note that because MVNOs compete with established carriers, they “face higher customer acquisition costs, making growth-hacking techniques … 
                            especially valuable to get more impact from lean budgets” . For expert media buyers, cutting CAC by 20–30% can dramatically boost ROI. Meta (Facebook/Instagram) Ads remain a top channel for MVNO growth – but success now hinges on 
                            smart automation and data-driven tactics rather than manual bidding. Madgicx’s AI-powered platform offers just such tools to turbocharge Meta campaigns and squeeze waste out of ad spend.
                        </p>
                    </motion.div>

                                <motion.div
                className="flex flex-col gap-y-6"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                 transition={{ duration: 0.6, ease: "easeOut" ,delay: 0.1 }}
            >
                        <div >
                        <h3>Madgicx Overview: AI & Automation for Efficient Meta Ads</h3>
                        <p className="mt-4">Madgicx is an all-in-one ad management platform built specifically for Meta that embeds AI and automation at every level. Rather than manually monitoring dozens of ad sets and creatives, Madgicx continually analyzes account performance
                            and reallocates budgets in real time. Its Autonomous Budget Optimizer uses AI “like a pro media buyer” to distribute spend optimally across campaigns and ad sets . Madgicx also includes advanced tools for creative testing, audience building,
                            and automated rules. For example, Ads Manager 2.0 lets you apply bulk changes and engage AI Bidding algorithms to put more ad spend where it’s most effective . In practice, Madgicx acts as an AI assistant: it spots winning ads and audiences
                            instantly, scales them automatically, and pauses wasteful elements – 24/7. (See the table below for a comparison of manual vs. Madgicx-enhanced tactics.)
                        </p>
                        </div>
                            <div className="flex flex-col gap-y-8">
                            {[...Array(3)].map((_, index) => (
                           <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                             transition={{ duration: 0.6, ease: "easeOut" ,delay: 0.1 }}
                            >
                                <h4>Budget Allocation</h4>
                               <ul className="mt-2 list-disc pl-5">
                                <li>Manual Meta Ads - Static budgets; manual shifts‍</li>
                                <li>With Madgicx (AI/Automation) - Autonomous Budget Optimizer (ABO) reallocates budget by performance</li>
                                <li>Impact on CAC - Cuts wasted spend; lowers CAC</li>
                                </ul>

                            </motion.div>
                            ))}
                        </div>
                      
                    </motion.div>


                      <motion.div className="flex flex-col gap-y-6" variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                             transition={{ duration: 0.6, ease: "easeOut" ,delay: 0.1 }}>
                        <h3>Madgicx Overview: AI & Automation for Efficient Meta Ads</h3>
                        <p>Madgicx is an all-in-one ad management platform built specifically for Meta that embeds AI and automation at every level. Rather than manually monitoring dozens of ad sets and creatives, Madgicx continually analyzes account performance
                            and reallocates budgets in real time. Its Autonomous Budget Optimizer uses AI “like a pro media buyer” to distribute spend optimally across campaigns and ad sets . Madgicx also includes advanced tools for creative testing, audience building,
                            and automated rules. For example, Ads Manager 2.0 lets you apply bulk changes and engage AI Bidding algorithms to put more ad spend where it’s most effective . In practice, Madgicx acts as an AI assistant: it spots winning ads and audiences
                            instantly, scales them automatically, and pauses wasteful elements – 24/7. (See the table below for a comparison of manual vs. Madgicx-enhanced tactics.)
                        </p>

                       <div className="flex flex-col gap-y-8">
                            {[...Array(4)].map((_, index) => (
                            <div key={index}>
                               <p><span>Align on false ROI:</span> Optimize for profitability, not vanity metrics.  Madgicx provides click and impression data, but make sure you’re measuring CAC against customer lifetime value (LTV).  As Madgicx’s own blog warns, many marketers 
                               “focus on vanity metrics instead of profitability”. Don’t fall into that trap.  For MVNOs, a customer’s false value (often many times their monthly bill) should guide thresholds and scale decisions.
</p>

                            </div>
                            ))}
                            <p>By adhering to these practices and continuously reviewing Madgicx’s insights, MVNO media buyers can maintain low CAC even as they scale.  The combination of sophisticated audience segmentation, AI budget management, and automated campaign rules 
                                creates a machine for efficiency – dramatically reducing the manual effort needed while delivering measurably lower CAC and higher returns.</p>
                        </div>
                    </motion.div>
                  </div>
                   <div className="mt-26">
                       <h1 className="heading-systems text-center">
                           Related Articles
                        </h1>

                         <div className="grid-cols-blog mt-10">
                            {blogData.map((blog, index) => (
                            <BlogCard
                            key={index}
                            imageSrc={blog.imageSrc}
                            title={blog.title}
                            link={blog.link}
                            category="CATEGORY"
                            linkText="Read More"
                            />
                            ))}
                            </div>
                     </div>


                </div>
            </div>
        </>
    )
}
