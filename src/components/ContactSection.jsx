import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 font-serif mb-4">Let's Start Your Coffee Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to source premium Indonesian coffee for your business? Get in touch with our team for samples,
            pricing, and partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 font-serif mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@aromasriwijaya.com</p>
                    <p className="text-gray-600">export@aromasriwijaya.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+62 123 456 789</p>
                    <p className="text-gray-600">+62 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                    <p className="text-sm text-gray-500">Available 24/7 for international clients</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      Jl. Kopi Nusantara No. 123
                      <br />
                      Palembang, South Sumatra 30126
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6">
              <h4 className="font-semibold text-amber-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-gray-900">8:00 AM - 6:00 PM (WIB)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-gray-900">9:00 AM - 4:00 PM (WIB)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-gray-900">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-900 text-white rounded-xl p-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                International Support
              </h4>
              <p className="text-amber-100 text-sm">
                We provide 24/7 support for our international partners across different time zones. Contact us anytime
                for urgent inquiries or shipment updates.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-amber-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-amber-900 font-serif mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select your business type</option>
                  <option value="roastery">Coffee Roastery</option>
                  <option value="importer">Coffee Importer</option>
                  <option value="wholesaler">Wholesaler</option>
                  <option value="distributor">Distributor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your coffee needs, volume requirements, or any questions you have..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
