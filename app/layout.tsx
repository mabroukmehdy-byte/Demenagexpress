import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Déménagexpress - Déménagement Professionnel Meung-sur-Loire',
  description: 'Déménagexpress: Service professionnel de déménagement à Meung-sur-Loire (45130). Déménagement complet, manutention spécialisée, disponible 24/7.',
  keywords: 'déménagement, Meung-sur-Loire, 45130, déménageur, transport, manutention',
  authors: [{ name: 'Déménagexpress' }],
  openGraph: {
    title: 'Déménagexpress - Déménagement Meung-sur-Loire',
    description: 'Service professionnel de déménagement à Meung-sur-Loire',
    type: 'website',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
