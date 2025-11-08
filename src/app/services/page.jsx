import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      service: "Digital Marketing",
      deliverables: "Strategy, creatives, analytics",
      timeline: "2–4 weeks",
      price: "₹15,999/mo",
    },
    {
      service: "Software Development",
      deliverables: "MVPs, dashboards, APIs",
      timeline: "3–8 weeks",
      price: "₹49,999+",
    },
    {
      service: "AI/ML Projects",
      deliverables: "Chatbots, predictions, RAG",
      timeline: "3–10 weeks",
      price: "₹69,999+",
    },
    {
      service: "Customized Web Design",
      deliverables: "UX/UI, responsive build",
      timeline: "2–6 weeks",
      price: "₹29,999+",
    },
    {
      service: "SEO Optimization",
      deliverables: "Tech SEO, on-page, schema",
      timeline: "1–3 months",
      price: "₹9,999/mo",
    },
    {
      service: "ML Architecture & Model Design",
      deliverables: "Pipelines, monitoring",
      timeline: "4–12 weeks",
      price: "₹89,999+",
    },
    {
      service: "AI Automation Workflows",
      deliverables: "CRM/content automations",
      timeline: "1–4 weeks",
      price: "₹19,999+",
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
              Our <span className="text-[#22C55E]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555555] dark:text-[#B0B0B0] max-w-[60ch] mx-auto mb-12 leading-relaxed">
              Choose modular plans or a full-stack engagement
            </p>
          </div>
        </section>

        {/* Services Table */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-[1200px] mx-auto">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#E5E5E5] dark:border-[#333333]">
                    <th className="text-left py-6 px-6 text-lg font-semibold text-[#111111] dark:text-white">
                      Service
                    </th>
                    <th className="text-left py-6 px-6 text-lg font-semibold text-[#111111] dark:text-white">
                      Deliverables
                    </th>
                    <th className="text-left py-6 px-6 text-lg font-semibold text-[#111111] dark:text-white">
                      Timeline
                    </th>
                    <th className="text-left py-6 px-6 text-lg font-semibold text-[#111111] dark:text-white">
                      Starting From
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#E5E5E5] dark:border-[#333333] hover:bg-[#F8F9FA] dark:hover:bg-[#1A1A1A] transition-colors duration-150"
                    >
                      <td className="py-6 px-6">
                        <div className="font-semibold text-[#111111] dark:text-white">
                          {service.service}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-[#666666] dark:text-[#B0B0B0]">
                          {service.deliverables}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-[#666666] dark:text-[#B0B0B0]">
                          {service.timeline}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="font-semibold text-[#22C55E] text-lg">
                          {service.price}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333]"
                >
                  <div className="font-semibold text-lg text-[#111111] dark:text-white mb-3">
                    {service.service}
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-[#666666] dark:text-[#B0B0B0] text-sm">
                        Deliverables:
                      </span>
                      <span className="text-[#111111] dark:text-white text-sm">
                        {service.deliverables}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666] dark:text-[#B0B0B0] text-sm">
                        Timeline:
                      </span>
                      <span className="text-[#111111] dark:text-white text-sm">
                        {service.timeline}
                      </span>
                    </div>
                  </div>
                  <div className="text-[#22C55E] font-semibold text-xl">
                    Starting from {service.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
              Need a custom solution?
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
              We craft tailored packages for complex projects and long-term
              partnerships
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/quote"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-lg rounded-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 group"
              >
                <span>Get Custom Quote</span>
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
                  Book a Call
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
