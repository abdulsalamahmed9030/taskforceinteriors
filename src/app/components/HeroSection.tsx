"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "THE TOUCH OF",
    subtitle: "TASK FORCE INTERIORS",
    description:
      "is an organization overseen by individuals with extensive experience in civil engineering, interior design, and the management of turnkey projects.",
    image: "/slide-1.png",
  },
  {
    id: 2,
    title: "THE STYLE OF",
    subtitle: "MODERN ARCHITECTURE",
    description: "Blending elegance and functionality for future-ready spaces.",
    image: "/slide-1.png",
  },
  {
    id: 3,
    title: "THE POWER OF",
    subtitle: "BOLD DESIGN",
    description: "Turning visions into structures with creative excellence.",
    image: "/slide-1.png",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[90vh] bg-black text-white overflow-hidden">
      {/* Left: Content */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 px-4 sm:px-10 md:px-20 flex flex-col justify-center z-10">
        {/* Social Icons */}
        {/* <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 text-white">
          {[
            "ri-facebook-fill",
            "ri-youtube-fill",
            "ri-instagram-line",
            "ri-linkedin-fill",
          ].map((icon, i) => (
            <a key={i} href="#" className="text-xl hover:scale-110 transition">
              <i className={icon}></i>
            </a>
          ))}
        </div> */}

        {/* Animated Text */}
        <div className="relative z-10 ">
          {/* Background image behind text */}
          <div className="absolute inset-0 -z-10 opacity-10 bg-no-repeat bg-contain bg-left-top md:bg-left bg-[url('/shape-01.png')]"></div>

          {/* Animated content */}
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-screen"
          >
            <p className="text-yellow-500 uppercase tracking-widest mb-2 text-2xl font-semibold">
              Welcome To
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-2 z-auto">
              {slide.title}
            </h1>
            <h2 className="text-5xl lg:text-7xl font-extrabold mb-4 text-stroke-white leading-tight">
              {slide.id === 1 ? (
                <>
                  TASK FORCE
                  <br />
                  INTERIORS
                </>
              ) : (
                slide.subtitle
              )}
            </h2>
            <p className="text-justify text-gray-300 mb-6 max-w-full sm:max-w-md text-sm sm:text-base px-[2px]">
              {slide.description}
            </p>

            <a
              href="#"
              className="underline text-sm tracking-wider font-semibold"
            >
              View More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right: Background shape + Image */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
        <div className="relative w-full h-full">
          {/* Background Shape */}
          <Image
            src="/shape-01.png"
            alt="Background Shape"
            fill
            className="object-contain object-right opacity-30 z-0"
          />
          {/* Building Image */}
          <Image
            src={slide.image}
            alt={slide.subtitle}
            fill
            className="object-contain object-right z-10 sliderImage"
          />
        </div>
      </div>

      {/* Bottom Yellow Bar with Arrows */}
      <div className="absolute bottom-0 w-full h-20 bg-yellow-400 flex items-center justify-center z-20">
        <button
          onClick={handlePrev}
          className="text-black text-2xl mx-10 hover:scale-110 transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="text-black text-2xl mx-10 hover:scale-110 transition"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
