'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-dark">Déménagexpress</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">Accueil</Link>
            <Link href="#services" className="text-gray-700 hover:text-primary transition">Services</Link>
            <Link href="#about" className="text-gray-700 hover:text-primary transition">À Propos</Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="tel:+33612345678" className="button-primary">
              Appeler Maintenant
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary">Accueil</Link>
            <Link href="#services" className="block py-2 text-gray-700 hover:text-primary">Services</Link>
            <Link href="#about" className="block py-2 text-gray-700 hover:text-primary">À Propos</Link>
            <Link href="#contact" className="block py-2 text-gray-700 hover:text-primary">Contact</Link>
            <a href="tel:+33612345678" className="block button-primary text-center">Appeler</a>
          </nav>
        )}
      </div>
    </header>
  )
}
