import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from "lucide-react"
import Link from "next/link"

export default function LocationPreview() {
  return (
    <section className="py-24 bg-cafe-cream  gradient-overlay">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          
            <h2 className="text-5xl md:text-6xl font-light text-stone-700 mb-6 text-shadow">
              <span className="text-cafe-bronze">Visit Our Haven</span>
            </h2>
            <p className="text-xl text-stone-600 font-light">
              Nestled in the heart of the city, where elegance meets accessibility in perfect harmony
            </p>
          
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
          <div className="text-center bg-cafe-sage rounded-3xl p-10 shadow-xl border-2 border-cafe-taupe-dark hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-stone-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MapPin className="w-10 h-10 text-cafe-cream" />
            </div>
            <h3 className="text-2xl font-medium text-cafe-cream-dark mb-4">Prime Location</h3>
            <p className="text-black leading-relaxed">
              B 18, SIDDHSAGAR COMPLEX,  
              <br />
              near Railway Station, Vivekandand Society,
              <br />
              Khambhat, Gujarat 388620
            </p>
          </div>

          <div className="text-center bg-cafe-sage rounded-3xl p-10 shadow-xl border-2 border-cafe-sage-dark hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-stone-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Clock className="w-10 h-10 text-cafe-cream" />
            </div>
            <h3 className="text-2xl font-medium text-cafe-cream-dark mb-4">Opening Hours</h3>
            <p className="text-black leading-relaxed">
              Monday - Friday
              <br />
              7:00 AM - 10:00 PM
              <br />
              <br />
              Weekends
              <br />
              8:00 AM - 11:00 PM
            </p>
          </div>

          <div className="text-center bg-cafe-sage rounded-3xl p-10 shadow-xl border-2 border-cafe-cream-dark hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-stone-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Phone className="w-10 h-10 text-cafe-cream" />
            </div>
            <h3 className="text-2xl font-medium text-cafe-cream-dark mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <a
                href="tel:+919876543210"
                className="block text-black hover:text-cafe-bronze transition-colors font-medium"
              >
                +91 98765 43210
              </a>
              <p className="text-black">Reservations Available</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-cafe-bronze hover:bg-cafe-bronze-dark text-cafe-cream px-12 py-4 rounded-full shadow-xl text-xl font-medium transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/contact">Get Directions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
