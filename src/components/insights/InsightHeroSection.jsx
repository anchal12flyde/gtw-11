'use client'
import Link from 'next/link';

export default function InsightHeroSection() {
  return (
    <div className="util-flex util-flex-1 util-mx-1-5">
      <div className="background-hero">
        <img
          src="/images/insights_bg.png"
          alt="Insight Hero"
          className="w-full h-auto object-cover"
        />
        <div className="insight-card">
          <div className="insight-tags">
            <span>Mobile App</span>
            <span>Mobile App</span>
          </div>
          <div className="w-[200px] sm:w-[400px]">
             <h2 className=''>Design Slow. Build Smart. Launch Fast.</h2>
          <Link href="#" className="insight-link">Read More</Link>

          </div>
         
        </div>
      </div>
    </div>
  )
}
