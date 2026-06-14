import { Section } from "./Section";
import { GraduationCap, BookOpen, School } from "lucide-react";
import { motion } from "framer-motion";

type EduItem = {
  icon: typeof GraduationCap;
  title: string;
  institution: string;
  duration: string;
  score: string;
  scoreLabel: string;
  description: string;
  current?: boolean;
};

const items: EduItem[] = [
  {
    icon: GraduationCap,
    title: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Vignan's Foundation for Science, Technology & Research",
    duration: "2023 — 2027",
    score: "7.32 / 10",
    scoreLabel: "CGPA",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science and Engineering with a focus on software development, web technologies, data structures, algorithms, and real-world project development.",
    current: true,
  },
  {
    icon: BookOpen,
    title: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    institution: "Narendra Defence Academy",
    duration: "2021 — 2023",
    score: "82.8%",
    scoreLabel: "Percentage",
    description:
      "Completed higher secondary education with a strong foundation in mathematics, physics, and analytical problem-solving.",
  },
  {
    icon: School,
    title: "Secondary School (SSC)",
    institution: "Sri Chaitanya School",
    duration: "2020 — 2021",
    score: "98%",
    scoreLabel: "Percentage",
    description:
      "Successfully completed secondary education with excellent academic performance and strong fundamentals.",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

        <ol className="space-y-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                className="relative pl-14 md:pl-16"
              >
                {/* Node */}
                <div className="absolute left-0 top-1.5 grid h-9 w-9 md:h-10 md:w-10 place-items-center rounded-full bg-surface hairline text-primary shadow-[0_0_0_4px_hsl(var(--background))]">
                  <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" />
                </div>

                <div className="group rounded-xl hairline bg-surface p-5 md:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface-elevated hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-20px_hsl(var(--primary)/0.4)]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base md:text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 text-primary px-2.5 py-0.5 text-[11px] font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                            Current Education
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.institution}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-xs text-muted-foreground">
                        {item.duration}
                      </div>
                      <div className="mt-1 text-sm text-foreground">
                        <span className="text-muted-foreground">{item.scoreLabel} </span>
                        <span className="font-semibold">{item.score}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
