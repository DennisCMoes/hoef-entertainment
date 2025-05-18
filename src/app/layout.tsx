import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import cn from 'classnames'

import Header from '@/components/header'
import Footer from '@/components/footer'

const montserrat = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hoef Entertainment | High-End Visual Effects Studio in Amsterdam',
  description:
    'Hoef Entertainment is a VFX studio in Amsterdam blending cinematic artistry with cutting-edge technology for film, TV, music videos, and commercials.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'VFX studio Amsterdam',
    'visual effects Amsterdam',
    'Hoef Entertainment',
    'Jaïr Hoefdraad',
    'cinematic VFX',
    '3D animation',
    'motion graphics',
    'film post-production',
    'creative consulting',
  ],
  openGraph: {
    title: 'Hoef Entertainment | High-End Visual Effects Studio in Amsterdam',
    description:
      'Founded by VFX Supervisor Jaïr Hoefdraad, Hoef Entertainment delivers cinematic visual effects and animation for films, TV, music videos, and commercials.',
    url: 'https://hoef-entertainment.com',
    siteName: 'Hoef Entertainment',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hoef Entertainment VFX Reel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoef Entertainment | High-End Visual Effects Studio in Amsterdam',
    description:
      'From photorealistic VFX to stylized animation, Hoef Entertainment crafts A-level visuals for screen. Founded by Jaïr Hoefdraad.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          montserrat.className,
          'flex min-h-screen flex-col bg-slate-950 antialiased'
        )}
      >
        <Header />
        <main className="min-h-screen overflow-x-hidden pb-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
