"use client"

export function CtaSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-teal-50 to-sky-50 p-8 md:p-12 rounded-2xl text-center shadow-lg border border-teal-100 transition-all hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            We're working with select agents and homebuyers in our early beta. Want to join?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Be among the first to experience how AI can transform the home buying journey. Limited spots available.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300"
          >
            Request Beta Access
          </button>
        </div>
      </div>
    </section>
  )
}
