'use client'

import HeroSection from '../../components/hero'
import ProjectCard from './card'

import { motion } from 'motion/react'

export default function Projects() {
  return (
    <section className="min-h-screen px-4 text-white">
      {/* Hero Section */}
      <HeroSection
        title="Our Projects"
        description="Lorem ipsum eiusmod laborum consectetur sint dolor amet ad dolore
            deserunt cupidatat cillum."
        href="#projects-grid"
        blurColor="bg-blue-800"
      />

      <motion.section
        id="projects-grid"
        className="mx-auto flex max-w-6xl flex-col gap-16 pt-24"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.section>
    </section>
  )
}

type Project = {
  title: string
  description: string
  slug: string
  coverImage: string
}

const projects: Project[] = [
  {
    title: 'Game Character Animation',
    description: 'Realistic animations for a 3rd-person action RPG.',
    slug: 'game-animation',
    coverImage: '/projects/cinema.jpg',
  },
  {
    title: 'Stylized Environment Render',
    description: 'Hand-painted fantasy world rendered in Blender.',
    slug: 'stylized-env',
    coverImage: '/projects/film_roll.jpg',
  },
  {
    title: 'Brand Reveal Animation',
    description: 'A sleek logo animation for a startup tech brand.',
    slug: 'brand-reveal',
    coverImage: '/projects/theater_hall.jpg',
  },
  {
    title: 'Interactive Product Demo',
    description: '3D model with interactive hotspots for marketing.',
    slug: 'interactive-demo',
    coverImage: '/projects/cinema.jpg',
  },
  {
    title: 'AI-Driven Motion Capture',
    description: 'Using AI to clean mocap data for indie animation.',
    slug: 'ai-mocap',
    coverImage: '/projects/film_roll.jpg',
  },
  {
    title: 'Real-Time VFX in Unreal Engine',
    description: 'Dynamic particle and lighting effects for in-game use.',
    slug: 'unreal-vfx',
    coverImage: '/projects/theater_hall.jpg',
  },
]
