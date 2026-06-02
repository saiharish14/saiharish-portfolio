import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";

type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Smart Fuel Management System",
    description:
      "A system to track fuel usage, monitor consumption patterns, and generate insights for efficient management.",
    stack: ["Python", "Flask", "MySQL", "HTML", "CSS"],
    github: "https://github.com/saiharish14",
  },
  {
    title: "Crop Disease Prediction System",
    description:
      "Predicts crop diseases from input data to help farmers take timely action and improve yield.",
    stack: ["Python", "Flask", "Machine Learning"],
    github: "https://github.com/saiharish14",
  },
  {
    title: "Health Diagnosis System",
    description:
      "A web tool that suggests likely conditions based on user-reported symptoms, with a clean form-driven UI.",
    stack: ["Python", "Flask", "SQLite"],
    github: "https://github.com/saiharish14",
  },
  {
    title: "3D House Visualization System",
    description:
      "Interactive interface for visualizing residential layouts in 3D to assist in planning and review.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/saiharish14",
  },
  {
    title: "Foodie Zone",
    description:
      "A responsive food-ordering frontend with menu browsing, cart, and a polished mobile experience.",
    stack: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/saiharish14",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects."
      description="A few things I've built while learning to ship real software."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col rounded-xl hairline bg-surface p-6 hover:bg-surface-elevated transition-colors"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {p.description}
            </p>

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

            <div className="mt-6 flex items-center gap-4 text-sm">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
