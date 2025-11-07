import { Star } from "lucide-react";

export default function Proof() {
  const metrics = [
    {
      label: "Leads ↑",
      value: "3.1x",
      note: "in 90 days (avg.)",
    },
    {
      label: "Page Speed",
      value: "95+",
      note: "Lighthouse",
    },
    {
      label: "CAC ↓",
      value: "38%",
      note: "after AI attribution",
    },
  ];

  const testimonials = [
    {
      name: "Aarav S.",
      role: "Founder, FinTech SaaS",
      quote:
        "They shipped fast and the AI-led growth loop worked from week one.",
    },
  ];

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 md:py-24 px-6 bg-[#0F0F0F]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-black dark:text-white mb-6"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: "700",
                letterSpacing: "-0.02em",
              }}
            >
              Outcomes we've <span className="text-[#22C55E]">delivered</span>
            </h2>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl text-[#555555] dark:text-[#B0B0B0] max-w-[60ch] mx-auto"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Real results from real clients, powered by AI
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-3xl border border-[#E8E7E4] dark:border-[#333333] hover:border-[#6C5CE7]/20 dark:hover:border-[#6C5CE7]/30 transition-all duration-200"
              >
                <div
                  className="text-5xl md:text-6xl font-bold text-[#6C5CE7] mb-2"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  {metric.value}
                </div>
                <div
                  className="text-xl font-semibold text-black dark:text-white mb-1"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  {metric.label}
                </div>
                <div
                  className="text-sm text-[#666666] dark:text-[#B0B0B0]"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  {metric.note}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-[#E8E7E4] dark:border-[#333333]"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
                  {/* Quote Section */}
                  <div className="md:col-span-4">
                    {/* Star Rating */}
                    <div
                      className="flex items-center gap-1 mb-6"
                      role="img"
                      aria-label="5 out of 5 star rating"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-[#6C5CE7] text-[#6C5CE7]"
                        />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote
                      className="text-2xl md:text-3xl leading-relaxed text-[#111] dark:text-white mb-6"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Block */}
                    <div className="space-y-1">
                      <div
                        className="text-lg text-[#000] dark:text-white font-semibold"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        {testimonial.name}
                      </div>
                      <div
                        className="text-base text-[#666666] dark:text-[#B0B0B0]"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Avatar Section */}
                  <div className="md:col-span-1 flex justify-center md:justify-end">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] flex items-center justify-center">
                      <span className="text-white font-bold text-2xl md:text-3xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Proof Points */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6C5CE7] mb-2">50+</div>
              <div className="text-sm text-[#666666] dark:text-[#B0B0B0]">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00D1FF] mb-2">99%</div>
              <div className="text-sm text-[#666666] dark:text-[#B0B0B0]">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#22C55E] mb-2">2.5x</div>
              <div className="text-sm text-[#666666] dark:text-[#B0B0B0]">
                Avg ROI Increase
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6C5CE7] mb-2">24/7</div>
              <div className="text-sm text-[#666666] dark:text-[#B0B0B0]">
                AI Monitoring
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
