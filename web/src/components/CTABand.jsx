import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABand() {
  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 md:py-20 px-6 bg-gradient-to-br from-[#6C5CE7] to-[#5B4BD6] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, white 2px, transparent 2px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-[1000px] mx-auto text-center relative">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles size={32} className="text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-[48px] leading-tight md:leading-[1.1] text-white mb-6 max-w-3xl mx-auto"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to scale with AI?
          </h2>

          {/* Sub-text */}
          <p
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: "400",
            }}
          >
            Join 50+ companies already growing with our AI-powered solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-[#6C5CE7] font-semibold text-lg rounded-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6C5CE7] shadow-lg hover:shadow-xl"
            >
              <span>Book Discovery Call</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>

            <a
              href="/quote"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#6C5CE7] text-white font-semibold text-lg rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6C5CE7]"
            >
              <span>Get Free Quote</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
              <span>Results guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
