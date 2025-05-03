export const dynamic = 'force-dynamic'

import keystaticConfig from '../../../../keystatic.config'
import React from 'react'
import Image from 'next/image'

import { MDXComponents, MDXRemote } from 'next-mdx-remote-client/rsc'
import { createReader } from '@keystatic/core/reader'
// import { notFound } from 'next/navigation'

const reader = createReader(process.cwd(), keystaticConfig)

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: Props) {
  console.log('cwd:', process.cwd())
  const { slug } = await params
  console.log('slug:', slug)
  const allPosts = await reader.collections.posts.all()
  console.log(
    'All available posts:',
    allPosts.map((p) => p.slug)
  )
  console.log('Incoming slug:', slug)

  const post = await reader.collections.posts.read(slug.toLowerCase())
  console.log('post:', post)

  if (!post) {
    // notFound()
    return <p className='text-white'>NOTHING FOUND!!</p>
  }

  const content = await post.content()

  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto max-w-3xl px-4">
        {/* Title */}
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          {post.title}
        </h1>

        {/* Content */}
        <article className="prose prose-invert mb-12 max-w-none">
          <MDXRemote source={content} components={components} />
        </article>

        {/* Image Last, Responsive Container */}
        <div className="relative mx-auto w-fit overflow-hidden rounded-2xl bg-slate-800 p-6">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[100vh] w-full rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-12 mb-8 text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-6 text-3xl leading-tight font-bold tracking-tight md:text-4xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-3 text-xl font-semibold tracking-tight md:text-2xl">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-lg leading-relaxed text-slate-300">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 list-inside list-disc space-y-2 text-slate-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 list-inside list-decimal space-y-2 text-slate-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="ml-4">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-slate-500 pl-4 text-slate-400 italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline transition-colors hover:text-blue-300"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="text-slate-400 italic">{children}</em>,
  code: ({ children }) => (
    <code className="rounded bg-slate-800 px-2 py-1 font-mono text-sm text-pink-400">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-8 overflow-x-auto rounded-lg bg-slate-800 p-4 text-sm leading-relaxed">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-12 border-t border-slate-700" />,
  table: ({ children }) => (
    <div className="mb-8 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-700 text-left text-slate-300">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-slate-800">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-slate-700">{children}</tr>
  ),
  th: ({ children }) => <th className="px-4 py-2 font-semibold">{children}</th>,
  td: ({ children }) => <td className="px-4 py-2">{children}</td>,
}
