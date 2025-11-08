import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowRight, Check, TrendingUp, Target, BarChart, Megaphone } from "lucide-react";

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Target,
      title: "Performance Ads",
      description: "Google Ads, Meta Ads, and LinkedIn campaigns optimized for ROI.",
    },
    {
      icon: Megaphone,
      title: "Content Marketing",
      description: "SEO-optimized content that drives organic traffic and engagement.",
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven decisions with comprehensive tracking and reporting.",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Holistic marketing strategies for sustainable business growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full mb-6">
              <TrendingUp size={16} className="text-[#22C55E]" />
              <span className="text-[#22C55E] text-sm font-medium">Digital Marketing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
              Data-Driven{" "}
              <span className="bg-gradient-to-r from-[#22C55E] to-[#00D1FF] bg-clip-text text-transparent">
                Marketing
              </span>{" "}
              That Scales
            </h1>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] max-w-3xl mx-auto mb-8">
              Performance marketing, content strategy, and AI-led analytics to grow your business and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold rounded-xl">
                <span>Start Campaign</span>
                <ArrowRight size={18} />
              </a>
              <a href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl hover:border-[#22C55E]">
                <span className="text-black dark:text-white font-semibold">View Results</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#22C55E] transition-all">
                  <div className="w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-[#22C55E]" />
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
              Grow Your Business
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8">
              Strategy, execution, and optimization for maximum ROI
            </p>
            <a href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold rounded-xl">
              <span>Get Marketing Strategy</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
