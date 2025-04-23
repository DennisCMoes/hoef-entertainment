'use client'

import './GlowCard.css'

import { motion } from 'motion/react'
import { ReactNode, useRef } from 'react'

type GlowCardProps = {
  index: number
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceGlowCard({
  index,
  icon,
  title,
  description,
}: GlowCardProps) {
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
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
      ref={cardRef}
      className="glow-card w-1/3 aspect-square border border-white/10 bg-slate-900 p-4 shadow-xl after:bg-slate-900"
      style={{ ['--clr' as string]: 'oklch(55.8% 0.288 302.321)' }}
      onMouseMove={handleMouseMove}
    >
      <div className="glow-card-content text-white">
        {icon}
        <h2 className="mb-2 text-3xl font-medium text-white">{title}</h2>
        <p className="text-lg text-slate-400">{description}</p>
      </div>
    </motion.div>
  )
}
