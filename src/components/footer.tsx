import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        {/* About */}
        <div>
          {/* <h3 className="mb-3 text-lg font-semibold text-purple-400">
            Hoef Entertainment
          </h3> */}
          <div className="relative h-24 w-40">
            <Image
              src="/logos/logo_purple.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-zinc-400">
            High-end animation and VFX services tailored to bring your vision to
            life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-zinc-300 uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <FooterLink href="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink href="/about">About Us</FooterLink>
            </li>
            <li>
              <FooterLink href="/projects">Projects</FooterLink>
            </li>
            <li>
              <FooterLink href="/contact">Contact</FooterLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-zinc-300 uppercase">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              Email:{' '}
              <a
                href="mailto:info@hoefentertainment.com"
                className="text-white hover:underline"
              >
                info@hoefentertainment.com
              </a>
            </li>
            <li>
              Phone: <span className="text-white">+31 6 19405012</span>
            </li>
            <li>
              Location: <span className="text-white">Amsterdam, NL</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Hoef Entertainment. All rights
        reserved.
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="transition hover:text-purple-400">
      {children}
    </Link>
  )
}
