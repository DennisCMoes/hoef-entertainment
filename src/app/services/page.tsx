'use client'

import HeroSection from '../../components/hero'
import GlowCard from '../../components/serviceCard'

import { motion } from 'motion/react'
import { ReactNode } from 'react'
import { Film, Box, Sparkles } from 'lucide-react'

export default function Services() {
  return (
    <section className="text-white">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        description="Lorem ipsum eiusmod laborum consectetur sint dolor amet ad dolore
            deserunt cupidatat cillum."
        href="#services"
        blurColor="bg-pink-800"
      />

      <section
        id="services"
        className="relative mx-auto max-w-6xl px-6 pt-24 pb-32"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-semibold"
        >
          Available Services
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {services.map((item, index) => (
            <GlowCard key={index} index={index} {...item} />
          ))}
        </div>
      </section>
    </section>
  )
}

type Service = {
  title: string
  description: string
  icon: ReactNode
}

const services: Service[] = [
  {
    title: '3D Animation',
    description:
      'We bring stories to life with high-quality 3D animation. From game characters to marketing videos, our team delivers creative and tailored visuals for every project.',
    icon: <Film className="mb-4 h-10 w-10" />,
  },
  {
    title: '3D Modeling',
    description:
      'With years of experience, we create detailed 3D models for film, games, and marketing. Our models are always crafted to match the unique needs of each project.',
    icon: <Box className="mb-4 h-10 w-10" />,
  },
  {
    title: 'VFX Solutions',
    description:
      'From explosions to fantasy effects, we deliver cinematic VFX that elevate your production. Our expert team handles everything from compositing to full scene creation.',
    icon: <Sparkles className="mb-4 h-10 w-10" />,
  },
]
