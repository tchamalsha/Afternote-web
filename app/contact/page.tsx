"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { InnerNavbar } from "@/components/inner-navbar"
import { InnerFooter } from "@/components/inner-footer"
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@eternalnote.com",
    href: "mailto:hello@eternalnote.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const out = await res.json().catch(() => ({}))
        setError(out.error || "Failed to send message. Please try again.")
      } else {
        setSubmitted(true)
      }
    } catch (err) {
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      <InnerNavbar />

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Page header */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Have a question, suggestion, or just want to say hello? We would love to hear from you.
            Reach out and our team will get back to you as soon as we can.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Contact form */}
          <div className="flex-1">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Message Sent
                </h2>
                <p className="mt-3 max-w-sm text-muted-foreground leading-relaxed">
                  Thank you for reaching out. We will review your message and get back to you within
                  24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex flex-1 flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What is this about?"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us more..."
                    className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {error && (
                  <p className="rounded-lg bg-destructive/10 px-4 py-2.5 text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                  disabled={loading}
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <aside className="flex flex-col gap-6 lg:w-72">
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Other Ways to Reach Us
            </h2>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl bg-card p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card/50 p-5">
              <p className="text-sm font-medium text-foreground">Frequently Asked Questions</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Before reaching out, you might find your answer in our FAQ. We cover topics like
                account setup, message delivery, and data security.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <InnerFooter />
    </main>
  )
}
