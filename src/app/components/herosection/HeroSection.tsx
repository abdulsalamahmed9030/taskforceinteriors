"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

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
      {/* Left: Text Content */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 px-4 sm:px-10 md:px-20 flex flex-col justify-center z-10">
       <HeroText
  id={slide.id}
  title={slide.title}
  subtitle={slide.subtitle}
  description={slide.description}
  descriptionClassName="pr-8 md:pr-10"
/>

      </div>

      {/* Right: Image Content */}
      <HeroImage image={slide.image} subtitle={slide.subtitle} />

      {/* Bottom: Arrows */}
      <div className="absolute bottom-0 w-full h-20 bg-[#ffda08] flex items-center justify-center z-20">
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
