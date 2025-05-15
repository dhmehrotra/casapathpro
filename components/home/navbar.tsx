"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 px-4 md:px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-6 w-6 text-teal-500" />
          <div>
            <h1 className="text-xl font-semibold">Casa Path Pro</h1>
            <p className="text-xs text-muted-foreground">AI Realtor Companion</p>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#how-it-works" className="text-sm font-medium hover:text-teal-500 transition-colors">
            How It Works
          </Link>
          <Link href="/auth/login" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Login
          </Link>
          <Button asChild className="bg-teal-500 hover:bg-teal-600">
            <Link href="/auth/signup">Signup</Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="/#how-it-works"
                className="py-2 text-sm font-medium hover:text-teal-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/auth/login"
                className="py-2 text-sm font-medium hover:text-teal-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Button asChild className="mt-2 bg-teal-500 hover:bg-teal-600" onClick={() => setIsMenuOpen(false)}>
                <Link href="/auth/signup">Signup</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
