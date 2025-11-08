export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Inc",
      avatar: "https://i.pravatar.cc/150?img=1",
      quote: "NeuraWeb Labs transformed our business with AI automation. We've saved 40 hours per week and increased revenue by 200%.",
      gradient: "from-[#22C55E]/10 to-transparent",
      borderColor: "border-[#22C55E]/20",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, GrowthHub",
      avatar: "https://i.pravatar.cc/150?img=12",
      quote: "The custom software they built is exceptional. Our team productivity increased by 150% within the first month.",
      gradient: "from-[#00D1FF]/10 to-transparent",
      borderColor: "border-[#00D1FF]/20",
    },
    {
      name: "Emily Watson",
      role: "Marketing Director, Innovate Co",
      avatar: "https://i.pravatar.cc/150?img=5",
      quote: "Their SEO expertise is unmatched. We ranked #1 for our main keywords in just 4 months. Incredible results!",
      gradient: "from-[#6C5CE7]/10 to-transparent",
      borderColor: "border-[#6C5CE7]/20",
    },
    {
      name: "David Kim",
      role: "CTO, DataFlow Systems",
      avatar: "https://i.pravatar.cc/150?img=14",
      quote: "The ML pipelines they designed handle millions of records daily. Their technical expertise is world-class.",
      gradient: "from-[#F59E0B]/10 to-transparent",
      borderColor: "border-[#F59E0B]/20",
    },
    {
      name: "Lisa Anderson",
      role: "VP Operations, ScaleUp",
      avatar: "https://i.pravatar.cc/150?img=9",
      quote: "Outstanding service! They delivered our project ahead of schedule and exceeded all expectations. Highly recommended!",
      gradient: "from-[#EC4899]/10 to-transparent",
      borderColor: "border-[#EC4899]/20",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
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
              What Our Clients <span className="text-[#22C55E]">Say</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm border ${testimonial.borderColor} p-6 md:p-8 hover:scale-[1.02] transition-all duration-300 ${
                  index === 4 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="text-white/10 text-6xl font-serif mb-4">"</div>

                {/* Quote Text */}
                <p
                  className="text-white/80 text-base leading-relaxed mb-6"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-white/20"
                  />
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
