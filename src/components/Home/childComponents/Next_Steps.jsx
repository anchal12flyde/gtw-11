'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Next_Steps() {


  return (
   <>
      {/* Mobile View */}
      <div className="block sm:hidden">
        <div className="next-steps-section">
          <div className="util-flex util-flex-1 util-mx-1-5">
            <div className="icon">
              <img src="/images/Next_Icon.png" alt="Icon" />
            </div>

            <h2 className="heading-systems">Next Steps</h2>
            <p>Pick how you'd like to work with us.</p>

            <div className="button-group">
              <Link href="/StepOneForm" className="cta-button">Become a Client</Link>
              <Link href="/Join_Our_Team/PersonalDetails" className="cta-button">Join Our Team</Link>
              <Link href="/Agency_Partnership/AgencyDetails" className="cta-button">Agency Partnerships</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <section className="hidden sm:block py-22  overflow-x-hidden">
        <div className="max-w-7xl mx-auto text-center ">
          <h2 className="heading-systems text-black mb-14">Next Steps</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-full">
            <a href="/StepOneForm" className="become-client">
              Become a<br />Client
            </a>

            <a href="/Join_Our_Team/PersonalDetails" className="become-client">
              Join Our <br />Team
            </a>

            <a href="/Agency_Partnership/AgencyDetails" className="become-client">
              Agency <br />Partnerships
            </a>
          </div>
        </div>
      </section>
    </>
         )
}

