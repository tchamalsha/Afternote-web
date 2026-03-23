"use client"

import { useEffect, useRef } from "react"
import { Lock, Heart, Clock, Feather } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Private & Secure",
    description:
      "End-to-end encryption keeps your most personal messages safe. Only the intended recipients will ever see them.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Write letters, record memories, and attach photos in a beautifully simple space designed for heartfelt expression.",
  },
  {
    icon: Clock,
    title: "Timed Delivery",
    description:
      "Choose when your messages are delivered — on a birthday, an anniversary, or at a moment you define in advance.",
  },
  {
    icon: Feather,
    title: "Gentle by Design",
    description:
      "No noise, no clutter. EchoLove is intentionally calm, letting you focus on the words that matter most.",
  },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-animate]")
            cards.forEach((card, i) => {
              setTimeout(() => {
                ;(card as HTMLElement).style.opacity = "1"
                ;(card as HTMLElement).style.transform = "translateY(0)"
              }, i * 120)
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
      id="features"
      ref={sectionRef}
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wide text-primary uppercase">
            Features
          </span>
          <h2 className="text-pretty font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-balance text-muted-foreground">
            Simple tools to help you write, store, and deliver the messages
            that define your legacy.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              data-animate
              className="rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              style={{ opacity: 0, transform: "translateY(24px)" }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
