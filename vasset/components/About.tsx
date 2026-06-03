import { Target, Eye, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide innovative asset management, property management, business support, and technology-driven solutions that help individuals, businesses, and organizations manage assets, secure transactions, verify authenticity, and improve operational efficiency.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become Africa's leading asset management and technology solutions company by building innovative platforms that simplify asset ownership, verification, service access, property management, and business operations.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    text: "We combine deep operational expertise with cutting-edge technology to build practical, scalable solutions. Every platform we create is designed to solve a real problem — and deliver measurable value from day one.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#C9A84C] mb-4">
              Who We Are
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-6 leading-tight">
              More Than a Company —<br />
              <span className="gold-gradient">A Movement</span>
            </h2>
            <p className="text-[#6B6B72] text-lg font-light leading-relaxed mb-8">
              VAsset Global is a diversified asset management and technology company focused on delivering practical solutions across real estate, digital verification, commerce, business services, and workforce management.
            </p>
            <p className="text-[#6B6B72] text-base font-light leading-relaxed mb-10">
              We serve as the parent company for a growing portfolio of technology products and service brands — each designed to solve everyday challenges for individuals, businesses, and institutions across Africa.
            </p>

            {/* Tagline block */}
            <div className="border-l-2 border-[#C9A84C] pl-6 py-1">
              <p className="font-display text-xl font-600 text-white italic">
                &ldquo;Managing Assets. Building Solutions. Creating Opportunities.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="group flex gap-5 bg-[#111113] border border-[#ffffff08] rounded-2xl p-6 hover:border-[#C9A84C22] transition-all duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#C9A84C12] border border-[#C9A84C1A] flex items-center justify-center">
                  <p.icon size={20} className="text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-display font-600 text-white mb-2">{p.title}</h3>
                  <p className="text-[#6B6B72] text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
