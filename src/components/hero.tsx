'use client'

import { motion } from 'motion/react'
import { Mouse } from 'lucide-react'
import cn from 'classnames'

type Props = {
  title: string
  description: string
  showBlur?: boolean
  blurColor?: string
  showChevron?: boolean
  href?: string
}

export default function HeroSection({
  title,
  description,
  href,
  showChevron = true,
  showBlur = true,
  blurColor = 'bg-purple-500',
}: Props) {
  return (
    <section className="relative mb-32 flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      {/* Blurred Animated Half Circle */}
      {showBlur && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 40, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className={cn(
            'absolute -bottom-10 h-1/3 w-1/4 rounded-full opacity-30 blur-3xl',
            blurColor
          )}
        />
      )}

      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-2/5 w-full bg-gradient-to-b from-transparent to-slate-950" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10 max-w-3xl"
      >
        <h1 className="mb-4 text-5xl font-bold">{title}</h1>
        <p className="text-lg text-slate-400">{description}</p>
      </motion.div>

      {/* Animated Chevron */}
      {showChevron && (
        <motion.a
          href={href}
          className="absolute bottom-32 z-10 overflow-visible text-slate-600 lg:bottom-48"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Mouse size={32} className="text-white" />
          {/* <ChevronDown size={32} className="text-white" /> */}
        </motion.a>
      )}
    </section>
  )
}
