'use client'
import { useState } from 'react'

export default function Next_Steps() {


  return (
    
        <section className="py-16 px-4 overflow-x-hidden">
          <div className="max-w-7xl mx-auto text-center ml-1 sm:ml-26">
            <h2 className="heading-systems text-black mb-14">Next Steps</h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-full">
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

