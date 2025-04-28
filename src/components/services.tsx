'use client'

import { motion } from 'motion/react'
import TablerIcon, { IconName } from '@/components/tablerIcon'
import ServiceGlowCard from '@/components/serviceCard'

type Service = {
  slug: string
  entry: {
    title: string
    icon: string
    description: string
    order: number
  }
}

type Props = {
  services: Service[]
}

export default function AvailableServices({ services }: Props) {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-6 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mb-16 text-center text-4xl font-semibold"
      >
        Available services
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
      </div>
    </section>
  )
}
