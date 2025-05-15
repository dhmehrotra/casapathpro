"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Calendar, Users, FileText } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto flex-col items-center justify-center p-4 gap-2" asChild>
            <Link href="/clients/invite">
              <UserPlus className="h-5 w-5" />
              <div className="text-sm font-medium">Invite New Buyer</div>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto flex-col items-center justify-center p-4 gap-2" asChild>
            <Link href="/clients">
              <Users className="h-5 w-5" />
              <div className="text-sm font-medium">View All Clients</div>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto flex-col items-center justify-center p-4 gap-2" asChild>
            <Link href="/calendar">
              <Calendar className="h-5 w-5" />
              <div className="text-sm font-medium">Schedule Viewings</div>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto flex-col items-center justify-center p-4 gap-2" asChild>
            <Link href="/reports">
              <FileText className="h-5 w-5" />
              <div className="text-sm font-medium">Generate Reports</div>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
