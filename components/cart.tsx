"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

interface CartProps {
  orderType: "takeaway" | "delivery"
}

export default function Cart({ orderType }: CartProps) {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const deliveryFee = orderType === "delivery" ? 50 : 0
  const finalTotal = total + deliveryFee
  const canProceed = orderType === "takeaway" || total >= 300

  if (items.length === 0) {
    return (
      <Card className="sticky top-4">
        <CardContent className="p-6 text-center">
          <ShoppingCart className="w-12 h-12 text-stone-300 mx-auto mb-4" />
          <p className="text-stone-500">Your cart is empty</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Your Order</span>
          <Badge variant="secondary" className="bg-stone-100">
            {itemCount} items
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-stone-800 text-sm">{item.name}</h4>
                <p className="text-stone-600 text-xs">₹{item.price} each</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 p-0 rounded-full"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="w-6 text-center text-sm">{item.quantity}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 p-0 rounded-full"
                >
                  <Plus className="w-3 h-3" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeItem(item.id)}
                  className="w-6 h-6 p-0 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-200 pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>
          {orderType === "delivery" && (
            <div className="flex justify-between text-sm">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
          )}
          <div className="flex justify-between font-medium text-lg border-t border-stone-200 pt-2">
            <span>Total</span>
            <span>₹{finalTotal}</span>
          </div>
        </div>

        {orderType === "delivery" && total < 300 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-yellow-800 text-xs">Minimum order ₹300 for delivery. Add ₹{300 - total} more.</p>
          </div>
        )}

        <div className="space-y-2">
          <Button className="w-full bg-stone-800 hover:bg-stone-700 text-white rounded-full" disabled={!canProceed}>
            Proceed to Payment
          </Button>
          <Button variant="outline" className="w-full rounded-full" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="text-xs text-stone-500 text-center">Estimated time: 20 minutes</div>
      </CardContent>
    </Card>
  )
}
