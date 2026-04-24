"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I wrote letters to my children for every milestone — their 18th birthdays, their weddings, their first days of parenthood. EternalNote lets me be there, even if I can't be.",
    name: "Margaret L.",
    role: "Mother of three",
  },
  {
    quote:
      "After my diagnosis, I needed a way to leave words behind. EternalNote gave me peace of mind knowing my family will hear from me when they need it most.",
    name: "David R.",
    role: "Father and teacher",
  },
  {
    quote:
      "It's not just about the future. I use EternalNote to store memories I don't want to forget — moments of gratitude, lessons learned, love expressed.",
    name: "Amara K.",
    role: "Writer and storyteller",
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-testimonial]")
            items.forEach((item, i) => {
              setTimeout(() => {
                ;(item as HTMLElement).style.opacity = "1"
                ;(item as HTMLElement).style.transform = "translateY(0)"
              }, i * 150)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wide text-primary uppercase">
            Testimonials
          </span>
          <h2 className="text-pretty font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Words from people who care
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              data-testimonial
              className="relative rounded-2xl border border-border bg-card p-8 transition-all duration-500"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <blockquote className="mb-6 text-sm leading-relaxed text-card-foreground">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
