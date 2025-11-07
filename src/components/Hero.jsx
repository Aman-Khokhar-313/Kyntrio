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

      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,92,231,0.1),transparent_50%)] opacity-40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
          {/* Headline Block */}
          <div className="text-center mb-16">
            {/* Floating badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <Sparkles size={16} className="text-[#6C5CE7]" />
              <span className="text-white/80 text-sm font-medium">AI-Powered Solutions</span>
            </div>

            <h1
              className={`text-5xl md:text-7xl leading-tight md:leading-[1.1] text-white mb-6 max-w-4xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: "800",
                letterSpacing: "-0.03em",
              }}
            >
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-[#6C5CE7] via-[#00D1FF] to-[#6C5CE7] bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className={`text-lg md:text-xl text-white/60 mb-10 max-w-[65ch] mx-auto leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              We build AI-powered web applications, intelligent automation workflows, and
              data-driven marketing systems that scale your growth.
            </p>

            {/* Primary CTAs */}
            <div
              className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="/quote"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#6C5CE7] to-[#5B4BD6] hover:from-[#5B4BD6] hover:to-[#6C5CE7] text-white font-semibold text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-[#6C5CE7]/20 hover:shadow-xl hover:shadow-[#6C5CE7]/30 flex items-center gap-2"
              >
                <span>Get Free AI Audit</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-white font-semibold text-base transition-all duration-200 flex items-center gap-2"
              >
                <span>View Services</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div
              className={`flex flex-wrap justify-center items-center gap-6 text-white/40 text-sm transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <span>3.5x Average ROAS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                <span>95+ Lighthouse Score</span>
              </div>
            </div>
          </div>

          {/* Visual Element - Dashboard Preview */}
          <div
            className={`max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-1 shadow-2xl">
              {/* Browser Chrome */}
              <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-t-xl px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 ml-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/40 w-64">
                    kyntrio.com
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-b-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {/* Stat Card 1 */}
                  <div className="bg-gradient-to-br from-[#6C5CE7]/20 to-transparent border border-[#6C5CE7]/20 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60 text-sm">Revenue Growth</span>
                      <Zap size={16} className="text-[#6C5CE7]" />
                    </div>
                    <div className="text-white text-3xl font-bold mb-1">+156%</div>
                    <div className="text-emerald-400 text-xs font-medium">↑ 23% this month</div>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="bg-gradient-to-br from-[#00D1FF]/20 to-transparent border border-[#00D1FF]/20 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60 text-sm">AI Automation</span>
                      <Sparkles size={16} className="text-[#00D1FF]" />
                    </div>
                    <div className="text-white text-3xl font-bold mb-1">847hrs</div>
                    <div className="text-emerald-400 text-xs font-medium">Saved monthly</div>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/20 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60 text-sm">Conversion Rate</span>
                      <ArrowRight size={16} className="text-emerald-400" />
                    </div>
                    <div className="text-white text-3xl font-bold mb-1">4.8%</div>
                    <div className="text-emerald-400 text-xs font-medium">↑ 2.1% increase</div>
                  </div>
                </div>

                {/* Chart Visualization */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] rounded-2xl flex items-center justify-center mb-3 mx-auto shadow-lg shadow-[#6C5CE7]/30">
                      <Sparkles size={32} className="text-white" />
                    </div>
                    <p className="text-white/60 text-sm font-medium">
                      AI-powered analytics dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#6C5CE7] rounded-full filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#00D1FF] rounded-full filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </section>
    </>
  );
}
