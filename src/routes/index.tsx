import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Printer, Scan, BookOpen, Layers, Maximize2,
  MapPin, Phone, MessageCircle, Mail as MailIcon,
  ArrowUpRight, ArrowRight, CheckCircle2, Factory, Building2, Hospital, GraduationCap, ShoppingBag, Hammer, Zap, Clock, Award, Palette,
} from "lucide-react";
import { Nav, UtilityBar } from "@/components/site-nav";

import svcWide from "@/assets/svc-wideformat.jpg";
import svcColor from "@/assets/svc-color.jpg";
import svcBinding from "@/assets/svc-binding.jpg";
import svcScan from "@/assets/svc-scan.jpg";
import svcLam from "@/assets/svc-lamination.jpg";
import svcScaling from "@/assets/svc-scaling.jpg";
import indProc from "@/assets/ind-procurement.jpg";
import bigHoard from "@/assets/big-hoarding.jpg";
import bigWall from "@/assets/big-wallpaper.jpg";
import aboutCraft from "@/assets/about-craft.jpg";

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
   HERO
   ============================================================ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yArt = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, var(--ochre), transparent 60%)" }} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:grid-cols-12">
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
              Contact us
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="https://wa.me/917276141392" target="_blank" rel="noreferrer"
              className="hairline-strong inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium transition hover:bg-ink hover:text-ivory">
              <MessageCircle className="h-4 w-4" />
              WhatsApp your file
            </a>
          </motion.div>

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

        <motion.div style={{ y: yArt }} className="relative lg:col-span-5">
          <div className="hairline-strong shadow-edge relative overflow-hidden rounded-2xl bg-paper">
            <div className="flex items-center justify-between border-b px-5 py-3 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
              <span>Job · TCC-2026-184</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--sage)" }} />Running</span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={svcWide} alt="Wide-format architectural print rolling off the plotter" loading="eager" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-5 text-ivory">
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] opacity-70">Now printing</div>
                <div className="mt-1 font-display text-xl font-semibold">Architectural set · A0 ×24</div>
                <div className="mt-1 font-mono text-xs opacity-70">ETA 14 min</div>
              </div>
            </div>
          </div>

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

/* ============================================================
   CLIENT STRIP
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
   SERVICES (was Capabilities) — image-forward editorial cards
   ============================================================ */
const SERVICES = [
  { img: svcWide, icon: Printer, title: "Super Jumbo Xerox", desc: "Laser-grade B/W output on paper, tracing, cloth and engineering matte film up to A0+.", tag: "Reprographics" },
  { img: svcColor, icon: Palette, title: "Multi-Color Wide Format", desc: "A4 to A0+ colour. Up to 44″ wide × any length. CAD drawings, project reports, posters.", tag: "Color" },
  { img: svcBinding, icon: BookOpen, title: "Binding & Finishing", desc: "Spiral, wiro, soft & hard binding. Thesis-grade finish for technical and legal sets.", tag: "Finishing" },
  { img: svcScan, icon: Scan, title: "Scanning & Plotting", desc: "Colour & B/W high-resolution scanning. 44″ plotting on varied media.", tag: "Digitization" },
  { img: svcLam, icon: Layers, title: "Lamination Systems", desc: "Hot, cold, matte, gloss, sparkle and 3D. Plus delamination of documents and maps.", tag: "Protection" },
  { img: svcScaling, icon: Maximize2, title: "Scaling & Reproduction", desc: "Precision enlargement A4 → A0 and faithful reduction A0 → A4 across formats.", tag: "Scaling" },
];

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="01 / Services" title="Production-grade output, daily." sub="Six core lines that keep architecture studios, contractors and corporate offices unblocked." />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="hairline-strong group overflow-hidden rounded-2xl bg-paper shadow-soft transition hover:shadow-edge"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-3 top-3 rounded-md bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ivory">{s.tag}</div>
                <div className="absolute right-3 bottom-3 grid h-10 w-10 place-items-center rounded-full bg-paper/95 backdrop-blur">
                  <s.icon className="h-4.5 w-4.5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium opacity-0 transition group-hover:opacity-100" style={{ color: "var(--brick)" }}>
                  Discuss this line <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPABILITY WHEEL — circular representation of every work
   ============================================================ */
const MATRIX = [
  "Custom Wallpaper", "Envelopes", "Canvas", "Banners", "Satin Flags",
  "UV & Foiling", "Die-Cut Stickers", "Fine-Art Prints", "Foamsheet",
  "Vinyl", "Signage Systems", "Standees", "Reflective Vinyl", "Posters",
  "Flags", "Frosted Films", "Rollup", "One-Way Vision",
];

function Wheel() {
  const R = 220;
  return (
    <section className="relative overflow-hidden border-y bg-ink py-24 text-ivory sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="font-marker text-2xl" style={{ color: "var(--ochre)" }}>(yes, all of it)</div>
          <h2 className="mt-2 font-display text-5xl font-medium leading-[0.95] sm:text-6xl">
            One vendor.<br />
            <span className="italic" style={{ color: "var(--ochre)" }}>Eighteen</span> output formats.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ivory/70">
            Most clients consolidate three to five print suppliers into us. Single point of
            contact, one PO, one invoice — across reprographics, large format, signage, and interiors.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink transition hover:opacity-90" style={{ background: "var(--ochre)" }}>
            Consolidate your print stack <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* rotating rings */}
            <motion.div
              animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="-260 -260 520 520" className="h-full w-full">
                <circle cx="0" cy="0" r={R} fill="none" stroke="var(--ivory)" strokeOpacity="0.15" strokeDasharray="2 6" />
                <circle cx="0" cy="0" r={R - 50} fill="none" stroke="var(--ivory)" strokeOpacity="0.1" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {MATRIX.map((label, i) => {
                const angle = (i / MATRIX.length) * 2 * Math.PI - Math.PI / 2;
                const x = Math.cos(angle) * R;
                const y = Math.sin(angle) * R;
                return (
                  <motion.div
                    key={label}
                    animate={{ rotate: -360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  >
                    <div className="hairline-strong whitespace-nowrap rounded-full bg-ivory/5 px-3 py-1.5 text-[11px] font-medium backdrop-blur transition hover:bg-ochre hover:text-ink" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                      {label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="hairline-strong grid h-40 w-40 place-items-center rounded-full bg-ivory/5 text-center backdrop-blur" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                <div>
                  <div className="font-marker text-lg" style={{ color: "var(--ochre)" }}>we print</div>
                  <div className="font-display text-3xl font-semibold leading-tight">Every-<br />thing</div>
                </div>
              </div>
            </div>

            {/* pulses */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ochre/40"
                animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INDUSTRIES — with visual
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

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="hairline-strong shadow-edge sticky top-24 overflow-hidden rounded-2xl">
              <img src={indProc} alt="Procurement team reviewing printed drawings" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {INDUSTRIES.map((it, i) => (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                  className="hairline group rounded-xl bg-paper p-5 transition hover:shadow-edge"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-md" style={{ background: "color-mix(in oklab, var(--teal) 15%, var(--paper))" }}>
                      <it.icon className="h-4 w-4" />
                    </div>
                    <div className="font-display text-lg font-medium">{it.name}</div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LARGE FORMAT — Goes big. Goes outside.
   ============================================================ */
function LargeFormat() {
  return (
    <section id="large-format" className="border-y bg-[color-mix(in_oklab,var(--ochre)_8%,var(--ivory))] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="03 / Large format" title="Goes big. Goes outside." sub="From the factory wall to the highway hoarding — and from the boardroom feature-wall to the boutique cafe." />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <motion.figure
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="hairline-strong shadow-soft group overflow-hidden rounded-2xl bg-paper lg:col-span-7"
          >
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[16/10]">
              <img src={bigHoard} alt="Large printed hoarding installed on a building" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute left-4 top-4 rounded-md bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ivory">Industrial</div>
            </div>
            <figcaption className="p-6">
              <div className="font-display text-2xl font-medium">Building hoardings, safety signage, banners</div>
              <p className="mt-2 text-sm text-muted-foreground">Flex, star-flex, vinyl on foamsheet, retro-reflective and glow-in-the-dark systems. Installed or supplied ready-to-hang.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Safety signage", "Flex banners", "Reflective vinyl", "Rollup standees", "Glow-in-dark"].map((t) => (
                  <span key={t} className="hairline rounded-full bg-paper px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="hairline-strong shadow-soft group overflow-hidden rounded-2xl bg-paper lg:col-span-5"
          >
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
              <img src={bigWall} alt="Custom printed wallpaper in an interior" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute left-4 top-4 rounded-md bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ivory">Interior</div>
            </div>
            <figcaption className="p-6">
              <div className="font-display text-2xl font-medium">Wallpapers, canvas, frosted films</div>
              <p className="mt-2 text-sm text-muted-foreground">Custom wallpapers, gallery canvas, frosted & one-way vision films — for cafes, boutiques, sample-flats and boardrooms.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Wallpaper", "Canvas", "Frosted film", "One-way vision", "Poster"].map((t) => (
                  <span key={t} className="hairline rounded-full bg-paper px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT US (was Specs / Why us) — visualized
   ============================================================ */
function About() {
  const items = [
    { icon: Zap, t: "UPS-backed floor", d: "Power cuts do not enter our SLA. Lines stay live, deadlines stay intact." },
    { icon: Clock, t: "Same-day capacity", d: "Walk-in bulk runs cleared the same day for repeat accounts." },
    { icon: Award, t: "Material specialists", d: "Tracing, garware film, vinyl, canvas, foamsheet, acrylic — paired to the right press." },
    { icon: CheckCircle2, t: "GST-compliant billing", d: "Clean invoices, PO support, monthly statements for procurement." },
  ];
  return (
    <section id="about" className="border-t bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">04 / About us</div>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
              Two decades on the floor. <em className="italic" style={{ color: "var(--brick)" }}>One promise:</em> we deliver.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              True Copy Centre started as a neighbourhood print shop in Dhantoli and grew into
              Central India's B2B production partner. What hasn't changed: the person picking
              up the phone is the same person on the floor when your job runs.
            </p>

            <div className="mt-8 hairline-strong overflow-hidden rounded-2xl">
              <img src={aboutCraft} alt="Craftsman inspecting a fresh print" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it, i) => (
                <motion.div key={it.t}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="hairline-strong group relative overflow-hidden rounded-2xl bg-paper p-6 shadow-soft transition hover:shadow-edge"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "color-mix(in oklab, var(--brick) 12%, var(--paper))" }}>
                    <it.icon className="h-5 w-5" style={{ color: "var(--brick)" }} />
                  </div>
                  <div className="mt-5 font-display text-xl font-medium">{it.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</div>
                  <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 transition group-hover:opacity-100" style={{ background: "radial-gradient(circle, var(--ochre), transparent 70%)" }} />
                </motion.div>
              ))}
            </div>

            {/* mini stats strip */}
            <div className="mt-6 hairline-strong grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl bg-ink text-ivory">
              {[
                { k: "20+", v: "Years on the floor" },
                { k: "1000+", v: "B2B accounts" },
                { k: "18", v: "Output formats" },
              ].map((s) => (
                <div key={s.v} className="p-6">
                  <div className="font-display text-3xl font-semibold tabular">{s.k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider opacity-70">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
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
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-ivory/60">05 / Contact</div>
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
            <FooterCol title="Services" links={["Wide-format CAD", "Signage systems", "Interior graphics", "Reprographics", "UV & foiling"]} />
            <FooterCol title="Company" links={["Industries", "Large Format", "About Us", "Student Work", "Contact"]} />
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
      <Services />
      <Wheel />
      <Industries />
      <LargeFormat />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
