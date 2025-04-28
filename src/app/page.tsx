import Link from 'next/link'
import keystaticConfig from '../../keystatic.config'

import { createReader } from '@keystatic/core/reader'
import TablerIcon, { IconName } from '@/components/tablerIcon'
import ServiceGlowCard from '@/components/serviceCard'
import ImageGallery from '@/components/imageGallery'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Home() {
  const services = (await reader.collections.services.all()).sort()
  const gallery = await reader.collections.showcase.all()

  return (
    <section className="flex flex-col gap-32">
      {/* Hero Banner */}
      <section className="relative flex min-h-screen items-center justify-center overflow-visible py-16 pt-24 md:py-0">
        {/* Floating background blobs */}
        <div className="absolute -top-24 left-[-40px] h-80 w-80 rounded-full bg-purple-600 opacity-20 blur-[120px]" />
        <div className="absolute right-[-60px] -bottom-20 h-96 w-96 rotate-12 rounded-full bg-pink-500 opacity-20 blur-[120px]" />

        {/* Content */}
        <div className="z-10 mx-auto grid w-full max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:px-0">
          <div className="flex h-full flex-col items-start justify-center">
            <h2 className="text-lg tracking-widest text-purple-400 uppercase md:text-xl">
              Hoef Entertainment
            </h2>
            <h1 className="mt-2 text-4xl leading-tight font-bold text-white md:text-6xl">
              Premium Entertainment <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <h2 className="mt-3 text-xl font-medium text-pink-400 md:text-3xl">
              Animation and VFX
            </h2>
            <Link
              href={'#services'}
              className="group relative my-6 inline-block overflow-hidden rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-purple-500"
            >
              <span className="absolute -inset-0.5 z-0 rounded-lg bg-purple-400 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-30" />
              <span className="relative z-10">Explore our services</span>
            </Link>
          </div>

          {/* Right Visual Block */}
          <div className="relative mt-12 h-[400px] w-full md:mt-0">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-zinc-700/40 shadow-lg ring-1 ring-zinc-600/40">
              <span className="text-zinc-400">[Visual Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ImageGallery gallery={gallery} />

      {/* Available Services */}
      <section
        id="services"
        className="relative mx-auto max-w-6xl px-6 text-white"
      >
        <h2 className="mb-12 text-center text-4xl font-semibold">
          Available services
        </h2>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {services
            .sort((service) => service.entry.order)
            .map((service, index) => (
              <ServiceGlowCard
                key={index}
                title={service.entry.title}
                index={index}
                description={service.entry.description}
                icon={
                  <TablerIcon
                    iconName={service.entry.icon as IconName}
                    size={48}
                    className="mb-4"
                  />
                }
              />
            ))}
            <ServiceGlowCard
                title={"TEST"}
                index={1}
                description={"Lorem ipsum aliquip, cillum ea occaecat reprehenderit, elit dolor nostrud ad aliquip dolore, excepteur magna."}
                icon={
                  <TablerIcon
                    iconName={"Icon123"}
                    size={48}
                    className="mb-4"
                  />
                }
              />
        </div>
      </section>
    </section>
  )
}
