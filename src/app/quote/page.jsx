import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuoteWizard from "../../components/QuoteWizard";

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-[1000px] mx-auto text-center">
            <h1 className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-black dark:text-white mb-6 font-bold">
              Get a <span className="text-[#6C5CE7]">Quote</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555555] dark:text-[#B0B0B0] max-w-[60ch] mx-auto mb-12 leading-relaxed">
              Instant project scoping with transparent pricing
            </p>
          </div>
        </section>

        {/* Quote Wizard */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-[800px] mx-auto">
            <QuoteWizard />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
