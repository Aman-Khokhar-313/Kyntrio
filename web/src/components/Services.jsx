import { useState } from "react";
import {
  TrendingUp,
  Code,
  Brain,
  Palette,
  Search,
  Network,
  Workflow,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: "digital-marketing",
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Performance ads, content ops, AI-led analytics.",
      href: "/services/digital-marketing",
    },
    {
      id: "software-development",
      icon: Code,
      title: "Software Development",
      description: "Web apps, dashboards, integrations.",
      href: "/services/software-development",
    },
    {
      id: "ai-ml-projects",
      icon: Brain,
      title: "AI/ML Projects & Custom Software",
      description: "Chatbots, predictive models, retrieval-augmented apps.",
      href: "/services/ai-ml",
    },
    {
      id: "web-design",
      icon: Palette,
      title: "Customized Web Design",
      description: "Conversion-first, responsive, fast.",
      href: "/services/web-design",
    },
    {
      id: "seo-optimization",
      icon: Search,
      title: "SEO Optimization",
      description: "Technical SEO, on-page, backlinks, schema.",
      href: "/services/seo",
    },
    {
      id: "ml-architecture",
      icon: Network,
      title: "ML Architecture & Model Designing",
      description: "Pipelines, monitoring, MLOps.",
      href: "/services/ml-architecture",
    },
    {
      id: "ai-automation",
      icon: Workflow,
      title: "AI Automation Workflows",
      description: "CRM workflows, lead scoring, content engines.",
      href: "/services/ai-automation",
    },
  ];

  const isCardActive = (service) => {
    return hoveredCard === service.id;
  };

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
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
              What we <span className="text-[#6C5CE7]">do</span>
            </h2>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl text-[#555555] dark:text-[#B0B0B0] max-w-[60ch] mx-auto"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              End-to-end solutions from strategy to deployment
            </p>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              const active = isCardActive(service);

              return (
                <a
                  key={service.id}
                  href={service.href}
                  className={`
                    group relative p-6 md:p-8 rounded-3xl border transition-all duration-200 ease-out cursor-pointer block
                    focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-opacity-50
                    ${
                      active
                        ? "bg-[#6C5CE7] border-transparent transform scale-105"
                        : "bg-white dark:bg-[#1A1A1A] border-[#E8E7E4] dark:border-[#333333] hover:bg-gray-50 dark:hover:bg-[#242424] hover:border-[#6C5CE7]/20"
                    }
                  `}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Icon container */}
                  <div
                    className={`
                      w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 transition-all duration-200 ease-out
                      ${
                        active
                          ? "bg-white/20 border-white/30"
                          : "bg-[#F8F9FA] dark:bg-[#2A2A2A] border-[#E8E7E4] dark:border-[#404040] group-hover:bg-[#6C5CE7]/10 group-hover:border-[#6C5CE7]/20"
                      }
                    `}
                  >
                    <IconComponent
                      size={24}
                      strokeWidth={1.5}
                      className={`transition-all duration-200 ease-out ${
                        active
                          ? "text-white"
                          : "text-[#6C5CE7] dark:text-[#6C5CE7] group-hover:text-[#6C5CE7]"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      text-xl mb-3 transition-all duration-200 ease-out font-semibold
                      ${active ? "text-white" : "text-black dark:text-white"}
                    `}
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`
                      text-base leading-relaxed transition-all duration-200 ease-out mb-4
                      ${active ? "text-white/90" : "text-[#666666] dark:text-[#B0B0B0]"}
                    `}
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Learn more arrow */}
                  <div
                    className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-white"
                        : "text-[#6C5CE7] group-hover:text-[#5B4BD6]"
                    }`}
                  >
                    <span>Learn more</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </a>
              );
            })}
          </div>

          {/* View all services CTA */}
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E0E0E0] dark:border-[#333333] rounded-2xl hover:border-[#6C5CE7] dark:hover:border-[#6C5CE7] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 group"
            >
              <span className="text-[#0D0D0D] dark:text-white font-semibold text-lg">
                View All Services
              </span>
              <ArrowRight
                size={18}
                className="text-[#6C5CE7] group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
