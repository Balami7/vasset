"use client";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: "7+", label: "Product Platforms" },
  { value: "500+", label: "Assets Managed" },
  { value: "3+", label: "Years Active" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tagRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background glows */}
      <div className="hero-glow" />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Geometric lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A84C" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Content */}
      <div ref={tagRef} className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C33] bg-[#C9A84C0D] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
            Africa&apos;s Asset & Tech Powerhouse
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-800 leading-[1.05] mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-2">
            Managing Assets.
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl shimmer-text">
            Building Solutions.
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#6B6B72] mt-2">
            Creating Opportunities.
          </span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-[#6B6B72] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          A diversified platform delivering property management, digital verification,
          business automation, and technology services across Africa.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#products"
            className="group flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-black font-semibold rounded-full hover:bg-[#E8C87A] transition-all duration-300 text-sm"
          >
            Explore Our Ecosystem
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 border border-[#ffffff18] text-white rounded-full hover:border-[#C9A84C44] transition-all duration-300 text-sm font-medium"
          >
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#ffffff08] rounded-2xl overflow-hidden border border-[#ffffff08]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#0A0A0B] px-6 py-6 text-center hover:bg-[#111113] transition-colors"
            >
              <div className="font-display text-3xl font-800 gold-gradient">{s.value}</div>
              <div className="text-xs text-[#6B6B72] mt-1 font-medium uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6B6B72] hover:text-[#C9A84C] transition-colors animate-float"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
