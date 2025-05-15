"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { STEPS } from "@/lib/types"
import { Search, UserPlus } from "lucide-react"

// Mock data for clients
const mockClients = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    currentStep: 3,
    lastActive: "2023-05-10T14:30:00Z",
    savedProperties: 4,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    currentStep: 1,
    lastActive: "2023-05-12T09:15:00Z",
    savedProperties: 0,
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    currentStep: 2,
    lastActive: "2023-05-11T16:45:00Z",
    savedProperties: 2,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    currentStep: 4,
    lastActive: "2023-05-09T11:20:00Z",
    savedProperties: 7,
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david@example.com",
    currentStep: 1,
    lastActive: "2023-05-08T13:10:00Z",
    savedProperties: 0,
  },
]

export function ClientList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [clients] = useState(mockClients)

  // Filter clients based on search query
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  const getStepBadge = (stepNumber: number) => {
    const colors = {
      1: "bg-blue-100 text-blue-800",
      2: "bg-purple-100 text-purple-800",
      3: "bg-amber-100 text-amber-800",
      4: "bg-green-100 text-green-800",
    }

    return (
      <Badge className={colors[stepNumber as keyof typeof colors]}>
        Step {stepNumber}:{" "}
        {STEPS.find((s) => s.number === stepNumber)
          ?.title.split("&")[0]
          .trim()}
      </Badge>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Active Clients</CardTitle>
            <CardDescription>Manage and track your clients' home buying journey</CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search clients..."
                className="pl-8 w-full md:w-[200px] lg:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Invite Client
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Current Step</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Saved Properties</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{client.name}</div>
                    <div className="text-sm text-muted-foreground">{client.email}</div>
                  </div>
                </TableCell>
                <TableCell>{getStepBadge(client.currentStep)}</TableCell>
                <TableCell>{formatDate(client.lastActive)}</TableCell>
                <TableCell>{client.savedProperties}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/clients/${client.id}`}>View Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filteredClients.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No clients found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
