import { useState, useEffect } from "react";
import { Play, ArrowRight } from "lucide-react";

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

      <section
        className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(108, 92, 231, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(108, 92, 231, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto relative">
          {/* Headline Block */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-[64px] leading-tight md:leading-[1.1] text-[#0D0D0D] dark:text-white mb-6 max-w-5xl mx-auto"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: "700",
                letterSpacing: "-0.02em",
              }}
            >
              Build once. <span className="text-[#6C5CE7]">Scale with AI.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-[#555555] dark:text-[#C0C0C0] opacity-90 mb-10 max-w-[60ch] mx-auto leading-relaxed">
              Web development, AI automation, and data-driven marketing under
              one roof.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
              <a
                href="/quote"
                className="px-8 py-4 rounded-2xl bg-[#6C5CE7] hover:bg-[#5B4BD6] text-white font-semibold text-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                Get a Free AI Audit
              </a>

              <a
                href="/portfolio"
                className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E0E0E0] dark:border-[#333333] rounded-2xl hover:border-[#C5C5C5] dark:hover:border-[#555555] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2"
              >
                <span className="text-[#0D0D0D] dark:text-white font-semibold text-lg">
                  See Our Work
                </span>
                <ArrowRight
                  size={18}
                  className="text-[#6C5CE7] group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative max-w-[1000px] mx-auto">
            <div
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Main Dashboard Frame */}
              <div
                className="relative rounded-3xl border-2 border-[#E0E0E0] dark:border-[#333333] overflow-hidden bg-white dark:bg-[#1A1A1A] p-8 shadow-2xl"
                style={{
                  height: "500px",
                }}
              >
                {/* Dashboard Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#0D0D0D] dark:text-white mb-2">
                    AI Analytics Dashboard
                  </h3>
                  <p className="text-sm text-[#666666] dark:text-[#AAAAAA]">
                    Real-time insights powering smarter decisions
                  </p>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-[#6C5CE7] to-[#5B4BD6] rounded-2xl p-4 text-white">
                    <div className="text-3xl font-bold mb-1">3.1x</div>
                    <div className="text-sm opacity-90">Lead Growth</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#00D1FF] to-[#0099CC] rounded-2xl p-4 text-white">
                    <div className="text-3xl font-bold mb-1">95+</div>
                    <div className="text-sm opacity-90">Performance</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl p-4 text-white">
                    <div className="text-3xl font-bold mb-1">38%</div>
                    <div className="text-sm opacity-90">Cost Reduction</div>
                  </div>
                </div>

                {/* Chart Visualization */}
                <div className="bg-[#F8F9FA] dark:bg-[#2A2A2A] rounded-xl p-4 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] rounded-full flex items-center justify-center mb-3 mx-auto">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#6C5CE7] rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-sm text-[#666666] dark:text-[#AAAAAA]">
                      AI-powered insights loading...
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className={`absolute -bottom-4 -left-4 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="bg-[#6C5CE7] text-white px-4 py-2 rounded-2xl font-semibold text-sm shadow-lg">
                  Neural Network Active
                </div>
              </div>

              <div
                className={`absolute -top-4 -right-4 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="bg-[#00D1FF] text-white px-4 py-2 rounded-2xl font-semibold text-sm shadow-lg">
                  Auto-scaling
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
