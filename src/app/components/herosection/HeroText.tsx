"use client";
import { motion } from "framer-motion";

interface HeroTextProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  descriptionClassName?: string; // ✅ optional padding class
}

export default function HeroText({
  id,
  title,
  subtitle,
  description,
  descriptionClassName = "",
}: HeroTextProps) {
  return (
    <div className="relative z-10">
      {/* Decorative background behind text */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-no-repeat bg-contain bg-left-top md:bg-left bg-[url('/shape-01.png')]"></div>

      <motion.div
        key={id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-screen"
      >
        <p className="text-[#ffda08] uppercase tracking-widest mb-2 text-2xl font-semibold">
          Welcome To
        </p>
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-2">
          {title}
        </h1>
        <h2 className="text-5xl lg:text-7xl font-extrabold mb-4 text-stroke-white leading-tight">
          {id === 1 ? (
            <>
              TASK FORCE
              <br />
              INTERIORS
            </>
          ) : (
            subtitle
          )}
        </h2>

        {/* ✅ Added dynamic padding class here */}
        <p
          className={`text-justify text-gray-300 mb-6 max-w-full sm:max-w-md text-sm sm:text-base px-[2px] ${descriptionClassName}`}
        >
          {description}
        </p>

        <a href="#" className="underline text-sm tracking-wider font-semibold">
          View More
        </a>
      </motion.div>
    </div>
  );
}
