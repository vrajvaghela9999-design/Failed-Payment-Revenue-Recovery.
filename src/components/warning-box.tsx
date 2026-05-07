import { AlertTriangle, ShieldAlert } from "lucide-react";

interface WarningBoxProps {
  title: string;
  items: string[];
  variant?: "warning" | "danger";
}

export function WarningBox({ title, items, variant = "warning" }: WarningBoxProps) {
  const borderColor =
    variant === "danger"
      ? "border-red-500/30 bg-red-500/[0.04]"
      : "border-amber-500/30 bg-amber-500/[0.04]";

  const iconColor = variant === "danger" ? "text-red-500" : "text-amber-500";
  const Icon = variant === "danger" ? ShieldAlert : AlertTriangle;

  return (
    <div
      className={`rounded-xl border-2 ${borderColor} p-6 sm:p-8`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
        <h3 className="text-base font-semibold">{title}</h3>
      </div>

      <ul className="mt-4 space-y-2.5 pl-8">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
          >
            <span className={`mt-1 shrink-0 text-xs ${iconColor}`} aria-hidden="true">
              ▸
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
