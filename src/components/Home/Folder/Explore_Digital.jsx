"use client";
import {useRef, useState } from "react";

export default function Explore_Digital() {
const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const handlePlayPause = (videoRef, setIsPlaying, otherVideoRef, setOtherPlaying) => {
    const video = videoRef.current;
    const otherVideo = otherVideoRef.current;

    if (!video) return;
    if (otherVideo && !otherVideo.paused) {
      otherVideo.pause();
      setOtherPlaying(false);
    }
    if (video.paused || video.ended) {
      video.muted = true;
      video.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Play failed:", err));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <section className="gradient-section text-white px-6 sm:px-10 mt-10 md:min-h-[200px] lg:min-h-[500px] py-2 md:py-12">
        <div className=" block md:hidden absolute inset-0 flex items-center justify-center ">
          <div className="flex flex-col items-center space-y-50 px-6 py-4">
            <h2 className="text-[25vw] text-white/5 font-600 leading-none tracking-wider">
              From
            </h2>
            <h2 className="text-[25vw] text-white/5 font-600 leading-none tracking-wider">
              To
            </h2>
          </div>
        </div>

        <div className="relative  z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 sm:py-12 -mb-12">
          <h2 className="section-heading mt-25 md:mt-0 mb-18 text-center lg:text-left">
            We Build. We Digitize. We Transform.
          </h2>
          <div className="max-w-6xl ">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
              <div className="space-y-6 mt-4">
                <p className="left-column-text">Legacy systems</p>
                <p className="left-column-text">Manual operations</p>
                <p className="left-column-text">Scattered tech</p>
              </div>
              <div className=" md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-30">
                <div className="flex justify-center items-center md:hidden my-6">
                  <svg
                    className="w-50 h-12 text-[#FFB100] animate-arrowDown"
                    viewBox="0 0 192 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 10L96 40L182 10"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="hidden md:flex justify-center items-center my-6">
                  <svg
                    className="w-6 h-52 text-[#FFB100]  animate-arrowDown"
                    viewBox="0 0 24 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L20 52L2 102"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="w-full max-w-[550px] mb-30 md:mb-0">
                  <p className="right-column-text ">
                    We help organizations rethink the way they run, by{" "}
                    <span className="text-[#FFB100]">
                      replacing complexity with clarity –
                    </span>{" "}
                    powered by purpose-built platforms.
                  </p>

                  <a href="#" className="explore-link pt-12 md:pt-12 block">
                    Explore Digital Transformation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-yellow-section py-16 ">
        <div className="">
          <div className="text-left mb-8 sm:block flex  ">
            <div className="heading-systems flex flex-wrap gap-x-1">
              <div className="w-[40px] sm:w-[110px]"></div>
              
              <p className="text-black">We build systems,</p>
             <p className="text-white ml-[45px] sm:ml-0 sm:text-center">not just screens.</p>
             </div>
          </div>
          <div className="overflow-auto scrollbar-hide w-full flex">
            <div className=" flex-shrink-0 w-[40px] sm:w-[120px]"></div>
            <div className="flex flex-nowrap gap-12 pb-4 w-full ">
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                  <video
                    ref={videoRef1}
                    src="/videos/Video2.mp4"
                    className="w-full h-50 rounded-2xl object-cover"
                    poster="/images/img4.png"
                    controls={false}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() =>
                        handlePlayPause(videoRef1, setIsPlaying1, videoRef2, setIsPlaying2)
                      }
                      className="bg-white bg-opacity-80 rounded-full p-3 hover:scale-110 transition-transform shadow-md"
                    >
                      <svg
                        className="w-6 h-6 text-[#FFB100]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {isPlaying1 ? (
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        ) : (
                          <path d="M8 5v14l11-7z" />
                        )}
                      </svg>
                    </button>
                </div>
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    Ecommerce for Scale
                  </h3>
                  <p className="paragraph-default">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                  <img
                    src="/images/img4.png"
                    alt="Campus"
                    className="w-full h-50 "
                  />
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    A Campus Goes Digital
                  </h3>
                  <p className="paragraph-default ">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                  <img
                    src="/images/img7.png"
                    alt="Campus"
                    className="w-full h-50 "
                  />
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    Landing That Converts
                  </h3>
                  <p className="paragraph-default">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden">
                <div className="relative rounded-2xl">
                  <video
                    ref={videoRef2}
                    src="/videos/Video1.mp4"
                    className="w-full h-50 rounded-2xl object-cover"
                    poster="/images/img6.png"
                    controls={false}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() =>
                        handlePlayPause(videoRef2, setIsPlaying2, videoRef1, setIsPlaying1)
                      }
                      className="bg-white bg-opacity-80 rounded-full p-3 hover:scale-110 transition-transform shadow-md"
                    >
                      <svg
                        className="w-6 h-6 text-[#FFB100]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {isPlaying2 ? (
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        ) : (
                          <path d="M8 5v14l11-7z" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    Ecommerce for Scale
                  </h3>
                  <p className="paragraph-default">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-white rounded-3xl w-80 flex-shrink-0 h-[400px] overflow-hidden ">
                <div className="relative rounded-2xl">
                  <img
                    src="/images/img7.png"
                    alt="Campus"
                    className="w-full h-50"
                  />
                </div>
                <div className="flex flex-col gap-4 px-8">
                  <h3 className="ecom-heading text-left">
                    A Campus Goes Digital
                  </h3>
                  <p className="paragraph-default">
                    Built a full-stack MERN platform for Itel Mobiles to support
                    D2C sales, stock sync, and campaign-driven demand — built to
                    scale across India.
                  </p>
                </div>
              </div>
              <div className=" flex-shrink-0  w-[20px] sm:w-[60px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
