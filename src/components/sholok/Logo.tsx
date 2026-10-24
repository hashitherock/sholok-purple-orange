export function Logo({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <a href="/" aria-label="Sholok হোম" className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <rect width="40" height="40" rx="11" className={inverted ? "fill-primary-foreground" : "fill-primary"} />
        <path
          d="M26.5 13.5c-1.4-1.6-3.6-2.5-6.2-2.5-3.9 0-6.6 2.1-6.6 5.1 0 6.4 12.6 3.9 12.6 9.3 0 2.5-2.6 4.1-6.1 4.1-2.8 0-5-1-6.5-2.8"
          fill="none"
          strokeWidth="3.4"
          strokeLinecap="round"
          className={inverted ? "stroke-primary" : "stroke-primary-foreground"}
        />
        <circle cx="29.5" cy="28.5" r="2.6" className="fill-brand-orange" />
      </svg>
      <span
        className={`text-xl font-extrabold tracking-[0.18em] ${inverted ? "text-primary-foreground" : "text-primary-deep"}`}
      >
        SHOLO<span className="text-brand-orange">K</span>
      </span>
    </a>
  );
}
