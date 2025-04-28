'use client'

import { motion } from 'motion/react'

export default function MissionAndVision() {
  return (
    <section id="mission" className="min-h-[30vh] px-6">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-semibold">Our Mission</h2>
          <p className="text-lg text-slate-400">
            We create digital experiences that truly add value — for people, for
            businesses, and for society. Purposeful tech, thoughtfully crafted.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-semibold">Our Vision</h2>
          <p className="text-lg text-slate-400">
            Technology should be elegant, accessible, and meaningful. We believe
            in simplicity, transparency, and lasting relationships.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
