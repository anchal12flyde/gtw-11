'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};



export default function Next_Steps() {


  return (
    <>
      <div className="block md:hidden ">
        <div className="next-steps-section ">
          <div className="util-flex util-flex-1 util-mx-1-5">
            <div className="icon bg-white">
              <img src="/images/Next_Steps_mobile.svg" alt="Icon" className='object-cover'/>
            </div>
            <h2 className="heading-systems">Next Steps</h2>
            <p>Pick how you'd like to work with us.</p>

            <motion.div
              className="button-group"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div variants={itemVariants}>
                <Link href="/step-one-form" className="cta-button">
                  Become a Client
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/join-our-team/personal-details"
                  className="cta-button"
                >
                  Join Our Team
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/agency-partnership/agency-details"
                  className="cta-button"
                >
                  Agency Partnerships
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="hidden md:block overflow-x-hidden mt-26 mb-26">
        <div className=" text-center">
          <h2 className="heading-systems text-secondary mb-14">Next Steps</h2>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <a href="/step-one-form" className="become-client">
                Become a<br />
                Client
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="/join-our-team/personal-details"
                className="become-client"
              >
                Join Our <br />
                Team
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="/agency-partnership/agency-details"
                className="become-client"
              >
                Agency <br />
                Partnerships
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

