import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { name, email, subject, message } = await req.json()
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    await resend.emails.send({
      from: "EchoLove Contact <noreply@echolove.com>",
      to: ["hello@echolove.com"],
      subject: `[Contact] ${subject}`,
      reply_to: email,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
