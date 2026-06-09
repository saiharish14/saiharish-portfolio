import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Leaf,
  Fuel,
  Stethoscope,
  Home,
  Utensils,
  Star,
  Wrench,
  X,
  CircleDot,
  FolderGit2,
} from "lucide-react";
import { Section } from "./Section";

type Project = {
  title: string;
  bullets: string[];
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: "under-development" | "live";
  repoAvailable?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Crop Disease Prediction System",
    bullets: [
      "Built a machine learning-powered web application for crop disease prediction using environmental and agricultural data.",
      "Developed responsive frontend interfaces and integrated prediction workflows with Flask backend services.",
    ],
    stack: ["Python", "Machine Learning", "Flask", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/saiharish14/crop-disease-prediction",
    demo: "https://crop-disease-prediction-1-gd9f.onrender.com",
    featured: true,
    status: "live",
    repoAvailable: true,
    icon: Leaf,
    gradient: "from-emerald-500/30 via-emerald-400/10 to-transparent",
  },
  {
    title: "Smart Fuel Management System",
    bullets: [
      "Developed an interactive fuel prediction and mileage analysis dashboard using JavaScript and Chart.js.",
      "Created responsive data visualization dashboards with client-side data processing and reporting features.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
    github: "https://github.com/saiharish14/smart-fuel-system",
    demo: "https://smart-fuel.netlify.app/",
    featured: true,
    status: "live",
    repoAvailable: true,
    icon: Fuel,
    gradient: "from-amber-500/30 via-orange-400/10 to-transparent",
  },
  {
    title: "Health Diagnosis System",
    bullets: [
      "Developed an AI-powered healthcare web application for symptom-based health assessment and health score generation.",
      "Implemented hospital recommendation, OP appointment booking, payment verification, and digital receipt generation features.",
      "Designed responsive user interfaces with wellness guidance and appointment history management.",
    ],
    stack: ["Python", "Flask", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/saiharish14/Health-Diagnosis-System",
    demo: "https://health-diagnosis-system-5vx7.onrender.com/",
    status: "live",
    repoAvailable: true,
    icon: Stethoscope,
    gradient: "from-rose-500/30 via-pink-400/10 to-transparent",
  },
  {
    title: "3D House Visualization System",
    bullets: [
      "Developed a web application for interactive 2D and 3D house layout visualization and recommendation generation.",
      "Built dynamic frontend interfaces using JavaScript and JSON-based rendering techniques.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "JSON"],
    github: "https://github.com/saiharish14/house-visualization",
    demo: "https://house-visualization.netlify.app/",
    status: "live",
    repoAvailable: true,
    icon: Home,
    gradient: "from-sky-500/30 via-indigo-400/10 to-transparent",
  },
  {
    title: "Foodie Zone",
    bullets: [
      "Developed a responsive restaurant ordering platform with role-based modules, allowing users to browse menus, explore food categories, and place orders seamlessly.",
      "Designed an interactive user interface using HTML, CSS, and JavaScript, ensuring smooth navigation and an enhanced user experience across devices.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/saiharish14/Foodie-Zone/tree/main/Foodie%20Zone",
    demo: "https://hungryhubresto.ccbp.tech",
    status: "live",
    repoAvailable: true,
    icon: Utensils,
    gradient: "from-fuchsia-500/30 via-purple-400/10 to-transparent",
  },
];

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "3+", label: "Domains Explored" },
  { value: "10+", label: "Technologies Used" },
];

function ProjectCard({ p, onStatus }: { p: Project; onStatus: () => void }) {
  const Icon = p.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl hairline bg-surface transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.45)]"
    >
      {/* Banner */}
      <div className={`relative h-36 sm:h-40 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.18),transparent_60%)]" />
        <div className="absolute inset-0 grid place-items-center">
          <Icon className="h-14 w-14 text-foreground/85 transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {p.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/15 backdrop-blur hairline border-cyan-400/40 px-2 py-0.5 text-[10px] font-medium text-cyan-300">
              <Star className="h-3 w-3" /> Featured
            </span>
          )}
          {p.status === "live" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 backdrop-blur hairline border-emerald-400/40 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
              <CircleDot className="h-3 w-3" /> Live
            </span>
          )}
          {p.status === "under-development" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/15 backdrop-blur hairline border-orange-400/40 px-2 py-0.5 text-[10px] font-medium text-orange-300">
              <Wrench className="h-3 w-3" /> In Development
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {p.title}
          </h3>
        </div>
        {p.repoAvailable && (
          <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-md bg-primary/10 hairline border-primary/30 px-2 py-0.5 text-[10px] font-medium text-primary">
            <FolderGit2 className="h-3 w-3" /> Repository Available
          </span>
        )}
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-background/40 hairline px-2 py-0.5 text-xs font-mono text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Spacer pushes actions to the bottom */}
        <div className="mt-auto pt-6">
          <div className="flex items-center gap-3 text-sm pt-4 border-t border-border/60">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md hairline px-3 py-1.5 text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 text-primary hairline border-primary/30 px-3 py-1.5 hover:bg-primary/20 transition"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            {p.status === "under-development" && (
              <button
                type="button"
                onClick={onStatus}
                className="inline-flex items-center gap-1.5 rounded-md hairline px-3 py-1.5 text-orange-300 hover:bg-surface-elevated transition"
              >
                <Wrench className="h-4 w-4" /> Project Status
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [statusOpen, setStatusOpen] = useState(false);

  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects."
      description="A few things I've built while learning to ship real software."
    >
      {/* Stats */}
      <div className="mb-10 grid grid-cols-3 gap-3 sm:gap-6 rounded-2xl hairline bg-surface/60 p-5 sm:p-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              {s.value}
            </div>
            <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* First row: 3 cards on desktop */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {firstRow.map((p) => (
          <ProjectCard key={p.title} p={p} onStatus={() => setStatusOpen(true)} />
        ))}
      </div>

      {/* Second row: 2 cards centered on desktop (same width as first-row cards) */}
      <div className="mt-5 md:mt-6 grid sm:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6">
        {secondRow.map((p, i) => (
          <div
            key={p.title}
            className={
              i === 0
                ? "lg:col-span-2 lg:col-start-2"
                : "lg:col-span-2"
            }
          >
            <ProjectCard p={p} onStatus={() => setStatusOpen(true)} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {statusOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/70 backdrop-blur-sm p-4"
            onClick={() => setStatusOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl hairline bg-surface-elevated p-6 shadow-2xl"
            >
              <button
                aria-label="Close"
                onClick={() => setStatusOpen(false)}
                className="absolute top-3 right-3 rounded-md p-1.5 text-muted-foreground hover:bg-surface hover:text-foreground transition"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-500/15 text-orange-300">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    🚧 Project Under Development
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Backend integration is currently under development. Source
                    code has not been published yet.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
