import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Printer, Scan, BookOpen, Layers, Maximize2,
  MapPin, Phone, MessageCircle, Mail as MailIcon, Instagram, Facebook, Sparkles,
  ArrowUpRight, ArrowRight, CheckCircle2, Factory, Building2, Hospital, GraduationCap, ShoppingBag, Hammer, Zap, Clock, Award, Palette,
  Ruler, Map as MapIcon, AlertTriangle, Compass, Tag, HardHat,
} from "lucide-react";
import { Nav, UtilityBar } from "@/components/site-nav";

import svcWide from "@/assets/svc-wideformat.jpg";
import svcColor from "@/assets/svc-color.jpg";
import svcBinding from "@/assets/svc-binding.jpg";
import svcScan from "@/assets/svc-scan.jpg";
import svcLam from "@/assets/svc-lamination.jpg";
import svcScaling from "@/assets/svc-scaling.jpg";
import bigHoard from "@/assets/big-hoarding.jpg";
import bigWall from "@/assets/big-wallpaper.jpg";
import aboutCraft from "@/assets/about-craft.jpg";
import aboutFloor from "@/assets/about-floor.jpg";
import aboutHands from "@/assets/about-hands.jpg";
import heroMain from "@/assets/hero-main.jpg";
import indArch from "@/assets/ind-architecture.jpg";
import indMfg from "@/assets/ind-manufacturing.jpg";
import indHosp from "@/assets/ind-hospital.jpg";
import indEdu from "@/assets/ind-education.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indRealEstate from "@/assets/ind-realestate.jpg";
import bigStandee from "@/assets/big-standee.jpg";
import bigVinyl from "@/assets/big-vinyl.jpg";
import bigCanvas from "@/assets/big-canvas.jpg";
import bigSignage from "@/assets/big-signage.jpg";
import bigWrap from "@/assets/big-wrap.jpg";

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
   HERO — reimagined editorial
   ============================================================ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yArt = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yBadge = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, var(--ochre), transparent 60%)" }} />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, var(--brick), transparent 60%)" }} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-12 pb-24 sm:px-6 sm:pt-20 sm:pb-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="hairline inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-xs font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full opacity-75" style={{ background: "var(--brick)" }} />
              <span className="relative h-1.5 w-1.5 rounded-full" style={{ background: "var(--brick)" }} />
            </span>
            B2B Print Production · Central India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-[clamp(2.6rem,7.5vw,6rem)] font-medium leading-[0.95] tracking-tight"
          >
            The print partner that <em className="italic" style={{ color: "var(--brick)" }}>actually</em>
            <br />
            <span className="relative inline-block">
              ships on Monday.
              <motion.svg
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.9 }}
                viewBox="0 0 400 20" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none"
              >
                <motion.path d="M 5 12 Q 100 4 200 10 T 395 8" fill="none" stroke="var(--ochre)" strokeWidth="4" strokeLinecap="round" />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
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

        {/* HERO ART — collage */}
        <motion.div style={{ y: yArt }} className="relative lg:col-span-5">
          <div className="relative">
            {/* main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="hairline-strong shadow-edge relative overflow-hidden rounded-2xl bg-paper"
            >
              <div className="flex items-center justify-between border-b px-5 py-3 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                <span>Job · TCC-2026-184</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--sage)" }} />Running</span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={heroMain} alt="True Copy Centre production floor with wide-format prints" loading="eager" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 text-ivory">
                  <div className="text-[10px] font-mono uppercase tracking-[0.15em] opacity-70">Now printing</div>
                  <div className="mt-1 font-display text-xl font-semibold">Architectural set · A0 ×24</div>
                  <div className="mt-1 font-mono text-xs opacity-70">ETA 14 min</div>
                </div>
              </div>
            </motion.div>

            {/* floating secondary card */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 6 }} animate={{ opacity: 1, x: 0, rotate: 6 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="hairline-strong absolute -bottom-8 -left-6 hidden w-44 overflow-hidden rounded-xl bg-paper shadow-edge sm:block"
            >
              <img src={svcWide} alt="Wide-format print" className="h-24 w-full object-cover" />
              <div className="p-3">
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Plot · A0</div>
                <div className="mt-0.5 font-display text-sm font-medium">GFC drawings</div>
              </div>
            </motion.div>

            {/* spinning badge */}
            <motion.div
              style={{ y: yBadge }}
              className="absolute -top-6 -right-6 hidden h-28 w-28 md:block"
            >
              <motion.svg
                animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 100 100" className="h-full w-full"
              >
                <defs>
                  <path id="circ-h" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <circle cx="50" cy="50" r="48" fill="var(--ink)" />
                <text fill="var(--ivory)" fontSize="8.5" fontWeight="600" letterSpacing="2.5" fontFamily="JetBrains Mono">
                  <textPath href="#circ-h">· UPS BACKED · DEADLINE DRIVEN · SINCE FOREVER </textPath>
                </text>
              </motion.svg>
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <span className="font-display text-lg font-semibold" style={{ color: "var(--ochre)" }}>TCC</span>
              </div>
            </motion.div>
          </div>
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
   ABOUT US — moved directly below hero, structured, visualized
   ============================================================ */
function About() {
  const items = [
    { icon: Zap, t: "UPS-backed floor", d: "Power cuts do not enter our SLA. Lines stay live, deadlines stay intact." },
    { icon: Clock, t: "Same-day capacity", d: "Walk-in bulk runs cleared the same day for repeat accounts." },
    { icon: Award, t: "Material specialists", d: "Tracing, garware film, vinyl, canvas, foamsheet, acrylic — paired to the right press." },
    { icon: CheckCircle2, t: "GST-compliant billing", d: "Clean invoices, PO support, monthly statements for procurement." },
  ];
  return (
    <section id="about" className="relative border-b bg-paper py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">01 / About us</div>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
              Two decades on the floor. <em className="italic" style={{ color: "var(--brick)" }}>One promise:</em> we deliver.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              True Copy Centre started as a neighbourhood print shop in Dhantoli and grew into
              Central India's B2B production partner. What hasn't changed: the person picking
              up the phone is the same person on the floor when your job runs.
            </p>

            {/* structured photo collage */}
            <div className="mt-10 grid grid-cols-6 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="hairline-strong col-span-4 overflow-hidden rounded-xl shadow-soft"
              >
                <img src={aboutFloor} alt="Production floor" loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="hairline-strong col-span-2 overflow-hidden rounded-xl shadow-soft"
              >
                <img src={aboutHands} alt="Craftsman hands binding" loading="lazy" className="h-full w-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="hairline-strong col-span-3 overflow-hidden rounded-xl shadow-soft"
              >
                <img src={aboutCraft} alt="Inspecting fresh print" loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
              </motion.div>
              <div className="col-span-3 grid place-items-center rounded-xl bg-ink p-5 text-ivory">
                <div>
                  <div className="font-marker text-2xl" style={{ color: "var(--ochre)" }}>est.</div>
                  <div className="font-display text-4xl font-semibold leading-none">Nagpur</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-wider opacity-70">since you needed prints</div>
                </div>
              </div>
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

            {/* timeline */}
            <div className="mt-6 hairline-strong rounded-2xl bg-paper p-6 shadow-soft">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">The floor, in four steps</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {[
                  { n: "01", t: "Brief", d: "Files, sizes, media." },
                  { n: "02", t: "Proof", d: "Colour + spec sign-off." },
                  { n: "03", t: "Produce", d: "Line assigned to job." },
                  { n: "04", t: "Deliver", d: "Pickup or dispatch." },
                ].map((s) => (
                  <div key={s.n} className="rounded-xl p-4" style={{ background: "color-mix(in oklab, var(--ochre) 10%, var(--paper))" }}>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.n}</div>
                    <div className="mt-1 font-display text-lg font-medium">{s.t}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICES — image-forward editorial cards
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
        <SectionHeader kicker="02 / Services" title="Production-grade output, daily." sub="Six core lines that keep architecture studios, contractors and corporate offices unblocked." />

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
   FLOWER WHEEL — petal-style (reference: previous website)
   redesigned in editorial palette
   ============================================================ */
const PETALS: Array<{ label: string; color: string; text: string }> = [
  { label: "Foamsheet",    color: "var(--sage)",  text: "var(--ivory)" },
  { label: "Vinyl",        color: "var(--brick)", text: "var(--ivory)" },
  { label: "Signages",     color: "var(--ochre)", text: "var(--ink)" },
  { label: "Standee",      color: "var(--teal)",  text: "var(--ivory)" },
  { label: "Signages 2",   color: "var(--ink)",   text: "var(--ivory)" },
  { label: "Poster",       color: "var(--ivory)", text: "var(--ink)" },
  { label: "Flags",        color: "var(--brick)", text: "var(--ivory)" },
  { label: "Wallpaper",    color: "#8a4a2a",      text: "var(--ivory)" },
  { label: "Envelopes",    color: "var(--ochre)", text: "var(--ink)" },
  { label: "Canvas",       color: "var(--brick)", text: "var(--ivory)" },
  { label: "Banner",       color: "var(--teal)",  text: "var(--ivory)" },
  { label: "Satin Flags",  color: "var(--sage)",  text: "var(--ivory)" },
  { label: "UV & Foiling", color: "#6e4b9e",      text: "var(--ivory)" },
  { label: "Stickers",     color: "var(--ink)",   text: "var(--ivory)" },
  { label: "Paintings",    color: "var(--brick)", text: "var(--ivory)" },
];

function Wheel() {
  return (
    <section id="specialty" className="relative overflow-hidden border-y py-24 sm:py-32" style={{ background: "color-mix(in oklab, var(--ochre) 22%, var(--ivory))" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="font-marker text-3xl" style={{ color: "var(--brick)" }}>spin me!</div>
          <h2 className="mt-2 font-display text-5xl font-medium leading-[0.95] sm:text-6xl">
            We specialize in <em className="italic" style={{ color: "var(--brick)" }}>literally</em> all of this.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Fifteen different things on one little wheel. Pick one. Pick five. Pick all of them.
            We're game — one PO, one invoice, one point of contact.
          </p>
          <a href="https://wa.me/917276141392" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-ivory transition hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> Send your file on WhatsApp
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <motion.div
              animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="-260 -260 520 520" className="h-full w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                <defs>
                  {/* teardrop / petal shape */}
                  <g id="petal">
                    <path
                      d="M 0 -220 C 28 -220 46 -180 46 -130 C 46 -95 30 -70 0 -60 C -30 -70 -46 -95 -46 -130 C -46 -180 -28 -220 0 -220 Z"
                    />
                  </g>
                </defs>
                {PETALS.map((p, i) => {
                  const angle = (i / PETALS.length) * 360;
                  return (
                    <g key={p.label} transform={`rotate(${angle})`}>
                      <use href="#petal" fill={p.color} stroke="var(--ink)" strokeWidth="3" />
                      <text
                        x="0" y="-140"
                        textAnchor="middle"
                        fontSize="13"
                        fontFamily="Fraunces"
                        fontWeight="700"
                        letterSpacing="0.05em"
                        fill={p.text}
                        style={{ textTransform: "uppercase" }}
                      >
                        {p.label}
                      </text>
                    </g>
                  );
                })}
                {/* center hub */}
                <circle cx="0" cy="0" r="52" fill="var(--ivory)" stroke="var(--ink)" strokeWidth="3" />
                <text x="0" y="6" textAnchor="middle" fontFamily="Fraunces" fontWeight="700" fontSize="20" fill="var(--ink)">TCC</text>
              </svg>
            </motion.div>

            {/* pulses */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                style={{ borderColor: "var(--brick)" }}
                animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
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
   INDUSTRIES — interactive tabs with images per industry
   ============================================================ */
type Industry = {
  key: string;
  icon: typeof Building2;
  name: string;
  headline: string;
  desc: string;
  img: string;
  work: { icon: typeof Ruler; label: string }[];
};

const INDUSTRIES: Industry[] = [
  {
    key: "arch",
    icon: Building2,
    name: "Architecture & AEC",
    headline: "Drawings, sets, tenders.",
    desc: "Plotted GFC sets, tender drawings, maps and presentation boards. Straight from your CAD, coloured or B/W, on paper, tracing or cloth.",
    img: indArch,
    work: [
      { icon: MapIcon, label: "Site maps" },
      { icon: Ruler, label: "Plotting A0" },
      { icon: Compass, label: "GFC sets" },
      { icon: BookOpen, label: "Tender books" },
    ],
  },
  {
    key: "mfg",
    icon: Factory,
    name: "Manufacturing",
    headline: "Safety-critical signage.",
    desc: "Floor markings, MSDS posters, PPE reminders, P&IDs and hazard signage that survives shop-floor conditions.",
    img: indMfg,
    work: [
      { icon: AlertTriangle, label: "Hazard signs" },
      { icon: HardHat, label: "PPE reminders" },
      { icon: Ruler, label: "P&ID prints" },
      { icon: Tag, label: "Floor markings" },
    ],
  },
  {
    key: "hosp",
    icon: Hospital,
    name: "Hospitals",
    headline: "Calm, clear wayfinding.",
    desc: "Directional systems, patient education prints, ID consumables and department signage — with cleanable finishes.",
    img: indHosp,
    work: [
      { icon: Compass, label: "Wayfinding" },
      { icon: BookOpen, label: "Patient prints" },
      { icon: Tag, label: "Department signs" },
      { icon: Layers, label: "Cleanable finish" },
    ],
  },
  {
    key: "edu",
    icon: GraduationCap,
    name: "Education",
    headline: "Thesis to campus.",
    desc: "Thesis production with hard-binding, lab posters, event standees and campus signage. Repeatable across semesters.",
    img: indEdu,
    work: [
      { icon: BookOpen, label: "Thesis binding" },
      { icon: Printer, label: "Lab posters" },
      { icon: Tag, label: "Event standees" },
      { icon: Compass, label: "Campus signage" },
    ],
  },
  {
    key: "retail",
    icon: ShoppingBag,
    name: "Retail & F&B",
    headline: "Storefront to counter.",
    desc: "Window vinyls, menu boards, seasonal POS rollouts and shelf-strip campaigns — rolled out across outlets in a single PO.",
    img: indRetail,
    work: [
      { icon: Palette, label: "Window vinyl" },
      { icon: Tag, label: "Menu boards" },
      { icon: Printer, label: "POS rollouts" },
      { icon: Maximize2, label: "Shelf strips" },
    ],
  },
  {
    key: "re",
    icon: Hammer,
    name: "Real Estate & Interiors",
    headline: "Hoardings & sample-flats.",
    desc: "Site hoardings, sample-flat graphics, custom wallpapers, gallery canvas — from CGI hand-off to on-site install.",
    img: indRealEstate,
    work: [
      { icon: Maximize2, label: "Site hoardings" },
      { icon: Layers, label: "Wallpapers" },
      { icon: Palette, label: "Canvas prints" },
      { icon: Tag, label: "Sample-flat graphics" },
    ],
  },
];

function Industries() {
  const [active, setActive] = useState<string>(INDUSTRIES[0].key);
  const current = INDUSTRIES.find((i) => i.key === active) ?? INDUSTRIES[0];

  return (
    <section id="industries" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="03 / Industries" title="Built for procurement teams." sub="Repeatable specifications, predictable lead times, and a paper trail that survives an audit. Pick your industry — see what we ship." />

        {/* tabs */}
        <div className="mt-14 flex flex-wrap gap-2">
          {INDUSTRIES.map((it) => {
            const isActive = it.key === active;
            return (
              <button
                key={it.key}
                onClick={() => setActive(it.key)}
                className={`hairline inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  isActive ? "bg-ink text-ivory" : "bg-paper hover:bg-ink/5"
                }`}
              >
                <it.icon className="h-4 w-4" />
                {it.name}
              </button>
            );
          })}
        </div>

        {/* active panel */}
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="mt-10 grid gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <div className="hairline-strong shadow-edge relative overflow-hidden rounded-2xl">
              <img src={current.img} alt={current.name} loading="lazy" className="aspect-[16/10] h-full w-full object-cover" />
              <div className="absolute left-4 top-4 rounded-md bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ivory">
                {current.name}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 text-ivory">
                <div className="font-display text-3xl font-medium sm:text-4xl">{current.headline}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="hairline-strong h-full rounded-2xl bg-paper p-6 shadow-soft">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">What we ship for {current.name.toLowerCase()}</div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{current.desc}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {current.work.map((w, i) => (
                  <motion.div
                    key={w.label}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="hairline flex items-center gap-3 rounded-xl bg-paper p-3"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-md" style={{ background: "color-mix(in oklab, var(--brick) 12%, var(--paper))" }}>
                      <w.icon className="h-4 w-4" style={{ color: "var(--brick)" }} />
                    </div>
                    <div className="text-sm font-medium">{w.label}</div>
                  </motion.div>
                ))}
              </div>

              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brick)" }}>
                Talk to us about {current.name.toLowerCase()} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   LARGE FORMAT — 6 photos structured
   ============================================================ */
const LF_ITEMS = [
  { img: bigHoard,   tag: "Hoardings",   title: "Building hoardings & flex banners", desc: "Flex, star-flex, vinyl on foamsheet — installed or ready-to-hang.", cls: "lg:col-span-8 lg:row-span-2 aspect-[16/10]" },
  { img: bigWall,    tag: "Interior",    title: "Custom wallpapers", desc: "Cafes, boutiques, sample-flats, boardrooms.", cls: "lg:col-span-4 aspect-[4/5]" },
  { img: bigSignage, tag: "Facade",      title: "Illuminated signage", desc: "Facade-mounted and edge-lit systems.", cls: "lg:col-span-4 aspect-[4/3]" },
  { img: bigCanvas,  tag: "Gallery",     title: "Gallery canvas & fine-art", desc: "Museum-grade canvas + framing.", cls: "lg:col-span-4 aspect-[4/3]" },
  { img: bigStandee, tag: "Events",      title: "Rollup standees", desc: "Trade shows, launches, corporate events.", cls: "lg:col-span-4 aspect-[4/3]" },
  { img: bigVinyl,   tag: "Vinyl",       title: "Print + cut vinyl", desc: "Precision-cut decals, reflective vinyl, stickers.", cls: "lg:col-span-6 aspect-[4/3]" },
  { img: bigWrap,    tag: "Wrap",        title: "Full building wraps", desc: "City-scale campaigns, facade takeovers.", cls: "lg:col-span-6 aspect-[4/3]" },
];

function LargeFormat() {
  return (
    <section id="large-format" className="border-y bg-[color-mix(in_oklab,var(--ochre)_8%,var(--ivory))] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="04 / Large format" title="Goes big. Goes outside." sub="From the factory wall to the highway hoarding — and from the boardroom feature-wall to the boutique cafe. Seven ways we go large." />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {LF_ITEMS.map((it, i) => (
            <motion.figure
              key={it.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`hairline-strong shadow-soft group relative overflow-hidden rounded-2xl bg-paper ${it.cls}`}
            >
              <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute left-3 top-3 rounded-md bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ivory">{it.tag}</div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 text-ivory">
                <div className="font-display text-xl font-medium sm:text-2xl">{it.title}</div>
                <div className="mt-1 text-xs opacity-80">{it.desc}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT — single production number, no accounts row
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
              <ContactRow icon={Phone} label="+91 98222 24644" href="tel:+919822224644" sub="Production floor · direct" />
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
              Central India's B2B print production partner. Wide-format, industrial signage,
              interior graphics, and reprographics — on deadline, on spec.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <FooterCol title="Explore" items={[["About", "#about"], ["Services", "#services"], ["Industries", "#industries"], ["Large Format", "#large-format"]]} />
            <FooterCol title="Reach us" items={[["Call", "tel:+919822224644"], ["WhatsApp", "https://wa.me/917276141392"], ["Email", "mailto:truecopycentre@gmail.com"]]} />
            <FooterCol title="Visit" items={[["Dhantoli, Nagpur", "#contact"], ["Mon–Sat · 9:30–21:00", "#contact"]]} />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 border-t pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mr-2">Follow the floor</span>
          <SocialIcon href="https://instagram.com/truecopycentre" label="Instagram" icon={Instagram} />
          <SocialIcon href="https://facebook.com/truecopycentre" label="Facebook" icon={Facebook} />
          <SocialIcon href="https://wa.me/917276141392" label="WhatsApp" icon={MessageCircle} />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} True Copy Centre Pvt. Ltd.</span>
          <span>Made on the floor · Nagpur</span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Instagram }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="hairline-strong group grid h-10 w-10 place-items-center rounded-full bg-paper transition hover:bg-ink hover:text-ivory">
      <Icon className="h-4 w-4" />
    </a>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-2">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-sm font-medium hover:underline">{label}</a>
          </li>
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
    <div className="min-h-screen bg-ivory text-foreground">
      <UtilityBar />
      <Nav />
      <Hero />
      <ClientStrip />
      <About />
      <Services />
      <Wheel />
      <Industries />
      <LargeFormat />
      <Contact />
      <Footer />
    </div>
  );
}
