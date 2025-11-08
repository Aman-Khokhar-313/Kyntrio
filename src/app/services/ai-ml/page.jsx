import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowRight, Check, Brain, Sparkles, Database, BarChart, Code2, Layers } from "lucide-react";

export default function AIMLPage() {
  const features = [
    {
      icon: Brain,
      title: "Custom ML Models",
      description: "Build tailored machine learning models for your specific business needs and data.",
    },
    {
      icon: Sparkles,
      title: "NLP Solutions",
      description: "Natural language processing for chatbots, sentiment analysis, and text generation.",
    },
    {
      icon: Database,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual AI applications.",
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "Forecast trends, customer behavior, and business outcomes with ML.",
    },
  ];

  const services = [
    "Custom chatbots with RAG (Retrieval-Augmented Generation)",
    "Recommendation engines for e-commerce",
    "Predictive maintenance systems",
    "Fraud detection and anomaly detection",
    "Image and video analysis pipelines",
    "Sentiment analysis and social listening",
    "Time series forecasting",
    "Model fine-tuning and optimization",
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your data, understand your goals, and design the optimal ML architecture.",
    },
    {
      step: "02",
      title: "Model Development",
      description: "Build and train custom models using state-of-the-art algorithms and frameworks.",
    },
    {
      step: "03",
      title: "Testing & Validation",
      description: "Rigorous testing to ensure accuracy, performance, and reliability.",
    },
    {
      step: "04",
      title: "Deployment & MLOps",
      description: "Production deployment with monitoring, retraining, and continuous improvement.",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Recommendation Engine",
      challenge: "Low product discovery and conversion rates",
      solution: "Built custom collaborative filtering + deep learning recommendation system",
      results: ["42% increase in average order value", "3.2x boost in product discovery", "27% higher conversion rate"],
    },
    {
      title: "RAG-Powered Customer Support Bot",
      challenge: "High support ticket volume overwhelming team",
      solution: "Developed retrieval-augmented chatbot with custom knowledge base",
      results: ["61% ticket deflection rate", "24/7 instant responses", "94% customer satisfaction"],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-6 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80')",
            }}
          ></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C5CE7]/10 border border-[#6C5CE7]/20 rounded-full mb-6">
                <Brain size={16} className="text-[#6C5CE7]" />
                <span className="text-[#6C5CE7] text-sm font-medium">AI/ML Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
                Custom{" "}
                <span className="bg-gradient-to-r from-[#6C5CE7] to-[#00D1FF] bg-clip-text text-transparent">
                  AI & Machine Learning
                </span>{" "}
                Solutions
              </h1>
              <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
                From chatbots to predictive models, we build production-ready AI systems that solve real business problems and drive measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6C5CE7] hover:bg-[#5B4BD6] text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl hover:border-[#6C5CE7] transition-all duration-200"
                >
                  <span className="text-black dark:text-white font-semibold">View AI Projects</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                AI/ML Capabilities
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#B0B0B0] max-w-2xl mx-auto">
                Cutting-edge AI technologies tailored to your business objectives
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#6C5CE7] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#6C5CE7]/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-[#6C5CE7]" />
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#666666] dark:text-[#B0B0B0] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
                  What We Build
                </h2>
                <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
                  End-to-end AI/ML solutions from concept to production deployment
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#6C5CE7]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-[#6C5CE7]" />
                      </div>
                      <span className="text-black dark:text-white">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#6C5CE7]/10 to-[#00D1FF]/10 rounded-2xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-[#6C5CE7] mb-2">3-10 weeks</div>
                    <div className="text-black dark:text-white font-medium">Typical project timeline</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#00D1FF] mb-2">95%+</div>
                    <div className="text-black dark:text-white font-medium">Model accuracy achieved</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#22C55E] mb-2">₹69,999+</div>
                    <div className="text-black dark:text-white font-medium">Starting investment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#B0B0B0]">
                Proven methodology for delivering production-ready AI systems
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#6C5CE7] transition-all duration-300">
                    <div className="text-5xl font-bold text-[#6C5CE7]/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] dark:text-[#B0B0B0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#B0B0B0]">
                Real results from real AI implementations
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-8 border border-[#E5E5E5] dark:border-[#333333]"
                >
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                    {study.title}
                  </h3>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-[#6C5CE7] mb-2">CHALLENGE</div>
                    <p className="text-[#666666] dark:text-[#B0B0B0]">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-[#6C5CE7] mb-2">SOLUTION</div>
                    <p className="text-[#666666] dark:text-[#B0B0B0]">{study.solution}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#6C5CE7] mb-3">RESULTS</div>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check size={18} className="text-[#22C55E] flex-shrink-0 mt-0.5" />
                          <span className="text-black dark:text-white">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Ready to Build Your AI Solution?
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
              Let's discuss how custom AI/ML can transform your business
            </p>
            <a
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6C5CE7] hover:bg-[#5B4BD6] text-white font-semibold text-lg rounded-xl transition-all duration-200 hover:scale-105"
            >
              <span>Start Your AI Project</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
