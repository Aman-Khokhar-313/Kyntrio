import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true, badge: "3" },
    { name: "Portfolio", href: "/portfolio", hasDropdown: true },
  ];

  const exploreLinks = [
    { icon: "✨", name: "Home", href: "/" },
    { icon: "⚡", name: "Services", href: "/services" },
    { icon: "📝", name: "Blog", href: "/blog" },
    { icon: "ℹ️", name: "About", href: "/about" },
    { icon: "📧", name: "Contact", href: "/contact" },
  ];

  const resourcesLinks = [
    { icon: "✨", name: "Quote", subtitle: "AI Solutions", href: "/quote" },
    { icon: "🎯", name: "Get", subtitle: "Get Insights", href: "/services" },
    { icon: "⚡", name: "Quote", subtitle: "Automation", href: "/quote" },
  ];

  const featuredContent = [
    {
      image: "🚀",
      title: "Accelerate Growth",
      subtitle: "Web Development",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      image: "📊",
      title: "AI Transformations",
      subtitle: "Marketing Insights",
      gradient: "from-blue-600 to-cyan-500",
    },
  ];

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <header
        className="bg-[#0A0A0A] h-16 md:h-16 px-6 border-b border-[#1F1F23]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-full">
          {/* Logo block */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-white font-bold text-lg">
              Kyntrio
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
                  {item.badge && (
                    <span className="bg-white text-black text-xs font-bold px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
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
                    <div className="absolute top-full left-0 mt-2 w-[750px] bg-[#0F0F0F] rounded-2xl shadow-2xl border border-[#252525] overflow-hidden z-50">
                    <div className="grid grid-cols-[200px_200px_1fr] p-6 gap-6">
                      {/* Explore Column */}
                      <div>
                        <h3 className="text-[#666666] text-xs font-semibold mb-4 uppercase tracking-wider">
                          Explore
                        </h3>
                        <div className="space-y-1">
                          {exploreLinks.map((link) => (
                            <a
                              key={link.name}
                              href={link.href}
                              className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors duration-150 py-2 px-2.5 rounded-lg hover:bg-white/5 group text-[14px]"
                            >
                              <span className="text-base opacity-60">{link.icon}</span>
                              <span className="font-normal">{link.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Resources Column */}
                      <div>
                        <h3 className="text-[#666666] text-xs font-semibold mb-4 uppercase tracking-wider">
                          Resources
                        </h3>
                        <div className="space-y-1">
                          {resourcesLinks.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.href}
                              className="block py-2 px-2.5 rounded-lg hover:bg-white/5 group transition-colors duration-150"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="text-base opacity-60">{link.icon}</span>
                                <div>
                                  <div className="text-white/80 group-hover:text-white font-normal text-[14px] transition-colors">
                                    {link.name}
                                  </div>
                                  <div className="text-[#666666] text-xs font-normal">
                                    {link.subtitle}
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Featured Content Column */}
                      <div className="space-y-3">
                        {featuredContent.map((content, idx) => (
                          <div
                            key={idx}
                            className="bg-[#1A1A1A] rounded-xl p-3.5 hover:bg-[#1F1F1F] transition-all duration-200 cursor-pointer group border border-[#252525] hover:border-[#333333]"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${content.gradient} flex items-center justify-center text-xl flex-shrink-0 shadow-lg`}
                              >
                                {content.image}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-white font-semibold text-[13px] mb-0.5">
                                  {content.title}
                                </div>
                                <div className="text-[#888888] text-[12px] font-normal">
                                  {content.subtitle}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
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
              href="/services"
              className="text-white/90 hover:text-white font-medium text-[15px] px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-150 flex items-center gap-2"
            >
              <span>Learn More</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="/quote"
              className="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold text-[14px] transition-all duration-150 shadow-lg shadow-teal-500/20 flex items-center gap-2"
            >
              <span>Get Started</span>
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
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-white font-bold text-lg">
                  Kyntrio
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
                href="/services"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-medium text-sm hover:bg-white/5 transition-all duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Learn More</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="/quote"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm transition-all duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
