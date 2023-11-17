import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin']})


export const metadata: Metadata = {
  title: 'Digital Maker Pro',
  description: 'Na Digital Maker, não apenas oferecemos serviços de marketing; oferecemos uma parceria estratégica para o crescimento personalizado da sua marca. Seja qual for a sua visão, estamos aqui para transformá-la em realidade.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-white`}>

        {children}
        <Footer/>
      </body>
    </html>
  )
}
