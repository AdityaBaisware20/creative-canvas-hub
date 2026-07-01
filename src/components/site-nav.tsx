import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function UtilityBar() {
  return (
    <div className="hairline-strong border-x-0 border-t-0 bg-ink text-ivory">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6">
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--sage)] opacity-75" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--sage)]" />
            </span>
            <span className="font-medium tracking-wide opacity-80">Production line live · UPS-backed</span>
          </span>
          <span className="font-mono opacity-60">Est. since you needed prints · Nagpur</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+919822224644" className="hidden font-mono opacity-80 hover:opacity-100 sm:inline">+91 98222 24644</a>
          <a href="mailto:truecopycentre@gmail.com" className="font-mono opacity-80 hover:opacity-100">B2B enquiries →</a>
        </div>
      </div>
    </div>
  );
}

const LINKS: Array<{ label: string; to: string; hash?: string }> = [
  { label: "Services", to: "/", hash: "services" },
  { label: "Industries", to: "/", hash: "industries" },
  { label: "Large Format", to: "/", hash: "large-format" },
  { label: "About Us", to: "/", hash: "about" },
  { label: "Student Work", to: "/student" },
  { label: "Contact", to: "/", hash: "contact" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-[color-mix(in_oklab,var(--ivory)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="hairline-strong grid h-10 w-10 place-items-center rounded-md bg-ink">
            <span className="font-display text-lg font-semibold text-ivory">T</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold">True Copy Centre</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Print production · est. Nagpur</div>
          </div>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="group relative text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brick transition-all group-hover:w-full" style={{ background: "var(--brick)" }} />
            </Link>
          ))}
        </div>
        <Link to="/" hash="contact" className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-ivory transition hover:bg-ink/90">
          Contact us <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </nav>
  );
}
