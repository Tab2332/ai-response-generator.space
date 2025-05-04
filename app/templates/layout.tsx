import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Templates | AI Response Generator",
  description: "Choose from our collection of response templates for various use cases",
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Response Templates</h1>
        <p className="text-muted-foreground mt-2">
          Choose from our collection of templates to quickly generate responses for specific scenarios
        </p>
      </div>
      {children}
    </div>
  )
}
