import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowRight, Check, Code2, Layers, Zap, Shield, Globe, Smartphone } from "lucide-react";

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Scalable web apps built with React, Next.js, and modern frameworks.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
    },
    {
      icon: Layers,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation.",
    },
    {
      icon: Shield,
      title: "Enterprise Software",
      description: "Custom business applications with enterprise-grade security.",
    },
  ];

  const tech = [
    "React & Next.js",
    "Node.js & Python",
    "PostgreSQL & MongoDB",
    "AWS & Azure",
    "Docker & Kubernetes",
    "GraphQL & REST APIs",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-full mb-6">
              <Code2 size={16} className="text-[#00D1FF]" />
              <span className="text-[#00D1FF] text-sm font-medium">Software Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
              Build Scalable{" "}
              <span className="bg-gradient-to-r from-[#00D1FF] to-[#6C5CE7] bg-clip-text text-transparent">
                Software Solutions
              </span>
            </h1>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] max-w-3xl mx-auto mb-8">
              Custom software development for startups and enterprises. MVPs, dashboards, APIs, and full-stack applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00D1FF] hover:bg-[#00B8E6] text-white font-semibold rounded-xl transition-all">
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </a>
              <a href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl hover:border-[#00D1FF] transition-all">
                <span className="text-black dark:text-white font-semibold">View Projects</span>
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                Development Services
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#00D1FF] transition-all">
                  <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-[#00D1FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">{service.title}</h3>
                  <p className="text-[#666666] dark:text-[#B0B0B0]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                Modern Tech Stack
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {tech.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white dark:bg-[#1A1A1A] rounded-xl p-4 border border-[#E5E5E5] dark:border-[#333333]">
                  <Check size={18} className="text-[#00D1FF]" />
                  <span className="text-black dark:text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8">
              From MVP to enterprise platform, we deliver production-ready software
            </p>
            <a href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D1FF] hover:bg-[#00B8E6] text-white font-semibold rounded-xl">
              <span>Get Started</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
