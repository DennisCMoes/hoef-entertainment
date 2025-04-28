'use client'

import cn from 'classnames'

import { motion } from 'motion/react'
import { Entry } from '@keystatic/core/reader'

import keystaticConfig from '../../../keystatic.config'

type FAQ = Entry<(typeof keystaticConfig)['collections']['faq']>

type Props = {
  faqs: FAQ[]
}

type FaqCardProps = {
  index: number
  totalLength: number
} & FAQ

export default function FaqSection({ faqs }: Props) {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-semibold"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <FaqCard
              key={index}
              index={index}
              totalLength={faqs.length}
              {...faq}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqCard({ index, totalLength, question, answer }: FaqCardProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 'all' }}
      // className="border-b border-slate-800 pb-6"
      className={cn('border-slate-800 pb-6', {
        'border-b': index < totalLength - 1,
      })}
    >
      <h3 className="text-xl font-medium text-white">{question}</h3>
      <p className="mt-2 leading-relaxed text-slate-400">{answer}</p>
    </motion.div>
  )
}
