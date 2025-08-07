// components/ui/AnimatedRadioGroup.tsx
'use client';
import { motion } from "framer-motion";
import Head from "next/head";

export default function AnimatedRadioGroup({ label, options, selected, onChange, name }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="mb-6">
        <p className="form-subheading mb-2 text-gray-700">{label}</p>
        <div className="space-y-2">
          {options.map((option) => (
            <motion.label
              key={option}
              className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={selected === option}
                onChange={() => onChange(option)}
                className="form-radio text-yellow-500"
              />
              <span className="text-sm">{option}</span>
            </motion.label>
          ))}
        </div>
      </div>
    </>
  );
}
