import { Star } from "lucide-react"
import Image from "next/image"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      review:
        "The ambiance is absolutely perfect! The natural light and cozy seating make it my favorite spot for afternoon coffee. Their cappuccino is exceptional.",
      image: "/user_icon.jpeg?height=60&width=60",
    },
    {
      name: "Rahul Patel",
      rating: 5,
      review:
        "Best pizza in town! The 3PM Power Pizza is loaded with fresh ingredients. The online ordering system is so convenient too.",
      image: "/user_icon.jpeg?height=60&width=60",
    },
    {
      name: "Anita Desai",
      rating: 4,
      review:
        "Love the light and airy interior design. Perfect place to work or catch up with friends. The Biscoff shake is a must-try!",
      image: "/user_icon.jpeg?height=60&width=60",
    },
    {
      name: "Vikram Singh",
      rating: 5,
      review:
        "Outstanding service and quality. The mojitos are refreshing and the staff is always friendly. Highly recommend for anyone looking for a premium café experience.",
      image: "/user_icon.jpeg?height=60&width=60",
    },
    {
      name: "Meera Joshi",
      rating: 5,
      review:
        "The perfect 3PM spot! Great variety on the menu, excellent coffee, and the delivery is always on time. My go-to place for quality food and drinks.",
      image: "/user_icon.jpeg?height=60&width=60",
    },
    {
      name: "Arjun Kumar",
      rating: 4,
      review:
        "Fantastic atmosphere and delicious food. The Mexican items are particularly good. The café has a premium feel without being pretentious.",
      image: "/user_icon.jpeg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-cafe-taupe">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">What Our Customers Say</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Real experiences from our valued customers who make 3PM Café their favorite destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-cafe-sage rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium text-stone-800">{review.name}</h3>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-stone-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-stone-600 leading-relaxed">"{review.review}"</blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-cafe-golden rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-light text-stone-800 mb-4">Share Your Experience</h2>
            <p className="text-stone-600 mb-6">
              We'd love to hear about your visit to 3PM Café. Your feedback helps us continue to provide exceptional
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/cafe3pm_khambhat/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 hover:bg-stone-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                Tag us on Instagram
              </a>
              <a
                href="tel:+919876543210"
                className="border border-stone-300 hover:border-stone-400 text-stone-700 px-6 py-3 rounded-full transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
