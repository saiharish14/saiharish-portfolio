import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { title: "AI Workflows & Automation Workshop", issuer: "NxtWave" },
  { title: "AI Sashakt Badge", issuer: "Intel & INDIAai" },
  { title: "Data Structures Training", issuer: "Orcadehub" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Training & recognitions.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div
            key={c.title}
            className="rounded-xl hairline bg-surface p-5 flex items-start gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary shrink-0">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground leading-snug">
                {c.title}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
