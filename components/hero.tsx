import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cafe-cream gradient-overlay">
      <div className="absolute inset-0 z-0">
        <Image
          src="/3pm_back_2.png?height=1080&width=1920"
          alt="Elegant café interior with warm lighting"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="bg-cafe-golden/60 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border-2 border-cafe-golden-dark">
          <h1 className="text-6xl md:text-8xl font-light text-stone-700 mb-8 leading-tight tracking-wide text-shadow">
            Welcome to
            <span className="block font-medium text-cafe-bronze mt-4 text-7xl md:text-9xl">
              Cafe 3PM
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-stone-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the perfect blend of sophistication and warmth. Where
            artisanal coffee meets gourmet cuisine in an atmosphere of refined
            elegance and natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-cafe-sage hover:bg-cafe-bronze-dark text-cafe-cream px-12 py-6 rounded-full text-xl shadow-2xl font-medium tracking-wide transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/menu">Explore Our Menu</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-3 bg-cafe-bronze border-cafe-bronze text-cafe-cream hover:bg-cafe-bronze hover:text-cafe-cream px-12 py-6 rounded-full text-xl shadow-2xl font-medium tracking-wide transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/order">Order Online</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
