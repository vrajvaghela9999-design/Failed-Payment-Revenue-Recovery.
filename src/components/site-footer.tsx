export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-xs text-muted-foreground">
          This audit does not guarantee recovered revenue. It identifies
          possible failed-payment leakage and suggests recovery workflows.
          This product does not process payments, collect card data, or
          replace your billing provider.
        </p>
      </div>
    </footer>
  );
}
