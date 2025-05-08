import HeroSection from '../../components/hero'
import keystaticConfig from '../../../keystatic.config'

import { createReader } from '@keystatic/core/reader'
import MissionAndVision from './missionAndVision'
import FaqSection from './faqSection'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function About() {
  const faqs = await reader.collections.faq.all()

  return (
    <section className="text-white">
      {/* Hero Section */}
      <HeroSection
        title="About us"
        description={
          "At Hoef Entertainment, we bring stories to life through cutting-edge visual effects and animation."
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
