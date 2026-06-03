import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sprout,
  Fuel,
  HeartPulse,
  Home,
  UtensilsCrossed,
  Star,
  Wrench,
  X,
} from "lucide-react";
import { Section } from "./Section";

type Project = {
  title: string;
  bullets: string[];
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: "under-development";
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
    stack: ["Python", "Machine Learning", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/saiharish14/Crop-Disease-Prediction",
    featured: true,
    icon: Sprout,
    gradient: "from-emerald-500/30 via-emerald-400/10 to-transparent",
  },
  {
    title: "Smart Fuel Management System",
    bullets: [
      "Developed an interactive fuel prediction and mileage analysis dashboard using JavaScript and Chart.js.",
      "Created responsive data visualization dashboards with client-side data processing and reporting features.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
    demo: "https://smart-fuel.netlify.app/",
    featured: true,
    icon: Fuel,
    gradient: "from-amber-500/30 via-orange-400/10 to-transparent",
  },
  {
    title: "Health Diagnosis System",
    bullets: [
      "Developed a full-stack healthcare web application for disease prediction and appointment management.",
      "Designed responsive interfaces and REST API-based communication between frontend and backend modules.",
    ],
    stack: ["Python", "Flask", "SQLite", "HTML5", "CSS3", "JavaScript"],
    status: "under-development",
    icon: HeartPulse,
    gradient: "from-rose-500/30 via-pink-400/10 to-transparent",
  },
  {
    title: "3D House Visualization System",
    bullets: [
      "Developed a web application for interactive 2D and 3D house layout visualization and recommendation generation.",
      "Built dynamic frontend interfaces using JavaScript and JSON-based rendering techniques.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "JSON"],
    demo: "https://house-visualization.netlify.app/",
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
    demo: "https://hungryhubresto.ccbp.tech",
    icon: UtensilsCrossed,
    gradient: "from-fuchsia-500/30 via-purple-400/10 to-transparent",
  },
];

export function Projects() {
  const [statusOpen, setStatusOpen] = useState(false);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects."
      description="A few things I've built while learning to ship real software."
    >
      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl hairline bg-surface transition-all duration-300 hover:border-primary/40 hover:shadow-[0_10px_40px_-12px_hsl(var(--primary)/0.35)]"
            >
              {/* Banner */}
              <div className={`relative h-36 sm:h-40 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.18),transparent_60%)]" />
                <div className="absolute inset-0 grid place-items-center">
                  <Icon className="h-14 w-14 text-foreground/80 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute top-3 left-3 flex gap-2">
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-background/70 backdrop-blur hairline px-2 py-0.5 text-[10px] font-medium text-foreground">
                      <Star className="h-3 w-3 text-primary" /> Featured
                    </span>
                  )}
                  {p.status === "under-development" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-background/70 backdrop-blur hairline px-2 py-0.5 text-[10px] font-medium text-amber-400">
                      <Wrench className="h-3 w-3" /> In Development
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
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

                <div className="mt-6 flex items-center gap-3 text-sm pt-4 border-t border-border/60">
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
                      onClick={() => setStatusOpen(true)}
                      className="inline-flex items-center gap-1.5 rounded-md hairline px-3 py-1.5 text-amber-400 hover:bg-surface-elevated transition"
                    >
                      <Wrench className="h-4 w-4" /> Project Status
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
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
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber-500/15 text-amber-400">
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
