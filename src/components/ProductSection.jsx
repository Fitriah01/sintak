import { Star, MapPin, Award, Mountain, Coffee } from "lucide-react"

const arabikaProducts = [
  {
    id: 1,
    name: "Arabika Gayo",
    region: "Aceh",
    varieties: "Typica, Bourbon, Catimor",
    altitude: "1.200–1.700 mdpl",
    character: "Full body, acidity sedang, aroma floral dan buah beri",
    taste: "Fruity, winey, sedikit cokelat",
    description:
      "Dikenal sebagai salah satu kopi arabika terbaik di dunia, Gayo memiliki profil rasa yang kompleks dan seimbang. Cocok untuk penikmat kopi spesialti.",
    rating: 4.9,
    image: "gayo.jpg",
    certification: "Organic",
  },
  {
    id: 2,
    name: "Arabika Mandheling",
    region: "Sumatera Utara",
    varieties: "Typica, Bourbon",
    altitude: "1.000–1.400 mdpl",
    character: "Body sangat kuat, acidity rendah, aroma earthy dan herbal",
    taste: "Cokelat pahit, rempah, tembakau",
    description:
      "Kopi Mandheling sangat khas dengan cita rasa bold dan tekstur creamy. Ideal untuk espresso dan blend premium.",
    rating: 4.8,
    image: "mandheling.jpg",
    certification: "Fair Trade",
  },
  {
    id: 3,
    name: "Arabika Toraja",
    region: "Sulawesi Selatan",
    varieties: "Typica, Bourbon",
    altitude: "1.400–1.900 mdpl",
    character: "Medium body, aroma rempah dan tanah basah",
    taste: "Earthy, nutty, sedikit asam",
    description:
      "Tumbuh di dataran tinggi Toraja, kopi ini menyajikan kompleksitas rasa dengan aftertaste yang panjang dan bersih.",
    rating: 4.7,
    image: "toraja.jpg",
    certification: "UTZ Certified",
  },
  {
    id: 4,
    name: "Arabika Flores Bajawa",
    region: "NTT",
    varieties: "Typica, Catimor",
    altitude: "1.200–1.800 mdpl",
    character: "Body sedang, acidity cerah, aroma fruity",
    taste: "Cokelat susu, buah tropis, vanilla",
    description:
      "Ditanam di tanah vulkanik Bajawa, kopi ini memiliki keseimbangan rasa yang cocok untuk metode seduh manual dan filter.",
    rating: 4.6,
    image: "floresbajawa.jpg",
    certification: "Organic",
  },
  {
    id: 5,
    name: "Arabika Java Estate",
    region: "Jawa Timur",
    varieties: "Typica",
    altitude: "900–1.500 mdpl",
    character: "Medium body, acidity rendah, rasa klasik",
    taste: "Nutty, karamel, cokelat",
    description:
      "Salah satu warisan kopi tertua di Indonesia sejak zaman kolonial. Cocok untuk pecinta kopi klasik dengan rasa yang bersih.",
    rating: 4.7,
    image: "javaestate.jpg",
    certification: "Heritage",
  },
]

const robustaProducts = [
  {
    id: 6,
    name: "Robusta Lampung",
    region: "Lampung",
    varieties: "Robusta",
    altitude: "400–800 mdpl",
    character: "Strong body, bitter, low acidity",
    taste: "Dark chocolate, roasted nut, earthy",
    description:
      "Robusta Lampung sangat cocok untuk kebutuhan industri atau kopi berbasis susu. Profilnya kuat dan pahit, dengan aftertaste cokelat gelap.",
    rating: 4.5,
    image: "robustalampung.jpeg",
    certification: "Premium",
  },
  {
    id: 7,
    name: "Robusta Temanggung",
    region: "Jawa Tengah",
    varieties: "Robusta",
    altitude: "500–900 mdpl",
    character: "Body tebal, aroma smoky dan spicy",
    taste: "Tembakau, rempah, tanah",
    description:
      "Tumbuh di lereng Gunung Sumbing, kopi ini menawarkan rasa unik yang sangat cocok untuk campuran kopi hitam dan tubruk.",
    rating: 4.4,
    image: "temanggung.jpg",
    certification: "Local Pride",
  },
  {
    id: 8,
    name: "Robusta Rejang Lebong",
    region: "Bengkulu",
    varieties: "Robusta",
    altitude: "600–800 mdpl",
    character: "Body kuat, aroma pahit",
    taste: "Bitter cocoa, woody, sedikit asam",
    description:
      "Banyak digunakan dalam industri kopi instan dan espresso blend. Kualitasnya stabil dan cocok untuk produksi massal.",
    rating: 4.3,
    image: "rajanglebong.jpg",
    certification: "Industrial Grade",
  },
  {
    id: 9,
    name: "Robusta Pupuan",
    region: "Bali",
    varieties: "Robusta",
    altitude: "300–700 mdpl",
    character: "Body sedang, aroma ringan",
    taste: "Cokelat, manis, lembut",
    description:
      "Dibudidayakan secara organik oleh petani Bali, robusta ini menawarkan profil rasa yang lebih ringan dan ramah untuk pemula.",
    rating: 4.4,
    image: "pupuan.jpg",
    certification: "Organic",
  },
]

export default function ProductSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 font-serif mb-4">Premium Indonesian Coffee Collection</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the finest Indonesian coffee beans from two distinct categories: premium Arabica from highland
            regions and robust Robusta varieties.
          </p>
        </div>

        {/* Arabika Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3 bg-amber-100 px-6 py-3 rounded-full">
              <Mountain className="h-6 w-6 text-amber-700" />
              <h3 className="text-2xl font-bold text-amber-900 font-serif">Kopi Arabika Indonesia</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {arabikaProducts.map((product) => (
              <div
                key={product.id}
                className="bg-amber-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-amber-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - Premium Arabica Coffee from ${product.region}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=400"
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.certification}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">ARABICA</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h4 className="text-xl font-bold text-amber-900 font-serif mb-1">{product.name}</h4>
                    <div className="flex items-center text-amber-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{product.region}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Varietas:</span>
                      <span className="text-gray-700">{product.varieties}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Ketinggian:</span>
                      <span className="text-gray-700">{product.altitude}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Karakter:</span> {product.character}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Rasa:</span> {product.taste}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
                    </div>
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Robusta Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3 bg-[#A76545] px-6 py-3 rounded-full">
              <Coffee className="h-6 w-6 text-amber-100" />
              <h3 className="text-2xl font-bold text-amber-100 font-serif">Kopi Robusta Indonesia</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {robustaProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#A76545] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-amber-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - Premium Robusta Coffee from ${product.region}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=400"
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.certification}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">ROBUSTA</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h4 className="text-xl font-bold text-amber-100 font-serif mb-1">{product.name}</h4>
                    <div className="flex items-center text-[#FFCF9D]">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{product.region}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#FFCF9D] font-medium">Varietas:</span>
                      <span className="text-[#FFCF9D]">{product.varieties}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#FFCF9D] font-medium">Ketinggian:</span>
                      <span className="text-[#FFCF9D]">{product.altitude}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-[#FFCF9D] mb-2">
                      <span className="font-medium">Karakter:</span> {product.character}
                    </p>
                    <p className="text-sm text-[#FFCF9D] mb-2">
                      <span className="font-medium">Rasa:</span> {product.taste}
                    </p>
                  </div>

                  <p className="text-xs text-[#FFCF9D] mb-4 leading-relaxed">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-amber-100">{product.rating}</span>
                    </div>
                    <Award className="h-5 w-5 text-amber-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
            <h4 className="text-2xl font-bold text-amber-900 font-serif mb-4">
              Ready to Source Premium Indonesian Coffee?
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us for samples, detailed specifications, and competitive pricing for both Arabica and Robusta
              varieties.
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
        </div>
      </div>
    </section>
  )
}