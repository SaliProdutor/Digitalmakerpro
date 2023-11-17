import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin']})


export const metadata: Metadata = {
  title: 'Digital Maker Pro',
  description: 'Na Digital Maker, não só oferecemos marketing, mas uma parceria estratégica para o crescimento personalizado da sua marca, transformando sua visão em realidade',
}
export const viewport: Viewport = {
  themeColor: '#713BB3',
  width: '1024'
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
        <Footer/>
      </body>
    </html>
  )
}
