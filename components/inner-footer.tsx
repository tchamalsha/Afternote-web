import Link from "next/link"

export function InnerFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-xs font-bold text-primary-foreground font-serif">A</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Afternote</span>
        </div>

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

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Afternote. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
