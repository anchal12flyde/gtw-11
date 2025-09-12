'use client'
import { motion } from "framer-motion";

export default function Usecases() {


  return (
    <section className="usecases-section bg-gray-light util-flex util-flex-1 util-mx-1-5 mt-26">
      <motion.h2
        className="heading-systems mb-15 text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Usecases <span className="usecases-subheading">(Quick Deployment)</span>
      </motion.h2>
      <div className="flex flex-wrap justify-between gap-12">
        {[
          {
            title: "Marketplaces",
            desc: "Powering buyer-seller flows with listings, reviews, filters, and custom storefront logic.",
          },
          {
            title: "SaaS Extensions",
            desc: "Enabling mobile-first access, reporting dashboards, and user workflows for SaaS platforms.",
          },
          {
            title: "E-commerce",
            desc: "Custom product catalogs, search, filters, checkout, and scalable backend order engines.",
          },
          {
            title: "Food & Beverage",
            desc: "Direct ordering systems with kitchen dashboards, loyalty flows, and delivery integrations.",
          },
          {
            title: "Internal Ops",
            desc: "Build ops dashboards, field checklists, geo-logging tools, and approval-based workflows. ",
          },
          {
            title: "Logistics",
            desc: "Manage shipments, trip planning, fleet routing, customer notifications, and service SLAs.",
          },
          {
            title: "Healthcare",
            desc: "Enable bookings, reports, patient dashboards, and ordering logic for medical supplies.",
          },
          {
            title: "Education & LMS",
            desc: "Student lifecycle tools, onboarding, content access, attendance, and performance tracking.",
          },
          {
            title: "Events & Communities",
            desc: "Ticketing, user profiles, reviews, filters, and host-side dashboards to manage listings.",
          },
          {
            title: "Hospitality",
            desc: "End-to-end digital menu, table/room service flows, loyalty programs, and approval logic.",
          },
          {
            title: "Fintech & Payments",
            desc: "Build workflows for transactions, onboarding, wallets, and access to financial dashboards.",
          },
          {
            title: "Real Estate",
            desc: "Listing portals with search, filter, inquiry, admin approval, and agent-specific dashboards.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="across-card flex w-full sm:w-[48%] lg:w-[24%] max-w-sm "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-[3px] bg-primary mr-3"></div>
            <div>
              <h3 className="usecase-title text-lg font-semibold">
                {item.title}
              </h3>
              <p className="usecase-desc text-sm text-white-gray6">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
   }
