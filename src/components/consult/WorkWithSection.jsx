  'use client'
  import { useRef } from 'react'
  import { useInView } from 'framer-motion'
  import { motion } from 'framer-motion'

   export default function WorkWithSection() {
    const industryList = [
      'Commerce & Consumer Products',
      'Operation & Infrastructure',
    ]
      return (
      <div className='util-flex util-flex-1 util-mx-1-5 mt-26'>
        <section className="">
          <h2 className="heading-systems text-secondary mb-12">Who <span className="text-primary" >We Work</span>  With   </h2>
          <div className="space-y-12">
            {industryList.map((title, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { once: false, margin: '-50px' })

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  className="pb-0 md:pb-6 md:flex md:justify-between md:items-start sm:border-b sm:border-primary"
                >
                  <div className="product-left">
                    <h3 className="ecom-heading">{title}</h3>
                    <p className="industry-description mt-4">
                      We enable digital sales, customer journeys, and D2C operations.
                    </p>
                  </div>
                  <div className="block sm:hidden border-b border-primary w-full mt-2"></div>

                  <div className="product-right">
                    <div className="md:flex gap-8 sm:gap-10 mt-2 md:mt-8 ">
                      {Array(4)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i} className="industry-tag">
                            E-commerce
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>
      </div>
    )
  }
