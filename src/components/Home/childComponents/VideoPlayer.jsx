"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function HoverVideo({ src }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalVideoRef = useRef(null);

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isVisible) {
        video.muted = true;
        video.playsInline = true;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  }, [isVisible]);


  useEffect(() => {
    const modalVideo = modalVideoRef.current;
    if (showModal && modalVideo) {
      modalVideo.play().catch(() => {});
    }
  }, [showModal]);

  return (
    <>
      <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      onClick={() => setShowModal(true)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-50 rounded-2xl object-cover"
        preload="metadata"
        muted
        playsInline
        controls={false}
      />

  
      <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="bg-white bg-opacity-80 rounded-full p-3 shadow-md pointer-events-none">
          <svg
            className="w-6 h-6 text-[#FFB100]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>


      
      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl p-4">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
              >
                &times;
              </button>
              <video
                ref={modalVideoRef}
                src={src}
                className="w-full h-auto rounded-lg"
                controls
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
