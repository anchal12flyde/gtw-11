"use client";
import { useRef, useState } from "react";

export default function HoverVideo({ src }) {
  const videoRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false); // hover or touch

  const handlePlay = () => {
    const video = videoRef.current;
    setIsInteracting(true);

    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.play().catch(() => {});
    }
  };

  const handleReset = () => {
    const video = videoRef.current;
    setIsInteracting(false);

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      onMouseEnter={handlePlay}
      onMouseLeave={handleReset}
      onTouchStart={() =>
        window.requestIdleCallback
          ? requestIdleCallback(handlePlay)
          : setTimeout(handlePlay, 0)
      }
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
      {!isInteracting && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white bg-opacity-80 rounded-full p-3 shadow-md">
            <svg
              className="w-6 h-6 text-[#FFB100]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
