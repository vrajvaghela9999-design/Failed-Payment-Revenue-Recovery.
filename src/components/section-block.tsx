import { Badge } from "@/components/ui/badge";

interface SectionBlockProps {
  id: string;
  number?: number;
  title: string;
  subtitle?: string;
  items: string[];
  variant?: "default" | "negative" | "highlight";
}

export function SectionBlock({
  id,
  number,
  title,
  subtitle,
  items,
  variant = "default",
}: SectionBlockProps) {
  const bgClass =
    variant === "negative"
      ? "bg-muted/30 border border-border/50"
      : variant === "highlight"
        ? "bg-primary/[0.03] border border-primary/10"
        : "";

  const iconClass =
    variant === "negative"
      ? "text-destructive/70"
      : variant === "highlight"
        ? "text-primary/70"
        : "text-muted-foreground/60";

  const bulletChar = variant === "negative" ? "✗" : variant === "highlight" ? "→" : "•";

  return (
    <section id={id} className={`rounded-xl p-6 sm:p-8 ${bgClass}`}>
      <div className="flex items-start gap-3">
        {number !== undefined && (
          <Badge
            variant="secondary"
            className="mt-0.5 shrink-0 font-mono text-xs tabular-nums"
          >
            {String(number).padStart(2, "0")}
          </Badge>
        )}
        <div className="flex-1">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed">
            <span className={`mt-0.5 shrink-0 text-sm ${iconClass}`} aria-hidden="true">
              {bulletChar}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
