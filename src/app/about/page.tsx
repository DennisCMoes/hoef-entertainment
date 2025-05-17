import HeroSection from '../../components/hero'
import keystaticConfig from '../../../keystatic.config'

import { createReader } from '@keystatic/core/reader'
import MissionAndVision from './missionAndVision'
import FaqSection from './faqSection'
import { Metadata } from 'next'

const reader = createReader(process.cwd(), keystaticConfig)

export const metadata: Metadata = {
  title: 'About Us | Hoef Entertainment',
  description:
    "Learn more about the team behind Hoef Entertainment — Amsterdam's premier VFX studio led by Jaïr Hoefdraad.",
  openGraph: {
    title: 'About Us | Hoef Entertainment',
    description:
      "Discover the story behind Amsterdam's Hoef Entertainment — delivering high-end visual effects and animation for film and TV.",
    url: 'https://hoef-entertainment.com/about',
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
    title: 'About Us | Hoef Entertainment',
    description: "Meet the team behind Amsterdam's leading VFX studio.",
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}

export default async function About() {
  const faqs = await reader.collections.faq.all()

  return (
    <section className="text-white">
      {/* Hero Section */}
      <HeroSection
        title="About us"
        description={
          'At Hoef Entertainment, we bring stories to life through cutting-edge visual effects and animation.'
        }
        href="#mission"
      />

      {/* Mission & Vision */}
      <MissionAndVision />

      {/* FAQ */}
      <FaqSection faqs={faqs.map((faq) => ({ ...faq.entry }))} />
    </section>
  )
}
