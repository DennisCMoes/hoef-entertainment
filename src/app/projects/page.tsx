import { createReader } from '@keystatic/core/reader'

import keystaticConfig from '../../../keystatic.config'
import HeroSection from '../../components/hero'
import ProjectCard from './card'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Projects() {
  const posts = await reader.collections.posts.all()

  return (
    <section className="min-h-screen px-4 text-white">
      {/* Hero Section */}
      <HeroSection
        title="Our Projects"
        description="A showcase of the ideas we've brought to life — from passion projects to collaborative builds. Discover what we're working on."
        href="#projects-list"
        blurColor="bg-pink-800"
      />

      <section id="projects-list" className="mx-auto flex max-w-2xl flex-col gap-8">
        {posts
          .filter((post) => !post.entry.draft)
          .map((post) => (
            <ProjectCard
              key={post.slug}
              slug={post.slug}
              coverImage={post.entry.coverImage}
              production={post.entry.production}
              title={post.entry.title}
            />
          ))}
      </section>
    </section>
  )
}
