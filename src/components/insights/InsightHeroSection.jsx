'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function InsightHeroSection() {
  return (
    <div className="util-flex util-flex-1 util-mx-1-5 mt-15">
      <div className="background-hero">
         <Image
        src="/images/insights_bg.png"
        alt="Insight Hero"
        className="w-full h-auto object-cover"
        width={1920}  
        height={1080} 
        placeholder="empty"
        priority
        />
        <div className="insight-card space-y-4">
          <div className="insight-tags">
            <span>Mobile App</span>
            <span>Mobile App</span>
          </div>
          <div className="content-wrapper space-y-10">
             <h2>Design Slow. Build Smart. Launch Fast.</h2>
          <Link href="#" className="insight-link">Read More</Link>

          </div>
         
        </div>
      </div>
    </div>
  )
}
