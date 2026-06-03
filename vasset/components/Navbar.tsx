"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = ["Services", "Products", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled ? "border-b bg-[var(--nav-bg)] border-[var(--border-light)]" : "bg-transparent"
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
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-200 font-medium"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <a
            href="https://wa.link/95c1j5"
            className="text-sm px-5 py-2.5 rounded-full border transition-all duration-300 font-medium"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold)";
              e.currentTarget.style.color = "var(--background)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle + Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            className="text-[var(--text-secondary)] hover:text-[var(--foreground)]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--mobile-bg)] border-t border-[var(--border-light)] px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] font-medium py-1"
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:info@vassetglobal.com"
            className="block text-sm px-5 py-2.5 rounded-full border text-center font-medium mt-2 transition-all duration-300"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
