import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = [
    { src: "/gallery1.png?height=400&width=600", alt: "Café interior with natural light", category: "Interior" },
    { src: "/coffee.png?height=400&width=400", alt: "Signature cappuccino", category: "Beverages" },
    { src: "/pizza.png?height=500&width=400", alt: "Artisanal pizza", category: "Food" },
    { src: "/sitting.png?height=400&width=600", alt: "Cozy seating area", category: "Interior" },
    { src: "/drink.png?height=400&width=400", alt: "Fresh mojito", category: "Beverages" },
    { src: "/food.png?height=400&width=400", alt: "Gourmet sandwich", category: "Food" },
    { src: "/exterior.webp?height=600&width=400", alt: "Café exterior", category: "Exterior" },
    { src: "/beverges.webp?height=400&width=400", alt: "Specialty shake", category: "Beverages" },
    { src: "/customer.png?height=400&width=600", alt: "Customer enjoying coffee", category: "Lifestyle" },
  ]

  return (
    <div className="min-h-screen bg-cafe-sage">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-cafe-bronze mb-6">Gallery</h1>
          <p className="text-xl text-cafe-golden max-w-2xl mx-auto">
            Step into our world of light, flavor, and memorable moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Apply frame like About page */}
              <div className="bg-cafe-taupe rounded-3xl p-4 shadow-lg border-2 border-cafe-cream">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{image.category}</p>
                  <p className="text-xs opacity-90">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
