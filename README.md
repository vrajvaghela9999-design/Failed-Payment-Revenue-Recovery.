# Failed Payment Recovery Audit

A conversion-focused static landing page for the **$49 Failed-Payment Leakage Audit** and **$99 Failed-Payment Recovery Beta Setup**.

## What This Is

A validation-stage website for a B2B product that helps SaaS companies, paid communities, memberships, paid newsletters, creator subscriptions, and small subscription businesses find revenue leaking from failed payments.

## What This Is NOT

- Not a SaaS app
- Not a payment processor
- Not an automated dunning system
- No backend, no database, no authentication
- Does not collect, store, or process card data

## Pages

| Route | Description |
|---|---|
| `/` | Redirects to `/failed-payment-recovery` |
| `/failed-payment-recovery` | Main landing page |

## Getting Started

```bash
cd validation-pages
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and connect to [Vercel](https://vercel.com). No environment variables required.

## Placeholder URLs — Replace Before Publishing

Edit `src/config/links.ts`:

```typescript
export const LINKS = {
  FAILED_PAYMENT_PAYMENT_LINK: "FAILED_PAYMENT_PAYMENT_LINK_PLACEHOLDER",
  FAILED_PAYMENT_INTAKE_FORM: "FAILED_PAYMENT_INTAKE_FORM_PLACEHOLDER",
};
```

| Placeholder | Replace with |
|---|---|
| `FAILED_PAYMENT_PAYMENT_LINK_PLACEHOLDER` | Your Stripe Payment Link or Lemon Squeezy checkout URL for the $49 audit |
| `FAILED_PAYMENT_INTAKE_FORM_PLACEHOLDER` | Your Tally, Fillout, or Google Form URL for redacted data submission |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                       # Root layout
│   ├── page.tsx                         # Home → redirects
│   ├── globals.css                      # Dark theme
│   └── failed-payment-recovery/
│       └── page.tsx                     # Landing page
├── components/
│   ├── hero-section.tsx                 # Reusable hero
│   ├── pricing-section.tsx              # Pricing card
│   ├── faq-section.tsx                  # FAQ accordion
│   ├── warning-box.tsx                  # Warning/risk callout
│   ├── cta-section.tsx                  # CTA banner
│   ├── section-block.tsx                # Content section
│   ├── site-header.tsx                  # Navigation
│   ├── site-footer.tsx                  # Footer
│   └── ui/                             # shadcn/ui components
├── config/
│   └── links.ts                        # Placeholder CTA URLs
└── lib/
    └── utils.ts                        # Utility
```
