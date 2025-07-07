"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Clock, Truck } from "lucide-react"
import MenuSection from "@/components/menu-section"
import Cart from "@/components/cart"
import { menuData } from "@/lib/menu-data"
import { useCart } from "@/hooks/use-cart"

export default function OrderPage() {
  const [orderType, setOrderType] = useState<"takeaway" | "delivery">("takeaway")
  const { items, total } = useCart()

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">Order Online</h1>
          <p className="text-lg text-stone-600">Choose your favorites and we'll have them ready for you</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-8">
              <h2 className="text-xl font-medium text-stone-800 mb-4">Order Type</h2>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant={orderType === "takeaway" ? "default" : "outline"}
                  onClick={() => setOrderType("takeaway")}
                  className="flex items-center space-x-2 h-16 rounded-xl"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">Takeaway</div>
                    <div className="text-xs opacity-70">No minimum order</div>
                  </div>
                </Button>
                <Button
                  variant={orderType === "delivery" ? "default" : "outline"}
                  onClick={() => setOrderType("delivery")}
                  className="flex items-center space-x-2 h-16 rounded-xl"
                >
                  <Truck className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">Delivery</div>
                    <div className="text-xs opacity-70">Min ₹300</div>
                  </div>
                </Button>
              </div>
              <div className="flex items-center space-x-2 mt-4 text-stone-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Estimated time: 20 minutes</span>
              </div>
            </div>

            <Tabs defaultValue="recommended" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-stone-100 rounded-xl p-1">
                <TabsTrigger value="recommended" className="rounded-lg">
                  Recommended
                </TabsTrigger>
                <TabsTrigger value="beverages" className="rounded-lg">
                  Beverages
                </TabsTrigger>
                <TabsTrigger value="food" className="rounded-lg">
                  Food
                </TabsTrigger>
                <TabsTrigger value="pizza" className="rounded-lg">
                  Pizza
                </TabsTrigger>
                <TabsTrigger value="burgers" className="rounded-lg">
                  Burgers
                </TabsTrigger>
                <TabsTrigger value="shakes" className="rounded-lg">
                  Shakes
                </TabsTrigger>
                <TabsTrigger value="coffee" className="rounded-lg">
                  Coffee
                </TabsTrigger>
                <TabsTrigger value="snacks" className="rounded-lg">
                  Snacks
                </TabsTrigger>
              </TabsList>

              {menuData.map((section, index) => (
                <TabsContent key={index} value={section.id} className="space-y-6">
                  <MenuSection section={section} showAddToCart />
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Cart orderType={orderType} />
          </div>
        </div>
      </div>
    </div>
  )
}
