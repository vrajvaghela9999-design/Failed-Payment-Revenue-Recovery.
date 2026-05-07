import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { SectionBlock } from "@/components/section-block";
import { WarningBox } from "@/components/warning-box";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { LINKS } from "@/config/links";

export const metadata: Metadata = {
  title: "Failed Payment Revenue Recovery Audit",
  description:
    "A $49 failed-payment leakage audit for SaaS, paid communities, memberships, paid newsletters, creator subscriptions, and small subscription businesses using Stripe, Paddle, Lemon Squeezy, PayPal, Chargebee, or similar billing tools.",
};

export default function FailedPaymentRecoveryPage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        headline="Find out how much subscription revenue you may be losing to failed payments"
        subheadline="A $49 failed-payment leakage audit for SaaS, paid communities, memberships, paid newsletters, creator subscriptions, and small subscription businesses using Stripe, Paddle, Lemon Squeezy, PayPal, Chargebee, or similar billing tools."
        primaryCta="Buy $49 Audit"
        secondaryCta="Submit Redacted Failed-Payment Data"
        primaryHref={LINKS.FAILED_PAYMENT_PAYMENT_LINK}
        secondaryHref={LINKS.FAILED_PAYMENT_INTAKE_FORM}
        accentColor="blue"
      />

      {/* Content sections */}
      <div className="mx-auto max-w-3xl space-y-8 px-6 py-16 sm:py-20">
        {/* 1. Problem */}
        <SectionBlock
          id="problem"
          number={1}
          title="The Problem"
          subtitle="Failed payments quietly reduce monthly recurring revenue in subscription businesses."
          items={[
            "Expired credit cards, insufficient funds, and bank declines cause payments to fail silently every month.",
            "Failed renewals and unpaid invoices leave revenue sitting on the table without anyone noticing.",
            "Past-due subscriptions accumulate when follow-up is weak or nonexistent.",
            "Default retry logic from billing platforms is not optimized for your specific customer base or failure patterns.",
            "Without visibility into failure patterns, you cannot know how much revenue is leaking or which customers are at risk.",
            "The longer a failed payment goes unaddressed, the harder it is to recover the customer and the revenue.",
          ]}
        />

        {/* 2. What the audit includes */}
        <SectionBlock
          id="what-included"
          number={2}
          title="What the Audit Includes"
          variant="highlight"
          items={[
            "Failed-payment leakage estimate based on your actual redacted data.",
            "Failed revenue segmented by amount, age, failure reason, and subscription status.",
            "Recovery priority list ranking opportunities by estimated recoverable revenue.",
            "Common failure reason breakdown showing where most of your payments are failing.",
            "Factual recovery email templates that you review and approve before sending to any customer.",
            "Hosted payment-update workflow suggestions to help customers update their payment methods.",
            "Recovered-revenue tracking sheet to monitor recovery progress over time.",
          ]}
        />

        {/* 3. Who this is for */}
        <SectionBlock
          id="who-for"
          number={3}
          title="Who This Is For"
          items={[
            "SaaS businesses with recurring billing through Stripe, Paddle, Lemon Squeezy, PayPal, Chargebee, or similar tools.",
            "Paid communities and membership platforms experiencing involuntary churn from failed payments.",
            "Creator-subscription businesses that want to understand and reduce failed payment leakage.",
            "Paid newsletters and online education subscriptions losing subscribers to expired cards and bank declines.",
            "Subscription tools and small subscription ecommerce businesses that have not built internal failed-payment reporting.",
            "Founders who suspect they are losing revenue to failed payments but lack data to quantify it.",
          ]}
        />

        {/* 4. Who this is not for */}
        <SectionBlock
          id="who-not-for"
          number={4}
          title="Who This Is Not For"
          variant="negative"
          items={[
            "Adult businesses, gambling, or crypto speculation platforms.",
            "Deceptive subscription businesses or businesses that make cancellation intentionally difficult.",
            "Fake coaching funnels or supplements with aggressive/unverifiable health claims.",
            "High-chargeback businesses with a pattern of disputed transactions.",
            "Businesses expecting a custom payment processor, automated card retry engine, or fully automated dunning system.",
            "Businesses that want recovery emails sent automatically without business-owner review and approval.",
          ]}
        />

        {/* 5. What data to provide */}
        <SectionBlock
          id="what-data"
          number={5}
          title="What Data to Provide"
          subtitle="Export a redacted or anonymized failed-payment file from your billing platform. Include these fields where available."
          items={[
            "Invoice or payment ID (anonymized is fine).",
            "Amount and currency for each failed payment.",
            "Failed date or timestamp.",
            "Failure reason or status (e.g., card_declined, insufficient_funds, expired_card).",
            "Retry count, if available from your processor.",
            "Current subscription status for each affected customer (active, past due, canceled, unpaid).",
            "Subscription plan name or tier, if available.",
          ]}
        />

        {/* 6. What not to send — WARNING */}
        <WarningBox
          title="What Not to Send"
          variant="danger"
          items={[
            "Do not send card numbers, CVV codes, or full card details.",
            "Do not send payment processor passwords or admin login credentials.",
            "Do not send API keys or webhook secrets.",
            "Do not send bank account numbers or routing numbers.",
            "Do not send Stripe, Paddle, PayPal, Lemon Squeezy, or Chargebee login access.",
            "Do not send unnecessary personal customer data — anonymized IDs are preferred.",
          ]}
        />

        {/* 7. Output */}
        <SectionBlock
          id="output"
          number={7}
          title="What You Receive"
          variant="highlight"
          items={[
            "A short failed-payment leakage report summarizing patterns and estimated leakage.",
            "Prioritized recovery opportunities ranked by amount and recoverability.",
            "Factual customer recovery email templates that require your approval before sending.",
            "Payment-update workflow recommendations (hosted payment links, update pages).",
            "Recovered-revenue tracking sheet to monitor what you recover over time.",
            "Delivered after receiving usable redacted data.",
          ]}
        />
      </div>

      {/* 8. Pricing — Two tiers */}
      <div id="pricing" className="border-t border-border/40 bg-muted/20 px-6 py-12 sm:py-16">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Pricing
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-8 lg:grid-cols-2">
          {/* $49 Audit */}
          <PricingSection
            price="$49"
            title="Failed-Payment Leakage Audit"
            subtitle="One-time manual audit. Delivery after receiving usable redacted data."
            features={[
              "Failed-payment leakage estimate",
              "Revenue segmented by amount, age, reason, status",
              "Recovery priority list",
              "Common failure reason breakdown",
              "Delivered after receiving data",
            ]}
            ctaText="Buy $49 Audit"
            ctaHref={LINKS.FAILED_PAYMENT_PAYMENT_LINK}
            secondaryCtaText="Submit Redacted Data"
            secondaryCtaHref={LINKS.FAILED_PAYMENT_INTAKE_FORM}
            accentColor="blue"
          />

          {/* $99 Beta Setup */}
          <PricingSection
            price="$99"
            title="Recovery Beta Setup"
            subtitle="Includes the audit plus a manual recovery workflow and tracking."
            features={[
              "Everything in the $49 audit",
              "Factual recovery email templates",
              "Payment-update workflow recommendations",
              "Recovered-revenue tracking sheet",
              "Weekly tracking structure",
            ]}
            ctaText="Buy $99 Beta Setup"
            ctaHref={LINKS.FAILED_PAYMENT_PAYMENT_LINK}
            secondaryCtaText="Submit Redacted Data"
            secondaryCtaHref={LINKS.FAILED_PAYMENT_INTAKE_FORM}
            accentColor="blue"
          />
        </div>
      </div>

      {/* 9. Disclaimer */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        <WarningBox
          title="Disclaimer"
          variant="warning"
          items={[
            "This audit does not guarantee recovered revenue. It identifies possible failed-payment leakage and suggests recovery workflows.",
            "You approve and send all customer communication yourself. No emails are sent on your behalf without your explicit approval.",
            "This product does not process payments, create payment pages, collect card data, or replace your billing provider.",
            "Revenue estimates are based on the redacted data you provide and may not reflect actual recoverable amounts.",
            "Results depend on the completeness and accuracy of the data provided.",
          ]}
        />
      </div>

      {/* 10. FAQ */}
      <div className="mx-auto max-w-3xl px-6 pb-8">
        <FaqSection
          items={[
            {
              question: "Do you need my Stripe login?",
              answer:
                "No. I never ask for your Stripe, Paddle, PayPal, Lemon Squeezy, or Chargebee login credentials. You export a redacted failed-payment file from your billing platform and share it with me. I do not need access to your account.",
            },
            {
              question: "What data do you need?",
              answer:
                "A redacted or anonymized failed-payment CSV export from your billing platform. Include invoice/payment ID, amount, currency, failed date, failure reason, retry count (if available), and subscription status. Do not include card numbers, CVV, API keys, or passwords.",
            },
            {
              question: "Can I anonymize the data?",
              answer:
                "Yes. Anonymized IDs are preferred. You do not need to include customer names, emails, or personal details. The audit works with transaction-level data: amounts, dates, failure reasons, and subscription status.",
            },
            {
              question: "Do you guarantee recovered revenue?",
              answer:
                "No. This audit identifies possible failed-payment leakage and suggests recovery workflows. It does not guarantee that any specific amount will be recovered. Actual recovery depends on your follow-up actions and customer responses.",
            },
            {
              question: "Will you send emails to my customers?",
              answer:
                "No. I provide factual recovery email templates as part of the $99 beta setup. You must review, approve, and send all customer communications yourself. No emails are ever sent on your behalf without your explicit approval.",
            },
            {
              question: "Does this replace Stripe/Paddle/PayPal retries?",
              answer:
                "No. This audit supplements your existing billing platform. It does not replace your payment processor's retry logic, create custom payment pages, or function as an automated dunning system.",
            },
            {
              question: "Who is this not for?",
              answer:
                "This is not for adult businesses, gambling, crypto speculation, deceptive subscriptions, fake coaching funnels, supplements with aggressive claims, high-chargeback businesses, or businesses that make cancellation intentionally difficult.",
            },
            {
              question: "What happens after I pay?",
              answer:
                "After payment, you will receive instructions on how to export and submit your redacted failed-payment data. Once I receive usable data, I prepare the audit and deliver it. For the $99 beta setup, you also receive recovery email templates, payment-update workflow recommendations, and a tracking sheet.",
            },
          ]}
        />
      </div>

      {/* Bottom CTA */}
      <CtaSection
        headline="Ready to find your failed payment leakage?"
        subtitle="Get a structured analysis of your failed payments starting at $49."
        primaryCta="Buy $49 Audit"
        secondaryCta="Submit Redacted Failed-Payment Data"
        primaryHref={LINKS.FAILED_PAYMENT_PAYMENT_LINK}
        secondaryHref={LINKS.FAILED_PAYMENT_INTAKE_FORM}
      />
    </div>
  );
}
