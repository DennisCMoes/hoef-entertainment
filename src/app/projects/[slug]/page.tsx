'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function ProjectDetailPage() {
  return (
    <section className="bg-slate-950 text-white">
      {/* Fullscreen Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full overflow-hidden"
      >
        <Image
          src={'/projects/theater_hall.jpg'}
          alt="Theater Hall"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-20 left-20 z-20 w-full">
          <h1 className="mb-2 text-4xl font-bold">The Forgotten City</h1>
          <p className="max-w-xl text-slate-300">
            A short fantasy film enhanced with custom VFX and CGI environments,
            telling the story of a traveler lost in time.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      <section className="mx-auto max-w-5xl space-y-10 py-16">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Objective</h2>
          <p className="text-slate-400">
            The director wanted the ruins to feel alive and mystical. We were
            tasked with making an invisible world feel tangible using visual
            effects.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">What We Did</h2>
          <ul className="list-inside list-disc space-y-1 text-slate-400">
            <li>Set extension & matte painting</li>
            <li>Custom particle effects</li>
            <li>3D modeling of ruins and animated fog</li>
            <li>Color grading and cinematic finishing</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Tools & Software</h2>
          <p className="text-slate-400">
            Blender, After Effects, DaVinci Resolve, Houdini
          </p>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Gallery</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {Array.from(Array(5).keys()).map((item) => (
              <div
                key={item}
                className="aspect-square rounded-lg bg-slate-800"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl bg-slate-900 p-8 text-center">
          <h3 className="mb-4 text-2xl font-semibold">
            Have a project in mind?
          </h3>
          <p className="mb-6 text-slate-400">
            We&apos;d love to hear about it. Let&apos;s bring your vision to
            life.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500"
          >
            Contact Us
          </a>
        </div>
      </section>
    </section>
  )
}
