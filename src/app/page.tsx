'use client'

import Link from 'next/link'
import ServiceBlock from './serviceBlock'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col text-white">

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center py-16 pt-24 md:py-0 bg-slate-950 overflow-visible">
        {/* Floating background blobs */}
        <div className="absolute -top-24 left-[-40px] h-80 w-80 rounded-full bg-purple-600 opacity-20 blur-[120px]" />
        <div className="absolute -bottom-20 right-[-60px] h-96 w-96 rounded-full bg-pink-500 opacity-20 blur-[120px] rotate-12" />

        {/* Content */}
        <div className="z-10 mx-auto grid w-full max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:px-0">
          <div className="flex h-full flex-col items-start justify-center">
            <h2 className="text-lg tracking-widest text-purple-400 md:text-xl uppercase">
              Hoef Entertainment
            </h2>
            <h1 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">
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
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-zinc-700/10 ring-1 ring-zinc-600/20 shadow-lg">
              <span className="text-zinc-400">[Visual Placeholder]</span>
            </div>
          </div>
        </div>

        {/* Animated Scroll Chevron */}
        <motion.div
          className="absolute bottom-10 text-slate-600"
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-950">
        {services.map((item, index) => (
          <ServiceBlock key={index} index={index} {...item} />
        ))}
      </section>
    </main>
  )
}

export type Service = {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: '3D Animation',
    description:
      "Our company has over 5 years experience with 3D animation. Whether it's character animation, product animation or explainer videos. We can bring it to life.",
  },
  {
    title: '3D Modeling',
    description:
      'Do you need a digital representation of your product? Or do you want 3D assets and characters for your film? Our 3D modellers are ready to recreate your ideas.',
  },
  {
    title: 'VFX',
    description:
      'Gun shots and spaceships are just the tip of the iceberg, talking about our capabilities. we have experience both as lead VFX studio, and as additional VFX consultant.',
  },
]