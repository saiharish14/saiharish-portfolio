import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A short introduction.">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-2 space-y-5 text-[15px] md:text-base text-muted-foreground leading-relaxed">
          <p>
            I'm a Computer Science undergraduate at Vignan Foundation for Science,
            Technology & Research, focused on building clean, responsive web
            applications. My day-to-day is split between the React ecosystem on the
            frontend and Python/Flask on the backend.
          </p>
          <p>
            I enjoy turning ideas into polished interfaces — paying attention to
            spacing, hierarchy, and the small details that make a product feel
            considered. Outside of class, I solve problems on LeetCode and explore new
            tools that help me ship faster.
          </p>
          <p>
            <span className="text-foreground font-medium">Career goal:</span> join a
            product-driven engineering team as a frontend or full-stack intern, learn
            from senior engineers, and contribute to interfaces used by real people.
          </p>
        </div>

        <div className="space-y-6">
          <Block label="Interests">
            Frontend engineering, UI design systems, backend APIs, problem-solving.
          </Block>
          <Block label="Currently exploring">
            React patterns, Tailwind CSS, REST API design, DSA.
          </Block>
          <Block label="Based in">Guntur, Andhra Pradesh — open to relocation.</Block>
        </div>
      </div>
    </Section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-primary font-medium mb-2">
        {label}
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
