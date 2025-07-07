import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cafe-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-cafe-bronze mb-6">About 3PM Café</h1>
            <p className="text-xl font-semibold text-cafe-sage-dark leading-relaxed">
              Where light meets flavor, and every moment feels like the perfect afternoon
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-cafe-sage rounded-3xl p-4 shadow-lg border-2 border-cafe-sage-dark">
                <Image
                  src="/interior2.png?height=400&width=600"
                  alt="Café interior with natural light"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-6 bg-cafe-sage rounded-3xl p-8 shadow-lg border-2 border-cafe-peach-dark">
              <h2 className="text-3xl font-bold text-stone-600">Our Story</h2>
              <p className="text-cafe-cream font-semibold leading-relaxed">
                Born from a passion for creating the perfect afternoon escape, 3PM Café embodies the essence of that
                magical hour when time slows down and flavors come alive. Our light, airy space is designed to be your
                sanctuary from the bustling world outside.
              </p>
              <p className="text-cafe-cream font-semibold leading-relaxed">
                Every cup is crafted with precision, every dish prepared with love, and every moment spent here is
                designed to elevate your day. We believe in the power of premium ingredients, artisanal techniques, and
                the warm embrace of natural light.
              </p>
            </div>
          </div>

          <div className="bg-cafe-golden rounded-3xl p-8 md:p-12 mb-16 border-2 border-cafe-golden-dark">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-cafe-sage rounded-2xl p-6 shadow-md border border-cafe-cream-dark">
                <h3 className="text-2xl font-light text-stone-800 mb-4">Premium Quality</h3>
                <p className="text-cafe-cream-dark">
                  We source only the finest ingredients and use artisanal techniques to create exceptional experiences
                </p>
              </div>
              <div className="bg-cafe-sage rounded-2xl p-6 shadow-md border border-cafe-cream-dark">
                <h3 className="text-2xl font-light text-stone-800 mb-4">Light & Airy</h3>
                <p className="text-cafe-cream-dark">
                  Our space is designed to maximize natural light, creating a serene and uplifting atmosphere
                </p>
              </div>
              <div className="bg-cafe-sage rounded-2xl p-6 shadow-md border border-cafe-cream-dark">
                <h3 className="text-2xl font-light text-stone-800 mb-4">Customer First</h3>
                <p className="text-cafe-cream-dark">
                  Every detail is crafted with our customers in mind, ensuring a memorable and delightful experience
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-cafe-green hover:bg-cafe-green-dark text-white px-8 py-3 rounded-full">
              Visit Our Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
