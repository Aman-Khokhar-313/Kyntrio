import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ArrowRight,
  Users,
  Target,
  Zap,
  BarChart3,
  Code,
  Brain,
  Rocket,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Rocket,
      title: "Ship fast",
      description:
        "We believe in rapid iteration and getting to market quickly. Speed is a competitive advantage.",
    },
    {
      icon: Target,
      title: "Own outcomes",
      description:
        "We don't just deliver projects—we take responsibility for the results and your business success.",
    },
    {
      icon: Zap,
      title: "Automate the boring",
      description:
        "Why do manually what AI can do better? We automate repetitive tasks to focus on what matters.",
    },
    {
      icon: BarChart3,
      title: "Measure everything",
      description:
        "Data-driven decisions at every step. If we can't measure it, we can't improve it.",
    },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Engineer",
      expertise: "Full-stack development, ML architecture",
      description:
        "Former ML engineer at Google. Built recommendation systems serving 100M+ users.",
    },
    {
      name: "Sarah Rodriguez",
      role: "AI/ML Specialist",
      expertise: "NLP, computer vision, MLOps",
      description:
        "PhD in Machine Learning. Published researcher with 15+ papers in top-tier conferences.",
    },
    {
      name: "Marcus Thompson",
      role: "Growth & Marketing Lead",
      expertise: "Performance marketing, analytics",
      description:
        "Scaled 3 startups from 0 to $10M ARR using data-driven growth strategies.",
    },
    {
      name: "Priya Patel",
      role: "Product Designer",
      expertise: "UX/UI, design systems",
      description:
        "Award-winning designer. Created interfaces used by millions at fintech unicorns.",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "3.2x", label: "Avg. Growth Increase" },
    { number: "95%", label: "Client Retention" },
    { number: "24h", label: "Response Time" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-[1000px] mx-auto text-center">
            <h1 className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-black dark:text-white mb-6 font-bold">
              Engineering growth with{" "}
              <span className="text-[#6C5CE7]">intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555555] dark:text-[#B0B0B0] max-w-[70ch] mx-auto mb-12 leading-relaxed">
              We're a cross-functional team of developers, ML engineers, and
              marketers who believe AI should amplify human creativity, not
              replace it.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-[#666666] dark:text-[#B0B0B0] leading-relaxed">
                  <p>
                    Kyntrio was born from a simple observation: most
                    businesses struggle to bridge the gap between cutting-edge
                    AI capabilities and practical business outcomes.
                  </p>
                  <p>
                    After years of building ML systems at scale for tech giants
                    and watching countless startups fail to leverage AI
                    effectively, our founders decided to create something
                    different—a team that speaks both languages fluently.
                  </p>
                  <p>
                    Today, we help ambitious companies transform their
                    operations with intelligent automation, data-driven
                    marketing, and production-grade AI systems that actually
                    move the needle.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] rounded-3xl p-8 md:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {stat.number}
                        </div>
                        <div className="text-white/80 text-sm md:text-base">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
                Our Values
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#B0B0B0] max-w-[60ch] mx-auto leading-relaxed">
                These principles guide every decision we make and every project
                we deliver
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#6C5CE7] dark:hover:border-[#6C5CE7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6C5CE7] transition-colors duration-300">
                    <value.icon
                      size={24}
                      className="text-[#6C5CE7] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111111] dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#666666] dark:text-[#B0B0B0] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
                Meet the Team
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#B0B0B0] max-w-[60ch] mx-auto leading-relaxed">
                Experienced professionals from top tech companies and successful
                startups
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-8 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#6C5CE7] dark:hover:border-[#6C5CE7] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Users size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#111111] dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <div className="text-[#6C5CE7] font-medium mb-2">
                        {member.role}
                      </div>
                      <div className="text-sm text-[#666666] dark:text-[#B0B0B0] mb-3">
                        {member.expertise}
                      </div>
                      <p className="text-[#666666] dark:text-[#B0B0B0] leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-[1000px] mx-auto text-center">
            <div className="bg-white dark:bg-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-[#E5E5E5] dark:border-[#333333]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6C5CE7] to-[#00D1FF] rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Brain size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-[#666666] dark:text-[#B0B0B0] leading-relaxed mb-8">
                To democratize AI-powered growth by making cutting-edge
                technology accessible to businesses of all sizes. We believe
                every company should have the tools to compete in the
                intelligent economy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#6C5CE7] hover:bg-[#5B4BD6] text-white font-semibold text-lg rounded-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 group"
                >
                  <span>Work With Us</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#E0E0E0] dark:border-[#333333] rounded-2xl hover:border-[#6C5CE7] dark:hover:border-[#6C5CE7] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 group"
                >
                  <span className="text-[#0D0D0D] dark:text-white font-semibold text-lg">
                    View Services
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-[#6C5CE7] group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
