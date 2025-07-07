import Link from "next/link"
import { Instagram, MapPin, Phone, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-cafe-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-cafe-bronze/15"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-medium mb-6 text-cafe-bronze tracking-wider text-shadow">3PM Café</h3>
            <p className="text-stone-300 leading-relaxed font-light text-lg">
              Where sophistication meets warmth. Experience the perfect blend of artisanal excellence and refined
              hospitality in our golden sanctuary of flavor and comfort.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6 text-cafe-golden">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/menu" className="block text-stone-300 hover:text-cafe-bronze transition-colors">
                Artisan Menu
              </Link>
              <Link href="/order" className="block text-stone-300 hover:text-cafe-golden transition-colors">
                Order Online
              </Link>
              <Link href="/about" className="block text-stone-300 hover:text-cafe-sage transition-colors">
                Our Story
              </Link>
              <Link href="/gallery" className="block text-stone-300 hover:text-cafe-taupe transition-colors">
                Gallery
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6 text-cafe-golden">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-stone-400" />
                <span className="text-stone-300">B 18, SIDDHSAGAR COMPLEX,
                  </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-stone-400" />
                <a href="tel:+919876543210" className="text-stone-300 hover:text-cafe-cream transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-stone-400" />
                <span className="text-stone-300">Daily 7AM - 10PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6 text-cafe-golden">Stay Connected</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/cafe3pm_khambhat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center hover:bg-cafe-bronze transition-colors shadow-lg transform hover:scale-105 duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-stone-300">Follow @3pmcafe for daily inspiration and exclusive offers</p>
          </div>
        </div>

        <div className="border-t border-stone-600 mt-12 pt-8 text-center">
          <p className="text-stone-400">
            © 2024 3PM Café. All rights reserved. | Crafted with passion for the perfect afternoon experience
          </p>
        </div>
      </div>
    </footer>
  )
}
