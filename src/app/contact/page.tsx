'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'


export default function Contact() {
  const sendEmail = async () => {
    await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        email: 'dennismoes@me.com',
        name: 'Dennis',
        message: 'Hello',
      }),
    })
  }

  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-20 md:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-semibold text-purple-400">
            Get in Touch
          </h2>
          <p className="mb-8 max-w-md text-slate-400">
            Whether you&apos;re looking to collaborate, need a custom quote, or
            just want to ask a question — we&apos;re here to help.
          </p>

          <ul className="space-y-6 text-sm text-zinc-400">
            <li className="flex items-center gap-4">
              <Mail className="text-white" size={20} />
              <a
                href="mailto:info@hoefentertainment.com"
                className="text-white hover:underline"
              >
                info@hoefentertainment.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-white" size={20} />
              <span className="text-white">+31 6 12345678</span>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="text-white" size={20} />
              <span className="text-white">Amsterdam, NL</span>
            </li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-xl"
        >
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-300">Message</label>
            <textarea
              rows={5}
              placeholder="Type your message here..."
              className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full cursor-pointer rounded-lg bg-purple-500 px-6 py-2 font-semibold text-white transition hover:bg-purple-600"
            onClick={sendEmail}
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
