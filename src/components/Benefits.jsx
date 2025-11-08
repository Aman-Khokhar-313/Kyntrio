import { Check, ArrowRight, Shield, Zap } from "lucide-react";

export default function Benefits() {
  const efficiencyBenefits = [
    "Automate repetitive tasks and save 50+ hours per week",
    "AI-powered workflows that scale with your business",
    "Real-time analytics and performance tracking",
    "Seamless integration with existing tools",
  ];

  const securityBenefits = [
    "Enterprise-grade security and data encryption",
    "GDPR and compliance-ready infrastructure",
    "Regular security audits and monitoring",
    "99.9% uptime SLA guarantee",
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 md:py-24 px-6 bg-[#0B0B10]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Efficiency Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#22C55E]/10 to-transparent border border-[#22C55E]/20 p-8 md:p-10 group hover:border-[#22C55E]/40 transition-all duration-300">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E] rounded-full filter blur-[128px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/20 flex items-center justify-center mb-6">
                  <Zap size={28} className="text-[#22C55E]" />
                </div>
                
                <h3
                  className="text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.02em" }}
                >
                  Maximum Efficiency
                </h3>
                
                <div className="space-y-4 mb-8">
                  {efficiencyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-[#22C55E]" />
                      </div>
                      <p className="text-white/70 text-base leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
                
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold transition-all duration-200 group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Security Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6C5CE7]/10 to-transparent border border-[#6C5CE7]/20 p-8 md:p-10 group hover:border-[#6C5CE7]/40 transition-all duration-300">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C5CE7] rounded-full filter blur-[128px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#6C5CE7]/20 flex items-center justify-center mb-6">
                  <Shield size={28} className="text-[#6C5CE7]" />
                </div>
                
                <h3
                  className="text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.02em" }}
                >
                  Enterprise Security
                </h3>
                
                <div className="space-y-4 mb-8">
                  {securityBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6C5CE7]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-[#6C5CE7]" />
                      </div>
                      <p className="text-white/70 text-base leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
                
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6C5CE7] hover:bg-[#5B4BD6] text-white font-semibold transition-all duration-200 group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
