import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Contact Us | Hoef Entertainment',
  description:
    "Have a project in mind or just want to say hello? Reach out to Hoef Entertainment via email, phone, or our contact form. We'd love to hear from you.",

  openGraph: {
    title: 'Contact Us | Hoef Entertainment',
    description:
      'Ready to collaborate or ask a question? Use our contact form or email us directly to connect with Hoef Entertainment.',
    url: 'https://hoef-entertainment.com/contact',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hoef Entertainment VFX Reel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Contact Hoef Entertainment',
    description:
      'Have a project idea or looking for a custom VFX quote? Drop us a message or give us a call!',
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}

type Props = {
  children: ReactNode
}

export default function ContactLayout({ children }: Props) {
  return children
}
