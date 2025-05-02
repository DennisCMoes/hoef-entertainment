'use client'

import { IconMoodSad } from '@tabler/icons-react'
import Link from 'next/link'

type NotFoundProps = {
  title?: string
  message?: string
  showHomeLink?: boolean
}

export default function NotFound({
  title = 'Page Not Found',
  message = 'Sorry, the page you are looking for does not exist.',
  showHomeLink = true,
}: NotFoundProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">
      <IconMoodSad className="mb-6 h-20 w-20 text-yellow-400" stroke={1.5} />
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-base text-slate-400">{message}</p>
      {showHomeLink && (
        <Link
          href="/"
          className="group relative my-6 inline-block overflow-hidden rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-purple-500"
        >
          <span className="absolute -inset-0.5 z-0 rounded-lg bg-purple-400 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-30" />
          <span className="relative z-10">Back to Home</span>
        </Link>
      )}
    </section>
  )
}
