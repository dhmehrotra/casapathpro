import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="py-8 px-4 border-b border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/casapath-icon.png"
              alt="Casa Path Pro Logo"
              width={50}
              height={50}
              className="h-auto"
              priority
            />
            <div className="ml-3">
              <span className="text-2xl font-bold text-gray-800">Casa Path Pro</span>
              <span className="block text-xs text-gray-500 mt-1">AI Realtor Companion</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
