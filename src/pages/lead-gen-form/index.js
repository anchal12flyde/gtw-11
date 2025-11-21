import { useState } from "react";
import { ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import AnimatedInput from "../animation/animated-input";
import Link from "next/link";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    country: "",
    mobile: "",
    email: "",
    role: "",
    needs: [],
    challenge: "",
    otherChallenge: "",
    timeline: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckbox = (value) => {
    let updated = [...formData.needs];

    if (updated.includes(value)) {
      updated = updated.filter((v) => v !== value);
    } else {
      updated.push(value);
    }
    setFormData({ ...formData, needs: updated });
  };

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="form-container util-flex util-flex-1 util-mx-1-5">
      {/* ---------------- Step 1 ---------------- */}
      {step === 1 && (
        <div className="welcome-screen">
          <h1 className="heading-heros">
            Hi! Let’s explore how we can help your business go digital.
          </h1>
          <p className="heading-subtitles">
            Fill this quick form and we’ll send you a personalized demo within
            24 hours.
          </p>

          <button onClick={next} className="next-button">
            Start <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ---------------- Step 2 ---------------- */}
      {step === 2 && (
        <div className="step-form-container">
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 1</span>
          </div>
          <div className="custom-left-border">
            <h1 className="heading-systems">Contact Details</h1>
          </div>
          <div className="select-wrapper">
            <AnimatedInput
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={(value) => handleChange("fullName", value)}
              required
            />
          </div>

          <div className="select-wrapper">
            <AnimatedInput
              type="text"
              name="companyName"
              placeholder="Company Name *"
              value={formData.companyName}
              onChange={(value) => handleChange("companyName", value)}
            />
          </div>

          <div className="select-wrapper">
            <select
              className="custom-select "
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="UAE">UAE</option>
              <option value="GCC">GCC</option>

              <option value="Other">Other</option>
            </select>
            <ChevronDown className="chevron-icon" size={20} />
          </div>
          <div className="select-wrapper">
            <AnimatedInput
              type="number"
              name="mobile"
              placeholder="Mobile / WhatsApp *"
              value={formData.mobile}
              onChange={(value) => handleChange("mobile", value)}
            />
          </div>

          <div className="select-wrapper">
            <AnimatedInput
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
            />
          </div>

          <button className="next-button" onClick={next}>
            Next <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ---------------- Step 3 ---------------- */}
      {step === 3 && (
        <div className="step-form-container">
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 2</span>
          </div>

          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={prev}
          />

          <div className="custom-left-border">
            <h2 className="heading-systems">Who Are You?</h2>
          </div>

          <div className="select-wrapper">
            <select
              className="custom-select"
              name="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            >
              <option value="">Your Role</option>
              <option value="Contractor">Contractor</option>
              <option value="Builder / Developer">Builder / Developer</option>
              <option value="Material Supplier / Distributor">
                Material Supplier / Distributor
              </option>
              <option value="Architect / Consultant">
                Architect / Consultant
              </option>
              <option value="EPC / Infrastructure">EPC / Infrastructure</option>
              <option value="Software / Tech Agency">
                Software / Tech Agency
              </option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown className="chevron-icon" size={20} />
          </div>

          <button className="next-button" onClick={next}>
            Next <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ---------------- Step 4 ---------------- */}
      {step === 4 && (
        <div className="step-form-container">
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 3</span>
          </div>
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={prev}
          />
          <div className="custom-left-border">
            <h1 className="heading-systems">
              What are you primarily looking for?
            </h1>
          </div>

          <div className="checkbox-list">
            {[
              "Build Landing Pages Quickly (Buildflo)",
              "B2B Ordering / Bulk Purchase System (Bulqc)",
              "Custom Software / Mobile App",
              "Improve Lead Management",
              "Digital Transformation",
              "Not Sure — Need Guidance",
            ].map((item) => (
              <label key={item} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.needs.includes(item)}
                  onChange={() => handleCheckbox(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <button className="next-button" onClick={next}>
            Next <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ---------------- Step 5 ---------------- */}
      {step === 5 && (
        <div className="step-form-container">
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 4</span>
          </div>
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={prev}
          />
          <div className="custom-left-border">
            <h1 className="heading-systems">
              What is your biggest challenge right now?
            </h1>
          </div>

          <div className="select-wrapper">
            <select
              className="custom-select"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
            >
              <option value="">Select Issue</option>
              <option>Build Landing Pages Quickly (Buildflo)</option>
              <option>B2B Ordering / Bulk Purchase System (Bulqc)</option>
              <option>Custom Software / Mobile App</option>
              <option>Improve Lead Management</option>
              <option>Digital Transformation</option>
              <option>Not Sure — Need Guidance</option>
            </select>
            <ChevronDown className="chevron-icon" size={20} />
          </div>

          {formData.challenge === "Other" && (
            <div className="select-wrapper">
              <AnimatedInput
                type="text"
                name="otherChallenge"
                placeholder="Describe your challenge"
                value={formData.otherChallenge}
                onChange={handleChange}
              />
            </div>
          )}

          <button className="next-button" onClick={next}>
            Next <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ---------------- Step 6 ---------------- */}
      {step === 6 && (
        <div className="step-form-container">
          <div className="step-indicator">
            <span className="dot"></span>
            <span className="step-label">Step 5</span>
          </div>
          <ArrowLeft
            className="cursor-pointer mb-5 text-arrow-color"
            size={30}
            onClick={prev}
          />
          <div className="custom-left-border">
            <h1 className="heading-systems">Timeline</h1>
          </div>

          <div className="select-wrapper">
            <select
              className="custom-select"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">
                When are you planning to start this project?
              </option>
              <option value="Immediately">Immediately</option>
              <option value="This month">This month</option>
              <option value="1–3 months">1–3 months</option>
              <option value="Researching only">Researching only</option>
            </select>

            <ChevronDown className="chevron-icon" size={20} />
          </div>

          <button className="next-button" onClick={next}>
            Next <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ---------------- Final Step ---------------- */}
      {step === 7 && (
        <div className="min-h-screen flex flex-col justify-start sm:justify-center items-center bg-white-color1 text-center gap-4 pt-28 sm:pt-0">
          <h1 className="text-4xl sm:text-7xl font-semibold text-primary">
            Thank you! 🎉
          </h1>
          <h2 className="text-2xl sm:text-4xl font-semibold text-secondary">
            Our team will contact you within 24 hours with a customized demo —
            based on exactly what you selected.
          </h2>
          <Link href="/">
            <button className="next-button">
              Submit & Get Demo <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
