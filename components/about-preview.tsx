import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPreview() {
  return (
    <section className="py-24 bg-cafe-sage gradient-overlay">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="bg-cafe-cream rounded-3xl p-12 shadow-2xl border-2 border-cafe-cream-dark">
              
                <h2 className="text-5xl md:text-6xl font-light text-stone-700 mb-4 text-shadow">
                  <span className="text-cafe-bronze">Artisanal Excellence</span>
                </h2>
                <p className="text-lg text-stone-600 font-medium">Where passion meets perfection</p>
             <div className="h-6" />
              <div className="space-y-3">
                <p className="text-lg text-stone-600 leading-relaxed">
                  Step into our carefully curated sanctuary where every detail reflects our dedication to excellence.
                  Warm, golden light filters through our thoughtfully designed space, creating an atmosphere that
                  transforms your ordinary afternoon into an extraordinary culinary journey.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Our master craftsmen use only the finest ingredients and time-honored techniques to create beverages
                  and dishes that not only satisfy but inspire. Each cup tells a story, each dish represents our
                  unwavering commitment to quality.
                </p>
              </div>
              <div className="mt-10 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-cafe-bronze hover:bg-cafe-bronze-dark text-cafe-cream px-10 py-4 rounded-full shadow-xl text-lg font-medium transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/about">Discover Our Journey</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-cafe-taupe rounded-3xl p-6 shadow-2xl border-2 border-cafe-taupe-dark">
              <Image
                src="/3pm_back_4.png"
                alt="Elegant café interior with warm golden lighting"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
