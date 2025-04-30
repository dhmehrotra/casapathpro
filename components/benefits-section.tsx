import { Search, FileText, Calendar } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Search className="h-10 w-10 text-teal-600" />,
      title: "Curate homes based on needs & lifestyle",
      description: "Our AI analyzes your preferences to find homes that truly match your lifestyle and requirements.",
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-600" />,
      title: "Get AI-generated summaries from disclosures",
      description: "Save time with smart summaries of lengthy disclosure documents, highlighting what matters most.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-teal-600" />,
      title: "Track, tag, and request tours without inbox chaos",
      description: "Organize your home search journey with intuitive tools that keep everything in one place.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How CasaPath Helps You</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              <div className="mb-4 transform transition-transform hover:scale-110 duration-300">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
