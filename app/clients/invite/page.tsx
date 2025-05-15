"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Copy } from "lucide-react"

export default function InviteClientPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [clientName, setClientName] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [inviteCode, setInviteCode] = useState("")
  const [inviteSent, setInviteSent] = useState(false)

  const generateInviteCode = () => {
    // Generate a random 4-character code
    const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase()
    setInviteCode(`BUYER-${randomCode}`)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log to console (simulating backend sync)
      console.log("Invite sent to:", { clientName, clientEmail, inviteCode })

      toast({
        title: "Invite Sent",
        description: `An invitation has been sent to ${clientEmail}.`,
      })

      setInviteSent(true)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send invitation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyInviteCode = () => {
    navigator.clipboard.writeText(inviteCode)
    toast({
      title: "Copied",
      description: "Invite code copied to clipboard.",
    })
  }

  const handleDone = () => {
    router.push("/clients")
  }

  return (
    <div className="p-4 md:p-6 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Invite a New Client</CardTitle>
          <CardDescription>Send an invitation to a potential buyer to join CasaPath Pro.</CardDescription>
        </CardHeader>
        {!inviteSent ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name</Label>
                <Input
                  id="clientName"
                  placeholder="John Smith"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientEmail">Client Email</Label>
                <Input
                  id="clientEmail"
                  type="email"
                  placeholder="john@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="inviteCode">Invite Code</Label>
                  <Button type="button" variant="ghost" size="sm" onClick={generateInviteCode}>
                    Generate
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Input
                    id="inviteCode"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    placeholder="BUYER-XXXX"
                    required
                  />
                  {inviteCode && (
                    <Button type="button" variant="outline" size="icon" onClick={copyInviteCode}>
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy invite code</span>
                    </Button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">This code will be used by your client to sign up.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Invitation"}
              </Button>
            </CardFooter>
          </form>
        ) : (
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium">Invitation Sent!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                An email has been sent to {clientEmail} with instructions to join CasaPath Pro.
              </p>
              <div className="mt-4 p-2 bg-background rounded border">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Invite Code:</p>
                  <Button variant="ghost" size="sm" className="h-6 px-2" onClick={copyInviteCode}>
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                  </Button>
                </div>
                <p className="text-lg font-mono mt-1">{inviteCode}</p>
              </div>
            </div>
            <Button onClick={handleDone} className="w-full">
              Done
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
