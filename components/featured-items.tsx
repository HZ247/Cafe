import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedItems() {
  const featuredItems = [
    {
      name: "Signature Espresso Blend",
      price: "₹145",
      image: "/coffee1.jpg?height=300&width=300",
      description: "Rich, full-bodied espresso with notes of dark chocolate and caramel",
      category: "Premium Coffee",
    },
    {
      name: "Golden Cappuccino",
      price: "₹129",
      image: "/golden.webp?height=300&width=300",
      description: "Perfectly balanced espresso with silky microfoam and golden crema",
      category: "Specialty Drinks",
    },
    {
      name: "Artisan Truffle Pizza",
      price: "₹239",
      image: "/truffle-pizza.jpg?height=300&width=300",
      description: "Hand-crafted sourdough with premium truffle oil and fresh herbs",
      category: "Gourmet Food",
    },
    {
      name: "Vanilla Bean Delight",
      price: "₹219",
      image: "/vanilla-bean.jpg?height=300&width=300",
      description: "Madagascar vanilla beans with house-made caramel and steamed milk",
      category: "Signature Beverages",
    },
  ]

  return (
    <section className="py-24 bg-cafe-cream gradient-overlay">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          
            <h2 className="text-5xl md:text-6xl font-light text-stone-700 mb-6 text-shadow">
              <span className="text-cafe-bronze">Featured Selections</span>
            </h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              Handpicked favorites that showcase our commitment to exceptional quality and artisanal craftsmanship
            </p>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredItems.map((item, index) => {
            const cardColors = [
              "bg-cafe-sage border-cafe-sage-dark",
              "bg-cafe-sage border-cafe-sage-dark",
              "bg-cafe-sage border-cafe-sage-dark",
              "bg-cafe-sage border-cafe-sage-dark",
            ]

            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 ${cardColors[index % 4]} border-2 overflow-hidden shadow-lg hover:scale-105 hover:border-cafe-bronze`}
              >
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-stone-600 text-cafe-cream px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                    {item.category}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium text-stone-800 mb-3">{item.name}</h3>
                  <p className="text-stone-900 text-sm mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-semibold text-cafe-taupe">{item.price}</span>
                    <Button
                      size="sm"
                      className="bg-cafe-bronze hover:bg-cafe-bronze-dark text-cafe-cream rounded-full shadow-lg px-6 py-2 transform hover:scale-105 transition-all duration-300"
                    >
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-cafe-bronze hover:bg-cafe-bronze-dark text-cafe-cream px-12 py-4 rounded-full shadow-xl text-xl font-medium transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/menu">View Complete Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
