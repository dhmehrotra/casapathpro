import { BetaSignupForm } from "@/components/beta-signup-form"
import { BenefitsSection } from "@/components/benefits-section"
import { TrustSection } from "@/components/trust-section"
import { CtaSection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-['Inter',sans-serif]">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Your AI-Powered Guide for the First Steps of Home Buying
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                CasaPath helps buyers navigate the early home search with personalized support—before they even text
                their agent.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <BetaSignupForm />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-300/20 blur-3xl rounded-full"></div>
                <Image
                  src="/casapath-home-search.png"
                  alt="AI-powered home search interface"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg max-w-full h-auto relative z-10 transition-transform hover:scale-[1.02] duration-300"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scroll down indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <ChevronDown className="h-8 w-8 text-teal-500 opacity-70" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </div>
  )
}
