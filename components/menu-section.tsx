"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/hooks/use-cart"

interface MenuItem {
  name: string
  price: string
  description?: string
  customizable?: boolean
}

interface MenuSectionProps {
  section: {
    title: string
    items: MenuItem[]
  }
  showAddToCart?: boolean
}

export default function MenuSection({ section, showAddToCart = false }: MenuSectionProps) {
  const { addItem } = useCart()
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const updateQuantity = (itemName: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemName]: Math.max(0, (prev[itemName] || 0) + change),
    }))
  }

  const handleAddToCart = (item: MenuItem) => {
    const quantity = quantities[item.name] || 1
    addItem({
      id: item.name,
      name: item.name,
      price: Number.parseFloat(item.price.replace("₹", "").replace(",", "")),
      quantity,
    })
    setQuantities((prev) => ({ ...prev, [item.name]: 0 }))
  }

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <div className="bg-cafe-taupe rounded-3xl p-8 max-w-3xl mx-auto shadow-xl border-2 border-cafe-cream">
          <h2 className="text-4xl font-medium text-stone-700 mb-2 text-shadow">
            <span className="text-cafe-bronze">{section.title}</span>
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.items.map((item, index) => {

          return (
            <Card
              key={index}
              className="bg-cafe-golden border-2 border-cafe-cream hover:border-cafe-bronze hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-stone-700 leading-tight">{item.name}</h3>
                  {item.customizable && (
                    <Badge
                      variant="secondary"
                      className="bg-cafe-bronze/20 text-cafe-bronze border border-cafe-bronze text-xs font-semibold"
                    >
                      Customizable
                    </Badge>
                  )}
                </div>

                {item.description && <p className="text-black text-sm mb-6 leading-relaxed">{item.description}</p>}

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-cafe-bronze">{item.price}</span>

                  {showAddToCart && (
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          if (quantities[item.name] > 0) {
                            handleAddToCart(item)
                          } else {
                            updateQuantity(item.name, 1)
                          }
                        }}
                        className="bg-cafe-bronze hover:bg-cafe-bronze-dark text-cafe-cream rounded-full shadow-lg px-4 py-2 transform hover:scale-105 transition-all duration-300"
                      >
                        {quantities[item.name] > 0 ? "Add to Cart" : <Plus className="w-4 h-4" />}
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
