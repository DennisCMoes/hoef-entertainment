'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-white/10 bg-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo or title */}
        <Link href="/" className="text-xl font-bold text-purple-400">
          Hoef Entertainment
        </Link>
        {/* <Link href="/" className="relative h-12 w-32">
          <Image src={'/logos/logo_purple.png'} alt="Logo" fill priority sizes='128px' className='object-contain'/>
        </Link> */}

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm font-medium text-white md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About us</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Mobile toggle */}
        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="bg-slate-950/90 px-6 pt-2 pb-6 text-white md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            <NavLink href="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>
              About us
            </NavLink>
            <NavLink href="/services" onClick={() => setOpen(false)}>
              Our services
            </NavLink>
            <NavLink href="/projects" onClick={() => setOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
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
