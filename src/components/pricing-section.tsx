import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingSectionProps {
  price: string;
  title: string;
  subtitle?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  accentColor?: "blue" | "violet";
}

export function PricingSection({
  price,
  title,
  subtitle,
  features,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  accentColor = "blue",
}: PricingSectionProps) {
  const accentGradient =
    accentColor === "violet"
      ? "from-violet-500 to-purple-500"
      : "from-blue-500 to-cyan-500";

  return (
    <section id="pricing" className="py-12 sm:py-16">
      <div className="mx-auto max-w-lg">
        <Card className="relative overflow-hidden border-2 shadow-lg">
          {/* Top accent bar */}
          <div
            className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentGradient}`}
          />

          <CardHeader className="pb-4 pt-8 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {title}
            </p>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold tracking-tight">{price}</span>
              <span className="text-lg text-muted-foreground">/one-time</span>
            </div>
            {subtitle && (
              <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </CardHeader>

          <CardContent className="space-y-6 pb-8">
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full text-base font-semibold"
                )}
              >
                {ctaText}
              </a>
              <a
                href={secondaryCtaHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full text-base"
                )}
              >
                {secondaryCtaText}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
