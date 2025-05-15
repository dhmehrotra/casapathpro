import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Home Buying Experience?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Join Casa Path Pro today and provide your clients with a modern, streamlined home buying journey.
        </p>
        <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
          <Link href="/auth/signup">Signup Now</Link>
        </Button>
      </div>
    </section>
  )
}
