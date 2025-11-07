import { Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const navigationLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quote", href: "/quote" },
  ];

  const serviceLinks = [
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI/ML Projects", href: "/services/ai-ml" },
    { name: "Web Design", href: "/services/web-design" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <footer
        className="bg-[#0A0A0A] border-t border-white/10 py-16 px-6"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1280px] mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & Newsletter Column */}
            <div className="lg:col-span-2">
              {/* Logo and Brand */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span
                  className="text-[#111111] dark:text-white text-xl font-bold"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Kyntrio
                </span>
              </div>

              <p className="text-[#666666] dark:text-[#B0B0B0] text-base mb-8 max-w-md leading-relaxed">
                Smart Web. Smarter Growth. We design, develop, and deploy
                AI-powered solutions that scale with your business.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-[#111111] dark:text-white font-semibold text-lg mb-4">
                  Stay updated
                </h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl text-[#111111] dark:text-white placeholder-[#666666] dark:placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent pr-12"
                    />
                    <Mail
                      size={20}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#666666] dark:text-[#B0B0B0]"
                    />
                  </div>
                  <button className="px-6 py-3 bg-[#6C5CE7] hover:bg-[#5B4BD6] text-white font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 flex items-center gap-2">
                    <span>Subscribe</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-[#111111] dark:text-white font-semibold text-lg mb-6">
                Company
              </h4>
              <nav className="space-y-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-[#666666] dark:text-[#B0B0B0] hover:text-[#6C5CE7] dark:hover:text-[#6C5CE7] text-base transition-colors duration-150 focus:outline-none focus:text-[#6C5CE7]"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-[#111111] dark:text-white font-semibold text-lg mb-6">
                Services
              </h4>
              <nav className="space-y-4">
                {serviceLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-[#666666] dark:text-[#B0B0B0] hover:text-[#6C5CE7] dark:hover:text-[#6C5CE7] text-base transition-colors duration-150 focus:outline-none focus:text-[#6C5CE7]"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom row - Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-8 border-t border-[#E5E5E5] dark:border-[#333333]">
            {/* Copyright */}
            <div
              className="text-[#666666] dark:text-[#B0B0B0] text-sm order-2 md:order-1"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              © 2025 NeuraWeb Labs. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center order-1 md:order-2 gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#666666] dark:text-[#B0B0B0] hover:text-[#6C5CE7] dark:hover:text-[#6C5CE7] text-sm transition-colors duration-150 focus:outline-none focus:text-[#6C5CE7]"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
