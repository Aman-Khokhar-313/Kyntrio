export default function TrustedPartners() {
  const partners = [
    "Slack", "Notion", "Zapier", "HubSpot", "Stripe", 
    "Google", "Microsoft", "Salesforce", "Shopify", "AWS"
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      
      <section className="py-12 px-6 bg-[#0B0B10] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-white/40 text-sm font-medium uppercase tracking-wider">
              Trusted by Industry Leaders
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-white/30 hover:text-white/60 transition-all duration-300 text-lg font-semibold"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
