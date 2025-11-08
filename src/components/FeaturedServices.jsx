import { ArrowRight } from "lucide-react";

export default function FeaturedServices() {
  const services = [
    {
      title: "Core Services",
      description: "Comprehensive web solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      gradient: "from-blue-600/20 to-cyan-500/20",
      borderColor: "border-cyan-500/20",
    },
    {
      title: "Automation Solutions",
      description: "AI-powered workflows",
      pattern: true,
      gradient: "from-orange-600/20 to-red-500/20",
      borderColor: "border-orange-500/20",
      icon: "⚡",
    },
    {
      title: "Data Pipelines",
      description: "ML architecture & ETL",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      gradient: "from-purple-600/20 to-pink-500/20",
      borderColor: "border-purple-500/20",
    },
    {
      title: "AI Marketing",
      description: "Intelligent campaign optimization",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      gradient: "from-emerald-600/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
    },
    {
      title: "Custom Software",
      description: "Tailored solutions for your needs",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      gradient: "from-indigo-600/20 to-blue-500/20",
      borderColor: "border-indigo-500/20",
    },
    {
      title: "SEO Optimization",
      description: "Rank higher, convert better",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
      gradient: "from-yellow-600/20 to-amber-500/20",
      borderColor: "border-yellow-500/20",
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
              Featured <span className="text-[#22C55E]">Services</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.borderColor} hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
              >
                {/* Background Image or Pattern */}
                {service.image ? (
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-[#0B0B10]/80 to-transparent"></div>
                  </div>
                ) : (
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 10px, transparent 10px, transparent 20px)`
                    }}></div>
                  </div>
                )}

                {/* Content */}
                <div className="relative p-8 h-64 flex flex-col justify-end">
                  {service.icon && (
                    <div className="text-6xl mb-4 opacity-80">{service.icon}</div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#22C55E] font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
