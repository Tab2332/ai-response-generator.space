"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function Navigation() {
  const { setTheme, theme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl pl-2">
            AI Response Generator
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#generator" className="text-muted-foreground hover:text-foreground">
            AI Response Generator
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">
            How It Works
          </Link>
          <Link href="#faq" className="text-muted-foreground hover:text-foreground">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 border-t bg-background">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#generator"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Response Generator
            </Link>
            <Link
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
