import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  headline: string;
  subtitle?: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref: string;
  secondaryHref: string;
}

export function CtaSection({
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {headline}
        </h2>
        {subtitle && (
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "min-w-[200px] text-base font-semibold"
            )}
          >
            {primaryCta}
          </a>
          <a
            href={secondaryHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-w-[200px] text-base"
            )}
          >
            {secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
