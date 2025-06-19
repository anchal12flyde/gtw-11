'use client'
import { useState } from 'react'
import Link from 'next/link'
import  Header from '../components/Home/Folder/Header'
import Next_Steps from '../components/Home/Folder/Next_Steps'
import Footer from '../components/Home/Folder/Footer'


export default function mobile_apps() {


  return (
    <>
   <Header/>
          <section className="mobile-section flex flex-col md:flex-row items-start justify-start py-30 px-12 md:px-12 gap-4 md:gap-0 mx-auto pr-6 lg:pr-30 sm:pr-60 ml-0 sm:ml-16">
            <h2 className="mobile-header-title mr-26">Mobile Apps</h2>
            <div className="mobile-divider"></div>
            <p className="mobile-subtitle text-gray-800 pl-26">
              Designed to Scale, Perform, <br />
              and Impress.
            </p>
          </section>
        <section className="card-container-wrapper  ml-8 sm:ml-14">
          <div className="card-container scrollable-mobile">
            <div className="responsive-card"></div>
            <div className="responsive-card"></div>
            <div className="responsive-card"></div>
            <div className="responsive-card"></div>
          </div>
        </section>
        <section className="usecases-section bg-gray-50  ">
          <h2 className="usecases-heading ml-8 sm:ml-28">
            Usecases <span className="usecases-subheading">(Quick Deployment)</span>
          </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-6 ml-8 sm:ml-30">
          {[
            { title: 'Marketplaces', desc: 'Buyer-seller, review, filters, listings' },
            { title: 'SaaS Extensions', desc: 'Mobile access to SaaS platforms' },
            { title: 'E-commerce', desc: 'Buyer-seller, review, filters, listings' },
            { title: 'Food & Beverage', desc: 'Direct ordering, kitchen dashboards, loyalty' },
            { title: 'Internal Ops', desc: 'Field checklists, geo-logging, approvals' },
            { title: 'Logistics', desc: 'Buyer-seller, review, filters, listings' },
            { title: 'Healthcare', desc: 'Direct ordering, kitchen dashboards, loyalty' },
            { title: 'Education & LMS', desc: 'Field checklists, geo-logging, approvals' },
            { title: 'Events & Communities', desc: 'Buyer-seller, review, filters, listings' },
            { title: 'Hospitality', desc: 'Buyer-seller, review, filters, listings' },
            { title: 'Fintech & Payments', desc: 'Mobile access to SaaS platforms' },
            { title: 'Real Estate', desc: 'Buyer-seller, review, filters, listings' },
          ].map((item, index) => (
            <div key={index} className="flex">
              <div className="w-[3px] bg-[#fbbf24] mr-3"></div>
              <div>
                <h3 className="usecase-title text-lg font-semibold">{item.title}</h3>
                <p className="usecase-desc text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        </section>

        <section className="feature-section ">
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







    <Next_Steps/>
   

   
     <Footer/>
   
   
       </>
     )
   }
