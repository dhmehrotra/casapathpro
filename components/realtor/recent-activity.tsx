"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"
import { Home, MessageSquare, CheckSquare, FileText } from "lucide-react"

// Mock data for recent activity
const mockActivities = [
  {
    id: "1",
    type: "property_saved",
    clientName: "John Smith",
    details: "Saved 123 Main St property",
    timestamp: "2023-05-12T14:30:00Z",
  },
  {
    id: "2",
    type: "message",
    clientName: "Sarah Johnson",
    details: "Sent you a message about pre-qualification",
    timestamp: "2023-05-12T10:15:00Z",
  },
  {
    id: "3",
    type: "step_completed",
    clientName: "Michael Brown",
    details: "Completed Step 2: Needs Assessment",
    timestamp: "2023-05-11T16:45:00Z",
  },
  {
    id: "4",
    type: "document",
    clientName: "Emily Davis",
    details: "Uploaded pre-approval letter",
    timestamp: "2023-05-11T09:20:00Z",
  },
  {
    id: "5",
    type: "property_saved",
    clientName: "David Wilson",
    details: "Saved 456 Oak Ave property",
    timestamp: "2023-05-10T13:10:00Z",
  },
]

export function RecentActivity() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "property_saved":
        return <Home className="h-4 w-4" />
      case "message":
        return <MessageSquare className="h-4 w-4" />
      case "step_completed":
        return <CheckSquare className="h-4 w-4" />
      case "document":
        return <FileText className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your clients</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                {getActivityIcon(activity.type)}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">{activity.clientName}</p>
                <p className="text-sm text-muted-foreground">{activity.details}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
