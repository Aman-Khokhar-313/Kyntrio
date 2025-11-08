import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustedPartners from "../components/TrustedPartners";
import FeaturedServices from "../components/FeaturedServices";
import Benefits from "../components/Benefits";
import ResultsBanner from "../components/ResultsBanner";
import IntegrationsRow from "../components/IntegrationsRow";
import PortfolioGrid from "../components/PortfolioGrid";
import Testimonials from "../components/Testimonials";
import PricingTable from "../components/PricingTable";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B10]">
      {/* HEADER SECTION */}
      <Header />

      {/* HERO SECTION */}
      <Hero />

      {/* TRUSTED PARTNERS ROW */}
      <TrustedPartners />

      {/* FEATURED SERVICES GRID */}
      <FeaturedServices />

      {/* BENEFITS SECTION */}
      <Benefits />

      {/* RESULTS BANNER SECTION */}
      <ResultsBanner />

      {/* INTEGRATIONS ROW */}
      <IntegrationsRow />

      {/* PORTFOLIO GRID */}
      <PortfolioGrid />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* PRICING TABLE */}
      <PricingTable />

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}
