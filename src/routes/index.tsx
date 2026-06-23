import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Printer, Scan, BookOpen, Layers, Maximize2, Stamp,
  Image as ImageIcon, Frame, Wallpaper, MonitorSmartphone,
  Flag, Lightbulb, Shield, Megaphone, Palette, MapPin, Phone, MessageCircle, Mail as MailIcon,
  ArrowUpRight, ArrowRight, CheckCircle2, Factory, Building2, Hospital, GraduationCap, ShoppingBag, Hammer, Zap, Clock, Award,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "True Copy Centre — B2B Print Production Partner, Nagpur" },
      { name: "description", content: "Enterprise large-format, industrial & interior printing across Central India. Wide-format CAD, signage systems, vinyl, UV foiling and bulk reprographics on UPS-backed lines." },
      { property: "og:title", content: "True Copy Centre — B2B Print Production, Nagpur" },
      { property: "og:description", content: "Wide-format CAD, signage, interior graphics, bulk reprographics — deadline-driven, UPS-backed." },
    ],
  }),
  component: Index,
});

/* ============================================================
   TOP UTILITY BAR
   ============================================================ */
function UtilityBar() {
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

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const links = [
    ["Capabilities", "#capabilities"],
    ["Industries", "#industries"],
    ["Process", "#process"],
    ["Specs", "#specs"],
    ["Contact", "#contact"],
  ];
  return (
    <nav className="sticky top-0 z-50 border-b bg-[color-mix(in_oklab,var(--ivory)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="hairline-strong grid h-10 w-10 place-items-center rounded-md bg-ink">
            <span className="font-display text-lg font-semibold text-ivory">T</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold">True Copy Centre</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Print production · est. Nagpur</div>
          </div>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([n, h]) => (
            <a key={n} href={h} className="group relative text-sm font-medium text-foreground/80 transition hover:text-foreground">
              {n}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brick transition-all group-hover:w-full" style={{ background: "var(--brick)" }} />
            </a>
          ))}
        </div>
        <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-ivory transition hover:bg-ink/90">
          Request a quote <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO — editorial split, mascot tucked in corner
   ============================================================ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yArt = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      {/* faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      {/* soft warm glow */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, var(--ochre), transparent 60%)" }} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:grid-cols-12">
        {/* LEFT: editorial copy */}
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="hairline inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brick)" }} />
            B2B Print Production · Central India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-tight"
          >
            The print partner that <em className="italic" style={{ color: "var(--brick)" }}>actually</em> ships on Monday.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Wide-format CAD, industrial signage, interior graphics and bulk reprographics for
            architects, manufacturers, hospitals and retail chains. Backed by enterprise-grade
            machines, a UPS-protected production floor, and people who answer the phone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-ivory transition hover:translate-y-[-2px]"
              style={{ background: "var(--brick)", boxShadow: "0 12px 28px -10px color-mix(in oklab, var(--brick) 60%, transparent)" }}>
              Request a quote
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="https://wa.me/917276141392" target="_blank" rel="noreferrer"
              className="hairline-strong inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium transition hover:bg-ink hover:text-ivory">
              <MessageCircle className="h-4 w-4" />
              WhatsApp your file
            </a>
          </motion.div>

          {/* trust numbers */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t pt-8">
            {[
              { k: "44″", v: "Max plot width" },
              { k: "24/7", v: "Production capacity" },
              { k: "1000+", v: "B2B accounts served" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-semibold tabular sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: mascot card + spec stack */}
        <motion.div style={{ y: yArt }} className="relative lg:col-span-5">
          {/* main showcase card */}
          <div className="hairline-strong shadow-edge relative overflow-hidden rounded-2xl bg-paper">
            <div className="flex items-center justify-between border-b px-5 py-3 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
              <span>Job · TCC-2026-184</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--sage)" }} />Running</span>
            </div>
            <div className="relative px-6 pb-6 pt-4" style={{ background: "linear-gradient(180deg, var(--paper), color-mix(in oklab, var(--ochre) 12%, var(--paper)))" }}>
              <PrinterDoodle />
              <div className="mt-2 flex items-end justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">Now printing</div>
                  <div className="mt-1 font-display text-xl font-semibold">Architectural set · A0 ×24</div>
                </div>
                <div className="font-mono text-xs text-muted-foreground">ETA 14 min</div>
              </div>
            </div>
          </div>

          {/* spec chip card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="hairline shadow-soft absolute -bottom-6 -left-6 hidden w-56 rounded-xl bg-paper p-4 sm:block"
          >
            <div className="font-marker text-xl" style={{ color: "var(--brick)" }}>spec sheet</div>
            <ul className="mt-2 space-y-1.5 font-mono text-[11px] text-foreground/80">
              <li>· 44″ wide / any length</li>
              <li>· Laser + plotter + UV</li>
              <li>· Tracing · vinyl · canvas</li>
              <li>· Same-day for bulk runs</li>
            </ul>
          </motion.div>

          {/* small floating badge */}
          <motion.div
            animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 -right-6 hidden h-24 w-24 md:block"
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path id="circ-h" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
              </defs>
              <circle cx="50" cy="50" r="48" fill="var(--ink)" />
              <text fill="var(--ivory)" fontSize="8.5" fontWeight="600" letterSpacing="2.5" fontFamily="JetBrains Mono">
                <textPath href="#circ-h">· UPS BACKED · DEADLINE DRIVEN · SINCE FOREVER </textPath>
              </text>
              <text x="50" y="55" textAnchor="middle" fontSize="14" fontFamily="Fraunces" fontWeight="600" fill="var(--ochre)">TCC</text>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* marquee strip */}
      <div className="border-y bg-ink text-ivory">
        <div className="flex overflow-hidden whitespace-nowrap py-3 text-xs font-mono uppercase tracking-[0.2em] opacity-90 animate-marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 gap-10 pr-10">
              {["Super Jumbo Xerox", "Wide-format CAD plotting", "Industrial signage systems", "Interior graphics & wallpapers", "UV & metallic foiling", "Vinyl print + cut", "Bulk reprographics", "Same-day turnaround"].map((t) => (
                <span key={t}>◆ {t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrinterDoodle() {
  return (
    <svg viewBox="0 0 600 360" className="mx-auto w-full max-w-md">
      {[0, 1, 2].map((i) => (
        <motion.rect key={i} x={220 + i * 12} y={20 + i * 8} width="160" height="90" rx="4"
          fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5"
          animate={{ y: [20 + i * 8, 6 + i * 8, 20 + i * 8], rotate: [i * -2, i * 2, i * -2] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      <rect x="120" y="140" width="360" height="160" rx="10" fill="var(--ink)" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="160" y="180" width="280" height="60" rx="4" fill="var(--ochre)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="230" cy="210" r="11" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="370" cy="210" r="11" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      <motion.circle cx="230" cy="210" r="4" fill="var(--ink)"
        animate={{ cx: [228, 234, 228], cy: [212, 208, 212] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.circle cx="370" cy="210" r="4" fill="var(--ink)"
        animate={{ cx: [368, 374, 368], cy: [212, 208, 212] }} transition={{ duration: 4, repeat: Infinity }} />
      <path d="M 270 250 Q 300 265 330 250" stroke="var(--paper)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="160" y="300" width="16" height="32" fill="var(--ink)" />
      <rect x="424" y="300" width="16" height="32" fill="var(--ink)" />
      <circle cx="450" cy="170" r="5" fill="var(--sage)" stroke="var(--ivory)" strokeWidth="1.5" />
      <circle cx="450" cy="190" r="5" fill="var(--brick)" stroke="var(--ivory)" strokeWidth="1.5" />
    </svg>
  );
}

/* ============================================================
   LOGO STRIP
   ============================================================ */
function ClientStrip() {
  const labels = ["Architects", "Manufacturing", "Hospitals", "Retail Chains", "Real Estate", "Educational Institutions", "Government", "Event Agencies"];
  return (
    <section className="border-b py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Trusted by teams across</div>
        <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-4">
          {labels.map((l) => (
            <span key={l} className="font-display text-xl font-medium text-foreground/60 sm:text-2xl">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPABILITIES (was services) — editorial cards
   ============================================================ */
const CAPABILITIES = [
  { icon: Printer, title: "Super Jumbo Xerox", desc: "Laser-grade B/W output on paper, tracing, cloth and engineering matte film up to A0+.", tag: "Reprographics" },
  { icon: Palette, title: "Multi-Color Wide Format", desc: "A4 to A0+ colour. Up to 44″ wide × any length. CAD drawings, project reports, posters.", tag: "Color" },
  { icon: BookOpen, title: "Binding & Finishing", desc: "Spiral, wiro, soft & hard binding. Thesis-grade finish for technical and legal sets.", tag: "Finishing" },
  { icon: Scan, title: "Scanning & Plotting", desc: "Colour & B/W high-resolution scanning. 44″ plotting on varied media.", tag: "Digitization" },
  { icon: Layers, title: "Lamination Systems", desc: "Hot, cold, matte, gloss, sparkle and 3D. Plus delamination of documents and maps.", tag: "Protection" },
  { icon: Maximize2, title: "Scaling & Reproduction", desc: "Precision enlargement A4 → A0 and faithful reduction A0 → A4 across formats.", tag: "Scaling" },
];

function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="01 / Capabilities" title="Production-grade output, daily." sub="Six core lines that keep architecture studios, contractors and corporate offices unblocked." />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3" style={{ border: "1px solid var(--color-border)" }}>
          {CAPABILITIES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative bg-paper p-7 transition hover:bg-[color-mix(in_oklab,var(--ochre)_10%,var(--paper))]"
            >
              <div className="flex items-start justify-between">
                <div className="hairline grid h-11 w-11 place-items-center rounded-lg" style={{ background: "color-mix(in oklab, var(--ochre) 18%, var(--paper))" }}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{s.tag}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-medium opacity-0 transition group-hover:opacity-100" style={{ color: "var(--brick)" }}>
                Discuss this line <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPABILITY MATRIX (was wheel) — editorial reframe
   ============================================================ */
const MATRIX = [
  { label: "Custom Wallpaper", color: "var(--brick)" },
  { label: "Envelopes", color: "var(--ochre)" },
  { label: "Canvas", color: "var(--brick)" },
  { label: "Banners", color: "var(--teal)" },
  { label: "Satin Flags", color: "var(--sage)" },
  { label: "UV & Foiling", color: "var(--ink)" },
  { label: "Die-Cut Stickers", color: "var(--ink)" },
  { label: "Fine-Art Prints", color: "var(--brick)" },
  { label: "Foamsheet", color: "var(--sage)" },
  { label: "Vinyl", color: "var(--brick)" },
  { label: "Signage Systems", color: "var(--ochre)" },
  { label: "Standees", color: "var(--sage)" },
  { label: "Reflective Vinyl", color: "var(--ink-soft)" },
  { label: "Posters", color: "var(--ink)" },
  { label: "Flags", color: "var(--ink)" },
];

function Matrix() {
  return (
    <section className="relative overflow-hidden border-y bg-ink py-24 text-ivory sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="font-marker text-2xl" style={{ color: "var(--ochre)" }}>(yes, all of it)</div>
          <h2 className="mt-2 font-display text-5xl font-medium leading-[0.95] sm:text-6xl">
            One vendor.<br />
            <span className="italic" style={{ color: "var(--ochre)" }}>Fifteen</span> output formats.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ivory/70">
            Most clients consolidate three to five existing print suppliers into us. Single point of
            contact, one PO, one invoice — across reprographics, large format, signage, and interiors.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ochre px-5 py-3 text-sm font-medium text-ink transition hover:bg-ivory" style={{ background: "var(--ochre)" }}>
            Consolidate your print stack <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {MATRIX.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ y: -3 }}
                className="group flex items-center justify-between rounded-md border border-ivory/15 bg-ivory/5 px-4 py-3 backdrop-blur transition hover:border-ivory/40 hover:bg-ivory/10"
              >
                <span className="text-sm font-medium">{m.label}</span>
                <span className="h-2 w-2 rounded-full transition group-hover:scale-150" style={{ background: m.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INDUSTRIES SERVED
   ============================================================ */
const INDUSTRIES = [
  { icon: Building2, name: "Architecture & AEC", desc: "Plotted GFC sets, tender drawings, presentation boards." },
  { icon: Factory, name: "Manufacturing", desc: "Safety signage, floor markings, MSDS posters, P&IDs." },
  { icon: Hospital, name: "Hospitals", desc: "Wayfinding systems, patient education prints, ID consumables." },
  { icon: GraduationCap, name: "Education", desc: "Thesis production, lab posters, campus signage." },
  { icon: ShoppingBag, name: "Retail & F&B", desc: "Storefront vinyls, menu boards, seasonal POS rollouts." },
  { icon: Hammer, name: "Real Estate & Interiors", desc: "Site hoardings, sample-flat graphics, wallpapers, canvas." },
];

function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="02 / Industries" title="Built for procurement teams." sub="Repeatable specifications, predictable lead times, and a paper trail that survives an audit." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="hairline group rounded-xl bg-paper p-6 transition hover:shadow-edge"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-md" style={{ background: "color-mix(in oklab, var(--teal) 15%, var(--paper))" }}>
                  <it.icon className="h-4.5 w-4.5" />
                </div>
                <div className="font-display text-xl font-medium">{it.name}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BIG STUFF — industrial + interior
   ============================================================ */
const INDUSTRIAL = [
  { icon: Shield, title: "Safety Signage" },
  { icon: Layers, title: "Vinyl + Foamsheet" },
  { icon: Megaphone, title: "Rollup Standees" },
  { icon: Flag, title: "Flex / Cloth / Banners" },
  { icon: Sparkle, title: "Retro-Reflective Vinyl" },
  { icon: Lightbulb, title: "Glow-In-The-Dark" },
  { icon: Stamp, title: "Print + Cut Stickers" },
];
const INTERIOR = [
  { icon: ImageIcon, title: "Canvas Prints" },
  { icon: Wallpaper, title: "Custom Wallpapers" },
  { icon: MonitorSmartphone, title: "Window / Frosted Films" },
  { icon: Layers, title: "Vinyl / Rexine" },
  { icon: Frame, title: "Poster Printing" },
  { icon: ImageIcon, title: "One-Way Vision" },
  { icon: Palette, title: "Monochrome Paintings" },
];

function Sparkle(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" /></svg>;
}

function BigStuff() {
  return (
    <section className="border-y bg-[color-mix(in_oklab,var(--ochre)_8%,var(--ivory))] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="03 / Large format" title="Goes big. Goes outside." sub="From the factory wall to the highway hoarding." />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Industrial applications</div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {INDUSTRIAL.map((s, i) => <Chip key={s.title} {...s} i={i} variant="ink" />)}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Interior applications</div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {INTERIOR.map((s, i) => <Chip key={s.title} {...s} i={i} variant="paper" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ icon: Icon, title, i, variant }: { icon: React.ComponentType<{ className?: string }>; title: string; i: number; variant: "ink" | "paper" }) {
  const dark = variant === "ink";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: i * 0.04 }}
      whileHover={{ y: -2 }}
      className={`hairline-strong inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${dark ? "bg-ink text-ivory hover:bg-ink/90" : "bg-paper hover:bg-ink hover:text-ivory"}`}
      style={dark ? { background: "var(--ink)", color: "var(--ivory)" } : {}}
    >
      <Icon className="h-4 w-4" />
      {title}
    </motion.div>
  );
}

/* ============================================================
   PROCESS
   ============================================================ */
function Process() {
  const steps = [
    { n: "01", t: "Brief", d: "Send a file, drawing pack or scope. We confirm material, finish and lead time the same day." },
    { n: "02", t: "Proof", d: "Hard proof or PDF preview on request. Spec sheet locked before the line runs." },
    { n: "03", t: "Produce", d: "Output on the right machine — laser, plotter, UV, or wide-format — under UPS-backed power." },
    { n: "04", t: "Deliver", d: "Pickup, courier or site delivery anywhere in Nagpur. Invoiced with GST." },
  ];
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="04 / Process" title="Brief on Monday. On-site Wednesday." sub="No mystery. No middlemen. Just a tight production workflow." />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-paper p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Step {s.n}</span>
                {i < 3 && <ArrowRight className="hidden h-4 w-4 text-muted-foreground md:block" />}
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SPECS / WHY US
   ============================================================ */
function Specs() {
  const items = [
    { icon: Zap, t: "UPS-backed floor", d: "Power cuts do not enter our SLA. Lines stay live, deadlines stay intact." },
    { icon: Clock, t: "Same-day capacity", d: "Walk-in bulk runs cleared the same day for repeat accounts." },
    { icon: Award, t: "Material specialists", d: "Tracing, garware film, vinyl, canvas, foamsheet, acrylic — paired to the right press." },
    { icon: CheckCircle2, t: "GST-compliant billing", d: "Clean invoices, PO support, monthly statements for procurement." },
  ];
  return (
    <section id="specs" className="border-t bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="05 / Why us" title="The boring things, done right." sub="The reasons procurement teams keep our number on speed-dial." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div key={it.t}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-paper p-7"
            >
              <it.icon className="h-6 w-6" style={{ color: "var(--brick)" }} />
              <div className="mt-5 font-display text-xl font-medium">{it.t}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 -bottom-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle, var(--ochre), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-ivory/60">06 / Contact</div>
            <h2 className="mt-3 font-display text-5xl font-medium leading-[0.95] sm:text-6xl">
              Start a job, <em className="italic" style={{ color: "var(--ochre)" }}>open an account</em>, or send a tender file.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-ivory/70">
              Reach the production floor directly. We respond within working hours, quote within
              one business day, and onboard new B2B accounts in under a week.
            </p>

            <div className="mt-10 space-y-3">
              <ContactRow icon={Phone} label="+91 98222 24644" href="tel:+919822224644" sub="Production manager · direct" />
              <ContactRow icon={Phone} label="+91 73878 89990" href="tel:+917387889990" sub="Accounts & quotations" />
              <ContactRow icon={MessageCircle} label="WhatsApp · 72761 41392" href="https://wa.me/917276141392" sub="Send files, get acknowledgement" />
              <ContactRow icon={MailIcon} label="truecopycentre@gmail.com" href="mailto:truecopycentre@gmail.com" sub="Tenders, RFQs, RFPs" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="hairline-strong overflow-hidden rounded-2xl bg-paper text-foreground shadow-edge">
              <div className="flex items-center justify-between border-b px-6 py-3 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                <span>Visit · Production facility</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Dhantoli, Nagpur</span>
              </div>
              <div className="px-6 pb-6 pt-2">
                <MapDoodle />
                <div className="mt-4 grid gap-1">
                  <div className="font-display text-2xl font-medium">True Copy Centre Pvt. Ltd.</div>
                  <div className="text-sm text-muted-foreground">58, Yeshwant Stadium, Dhantoli, Nagpur — 440 012</div>
                </div>
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  <div className="hairline rounded-lg p-3">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Landmark</div>
                    <div className="mt-0.5 text-sm font-medium">Next to Yeshwant Stadium gate</div>
                  </div>
                  <div className="hairline rounded-lg p-3">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Hours</div>
                    <div className="mt-0.5 text-sm font-medium">Mon–Sat · 9:30 to 21:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, href, sub }: { icon: typeof Phone; label: string; href: string; sub: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-xl border border-ivory/15 bg-ivory/5 px-5 py-4 transition hover:border-ivory/40 hover:bg-ivory/10"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-ivory/10">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <div className="font-medium">{label}</div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-ivory/60">{sub}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}

function MapDoodle() {
  return (
    <svg viewBox="0 0 600 360" className="w-full">
      <rect x="0" y="0" width="600" height="360" rx="8" fill="color-mix(in oklab, var(--ochre) 8%, var(--paper))" />
      <path d="M 30 70 L 570 70" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />
      <path d="M 30 300 L 570 300" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />
      <path d="M 460 20 L 460 340" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />
      <path d="M 60 20 L 60 340" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />

      <ellipse cx="260" cy="190" rx="140" ry="85" fill="color-mix(in oklab, var(--sage) 30%, var(--paper))" stroke="var(--ink)" strokeWidth="1.5" />
      <text x="260" y="195" textAnchor="middle" fontFamily="Fraunces" fontSize="16" fontWeight="500" fill="var(--ink)">Yeshwant Stadium</text>

      <g fontSize="9" fontWeight="500" fill="var(--ink-soft)" fontFamily="JetBrains Mono">
        <rect x="80" y="30" width="110" height="30" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
        <text x="135" y="49" textAnchor="middle">Haldiram's</text>
        <rect x="210" y="30" width="120" height="30" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
        <text x="270" y="49" textAnchor="middle">Bank of Baroda</text>
        <rect x="350" y="30" width="90" height="30" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
        <text x="395" y="49" textAnchor="middle">Goel Ganga</text>
        <rect x="475" y="90" width="100" height="60" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
        <text x="525" y="125" textAnchor="middle">Metro Stn.</text>
        <rect x="475" y="170" width="100" height="100" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
        <text x="525" y="225" textAnchor="middle">Metro Grd.</text>
      </g>

      <motion.path
        d="M 525 230 Q 460 250 380 230 Q 320 215 290 180"
        fill="none" stroke="var(--brick)" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}
      />
      <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <circle cx="290" cy="175" r="14" fill="var(--brick)" stroke="var(--ink)" strokeWidth="2" />
        <text x="290" y="180" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--ivory)" fontFamily="JetBrains Mono">TCC</text>
      </motion.g>
    </svg>
  );
}

/* ============================================================
   SECTION HEADER
   ============================================================ */
function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="mt-5 text-lg leading-relaxed text-muted-foreground"
      >
        {sub}
      </motion.p>
    </div>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="border-t bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="hairline-strong grid h-10 w-10 place-items-center rounded-md bg-ink">
                <span className="font-display text-lg font-semibold text-ivory">T</span>
              </div>
              <div className="font-display text-xl font-semibold">True Copy Centre Pvt. Ltd.</div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Central India's B2B print production partner. Wide-format, signage, interiors, and reprographics — under one roof in Dhantoli, Nagpur.
            </p>
            <div className="mt-5 font-marker text-xl" style={{ color: "var(--brick)" }}>print anything, on deadline ✦</div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <FooterCol title="Capabilities" links={["Wide-format CAD", "Signage systems", "Interior graphics", "Reprographics", "UV & foiling"]} />
            <FooterCol title="Company" links={["Industries", "Process", "Specs", "Contact"]} />
            <FooterCol title="Reach us" links={["+91 98222 24644", "WhatsApp: 72761 41392", "truecopycentre@gmail.com", "Dhantoli, Nagpur 440012"]} />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} True Copy Centre Pvt. Ltd. · GSTIN on request.</div>
          <div className="font-mono uppercase tracking-[0.18em]">Made with ink, toner & love.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-foreground/80 transition hover:text-foreground">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
function Index() {
  return (
    <main className="overflow-x-clip">
      <UtilityBar />
      <Nav />
      <Hero />
      <ClientStrip />
      <Capabilities />
      <Matrix />
      <Industries />
      <BigStuff />
      <Process />
      <Specs />
      <Contact />
      <Footer />
    </main>
  );
}
