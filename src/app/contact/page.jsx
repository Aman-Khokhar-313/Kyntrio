import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-[1000px] mx-auto text-center">
            <h1 className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-black dark:text-white mb-6 font-bold">
              Tell us about your <span className="text-[#6C5CE7]">project</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555555] dark:text-[#B0B0B0] max-w-[60ch] mx-auto mb-12 leading-relaxed">
              We reply within 24 hours
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-3xl p-8 border border-[#E5E5E5] dark:border-[#333333]">
                  <h3 className="text-2xl font-bold text-[#111111] dark:text-white mb-6">
                    Get in touch
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#6C5CE7]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-[#6C5CE7]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111111] dark:text-white mb-1">
                          Email
                        </h4>
                        <p className="text-[#666666] dark:text-[#B0B0B0]">
                          hello@neuraweblabs.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-[#00D1FF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111111] dark:text-white mb-1">
                          Phone
                        </h4>
                        <p className="text-[#666666] dark:text-[#B0B0B0]">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-[#22C55E]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111111] dark:text-white mb-1">
                          Office
                        </h4>
                        <p className="text-[#666666] dark:text-[#B0B0B0]">
                          San Francisco, CA
                          <br />
                          Remote-first team
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-8 border-[#E5E5E5] dark:border-[#333333]" />

                  <div>
                    <h4 className="font-semibold text-[#111111] dark:text-white mb-4">
                      Response time
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
                        <span className="text-[#666666] dark:text-[#B0B0B0] text-sm">
                          Email: Within 24 hours
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
                        <span className="text-[#666666] dark:text-[#B0B0B0] text-sm">
                          Phone: Same day
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
                        <span className="text-[#666666] dark:text-[#B0B0B0] text-sm">
                          Quote: Within 48 hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
              Prefer a quick quote?
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
              Get instant project scoping with our interactive quote wizard
            </p>
            <a
              href="/quote"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#6C5CE7] hover:bg-[#5B4BD6] text-white font-semibold text-lg rounded-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 group"
            >
              <span>Start Quote Wizard</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
