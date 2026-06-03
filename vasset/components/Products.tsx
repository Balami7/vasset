import { 
  ExternalLink, 
  KeyRound, 
  Lock, 
  Smartphone, 
  ClipboardText, 
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
  Icon: LucideIcon; // Changed from string to LucideIcon type
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
    Icon: KeyRound, // Replaced emoji / URL code with KeyRound
    color: "from-[#C9A84C22] to-[#8B691408]",
    border: "border-[#C9A84C30]",
  },
  {
    name: "Deallock.ng",
    tag: "Commerce",
    desc: "Secure discounted, auction, and clearance items with a commitment deposit. Reserve now, pay later.",
    url: "https://deallock.ng",
    Icon: Lock, // Replaced emoji / URL code with Lock
    color: "from-[#1A3A2A22] to-transparent",
    border: "border-[#2A5A3A30]",
  },
  {
    name: "Scancode.ng",
    tag: "QR Platform",
    desc: "Dynamic and static QR code generation with scan analytics, link management, and event access control.",
    url: "https://scancode.ng",
    Icon: Smartphone, // Replaced 📱 with Smartphone
    color: "from-[#1A2A3A22] to-transparent",
    border: "border-[#2A3A5A30]",
  },
  {
    name: "Submitar.ng",
    tag: "Representation",
    desc: "Submit documents, get represented, and retrieve records at government offices or institutions — without being there.",
    url: "https://submitar.ng",
    Icon: ClipboardText, // Replaced 📋 with ClipboardText
    color: "from-[#2A1A3A22] to-transparent",
    border: "border-[#3A2A5A30]",
  },
  {
    name: "ComputerService.ng",
    tag: "IT Support",
    desc: "On-site and remote computer repairs, hardware upgrades, software installation, and managed IT services.",
    url: "https://computerservice.ng",
    Icon: Laptop, // Replaced 💻 with Laptop
    color: "from-[#3A1A1A22] to-transparent",
    border: "border-[#5A2A2A30]",
  },
  {
    name: "Voluwork.ng",
    tag: "Social Impact",
    desc: "Connect volunteers with NGOs, community projects, and CSR teams. Track impact, recognize contributions.",
    url: "https://voluwork.ng",
    Icon: Handshake, // Replaced 🤝 with Handshake
    color: "from-[#1A3A1A22] to-transparent",
    border: "border-[#2A5A2A30]",
  },
  {
    name: "AbujaRentHub.ng",
    tag: "Real Estate",
    desc: "Abuja's premier rental and shortlet marketplace — connecting landlords, tenants, and travelers.",
    url: "https://abujarenthub.ng",
    Icon: Building2, // Replaced 🏙️ with Building2
    color: "from-[#C9A84C15] to-transparent",
    border: "border-[#C9A84C25]",
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
            <h2 className="font-display text-4xl md:text-5xl font-700 text-white">
              7 Platforms.
              <br />
              <span className="gold-gradient">One Vision.</span>
            </h2>
          </div>
          <p className="text-[#6B6B72] max-w-sm text-base font-light leading-relaxed md:text-right">
            A growing portfolio of technology brands solving real everyday
            challenges for individuals, businesses, and institutions.
          </p>
        </div>

        <hr className="divider-gold mb-16 opacity-30" />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => {
            const ProductIcon = p.Icon; // Assigning icon to local variable for JSX rendering
            return (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-hover group relative rounded-2xl border ${
                  p.border
                } bg-gradient-to-br ${p.color} bg-[#111113] p-7 flex flex-col gap-4 ${
                  p.featured ? "ring-1 ring-[#C9A84C30]" : ""
                }`}
              >
                {p.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#C9A84C22] border border-[#C9A84C44] text-[#C9A84C] font-medium">
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
                      <h3 className="font-display font-700 text-white text-base">
                        {p.name}
                      </h3>
                      <span className="text-xs text-[#6B6B72] font-medium">
                        {p.tag}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Desc */}
                <p className="text-[#6B6B72] text-sm leading-relaxed flex-1">
                  {p.desc}
                </p>
                {/* CTA */}
                <div className="flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all">
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
