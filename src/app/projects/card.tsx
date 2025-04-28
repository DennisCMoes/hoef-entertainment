'use client'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'motion/react'
import { Entry } from '@keystatic/core/reader'

import keystaticConfig from '../../../keystatic.config'

type ProjectProps = Entry<(typeof keystaticConfig)['collections']['posts']> & {
  slug: string
}

export default function ProjectCard({ title, coverImage, slug }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true, amount: 0.6 }}
      className="z-20 flex aspect-video flex-col gap-8 space-y-6 rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-xl md:flex-row"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={coverImage!}
          alt="Theater Hall"
          className="object-cover"
          fill
          priority
        />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <h2 className="mb-4 text-3xl font-semibold">{title}</h2>
        <Link
          href={'/projects/' + slug}
          className="group relative my-6 inline-block w-fit overflow-hidden rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-purple-500"
        >
          <span className="absolute -inset-0.5 z-0 rounded-lg bg-purple-400 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-30" />
          <span className="relative z-10">Learn more</span>
        </Link>
      </div>
    </motion.div>
  )
}
