import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowRight, Check, Zap, Clock, TrendingUp, Brain, Workflow, Bot } from "lucide-react";

export default function AIAutomationPage() {
  const features = [
    {
      icon: Workflow,
      title: "CRM Automation",
      description: "Automate lead scoring, follow-ups, and customer journey tracking across all touchpoints.",
    },
    {
      icon: Bot,
      title: "Content Generation",
      description: "AI-powered content creation for emails, social media, and marketing campaigns at scale.",
    },
    {
      icon: Brain,
      title: "Smart Workflows",
      description: "Intelligent process automation that learns and adapts to your business patterns.",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant data processing and decision-making with minimal latency.",
    },
  ];

  const benefits = [
    "Save 40+ hours per week on repetitive tasks",
    "Reduce human error by 95%",
    "Scale operations without hiring",
    "24/7 automated operations",
    "ROI within 3 months",
    "Seamless integration with existing tools",
  ];

  const useCases = [
    {
      title: "E-commerce Order Processing",
      description: "Automatically process orders, update inventory, send notifications, and generate shipping labels.",
      result: "83% faster order fulfillment",
    },
    {
      title: "Customer Support Automation",
      description: "AI chatbots handle tier-1 support, route complex issues, and provide 24/7 assistance.",
      result: "61% ticket deflection rate",
    },
    {
      title: "Marketing Campaign Management",
      description: "Automated email sequences, social media posting, and lead nurturing workflows.",
      result: "3.5x increase in engagement",
    },
  ];

  const pricing = {
    starter: {
      name: "Starter",
      price: "$999",
      features: [
        "Up to 5 automation workflows",
        "Basic CRM integration",
        "Email support",
        "Monthly optimization",
      ],
    },
    professional: {
      name: "Professional",
      price: "$2,499",
      features: [
        "Unlimited workflows",
        "Advanced AI models",
        "Priority support",
        "Custom integrations",
        "Weekly optimization",
      ],
    },
    enterprise: {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Dedicated AI engineer",
        "White-label solutions",
        "SLA guarantee",
        "24/7 support",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-6 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80')",
            }}
          ></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full mb-6">
                  <Zap size={16} className="text-[#22C55E]" />
                  <span className="text-[#22C55E] text-sm font-medium">AI Automation Workflows</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
                  Automate Your Business with{" "}
                  <span className="bg-gradient-to-r from-[#22C55E] to-[#00D1FF] bg-clip-text text-transparent">
                    AI-Powered Workflows
                  </span>
                </h1>
                <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
                  Free your team from repetitive tasks. Our AI automation solutions handle everything from customer support to marketing campaigns, saving you time and reducing costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    <span>Start Automating</span>
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl hover:border-[#22C55E] transition-all duration-200"
                  >
                    <span className="text-black dark:text-white font-semibold">Book a Demo</span>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#22C55E]/20 to-[#00D1FF]/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/80">
                      <Clock size={20} className="text-[#22C55E]" />
                      <span className="text-black dark:text-white">Save 40+ hours per week</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <TrendingUp size={20} className="text-[#22C55E]" />
                      <span className="text-black dark:text-white">3x productivity increase</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Zap size={20} className="text-[#22C55E]" />
                      <span className="text-black dark:text-white">ROI within 3 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                Powerful Automation Features
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#B0B0B0] max-w-2xl mx-auto">
                Enterprise-grade AI automation tools designed for modern businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#22C55E] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-[#22C55E]" />
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

        {/* Benefits Section */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
                  Why Choose Our AI Automation?
                </h2>
                <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
                  Transform your operations with intelligent automation that delivers measurable results.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-[#22C55E]" />
                      </div>
                      <span className="text-black dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333]"
                  >
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-[#666666] dark:text-[#B0B0B0] mb-3 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="text-[#22C55E] font-semibold">
                      ✓ {useCase.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#B0B0B0]">
                Choose the plan that fits your automation needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([key, plan]) => (
                <div
                  key={key}
                  className={`bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 border ${
                    key === "professional"
                      ? "border-[#22C55E] shadow-lg scale-105"
                      : "border-[#E5E5E5] dark:border-[#333333]"
                  }`}
                >
                  {key === "professional" && (
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-[#22C55E] text-white text-xs font-bold rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-black dark:text-white mb-6">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-lg text-[#666666] dark:text-[#B0B0B0]">/mo</span>}
                  </div>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check size={18} className="text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span className="text-[#666666] dark:text-[#B0B0B0]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/quote"
                    className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                      key === "professional"
                        ? "bg-[#22C55E] hover:bg-[#16A34A] text-white"
                        : "bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#333333] text-black dark:text-white hover:border-[#22C55E]"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
              Join hundreds of companies saving time and money with AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-lg rounded-xl transition-all duration-200 hover:scale-105"
              >
                <span>Start Free Consultation</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl hover:border-[#22C55E] transition-all duration-200"
              >
                <span className="text-black dark:text-white font-semibold text-lg">View Case Studies</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
