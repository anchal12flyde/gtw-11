'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Next_Steps() {


  return (
  
         <div class="next-steps-section ">
      <div className='util-flex util-flex-1 util-mx-1-5'>
          <div class="icon">
            <img src="/images/Next_Icon.png" alt="Icon" />
          </div>
          <h2 className='heading-systems'>Next Steps</h2>
          <p>Pick how you'd like to work with us.</p>
          <div class="button-group">
        <Link href="#" class="cta-button">Become a Client</Link>
        <Link href="/StepOneForm" class="cta-button">Join Our Team</Link>
        <Link href="#" class="cta-button">Agency Partnerships</Link>
        </div>
        </div>
      </div>

     
         )
}

