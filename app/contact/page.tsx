import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cafe-sage">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-cafe-bronze mb-6">Visit Us</h1>
            <p className="text-xl text-stone-600">
              Find us in the heart of the city, where great coffee meets great company
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-cafe-taupe rounded-2xl p-8 shadow-sm border border-cafe-cream">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-cafe-sage-dark mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-stone-800 mb-2">Location</h3>
                    <p className="text-stone-600 leading-relaxed">
                      B 18, SIDDHSAGAR COMPLEX,
                      <br />
                      near Railway Station, Vivekandand Society,
                      <br />
                      Khambhat, Gujarat 388620
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cafe-taupe rounded-2xl p-8 shadow-sm border border-stone-100">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-stone-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-stone-800 mb-2">Phone</h3>
                    <a href="tel:+1234567890" className="text-stone-600 hover:text-stone-800 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-cafe-taupe rounded-2xl p-8 shadow-sm border border-stone-100">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-stone-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-stone-800 mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-stone-600">
                      <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cafe-taupe rounded-2xl p-8 shadow-sm border border-stone-100">
                <div className="flex items-start space-x-4">
                  <Instagram className="w-6 h-6 text-stone-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-stone-800 mb-2">Follow Us</h3>
                    <a
                      href="https://www.instagram.com/cafe3pm_khambhat/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-stone-800 transition-colors"
                    >
                      @cafe3pm_khambhat
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cafe-taupe rounded-2xl p-8">
              <h3 className="text-2xl font-light text-stone-800 mb-6">Get Directions</h3>
              <div className="h-[500px] bg-cafe-taupe rounded-xl mb-6 flex items-center justify-center">
                <iframe
                  title="3PM Café Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.7994771521826!2d72.6293561!3d22.3234222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f0700175b544d%3A0x7b2dca4af24ea22f!2sCAFE3PMKHAMBHAT!5e0!3m2!1sen!2sin!4v1751736364938!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <Link
                href="https://www.google.com/maps/place/CAFE3PMKHAMBHAT/@22.3234222,72.6293561,17z/data=!3m1!4b1!4m6!3m5!1s0x395f0700175b544d:0x7b2dca4af24ea22f!8m2!3d22.3234222!4d72.6293561!16s%2Fg%2F11w2kx8hrx?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-stone-800 hover:bg-stone-700 text-white rounded-full">Open in Maps</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
