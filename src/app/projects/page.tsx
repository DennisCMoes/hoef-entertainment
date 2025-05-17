import { createReader } from '@keystatic/core/reader'

import keystaticConfig from '../../../keystatic.config'
import HeroSection from '../../components/hero'
import ProjectCard from './card'
import { Metadata } from 'next'

const reader = createReader(process.cwd(), keystaticConfig)

export const metadata: Metadata = {
  title: 'Our Projects | Hoef Entertainment',
  description:
    "Browse Hoef Entertainment's portfolio of visual effects work — from short films and TV to music videos and commercial content. High-end visuals brought to life.",
  openGraph: {
    title: 'Our Projects | Hoef Entertainment',
    description:
      'Explore our portfolio of visual effects and animation projects — a curated selection of our latest and greatest productions.',
    url: 'https://hoef-entertainment.com/projects',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hoef Entertainment VFX Reel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Our Projects | Hoef Entertainment',
    description:
      'From creative experiments to cinematic productions — check out the visual storytelling crafted by Hoef Entertainment.',
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}

export default async function Projects() {
  const posts = await reader.collections.posts.all()

  return (
    <section className="min-h-screen px-4 text-white">
      {/* Hero Section */}
      <HeroSection
        title="Our Projects"
        description="A showcase of the ideas we've brought to life — from passion projects to studio production. Discover what we're working on."
        href="#projects-list"
        blurColor="bg-pink-800"
      />

      <section
        id="projects-list"
        className="mx-auto flex max-w-2xl flex-col gap-8"
      >
        {posts
          .sort(
            (a, b) =>
              new Date(b.entry.date!).valueOf() -
              new Date(a.entry.date!).valueOf()
          )
          .map((post) => (
            <ProjectCard
              key={post.slug}
              slug={post.slug}
              date={post.entry.date!}
              coverImage={post.entry.coverImage}
              production={post.entry.production}
              title={post.entry.title}
            />
          ))}
      </section>
    </section>
  )
}
