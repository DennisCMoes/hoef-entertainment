import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Hoef Entertainment</h3>
          <p className="text-sm text-zinc-400">
            High-end animation and VFX services tailored to bring your vision to life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase text-zinc-300 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><FooterLink href="/">Home</FooterLink></li>
            <li><FooterLink href="/about">About Us</FooterLink></li>
            <li><FooterLink href="/services">Our Services</FooterLink></li>
            <li><FooterLink href="/projects">Projects</FooterLink></li>
            <li><FooterLink href="/contact">Contact</FooterLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase text-zinc-300 mb-3">Contact</h4>
          <ul className="text-sm text-zinc-400 space-y-2">
            <li>Email: <a href="mailto:info@hoefentertainment.com" className="text-white hover:underline">info@hoefentertainment.com</a></li>
            <li>Phone: <span className="text-white">+31 6 12345678</span></li>
            <li>Location: <span className="text-white">Amsterdam, NL</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Hoef Entertainment. All rights reserved.
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-purple-400 transition">
      {children}
    </Link>
  )
}