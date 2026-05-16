import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Déménagement Professionnel à Meung-sur-Loire
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Déménagexpress offre un service de déménagement complet et fiable. Équipe expérimentée, disponible 24h/24.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+33612345678" className="button-primary">
                  📞 Appeler Maintenant
                </a>
                <a href="#contact" className="button-outline">
                  ✉️ Demander un Devis
                </a>
              </div>
              <p className="text-blue-100 mt-8">
                ✅ Professionnel agréé • ✅ Assurance complète • ✅ Disponible 24/7
              </p>
            </div>

            {/* Right Image */}
            <div className="animate-slide-in-right">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <svg className="w-full h-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="400" fill="none"/>
                  <rect x="80" y="120" width="240" height="200" fill="none" stroke="white" strokeWidth="3" rx="8"/>
                  <rect x="100" y="140" width="60" height="80" fill="none" stroke="white" strokeWidth="2" rx="4"/>
                  <rect x="180" y="140" width="60" height="80" fill="none" stroke="white" strokeWidth="2" rx="4"/>
                  <rect x="260" y="140" width="40" height="80" fill="none" stroke="white" strokeWidth="2" rx="4"/>
                  <circle cx="120" cy="260" r="8" fill="white"/>
                  <circle cx="280" cy="260" r="8" fill="white"/>
                  <line x1="90" y1="320" x2="310" y2="320" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle">
              Découvrez nos solutions complètes de déménagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card card-hover">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold text-dark mb-3">Déménagement Complet</h3>
              <p className="text-gray-600 mb-4">
                Service de déménagement clé en main avec équipe professionnelle, emballage et déballage inclus.
              </p>
              <a href="#contact" className="text-primary font-semibold hover:text-blue-800">
                En savoir plus →
              </a>
            </div>

            {/* Service 2 */}
            <div className="card card-hover">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-dark mb-3">Manutention Spécialisée</h3>
              <p className="text-gray-600 mb-4">
                Manipulation d'objets fragiles, meubles anciens, pianos, tableaux avec soin professionnel.
              </p>
              <a href="#contact" className="text-primary font-semibold hover:text-blue-800">
                En savoir plus →
              </a>
            </div>

            {/* Service 3 */}
            <div className="card card-hover">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-dark mb-3">Stockage Sécurisé</h3>
              <p className="text-gray-600 mb-4">
                Locaux sécurisés et climatisés pour stocker vos affaires en toute confiance.
              </p>
              <a href="#contact" className="text-primary font-semibold hover:text-blue-800">
                En savoir plus →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <h2 className="section-title">À Propos de Déménagexpress</h2>
              <p className="text-lg text-gray-600 mb-6">
                Depuis 2020, Déménagexpress est votre partenaire de confiance pour tous vos déménagements à Meung-sur-Loire et dans la région.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Notre équipe expérimentée propose des solutions adaptées à vos besoins, du petit déménagement au projet complexe de relocalisation d'entreprise.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-dark">Équipe Professionnelle</h4>
                    <p className="text-gray-600">Personnel formé et expérimenté</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-dark">Assurance Complète</h4>
                    <p className="text-gray-600">Protection totale de vos biens</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-dark">Disponibilité 24/7</h4>
                    <p className="text-gray-600">Nous sommes toujours à votre service</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="button-secondary inline-block">
                Nous Contacter
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary text-white p-8 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-blue-100">Déménagements réussis</p>
              </div>
              <div className="bg-secondary text-white p-8 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold mb-2">6 ans</div>
                <p className="text-red-100">D'expérience</p>
              </div>
              <div className="bg-accent text-white p-8 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-orange-100">Client satisfaits</p>
              </div>
              <div className="bg-dark text-white p-8 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-gray-300">Disponibilité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt pour votre déménagement ?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+33612345678" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300">
              📞 Appeler: +33 6 12 34 56 78
            </a>
            <a href="mailto:info@demenagexpress.fr" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300">
              ✉️ Email: info@demenagexpress.fr
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center">Demander un Devis</h2>
            <p className="section-subtitle text-center">
              Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
            </p>

            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
                <input
                  type="text"
                  placeholder="Adresse de départ"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Adresse d'arrivée"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <textarea
                  placeholder="Décrivez votre déménagement (type de biens, volume, date souhaitée, etc.)"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="button-primary w-full"
              >
                Envoyer ma Demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
