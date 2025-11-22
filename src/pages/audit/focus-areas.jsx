"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Home/childComponents/Header";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useAuditForm } from "@/context"; 
import { motion } from "framer-motion";

const skillsList = [
  "UI/UX",
  "Performance",
  "Conversion Optimization",
  "Accessibility",
  "Tech Stack / Code Review",
  "Competitor Comparison",
];

export default function FocusAreas() {
  const router = useRouter();

  // ------------------- Local State ---------------------
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // ------------------- Context API ---------------------
  const { updateStep, formId } = useAuditForm();

  // ------------------- Toggle Skills ---------------------
  const handleSkillToggle = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  // ------------------- Validation ---------------------
  const validateStep3 = () => {
    const newErrors = {};
    if (selectedSkills.length === 0)
      newErrors.focusAreas = "Select at least one area";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ------------------- Next Handler ---------------------
  const handleNext = async () => {
    if (!validateStep3()) return;

    if (!formId) {
      alert("Form ID missing — Step 1 or 2 was not completed.");
      return;
    }

    setIsLoading(true);

    const payload = {
      focusAreas: selectedSkills,
      notes: notes || "",
    };

    const res = await updateStep(3, payload);

    setIsLoading(false);

    if (res) {
      router.push("/audit/your-goals");
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Header />

     <motion.div
             initial={{ y: -40, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="util-flex util-flex-1 util-mx-1-5">
        <div className="step-form-container">
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={() => router.push("/audit/your-product")}
          />

          {/* Step Indicator */}
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 3</span>
          </div>

          <div className="custom-left-border">
            <h1 className="heading-systems">Focus Areas</h1>
          </div>

          <p className="form-subheading">What kind of audit do you need?</p>

          <div className="space-y-2 select-wrapper">
            {skillsList.map((skill) => (
              <label
                key={skill}
                className={`flex items-center gap-2 cursor-pointer ${
                  errors.focusAreas ? "input-error" : ""
                }`} // <-- NEW: red border for validation
              >
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleSkillToggle(skill)}
                  className="form-checkbox"
                />
                {skill}
              </label>
            ))}

            {errors.focusAreas && (
              <p className="error-text">{errors.focusAreas}</p>
            )}
          </div>

          <p className="form-subheading">Optionally</p>

          <div className="select-wrapper">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={5}
              className={`custom-select ${errors.notes ? "input-error" : ""}`} // <-- optional red border
              placeholder="Other – please specify"
            />
            {errors.notes && <p className="error-text">{errors.notes}</p>}
          </div>

          <button
            onClick={handleNext}
            className="next-button"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Next"}
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </>
  );
}
