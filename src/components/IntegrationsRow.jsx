export default function IntegrationsRow() {
  const integrations = [
    { name: "Slack", icon: "💬" },
    { name: "Notion", icon: "📝" },
    { name: "Zapier", icon: "⚡" },
    { name: "HubSpot", icon: "🎯" },
    { name: "Stripe", icon: "💳" },
    { name: "Google Analytics", icon: "📊" },
    { name: "Mailchimp", icon: "📧" },
    { name: "Salesforce", icon: "☁️" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 px-6 bg-[#0B0B10]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.02em" }}
            >
              Seamless Integrations
            </h2>
            <p className="text-white/60 text-lg">
              Connect with the tools you already use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <div className="text-white/60 text-xs font-medium text-center group-hover:text-white/80 transition-colors">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
