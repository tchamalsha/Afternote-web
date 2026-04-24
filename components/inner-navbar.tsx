import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function InnerNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <span className="text-sm font-bold text-primary-foreground font-serif">E</span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">
            EternalNote
          </span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </nav>
    </header>
  )
}
