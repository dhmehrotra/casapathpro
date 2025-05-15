import Link from "next/link"
import { AuthForm } from "@/components/auth/auth-form"
import { Home } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f0f7fa]">
      <header className="w-full py-4 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-6 w-6 text-teal-500" />
            <div>
              <h1 className="text-xl font-semibold">Casa Path Pro</h1>
              <p className="text-xs text-muted-foreground">AI Realtor Companion</p>
            </div>
          </Link>
        </div>
      </header>
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
        <AuthForm />
      </div>
    </div>
  )
}
