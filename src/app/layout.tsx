import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin']})


export const metadata: Metadata = {
  title: {
    template: '%s | Digital Maker Pro',
    default: 'Digital Maker Pro',
    absolute: 'Digital Maker Pro',
  },
  description: 'Na Digital Maker, não só oferecemos marketing, mas uma parceria estratégica para o crescimento personalizado da sua marca, transformando sua visão em realidade',
  keywords: [
    'Web design',
    'Fotográfo',
    'Videomaker',
    'Filmaker',
    'Marketing digital',
    'Assessoria de marketing',
    'Agência de publicidade',
    'Marketing',
    'Design gráfico',
    'Social media',
    'Planejamento estrátegico',
    'Publicidade',
    'Gestor de tráfego',
    'Campanhas de marketing',
    'Agência que cuida de rede social',
    'Sali',
    'Sali Produtor',
    'Digital Maker Pro',
    'Digital Maker Pro Igrejinha',
    'Digital Maker'
  ],
  creator: 'Sali Produtor | Digital Maker Dev',
  publisher: 'Digital Maker Pro | Vercel',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Digital Maker Pro',
    description: 'Na Digital Maker, não só oferecemos marketing, mas uma parceria estratégica para o crescimento personalizado da sua marca, transformando sua visão em realidade',
    url: 'https://digitalmakerpro.com',
    siteName: 'Digital Maker Pro',
    images: '/Miniatura.png',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Maker Pro',
    description: 'Na Digital Maker, não só oferecemos marketing, mas uma parceria estratégica para o crescimento personalizado da sua marca, transformando sua visão em realidade',
    creator: 'Digital Maker Pro',
    images: ['/Miniatura.png'],
  },
  category: 'Maketing Digital',
}
export const viewport: Viewport = {
  themeColor: '#713BB3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-white`}>
        <Header/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
