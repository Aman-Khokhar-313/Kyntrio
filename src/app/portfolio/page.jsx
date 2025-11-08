import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      name: "E-Com AI Attribution",
      result: "CAC ↓ 42%, ROAS 3.5x",
      tags: ["AI", "Attribution", "Marketing"],
      description:
        "Built an AI-powered attribution system that tracks customer journeys across 15+ touchpoints, reducing customer acquisition costs by 42% and improving ROAS to 3.5x for a leading e-commerce brand.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "RAG Knowledge Bot",
      result: "Ticket deflection 61%",
      tags: ["AI", "RAG", "Support"],
      description:
        "Developed a retrieval-augmented generation chatbot for a SaaS company, deflecting 61% of support tickets while maintaining 94% customer satisfaction scores.",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Analytics Dashboard",
      result: "Data latency ↓ 80%",
      tags: ["Next.js", "Postgres"],
      description:
        "Built a real-time analytics dashboard processing 10M+ events daily, reducing data latency from 5 minutes to under 1 minute using optimized database queries and caching.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "ML-Powered Lead Scoring",
      result: "Conversion ↑ 127%",
      tags: ["ML", "Automation", "Sales"],
      description:
        "Implemented machine learning lead scoring system that increased sales conversion rates by 127% through predictive analysis of user behavior patterns.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Automated Content Engine",
      result: "Content output 8x",
      tags: ["AI", "Content", "Automation"],
      description:
        "Developed an AI-powered content generation system that increased content output by 8x while maintaining brand voice consistency across all marketing channels.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Performance Optimization",
      result: "Load time ↓ 73%",
      tags: ["Performance", "Web", "Optimization"],
      description:
        "Optimized a high-traffic e-commerce site, reducing average page load times by 73% and improving Core Web Vitals scores to 95+ across all metrics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-[1000px] mx-auto text-center">
            <h1 className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-black dark:text-white mb-6 font-bold">
              Selected <span className="text-[#22C55E]">Work</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555555] dark:text-[#B0B0B0] max-w-[60ch] mx-auto mb-12 leading-relaxed">
              Case studies and outcomes from real clients
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-3xl overflow-hidden border border-[#E5E5E5] dark:border-[#333333] hover:border-[#22C55E]/30 dark:hover:border-[#22C55E]/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#22C55E] to-[#00D1FF] relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-[#111111] dark:text-white mb-2">
                      {project.name}
                    </h3>

                    {/* Result */}
                    <div className="text-2xl font-bold text-[#22C55E] mb-4">
                      {project.result}
                    </div>

                    {/* Description */}
                    <p className="text-[#666666] dark:text-[#B0B0B0] text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* View Case Study Link */}
                    <div className="flex items-center gap-2 text-[#22C55E] font-medium text-sm group-hover:gap-3 transition-all duration-200">
                      <span>View Case Study</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-4">
                Our track record
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#B0B0B0]">
                Results that speak for themselves
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#22C55E] mb-2">
                  50+
                </div>
                <div className="text-[#666666] dark:text-[#B0B0B0] font-medium">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00D1FF] mb-2">
                  99%
                </div>
                <div className="text-[#666666] dark:text-[#B0B0B0] font-medium">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#22C55E] mb-2">
                  2.5x
                </div>
                <div className="text-[#666666] dark:text-[#B0B0B0] font-medium">
                  Avg ROI Increase
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#6C5CE7] mb-2">
                  24/7
                </div>
                <div className="text-[#666666] dark:text-[#B0B0B0] font-medium">
                  AI Monitoring
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
              Ready to be our next success story?
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
              Let's discuss how we can help you achieve similar results
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/quote"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-lg rounded-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 group"
              >
                <span>Start Your Project</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E0E0E0] dark:border-[#333333] rounded-2xl hover:border-[#22C55E] dark:hover:border-[#22C55E] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 group"
              >
                <span className="text-[#0D0D0D] dark:text-white font-semibold text-lg">
                  Schedule a Call
                </span>
                <ArrowRight
                  size={18}
                  className="text-[#22C55E] group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
