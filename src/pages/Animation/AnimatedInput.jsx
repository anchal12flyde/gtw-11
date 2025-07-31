'use client';
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedInput({ label, placeholder, type = "text", name, autoComplete 
  
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative mb-4">
      <label
        style={{
          position: "absolute",
          top: isActive ? "0rem" : "50%",
          left: "0.75rem",
          fontSize: isActive ? "0.7rem" : "0.875rem",
          color: isActive ? "#FFB100" : "#666",
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
        className="w-full border border-gray-300 rounded-md px-3 py-[10px] pt-[14px] text-sm focus:outline-none"
      />
    </div>
  );
}
