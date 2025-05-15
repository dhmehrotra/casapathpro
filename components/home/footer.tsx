import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-gray-400 text-sm">
          Built by{" "}
          <Link href="http://sparkai.studio/" className="text-teal-400 hover:underline" target="_blank">
            Spark AI Studio
          </Link>
        </p>
        <p className="text-gray-400 text-sm mt-2">
          &copy; {new Date().getFullYear()} Casa Path Pro. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
