import { Building2, Cpu, Wrench, Users, ShieldCheck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Property Asset Management",
    desc: "Comprehensive residential and commercial property management — from tenant relations to maintenance coordination and documentation.",
    tags: ["Residential", "Commercial", "Facility Mgmt"],
    accent: "#C9A84C",
  },
  {
    icon: BarChart3,
    title: "Shortlet Management",
    desc: "Full-service shortlet property setup, listing management, guest coordination, and revenue optimization for maximum returns.",
    tags: ["Shortlet Setup", "Guest Mgmt", "Revenue Ops"],
    accent: "#C9A84C",
  },
  {
    icon: Cpu,
    title: "Digital Product Development",
    desc: "Web apps, mobile applications, business automation, API integrations, and cloud solutions tailored to your operational needs.",
    tags: ["Web Dev", "Mobile Apps", "Automation"],
    accent: "#C9A84C",
  },
  {
    icon: Wrench,
    title: "IT Support Services",
    desc: "Reliable computer repairs, network support, hardware maintenance, and managed IT services for homes and enterprises.",
    tags: ["Repairs", "Network", "Managed IT"],
    accent: "#C9A84C",
  },
  {
    icon: ShieldCheck,
    title: "Verification & Authentication",
    desc: "Generate and manage unique verification codes for documents, certificates, products, and receipts with full audit trails.",
    tags: ["ID Codes", "QR Verify", "Audit Trail"],
    accent: "#C9A84C",
  },
  {
    icon: Users,
    title: "Business Support Services",
    desc: "Document representation, submission handling, volunteer management, and workforce solutions for organizations of all sizes.",
    tags: ["Document Rep", "Submissions", "Workforce"],
    accent: "#C9A84C",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-[#C9A84C] mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-[var(--foreground)] mb-4">
            End-to-End Services,<br />
            <span className="gold-gradient">One Ecosystem</span>
          </h2>
          <p className="text-[var(--text-tertiary)] max-w-xl mx-auto text-lg font-light">
            From physical assets to digital infrastructure — we manage, build, and grow what matters most to your business.
          </p>
        </div>

        <hr className="divider-gold mb-16 opacity-30" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="card-hover group relative bg-[var(--card-bg)] border border-[var(--border-light)] rounded-2xl p-7 overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
              />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--gold-light-10)] border border-[var(--gold-light-20)] flex items-center justify-center mb-5">
                <s.icon size={22} className="text-[#C9A84C]" />
              </div>

              <h3 className="font-display font-600 text-[var(--foreground)] text-lg mb-3">{s.title}</h3>
              <p className="text-[var(--text-tertiary)] text-sm leading-relaxed mb-5">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--border-light)] border border-[var(--border-light)] text-[var(--text-secondary)] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
