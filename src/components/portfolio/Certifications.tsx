import { useCallback, useEffect, useState } from "react";
import { Section } from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Trophy,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  X,
  ExternalLink,
  Star,
} from "lucide-react";

import intelBadge from "@/assets/certs/intel-ai-badge.jpeg.asset.json";
import intelDigital from "@/assets/certs/intel-digital.jpg.asset.json";
import orcadehub from "@/assets/certs/orcadehub-ds.png.asset.json";
import nxtwave from "@/assets/certs/nxtwave-ai.png.asset.json";
import mahotsav from "@/assets/certs/mahotsav.jpg.asset.json";
import vbyld from "@/assets/certs/vbyld.jpg.asset.json";
import promptEng from "@/assets/certs/prompt-engineering.png.asset.json";
import be10x from "@/assets/certs/be10x.jpg.asset.json";
import decodelabs from "@/assets/certs/decodelabs-internship.jpg.asset.json";

type Cert = {
  id: string;
  title: string;
  issuer: string;
  description: string;
  year: string;
  image: string;
  tags: string[];
  category: "internship" | "featured" | "leadership" | "additional";
  mostValuable?: boolean;
};

const certs: Cert[] = [
  {
    id: "decodelabs-internship",
    title: "Full Stack Development Virtual Internship",
    issuer: "DecodeLabs",
    description:
      "Successfully completed a one-month Virtual Internship in Full Stack Development at DecodeLabs, gaining practical experience in modern web development, collaborative project workflows, and real-world software engineering practices. Duration: June 12, 2026 – July 12, 2026 · Issued: July 13, 2026.",
    year: "2026",
    image: decodelabs.url,
    tags: ["Internship", "Full Stack Development", "Web Development"],
    category: "internship",
    mostValuable: true,
  },
  {
    id: "ai-sashakt",
    title: "AI Sashakt Badge",
    issuer: "Intel & INDIAai",
    description:
      "Earned through the Intel and INDIAai initiative, demonstrating foundational knowledge of Artificial Intelligence and emerging technologies.",
    year: "2026",
    image: intelBadge.url,
    tags: ["Featured", "AI", "Certification"],
    category: "featured",
  },
  {
    id: "intel-nlp",
    title: "AI for Future Workforce: Natural Language Processing",
    issuer: "Intel Digital Readiness & Vignan University",
    description:
      "Completed specialized training in Natural Language Processing (NLP) under Intel Digital Readiness and Vignan University, covering language models and AI applications.",
    year: "2026",
    image: intelDigital.url,
    tags: ["Featured", "AI", "NLP"],
    category: "featured",
  },
  {
    id: "orcadehub-ds",
    title: "Data Structures Training",
    issuer: "Orcadehub",
    description:
      "Completed intensive training on Linked Lists, Stacks, Queues, Trees, Graphs, Sorting Algorithms, and problem-solving fundamentals.",
    year: "2025",
    image: orcadehub.url,
    tags: ["Featured", "Data Structures"],
    category: "featured",
  },
  {
    id: "nxtwave-ai",
    title: "AI Workflows & Automation Workshop",
    issuer: "NxtWave",
    description:
      "Participated in hands-on training focused on AI-powered workflow automation and productivity tools.",
    year: "2026",
    image: nxtwave.url,
    tags: ["Featured", "Workshop", "AI"],
    category: "featured",
  },
  {
    id: "mahotsav",
    title: "Mahotsav 2025 — Event Co-ordinator",
    issuer: "Vignan's Foundation",
    description:
      "Served as Event Co-ordinator for Vignan Mahotsav 2025, demonstrating leadership, teamwork, communication, and organizational skills.",
    year: "2025",
    image: mahotsav.url,
    tags: ["Leadership", "Achievement"],
    category: "leadership",
  },
  {
    id: "vbyld",
    title: "Viksit Bharat Young Leaders Dialogue (VBYLD) 2026",
    issuer: "Ministry of Youth Affairs & Sports",
    description:
      "Participated in a national-level youth engagement initiative promoting leadership, awareness, and nation-building activities.",
    year: "2025",
    image: vbyld.url,
    tags: ["Leadership", "National"],
    category: "leadership",
  },
  {
    id: "prompt-eng",
    title: "Prompt Engineering",
    issuer: "Alison",
    description:
      "Completed professional training on prompt design, AI interaction strategies, and effective use of Generative AI systems.",
    year: "2026",
    image: promptEng.url,
    tags: ["Certification", "AI"],
    category: "additional",
  },
  {
    id: "be10x",
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    description:
      "Participated in a practical workshop covering AI tools, ChatGPT, productivity enhancement, coding assistance, and AI-assisted workflows.",
    year: "2026",
    image: be10x.url,
    tags: ["Workshop", "AI"],
    category: "additional",
  },
];

const featured = certs.filter((c) => c.category === "featured");
const leadership = certs.filter((c) => c.category === "leadership");
const additional = certs.filter((c) => c.category === "additional");

const stats = [
  { value: "8+", label: "Certifications Earned" },
  { value: "4+", label: "AI Certifications" },
  { value: "2+", label: "Leadership Achievements" },
  { value: "∞", label: "Continuous Learner" },
];

function tagClass(tag: string) {
  const t = tag.toLowerCase();
  if (t === "featured") return "bg-primary/15 text-primary border-primary/30";
  if (t === "leadership" || t === "national")
    return "bg-amber-400/10 text-amber-300 border-amber-400/30";
  if (t === "achievement") return "bg-emerald-400/10 text-emerald-300 border-emerald-400/30";
  if (t === "ai" || t === "nlp") return "bg-violet-400/10 text-violet-300 border-violet-400/30";
  if (t === "data structures")
    return "bg-cyan-400/10 text-cyan-300 border-cyan-400/30";
  if (t === "workshop") return "bg-sky-400/10 text-sky-300 border-sky-400/30";
  return "bg-muted text-muted-foreground border-border";
}

export function Certifications() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const open = useCallback((id: string) => {
    const idx = certs.findIndex((c) => c.id === id);
    if (idx >= 0) {
      setActiveIdx(idx);
      setZoom(1);
    }
  }, []);
  const close = useCallback(() => setActiveIdx(null), []);
  const next = useCallback(() => {
    setActiveIdx((i) => (i === null ? i : (i + 1) % certs.length));
    setZoom(1);
  }, []);
  const prev = useCallback(() => {
    setActiveIdx((i) => (i === null ? i : (i - 1 + certs.length) % certs.length));
    setZoom(1);
  }, []);

  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIdx, close, next, prev]);

  const active = activeIdx !== null ? certs[activeIdx] : null;

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Training & recognitions."
    >
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl hairline bg-surface p-4 sm:p-5 text-center transition-all hover:border-primary/40 hover:bg-surface-elevated"
          >
            <div className="text-2xl sm:text-3xl font-semibold text-primary">
              {s.value}
            </div>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Featured */}
      <CategoryHeader
        icon={Trophy}
        title="Featured Certifications"
        subtitle="Core technical & AI credentials"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-12">
        {featured.map((c) => (
          <CertCard key={c.id} cert={c} onView={open} prominent />
        ))}
      </div>

      {/* Leadership */}
      <CategoryHeader
        icon={Award}
        title="Leadership & Achievements"
        subtitle="Initiative, teamwork and national engagement"
      />
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {leadership.map((c) => (
          <CertCard key={c.id} cert={c} onView={open} />
        ))}
      </div>

      {/* Additional */}
      <CategoryHeader
        icon={BookOpen}
        title="Additional Learning"
        subtitle="Workshops & continuous upskilling"
      />
      <div className="grid sm:grid-cols-2 gap-5">
        {additional.map((c) => (
          <CertCard key={c.id} cert={c} onView={open} />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-background/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl hairline bg-surface-elevated overflow-hidden flex flex-col"
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 p-4 sm:p-5 border-b border-border">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground truncate">
                    {active.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {active.issuer} · {active.year}
                  </p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    aria-label="Zoom out"
                    onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
                    className="p-2 rounded-md hairline bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Zoom in"
                    onClick={() => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)))}
                    className="p-2 rounded-md hairline bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Close"
                    onClick={close}
                    className="p-2 rounded-md hairline bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative flex-1 overflow-auto bg-background/40 grid place-items-center p-4">
                <img
                  src={active.image}
                  alt={active.title}
                  style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
                  className="max-h-[65vh] w-auto object-contain transition-transform duration-200 select-none"
                  draggable={false}
                />

                <button
                  aria-label="Previous certificate"
                  onClick={prev}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 rounded-full hairline bg-surface/90 backdrop-blur text-foreground hover:bg-surface-elevated transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next certificate"
                  onClick={next}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hairline bg-surface/90 backdrop-blur text-foreground hover:bg-surface-elevated transition"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4 sm:p-5 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {active.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] px-2 py-0.5 rounded-full border ${tagClass(t)}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {activeIdx! + 1} / {certs.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function CategoryHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof Trophy;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

function CertCard({
  cert,
  onView,
  prominent = false,
}: {
  cert: Cert;
  onView: (id: string) => void;
  prominent?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative rounded-2xl hairline bg-surface overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.45)] ${
        cert.mostValuable ? "ring-1 ring-primary/40" : ""
      }`}
    >
      {/* Gradient sheen on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.18),transparent_60%)]" />

      {cert.mostValuable && (
        <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-semibold shadow-lg">
          <Star className="h-3 w-3" /> Most Valuable
        </div>
      )}

      {/* Image preview */}
      <button
        onClick={() => onView(cert.id)}
        className={`relative w-full overflow-hidden bg-background/40 ${
          prominent ? "h-48 sm:h-56" : "h-40 sm:h-44"
        }`}
        aria-label={`Preview ${cert.title}`}
      >
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
          {cert.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className={`text-[10px] px-2 py-0.5 rounded-full border backdrop-blur ${tagClass(t)}`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-background/70 backdrop-blur px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border">
          <Sparkles className="h-3 w-3 text-primary" /> {cert.year}
        </div>
      </button>

      <div className="relative p-5 flex flex-col flex-1">
        <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
          {cert.title}
        </h4>
        <div className="mt-1 text-xs text-muted-foreground">{cert.issuer}</div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {cert.description}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <button
            onClick={() => onView(cert.id)}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition"
          >
            View Certificate <ExternalLink className="h-3.5 w-3.5" />
          </button>
          <div className="flex flex-wrap justify-end gap-1.5">
            {cert.tags.slice(2).map((t) => (
              <span
                key={t}
                className={`text-[10px] px-2 py-0.5 rounded-full border ${tagClass(t)}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
