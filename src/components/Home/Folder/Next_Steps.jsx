'use client'
import { useState } from 'react'

export default function Next_Steps() {


  return (
    
        <section className=" mt-26 overflow-x-hidden util-flex util-flex-1 util-mx-1-5">
          <div className="text-center">
            <h2 className="heading-systems text-black mb-16">Next Steps</h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
             <a href="#" className="become-client"  >
              Become  a<br />  Client
            </a>
              <a
                href="#"
                className="become-client"
              >
                Join Our <br />Team
              </a>
              <a
                href="#"
                className="become-client"
              >
                Agency <br />Partnerships
              </a>
            </div>
          </div>
        </section>
         )
}

