import MenuSection from "@/components/menu-section"
import { menuData } from "@/lib/menu-data"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cafe-sage gradient-overlay">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          
            <h1 className="text-6xl md:text-7xl font-light text-stone-700 mb-6 text-shadow">
              <span className="text-cafe-bronze">Artisan Collection</span>
            </h1>
            <p className="text-2xl text-stone-600 max-w-4xl mx-auto font-light leading-relaxed">
              A carefully curated selection of premium beverages, artisanal cuisine, and handcrafted delicacies that
              celebrate the finest in culinary excellence
            </p>
          
        </div>

        <div className="space-y-20">
          {menuData.map((section, index) => (
            <MenuSection key={index} section={section} />
          ))}
        </div>
      </div>
    </div>
  )
}
