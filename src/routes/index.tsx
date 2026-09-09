import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Stamp, Mail, MapPin, Phone, MessageCircle, Mail as MailIcon,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "True Copy Centre — Nagpur's Most Fun Print Shop" },
      { name: "description", content: "Xerox, prints, signage, banners, stickers, wallpapers & more in Nagpur. Print anything, any size, any surface." },
      { property: "og:title", content: "True Copy Centre — Nagpur" },
      { property: "og:description", content: "Print anything. Anywhere. Any size." },
    ],
  }),
  component: Index,
});

/* ---------- helpers ---------- */
const popIn = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.06, type: "spring" as const, stiffness: 200, damping: 16 },
  }),
};

function Sticky({ children, color, rotate = -2, className = "" }: { children: React.ReactNode; color: string; rotate?: number; className?: string }) {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.04, y: -4 }}
      style={{ rotate, backgroundColor: `var(--${color})` }}
      className={`border-ink shadow-cartoon rounded-3xl px-5 py-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* Small 3D clay icon that sits inside each service card */
function ClayIcon({ src, alt, size = "md" }: { src: string; alt: string; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-14 w-14 p-1" : "h-20 w-20 p-1.5";
  return (
    <motion.div
      whileHover={{ rotate: -6, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className={`border-ink shadow-cartoon-sm grid shrink-0 place-items-center overflow-hidden rounded-2xl bg-white ${box}`}
    >
      <img src={src} alt={alt} loading="lazy" width={512} height={512} className="h-full w-full object-contain" />
    </motion.div>
  );
}


/* ---------- sections ---------- */

function TopBar() {
  return (
    <div className="bg-ink text-cream overflow-hidden border-b-4 border-ink" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="flex whitespace-nowrap py-2 text-sm font-black uppercase tracking-wider animate-marquee">
        {Array.from({ length: 2 }).map((_, k) => (
          <div key={k} className="flex shrink-0 gap-8 pr-8">
            {["★ Super Jumbo Xerox", "★ Print Anything, Any Size", "★ Stickers in Any Shape", "★ Same-Day Service", "★ UPS Backup ⚡", "★ Bulk Discounts", "★ Since Forever in Nagpur"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b-4 border-ink" style={{ background: "color-mix(in oklab, var(--cream) 90%, transparent)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="border-ink shadow-cartoon-sm grid h-11 w-11 place-items-center rounded-xl" style={{ background: "var(--pop-red)" }}>
            <span className="font-display text-xl font-black text-white">T</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold">True Copy Centre</div>
            <div className="text-xs font-bold text-muted-foreground">Nagpur · since you needed prints</div>
          </div>
        </a>
        <div className="hidden gap-6 md:flex">
          {[["Services", "#services"], ["Big Stuff", "#big"], ["Interiors", "#interior"], ["Visit", "#visit"]].map(([n, h]) => (
            <a key={n} href={h} className="font-display text-base font-bold hover:underline decoration-4 underline-offset-4" style={{ textDecorationColor: "var(--pop-red)" }}>{n}</a>
          ))}
        </div>
        <a href="tel:+919822224644" className="border-ink shadow-cartoon-sm rounded-full px-4 py-2 font-display text-sm font-bold" style={{ background: "var(--pop-yellow)" }}>
          📞 Call us
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotateScroll = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const word = "EVERYTHING".split("");
  const wordColors = ["pop-red","pop-blue","pop-orange","pop-green","pop-pink","pop-purple","pop-red","pop-blue","pop-orange","pop-mint"];

  return (
    <section id="top" ref={ref} className="paper-bg relative overflow-hidden">
      {/* soft photographic backdrop — centered on mobile, top-anchored on desktop, never crops the subject */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.10] sm:bg-cover md:bg-top"
        style={{ backgroundImage: "url('/assets/images/everyday-stuff.jpg')" }}
      />
      {/* ===== Background layer: giant CMYK ink blobs ===== */}
      <motion.div style={{ y: yBg }} aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full opacity-70 blur-2xl"
          style={{ background: "radial-gradient(circle at 30% 30%, var(--pop-pink), transparent 60%)" }}
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 top-20 h-[36rem] w-[36rem] rounded-full opacity-70 blur-2xl"
          style={{ background: "radial-gradient(circle at 70% 30%, var(--pop-yellow), transparent 60%)" }}
          animate={{ scale: [1.05, 0.95, 1.05], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-60 blur-2xl"
          style={{ background: "radial-gradient(circle at 50% 50%, var(--pop-mint), transparent 60%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ===== Mid layer: grid of dots + floating paper sheets ===== */}
      <motion.div style={{ y: yMid }} aria-hidden className="pointer-events-none absolute inset-0">
        {/* big spinning CMYK badge top-right */}
        <motion.div
          style={{ rotate: rotateScroll }}
          className="absolute right-6 top-24 hidden h-40 w-40 md:block"
        >
          <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow">
            <defs>
              <path id="circ" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
            </defs>
            <circle cx="100" cy="100" r="92" fill="var(--ink)" />
            <circle cx="100" cy="100" r="60" fill="var(--pop-yellow)" stroke="var(--ink)" strokeWidth="4" />
            <text fill="var(--cream)" fontSize="16" fontWeight="900" letterSpacing="4">
              <textPath href="#circ">★ PRINT ANYTHING ★ ANY SIZE ★ ANY SURFACE </textPath>
            </text>
            <text x="100" y="95" textAnchor="middle" fontFamily="Fredoka" fontWeight="900" fontSize="22" fill="var(--ink)">SINCE</text>
            <text x="100" y="118" textAnchor="middle" fontFamily="Fredoka" fontWeight="900" fontSize="22" fill="var(--pop-red)">FOREVER</text>
          </svg>
        </motion.div>

        {/* floating paper sheets */}
        {[
          { x: "6%", y: "30%", r: -14, c: "white", w: 90, h: 120, d: 0 },
          { x: "88%", y: "55%", r: 12, c: "var(--pop-pink)", w: 80, h: 110, d: 0.6 },
          { x: "14%", y: "70%", r: 8, c: "var(--pop-blue)", w: 70, h: 96, d: 1.2 },
          { x: "82%", y: "18%", r: -10, c: "var(--pop-green)", w: 64, h: 88, d: 0.3 },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="absolute border-ink shadow-cartoon rounded-md hidden sm:block"
            style={{ left: s.x, top: s.y, width: s.w, height: s.h, background: s.c, rotate: s.r }}
            animate={{ y: [0, -16, 0], rotate: [s.r, s.r + 6, s.r] }}
            transition={{ duration: 6, repeat: Infinity, delay: s.d, ease: "easeInOut" }}
          >
            <div className="m-2 space-y-1">
              <div className="h-1.5 w-3/4 rounded-full bg-ink/70" />
              <div className="h-1.5 w-1/2 rounded-full bg-ink/40" />
              <div className="h-1.5 w-2/3 rounded-full bg-ink/40" />
            </div>
          </motion.div>
        ))}

        {/* doodle emojis */}
        {[
          { t: "✏️", x: "4%", y: "12%", d: 0 },
          { t: "🎨", x: "92%", y: "78%", d: 0.4 },
          { t: "✨", x: "48%", y: "8%", d: 0.8 },
          { t: "📐", x: "50%", y: "92%", d: 1 },
        ].map((s, i) => (
          <motion.span key={i} className="absolute text-3xl sm:text-4xl"
            style={{ left: s.x, top: s.y }}
            animate={{ y: [0, -14, 0], rotate: [0, 12, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: s.d, ease: "easeInOut" }}
          >{s.t}</motion.span>
        ))}
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-28 sm:px-6 sm:pt-20 sm:pb-36">
        {/* washi tape strips */}
        <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 rotate-[-4deg] hidden sm:block">
          <div className="border-ink h-6 w-44 rounded-sm opacity-90"
            style={{ background: "repeating-linear-gradient(45deg, var(--pop-yellow) 0 10px, var(--ink) 10px 12px)" }} />
        </div>

        <motion.div initial="hidden" animate="show" className="text-center">
          {/* badge */}
          <motion.div variants={popIn} className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border-ink shadow-cartoon-sm bg-white px-4 py-2 text-sm font-black">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full opacity-75" style={{ background: "var(--pop-green)" }} />
              <span className="relative inline-block h-2.5 w-2.5 rounded-full" style={{ background: "var(--pop-green)" }} />
            </span>
            OPEN NOW · YESHWANT STADIUM, NAGPUR
          </motion.div>

          {/* HUGE headline */}
          <motion.h1 variants={popIn} custom={1} className="font-display font-bold leading-[0.85]">
            <span className="block text-[14vw] sm:text-7xl md:text-8xl">
              <span className="inline-block -rotate-2">we</span>{" "}
              <span className="relative inline-block rotate-1">
                <span className="relative z-10">print</span>
                <motion.span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-4 sm:h-6 rounded-full"
                  style={{ background: "var(--pop-pink)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </span>
            </span>

            {/* EVERYTHING — letter by letter, multicolor, jiggling */}
            <span className="relative mt-2 block whitespace-nowrap break-keep text-[10.5vw] leading-none tracking-tight sm:text-[9rem] md:text-[12rem]">
              {word.map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  style={{ color: `var(--${wordColors[i]})`, WebkitTextStroke: "3px var(--ink)" }}
                  initial={{ y: 80, opacity: 0, rotate: -15 }}
                  animate={{ y: 0, opacity: 1, rotate: i % 2 === 0 ? -4 : 4 }}
                  transition={{ delay: 0.5 + i * 0.05, type: "spring", stiffness: 220, damping: 12 }}
                  whileHover={{ y: -10, rotate: 0, scale: 1.1 }}
                >
                  {ch}
                </motion.span>
              ))}
              {/* sparkle */}
              <motion.span
                className="absolute -right-2 -top-4 text-4xl sm:text-6xl"
                animate={{ rotate: [0, 25, -25, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >✨</motion.span>
            </span>

            <span className="mt-4 block font-marker text-5xl font-bold sm:text-7xl" style={{ color: "var(--pop-blue)" }}>
              ...yes, even <span className="underline decoration-wavy decoration-[var(--pop-red)]">that</span> thing.
            </span>
          </motion.h1>

          <motion.p variants={popIn} custom={2} className="mx-auto mt-8 max-w-2xl text-lg font-bold text-muted-foreground sm:text-xl">
            Xerox, banners, stickers, signage, wallpapers, canvas, foiling, blueprints — if you can imagine it on a surface, we can put it there.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={popIn} custom={3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.96 }}
              href="https://wa.me/917276141392" target="_blank" rel="noreferrer"
              className="border-ink shadow-cartoon-lg rounded-2xl px-7 py-4 font-display text-xl font-bold text-white"
              style={{ background: "var(--pop-green)" }}>
              💬 WhatsApp your file
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.96 }}
              href="#services"
              className="border-ink shadow-cartoon-lg rounded-2xl bg-white px-7 py-4 font-display text-xl font-bold">
              See what we make ↓
            </motion.a>
          </motion.div>

          {/* hero stage: printer + spitting prints */}
          <motion.div variants={popIn} custom={4} className="relative mx-auto mt-20 max-w-4xl">
            {/* CMYK ink dots floating around */}
            {[
              { c: "var(--pop-pink)", x: "5%", y: "10%", s: 22 },
              { c: "var(--pop-yellow)", x: "92%", y: "20%", s: 28 },
              { c: "var(--pop-blue)", x: "0%", y: "75%", s: 18 },
              { c: "var(--ink)", x: "96%", y: "78%", s: 16 },
            ].map((d, i) => (
              <motion.span key={i} className="absolute rounded-full border-ink" style={{ left: d.x, top: d.y, width: d.s, height: d.s, background: d.c }}
                animate={{ y: [0, -14, 0] }} transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }} />
            ))}

            {/* spitting prints animation */}
            <div className="pointer-events-none absolute inset-x-0 -top-10 flex justify-center gap-3">
              {["pop-red","pop-yellow","pop-blue","pop-green","pop-pink"].map((c, i) => (
                <motion.div key={c}
                  className="border-ink shadow-cartoon-sm h-14 w-10 rounded-sm"
                  style={{ background: `var(--${c})` }}
                  animate={{ y: [0, -30, 0], rotate: [0, (i - 2) * 8, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                />
              ))}
            </div>

            <motion.div animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <PrinterDoodle />
            </motion.div>

            {/* arrow + handwritten note */}
            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rotate-6 md:block">
              <div className="font-marker text-2xl" style={{ color: "var(--pop-red)" }}>
                meet Xerox-bhau →
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom scallop divider */}
      <svg className="block w-full" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden>
        <path d="M0,40 Q30,0 60,40 T120,40 T180,40 T240,40 T300,40 T360,40 T420,40 T480,40 T540,40 T600,40 T660,40 T720,40 T780,40 T840,40 T900,40 T960,40 T1020,40 T1080,40 T1140,40 T1200,40 V40 H0 Z" fill="var(--ink)" />
      </svg>
    </section>
  );
}

function PrinterDoodle() {
  return (
    <svg viewBox="0 0 600 360" className="mx-auto w-full max-w-2xl drop-shadow-[10px_10px_0_var(--ink)]">
      {/* paper tray flying sheets */}
      {[0, 1, 2].map((i) => (
        <motion.rect key={i} x={220 + i * 12} y={20 + i * 8} width="160" height="90" rx="6"
          fill="white" stroke="var(--ink)" strokeWidth="4"
          animate={{ y: [20 + i * 8, 6 + i * 8, 20 + i * 8], rotate: [i * -2, i * 2, i * -2] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      {/* printer body */}
      <rect x="120" y="140" width="360" height="160" rx="22" fill="var(--pop-red)" stroke="var(--ink)" strokeWidth="6" />
      <rect x="160" y="180" width="280" height="60" rx="10" fill="var(--pop-yellow)" stroke="var(--ink)" strokeWidth="5" />
      {/* eyes */}
      <circle cx="230" cy="210" r="14" fill="white" stroke="var(--ink)" strokeWidth="4" />
      <circle cx="370" cy="210" r="14" fill="white" stroke="var(--ink)" strokeWidth="4" />
      <motion.circle cx="230" cy="210" r="5" fill="var(--ink)"
        animate={{ cx: [228, 234, 228], cy: [212, 208, 212] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.circle cx="370" cy="210" r="5" fill="var(--ink)"
        animate={{ cx: [368, 374, 368], cy: [212, 208, 212] }} transition={{ duration: 4, repeat: Infinity }} />
      {/* smile */}
      <path d="M 270 250 Q 300 270 330 250" stroke="var(--ink)" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* cheeks */}
      <circle cx="210" cy="240" r="8" fill="var(--pop-pink)" opacity="0.7" />
      <circle cx="390" cy="240" r="8" fill="var(--pop-pink)" opacity="0.7" />
      {/* legs */}
      <rect x="160" y="300" width="20" height="40" fill="var(--ink)" />
      <rect x="420" y="300" width="20" height="40" fill="var(--ink)" />
      {/* buttons */}
      <circle cx="450" cy="170" r="8" fill="var(--pop-green)" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="450" cy="195" r="8" fill="var(--pop-blue)" stroke="var(--ink)" strokeWidth="3" />
    </svg>
  );
}

/* ---------- services ---------- */
const CORE_SERVICES = [
  { img: "/assets/images/icons/super-jumbo-xerox.png", title: "Super Jumbo Xerox", desc: "Laser quality on paper, tracing paper, cloth & engineering matte film.", color: "pop-yellow" },
  { img: "/assets/images/icons/multi-color-xerox.png", title: "Multi Color Xerox & Prints", desc: "A4 to A0+ colour printouts. Up to 44\" wide × any length. CAD drawings & project reports.", color: "pop-pink" },
  { img: "/assets/images/icons/spiral-binding.png", title: "Spiral & Wiro Binding", desc: "Thesis, soft binding, hard binding — make your work look professional.", color: "pop-mint" },
  { img: "/assets/images/icons/scanning-plotting.png", title: "Scanning & Plotting", desc: "Colour & B/W scanning. 44\" to any length on varied media.", color: "pop-blue" },
  { img: "/assets/images/icons/lamination.png", title: "Lamination & Delamination", desc: "Hot & cold lamination (matte, glossy, sparkle, 3D). Plus removal from documents, certificates & maps.", color: "pop-orange" },
  { img: "/assets/images/icons/enlargement.png", title: "Enlargement & Reduction", desc: "A4 to A0, A0 to A4 — any size you need.", color: "pop-green" },
] as const;

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="Our daily superpowers" title="The everyday stuff" sub="Walk in with a file. Walk out with magic." color="pop-red" />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
              variants={popIn} custom={i}
            >
              <Sticky color={s.color} rotate={i % 2 === 0 ? -1.5 : 1.5} className="h-full">
                <ClayIcon src={s.img} alt={s.title} />
                <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 font-bold leading-snug">{s.desc}</p>
              </Sticky>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- specialization wheel ---------- */
const WHEEL = [
  { label: "WALLPAPER", color: "#7a3b2e" },
  { label: "ENVELOPES", color: "#e8b84a" },
  { label: "CANVAS", color: "#d23b6a" },
  { label: "BANNER", color: "#2da3c8" },
  { label: "SATIN FLAGS", color: "#6cb84a" },
  { label: "UV & FOILING", color: "#7a4ec8" },
  { label: "STICKERS", color: "#0d0d0d" },
  { label: "PAINTINGS", color: "#e85d3a" },
  { label: "FOAMSHEET", color: "#2f6b3a" },
  { label: "VINYL", color: "#d23b6a" },
  { label: "SIGNAGES", color: "#e8b84a" },
  { label: "STANDEE", color: "#4aa84a" },
  { label: "SIGNAGES 2", color: "#6e6e6e" },
  { label: "POSTER", color: "#0d0d0d" },
  { label: "FLAGS", color: "#7a4ec8" },
];

function Wheel() {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: "var(--pop-yellow)" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <span className="font-marker text-3xl" style={{ color: "var(--pop-red)" }}>spin me!</span>
          <h2 className="mt-2 font-display text-5xl font-bold leading-none sm:text-6xl">
            We specialize<br />in <span style={{ color: "var(--pop-red)" }}>literally</span><br />all of this.
          </h2>
          <p className="mt-6 max-w-md text-lg font-bold">
            Fifteen different things on one little wheel. Pick one. Pick five. Pick all of them. We're game.
          </p>
          <a href="https://wa.me/917276141392" target="_blank" rel="noreferrer"
            className="mt-8 inline-block border-ink shadow-cartoon rounded-2xl bg-white px-6 py-3 font-display text-lg font-bold">
            Send your file on WhatsApp →
          </a>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center overflow-hidden">
          <div className="relative h-[520px] w-[520px] shrink-0 origin-center scale-[0.6] sm:scale-[0.8] md:scale-100">
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              {WHEEL.map((p, i) => {
                const angle = (i / WHEEL.length) * 360;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 origin-left"
                    style={{ transform: `rotate(${angle}deg) translateX(60px) translateY(-50%)` }}
                  >
                    <div
                      className="border-ink shadow-cartoon-sm flex h-12 w-48 items-center justify-end whitespace-nowrap rounded-full pr-5 font-display text-sm font-bold text-white"
                      style={{ background: p.color }}
                    >
                      {p.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
            {/* center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="border-ink shadow-cartoon grid h-24 w-24 place-items-center rounded-full bg-white font-display text-2xl font-bold">
                TCC
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
  { img: "/assets/images/icons/safety-signage.png", title: "Safety Signage", color: "pop-red" },
  { img: "/assets/images/icons/vinyl-foamsheet.png", title: "Vinyl + Foamsheet", color: "pop-blue" },
  { img: "/assets/images/icons/rollup-standee.png", title: "Rollup Standees", color: "pop-orange" },
  { img: "/assets/images/icons/flex-banner.png", title: "Flex / Cloth / Banners", color: "pop-pink" },
  { img: "/assets/images/icons/reflective-vinyl.png", title: "Retro Reflective Vinyl", color: "pop-mint" },
  { img: "/assets/images/icons/glow-dark.png", title: "Glow In The Dark", color: "pop-purple" },
  { img: "/assets/images/icons/print-cut-stickers.png", title: "Print & Cut Stickers", color: "pop-yellow" },
];
const INTERIOR = [
  { img: "/assets/images/icons/canvas-prints.png", title: "Canvas Prints", color: "pop-orange" },
  { img: "/assets/images/icons/wallpapers.png", title: "Customized Wallpapers", color: "pop-purple" },
  { img: "/assets/images/icons/frosted-film.png", title: "Window / Frosted Films", color: "pop-mint" },
  { img: "/assets/images/icons/vinyl-rexine.png", title: "Vinyl / Rexine", color: "pop-pink" },
  { img: "/assets/images/icons/poster-printing.png", title: "Poster Printing", color: "pop-blue" },
  { img: "/assets/images/icons/one-way-vision.png", title: "One Way Vision", color: "pop-green" },
  { img: "/assets/images/icons/monochrome-paintings.png", title: "Monochrome Paintings", color: "pop-red" },
];

function BigStuff() {
  return (
    <section id="big" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="Goes big. Goes loud." title="Industrial applications" sub="From the warehouse floor to the highway billboard." color="pop-blue" />
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {INDUSTRIAL.map((s, i) => <PillCard key={s.title} {...s} i={i} />)}
        </div>

        <div className="mt-16 sm:mt-24">
          <SectionHeader id="interior" kicker="Make any room sing." title="Interior applications" sub="Your walls deserve better." color="pop-purple" />
          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INTERIOR.map((s, i) => <PillCard key={s.title} {...s} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillCard({ img, title, color, i }: { img: string; title: string; color: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05, type: "spring", stiffness: 180, damping: 14 }}
      whileHover={{ y: -6, rotate: 0, scale: 1.04 }}
      className="border-ink shadow-cartoon flex min-w-0 items-center gap-3 rounded-3xl px-4 py-4"
      style={{ background: `var(--${color})` }}
    >
      <ClayIcon src={img} alt={title} size="sm" />
      <span className="min-w-0 font-display text-base font-bold leading-tight sm:text-lg">{title}</span>
    </motion.div>
  );
}


/* ---------- specials strip ---------- */
function Specials() {
  const items = [
    { title: "Stickers", sub: "Any shape. Any size.", img: "/assets/images/icons/stickers.png", color: "pop-red" },
    { title: "Customized Envelopes", sub: "Money & wedding.", img: "/assets/images/icons/envelopes.png", color: "pop-green" },
    { title: "UV & Foiling", sub: "Gold, silver, copper, red, blue, white.", img: "/assets/images/icons/uv-foiling.png", color: "pop-yellow" },
    { title: "CAD Printouts on Laser", sub: "A4 → A0+, up to 44\" any length.", img: "/assets/images/icons/cad-printouts.png", color: "pop-blue" },
    { title: "Ammonia / Blue Prints", sub: "Tracing & garware films.", img: "/assets/images/icons/blueprints.png", color: "pop-purple" },
  ];
  return (
    <section className="paper-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="House specials" title="The fun extras" sub="The stuff people drive across town for." color="pop-pink" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 180 }}
              whileHover={{ y: -8, rotate: -1 }}
              className="border-ink-thick shadow-cartoon-lg relative overflow-hidden rounded-3xl bg-white p-5 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="border-ink inline-block rounded-full px-3 py-1 text-xs font-black uppercase" style={{ background: `var(--${it.color})` }}>
                  Special
                </div>
                <ClayIcon src={it.img} alt={it.title} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">{it.title}</h3>
              <p className="mt-2 text-base font-bold text-muted-foreground sm:text-lg">{it.sub}</p>
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
    { n: "01", t: "Send your file", d: "WhatsApp, email, or just walk in with a pen drive.", emoji: "📱", c: "pop-green" },
    { n: "02", t: "We figure it out", d: "Right paper, right size, right finish — we suggest the best.", emoji: "🧠", c: "pop-yellow" },
    { n: "03", t: "We print it big", d: "Fast machines, friendly humans, UPS backup so nothing stops.", emoji: "🖨️", c: "pop-blue" },
    { n: "04", t: "Pick it up smiling", d: "Or get it delivered. Easy.", emoji: "🎉", c: "pop-pink" },
  ];
  return (
    <section className="py-24" style={{ background: "var(--pop-mint)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader kicker="As easy as 1·2·3·4" title="How it works" sub="No mystery. No forms. Just printing." color="pop-red" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="border-ink-thick shadow-cartoon-lg relative rounded-3xl bg-white p-5 sm:p-7"
            >
              <div className="font-display text-5xl font-bold sm:text-6xl" style={{ color: `var(--${s.c})` }}>{s.n}</div>
              <div className="mt-2 text-3xl sm:text-4xl">{s.emoji}</div>
              <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">{s.t}</h3>
              <p className="mt-1 font-bold">{s.d}</p>
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
        <SectionHeader kicker="Come say hi" title="Visit the shop" sub="Right next to Yeshwant Stadium. You can't miss the red sign." color="pop-orange" />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* hand-drawn map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="border-ink-thick shadow-cartoon-lg overflow-hidden rounded-3xl bg-white p-6 lg:col-span-3"
          >
            <MapDoodle />
          </motion.div>

          {/* contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="border-ink-thick shadow-cartoon-lg rounded-3xl p-7 lg:col-span-2"
            style={{ background: "var(--pop-yellow)" }}
          >
            <h3 className="font-display text-3xl font-bold">True Copy Centre Pvt. Ltd.</h3>
            <p className="mt-2 flex items-start gap-2 font-bold">
              <MapPin className="mt-1 h-5 w-5 shrink-0" />
              58, Yeshwant Stadium, Dhantoli, Nagpur — 12
            </p>

            <div className="mt-6 space-y-3">
              <ContactRow icon={Phone} label="+91 98222 24644" href="tel:+919822224644" />
              <ContactRow icon={Phone} label="+91 73878 89990" href="tel:+917387889990" />
              <ContactRow icon={Phone} label="0712 — 2424644" href="tel:+9107122424644" />
              <ContactRow icon={MessageCircle} label="WhatsApp: 7276141392" href="https://wa.me/917276141392" />
              <ContactRow icon={MailIcon} label="truecopycentre@gmail.com" href="mailto:truecopycentre@gmail.com" />
              <ContactRow icon={Stamp} label="www.truecopycentre.com" href="https://www.truecopycentre.com" />
            </div>

            <div className="mt-6 border-ink rounded-2xl bg-white p-4">
              <div className="font-display text-xl font-bold">⚡ UPS Backup</div>
              <div className="font-bold">We never stop. Power cuts don't slow us down.</div>
            </div>
            <div className="mt-3 border-ink rounded-2xl bg-white p-4">
              <div className="font-display text-xl font-bold">📦 Bulk discounts</div>
              <div className="font-bold">On scanning, plotting & colour printouts.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: typeof Phone; label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="border-ink shadow-cartoon-sm flex items-center gap-3 rounded-2xl bg-white px-4 py-3 font-bold transition hover:-translate-y-0.5 hover:translate-x-0.5">
      <Icon className="h-5 w-5 shrink-0" />
      <span className="truncate">{label}</span>
    </a>
  );
}

function MapDoodle() {
  return (
    <svg viewBox="0 0 600 420" className="w-full">
      <rect x="0" y="0" width="600" height="420" rx="16" fill="#fef9e7" />
      {/* roads */}
      <path d="M 30 80 L 570 80" stroke="var(--ink)" strokeWidth="3" strokeDasharray="6 6" />
      <path d="M 30 360 L 570 360" stroke="var(--ink)" strokeWidth="3" strokeDasharray="6 6" />
      <path d="M 460 20 L 460 400" stroke="var(--ink)" strokeWidth="3" strokeDasharray="6 6" />
      <path d="M 60 20 L 60 400" stroke="var(--ink)" strokeWidth="3" strokeDasharray="6 6" />
      {/* stadium */}
      <ellipse cx="260" cy="220" rx="150" ry="100" fill="#e8f3d8" stroke="var(--ink)" strokeWidth="4" />
      <text x="260" y="225" textAnchor="middle" className="font-display" fontSize="20" fontWeight="700" fill="var(--ink)">Yeshwant Stadium</text>
      {/* surrounding blocks */}
      <g fontSize="11" fontWeight="700" fill="var(--ink)">
        <rect x="80" y="30" width="120" height="40" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <text x="140" y="55" textAnchor="middle">Haldiram's</text>
        <rect x="220" y="30" width="120" height="40" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <text x="280" y="55" textAnchor="middle">Bank of Baroda</text>
        <rect x="360" y="30" width="90" height="40" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <text x="405" y="55" textAnchor="middle">Goel Ganga Mall</text>
        <rect x="475" y="100" width="100" height="80" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <text x="525" y="145" textAnchor="middle">Metro Station</text>
        <rect x="475" y="200" width="100" height="120" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <text x="525" y="265" textAnchor="middle">Metro Ground</text>
        <rect x="80" y="370" width="100" height="35" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <text x="130" y="392" textAnchor="middle">Kothari Hosp.</text>
        <rect x="200" y="370" width="100" height="35" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <text x="250" y="392" textAnchor="middle">Bharuka</text>
        <rect x="320" y="370" width="100" height="35" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <text x="370" y="392" textAnchor="middle">Ganesh Chmbr</text>
      </g>
      {/* route dashes */}
      <motion.path
        d="M 525 250 Q 460 280 380 250 Q 320 230 290 200"
        fill="none" stroke="var(--pop-red)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}
      />
      {/* TCC marker */}
      <g>
        <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <circle cx="290" cy="195" r="22" fill="var(--pop-red)" stroke="var(--ink)" strokeWidth="4" />
          <text x="290" y="200" textAnchor="middle" fontSize="14" fontWeight="800" fill="white">TCC</text>
        </motion.g>
      </g>
    </svg>
  );
}

/* ---------- shared section header ---------- */
function SectionHeader({ kicker, title, sub, color, id }: { kicker: string; title: string; sub: string; color: string; id?: string }) {
  return (
    <div id={id} className="max-w-3xl">
      <motion.span
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="font-marker text-2xl sm:text-3xl" style={{ color: `var(--${color})` }}
      >
        {kicker}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mt-1 font-display text-[2.25rem] font-bold leading-[0.95] sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
        className="mt-3 text-base font-bold text-muted-foreground sm:text-lg"
      >
        {sub}
      </motion.p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t-4 border-ink py-10" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 text-center sm:px-6">
        <div className="font-display text-3xl font-bold">True Copy Centre Pvt. Ltd.</div>
        <div className="font-bold opacity-80">58, Yeshwant Stadium, Dhantoli, Nagpur — 12</div>
        <div className="mt-3 font-marker text-2xl" style={{ color: "var(--pop-yellow)" }}>print anything, anytime, any size ✨</div>
        <div className="mt-4 text-sm opacity-60">© {new Date().getFullYear()} TCC · Made with ink, toner & love.</div>
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
