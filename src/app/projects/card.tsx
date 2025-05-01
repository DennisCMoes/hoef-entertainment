'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

type ProjectProps = {
  slug: string
  title: string
  excerpt: string
  coverImage: string
}

export default function ProjectCard({
  slug,
  title,
  excerpt,
  coverImage,
}: ProjectProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    cardRef.current.style.setProperty('--x', `${x}px`)
    cardRef.current.style.setProperty('--y', `${y}px`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glow-card group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-xl transition hover:scale-[1.02] hover:border-white/20 md:flex-row"
    >
      {/* Left: Text */}
      <div className="flex flex-col justify-center gap-4 text-white md:w-1/2 md:pr-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="line-clamp-2 text-sm text-slate-300">{excerpt}</p>
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-2 self-start rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-purple-500"
        >
          <span>Learn More</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      {/* Right: Image */}
      <div className="relative mt-6 flex items-center justify-center overflow-hidden rounded-lg bg-slate-800 md:mt-0 md:w-1/2">
        <Image
          src={coverImage}
          alt={title}
          width={400}
          height={300}
          className="h-auto max-h-[300px] w-auto rounded-md object-contain"
          priority
        />
      </div>
    </motion.div>
  )
}
