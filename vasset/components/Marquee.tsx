"use client";

const items = [
  "IDCode.ng",
  "Deallock.ng",
  "Scancode.ng",
  "Submitar.ng",
  "ComputerService.ng",
  "Voluwork.ng",
  "AbujaRentHub.ng",
  "Property Management",
  "Shortlet Services",
  "Digital Verification",
  "IT Support",
  "Business Automation",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="py-6 border-y border-[#ffffff08] overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0A0A0B, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0A0A0B, transparent)" }} />

      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm text-[#6B6B72] font-medium shrink-0">
            <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
