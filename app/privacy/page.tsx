import type { Metadata } from "next"
import { InnerNavbar } from "@/components/inner-navbar"
import { InnerFooter } from "@/components/inner-footer"

export const metadata: Metadata = {
  title: "Privacy Policy — EternalNote",
  description: "How EternalNote collects, uses, and protects your personal information and the memories you entrust to us.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <InnerNavbar />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Page header */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Legal
          </p>
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: February 23, 2026
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-12">
          <Section title="Introduction">
            <p>
              At EternalNote, your privacy is not just a policy — it is a promise. We understand that the memories,
              messages, and words you entrust to us are deeply personal. This Privacy Policy explains how we collect,
              use, store, and protect your information when you use our services.
            </p>
            <p>
              By using EternalNote, you agree to the collection and use of information in accordance with this policy.
              If you do not agree with any part of this policy, please do not use our services.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>We collect the following types of information to provide and improve our services:</p>
            <ul className="ml-1 flex flex-col gap-3">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground">Account Information:</strong> Your name, email address, and password when you create an account.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground">Content You Create:</strong> Messages, letters, notes, and any media you upload to be delivered to your recipients.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground">Recipient Details:</strong> Names and contact information of the people you designate as recipients.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our platform, including device type, browser, and access times.</span>
              </li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use your information solely to deliver the service you expect from us:</p>
            <ul className="ml-1 flex flex-col gap-3">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>To store and deliver your messages and memories to designated recipients at the appropriate time.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>To maintain, protect, and improve our services.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>To communicate with you about your account and service updates.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>To comply with legal obligations and enforce our terms of service.</span>
              </li>
            </ul>
          </Section>

          <Section title="Data Security">
            <p>
              We employ industry-standard security measures to protect your data. All content is encrypted both in
              transit and at rest using AES-256 encryption. Access to your stored messages is strictly controlled
              and limited to authorized systems that facilitate delivery.
            </p>
            <p>
              We regularly review our security practices and update them to stay ahead of potential threats.
              However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              Your content is stored securely until it is delivered to your designated recipients or until you
              choose to delete it. Account information is retained for as long as your account remains active.
              If you close your account, we will delete your personal data within 90 days, except where retention
              is required by law.
            </p>
          </Section>

          <Section title="Third-Party Sharing">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share limited
              data with trusted service providers who assist us in operating our platform, provided they agree
              to keep your information confidential. We may also disclose information when required by law or
              to protect our rights and safety.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>You have the right to:</p>
            <ul className="ml-1 flex flex-col gap-3">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Access, correct, or delete your personal information at any time.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Request a copy of the data we hold about you.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Withdraw consent for data processing where applicable.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Lodge a complaint with a data protection authority.</span>
              </li>
            </ul>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes
              by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage you
              to review this page periodically.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please reach out to us at{" "}
              <a href="mailto:privacy@eternalnote.com" className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80">
                privacy@eternalnote.com
              </a>{" "}
              or visit our{" "}
              <a href="/contact" className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80">
                Contact page
              </a>.
            </p>
          </Section>
        </div>
      </article>

      <InnerFooter />
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-serif text-2xl font-semibold text-foreground">{title}</h2>
      <div className="flex flex-col gap-3 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  )
}
