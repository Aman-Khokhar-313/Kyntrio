import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B10]/95 via-[#0B0B10]/90 to-[#0B0B10]/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1
                className={`text-5xl md:text-7xl leading-tight md:leading-[1.1] text-white mb-6 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                }}
              >
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-[#22C55E] via-[#00D1FF] to-[#6C5CE7] bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </h1>

              <p
                className={`text-lg md:text-xl text-white/70 mb-10 max-w-[55ch] leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Discover innovative web development and automation services today.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row items-start gap-4 mb-8 transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <a
                  href="/quote"
                  className="group px-8 py-4 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-[#22C55E]/30 flex items-center gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white font-semibold text-base transition-all duration-200 flex items-center gap-2"
                >
                  <span>Learn More</span>
                </a>
              </div>
            </div>

            {/* Right Column - Rating Badge */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-sm">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-white text-2xl font-bold mb-1">Rated 4.9/5</div>
                <div className="text-white/60 text-sm">Based on 1200+ reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#22C55E] rounded-full filter blur-[128px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#00D1FF] rounded-full filter blur-[128px] opacity-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </section>
    </>
  );
}
