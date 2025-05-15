"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { type UserRole, STEPS } from "@/lib/types"
import { Home, Users, Calendar, FileText, Menu, LogOut } from "lucide-react"

interface SidebarProps {
  role: UserRole
  userName: string
}

export function Sidebar({ role, userName }: SidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const realtorNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Clients",
      href: "/clients",
      icon: Users,
    },
    {
      title: "Calendar",
      href: "/calendar",
      icon: Calendar,
    },
    {
      title: "Reports",
      href: "/reports",
      icon: FileText,
    },
  ]

  const buyerNavItems = STEPS.map((step) => ({
    title: `Step ${step.number}: ${step.title.split("&")[0].trim()}`,
    href: `/buyer/step/${step.number}`,
    icon: step.number,
  }))

  const navItems = role === "realtor" ? realtorNavItems : buyerNavItems

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon" className="absolute left-4 top-4">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <MobileSidebar
            role={role}
            userName={userName}
            navItems={navItems}
            pathname={pathname}
            onNavItemClick={() => setOpen(false)}
          />
        </SheetContent>
      </Sheet>
      <aside className="hidden lg:flex h-screen w-64 flex-col border-r">
        <DesktopSidebar role={role} userName={userName} navItems={navItems} pathname={pathname} />
      </aside>
    </>
  )
}

interface SidebarContentProps {
  role: UserRole
  userName: string
  navItems: {
    title: string
    href: string
    icon: any
  }[]
  pathname: string
  onNavItemClick?: () => void
}

function MobileSidebar({ role, userName, navItems, pathname, onNavItemClick }: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">CasaPath Pro</h2>
        <p className="text-sm text-muted-foreground">Welcome, {userName}</p>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavItemClick}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
              )}
            >
              {typeof item.icon === "number" ? (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {item.icon}
                </div>
              ) : (
                <item.icon className="h-5 w-5" />
              )}
              {item.title}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/auth/signout">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Link>
        </Button>
      </div>
    </div>
  )
}

function DesktopSidebar({ role, userName, navItems, pathname }: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">CasaPath Pro</h2>
        <p className="text-sm text-muted-foreground">Welcome, {userName}</p>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
              )}
            >
              {typeof item.icon === "number" ? (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {item.icon}
                </div>
              ) : (
                <item.icon className="h-5 w-5" />
              )}
              {item.title}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/auth/signout">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Link>
        </Button>
      </div>
    </div>
  )
}
