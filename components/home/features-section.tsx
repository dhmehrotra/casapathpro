const features = [
  {
    icon: "🔍",
    title: "Curate homes based on your needs & lifestyle",
    description:
      "Our AI learns your preferences to surface homes that truly match your lifestyle, goals, and non-negotiables — saving hours of manual filtering.",
  },
  {
    icon: "📄",
    title: "AI-generated summaries from disclosures",
    description:
      "Skip the legal jargon. Get concise, AI-crafted summaries of disclosures and reports that highlight red flags, key issues, and missing information — so you can make smarter decisions faster.",
  },
  {
    icon: "⚠️",
    title: "Spot what others might miss",
    description:
      "CasaPath flags subtle risk signals like inconsistencies in listing data, red flags in disclosures, or neighborhood trends — helping you ask better questions and avoid costly surprises.",
  },
  {
    icon: "💰",
    title: "Get smart, AI-driven offer guidance",
    description:
      "Understand how your bid compares to similar offers, recent comps, and market signals. Know when you're overbidding — or when it's time to move fast.",
  },
  {
    icon: "🤝",
    title: "Collaborate confidently with your agent",
    description:
      "CasaPath keeps your agent in the loop with summaries, saved homes, and your evolving preferences. They focus on negotiating, you focus on clarity.",
  },
  {
    icon: "🗺️",
    title: "Stay in control at every step",
    description:
      "With interactive tools, smart suggestions, and an AI assistant always available, you can progress through your home buying journey on your schedule — with expert context at every click.",
  },
]

export function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">What Casa Path Pro Can Do for You</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform streamlines the home buying journey with smart tools and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 border border-gray-100"
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
