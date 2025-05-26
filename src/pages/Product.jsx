import ProductSection from "../components/ProductSection"
import { Coffee, Award, Leaf, Globe, Mountain } from "lucide-react"

const regions = [
  {
    name: "Arabika Gayo",
    description: "Highland region producing world-class Arabica with complex flavor profiles",
    varieties: ["Typica", "Bourbon", "Catimor"],
    altitude: "1.200-1.700 mdpl",
    image: "gayo.jpg",
    type: "Arabica",
  },
  {
    name: "Arabika Mandheling",
    description: "Home of the famous Mandheling coffee with bold, earthy characteristics",
    varieties: ["Typica", "Bourbon"],
    altitude: "1.000-1.400 mdpl",
    image: "mandheling.jpg",
    type: "Arabica",
  },
  {
    name: "Arabika Toraja",
    description: "Toraja highlands producing unique coffee with wine-like complexity",
    varieties: ["Typica", "Bourbon"],
    altitude: "1.400-1.900 mdpl",
    image: "toraja.jpg",
    type: "Arabica",
  },
  {
    name: "Robusta Lampung",
    description: "Major Robusta producing region with strong, bold coffee characteristics",
    varieties: ["Robusta"],
    altitude: "400-800 mdpl",
    image: "robustalampung.jpeg",
    type: "Robusta",
  },
]

const certifications = [
  { name: "Organic", icon: Leaf, description: "Certified organic farming practices" },
  { name: "Fair Trade", icon: Award, description: "Fair prices for farmers" },
  { name: "UTZ Certified", icon: Globe, description: "Sustainable farming standards" },
  { name: "Rainforest Alliance", icon: Coffee, description: "Environmental conservation" },
]

export default function Product() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6">Indonesian Coffee Collection</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Discover the finest Indonesian coffee beans from two distinct categories: premium highland Arabica and
              robust lowland varieties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-amber-700/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-amber-600">
                <div className="flex items-center space-x-2">
                  <Mountain className="h-5 w-5 text-amber-300" />
                  <span className="font-semibold">5 Premium Arabica Varieties</span>
                </div>
              </div>
              <div className="bg-amber-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-amber-700">
                <div className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5 text-amber-300" />
                  <span className="font-semibold">4 Robust Robusta Varieties</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Regions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-4">Coffee Growing Regions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each region offers unique characteristics shaped by climate, soil, altitude, and traditional processing
              methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg ${region.type === "Arabica" ? "bg-amber-50 border border-amber-200" : "bg-amber-900 text-white border border-amber-700"}`}
              >
                <img
                  src={region.image || "/placeholder.svg"}
                  alt={`${region.name} coffee growing region - Indonesian ${region.type} plantation`}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=300&width=400"
                  }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className={`text-2xl font-bold font-serif ${region.type === "Arabica" ? "text-amber-900" : "text-amber-100"}`}
                    >
                      {region.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${region.type === "Arabica" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
                    >
                      {region.type.toUpperCase()}
                    </span>
                  </div>
                  <p className={`mb-4 ${region.type === "Arabica" ? "text-gray-700" : "text-amber-200"}`}>
                    {region.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        className={`text-sm font-medium ${region.type === "Arabica" ? "text-gray-600" : "text-amber-300"}`}
                      >
                        Altitude:
                      </span>
                      <span className={`text-sm ${region.type === "Arabica" ? "text-gray-800" : "text-amber-100"}`}>
                        {region.altitude}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        className={`text-sm font-medium ${region.type === "Arabica" ? "text-gray-600" : "text-amber-300"}`}
                      >
                        Varieties:
                      </span>
                      <span className={`text-sm ${region.type === "Arabica" ? "text-gray-800" : "text-amber-100"}`}>
                        {region.varieties.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <ProductSection />

      {/* Certifications */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-4">Quality Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and sustainability is recognized by international certification bodies for both
              Arabica and Robusta varieties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-amber-200">
                  <IconComponent className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-amber-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Processing Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-4">Processing Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use various processing methods to bring out the unique characteristics of each coffee variety, both
              Arabica and Robusta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Wet-Hulled (Giling Basah)</h3>
              <p className="text-gray-600">
                Traditional Indonesian method that creates the distinctive earthy, full-bodied flavor profile our coffee
                is known for. Perfect for both Arabica and Robusta.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Semi-Washed</h3>
              <p className="text-gray-600">
                Combines elements of washed and natural processing to create a balanced cup with enhanced sweetness and
                clarity, especially for premium Arabica varieties.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Natural Process</h3>
              <p className="text-gray-600">
                Sun-dried with the cherry intact, resulting in fruity, wine-like flavors with enhanced body and
                sweetness for specialty grade coffees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif mb-4">Ready to Source Premium Indonesian Coffee?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact us for samples, detailed specifications, and competitive pricing for both our premium Arabica and
            robust Robusta varieties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Request Arabica Samples
            </button>
            <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Request Robusta Samples
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
