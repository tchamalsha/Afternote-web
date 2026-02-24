import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-xs font-bold text-primary-foreground font-serif">A</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Afternote</span>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Testimonials
            </a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>

          <span className="hidden h-4 w-px bg-border md:block" aria-hidden="true" />

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact Us
            </Link>
          </nav>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Afternote. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
