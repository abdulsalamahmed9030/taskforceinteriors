"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/" },
  { label: "Manufacturing", href: "/" },
  { label: "Contact", href: "/" },
  { label: "More", href: "/" },
];

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden z-10">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <Menu className="text-white" size={28} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="bg-black md:hidden flex flex-col space-y-4 p-6 text-white text-sm font-bold z-20">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "transition-colors duration-200 hover:text-[#ffda08]",
                item.label === "Home" && "text-[#ffda08]"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
