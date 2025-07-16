'use client'
import { useState } from 'react'
import Link from 'next/link'


export default function ProductThinking() {


  return (
        <section className="feature-section util-flex util-flex-1 util-mx-1-5 mt-26 ">
      <div className="flex flex-col md:flex-row items-start sm:items-center  gap-4 md:gap-10">
  <div >
    <img src="/images/assets/mobileIcon1.png" className="w-25 h-25 md:w-30 md:h-30" alt="Icon" />
  </div>

  <div>
    <h2 className="feature-title">Product Thinking First</h2>
    <p className="feature-subtitle">We help you refine scope, not just ship tasks</p>
  </div>
</div>

          <div className="flex flex-col md:flex-row items-start sm:items-center md:justify-items-start gap-4 md:gap-10">
            <div>
    <img src="/images/assets/mobileIcon2.png" className="w-25 h-25 md:w-30 md:h-30" alt="Icon" />
  </div>
          <div>
        <h2 className="feature-title">Cross-Platform Mastery</h2>
            <p className="feature-subtitle">iOS + Android from a single, native-feeling codebase</p>
          </div>
            
          </div>
          <div className="flex flex-col md:flex-row items-start sm:items-center md:justify-items-start gap-4 md:gap-10">
            <div>
            <img src="/images/assets/mobileIcon3.png" className="w-25 h-25 md:w-30 md:h-30" alt="Icon" />
          </div>
          <div>
             <h2 className="feature-title">QA + Scale Support</h2>
            <p className="feature-subtitle">From first deploy to v2, we are with you at every build stage</p>
          </div>
         
          </div>
        </section>
       
      )
   }
