'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo or title */}
        <Link href="/" className="text-xl font-bold text-purple-400">
          Hoef Entertainment
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About us</NavLink>
          <NavLink href="/services">Our services</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-slate-950/90 text-white px-6 pb-6 pt-2">
          <div className="flex flex-col gap-4 text-base font-medium">
            <NavLink href="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>About us</NavLink>
            <NavLink href="/services" onClick={() => setOpen(false)}>Our services</NavLink>
            <NavLink href="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
            <NavLink href="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative transition duration-200 hover:text-purple-400"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-purple-400 transition-all duration-300 hover:w-full" />
    </Link>
  )
}