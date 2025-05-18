import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/utils'

export async function POST(req: Request) {
  const body = await req.json()
  const { email, name, message } = body

  if (!email || !name || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    await sendEmail({
      to: 'info@hoefentertainment.com',
      subject: `Message from ${name} - ${email}`,
      html: `<p>${message}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Email failed' }, { status: 500 })
  }
}
