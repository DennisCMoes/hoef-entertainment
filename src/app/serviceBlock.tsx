'use client'

import { motion } from 'motion/react'
import { Service } from './page'
import cn from 'classnames'

export default function ServiceBlock({
  title,
  description,
  index,
}: Service & { index: number }) {
  const isEven = index % 2 == 0

  return (
    <motion.section
      initial={{ opacity: 0, x: isEven ? -20 : 20, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div
        className={cn(
          'grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2',
          { 'md:flex-row-reverse': isEven }
        )}
      >
        <div className="relative flex aspect-square w-full items-center justify-center rounded-2xl bg-zinc-800 p-4 shadow-lg">
          <span className="text-zinc-500">[PLACEHOLDER]</span>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold text-zinc-200">{title}</h2>
          <p className="text-lg text-zinc-400">{description}</p>

          <button className="bg-purple-500 mt-4 rounded-lg cursor-pointer px-6 py-3 font-medium text-white transition hover:bg-zinc-200">
            More info
          </button>
        </div>
      </div>
    </motion.section>
  )
}
