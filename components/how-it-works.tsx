"use client"

import { useEffect, useRef } from "react"
import { PenLine, Send, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: PenLine,
    title: "Write your message",
    description:
      "Take your time. Write a letter, add a photo, or record a voice note. There are no deadlines on memory.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Store it safely",
    description:
      "Your message is encrypted and stored securely. Only you can edit it until the moment it is delivered.",
  },
  {
    number: "03",
    icon: Send,
    title: "Set your delivery",
    description:
      "Choose the recipient and the moment — a future date, an event, or a condition you define. We handle the rest.",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-step]")
            items.forEach((item, i) => {
              setTimeout(() => {
                ;(item as HTMLElement).style.opacity = "1"
                ;(item as HTMLElement).style.transform = "translateY(0)"
              }, i * 180)
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
      id="how-it-works"
      ref={sectionRef}
      className="bg-card px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wide text-primary uppercase">
            How It Works
          </span>
          <h2 className="text-pretty font-serif text-3xl font-bold text-card-foreground sm:text-4xl">
            Three simple steps
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-balance text-muted-foreground">
            No complicated setup. Just the space to say what you mean, and the
            trust that it will arrive.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              data-step
              className="relative text-center transition-all duration-600"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              <span className="mb-4 inline-block font-serif text-5xl font-bold text-primary/20">
                {step.number}
              </span>
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
