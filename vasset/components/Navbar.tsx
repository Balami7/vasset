"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = ["Services", "Products", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled ? "border-b border-[#ffffff08] bg-[#0A0A0Bcc]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image 
            src="/logo.png" 
            alt="VAsset Global Logo" 
            width={36} 
            height={36} 
            className="object-contain"
            priority 
          />
          <span className="font-display font-700 text-lg tracking-tight">
            VASSET<span className="gold"> GLOBAL</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-[#9B9BA4] hover:text-white transition-colors duration-200 font-medium"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:info@vassetglobal.com"
            className="text-sm px-5 py-2.5 rounded-full border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-300 font-medium"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#9B9BA4] hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#111113] border-t border-[#ffffff08] px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-sm text-[#9B9BA4] hover:text-white font-medium py-1"
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:info@vassetglobal.com"
            className="block text-sm px-5 py-2.5 rounded-full border border-[#C9A84C] text-[#C9A84C] text-center font-medium mt-2"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
