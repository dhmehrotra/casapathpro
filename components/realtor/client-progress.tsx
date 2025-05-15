"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { STEPS } from "@/lib/types"

// Mock data for client progress
const mockClientProgress = [
  { step: 1, count: 2 },
  { step: 2, count: 1 },
  { step: 3, count: 1 },
  { step: 4, count: 1 },
]

export function ClientProgress() {
  const totalClients = mockClientProgress.reduce((sum, item) => sum + item.count, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Journey Progress</CardTitle>
        <CardDescription>Overview of clients at each stage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {STEPS.map((step) => {
            const progressItem = mockClientProgress.find((item) => item.step === step.number)
            const count = progressItem ? progressItem.count : 0
            const percentage = totalClients > 0 ? (count / totalClients) * 100 : 0

            return (
              <div key={step.number} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">
                    Step {step.number}: {step.title.split("&")[0].trim()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {count} client{count !== 1 ? "s" : ""}
                  </div>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
