"use client";
import ClientButton from "../globalcomponents/Button";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedInput from "@/pages/animation/animated-input";
import api from "@/utils/api";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function RebuildSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await api.post("/framework-pdf", formData);

      const data = res.data; // axios data

      if (!data.success) {
        setMessage({ type: "error", text: data.message });
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Server error. Try again later.",
      });
    }

    setLoading(false);
  };
  

  return (
    <>
      <div
        className="operate-section flex flex-col justify-center items-center util-flex util-flex-1 util-mx-1-5 text-center lg:text-left lg:items-start"
        variants={fadeInUp}
      >
        <div className="mt-22 lg:mt-0 w-full">
          <div className="w-full lg:w-[700px] flex flex-col items-center lg:items-start">
            <motion.div
              className="heading-systems flex flex-wrap justify-center lg:justify-start w-full md:w-[600px]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <span className="text-light-blue">Let's Rebuild</span>&nbsp;
              <span>With Clarity</span>
            </motion.div>

            <motion.p
              className="headings mt-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              We take on select transformation clients each quarter. Book a
              discovery call or request a roadmap consultation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:items-center justify-start gap-4 mt-8 w-full buttons-align-700"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <ClientButton
                href="https://calendly.com/samarthahuja/expro-discovery-call"
                className="bg-primary text-white-color1 hover:bg-white-color1 hover:text-primary"
              >
                Schedule a Call
              </ClientButton>
              <button
                onClick={() => setIsOpen(true)}
                className="custom-mobile-button"
              >
                Download Framework PDF
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen p-4 bg-secondary bg-opacity-30">
          <Dialog.Panel className="bg-white-color1 rounded-xl shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-center mb-4">
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Favicon%20%20(1).png?updatedAt=1762409164334"
                alt="Logo"
                className="w-20 h-auto"
              />
            </div>

            <Dialog.Title className="form-subheading  text-center">
              {submitted ? "Thank You!" : "Please fill your details"}
            </Dialog.Title>

            {submitted ? (
              <p className="text-green-600 text-center">
                Your details have been submitted. We will forward PDF via mail.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <AnimatedInput
                  type="text"
                  placeholder="Enter your Full name"
                  required
                  value={formData.name}
                  onChange={(value) =>
                    setFormData({ ...formData, name: value })
                  }
                />

                <AnimatedInput
                  type="email"
                  placeholder="Enter your email addres"
                  required
                  value={formData.email}
                  onChange={(value) =>
                    setFormData({ ...formData, email: value })
                  }
                />

                <AnimatedInput
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData({ ...formData, phone: value })
                  }
                />
                {message.text && (
                  <p
                    className={`text-sm ${
                      message.type === "error"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {message.text}
                  </p>
                )}
                <button
                  type="submit"
                  className="next-button cursor-pointer !m-auto"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                });
              }}
              className="mt-4 text-lg text-dark-gray2 underline flex items-center justify-center w-full cursor-pointer"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
