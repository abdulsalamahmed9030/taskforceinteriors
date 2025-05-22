"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
  { label: "More", href: "/more" },
];

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="md:hidden z-30 fixed top-4 right-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <Menu className="text-white" size={28} />
          )}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding Drawer */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full bg-black text-white z-30 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "w-[80vw] max-w-sm p-6 flex flex-col space-y-6"
        )}
      >
        {/* Logo at the top */}
        <div className="mb-4">
          <Image
            src="/logo.png" // ✅ Replace with your actual logo path
            alt="Taskforce Interiors Logo"
            width={160}
            height={40}
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 text-sm font-bold">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "transition-colors duration-200 hover:text-[#ffda08]",
                item.label === "Home" && "text-[#ffda08]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        
      </div>
    </>
  );
}
