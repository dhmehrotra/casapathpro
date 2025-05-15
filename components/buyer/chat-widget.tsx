"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot } from "lucide-react"

interface ChatWidgetProps {
  stepNumber: number
}

export function ChatWidget({ stepNumber }: ChatWidgetProps) {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: `Hello! I'm your home buying assistant for Step ${stepNumber}. How can I help you today?`,
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Mock AI responses based on step number
  const mockResponses: Record<number, string[]> = {
    1: [
      "Getting pre-qualified is an important first step in the home buying process.",
      "A good credit score is typically 700 or above for the best mortgage rates.",
      "You'll need to provide income verification, credit history, and employment details for pre-approval.",
    ],
    2: [
      "Consider factors like location, size, amenities, and proximity to work or schools.",
      "It's helpful to make a list of 'must-haves' versus 'nice-to-haves' for your home search.",
      "Think about your long-term plans when deciding on home features.",
    ],
    3: [
      "Save properties you like so you can compare them later.",
      "Virtual tours can help you narrow down your options before in-person visits.",
      "Don't forget to check the neighborhood at different times of day.",
    ],
    4: [
      "Home inspections typically cost between $300-$500 but can save you thousands.",
      "Consider getting specialized inspections for older homes.",
      "Review property disclosures carefully before making an offer.",
    ],
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Get random response for the current step
    const responses = mockResponses[stepNumber] || ["I'm here to help with your home buying journey."]
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]

    // Add assistant message
    const assistantMessage = { role: "assistant" as const, content: randomResponse }
    setMessages((prev) => [...prev, assistantMessage])
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col h-[300px]">
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {messages.map((message, i) => (
            <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg px-3 py-2 max-w-[80%] ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {message.role === "assistant" && <Bot className="h-4 w-4 mb-1 inline-block mr-1" />}
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-lg px-3 py-2 bg-muted">
                <Bot className="h-4 w-4 mb-1 inline-block mr-1" />
                Typing...
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <Input
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" size="sm" disabled={isLoading}>
          Send
        </Button>
      </form>
    </div>
  )
}
