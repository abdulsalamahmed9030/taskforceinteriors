"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import QuotePopup from "./QuotePopup";
import Link from "next/link";


function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

const navItems = [
  "Home",
  "About Us",
  "Services",
  "Portfolio",
  "Manufacturing",
  "Contact",
  "More",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuote, setShowQuote] = useState(false); // for popup

  return (
    <header className="relative z-50 border-b border-white/5">
      <div className="group relative flex h-16 md:h-20 items-center justify-between bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-slide" />

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

        <div className="flex w-full items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-2">
  <Link href="/" aria-label="Go to home">
    <Image src="/logo.png" alt="Logo" width={150} height={50} priority />
  </Link>
</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-bold text-sm tracking-wider">
            {navItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className={cn(
                  "transition-colors duration-200 hover:text-[#ffda08]",
                  item === "Home" && "text-[#ffda08]"
                )}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <div className="md:hidden z-10">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-white" size={28} /> : <Menu className="text-white" size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-black md:hidden flex flex-col space-y-4 p-6 text-white text-sm font-bold">
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className={cn(
                "transition-colors duration-200 hover:text-[#ffda08]",
                item === "Home" && "text-[#ffda08]"
              )}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      )}

      {/* Popup Component */}
      <QuotePopup isOpen={showQuote} onClose={() => setShowQuote(false)} />
    </header>
  );
}