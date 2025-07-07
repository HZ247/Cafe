"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
    { href: "/reviews", label: "Reviews" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-cafe-golden/95 backdrop-blur-md border-b-2 border-cafe-golden-dark shadow-xl z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-medium text-cafe-bronze tracking-wider text-shadow">
            <img src="/logo.png" alt="3PM Café Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-cafe-bronze transition-colors font-medium text-lg tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden md:flex bg-cafe-bronze hover:bg-cafe-bronze-dark text-cafe-cream rounded-full shadow-lg px-8 py-3 font-medium transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/order">Order Online</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="relative rounded-full border-2 border-cafe-bronze text-cafe-bronze hover:bg-cafe-bronze hover:text-cafe-cream bg-cafe-sage shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/order">
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-cafe-bronze text-cafe-cream text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-lg font-semibold">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden border-cafe-bronze text-cafe-bronze">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-cafe-taupe">
                <div className="flex flex-col space-y-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-stone-600 hover:text-cafe-bronze transition-colors py-3 text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="bg-cafe-bronze hover:bg-cafe-bronze-dark text-cafe-cream rounded-full mt-6 py-3 font-medium"
                  >
                    <Link href="/order" onClick={() => setIsOpen(false)}>
                      Order Online
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
