import Hero from "@/components/hero"
import FeaturedItems from "@/components/featured-items"
import AboutPreview from "@/components/about-preview"
import LocationPreview from "@/components/location-preview"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedItems />
      <AboutPreview />
      <LocationPreview />
    </main>
  )
}
