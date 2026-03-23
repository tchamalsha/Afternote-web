"use client"

import { useState, Suspense, useEffect } from "react"
import type { FormEvent } from "react"
import Link from "next/link"
import { ArrowLeft, Lock, CheckCircle, Eye, EyeOff, ShieldX } from "lucide-react"

function ResetPasswordContent() {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [expiresAt, setExpiresAt] = useState<number | null>(null)
  const [isExpired, setIsExpired] = useState(false)

  // Parse hash-based parameters from Supabase
  useEffect(() => {
    const hash = window.location.hash.substring(1) // Remove #
    const params = new URLSearchParams(hash)
    
    const token = params.get("access_token")
    const expiresAtStr = params.get("expires_at")
    
    if (token && expiresAtStr) {
      const expiresAtTimestamp = parseInt(expiresAtStr, 10)
      const currentTimestamp = Math.floor(Date.now() / 1000)
      
      setAccessToken(token)
      setExpiresAt(expiresAtTimestamp)
      setIsExpired(currentTimestamp > expiresAtTimestamp)
    }
  }, [])

  const [submitted, setSubmitted] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState("")

  const passwordChecks = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains an uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains a special character", met: /[^A-Za-z0-9]/.test(password) },
  ]

  const allChecksMet = passwordChecks.every((check) => check.met)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")

    if (!allChecksMet) {
      setError("Please meet all password requirements.")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken,
          newPassword: password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to reset password. Please try again.")
        return
      }

      setSubmitted(true)
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    }
  }

  // ── No / invalid token ───────────────────────────────────────────────────
  if (!accessToken || isExpired) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <Link href="/" className="mb-10 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <span className="text-sm font-bold text-primary-foreground font-serif">E</span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">EchoLove</span>
        </Link>

        <div className="w-full max-w-md">
          <div className="flex flex-col items-center rounded-2xl bg-card p-10 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
              <ShieldX className="h-7 w-7 text-destructive" />
            </div>
            <h1 className="font-serif text-2xl font-semibold text-foreground">
              Link Invalid or Expired
            </h1>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
              This password‑reset link is invalid or has expired. Password reset
              links are only valid for a limited time. Please request a new one.
            </p>
            <Link
              href="/forgot-password"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request a new link
            </Link>
            <Link
              href="/"
              className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // ── Valid token — show the reset form ────────────────────────────────────
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      {/* Logo */}
      <Link href="/" className="mb-10 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
          <span className="text-sm font-bold text-primary-foreground font-serif">E</span>
        </div>
        <span className="text-xl font-semibold tracking-tight text-foreground">EchoLove</span>
      </Link>

      <div className="w-full max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center rounded-2xl bg-card p-10 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-serif text-2xl font-semibold text-foreground">
              Password Updated
            </h1>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Your password has been successfully reset. You can now sign in with your new password.
            </p>
            <Link
              href="/"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl bg-card p-10">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-7 w-7 text-primary" />
              </div>
              <h1 className="font-serif text-2xl font-semibold text-foreground">
                Reset Password
              </h1>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Choose a new password for your account. Make sure it is strong and unique.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* New password */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  New Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError("")
                    }}
                    placeholder="Enter new password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 pr-11 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Password strength checks */}
              {password.length > 0 && (
                <ul className="flex flex-col gap-1.5" aria-label="Password requirements">
                  {passwordChecks.map((check) => (
                    <li key={check.label} className="flex items-center gap-2">
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-xs ${
                          check.met
                            ? "bg-primary/15 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {check.met ? "\u2713" : "\u2022"}
                      </span>
                      <span
                        className={`text-xs ${
                          check.met ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {check.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Confirm password */}
              <div className="flex flex-col gap-2">
                <label htmlFor="confirm-password" className="text-sm font-medium text-foreground">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type={showConfirm ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value)
                      setError("")
                    }}
                    placeholder="Confirm new password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 pr-11 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <p className="rounded-lg bg-destructive/10 px-4 py-2.5 text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Reset Password
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordContent />
    </Suspense>
  )
}
