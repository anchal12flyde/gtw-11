'use client'
import BlogCard from "../globalcomponents/BlogCards";




const items = [
  { number: "02", text: "Ready in weeks, not months" },
  { number: "02", text: "Ready in weeks, not months" },
  { number: "02", text: "Ready in weeks, not months" },
  { number: "02", text: "Ready in weeks, not months" },
];
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
export default function ImpactVolume() {
  return (
    <>

    <section className="mt-20 bg-white util-flex util-flex-1 util-mx-1-5 mb-20">
     <div className="px-0 sm:px-30">
        
        <div className="mb-20 blog-reading flex flex-col gap-y-16">
                      <div className="flex flex-col gap-y-6">
                        <h3>Madgicx Overview: AI & Automation for Efficient Meta Ads</h3>
                        <p>Madgicx is an all-in-one ad management platform built specifically for Meta that embeds AI and automation at every level. Rather than manually monitoring dozens of ad sets and creatives, Madgicx continually analyzes account performance
                            and reallocates budgets in real time. Its Autonomous Budget Optimizer uses AI “like a pro media buyer” to distribute spend optimally across campaigns and ad sets . Madgicx also includes advanced tools for creative testing, audience building,
                            and automated rules. For example, Ads Manager 2.0 lets you apply bulk changes and engage AI Bidding algorithms to put more ad spend where it’s most effective . In practice, Madgicx acts as an AI assistant: it spots winning ads and audiences
                            instantly, scales them automatically, and pauses wasteful elements – 24/7. (See the table below for a comparison of manual vs. Madgicx-enhanced tactics.)
                        </p>

                       <div className="flex flex-col gap-y-8">
                            {[...Array(4)].map((_, index) => (
                            <div key={index}>
                               <p><span>Align on True ROI:</span> Optimize for profitability, not vanity metrics.  Madgicx provides click and impression data, but make sure you’re measuring CAC against customer lifetime value (LTV).  As Madgicx’s own blog warns, many marketers 
                               “focus on vanity metrics instead of profitability”. Don’t fall into that trap.  For MVNOs, a customer’s true value (often many times their monthly bill) should guide thresholds and scale decisions.
</p>

                            </div>
                            ))}
                            <p>By adhering to these practices and continuously reviewing Madgicx’s insights, MVNO media buyers can maintain low CAC even as they scale.  The combination of sophisticated audience segmentation, AI budget management, and automated campaign rules 
                                creates a machine for efficiency – dramatically reducing the manual effort needed while delivering measurably lower CAC and higher returns.</p>
                        </div>
                    </div>
                    </div>
      <h2 className="heading-systems text-center  mb-8">
        Impact That Speaks Volumes
      </h2>
      <div className="stack-grid ">
        {items.map((item, index) => (
          <div
            key={index}
            className="stack-volume hover:scale-[1.02] transition-transform">
            <span className="impact-number">{item.number}</span>
            <span className="impact-text">{item.text}</span>
          </div>
        ))}
      </div>

       <div className="mt-20 ">
                       <h1 className="heading-systems">
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
      
    </section>


  
  

</>
  );
}
