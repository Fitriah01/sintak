import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image menggunakan img tag */}
      <img src="arabika.png" alt="" className="absolute inset-0 w-full h-full object-cover" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-amber-800/80 to-amber-900/85" />

      {/* Coffee beans pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.15'%3E%3Cpath d='M20 20c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm30 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm0 30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-30 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
         
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-amber-300">
                {/* Menggunakan logo kecil di hero section */}
                <img
                  src="logokopi.png"
                  alt="Aroma Sriwijaya Logo"
                  className="h-6 w-6 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none"
                  }}
                />
                <span className="text-sm font-medium tracking-wide uppercase bg-amber-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  Premium Indonesian Coffee
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight">
                From Indonesian
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                  {" "}
                  Highlands
                </span>
                <br />
                To Global Markets
              </h1>

              <p className="text-xl text-amber-100 leading-relaxed max-w-lg backdrop-blur-sm bg-amber-900/20 p-4 rounded-lg border border-amber-700/30">
                We connect passionate coffee farmers from across Indonesia with roasters, importers, and wholesalers
                worldwide, delivering exceptional Arabica and Robusta beans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/product"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore Our Coffee
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-200 text-amber-100 hover:bg-amber-100 hover:text-amber-900 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/10"
              >
                Get In Touch
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-amber-100/50">
              <div className="text-center backdrop-blur-sm bg-amber-900/20 p-4 rounded-lg border border-amber-700/30">
                <div className="text-3xl font-bold text-amber-100">15+</div>
                <div className="text-sm text-amber-200">Coffee Regions</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-amber-900/20 p-4 rounded-lg border border-amber-700/30">
                <div className="text-3xl font-bold text-amber-100">500+</div>
                <div className="text-sm text-amber-200">Partner Farmers</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-amber-900/20 p-4 rounded-lg border border-amber-700/30">
                <div className="text-3xl font-bold text-amber-100">25+</div>
                <div className="text-sm text-amber-200">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-amber-900/20 to-amber-300/20 p-6 rounded-3xl backdrop-blur-sm border border-amber-700/30">
                <img
                  src="arabika.jpg"
                  alt=""
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
