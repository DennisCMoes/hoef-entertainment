import { createReader } from '@keystatic/core/reader'

import keystaticConfig from '../../../keystatic.config'
import HeroSection from '../../components/hero'
import Link from 'next/link'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Projects() {
  const posts = await reader.collections.posts.all()

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

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/projects/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}