import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowRight, Check, Palette, Smartphone, Zap, Eye } from "lucide-react";

export default function WebDesignPage() {
  const features = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique, conversion-focused designs tailored to your brand identity.",
    },
    {
      icon: Smartphone,
      title: "Responsive",
      description: "Perfect experience across all devices and screen sizes.",
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized for speed with 95+ Lighthouse scores.",
    },
    {
      icon: Eye,
      title: "User-Centric",
      description: "Designed around user behavior and conversion goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EC4899]/10 border border-[#EC4899]/20 rounded-full mb-6">
              <Palette size={16} className="text-[#EC4899]" />
              <span className="text-[#EC4899] text-sm font-medium">Web Design</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
              Beautiful Designs That{" "}
              <span className="bg-gradient-to-r from-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
                Convert
              </span>
            </h1>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] max-w-3xl mx-auto mb-8">
              Conversion-first web design that combines aesthetics with performance. Responsive, fast, and optimized for results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#EC4899] hover:bg-[#DB2777] text-white font-semibold rounded-xl">
                <span>Start Design Project</span>
                <ArrowRight size={18} />
              </a>
              <a href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl hover:border-[#EC4899]">
                <span className="text-black dark:text-white font-semibold">View Designs</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#EC4899] transition-all">
                  <div className="w-12 h-12 bg-[#EC4899]/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-[#EC4899]" />
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-[#666666] dark:text-[#B0B0B0]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Ready to Redesign?
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8">
              Let's create a website that drives results
            </p>
            <a href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#EC4899] hover:bg-[#DB2777] text-white font-semibold rounded-xl">
              <span>Get Custom Quote</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
