import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowRight, Check, Database, GitBranch, Activity, Cloud } from "lucide-react";

export default function MLArchitecturePage() {
  const services = [
    {
      icon: Database,
      title: "Data Pipelines",
      description: "Scalable ETL pipelines for processing millions of records daily.",
    },
    {
      icon: GitBranch,
      title: "MLOps",
      description: "Automated model training, versioning, and deployment workflows.",
    },
    {
      icon: Activity,
      title: "Monitoring",
      description: "Real-time performance tracking and model drift detection.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS, Azure, and GCP deployment with auto-scaling.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full mb-6">
              <Database size={16} className="text-[#8B5CF6]" />
              <span className="text-[#8B5CF6] text-sm font-medium">ML Architecture</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
              Production-Ready{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6C5CE7] bg-clip-text text-transparent">
                ML Infrastructure
              </span>
            </h1>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] max-w-3xl mx-auto mb-8">
              Build scalable ML pipelines, MLOps workflows, and production infrastructure that handles real-world data at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-xl">
                <span>Discuss Architecture</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#8B5CF6] transition-all">
                  <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">{service.title}</h3>
                  <p className="text-[#666666] dark:text-[#B0B0B0]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Build Scalable ML Systems
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8">
              From data pipelines to production deployment
            </p>
            <a href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-xl">
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
