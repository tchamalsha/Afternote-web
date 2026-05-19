"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target.querySelector("[data-cta]") as HTMLElement
            if (el) {
              el.style.opacity = "1"
              el.style.transform = "translateY(0)"
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-card px-6 py-24 md:py-32"
    >
      <div
        data-cta
        className="mx-auto max-w-3xl rounded-3xl border border-border bg-background p-10 text-center shadow-xl shadow-primary/5 transition-all duration-700 sm:p-16"
        style={{ opacity: 0, transform: "translateY(24px)" }}
      >
        <span className="mb-4 inline-block text-sm font-medium tracking-wide text-primary uppercase">
          Get in Touch
        </span>
        <h2 className="text-pretty font-serif text-3xl font-bold text-foreground sm:text-4xl">
          We&apos;d love to hear from you
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
          Have a question, suggestion, or just want to say hello? Reach out and
          our team will get back to you as soon as we can.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-md shadow-primary/20 transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
          >
            Contact Us
          </Link>
          <a
            href="mailto:asithanuwanbandara@gmail.com"
            className="rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Email Directly
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          We typically respond within 24 hours.
        </p>
      </div>
    </section>
  )
}
