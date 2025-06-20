'use client'
import { useState } from 'react'

export default function Next_Steps() {


  return (

      <section className="py-12 px-8 sm:px-4 ">
        <div className="mx-auto lg:px-0 ml-4 sm:ml-28 mr-4 sm:mr-28">
          <h2 className="heading-systems text-black  mb-12">Industries We Power</h2>
          <div className="space-y-12">
            {[
              'Commerce & Consumer Products',
              'Operation & Infrastructure',
              'Education & Knowledge',
              'Services & Professional Firms',
              'Services & Professional Firms',
            ].map((title, index) => (
            <div
                key={index}
                className="space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-start sm:border-b sm:border-[#FFB100] sm:pb-6"
              >
                <div className="sm:max-w">
                  <h3 className="ecom-heading">{title}</h3>
                  <p className="industry-description mt-4">
                    We enable digital sales, customer journeys, and D2C operations.
                  </p>
                </div>
                <div className="block sm:hidden border-b border-[#FFB100] w-full mt-2"></div>
                          
               <div className="w-full sm:w-auto">
                <div className="grid grid-cols-2 sm:flex gap-6 sm:gap-10 mt-7">
                  {Array(4).fill(0).map((_, i) => (
                    <span key={i} className="industry-tag">
                      E-commerce
                    </span>
                  ))}
                </div> 
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}