'use client'
import { useState } from 'react'
import Link from 'next/link'


export default function MobileCards() {


  return (
    
       <section className="card-container-wrapper  util-flex util-flex-1 util-mx-1-5">
          <div className="card-container scrollable-mobile">
            <div className="responsive-card"></div>
            <div className="responsive-card"></div>
            <div className="responsive-card"></div>
            <div className="responsive-card"></div>
          </div>
        </section>

   
      )
   }
