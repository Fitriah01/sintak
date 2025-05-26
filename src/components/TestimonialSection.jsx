import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marcus Johnson",
    company: "Blue Mountain Roasters",
    country: "United States",
    rating: 5,
    text: "Aroma Sriwijaya has been our trusted partner for over 3 years. Their Sumatra Mandheling consistently delivers the earthy, full-bodied flavor our customers love. The quality is exceptional and delivery is always on time.",
    image: "kucing.jpg",
  },
  {
    id: 2,
    name: "Sophie Chen",
    company: "Pacific Coffee Importers",
    country: "Australia",
    rating: 5,
    text: "The Java Estate arabica from Aroma Sriwijaya has become one of our bestsellers. The chocolate and nutty notes are perfectly balanced, and their commitment to sustainable farming practices aligns with our values.",
    image: "kucing2.jpg",
  },
  {
    id: 3,
    name: "Hans Mueller",
    company: "European Coffee Trading",
    country: "Germany",
    rating: 5,
    text: "Working with Aroma Sriwijaya has opened up new opportunities for our business. Their Aceh Gayo coffee is extraordinary - the citrus and floral notes are exactly what the European market demands.",
    image: "kucing3.jpg",
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    company: "Tokyo Premium Coffee",
    country: "Japan",
    rating: 5,
    text: "The consistency and quality of Aroma Sriwijaya's robusta beans are unmatched. Their Lampung Robusta provides the perfect base for our espresso blends. Highly recommended for serious coffee businesses.",
    image: "kucing4.jpg",
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-amber-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 font-serif mb-4">
            Trusted by Coffee Professionals Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality and service has earned us partnerships with roasters, importers, and wholesalers
            across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} - ${testimonial.company}`}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=80&width=80"
                      }}
                    />
                    <div>
                      <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                      <p className="text-xs text-amber-600">{testimonial.country}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-white rounded-xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">150+</div>
              <div className="text-sm text-gray-600">Global Partners</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
