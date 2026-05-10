import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref: string;
  secondaryHref: string;
  accentColor?: "blue" | "violet";
}

export function HeroSection({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryHref,
  accentColor = "blue",
}: HeroSectionProps) {
  const gradientClass =
    accentColor === "violet"
      ? "from-violet-600/20 via-purple-600/10 to-transparent"
      : "from-blue-600/20 via-cyan-600/10 to-transparent";

  const accentBorderClass =
    accentColor === "violet"
      ? "from-violet-500 to-purple-500"
      : "from-blue-500 to-cyan-500";

  return (
    <section className="relative overflow-hidden border-b border-border/40">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28 lg:py-36">
        {/* Accent line */}
        <div
          className={`mx-auto mb-8 h-1 w-16 rounded-full bg-gradient-to-r ${accentBorderClass}`}
        />

        <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">
          {headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
