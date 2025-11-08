import { ExternalLink } from "lucide-react";

export default function PortfolioGrid() {
  const projects = [
    {
      title: "AI Marketing Strategy",
      category: "Marketing Automation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "Increased conversion rate by 340% using AI-powered targeting",
      gradient: "from-[#22C55E]/20 to-transparent",
      borderColor: "border-[#22C55E]/20",
    },
    {
      title: "Custom E-commerce Solution",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1557821120-9a67e45e9fee?w=800&q=80",
      description: "Built scalable platform handling 10k+ orders per day",
      gradient: "from-[#00D1FF]/20 to-transparent",
      borderColor: "border-[#00D1FF]/20",
    },
    {
      title: "Software Development Project",
      category: "Custom Software",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      description: "Delivered enterprise SaaS platform with 99.9% uptime",
      gradient: "from-[#6C5CE7]/20 to-transparent",
      borderColor: "border-[#6C5CE7]/20",
    },
    {
      title: "SEO Optimization Case",
      category: "SEO & Growth",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
      description: "Ranked #1 for 50+ keywords within 6 months",
      gradient: "from-[#F59E0B]/20 to-transparent",
      borderColor: "border-[#F59E0B]/20",
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
              Our Latest <span className="text-[#22C55E]">Work</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Success stories from businesses we've helped transform
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} border ${project.borderColor} hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-[#0B0B10]/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 h-80 flex flex-col justify-end">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium mb-4 self-start">
                    {project.category}
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#22C55E] font-medium text-sm group-hover:gap-3 transition-all">
                    <span>View Case Study</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-semibold transition-all duration-200"
            >
              <span>View All Projects</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
