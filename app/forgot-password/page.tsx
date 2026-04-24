"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      {/* Logo */}
      <Link href="/" className="mb-10 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
          <span className="text-sm font-bold text-primary-foreground font-serif">E</span>
        </div>
        <span className="text-xl font-semibold tracking-tight text-foreground">EternalNote</span>
      </Link>

      <div className="w-full max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center rounded-2xl bg-card p-10 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-serif text-2xl font-semibold text-foreground">
              Check Your Email
            </h1>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
              If an account exists for{" "}
              <span className="font-medium text-foreground">{email}</span>, we have sent a
              password reset link. Please check your inbox and spam folder.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              {"Didn't receive anything?"}{" "}
              <button
                onClick={() => setSubmitted(false)}
                className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
              >
                Try again
              </button>
            </p>
            <Link
              href="/"
              className="mt-8 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl bg-card p-10">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h1 className="font-serif text-2xl font-semibold text-foreground">
                Forgot Password
              </h1>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Enter the email address associated with your account and we will send you a link to
                reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
