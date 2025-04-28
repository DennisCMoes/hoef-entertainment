import React from 'react'
import Markdoc from '@markdoc/markdoc'

import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../../../keystatic.config'
import Image from 'next/image'

const reader = createReader(process.cwd(), keystaticConfig)

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const post = await reader.collections.posts.read(slug)

  if (!post) {
    return <div>No Post Found</div>
  }

  const { node } = await post.content()
  const errors = Markdoc.validate(node)

  if (errors.length) {
    console.error(errors)
    throw new Error('Invalid content')
  }

  const renderable = Markdoc.transform(node)

  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image src={post.coverImage!} alt="Cover image" fill />
        </div>
        <h1>{post.title}</h1>
        <div>
          <h1>Gallery</h1>
        </div>
        {Markdoc.renderers.react(renderable, React)}
      </div>
    </section>
  )
}
