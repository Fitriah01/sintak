import ContactSection from "../components/ContactSection"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6">Contact Us</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Ready to start your coffee journey? Get in touch with our team for samples, pricing, and partnership
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Phone className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-amber-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+62 123 456 789</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Mail className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-amber-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">info@aromasriwijaya.com</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-amber-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Palembang, Indonesia</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Clock className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-amber-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our office in Palembang, South Sumatra</p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="h-96 bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be embedded here</p>
                <p className="text-sm text-gray-500 mt-2">
                  Jl. Kopi Nusantara No. 123, Palembang, South Sumatra 30126, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
