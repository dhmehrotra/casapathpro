export function TrustSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Built to Support, Not Replace Your Agent</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          CasaPath works hand-in-hand with your real estate agent to streamline the early discovery process. Your agent
          gets a better-informed, confident buyer—you get more clarity from day one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">For Buyers</h3>
            <p className="text-gray-600">
              Get personalized guidance through the overwhelming early stages of home buying, so you can approach your
              agent with confidence and clarity.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">For Agents</h3>
            <p className="text-gray-600">
              Receive better-prepared clients who understand their needs and preferences, allowing you to focus on
              providing high-value expertise and closing deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
