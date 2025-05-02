import keystaticConfig from '../../keystatic.config'

import { createReader } from '@keystatic/core/reader'

import MasonryGrid from '@/components/masonry'
import AvailableServices from '@/components/services'
import HomeHeroSection from './hero'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Home() {
  const services = (await reader.collections.services.all()).sort()

  return (
    <section className="flex flex-col gap-48">
      {/* Hero Banner */}
      <HomeHeroSection />

      {/* Gallery */}
      <MasonryGrid />

      {/* Available Services */}
      <AvailableServices services={services} />
    </section>
  )
}
