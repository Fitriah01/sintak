"use client"

import { Outlet, Link, useLocation } from "react-router-dom"
import { Coffee, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/product" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-amber-50 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Menggunakan logo dari public folder */}
            <Link to="/home" className="flex items-center space-x-3">
              <img
                src="logokopi.png"
                alt="Aroma Sriwijaya Logo"
                className="h-10 w-10 object-contain"
  
              />
              {/* Fallback icon - akan muncul jika logo image error */}
              <Coffee className="h-8 w-8 text-amber-100" style={{ display: "none" }} />

              <div>
                <h1 className="text-2xl font-bold text-amber-900 font-serif">Aroma Sriwijaya</h1>
                <p className="text-xs text-amber-200 font-bold">Premium Indonesian Coffee</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-amber-600 border-b-2 border-amber-900"
                      : "text-amber-600 hover:text-amber-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-amber-900 hover:text-amber-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-amber-900 bg-amber-100"
                        : "text-amber-900 hover:text-amber-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-amber-50 text-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="logokopi.png"
                  alt="Aroma Sriwijaya Logo"
                  className="h-10 w-10 object-contain"
                />
                <div className="h-5 w-1 text-amber-700" style={{ display: "logokopi.png" }} />

                <div>
                  <h3 className="text-xl font-bold font-serif">Aroma Sriwijaya</h3>
                  <p className="text-sm text-amber-700">Premium Indonesian Coffee</p>
                </div>
              </div>
              <p className="text-amber-700 mb-4 max-w-md">
                Connecting Indonesian coffee farmers with global roasters and importers. We specialize in premium
                Arabica and Robusta beans from various regions across Indonesia.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-amber-700 hover:text-amber-100 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-amber-700">
                <p>Email: info@aromasriwijaya.com</p>
                <p>Phone: +62 123 456 789</p>
                <p>WhatsApp: +62 812 3456 7890</p>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p className="text-amber-200">© {new Date().getFullYear()} Aroma Sriwijaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
