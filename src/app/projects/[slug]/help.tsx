'use client'

import Link from 'next/link'
import { IconAlertCircle } from '@tabler/icons-react'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center text-white">
      <IconAlertCircle className="mb-6 h-20 w-20 text-red-500" stroke={1.5} />
      <h1 className="text-4xl font-bold md:text-5xl">
        404 - Project Not Found
      </h1>
      <p className="mt-4 max-w-md text-lg text-slate-400">
        The project you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>

      <Link
        href="/projects"
        className="group relative my-6 inline-block overflow-hidden rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-purple-500"
      >
        <span className="absolute -inset-0.5 z-0 rounded-lg bg-purple-400 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-30" />
        <span className="relative z-10">Back to projects</span>
      </Link>
    </section>
  )
}
