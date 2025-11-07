import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Proof from "../components/Proof";
import CTABand from "../components/CTABand";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      {/* HEADER SECTION */}
      <Header />

      {/* HERO SECTION */}
      <Hero />

      {/* SERVICES SECTION */}
      <Services />

      {/* PROOF SECTION */}
      <Proof />

      {/* CTA BAND SECTION */}
      <CTABand />

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}
