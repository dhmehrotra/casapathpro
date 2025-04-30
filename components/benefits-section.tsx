import { Search, FileIcon as FileList, AlertTriangle, DollarSign, MessageSquare } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Search className="h-10 w-10 text-teal-500" />,
      title: "Curate homes based on needs & lifestyle",
      description:
        "Our AI analyzes your preferences to find homes that truly match your lifestyle, goals, and non-negotiables—saving hours of manual filtering.",
    },
    {
      icon: <FileList className="h-10 w-10 text-teal-500" />,
      title: "Get AI-generated summaries from disclosures",
      description:
        "Quickly understand lengthy documents with clear, AI-crafted summaries that highlight key issues, red flags, and what's missing.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-teal-500" />,
      title: "Spot what others might miss",
      description:
        "Receive AI-generated insights on what to watch for—like gaps in disclosures, neighborhood red flags, or patterns seen in similar homes—so you can ask smarter questions.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-teal-500" />,
      title: "Get AI-generated offer recommendations",
      description:
        "See how your offer compares to local trends with AI-generated guidance. Understand if it's a strong bid—or if you're overpaying based on property context and comps.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-teal-500" />,
      title: "Built for collaboration with your agent",
      description:
        "CasaPath preps you with clarity, so your agent can focus on what they do best—negotiating, advocating, and closing confidently.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What CasaPath Can Do for You</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 p-3 inline-flex items-center justify-center rounded-full bg-teal-50">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
