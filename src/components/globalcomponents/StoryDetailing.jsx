"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function StoryDetaling({
  title = "",
  date = "",
  category = "",
  tags = [],
  heroImage = null,
  sections = [],
  quote = "",
  author = "",
  position = "",
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Copy current page URL
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2s
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };
  const currentURL = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <div className="util-flex util-flex-1 util-mx-1-5">
        <div className="px-0 sm:px-30">
          <div className="mt-15">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-[10px] rounded-[6px] bg-gray-light p-[12px_16px]">
                <Link
                  href="/success-stories"
                  className="flex items-center text-sm text-gray-dark2 hover:underline"
                >
                  <img
                    src="/images/assets/backArrow.png"
                    alt="Back"
                    className="w-2 h-3 mr-2"
                  />
                  Previous
                </Link>
              </div>

              <div className="flex items-center gap-2 relative perspective cursor-pointer">
                <div
                  className={`absolute left-[-120px] top-0 flex origin-right flip-container ${
                    open ? "rotate-y-0" : "rotate-y-90"
                  }`}
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      currentURL
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/assets/facebookIcon.png"
                      alt="Facebook"
                      width={43}
                      height={43}
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      currentURL
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/assets/linkedinIcon.png"
                      alt="LinkedIn"
                      width={43}
                      height={43}
                    />
                  </a>

                  {/* Threads / X / Twitter */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      currentURL
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/assets/eclipse1 (5).png"
                      alt="Threads"
                      width={43}
                      height={43}
                    />
                  </a>
                </div>

                <button
                  onClick={() => setOpen(!open)}
                  className="z-10 transition-transform duration-300"
                >
                  <Image
                    src={
                      open
                        ? "/images/assets/crossIcon.png"
                        : "/images/assets/shareIcon.png"
                    }
                    alt="Toggle Share"
                    width={43}
                    height={43}
                  />
                </button>

                <button onClick={handleCopy} className="relative">
                  <Image
                    src="/images/assets/shareLink.png"
                    alt="Share Link"
                    width={43}
                    height={43}
                  />
                  {copied && (
                    <span className="absolute top-0 left-full ml-2 bg-black text-white px-2 py-1 rounded text-xs">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            <h1 className="heading-systems mb-8">{title}</h1>

            <div className="blog-details-text flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
              <div className="flex items-center gap-[26px]">
                <span className="category">Category:</span>
                <p className="insight-tags">
                  {Array.isArray(tags) &&
                    tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <p>6 min read &nbsp;/&nbsp; {date}</p>
              </div>
            </div>
          </div>

          {heroImage ? (
            <div className="background-hero mt-16">
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ) : null}

          <div className="mt-20 blog-reading flex flex-col gap-y-8">
            {Array.isArray(sections) &&
              sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  {section.type === "text" && section.head && (
                    <h3>{section.head}</h3>
                  )}

                  {section.type === "text" && section.content && (
                    <p>{section.content}</p>
                  )}

                  {section.type === "image" && section.imageSrc && (
                    <>
                      <img
                        src={section.imageSrc}
                        alt={section.imageAlt || "Image"}
                        className="w-full h-auto object-cover pb-4"
                        loading="lazy"
                      />
                      {section.content && <p>{section.content}</p>}
                    </>
                  )}

                  {section.type === "list" &&
                    Array.isArray(section.content) && (
                      <ul className="mt-2 list-disc pl-5">
                        {section.content.map((item, idx) => (
                          <li key={idx} className="mb-2">
                            <strong>{item.listing}</strong>
                            <p className="ml-4 text-sm text-gray-700">
                              {item["sub-listing"]}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                  {section.type === "list2" &&
                  Array.isArray(section.content) &&
                  section.content.every(
                    (item) => typeof item === "object" && "listing" in item
                  ) ? (
                    <div>
                      <h3 className="font-bold mb-2">{section.head}</h3>
                      <ul className="mt-2 list-disc pl-5">
                        {section.content.map((item, idx) => (
                          <li key={idx} className="mb-2">
                            {item.listing}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Testimonal */}
      <div className="bg-gray-light text-center mt-16 util-flex util-flex-1 util-mx-1-5">
        <div className="mx-0 sm:mx-30">
          {sections
            .filter((section) => section.type === "testimonial")
            .map((testimonial, index) => (
              <div key={index}>
                <img
                  src="/images/assets/quote1.png"
                  alt="opening quote"
                  className="quote-img-open"
                />
                <div className="quote-text-wrapper">
                  <p className="quote-text">{testimonial.quote}</p>
                </div>
                <div className="author-name mt-6">{testimonial.author}</div>
                <div className="author-title">{testimonial.position}</div>
                <img
                  src="/images/assets/quote2.png"
                  alt="closing quote"
                  className="quote-img-close"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
