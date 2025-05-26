import { Users, Award, Globe, Leaf, Coffee, Heart } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6">About Aroma Sriwijaya</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Bridging Indonesian coffee heritage with global excellence since 2019
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 font-serif mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2019 in the heart of South Sumatra, Aroma Sriwijaya began as a vision to showcase
                  Indonesia's exceptional coffee heritage to the world. Our name reflects our deep connection to the
                  historic Sriwijaya kingdom, symbolizing our commitment to bringing Indonesian excellence to global
                  markets.
                </p>
                <p>
                  We started by partnering with small-scale farmers in remote highland regions, recognizing that the
                  best coffee comes from passionate growers who understand their land. Today, we work with over 500
                  farmers across 15 different regions, from the volcanic slopes of Java to the pristine highlands of
                  Aceh.
                </p>
                <p>
                  Our mission extends beyond just trading coffee. We're committed to sustainable farming practices, fair
                  trade principles, and building long-term relationships that benefit both our farming partners and our
                  international clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/coffee-farmers.jpg"
                alt="Indonesian coffee farmers working in highland plantation - Aroma Sriwijaya partners"
                className="w-full h-auto rounded-xl shadow-lg"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=500&width=600"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Leaf className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We promote environmentally responsible farming practices and support reforestation efforts in
                coffee-growing regions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-4">Fair Partnership</h3>
              <p className="text-gray-600">
                We ensure fair prices for farmers and build long-term relationships based on mutual respect and shared
                success.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                Every bean is carefully selected and processed to meet the highest international standards for specialty
                coffee.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">
                We connect Indonesian farmers with roasters and importers worldwide, creating a truly global coffee
                community.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-4">Heritage</h3>
              <p className="text-gray-600">
                We honor traditional Indonesian coffee cultivation methods while embracing modern processing techniques.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We invest in local communities through education programs and infrastructure development in farming
                regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate coffee professionals dedicated to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/budi-santoso.jpg"
                alt="Budi Santoso - Founder & CEO of Aroma Sriwijaya"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=200&width=200"
                }}
              />
              <h3 className="text-xl font-bold text-amber-900">Budi Santoso</h3>
              <p className="text-amber-600 font-medium">Founder & CEO</p>
              <p className="text-gray-600 mt-2">20+ years in coffee industry, former agricultural engineer</p>
            </div>

            <div className="text-center">
              <img
                src="/sari-dewi.jpg"
                alt="Sari Dewi - Head of Quality Control at Aroma Sriwijaya"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=200&width=200"
                }}
              />
              <h3 className="text-xl font-bold text-amber-900">Sari Dewi</h3>
              <p className="text-amber-600 font-medium">Head of Quality Control</p>
              <p className="text-gray-600 mt-2">Certified Q Grader with expertise in Indonesian coffee varieties</p>
            </div>

            <div className="text-center">
              <img
                src="/ahmad-rahman.jpg"
                alt="Ahmad Rahman - Export Manager at Aroma Sriwijaya"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=200&width=200"
                }}
              />
              <h3 className="text-xl font-bold text-amber-900">Ahmad Rahman</h3>
              <p className="text-amber-600 font-medium">Export Manager</p>
              <p className="text-gray-600 mt-2">International trade specialist with global market expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">500+</div>
              <div className="text-amber-100">Partner Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">15+</div>
              <div className="text-amber-100">Coffee Regions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">25+</div>
              <div className="text-amber-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-300 mb-2">1000+</div>
              <div className="text-amber-100">Tons Exported</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
