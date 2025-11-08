import { Check, ArrowRight } from "lucide-react";

export default function PricingTable() {
  const plans = [
    {
      name: "Audit",
      price: "$49",
      period: "one-time",
      description: "Perfect for getting started",
      features: [
        "Comprehensive site audit",
        "SEO analysis report",
        "Performance recommendations",
        "Technical review",
        "Email support",
      ],
      gradient: "from-[#6C5CE7]/10 to-transparent",
      borderColor: "border-white/10",
      buttonStyle: "bg-white/5 hover:bg-white/10 text-white border border-white/20",
      popular: false,
    },
    {
      name: "Growth",
      price: "$99",
      period: "per month",
      description: "Best for growing businesses",
      features: [
        "Everything in Audit",
        "AI automation setup",
        "Custom integrations",
        "Monthly optimization",
        "Priority support",
        "Analytics dashboard",
      ],
      gradient: "from-[#22C55E]/20 to-transparent",
      borderColor: "border-[#22C55E]/40",
      buttonStyle: "bg-[#22C55E] hover:bg-[#16A34A] text-white",
      popular: true,
    },
    {
      name: "Custom",
      price: "$199",
      period: "per month",
      description: "For enterprise needs",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "Custom ML models",
        "White-label solutions",
        "24/7 support",
        "Unlimited requests",
      ],
      gradient: "from-[#00D1FF]/10 to-transparent",
      borderColor: "border-white/10",
      buttonStyle: "bg-white/5 hover:bg-white/10 text-white border border-white/20",
      popular: false,
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 md:py-24 px-6 bg-[#0B0B10]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.02em" }}
            >
              Simple, Transparent <span className="text-[#22C55E]">Pricing</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${plan.gradient} backdrop-blur-sm border ${plan.borderColor} p-8 ${
                  plan.popular ? "scale-105 shadow-2xl shadow-[#22C55E]/20" : ""
                } hover:scale-105 transition-all duration-300`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 rounded-full bg-[#22C55E] text-white text-xs font-bold uppercase">
                      Popular
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <div className="mb-6">
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-5xl font-bold text-white"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-white/60 text-base">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-[#22C55E]" />
                      </div>
                      <span className="text-white/80 text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="/quote"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-200 group ${plan.buttonStyle}`}
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-white/60 text-sm">
              Need a custom solution?{" "}
              <a href="/contact" className="text-[#22C55E] hover:text-[#16A34A] transition-colors font-medium">
                Contact us
              </a>{" "}
              for enterprise pricing
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
