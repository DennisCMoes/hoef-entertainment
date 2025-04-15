'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { ChevronDown } from 'lucide-react'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (!isMobile || activeIndex === null) return

    const timeout = setTimeout(() => {
      setActiveIndex(null)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [activeIndex, isMobile])

  return (
    <section className="min-h-screen bg-slate-950 px-4 text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="mb-4 text-5xl font-bold">Our Projects</h1>
          <p className="text-lg text-slate-400">
            Lorem ipsum eiusmod laborum consectetur sint dolor amet ad dolore
            deserunt cupidatat cillum.
          </p>
        </motion.div>

        {/* Animated Chevron */}
        <motion.div
          className="absolute bottom-10 text-slate-600"
          animate={{
            y: [0, 10, 0], // Up and down
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      <section className="lg-grid-cols-3 mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/projects/${project.slug}`}
            onClick={() => isMobile && setActiveIndex(index)}
            onMouseEnter={() => !isMobile && setActiveIndex(index)}
            onMouseLeave={() => !isMobile && setActiveIndex(null)}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl transition-all duration-300"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition duration-500 ease-in-out group-hover:scale-105"
            />
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center bg-black/60 px-4 text-center text-3xl font-semibold text-white transition-opacity duration-500',
                {
                  'opacity-100': activeIndex === index || isMobile,
                  'opacity-0 group-hover:opacity-100': activeIndex !== index,
                }
              )}
            >
              {project.title}
            </div>
          </Link>
        ))}
      </section>
    </section>
  )
}

type Project = {
  title: string
  slug: string
  coverImage: string
}

const projects: Project[] = [
  {
    title: 'Cinematic Trailer',
    slug: 'cinematic-trailer',
    coverImage: '/projects/cinema.jpg',
  },
  {
    title: 'Fantasy Short Film',
    slug: 'fantasy-short',
    coverImage: '/projects/film_roll.jpg',
  },
  {
    title: 'Product Visualization',
    slug: 'product-viz',
    coverImage: '/projects/theater_hall.jpg',
  },
]
