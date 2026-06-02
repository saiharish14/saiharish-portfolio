import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <div className="rounded-xl hairline bg-surface p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-5">
        <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/15 text-primary shrink-0">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Vignan Foundation for Science, Technology & Research
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                B.Tech, Computer Science & Engineering
              </p>
            </div>
            <div className="text-right">
              <div className="font-mono text-sm text-muted-foreground">2023 — 2027</div>
              <div className="mt-1 text-sm text-foreground">
                CGPA <span className="font-semibold">6.85</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
