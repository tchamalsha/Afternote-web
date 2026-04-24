"use client"

import { useEffect, useRef } from "react"

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
          Get Started
        </span>
        <h2 className="text-pretty font-serif text-3xl font-bold text-foreground sm:text-4xl">
          Begin your legacy today
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
          Sign up to be among the first to use EternalNote. We&apos;ll let you
          know the moment it&apos;s ready.
        </p>

        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 rounded-xl border border-input bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="rounded-xl bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-md shadow-primary/20 transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
          >
            Join Waitlist
          </button>
        </form>

        <p className="mt-4 text-xs text-muted-foreground">
          No spam. Just a quiet note when the time is right.
        </p>
      </div>
    </section>
  )
}
