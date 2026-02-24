import type { Metadata } from "next"
import { InnerNavbar } from "@/components/inner-navbar"
import { InnerFooter } from "@/components/inner-footer"

export const metadata: Metadata = {
  title: "Terms of Service — Afternote",
  description: "The terms and conditions governing your use of Afternote, your rights, and our responsibilities.",
}

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: February 23, 2026
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-12">
          <Section title="Acceptance of Terms">
            <p>
              By accessing or using Afternote, you agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our services. We reserve the right to modify these terms at any time,
              and continued use of Afternote constitutes acceptance of any changes.
            </p>
          </Section>

          <Section title="Description of Service">
            <p>
              Afternote provides a platform that allows users to create, store, and schedule the delivery of personal
              messages, letters, and memories to designated recipients. Our service is designed to preserve what matters
              most and ensure your words reach the right people at the right time.
            </p>
          </Section>

          <Section title="Account Registration">
            <p>To use Afternote, you must create an account. You agree to:</p>
            <ul className="ml-1 flex flex-col gap-3">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Provide accurate, current, and complete information during registration.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Maintain and promptly update your account information.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Keep your password secure and confidential.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Accept responsibility for all activities that occur under your account.</span>
              </li>
            </ul>
          </Section>

          <Section title="User Content">
            <p>
              You retain full ownership of all content you create and upload to Afternote. By using our service,
              you grant us a limited license to store, process, and deliver your content as directed by you.
              We will never use your content for advertising, marketing, or any purpose other than providing
              the service.
            </p>
            <p>You agree not to upload content that:</p>
            <ul className="ml-1 flex flex-col gap-3">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Violates any applicable law or regulation.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Infringes on the intellectual property rights of others.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Contains malicious code, spam, or harmful material.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Is harassing, threatening, or abusive toward any person.</span>
              </li>
            </ul>
          </Section>

          <Section title="Delivery of Messages">
            <p>
              Afternote will make every reasonable effort to deliver your messages to designated recipients
              according to your instructions. However, we cannot guarantee delivery in all circumstances,
              including but not limited to situations where recipient contact information is invalid,
              technical failures occur, or delivery is prevented by circumstances beyond our control.
            </p>
          </Section>

          <Section title="Payment and Subscriptions">
            <p>
              Certain features of Afternote may require a paid subscription. Subscription fees are billed
              in advance on a recurring basis. You may cancel your subscription at any time, and cancellation
              will take effect at the end of the current billing period. We reserve the right to change
              subscription pricing with 30 days advance notice.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Afternote and its team shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of or related
              to your use of the service. Our total liability shall not exceed the amount you have paid
              to us in the twelve months preceding the event giving rise to the claim.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              We may suspend or terminate your account if you violate these Terms of Service or engage
              in conduct that we determine, in our sole discretion, is harmful to other users or
              to Afternote. Upon termination, your right to use the service will immediately cease.
              We will make reasonable efforts to deliver any pending messages before account closure,
              where possible.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the jurisdiction in which Afternote operates, without regard to conflict of law
              principles. Any disputes arising from these terms shall be resolved through binding
              arbitration or in the courts of the applicable jurisdiction.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@afternote.com" className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80">
                legal@afternote.com
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
