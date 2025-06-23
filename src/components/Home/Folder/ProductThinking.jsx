'use client'
import { useState } from 'react'
import Link from 'next/link'


export default function mobile_apps() {


  return (


        <section className="feature-section util-flex util-flex-1 util-mx-1-5 ">
          <div className="feature-item   ">
            <h2 className="feature-title">Product Thinking First</h2>
            <p className="feature-subtitle">We help you refine scope, not just ship tasks</p>
          </div>
          <div className="feature-item ">
            <h2 className="feature-title">Cross-Platform Mastery</h2>
            <p className="feature-subtitle">iOS + Android from a single, native-feeling codebase</p>
          </div>
          <div className="feature-item ">
            <h2 className="feature-title">QA + Scale Support</h2>
            <p className="feature-subtitle">From first deploy to v2, we are with you at every build stage</p>
          </div>
        </section>
       
      )
   }
