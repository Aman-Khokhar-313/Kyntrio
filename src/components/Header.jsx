import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesMenuItems = [
    { icon: "🤖", name: "AI Automation", description: "Intelligent workflows & automation", href: "/services/ai-automation" },
    { icon: "🧠", name: "AI/ML Projects", description: "Custom AI solutions", href: "/services/ai-ml" },
    { icon: "💻", name: "Software Development", description: "Web apps & dashboards", href: "/services/software-development" },
    { icon: "🎨", name: "Web Design", description: "Conversion-first design", href: "/services/web-design" },
    { icon: "🔍", name: "SEO", description: "Technical SEO & optimization", href: "/services/seo" },
    { icon: "📊", name: "Data Pipelines", description: "ML architecture & data ops", href: "/services/ml-architecture" },
  ];

  const featuredService = {
    title: "Not sure where to start?",
    description: "Get a free consultation and discover how AI can transform your business.",
    buttonText: "Schedule Call",
    href: "/contact",
  };

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <header
        className="sticky top-0 z-50 bg-[#0B0B10]/80 backdrop-blur-xl h-16 md:h-16 px-6 border-b border-white/10"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-full">
          {/* Logo block */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-white font-bold text-lg">
              NeuraWeb Labs
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-150 font-medium text-[15px] px-4 py-2 flex items-center gap-1.5 rounded-lg hover:bg-white/5"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <>
                    {/* Invisible bridge to prevent dropdown from closing */}
                    <div className="absolute top-full left-0 w-full h-2" />
                    <div className="absolute top-full left-0 mt-2 w-[850px] bg-[#0F0F0F] rounded-2xl shadow-2xl border border-[#252525] overflow-hidden z-50">
                      <div className="p-8">
                        <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {servicesMenuItems.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
                            >
                              <div className="text-2xl mb-3">{service.icon}</div>
                              <div className="text-white font-semibold text-sm mb-1 group-hover:text-[#22C55E] transition-colors">
                                {service.name}
                              </div>
                              <div className="text-white/60 text-xs">
                                {service.description}
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <div className="bg-gradient-to-br from-[#22C55E]/10 to-transparent border border-[#22C55E]/20 rounded-xl p-4">
                            <div className="text-white font-semibold text-sm mb-1">
                              {featuredService.title}
                            </div>
                            <div className="text-white/60 text-xs mb-3">
                              {featuredService.description}
                            </div>
                            <a
                              href={featuredService.href}
                              className="inline-flex items-center gap-2 text-[#22C55E] text-sm font-medium hover:gap-3 transition-all"
                            >
                              {featuredService.buttonText}
                              <ArrowRight size={14} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/contact"
              className="text-white/90 hover:text-white font-medium text-[15px] px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/5 transition-all duration-150 flex items-center gap-2"
            >
              <span>Request Info</span>
            </a>
            <a
              href="/quote"
              className="px-5 py-2.5 rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-[14px] transition-all duration-150 shadow-lg shadow-[#22C55E]/20 flex items-center gap-2"
            >
              <span>Start Now</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#121212] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col">
            {/* Mobile Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-[#1F1F23]">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-white font-bold text-lg">
                  NeuraWeb Labs
                </span>
              </div>
              <button
                className="p-2 text-white focus:outline-none rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-6 py-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between py-3 px-3 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-150 font-medium text-base rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="bg-white text-black text-xs font-bold px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="px-6 py-6 space-y-3 border-t border-[#1F1F23]">
              <a
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Request Info</span>
              </a>
              <a
                href="/quote"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-sm transition-all duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Start Now</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
