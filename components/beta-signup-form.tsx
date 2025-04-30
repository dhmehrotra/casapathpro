"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function BetaSignupForm() {
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState("buyer")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setEmail("")

      // Show success toast
      toast({
        title: "Success!",
        description: "Thanks! We'll keep you posted on our beta launch.",
        duration: 3000,
      })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Join our Beta Waitlist</h3>

      {isSubmitted ? (
        <div className="flex items-center space-x-2 text-teal-600 py-4">
          <CheckCircle className="h-6 w-6" />
          <span className="text-lg">Thanks! We'll keep you posted.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-gray-700">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 rounded-xl py-3 px-4 transition-all border-gray-200 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <Label htmlFor="userType" className="mb-2 block text-gray-700">
              I'm a:
            </Label>
            <ToggleGroup
              type="single"
              value={userType}
              onValueChange={(value) => {
                if (value) setUserType(value)
              }}
              className="justify-start"
            >
              <ToggleGroupItem
                value="buyer"
                className="px-6 py-2 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5 data-[state=on]:bg-teal-600"
              >
                I'm a buyer
              </ToggleGroupItem>
              <ToggleGroupItem
                value="agent"
                className="px-6 py-2 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5 data-[state=on]:bg-teal-600"
              >
                I'm an agent
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 py-3 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Join Beta Waitlist"}
          </Button>
        </form>
      )}
    </div>
  )
}
