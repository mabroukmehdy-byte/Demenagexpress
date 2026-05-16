import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Déménagexpress</h3>
            <p className="text-gray-400 mb-4">
              Service professionnel de déménagement à Meung-sur-Loire depuis 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Déménagement Complet</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Manutention</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Stockage</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Transport</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 <a href="tel:+33612345678" className="hover:text-white transition">+33 6 12 34 56 78</a></li>
              <li>📧 <a href="mailto:info@demenagexpress.fr" className="hover:text-white transition">info@demenagexpress.fr</a></li>
              <li>📍 Meung-sur-Loire, 45130</li>
              <li>🕐 24h/24, 7j/7</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Conditions d'utilisation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Politique de confidentialité</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} Déménagexpress. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm">
              Développé avec ❤️ par Déménagexpress
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
