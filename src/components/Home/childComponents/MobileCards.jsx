'use client'
import { useState } from 'react'
import Link from 'next/link'


export default function MobileCards() {


  return (
    <section className="card-container-wrapper  util-flex util-flex-1 util-mx-1-5 mt-26">
      <div className="card-container scrollable-mobile">
        <div class="responsive-card">
          <img
            src="/images/assets/Ezstays Login.png"
            alt="Card 4"
            loading="lazy"
          />
        </div>
        <div class="responsive-card">
          <img
            src="/images/assets/Meal Booking.png"
            alt="Card 1"
            loading="lazy"
          />
        </div>

        <div class="responsive-card">
          <img
            src="/images/assets/Show my QR.png"
            alt="Card 3"
            loading="lazy"
          />
        </div>
        <div class="responsive-card">
          <img
            src="/images/assets/Warden Dashboard.png"
            alt="Card 2"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
   }
