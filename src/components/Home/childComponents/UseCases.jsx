'use client'
import { motion } from "framer-motion";

export default function Usecases() {


  return (

        <section className="usecases-section bg-gray-50 util-flex util-flex-1 util-mx-1-5 mt-26">
          <motion.h2 className="heading-systems mb-15 text-left"
            initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}>
            Usecases <span className="usecases-subheading">(Quick Deployment)</span>
          </motion.h2>
         <div className="flex flex-wrap justify-between gap-12">
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
            <motion.div key={index} className="across-card flex w-full sm:w-[48%] lg:w-[24%] max-w-sm " initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}>
              <div className="w-[3px] bg-[#fbbf24] mr-3"></div>
              <div>
                <h3 className="usecase-title text-lg font-semibold">{item.title}</h3>
                <p className="usecase-desc text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        </section>
    

    
      )
   }
