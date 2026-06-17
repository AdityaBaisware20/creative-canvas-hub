import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Printer, Scan, BookOpen, Layers, Maximize2, Stamp, Sparkles,
  Sticker, Image as ImageIcon, Frame, Wallpaper, MonitorSmartphone,
  Flag, Lightbulb, Shield, Megaphone, Palette, MapPin, Phone, MessageCircle,
  Mail as MailIcon, CheckCircle2, Zap, Clock, Award, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "True Copy Centre — Commercial Printing & Signage Solutions, Nagpur" },
      { name: "description", content: "B2B printing partner for businesses in Nagpur. Large format printing, CAD plotting, signage, banners, wallpapers, lamination, binding and bulk reprographics." },
      { property: "og:title", content: "True Copy Centre — Commercial Printing Partner, Nagpur" },
      { property: "og:description", content: "Trusted by businesses across Nagpur for large-format printing, signage and bulk reprographic services." },
    ],
  }),
  component: Index,
});

/* ---------- helpers ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

/* ---------- sections ---------- */

function TopBar() {
  return (
    <div className="border-b bg-ink text-cream" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs font-medium sm:px-6">
        <div className="flex items-center gap-4 opacity-90">
          <span className="hidden sm:inline">⚡ UPS backup — uninterrupted production</span>
          <span className="hidden md:inline">·</span>
          <span>Bulk &amp; corporate rates available</span>
        </div>
        <div className="flex items-center gap-4 opacity-90">
          <a href="tel:+919822224644" className="hover:underline">+91 98222 24644</a>
          <span className="opacity-50">|</span>
          <a href="mailto:truecopycentre@gmail.com" className="hidden hover:underline sm:inline">truecopycentre@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-cream/95 backdrop-blur" style={{ background: "color-mix(in oklab, var(--cream) 95%, transparent)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md" style={{ background: "var(--pop-red)" }}>
            <span className="font-display text-lg font-bold text-white">T</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold tracking-tight">True Copy Centre</div>
            <div className="text-xs text-muted-foreground">Commercial Printing · Nagpur</div>
          </div>
        </a>
        <div className="hidden gap-8 md:flex">
          {[["Services", "#services"], ["Capabilities", "#big"], ["Applications", "#interior"], ["Process", "#process"], ["Contact", "#visit"]].map(([n, h]) => (
            <a key={n} href={h} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{n}</a>
          ))}
        </div>
        <a href="https://wa.me/917276141392" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
          style={{ background: "var(--pop-red)" }}>
          Request a Quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="paper-bg relative overflow-hidden border-b">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <motion.div initial="hidden" animate="show" variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full opacity-75" style={{ background: "var(--pop-green)" }} />
              <span className="relative inline-block h-2 w-2 rounded-full" style={{ background: "var(--pop-green)" }} />
            </span>
            Open for business · Yeshwant Stadium, Nagpur
          </motion.div>

          <motion.h1 initial="hidden" animate="show" custom={1} variants={fadeUp}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your end-to-end <span style={{ color: "var(--pop-red)" }}>commercial printing</span> partner in Nagpur.
          </motion.h1>

          <motion.p initial="hidden" animate="show" custom={2} variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From CAD plots and bulk reprographics to large-format signage, banners and interior graphics —
            we deliver consistent, professional output for architects, contractors, retailers and
            corporates across Maharashtra.
          </motion.p>

          <motion.div initial="hidden" animate="show" custom={3} variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3">
            <a href="https://wa.me/917276141392" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-base font-semibold text-white shadow-soft transition hover:opacity-90"
              style={{ background: "var(--pop-red)" }}>
              <MessageCircle className="h-4 w-4" /> Request a Quote
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 rounded-md border bg-white px-5 py-3 text-base font-semibold transition hover:bg-secondary">
              View Capabilities <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div initial="hidden" animate="show" custom={4} variants={fadeUp}
            className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4">
            {[
              { k: "25+", v: "Years in print" },
              { k: "44\"", v: "Max plot width" },
              { k: "100%", v: "UPS backed" },
              { k: "B2B", v: "Bulk pricing" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold" style={{ color: "var(--pop-red)" }}>{s.k}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column: clean visual */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border bg-white shadow-soft-lg">
            <div className="absolute inset-0" style={{
              background: "linear-gradient(135deg, var(--pop-red) 0%, var(--pop-orange) 100%)"
            }} />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "24px 24px"
            }} />
            <div className="relative flex h-full flex-col justify-between p-8 text-white">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                  <Award className="h-3.5 w-3.5" /> Trusted by 500+ businesses
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold leading-tight">
                  Same-day turnaround on most B2B orders.
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  { i: Zap, t: "Fast quotes within hours" },
                  { i: Clock, t: "Reliable delivery timelines" },
                  { i: CheckCircle2, t: "Quality-checked every job" },
                ].map((row) => (
                  <div key={row.t} className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 backdrop-blur">
                    <row.i className="h-4 w-4 shrink-0" />
                    <span className="text-sm font-medium">{row.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border bg-white p-4 shadow-soft-lg sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md" style={{ background: "var(--pop-yellow)" }}>
                <Printer className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Production-grade plotters</div>
                <div className="text-xs text-muted-foreground">A4 to A0+ · up to 44" wide</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- services ---------- */
const CORE_SERVICES = [
  { icon: Printer, title: "Large-Format Xerox", desc: "High-volume laser output on paper, tracing, cloth and engineering matte film." },
  { icon: Palette, title: "Multi-Colour Printing", desc: "A4 to A0+ colour prints — up to 44\" wide, any length. CAD drawings and project reports." },
  { icon: BookOpen, title: "Binding Solutions", desc: "Spiral, wiro, soft and hard binding for thesis, reports and corporate documentation." },
  { icon: Scan, title: "Scanning & Plotting", desc: "Colour and B/W scanning. Wide-format plotting up to 44\" on multiple media." },
  { icon: Layers, title: "Lamination Services", desc: "Hot and cold lamination — matte, glossy, sparkle, 3D — plus delamination for documents and maps." },
  { icon: Maximize2, title: "Enlargement & Reduction", desc: "Precise scaling from A4 to A0 and back, suited for drawings and presentations." },
] as const;

function Services() {
  return (
    <section id="services" className="border-b py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="Core Services" title="Everyday reprographic services" sub="Reliable day-to-day print operations that keep your business moving." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp} custom={i}
              className="group rounded-xl border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg" style={{ background: "color-mix(in oklab, var(--pop-red) 10%, white)" }}>
                <s.icon className="h-5 w-5" style={{ color: "var(--pop-red)" }} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- specialization wheel ---------- */
const WHEEL = [
  "Wallpaper", "Envelopes", "Canvas", "Banners", "Satin Flags",
  "UV & Foiling", "Stickers", "Paintings", "Foamsheet", "Vinyl",
  "Signages", "Standees", "Posters", "Flags", "One-Way Vision",
];

function Wheel() {
  return (
    <section className="relative overflow-hidden border-b py-24" style={{ background: "var(--surface)" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--pop-red)" }}>
            15+ Specialisations
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            One vendor. Every print requirement covered.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Consolidate your print, signage and display needs with a single trusted partner.
            Lower coordination overhead, consistent quality and predictable timelines.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/917276141392" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
              style={{ background: "var(--pop-red)" }}>
              Discuss your project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#visit"
              className="inline-flex items-center gap-2 rounded-md border bg-white px-5 py-3 text-sm font-semibold transition hover:bg-secondary">
              Visit our facility
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[460px]">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          >
            {WHEEL.map((label, i) => {
              const angle = (i / WHEEL.length) * 360;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 origin-left"
                  style={{ transform: `rotate(${angle}deg) translateX(56px)` }}
                >
                  <div className="flex h-9 w-44 items-center justify-end rounded-full border bg-white pr-4 font-display text-xs font-semibold shadow-soft">
                    {label}
                  </div>
                </div>
              );
            })}
          </motion.div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="grid h-24 w-24 place-items-center rounded-full text-white shadow-soft-lg" style={{ background: "var(--pop-red)" }}>
              <div className="text-center">
                <div className="font-display text-xl font-bold leading-none">TCC</div>
                <div className="mt-1 text-[9px] font-medium uppercase tracking-wider opacity-90">Nagpur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- big applications: industrial + interior ---------- */
const INDUSTRIAL = [
  { icon: Shield, title: "Safety Signage" },
  { icon: Layers, title: "Vinyl & Foamsheet" },
  { icon: Megaphone, title: "Rollup Standees" },
  { icon: Flag, title: "Flex / Cloth / Banners" },
  { icon: Sparkles, title: "Retro Reflective Vinyl" },
  { icon: Lightbulb, title: "Glow In The Dark" },
  { icon: Sticker, title: "Print & Cut Stickers" },
];
const INTERIOR = [
  { icon: ImageIcon, title: "Canvas Prints" },
  { icon: Wallpaper, title: "Customised Wallpapers" },
  { icon: MonitorSmartphone, title: "Window & Frosted Films" },
  { icon: Layers, title: "Vinyl & Rexine" },
  { icon: Frame, title: "Poster Printing" },
  { icon: ImageIcon, title: "One-Way Vision" },
  { icon: Palette, title: "Monochrome Paintings" },
];

function BigStuff() {
  return (
    <section id="big" className="border-b py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="Industrial Applications" title="Built for scale and visibility" sub="From warehouse floor signage to highway-grade billboards." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIAL.map((s, i) => <PillCard key={s.title} {...s} i={i} />)}
        </div>

        <div className="mt-24">
          <SectionHeader id="interior" kicker="Interior Applications" title="Branded environments &amp; interior graphics" sub="Office branding, retail interiors and architectural finishes." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INTERIOR.map((s, i) => <PillCard key={s.title} {...s} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillCard({ icon: Icon, title, i }: { icon: typeof Shield; title: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.04, duration: 0.4 }}
      className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3.5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-soft-lg"
    >
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md" style={{ background: "color-mix(in oklab, var(--pop-blue) 10%, white)" }}>
        <Icon className="h-4 w-4" style={{ color: "var(--pop-blue)" }} />
      </div>
      <span className="font-display text-sm font-semibold leading-tight">{title}</span>
    </motion.div>
  );
}

/* ---------- specials strip ---------- */
function Specials() {
  const items = [
    { title: "Custom Stickers", sub: "Any shape, any size, any quantity.", icon: Sticker },
    { title: "Branded Envelopes", sub: "Corporate, wedding and gifting.", icon: MailIcon },
    { title: "UV & Foiling", sub: "Gold, silver, copper and metallic finishes.", icon: Sparkles },
    { title: "CAD Plotting", sub: "A4 to A0+, up to 44\" any length.", icon: Maximize2 },
    { title: "Ammonia / Blueprints", sub: "Tracing and Garware film printing.", icon: Layers },
    { title: "Bulk Reprographics", sub: "Volume pricing for repeat orders.", icon: Printer },
  ];
  return (
    <section className="border-b py-24" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="Specialist Capabilities" title="Solutions beyond standard printing" sub="High-margin, specialist work delivered with the same reliability as our day-to-day services." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group rounded-xl border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-lg" style={{ background: "color-mix(in oklab, var(--pop-orange) 12%, white)" }}>
                  <it.icon className="h-5 w-5" style={{ color: "var(--pop-orange)" }} />
                </div>
                <span className="rounded-full border bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Specialist
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- how it works ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Share your requirement", d: "Send files or specifications via WhatsApp, email, or in-person at our facility." },
    { n: "02", t: "Receive a tailored quote", d: "We recommend the right substrate, finish and quantity — with transparent pricing." },
    { n: "03", t: "Production & QC", d: "Job runs on calibrated equipment with UPS-backed power. Every output is quality-checked." },
    { n: "04", t: "Delivery or pickup", d: "Pick up from our centre or arrange delivery — on schedule, every time." },
  ];
  return (
    <section id="process" className="border-b py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="Our Process" title="A simple, transparent workflow" sub="Designed for business clients who need clarity, speed and accountability." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="relative rounded-xl border bg-white p-6 shadow-soft"
            >
              <div className="font-display text-sm font-bold tracking-widest" style={{ color: "var(--pop-red)" }}>{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- visit / contact ---------- */
function Visit() {
  return (
    <section id="visit" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="Get in touch" title="Visit our production facility" sub="Centrally located beside Yeshwant Stadium, Dhantoli — easily accessible for client visits and deliveries." />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="overflow-hidden rounded-xl border bg-white p-6 shadow-soft lg:col-span-3"
          >
            <MapDoodle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="rounded-xl border bg-white p-7 shadow-soft lg:col-span-2"
          >
            <h3 className="font-display text-2xl font-semibold">True Copy Centre Pvt. Ltd.</h3>
            <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              58, Yeshwant Stadium, Dhantoli, Nagpur — 12
            </p>

            <div className="mt-6 space-y-2">
              <ContactRow icon={Phone} label="+91 98222 24644" href="tel:+919822224644" />
              <ContactRow icon={Phone} label="+91 73878 89990" href="tel:+917387889990" />
              <ContactRow icon={Phone} label="0712 — 2424644" href="tel:+9107122424644" />
              <ContactRow icon={MessageCircle} label="WhatsApp: 72761 41392" href="https://wa.me/917276141392" />
              <ContactRow icon={MailIcon} label="truecopycentre@gmail.com" href="mailto:truecopycentre@gmail.com" />
              <ContactRow icon={Stamp} label="www.truecopycentre.com" href="https://www.truecopycentre.com" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border bg-secondary/50 p-4">
                <div className="flex items-center gap-2 font-display text-sm font-semibold">
                  <Zap className="h-4 w-4" style={{ color: "var(--pop-red)" }} /> UPS Backup
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Uninterrupted production through power cuts.</div>
              </div>
              <div className="rounded-lg border bg-secondary/50 p-4">
                <div className="flex items-center gap-2 font-display text-sm font-semibold">
                  <Award className="h-4 w-4" style={{ color: "var(--pop-red)" }} /> Bulk Pricing
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Volume discounts for corporate accounts.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: typeof Phone; label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md border bg-white px-3 py-2.5 text-sm font-medium transition hover:bg-secondary">
      <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
      <span className="truncate">{label}</span>
    </a>
  );
}

function MapDoodle() {
  return (
    <svg viewBox="0 0 600 420" className="w-full">
      <rect x="0" y="0" width="600" height="420" rx="12" fill="oklch(0.97 0.005 250)" />
      <path d="M 30 80 L 570 80" stroke="oklch(0.7 0.01 250)" strokeWidth="2" strokeDasharray="6 6" />
      <path d="M 30 360 L 570 360" stroke="oklch(0.7 0.01 250)" strokeWidth="2" strokeDasharray="6 6" />
      <path d="M 460 20 L 460 400" stroke="oklch(0.7 0.01 250)" strokeWidth="2" strokeDasharray="6 6" />
      <path d="M 60 20 L 60 400" stroke="oklch(0.7 0.01 250)" strokeWidth="2" strokeDasharray="6 6" />
      <ellipse cx="260" cy="220" rx="150" ry="100" fill="oklch(0.93 0.03 145)" stroke="var(--ink)" strokeWidth="2" />
      <text x="260" y="225" textAnchor="middle" fontFamily="Manrope" fontSize="16" fontWeight="600" fill="var(--ink)">Yeshwant Stadium</text>
      <g fontSize="10" fontWeight="600" fill="var(--ink)">
        <rect x="80" y="30" width="120" height="40" fill="white" stroke="oklch(0.8 0.01 250)" strokeWidth="1.5" />
        <text x="140" y="55" textAnchor="middle">Haldiram's</text>
        <rect x="220" y="30" width="120" height="40" fill="white" stroke="oklch(0.8 0.01 250)" strokeWidth="1.5" />
        <text x="280" y="55" textAnchor="middle">Bank of Baroda</text>
        <rect x="360" y="30" width="90" height="40" fill="white" stroke="oklch(0.8 0.01 250)" strokeWidth="1.5" />
        <text x="405" y="55" textAnchor="middle">Goel Ganga Mall</text>
        <rect x="475" y="100" width="100" height="80" fill="white" stroke="oklch(0.8 0.01 250)" strokeWidth="1.5" />
        <text x="525" y="145" textAnchor="middle">Metro Station</text>
        <rect x="475" y="200" width="100" height="120" fill="white" stroke="oklch(0.8 0.01 250)" strokeWidth="1.5" />
        <text x="525" y="265" textAnchor="middle">Metro Ground</text>
        <rect x="80" y="370" width="100" height="35" fill="white" stroke="oklch(0.8 0.01 250)" strokeWidth="1.5" />
        <text x="130" y="392" textAnchor="middle">Kothari Hosp.</text>
        <rect x="200" y="370" width="100" height="35" fill="white" stroke="oklch(0.8 0.01 250)" strokeWidth="1.5" />
        <text x="250" y="392" textAnchor="middle">Bharuka</text>
        <rect x="320" y="370" width="100" height="35" fill="white" stroke="oklch(0.8 0.01 250)" strokeWidth="1.5" />
        <text x="370" y="392" textAnchor="middle">Ganesh Chmbr</text>
      </g>
      <motion.path
        d="M 525 250 Q 460 280 380 250 Q 320 230 290 200"
        fill="none" stroke="var(--pop-red)" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
      />
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <circle cx="290" cy="195" r="18" fill="var(--pop-red)" stroke="white" strokeWidth="3" />
        <text x="290" y="200" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">TCC</text>
      </motion.g>
    </svg>
  );
}

/* ---------- shared section header ---------- */
function SectionHeader({ kicker, title, sub, id }: { kicker: string; title: string; sub: string; id?: string }) {
  return (
    <div id={id} className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--pop-red)" }}
      >
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="mt-3 text-base leading-relaxed text-muted-foreground"
      >
        {sub}
      </motion.p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t py-12" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md" style={{ background: "var(--pop-red)" }}>
              <span className="font-display text-lg font-bold text-white">T</span>
            </div>
            <div className="font-display text-base font-semibold">True Copy Centre Pvt. Ltd.</div>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-70">
            Commercial printing, signage and reprographic solutions for businesses across Nagpur and Maharashtra.
          </p>
        </div>
        <div className="text-sm">
          <div className="mb-3 font-display font-semibold">Contact</div>
          <div className="space-y-1.5 opacity-80">
            <div>58, Yeshwant Stadium, Dhantoli, Nagpur — 12</div>
            <div>+91 98222 24644 · 0712 — 2424644</div>
            <div>truecopycentre@gmail.com</div>
          </div>
        </div>
        <div className="text-sm">
          <div className="mb-3 font-display font-semibold">Hours</div>
          <div className="space-y-1.5 opacity-80">
            <div>Mon – Sat · 9:30 AM – 9:00 PM</div>
            <div>Sunday · By appointment</div>
            <div className="mt-2 opacity-60">UPS-backed · No production downtime</div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs opacity-60 sm:px-6">
        © {new Date().getFullYear()} True Copy Centre Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="overflow-x-clip">
      <TopBar />
      <Nav />
      <Hero />
      <Services />
      <Wheel />
      <BigStuff />
      <Specials />
      <HowItWorks />
      <Visit />
      <Footer />
    </main>
  );
}
