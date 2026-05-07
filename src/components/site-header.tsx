import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-colors hover:text-primary/80"
        >
          Failed Payment Recovery Audit
        </Link>

        <nav className="flex items-center gap-1">
          <a
            href="#pricing"
            className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
