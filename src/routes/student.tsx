import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, BookOpen, Palette, Ruler } from "lucide-react";
import { Nav, UtilityBar } from "@/components/site-nav";
import stu1 from "@/assets/stu-1.jpg";
import stu2 from "@/assets/stu-2.jpg";
import stu3 from "@/assets/stu-3.jpg";
import stu4 from "@/assets/stu-4.jpg";
import svcBinding from "@/assets/svc-binding.jpg";
import svcScaling from "@/assets/svc-scaling.jpg";

export const Route = createFileRoute("/student")({
  head: () => ({
    meta: [
      { title: "Student Work — True Copy Centre, Nagpur" },
      { name: "description", content: "Thesis printing, jury sheets, portfolios and models — for architecture, design, fashion & engineering students across Nagpur." },
      { property: "og:title", content: "Student Work · True Copy Centre" },
      { property: "og:description", content: "Thesis, portfolios, jury sheets — printed the way jurors expect them." },
    ],
  }),
  component: StudentPage,
});

const WORKS = [
  { img: stu1, title: "B.Arch Thesis · VNIT", tag: "Hardbound · A3 · 240 pgs", note: "Landscape thesis, offset-quality inside, cloth-wrap hardcover with foil title." },
  { img: stu2, title: "Design Portfolio · NID", tag: "Loose-leaf · A3 · pantone match", note: "Curated portfolio pages with color-swatch consistency across 40 sheets." },
  { img: stu3, title: "Fashion Jury Board · LISAA", tag: "Foamcore mount · 30x40", note: "Editorial illustration board mounted on foam, matte laminated." },
  { img: stu4, title: "Urban Design Sheet · IPS", tag: "Wide-format · A0 ×6", note: "Six-sheet A0 plot set with 1:200 site layouts and section studies." },
];

const HELPS = [
  { icon: BookOpen, t: "Thesis binding", d: "Spiral, wiro, soft & hardcover — jury-ready in under 24 hours." },
  { icon: Palette, t: "Jury sheets & posters", d: "Colour-accurate A2/A1/A0 prints on paper, tracing, canvas or foam." },
  { icon: Ruler, t: "Scaled drawings", d: "Precise scale printing A4↔A0 for architecture & planning." },
  { icon: GraduationCap, t: "Portfolios", d: "Curated print portfolios that stay consistent from cover to page 80." },
];

function StudentPage() {
  return (
    <main className="overflow-x-clip">
      <UtilityBar />
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle, var(--teal), transparent 60%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="hairline inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--teal)" }} />
              For students · Nagpur
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6.5vw,5rem)] font-medium leading-[0.98] tracking-tight">
              Your thesis, your portfolio — <em className="italic" style={{ color: "var(--brick)" }}>jury-ready</em>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Two decades of printing thesis books, jury sheets and portfolios for
              architecture, design, fashion and engineering students across Nagpur.
              Walk in the night before. We've done it a thousand times.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ivory transition hover:translate-y-[-2px]"
                style={{ background: "var(--brick)" }}>
                Get student pricing <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/917276141392" target="_blank" rel="noreferrer"
                className="hairline-strong inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium transition hover:bg-ink hover:text-ivory">
                WhatsApp your file
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="hairline-strong shadow-edge overflow-hidden rounded-2xl bg-paper">
              <img src={stu1} alt="Student holding a bound architecture thesis" loading="eager" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What we help with */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HELPS.map((h) => (
              <div key={h.t} className="hairline rounded-2xl bg-paper p-6">
                <h.icon className="h-6 w-6" style={{ color: "var(--brick)" }} />
                <div className="mt-4 font-display text-xl font-medium">{h.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-y bg-[color-mix(in_oklab,var(--ochre)_8%,var(--ivory))] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Recent student work</div>
            <h2 className="mt-3 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
              A shelf full of <em className="italic" style={{ color: "var(--brick)" }}>submitted</em>, graded, and celebrated.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {WORKS.map((w, i) => (
              <motion.figure
                key={w.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="hairline-strong group overflow-hidden rounded-2xl bg-paper shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={w.img} alt={w.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 rounded-md bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ivory">
                    {w.tag}
                  </div>
                </div>
                <figcaption className="p-6">
                  <div className="font-display text-2xl font-medium">{w.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{w.note}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Two supporting images */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          <div className="hairline-strong overflow-hidden rounded-2xl">
            <img src={svcBinding} alt="Freshly bound thesis books" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="hairline-strong overflow-hidden rounded-2xl">
            <img src={svcScaling} alt="Scaled architectural drawing" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-ivory sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
            Deadline tomorrow? <em className="italic" style={{ color: "var(--ochre)" }}>Come tonight.</em>
          </h2>
          <p className="mt-5 text-ivory/70">We stay open when your jury is a morning away.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/917276141392" target="_blank" rel="noreferrer" className="rounded-full bg-ochre px-6 py-3 text-sm font-medium text-ink" style={{ background: "var(--ochre)" }}>WhatsApp us</a>
            <Link to="/" hash="contact" className="rounded-full border border-ivory/30 px-6 py-3 text-sm font-medium">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
