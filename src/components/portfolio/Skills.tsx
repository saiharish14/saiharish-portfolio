import { Section } from "./Section";

const groups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python", "JavaScript", "HTML", "CSS"] },
  { title: "Frontend", items: ["React.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", items: ["Flask", "REST APIs"] },
  { title: "Database", items: ["MySQL", "SQLite"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with."
      description="A focused stack across the frontend, backend, and developer tooling I use day-to-day."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-xl hairline bg-surface p-5 hover:bg-surface-elevated transition-colors"
          >
            <div className="text-xs uppercase tracking-[0.18em] text-primary font-medium mb-4">
              {g.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md hairline bg-background/40 px-2.5 py-1 text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
