import { Section } from "./Section";
import { Github, Linkedin, Code2, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Active Platforms", value: "3+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Computer Science & Engineering", value: "B.Tech" },
];

const profiles = [
  {
    name: "GitHub",
    subtitle: "Open Source & Projects",
    description: "Explore my repositories, project source code, and development journey.",
    button: "View GitHub",
    href: "https://github.com/saiharish14",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    subtitle: "Professional Network",
    description: "Connect with me professionally and follow my career journey.",
    button: "Connect on LinkedIn",
    href: "https://l1nk.dev/vvmopli",
    Icon: Linkedin,
  },
  {
    name: "LeetCode",
    subtitle: "Problem Solving & DSA",
    description: "View my coding practice, algorithm solutions, and problem-solving progress.",
    button: "View LeetCode",
    href: "https://leetcode.com/u/saiharish14/",
    Icon: Code2,
  },
];

export function CodingProfiles() {
  return (
    <Section id="profiles" eyebrow="Profiles" title="Find me online.">
      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
      >
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2 rounded-xl border border-border/40 bg-surface/60 backdrop-blur-sm px-5 py-3 text-center"
          >
            <span className="text-lg font-bold text-primary">{value}</span>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Profile cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {profiles.map(({ name, subtitle, description, button, href, Icon }, i) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            className="group flex flex-col rounded-2xl border border-border/40 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-elevated hover:shadow-[0_0_24px_-6px_rgba(0,0,0,0.3)] hover:border-primary/20"
          >
            {/* Icon + name row */}
            <div className="flex items-start justify-between mb-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Title & subtitle */}
            <div className="mb-3">
              <h3 className="text-base font-semibold text-foreground">{name}</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-primary mt-0.5">
                {subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {description}
            </p>

            {/* CTA button */}
            <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
              <span>{button}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
