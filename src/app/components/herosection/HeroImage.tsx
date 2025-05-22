"use client";
import Image from "next/image";

interface HeroImageProps {
  image: string;
  subtitle: string;
}

export default function HeroImage({ image, subtitle }: HeroImageProps) {
  return (
    <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
      <div className="relative w-full h-full">
        {/* Decorative shape */}
        <Image
          src="/shape-01.png"
          alt="Background Shape"
          fill
          className="object-contain object-right opacity-30 z-0"
        />
        {/* Slide image */}
        <Image
          src={image}
          alt={subtitle}
          fill
          className="object-contain object-right z-10 sliderImage"
        />
      </div>
    </div>
  );
}
