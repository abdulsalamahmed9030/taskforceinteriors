"use client";
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

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex space-x-6 font-bold text-sm tracking-wider">
      {navItems.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={cn(
            "transition-colors duration-200 hover:text-[#ffda08]",
            item.label === "Home" && "text-[#ffda08]"
          )}
        >
          {item.label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
