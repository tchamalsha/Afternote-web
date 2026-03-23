"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(24px)"
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      <div className="mx-auto max-w-3xl">
        <span className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          A place for what matters
        </span>

        <h1 className="text-pretty font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Preserve the words <br className="hidden sm:block" />
          <span className="text-primary">you never want lost</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          EchoLove is a calm, secure space to store messages, memories, and
          meaningful words for the people you love — delivered when the time
          is right.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-primary/25"
          >
            Start Preserving
          </a>
          <a
            href="#features"
            className="rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-10 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to features"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
