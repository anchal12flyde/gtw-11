"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import api from "@/utils/api";
import Loader from "../Home/Loader/Loader"; // ⬅ Loader imported

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function StoryDetaling({ slug }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const [loading, setLoading] = useState(true);
  const [caseData, setCaseData] = useState({
    title: "",
    date: "",
    category: "",
    tags: [],
    heroImage: "",
    sections: [],
  });

  // -------------------------
  // 🔥 FETCH CASE STUDY DATA
  // -------------------------
  useEffect(() => {
    if (!slug) return;
    fetchCaseStudy();
  }, [slug]);

  const fetchCaseStudy = async () => {
    try {
      const res = await api.get(`/case-studies/${slug}`);
      const data = res.data;

      setCaseData({
        title: data.title,
        date: new Date(data.date).toLocaleDateString(),
        category: data.category,
        tags: data.tags || [],
        heroImage: data.heroImage,
        sections: data.sections || [],
      });
    } catch (err) {
      console.error("ERROR FETCHING CASE STUDY:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const currentURL = typeof window !== "undefined" ? window.location.href : "";

  const { title, date, tags, heroImage, sections } = caseData;

  return (
    <>
      {/* ------------------------------------------------- */}
      {/* 🔥 SAME FULL-PAGE LOADER LIKE StoriesHeroSection */}
      {/* ------------------------------------------------- */}
      {loading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">
          <Loader />
        </div>
      )}

      {/* ------------------------------------------------- */}
      {/* 🔥 Smooth Fade animation for main content */}
      {/* ------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`${loading && "pointer-events-none"}`}
      >
        {/* ------------------------------------------------- */}
        {/* MAIN CONTENT */}
        {/* ------------------------------------------------- */}
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
                    All Success Stories
                  </Link>
                </div>

                {/* SHARE BUTTONS */}
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
                    {tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <p>6 min read &nbsp;/&nbsp; {date}</p>
                </div>
              </div>
            </div>

            {heroImage && (
              <div className="background-hero mt-16">
                <img
                  src={heroImage}
                  alt="Hero"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* ----------- SECTION RENDER ----------- */}
            <div className="mt-20 blog-reading flex flex-col gap-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  {/* HEAD */}
                  {section.type === "text" && section.head && (
                    <h3>{section.head}</h3>
                  )}

                  {/* PARAGRAPH */}
                  {section.type === "text" && section.content && (
                    <p>{section.content}</p>
                  )}

                  {/* IMAGE */}
                  {section.type === "image" && (
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

                  {/* LIST */}
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

                  {/* LIST2 */}
                  {section.type === "list2" &&
                    Array.isArray(section.content) && (
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
                    )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ----------- TESTIMONIAL ----------- */}
        <div className="bg-gray-light text-center mt-16 util-flex util-flex-1 util-mx-1-5">
          <div className="mx-0 sm:mx-30">
            {sections
              .filter((s) => s.type === "testimonial")
              .map((testimonial, i) => (
                <div key={i}>
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
      </motion.div>
    </>
  );
}
