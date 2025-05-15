"use client"

import type React from "react"

import { useState } from "react"
import { STEPS } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatWidget } from "@/components/buyer/chat-widget"
import { MessageForm } from "@/components/buyer/message-form"

interface StepLayoutProps {
  stepNumber: number
  children: React.ReactNode
}

export function StepLayout({ stepNumber, children }: StepLayoutProps) {
  const [activeTab, setActiveTab] = useState<"content" | "chat">("content")
  const step = STEPS.find((s) => s.number === stepNumber)

  if (!step) {
    return <div>Step not found</div>
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 md:p-6 border-b">
        <h1 className="text-2xl font-bold">
          Step {step.number}: {step.title}
        </h1>
        <p className="text-muted-foreground">{step.description}</p>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 gap-4 p-4 md:p-6">
        <div className="flex-1">{children}</div>

        <div className="w-full lg:w-80 space-y-4">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "content" | "chat")} className="lg:hidden">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="content">Step Content</TabsTrigger>
              <TabsTrigger value="chat">Chat & Help</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className={activeTab === "chat" || activeTab === "content" ? "block" : "hidden lg:block"}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <ChatWidget stepNumber={stepNumber} />
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Message Your Realtor</CardTitle>
              </CardHeader>
              <CardContent>
                <MessageForm stepNumber={stepNumber} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
