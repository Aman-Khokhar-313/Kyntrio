import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export default function ResultsBanner() {
  const stats = [
    {
      icon: TrendingUp,
      value: "75%",
      label: "Lead Growth",
      trend: "↑",
      color: "from-[#22C55E] to-[#16A34A]",
      bgColor: "bg-[#22C55E]/10",
      borderColor: "border-[#22C55E]/20",
    },
    {
      icon: Clock,
      value: "50k",
      label: "Hours Saved",
      trend: "",
      color: "from-[#00D1FF] to-[#0EA5E9]",
      bgColor: "bg-[#00D1FF]/10",
      borderColor: "border-[#00D1FF]/20",
    },
    {
      icon: DollarSign,
      value: "30%",
      label: "Cost Reduction",
      trend: "↓",
      color: "from-[#6C5CE7] to-[#5B4BD6]",
      bgColor: "bg-[#6C5CE7]/10",
      borderColor: "border-[#6C5CE7]/20",
    },
    {
      icon: Users,
      value: "₹50L+",
      label: "Extra Revenue",
      trend: "↑",
      color: "from-[#F59E0B] to-[#D97706]",
      bgColor: "bg-[#F59E0B]/10",
      borderColor: "border-[#F59E0B]/20",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B10]/95 via-[#0B0B10]/90 to-[#0B0B10]/95"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.02em" }}
            >
              Results That <span className="bg-gradient-to-r from-[#22C55E] to-[#00D1FF] bg-clip-text text-transparent">Speak</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Real metrics from real businesses we've helped transform
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl ${stat.bgColor} backdrop-blur-xl border ${stat.borderColor} p-6 md:p-8 group hover:scale-105 transition-all duration-300`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full filter blur-[64px] opacity-20 group-hover:opacity-30 transition-opacity`}></div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} border ${stat.borderColor} flex items-center justify-center mb-4`}>
                      <IconComponent size={24} className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                      <div
                        className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        {stat.value}
                      </div>
                      {stat.trend && (
                        <span className="text-2xl text-white/60">{stat.trend}</span>
                      )}
                    </div>

                    <p className="text-white/60 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
