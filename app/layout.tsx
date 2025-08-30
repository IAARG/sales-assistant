import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IAARG - Sales Assistant',
  description: 'Sistema inteligente de consultoria de vendas com IA',
  metadataBase: new URL('https://www.iaarg.com.br'),
  openGraph: {
    title: 'IAARG - Sales Assistant',
    description: 'Sistema inteligente de consultoria de vendas com IA',
    url: 'https://www.iaarg.com.br',
    siteName: 'IAARG',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IAARG - Sales Assistant',
    description: 'Sistema inteligente de consultoria de vendas com IA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
