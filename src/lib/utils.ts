import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type EmailProps = {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailProps) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Missing RESEND_API_KEY')
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Test <no-reply@test.com>',
      to,
      subject,
      html,
    })

    if (error) throw error
    return data
  } catch (err) {
    console.error('Email sending failed:', err)
    throw new Error('Failed to send email')
  }
}
