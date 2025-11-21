"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Head from "next/head";

export default function AnimatedInput({
  label,
  placeholder,
  type = "text",
  name,
  autoComplete,
  value: externalValue,
  onChange: externalOnChange,
  className,
  required,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const value = externalValue !== undefined ? externalValue : internalValue;
  const isActive = isFocused || value.length > 0;

  const handleChange = (e) => {
    const val = e?.target?.value ?? e; // ⭐ event ho ya value — dono handle

    if (externalOnChange) {
      externalOnChange(val); // ⭐ always return clean value
    } else {
      setInternalValue(val);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="relative mb-4">
        <label
          style={{
            position: "absolute",
            top: isActive ? "0rem" : "50%",
            left: "0.75rem",
            fontSize: isActive ? "0.7rem" : "0.875rem",
            color: isActive ? "#0040CE" : "#666",
            transform: "translateY(-50%)",
            backgroundColor: "#ffffff",
            padding: "0 0.25rem",
            transition: "all 0.2s ease",
            pointerEvents: "none",
          }}
        >
          {placeholder}
        </label>

        <motion.input
          type={type}
          required={required}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          name={name}
          autoComplete={autoComplete}
          className={`w-full border border-gray-300 rounded-md px-3 py-[10px] pt-[14px] text-sm focus:outline-none ${
            className || ""
          }`}
        />
      </div>
    </>
  );
}
