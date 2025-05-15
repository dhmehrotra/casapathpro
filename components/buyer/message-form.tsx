"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Message } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"

interface MessageFormProps {
  stepNumber: number
}

export function MessageForm({ stepNumber }: MessageFormProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)

    // Create a new message
    const newMessage: Message = {
      id: Date.now().toString(),
      sender_id: "current-user", // This would be the actual user ID
      recipient_id: "realtor-id", // This would be the actual realtor ID
      step_number: stepNumber,
      content: input,
      is_ai: false,
      created_at: new Date().toISOString(),
      sender_name: "You",
    }

    // Add message to state
    setMessages((prev) => [...prev, newMessage])
    setInput("")

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate realtor response (in a real app, this would come from the database)
    const realtorResponse: Message = {
      id: (Date.now() + 1).toString(),
      sender_id: "realtor-id",
      recipient_id: "current-user",
      step_number: stepNumber,
      content: `Thanks for your message about step ${stepNumber}. I'll get back to you soon!`,
      is_ai: false,
      created_at: new Date().toISOString(),
      sender_name: "Your Realtor",
    }

    setMessages((prev) => [...prev, realtorResponse])
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col h-[300px]">
      <ScrollArea className="flex-1 pr-4">
        {messages.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            No messages yet. Send a message to your realtor.
          </p>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender_id === "current-user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-lg px-3 py-2 max-w-[80%] ${
                    message.sender_id === "current-user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <div className="text-xs opacity-70 mb-1">
                    {message.sender_name} • {formatDistanceToNow(new Date(message.created_at), { addSuffix: true })}
                  </div>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="mt-4">
        <Textarea
          placeholder="Type a message to your realtor..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          className="min-h-[80px]"
        />
        <Button type="submit" className="w-full mt-2" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}
