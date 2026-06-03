import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

const contactItems = [
  { icon: Globe, label: "Website", value: "vassetglobal.com", href: "https://vassetglobal.com" },
  { icon: Mail, label: "Email", value: "info@vassetglobal.com", href: "mailto:info@vassetglobal.com" },
  { icon: Phone, label: "Phone", value: "07031031944", href: "tel:07031031944" },
];

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "IDCode.ng", href: "https://idcode.ng" },
  { label: "Deallock.ng", href: "https://deallock.ng" },
  { label: "Scancode.ng", href: "https://scancode.ng" },
  { label: "Submitar.ng", href: "https://submitar.ng" },
  { label: "ComputerService.ng", href: "https://computerservice.ng" },
  { label: "Voluwork.ng", href: "https://voluwork.ng" },
  { label: "AbujaRentHub.ng", href: "https://abujarenthub.ng" },
];

export default function ContactFooter() {
  return (
    <>
      {/* CTA Band */}
      <section
        id="contact"
        className="py-28 px-6 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-medium tracking-widest uppercase text-[#C9A84C] mb-4">
            Let&apos;s Work Together
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-700 text-white mb-6 leading-tight">
            Ready to Build<br />
            <span className="gold-gradient">Something Great?</span>
          </h2>
          <p className="text-[#6B6B72] text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you need property management, a technology platform, or business support — VAsset Global has the expertise, the team, and the tools to deliver.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group card-hover bg-[#111113] border border-[#ffffff08] rounded-2xl p-6 text-center hover:border-[#C9A84C33]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C12] border border-[#C9A84C1A] flex items-center justify-center mx-auto mb-3">
                  <item.icon size={18} className="text-[#C9A84C]" />
                </div>
                <p className="text-xs text-[#6B6B72] uppercase tracking-wider mb-1 font-medium">
                  {item.label}
                </p>
                <p className="text-white text-sm font-medium group-hover:text-[#C9A84C] transition-colors">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          {/* Big CTA */}
          <a
            href="mailto:info@vassetglobal.com"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#C9A84C] text-black font-semibold rounded-full hover:bg-[#E8C87A] transition-all duration-300 text-base"
          >
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ffffff08] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">
            {/* Brand */}
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#8B6914] flex items-center justify-center font-display font-800 text-sm text-black">
                  V
                </div>
                <span className="font-display font-700 text-lg">
                  VAsset<span className="gold"> Global</span>
                </span>
              </div>
              <p className="text-[#6B6B72] text-sm leading-relaxed">
                Managing Assets. Building Solutions. Creating Opportunities.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-[#6B6B72] hover:text-[#C9A84C] transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <hr className="divider-gold opacity-20 mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B72]">
            <p>© {new Date().getFullYear()} VAsset Global. All rights reserved.</p>
            <p>
              <a href="https://vassetglobal.com" className="hover:text-[#C9A84C] transition-colors">
                vassetglobal.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
