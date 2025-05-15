"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] bg-[#f0f7fa] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Your AI-Powered Guide for the First Steps of Home Buying
            </h2>
            <p className="text-lg text-gray-600">
              CasaPath helps buyers navigate the early home search with personalized support—before they even text their
              agent.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://254bekwdae51rgxa.public.blob.vercel-storage.com/Casapath%20pro/casapath-home-search-a953Q9MnzGzEljul20D8tm6OUw9aI0.png"
              alt="Casa Path Pro App Interface"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
