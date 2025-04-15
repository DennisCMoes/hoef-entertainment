'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

export default function About() {
  return (
    <section className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="mb-4 text-5xl font-bold">About us</h1>
          <p className="text-lg text-slate-400">
            We&apos;re a team of passionate creators, thinkers, and tech lovers
            committed to innovation, quality, and meaningful human connection.
          </p>
        </motion.div>

        {/* Animated Chevron */}
        <motion.div
          className='absolute bottom-40 lg:bottom-10 text-slate-600'
          animate={{
            y: [0, 10, 0] // Up and down
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 min-h-[30vh]">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-semibold">Our Mission</h2>
            <p className="text-lg text-slate-400">
              We create digital experiences that truly add value — for people,
              for businesses, and for society. Purposeful tech, thoughtfully
              crafted.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-semibold">Our Vision</h2>
            <p className="text-lg text-slate-400">
              Technology should be elegant, accessible, and meaningful. We
              believe in simplicity, transparency, and lasting relationships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center text-4xl font-semibold"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 'all' }}
                className="border-b border-slate-800 pb-6"
              >
                <h3 className="text-xl font-medium text-white">
                  {faq.question}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

type FAQ = { question: string; answer: string }

const faqs: FAQ[] = [
  {
    question:
      "I'm producing a (short-) film and need help planning a VFX scene. Can you help?",
    answer:
      'Definitely! We would love to consult you, without obligation. Just contact us through the contact form or send us an email at info@hoef-entertainment.com.',
  },
  {
    question:
      "I would like to hire Hoef Entertainment for a 3D modeling job. Why isn't there an option to request a 3D model portfolio?",
    answer:
      'When we sell our 3D models, we usually sell the full copyrights with it. Therefore, we lose the ability to use the models for our own promotion (unless agreed on by contract). For that reason, the number of models we can show potential clients is limited.',
  },
  {
    question:
      "Your Projects tab doesn't show that many projects. Are you experienced enough for my project?",
    answer:
      'Most 3D modeling jobs and animation productions (where we aren\'t the lead animation studio) are delivered under a "ghost license". We give away the full copyrights, and therefore the rights to publicly use the content or project name for our own promotion.',
  },
  {
    question:
      'I would like to make an animated movie. Can you do the production?',
    answer:
      'We have quite some experience producing animated short films (check out our past productions). Our studio has experienced in-house modelers, animators, and storyboard artists. For screenwriting, casting, and sound design, we work with a trusted group of freelancers. If you have a proper movie pitch, we would love to make an appointment with you! Please send us a message through the contact form.',
  },
]
