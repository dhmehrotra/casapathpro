import type React from "react"
import { Sidebar } from "@/components/layout/sidebar"

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // In a real app, we would fetch the user's role and name from the database
  // For this MVP, we'll hardcode it
  const userRole = "buyer"
  const userName = "Sarah Johnson"

  return (
    <div className="flex min-h-screen">
      <Sidebar role={userRole} userName={userName} />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
