import { 
  ExternalLink, 
  KeyRound, 
  Lock, 
  Smartphone, 
  ClipboardList, 
  Laptop, 
  Handshake, 
  Building2, 
  LucideIcon 
} from "lucide-react";

interface Product {
  name: string;
  tag: string;
  desc: string;
  url: string;
  Icon: LucideIcon;
  color: string;
  border: string;
  featured?: boolean;
}

const products: Product[] = [
  {
    name: "IDCode.ng",
    tag: "Verification",
    desc: "Unique verification codes for documents, certificates, receipts, and products — with QR support and full audit trails.",
    url: "https://idcode.ng",
    Icon: KeyRound,
    color: "from-[var(--gold-light-20)] to-[var(--gold-light-10)]",
    border: "border-[var(--gold-light-30)]",
  },
  {
    name: "Deallock.ng",
    tag: "Commerce",
    desc: "Secure discounted, auction, and clearance items with a commitment deposit. Reserve now, pay later.",
    url: "https://deallock.ng",
    Icon: Lock,
    color: "from-[var(--gold-light-20)] to-transparent",
    border: "border-[var(--gold-light-30)]",
  },
  {
    name: "Scancode.ng",
    tag: "QR Platform",
    desc: "Dynamic and static QR code generation with scan analytics, link management, and event access control.",
    url: "https://scancode.net",
    Icon: Smartphone,
    color: "from-[var(--gold-light-20)] to-transparent",
    border: "border-[var(--gold-light-30)]",
  },
  {
    name: "Submitar.ng",
    tag: "Representation",
    desc: "Submit documents, get represented, and retrieve records at government offices or institutions — without being there.",
    url: "https://submitar.ng",
    Icon: ClipboardList, // Assigned corrected icon variable
    color: "from-[var(--gold-light-20)] to-transparent",
    border: "border-[var(--gold-light-30)]",
  },
  {
    name: "ComputerService.ng",
    tag: "IT Support",
    desc: "On-site and remote computer repairs, hardware upgrades, software installation, and managed IT services.",
    url: "https://computerservice.ng",
    Icon: Laptop,
    color: "from-[var(--gold-light-20)] to-transparent",
    border: "border-[var(--gold-light-30)]",
  },
  {
    name: "Voluwork.ng",
    tag: "Social Impact",
    desc: "Connect volunteers with NGOs, community projects, and CSR teams. Track impact, recognize contributions.",
    url: "https://voluwork.ng",
    Icon: Handshake,
    color: "from-[var(--gold-light-20)] to-transparent",
    border: "border-[var(--gold-light-30)]",
  },
  {
    name: "AbujaRentHub.ng",
    tag: "Real Estate",
    desc: "Abuja's premier rental and shortlet marketplace — connecting landlords, tenants, and travelers.",
    url: "https://abujarenthub.ng",
    Icon: Building2,
    color: "from-[var(--gold-light-15)] to-transparent",
    border: "border-[var(--gold-light-30)]",
    featured: true,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-28 px-6 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#C9A84C] mb-4">
              Product Ecosystem
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-[var(--foreground)]">
              7 Platforms. <br />
              <span className="gold-gradient">One Vision.</span>
            </h2>
          </div>
            <p className="text-[var(--text-tertiary)] max-w-sm text-base font-light leading-relaxed md:text-right">
            A growing portfolio of technology brands solving real everyday
            challenges for individuals, businesses, and institutions.
          </p>
        </div>

        <hr className="divider-gold mb-16 opacity-30" />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => {
            const ProductIcon = p.Icon;
            return (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-hover group relative rounded-2xl border ${
                  p.border
                } bg-gradient-to-br ${p.color} bg-[#111113] p-7 flex flex-col gap-4 ${
                  p.featured ? "ring-1 ring-[var(--gold-light-30)]" : ""
                }`}
              >
                {p.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--gold-light-20)] border border-[var(--gold-light-30)] text-[var(--gold)] font-medium">
                      Featured
                    </span>
                  </div>
                )}
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-[#C9A84C]">
                      <ProductIcon size={24} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display font-700 text-[var(--foreground)] text-base">
                        {p.name}
                      </h3>
                      <span className="text-xs text-[var(--text-tertiary)] font-medium">
                        {p.tag}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Desc */}
                <p className="text-[var(--text-tertiary)] text-sm leading-relaxed flex-1">
                  {p.desc}
                </p>
                {/* CTA */}
                <div className="flex items-center gap-1.5 text-[var(--gold)] text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                  Visit Platform <ExternalLink size={12} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
