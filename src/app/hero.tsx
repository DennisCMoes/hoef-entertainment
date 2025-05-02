'use client'

import Link from 'next/link'

import { motion } from 'motion/react'
import { IconChevronDown } from '@tabler/icons-react'

export default function HomeHeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-visible py-16 pt-24 md:py-0">
      {/* Floating background blobs */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute -top-24 left-[-40px] h-80 w-80 rounded-full bg-purple-600 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-[-60px] -bottom-20 h-96 w-96 rotate-12 rounded-full bg-pink-500 blur-[120px]"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 mx-auto grid w-full max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:px-0"
      >
        <div className="flex h-full flex-col items-start justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg tracking-widest text-purple-400 uppercase md:text-xl"
          >
            Hoef Entertainment
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-2 text-4xl leading-tight font-bold text-white md:text-6xl"
          >
            Premium Entertainment <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-3 text-xl font-medium text-pink-400 md:text-3xl"
          >
            Animation and VFX
          </motion.h2>

          <Link
            href={'#services'}
            className="group relative my-6 inline-block overflow-hidden rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-purple-500"
          >
            <span className="absolute -inset-0.5 z-0 rounded-lg bg-purple-400 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-30" />
            <span className="relative z-10">Explore our services</span>
          </Link>
        </div>

        {/* Right Visual Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="relative mt-12 h-[400px] w-full md:mt-0"
        >
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-zinc-700/40 shadow-lg ring-1 ring-zinc-600/40">
            <span className="text-zinc-400">[Visual Placeholder]</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: 'easeOut' }}
        href='#work-showcase'
      >
        <motion.div
          animate={{
            y: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2.7,
          }}
          className="mt-8"
        >
          <IconChevronDown className="text-white" size={32} />
        </motion.div>
      </motion.a>
    </section>
  )
}
