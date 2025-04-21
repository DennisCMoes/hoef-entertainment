import React from 'react'
import Markdoc from '@markdoc/markdoc'

import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../../../../keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

type Props = {
  params: { slug: string }
}

export default async function ProjectDetailPage({ params }: Props) {
  const post = await reader.collections.posts.read(params.slug)

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
    <section className="bg-slate-950 text-white">
      <h1>{post.title}</h1>
      {Markdoc.renderers.react(renderable, React)}
    </section>
  )
}
