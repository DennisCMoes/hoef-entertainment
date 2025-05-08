'use client'

import { motion } from 'motion/react'

export default function MissionAndVision() {
  return (
    <section id="mission" className="min-h-[30vh] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-auto flex justify-center flex-col max-w-3xl min-h-[60vh] mb-12"
      >
        <h2 className="mb-4 text-4xl font-semibold">Who are we?</h2>
        <p className="text-lg text-slate-400">
          Based in Amsterdam, our studio blends technical precision with
          cinematic artistry to deliver A-level visuals for film, TV, music
          videos, online content, and commercial content. Founded by Visual
          effects supervisor Jaïr Hoefdraad, Hoef Entertainment has an intense
          passion for storytelling and an obsession with developing technology.
          Whether it&apos;s photorealistic visual effects, cartoony animations,
          or creative consulting, we are happy to team up with any filmmaker,
          studio, and agency to enhance every single frame of the production.
          From concept to final render, we&apos;re here to take your project to
          the next level.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-semibold">Our Mission</h2>
          <p className="text-lg text-slate-400">
            to become Europe&apos;s most innovative VFX house, mixing authentic
            storytelling with cutting edge technology. And push the boundaries
            of imagery.
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
