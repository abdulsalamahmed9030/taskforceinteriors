"use client";
import { useState } from "react";
import Image from "next/image";
import QuotePopup from "../QuotePopup";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/5">
      <div className="group relative flex h-16 md:h-20 items-center justify-between bg-black text-white overflow-hidden">
        {/* Prevent background from blocking clicks */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-slide" />

        {/* Yellow Button (hidden on mobile) */}
        <div className="bg-[#ffda08] h-full w-20 hidden md:flex items-center justify-center">
          <button
            className="text-white font-bold"
            onClick={() => setShowQuote(true)}
            aria-label="Open quote popup"
          >
            BTN
          </button>
        </div>

        <div className="flex w-full items-center justify-between px-4 md:px-8 z-10">
          <div className="flex items-center space-x-2">
            <Link href="/" aria-label="Go to home">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Navigation Toggle */}
          <MobileNav />
        </div>
      </div>

      {/* Popup Component */}
      <QuotePopup isOpen={showQuote} onClose={() => setShowQuote(false)} />
    </header>
  );
}
