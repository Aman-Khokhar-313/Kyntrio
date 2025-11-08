import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowRight, Check, Search, TrendingUp, Target, BarChart3 } from "lucide-react";

export default function SEOPage() {
  const services = [
    {
      icon: Search,
      title: "Technical SEO",
      description: "Site structure, speed optimization, schema markup, and crawlability fixes.",
    },
    {
      icon: Target,
      title: "On-Page SEO",
      description: "Content optimization, keyword targeting, and meta data enhancement.",
    },
    {
      icon: TrendingUp,
      title: "Link Building",
      description: "High-quality backlinks from authoritative domains in your niche.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking, reporting, and data-driven recommendations.",
    },
  ];

  const results = [
    "Rank #1 for target keywords within 6 months",
    "180% increase in organic traffic",
    "50+ high-authority backlinks built",
    "95+ Lighthouse performance scores",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full mb-6">
              <Search size={16} className="text-[#F59E0B]" />
              <span className="text-[#F59E0B] text-sm font-medium">SEO Optimization</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
              Rank Higher,{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#22C55E] bg-clip-text text-transparent">
                Grow Faster
              </span>
            </h1>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] max-w-3xl mx-auto mb-8">
              Data-driven SEO strategies that increase organic traffic and improve search rankings. Technical SEO, content optimization, and link building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold rounded-xl">
                <span>Get SEO Audit</span>
                <ArrowRight size={18} />
              </a>
              <a href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl hover:border-[#F59E0B]">
                <span className="text-black dark:text-white font-semibold">View Results</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#F59E0B] transition-all">
                  <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-[#F59E0B]" />
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">{service.title}</h3>
                  <p className="text-[#666666] dark:text-[#B0B0B0]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8 text-center">
              Proven Results
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 bg-white dark:bg-[#1A1A1A] rounded-xl p-4 border border-[#E5E5E5] dark:border-[#333333]">
                  <Check size={18} className="text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-black dark:text-white">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Ready to Dominate Search?
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8">
              Get a free SEO audit and custom strategy
            </p>
            <a href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold rounded-xl">
              <span>Start SEO Campaign</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
